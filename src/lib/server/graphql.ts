import "server-only";
import type { DocumentNode } from "graphql";

const DEFAULT_TIMEOUT_MS = 8000;
const MAX_DETAIL_LENGTH = 500;

export type ExternalServiceErrorReason =
  | "unconfigured"
  | "timeout"
  | "network"
  | "http"
  | "invalid-json"
  | "graphql"
  | "malformed";

export type GraphQLLevelError = {
  message: string;
  path?: (string | number)[];
};

type GraphQLPayload<T> = {
  data?: T | null;
  errors?: GraphQLLevelError[];
};

export type GraphQLRequestOptions = {
  variables?: Record<string, unknown>;
  timeoutMs?: number;
  /**
   * Seconds to cache the response for. Maps to the Next.js `fetch` cache
   * policy (`next: { revalidate }`). Omit for the Next.js default policy.
   */
  revalidateSeconds?: number | false;
};

/**
 * Error raised at the external-service boundary. Carries structured context so
 * server logs can be useful without leaking credentials or personal data.
 */
export class ExternalServiceError extends Error {
  readonly service: string;
  readonly reason: ExternalServiceErrorReason;
  readonly status?: number;
  readonly detail?: string;

  constructor(
    service: string,
    reason: ExternalServiceErrorReason,
    message: string,
    options: { status?: number; detail?: string; cause?: unknown } = {},
  ) {
    super(message, { cause: options.cause });
    this.name = "ExternalServiceError";
    this.service = service;
    this.reason = reason;
    this.status = options.status;
    this.detail = options.detail;
  }
}

function truncate(value: string): string {
  return value.length > MAX_DETAIL_LENGTH
    ? `${value.slice(0, MAX_DETAIL_LENGTH)}…`
    : value;
}

function serializeBody(
  query: DocumentNode,
  variables?: Record<string, unknown>,
): string {
  const body = query.loc?.source.body;
  if (!body) {
    throw new ExternalServiceError(
      "graphql",
      "malformed",
      "GraphQL query has no document body",
    );
  }
  return JSON.stringify({ query: body, variables });
}

/**
 * POSTs a GraphQL query and returns the typed `data` payload.
 *
 * Throws {@link ExternalServiceError} for every failure mode: missing
 * configuration, network failures, timeouts, non-2xx responses, unparseable
 * bodies, GraphQL `errors` returned alongside HTTP 200, and missing `data`.
 */
export async function requestGraphQL<T>(
  query: DocumentNode,
  options: GraphQLRequestOptions = {},
): Promise<T> {
  const host = process.env.NEXT_PUBLIC_GRAPHQL_SERVER_HOST;
  if (!host) {
    throw new ExternalServiceError(
      "graphql",
      "unconfigured",
      "NEXT_PUBLIC_GRAPHQL_SERVER_HOST is not set",
    );
  }

  const controller = new AbortController();
  const timeoutMs = options.timeoutMs ?? DEFAULT_TIMEOUT_MS;
  const timeout = setTimeout(() => controller.abort(), timeoutMs);

  let response: Response;
  try {
    response = await fetch(`${host}/api/graphql`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: serializeBody(query, options.variables),
      signal: controller.signal,
      ...(options.revalidateSeconds === undefined
        ? {}
        : { next: { revalidate: options.revalidateSeconds } }),
    });
  } catch (error) {
    if (controller.signal.aborted) {
      throw new ExternalServiceError(
        "graphql",
        "timeout",
        `GraphQL request timed out after ${timeoutMs}ms`,
        { cause: error },
      );
    }
    throw new ExternalServiceError(
      "graphql",
      "network",
      "GraphQL request could not reach the server",
      { cause: error },
    );
  } finally {
    clearTimeout(timeout);
  }

  const rawBody = await response.text().catch(() => "");

  if (!response.ok) {
    throw new ExternalServiceError(
      "graphql",
      "http",
      `GraphQL responded with HTTP ${response.status}`,
      { status: response.status, detail: truncate(rawBody) },
    );
  }

  let payload: GraphQLPayload<T>;
  try {
    payload = JSON.parse(rawBody) as GraphQLPayload<T>;
  } catch (error) {
    throw new ExternalServiceError(
      "graphql",
      "invalid-json",
      "GraphQL response was not valid JSON",
      { detail: truncate(rawBody), cause: error },
    );
  }

  if (Array.isArray(payload.errors) && payload.errors.length > 0) {
    throw new ExternalServiceError(
      "graphql",
      "graphql",
      "GraphQL response contained errors",
      { detail: truncate(payload.errors.map((e) => e.message).join("; ")) },
    );
  }

  if (payload.data === undefined || payload.data === null) {
    throw new ExternalServiceError(
      "graphql",
      "malformed",
      "GraphQL response did not contain data",
    );
  }

  return payload.data;
}
