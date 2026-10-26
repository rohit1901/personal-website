import type { SubstackItem } from "substack-feed-api";
import { toSafeExternalUrl } from "@website/lib/url";

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

const SUBSTACK_HOSTS = ["rohitkhanduri.substack.com"] as const;

/**
 * Maps a feed item to the website model. Items whose link is not an expected
 * HTTPS Substack URL are discarded rather than rendered as unsafe anchors.
 */
export function toArticle(item: SubstackItem): Article | undefined {
  const url = toSafeExternalUrl(item.link, {
    allowedHosts: SUBSTACK_HOSTS,
  });
  if (!url) return undefined;

  return {
    title: item.title,
    url,
    publishedAt: item.pubDate,
    summary: item.description,
  };
}
