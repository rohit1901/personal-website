import "server-only";
import { SUBSTACK_FEED_URL } from "@website/constants";
import { SUBSTACK_DATA } from "@website/data";
import { parseSubstackRss, type SubstackItem } from "substack-feed-api";
import { logExternalFailure } from "@website/lib/server/log";
import { ExternalServiceError } from "@website/lib/server/graphql";

/**
 * Article content changes infrequently; cache for 30 minutes.
 */
export const ARTICLES_REVALIDATE_SECONDS = 1800;

const ARTICLES_TIMEOUT_MS = 8000;

/**
 * Fetches the Substack RSS feed and parses it into items.
 *
 * Always resolves to an array: on any failure (timeout, HTTP error,
 * unparseable feed, empty feed) it falls back to the bundled snapshot so the
 * rest of the page keeps rendering.
 */
export async function getArticles(): Promise<SubstackItem[]> {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), ARTICLES_TIMEOUT_MS);

  try {
    const response = await fetch(`${SUBSTACK_FEED_URL}/feed`, {
      signal: controller.signal,
      next: { revalidate: ARTICLES_REVALIDATE_SECONDS },
    });

    if (!response.ok) {
      throw new ExternalServiceError(
        "articles",
        "http",
        `Substack feed responded with HTTP ${response.status}`,
        { status: response.status },
      );
    }

    const xml = await response.text();
    const items = parseSubstackRss(xml, { fallback: SUBSTACK_DATA });

    if (!Array.isArray(items) || items.length === 0) {
      return SUBSTACK_DATA;
    }

    return items;
  } catch (error) {
    logExternalFailure("articles", error);
    return SUBSTACK_DATA;
  } finally {
    clearTimeout(timeout);
  }
}
