import "server-only";
import { ExternalServiceError } from "@website/lib/server/graphql";

/**
 * Logs a structured, secret-free summary of an external request failure.
 *
 * Upstream response bodies are deliberately never logged: they can contain
 * personal data, internal hostnames, or values echoed back from the request.
 * The full detail remains on the error object for local debugging.
 */
export function logExternalFailure(service: string, error: unknown): void {
  if (error instanceof ExternalServiceError) {
    console.error(`[${service}] external request failed`, {
      service: error.service,
      reason: error.reason,
      status: error.status,
      message: error.message,
    });
    return;
  }

  console.error(`[${service}] external request failed`, {
    service,
    reason: "unknown",
    errorName: error instanceof Error ? error.name : typeof error,
  });
}
