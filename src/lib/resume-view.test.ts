import { afterEach, describe, expect, it, vi } from "vitest";
import { getResumeImageUrl } from "@website/lib";
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

  it("leaves absolute URLs untouched", () => {
    vi.stubEnv("NEXT_PUBLIC_AWS_CLOUDFRONT_URL", CLOUDFRONT);
    const url = "https://example.com/photo.png";
    expect(getResumeImageUrl(url)).toBe(url);
  });

  it("returns the relative src when no CloudFront origin is configured", () => {
    vi.stubEnv("NEXT_PUBLIC_AWS_CLOUDFRONT_URL", "");
    expect(getResumeImageUrl("/assets/resume/avatar.png")).toBe(
      "/assets/resume/avatar.png",
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
