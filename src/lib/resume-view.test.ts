import { afterEach, describe, expect, it, vi } from "vitest";
import { getCoverImage, getResumeImageUrl } from "@website/lib";
import {
  formatDateRange,
  toHighlights,
  toKeywords,
} from "@website/lib/resume-view";

const CLOUDFRONT = "https://d1ljophloyhryl.cloudfront.net";

afterEach(() => {
  vi.unstubAllEnvs();
});

describe("getResumeImageUrl", () => {
  it("falls back to the local avatar when no src is given", () => {
    vi.stubEnv("NEXT_PUBLIC_AWS_CLOUDFRONT_URL", CLOUDFRONT);
    expect(getResumeImageUrl(undefined)).toBe("/avatar.png");
    expect(getResumeImageUrl("")).toBe("/avatar.png");
  });

  it("prefixes a relative src with the CloudFront origin", () => {
    vi.stubEnv("NEXT_PUBLIC_AWS_CLOUDFRONT_URL", CLOUDFRONT);
    expect(getResumeImageUrl("/assets/resume/avatar.png")).toBe(
      `${CLOUDFRONT}/assets/resume/avatar.png`,
    );
  });

  it("normalises a missing leading slash", () => {
    vi.stubEnv("NEXT_PUBLIC_AWS_CLOUDFRONT_URL", CLOUDFRONT);
    expect(getResumeImageUrl("assets/resume/avatar.png")).toBe(
      `${CLOUDFRONT}/assets/resume/avatar.png`,
    );
  });

  it("accepts absolute URLs on the configured CloudFront host", () => {
    vi.stubEnv("NEXT_PUBLIC_AWS_CLOUDFRONT_URL", CLOUDFRONT);
    const url = `${CLOUDFRONT}/assets/resume/avatar.png`;
    expect(getResumeImageUrl(url)).toBe(url);
  });

  it("rejects untrusted, insecure, and spoofed absolute sources", () => {
    vi.stubEnv("NEXT_PUBLIC_AWS_CLOUDFRONT_URL", CLOUDFRONT);
    for (const url of [
      "https://example.com/photo.png",
      "http://d1ljophloyhryl.cloudfront.net/photo.png",
      "https://d1ljophloyhryl.cloudfront.net.evil.test/photo.png",
      "//example.com/photo.png",
      "javascript:alert(1)",
    ]) {
      expect(getResumeImageUrl(url)).toBe("/avatar.png");
    }
  });

  it("falls back when no CloudFront origin is configured", () => {
    vi.stubEnv("NEXT_PUBLIC_AWS_CLOUDFRONT_URL", "");
    expect(getResumeImageUrl("/assets/resume/avatar.png")).toBe("/avatar.png");
  });

  it("falls back for path traversal", () => {
    vi.stubEnv("NEXT_PUBLIC_AWS_CLOUDFRONT_URL", CLOUDFRONT);
    expect(getResumeImageUrl("/assets/../secret.png")).toBe("/avatar.png");
    expect(getResumeImageUrl("/assets/%2e%2e/secret.png")).toBe("/avatar.png");
  });
});

describe("getCoverImage", () => {
  it("accepts verified Goodreads cover hosts", () => {
    const url = "https://i.gr-assets.com/images/S/cover.jpg";
    expect(getCoverImage(url)).toBe(url);
  });

  it("falls back for missing or unexpected hosts", () => {
    expect(getCoverImage(undefined)).toBe("/avatar.png");
    expect(getCoverImage("https://example.com/cover.jpg")).toBe("/avatar.png");
    expect(getCoverImage("http://i.gr-assets.com/images/S/cover.jpg")).toBe(
      "/avatar.png",
    );
  });
});

describe("resume-view helpers", () => {
  it("normalises object highlights to strings", () => {
    expect(toHighlights([{ value: "Built X" }, { value: "Led Y" }])).toEqual([
      "Built X",
      "Led Y",
    ]);
  });

  it("splits comma-separated skill keywords", () => {
    expect(toKeywords("AWS, Terraform")).toEqual(["AWS", " Terraform"]);
  });

  it("renders Present for open-ended ranges", () => {
    expect(formatDateRange("2020-01-01", undefined)).toMatch(/Present$/);
  });
});
