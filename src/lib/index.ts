import { DEFAULT_LOCALE, FALLBACK_IMAGE } from "@website/constants";
import { toSafeExternalUrl } from "@website/lib/url";
import { GoodreadsReadingStatus } from "substack-feed-api";

/**
 * Remote hosts observed in verified content. Keep this list aligned with
 * `images.remotePatterns` in `next.config.mjs`; anything else falls back to a
 * local asset instead of being handed to `next/image`.
 */
const RESUME_IMAGE_HOSTS = [
  "d1ljophloyhryl.cloudfront.net",
  "d28xxvmjntstuh.cloudfront.net",
] as const;

const COVER_IMAGE_HOSTS = ["i.gr-assets.com"] as const;

export const getUserLocale = (): string => {
  if (typeof window !== "undefined") {
    return window.navigator.language;
  }
  return DEFAULT_LOCALE;
};

/**
 * Formats a date string to a human-readable format using the user's locale.
 * @param date the date to format
 */
export const formatDate = (date: string): string => {
  const userLocale = getUserLocale();
  return new Date(date).toLocaleDateString(userLocale, {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

/**
 * Returns a safe, allowlisted cover image URL or the fallback avatar.
 */
export const getCoverImage = (cover?: string | undefined): string => {
  return (
    toSafeExternalUrl(cover, { allowedHosts: COVER_IMAGE_HOSTS }) ??
    FALLBACK_IMAGE
  );
};

function getCloudFrontOrigin(): string | undefined {
  const configured = toSafeExternalUrl(
    process.env.NEXT_PUBLIC_AWS_CLOUDFRONT_URL,
  );
  if (!configured) return undefined;

  const url = new URL(configured);
  if (url.pathname !== "/" || url.search || url.hash) return undefined;
  return url.origin;
}

function isAllowedResumeHost(hostname: string): boolean {
  if (RESUME_IMAGE_HOSTS.some((host) => host === hostname)) return true;
  const origin = getCloudFrontOrigin();
  return origin !== undefined && new URL(origin).hostname === hostname;
}

/**
 * Resolves a résumé image `src` from the GraphQL API to a browser-loadable URL.
 *
 * The backend stores image paths relative to the CloudFront distribution (e.g.
 * `/assets/resume/avatar.png`), so a relative `src` is prefixed with
 * `NEXT_PUBLIC_AWS_CLOUDFRONT_URL`. Absolute HTTPS sources are only accepted
 * from the known CloudFront hosts. Anything else falls back to the bundled
 * avatar so an unexpected backend value cannot become an arbitrary image
 * request or trip `next/image` host validation at render time.
 */
export const getResumeImageUrl = (src?: string): string => {
  const value = src?.trim();
  if (!value) return FALLBACK_IMAGE;

  const isAbsolute =
    /^[a-z][a-z0-9+.-]*:/i.test(value) || value.startsWith("//");
  if (isAbsolute) {
    const safe = toSafeExternalUrl(value);
    if (!safe) return FALLBACK_IMAGE;
    return isAllowedResumeHost(new URL(safe).hostname) ? safe : FALLBACK_IMAGE;
  }

  let decoded: string;
  try {
    decoded = decodeURIComponent(value);
  } catch {
    return FALLBACK_IMAGE;
  }
  if (decoded.split(/[\\/]/).includes("..")) return FALLBACK_IMAGE;

  const origin = getCloudFrontOrigin();
  if (!origin) return FALLBACK_IMAGE;

  const path = value.startsWith("/") ? value : `/${value}`;
  return `${origin}${path}`;
};

/**
 * Returns the reading section heading for a Goodreads reading status.
 */
export const getReadingSectionHeading = (
  status: GoodreadsReadingStatus,
): string => {
  switch (status) {
    case "IS_READING":
      return "Books I'm reading";
    case "FINISHED":
      return "Books I've read";
    case "WANTS_TO_READ":
      return "Books I want to read";
  }
};

/**
 * Removes all HTML tags from a given string.
 */
export function stripHtmlTags(input?: string, defaultText?: string): string {
  if (!input) return defaultText ?? "";
  return input.replace(/<\/?[^>]+(>|$)/g, "");
}
