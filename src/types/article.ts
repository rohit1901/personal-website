import type { SubstackItem } from "substack-feed-api";

/**
 * Website presentation model for a written article. Kept separate from the
 * RSS/Substack schema so the UI does not depend on feed internals.
 */
export type Article = {
  title: string;
  url: string;
  publishedAt: string;
  summary: string;
};

export function toArticle(item: SubstackItem): Article {
  return {
    title: item.title,
    url: item.link,
    publishedAt: item.pubDate,
    summary: item.description,
  };
}
