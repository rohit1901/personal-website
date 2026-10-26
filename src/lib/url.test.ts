import { describe, expect, it } from "vitest";
import { isSafeExternalUrl, toSafeExternalUrl } from "@website/lib/url";

describe("toSafeExternalUrl", () => {
  it("accepts https URLs", () => {
    expect(toSafeExternalUrl("https://example.com/path?q=1")).toBe(
      "https://example.com/path?q=1",
    );
  });

  it("rejects insecure and non-web schemes", () => {
    expect(toSafeExternalUrl("http://example.com")).toBeUndefined();
    expect(toSafeExternalUrl("javascript:alert(1)")).toBeUndefined();
    expect(toSafeExternalUrl("data:text/html,hello")).toBeUndefined();
    expect(toSafeExternalUrl("mailto:hello@example.com")).toBeUndefined();
  });

  it("rejects credentials and non-default ports", () => {
    expect(
      toSafeExternalUrl("https://user:pass@example.com/path"),
    ).toBeUndefined();
    expect(toSafeExternalUrl("https://example.com:8443/path")).toBeUndefined();
  });

  it("enforces the host allowlist, including subdomains", () => {
    expect(
      toSafeExternalUrl("https://rohitkhanduri.substack.com/p/hello", {
        allowedHosts: ["rohitkhanduri.substack.com"],
      }),
    ).toBe("https://rohitkhanduri.substack.com/p/hello");
    expect(
      toSafeExternalUrl("https://notes.rohitkhanduri.substack.com/p/hello", {
        allowedHosts: ["rohitkhanduri.substack.com"],
      }),
    ).toBe("https://notes.rohitkhanduri.substack.com/p/hello");
  });

  it("does not accept lookalike hostnames", () => {
    expect(
      toSafeExternalUrl("https://evil-rohitkhanduri.substack.com/p/hello", {
        allowedHosts: ["rohitkhanduri.substack.com"],
      }),
    ).toBeUndefined();
    expect(
      toSafeExternalUrl(
        "https://rohitkhanduri.substack.com.evil.test/p/hello",
        {
          allowedHosts: ["rohitkhanduri.substack.com"],
        },
      ),
    ).toBeUndefined();
  });

  it("rejects non-string and empty values", () => {
    expect(toSafeExternalUrl(undefined)).toBeUndefined();
    expect(toSafeExternalUrl(null)).toBeUndefined();
    expect(toSafeExternalUrl("   ")).toBeUndefined();
  });

  it("exposes a boolean guard", () => {
    expect(isSafeExternalUrl("https://example.com")).toBe(true);
    expect(isSafeExternalUrl("http://example.com")).toBe(false);
  });
});
