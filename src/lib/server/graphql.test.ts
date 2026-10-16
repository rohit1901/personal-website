import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import gql from "graphql-tag";
import {
  ExternalServiceError,
  requestGraphQL,
} from "@website/lib/server/graphql";

const QUERY = gql`
  query Ping {
    ping
  }
`;

const ORIGINAL_HOST = process.env.NEXT_PUBLIC_GRAPHQL_SERVER_HOST;

function mockFetch(implementation: typeof fetch) {
  vi.stubGlobal("fetch", vi.fn(implementation));
}

beforeEach(() => {
  process.env.NEXT_PUBLIC_GRAPHQL_SERVER_HOST = "https://example.test";
});

afterEach(() => {
  vi.unstubAllGlobals();
  process.env.NEXT_PUBLIC_GRAPHQL_SERVER_HOST = ORIGINAL_HOST;
});

describe("requestGraphQL", () => {
  it("throws when the host is not configured", async () => {
    process.env.NEXT_PUBLIC_GRAPHQL_SERVER_HOST = "";
    await expect(requestGraphQL(QUERY)).rejects.toMatchObject({
      reason: "unconfigured",
    });
  });

  it("returns data on success", async () => {
    mockFetch(
      async () => new Response(JSON.stringify({ data: { ping: "pong" } })),
    );
    await expect(requestGraphQL(QUERY)).resolves.toEqual({ ping: "pong" });
  });

  it("throws on a non-2xx response", async () => {
    mockFetch(async () => new Response("Bad Request", { status: 400 }));
    const error = (await requestGraphQL(QUERY).catch(
      (e) => e,
    )) as ExternalServiceError;
    expect(error).toBeInstanceOf(ExternalServiceError);
    expect(error.reason).toBe("http");
    expect(error.status).toBe(400);
  });

  it("throws when the body is not JSON", async () => {
    mockFetch(async () => new Response("<!DOCTYPE html>", { status: 200 }));
    await expect(requestGraphQL(QUERY)).rejects.toMatchObject({
      reason: "invalid-json",
    });
  });

  it("throws when GraphQL errors accompany HTTP 200", async () => {
    mockFetch(
      async () =>
        new Response(
          JSON.stringify({ errors: [{ message: "Cannot query field" }] }),
          { status: 200 },
        ),
    );
    const error = (await requestGraphQL(QUERY).catch(
      (e) => e,
    )) as ExternalServiceError;
    expect(error.reason).toBe("graphql");
    expect(error.detail).toContain("Cannot query field");
  });

  it("throws when data is missing", async () => {
    mockFetch(async () => new Response(JSON.stringify({}), { status: 200 }));
    await expect(requestGraphQL(QUERY)).rejects.toMatchObject({
      reason: "malformed",
    });
  });

  it("throws a timeout error when the request aborts", async () => {
    mockFetch(
      (_input, init) =>
        new Promise<Response>((_resolve, reject) => {
          init?.signal?.addEventListener("abort", () =>
            reject(new DOMException("Aborted", "AbortError")),
          );
        }),
    );
    await expect(
      requestGraphQL(QUERY, { timeoutMs: 10 }),
    ).rejects.toMatchObject({ reason: "timeout" });
  });
});
