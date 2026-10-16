import "server-only";
import { GOODREADS_DATA } from "@website/data";
import {
  parseGoodreadsRss,
  type GoodreadsReadingState,
  type GoodreadsReadingStatus,
} from "substack-feed-api";
import { logExternalFailure } from "@website/lib/server/log";

/**
 * Books change infrequently; cache for an hour.
 */
export const BOOKS_REVALIDATE_SECONDS = 3600;

const BOOKS_TIMEOUT_MS = 8000;

/**
 * Maps a Goodreads shelf string to a reading status. The exclusive shelf is
 * checked before the generic "read" substring so "to-read" is not mistaken for
 * "read".
 */
function statusFromShelves(shelves: string): GoodreadsReadingStatus {
  const value = shelves.toLowerCase();
  if (value.includes("currently-reading")) return "IS_READING";
  if (value.includes("to-read")) return "WANTS_TO_READ";
  if (value.includes("read")) return "FINISHED";
  return "WANTS_TO_READ";
}

/**
 * Converts the bundled Goodreads snapshot (raw rows) into reading states. Used
 * as an offline fallback when the configured feed is unavailable.
 */
export function snapshotToStates(): GoodreadsReadingState[] {
  return GOODREADS_DATA.map((raw) => ({
    status: statusFromShelves(raw.shelves),
    book: {
      title: raw.title,
      description: raw.description,
      cover: raw.cover,
      authors: raw.author ? [{ name: raw.author }] : [],
    },
  }));
}

/**
 * The Goodreads list RSS URL (including its access key) is supplied through
 * environment configuration so the credential is never committed. When it is
 * absent the bundled snapshot is used.
 */
function getFeedUrl(): string | undefined {
  const url = process.env.GOODREADS_FEED_URL;
  return url && url.length > 0 ? url : undefined;
}

/**
 * Fetches and parses the Goodreads reading feed. Always resolves to an array:
 * on any failure it returns the bundled snapshot so the page keeps rendering.
 */
export async function getBooks(): Promise<GoodreadsReadingState[]> {
  const feedUrl = getFeedUrl();
  if (!feedUrl) {
    return snapshotToStates();
  }

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), BOOKS_TIMEOUT_MS);

  try {
    const response = await fetch(feedUrl, {
      signal: controller.signal,
      next: { revalidate: BOOKS_REVALIDATE_SECONDS },
    });

    if (!response.ok) {
      throw new Error(`Goodreads feed responded with HTTP ${response.status}`);
    }

    const states = parseGoodreadsRss(await response.text(), {
      fallback: GOODREADS_DATA,
    });

    return states.length > 0 ? states : snapshotToStates();
  } catch (error) {
    logExternalFailure("books", error);
    return snapshotToStates();
  } finally {
    clearTimeout(timeout);
  }
}
