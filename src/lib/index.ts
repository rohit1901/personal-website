import {
  DEFAULT_LOCALE,
  FALLBACK_IMAGE,
  INSTAGRAM_MEDIA_URL,
} from "@website/constants";
import { InstagramError } from "@website/types";
import { DocumentNode } from "graphql";
import {
  GoodreadsBook,
  GoodreadsReadingState,
  GoodreadsReadingStatus,
  SubstackItem,
} from "substack-feed-api";

export const getUserLocale = (): string => {
  if (typeof window !== "undefined") {
    return window.navigator.language;
  }
  return DEFAULT_LOCALE;
};

/**
 * This function formats the date to a human-readable format using the user's locale.
 * @param date {string} - the date to format
 * @returns {string} - the formatted date
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
 * This function formats the date to a human-readable format using the user's locale.
 * @param fromDate {string | undefined} - the from date to format
 * @param toDate {string | undefined} - the to date to format
 * @returns {string} - the formatted date
 * @example getMMYYYYDate("01-2021", "12-2021") => "January 2021 - December 2021"
 */
export const getMMYYYYDate = (fromDate?: string, toDate?: string): string => {
  if (!fromDate) return "";
  const userLocale = getUserLocale();
  const from = new Date(`01-${fromDate}`).toLocaleDateString(userLocale, {
    month: "short",
    year: "numeric",
  });
  const to = toDate
    ? new Date(`01-${toDate}`).toLocaleDateString(userLocale, {
        month: "short",
        year: "numeric",
      })
    : "Present";
  return `${from} - ${to}`;
};

/**
 * This function sets the theme attribute on the runners.
 * @param t {string} - the theme to set
 * @returns {void}
 */
export const handleRunnerTheme = (t: string): void => {
  const runnerTheme = t === "black" ? "dark" : "light";
  const runners = document.getElementsByClassName("runner");
  Array.from(runners).forEach((runner) => {
    runner.setAttribute("data-theme", runnerTheme);
  });
  document.getElementById("footer")?.setAttribute("data-theme", runnerTheme);
};
/**
 * This function sets the theme attribute on the html element and the substack embed
 * @param t {string} - the theme to set
 * @returns {void}
 */
export const handleTheme = (t: string): void => {
  // set the theme attribute on the html element
  Array.from(document.getElementsByTagName("html")).forEach((html) => {
    html.setAttribute("data-theme", t);
  });
  // set the theme attribute on the substack embed
  document.getElementById("substack-embed")?.setAttribute("data-theme", t);
  // set the theme attribute on the runners
  handleRunnerTheme(t);
};
/**
 * Get the image url from the src
 * Fetch from cloudfront in production and from dev in development
 * NOTE: the src should always have a leading slash
 * @example getImageUrl("/portfolio/profile.pic.svg") => "https://d1zjcuqflbd5k.cloudfront.net/portfolio/profile.pic.svg"
 * @param src {string} - the src of the image
 */
export const getImageUrl = (src?: string) => {
  if (!src) {
    return FALLBACK_IMAGE;
  }
  const basePath = process.env.NEXT_PUBLIC_AWS_CLOUDFRONT_URL;
  return `${basePath}${src}`;
};
/**
 * Returns the complete Instagram URL
 * @returns {string} - the Instagram URL
 */
export const getInstagramUrl = (): string => {
  const ACCESS_TOKEN = process.env.INSTAGRAM_TESTER_SECRET;
  return `${INSTAGRAM_MEDIA_URL}${encodeURIComponent(ACCESS_TOKEN)}`;
};
/**
 * Get the GraphQL query string
 * @param taggedQuery {DocumentNode} - the tagged query [GraphQL query string with the gql tag]
 * @param variables {any} - the variables to pass to the query
 * @returns {string} - the GraphQL query string
 */
export const getGraphQLQueryStr = (
  taggedQuery: DocumentNode,
  variables?: any,
): string => {
  return JSON.stringify({ query: taggedQuery.loc?.source.body, variables });
};
/**
 * Get the reading section heading based on the status
 * @returns {Array<LiteralReadingStatus>} - the reading status values
 */
export const getLiteralReadingStatusValues =
  (): Array<GoodreadsReadingStatus> => {
    return ["IS_READING", "FINISHED", "WANTS_TO_READ"];
  };
/**
 * Get the reading section heading based on the status
 * @param status {LiteralReadingStatus} - the reading status
 * @returns {string} - the reading section heading
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
 * Get the cover image of the book or the default avatar
 * @param cover {string | undefined} - the cover image of the book
 * @returns {string} - the cover image of the book or the default avatar
 */
export const getCoverImage = (cover?: string | undefined): string => {
  return cover ?? FALLBACK_IMAGE;
};
/**
 * Get the books based on the reading status
 * @param readingStates {LiteralReadingState[]} - the reading states
 * @param status {LiteralReadingStatus} - the reading status
 * @returns {LiteralBook[]} - the books based on the reading status
 */
export const getBooks = (
  readingStates: GoodreadsReadingState[],
  status: GoodreadsReadingStatus,
): GoodreadsBook[] => {
  return readingStates
    ?.filter((state) => state.status === status)
    ?.map((state) => state.book);
};
/**
 * Checks if the environment is development or not
 * @returns {boolean} - true if the environment is development, false otherwise
 */
export const isDev = (): boolean => process.env.NODE_ENV === "development";

/**
 * Get the blog posts from the substack feed based on the path of the page.
 * If the path is the home page, return the first 4 posts, otherwise return all posts.
 * @param items
 * @param path {string | null} - the path of the page
 */
export const getBlogPosts = (items?: SubstackItem[], path?: string | null) =>
  items?.slice(0, path === "/" ? 4 : undefined);
/**
 * Sets the active class based on the current path.
 * @param currentPath {string | null} - the current path
 * @param path {string | null} - the path
 */
export const setActiveClass = (
  currentPath?: string | null,
  path?: string | null,
) => {
  if (currentPath !== path) return "";
  return "active";
};
/**
 * Typeguard which checks whether the input object is of type InstagramError
 * @param instagramObj
 */
export const isInstagramError = (
  instagramObj: any,
): instagramObj is InstagramError => {
  if (typeof instagramObj !== "object") return false;
  if (instagramObj.hasOwnProperty("error")) {
    const errorObj = instagramObj.error;
    return (
      errorObj.hasOwnProperty("code") &&
      errorObj.hasOwnProperty("message") &&
      errorObj.hasOwnProperty("type") &&
      errorObj.hasOwnProperty("fbtrace_id")
    );
  }
  return false;
};
/**
 * Removes all HTML tags from a given string.
 * @param input - The string containing HTML tags.
 * @returns A plain text string with all HTML tags removed.
 */
export function stripHtmlTags(input?: string, defaultText?: string): string {
  if (!input) return defaultText ?? "";
  return input.replace(/<\/?[^>]+(>|$)/g, "");
}
