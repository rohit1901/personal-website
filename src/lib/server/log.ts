import "server-only";
import { ExternalServiceError } from "@website/lib/server/graphql";

/**
 * Logs a structured, secret-free summary of an external request failure.
 * Full error context stays on the server; only the reason/status are emitted.
 */
export function logExternalFailure(service: string, error: unknown): void {
  if (error instanceof ExternalServiceError) {
    console.error(`[${service}] external request failed`, {
      service: error.service,
      reason: error.reason,
      status: error.status,
      message: error.message,
      detail: error.detail,
    });
    return;
  }

  console.error(`[${service}] external request failed`, {
    service,
    reason: "unknown",
    message: error instanceof Error ? error.message : String(error),
  });
}
