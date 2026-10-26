import { afterEach, describe, expect, it, vi } from "vitest";
import { ExternalServiceError } from "@website/lib/server/graphql";
import { logExternalFailure } from "@website/lib/server/log";

afterEach(() => {
  vi.restoreAllMocks();
});

describe("logExternalFailure", () => {
  it("does not log the upstream response body", () => {
    const spy = vi.spyOn(console, "error").mockImplementation(() => {});

    logExternalFailure(
      "graphql",
      new ExternalServiceError(
        "graphql",
        "http",
        "GraphQL responded with HTTP 500",
        {
          status: 500,
          detail: "internal host and personal data",
        },
      ),
    );

    const logged = JSON.stringify(spy.mock.calls);
    expect(logged).toContain("graphql");
    expect(logged).toContain("http");
    expect(logged).toContain("500");
    expect(logged).not.toContain("internal host and personal data");
  });

  it("does not log arbitrary error messages", () => {
    const spy = vi.spyOn(console, "error").mockImplementation(() => {});

    logExternalFailure("articles", new Error("token=super-secret"));

    const logged = JSON.stringify(spy.mock.calls);
    expect(logged).toContain("Error");
    expect(logged).not.toContain("super-secret");
  });
});
