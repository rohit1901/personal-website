import { DEFAULT_LOCALE, FALLBACK_IMAGE } from "@website/constants";
import { GoodreadsReadingStatus } from "substack-feed-api";

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
 * Returns the cover image of the book or the fallback avatar.
 */
export const getCoverImage = (cover?: string | undefined): string => {
  return cover ?? FALLBACK_IMAGE;
};

/**
 * Resolves a résumé image `src` from the GraphQL API to a browser-loadable URL.
 *
 * The backend stores image paths relative to the CloudFront distribution (e.g.
 * `/assets/resume/avatar.png`), so a relative `src` is prefixed with
 * `NEXT_PUBLIC_AWS_CLOUDFRONT_URL`. Absolute `http(s)` sources pass through
 * unchanged. Falls back to the local avatar when no source is available.
 */
export const getResumeImageUrl = (src?: string): string => {
  if (!src) return FALLBACK_IMAGE;
  if (/^https?:\/\//.test(src)) return src;
  const basePath = process.env.NEXT_PUBLIC_AWS_CLOUDFRONT_URL;
  if (!basePath) return src;
  return `${basePath.replace(/\/$/, "")}${src.startsWith("/") ? "" : "/"}${src}`;
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
