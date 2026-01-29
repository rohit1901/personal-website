// External API Constants
export const INSTAGRAM_MEDIA_URL =
  "https://graph.instagram.com/me/media?fields=caption,media_url&access_token=";
export const SUBSTACK_FEED_URL = "https://rohitkhanduri.substack.com";
export const GOODREADS_FEED_URL =
  "https://www.goodreads.com/review/list_rss/161866901?key=i4wH3ZD_K1LIZ7duOLVsiUWcyhW-fGCsox5koyQTJIUuwzwO&shelf=%23ALL%23";
export const GRAPHQL_URL = `${process.env.NEXT_PUBLIC_GRAPHQL_SERVER_HOST}/api/graphql`;
// RESUME Links
export const EN_RESUME =
  "https://rohit-khanduri.notion.site/Rohit-Khanduri-f392a68fcf27414ba547e19e2ab90eb9?pvs=4";
export const DE_RESUME =
  "https://rohit-khanduri.notion.site/Rohit-Khanduri-49933fefd490419d81c11877560759c0?pvs=4";

export const NO_DESCRIPTION = "Whoops! There's no description available.";
export const FALLBACK_IMAGE = "/avatar.png";
export const PROFILE_PIC = "/assets/resume/avatar.png";
export const DEFAULT_LOCALE = "en-US";

export * from "./queries";
