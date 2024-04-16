import {LiteralSecrets} from "@website/types";
// External API Constants
export const INSTAGRAM_MEDIA_URL = "https://graph.instagram.com/me/media?fields=caption,media_url&access_token=";
export const GRAPHQL_URL = `${process.env.GRAPHQL_SERVER_HOST}/graphql`

// Internal API Constants
export const ILITERAL_TOKEN_URL = "/api/literal/token";
export const ILITERAL_GRAPHQL_URL = "/api/literal/graphql";

export const DefaultLiteralToken: LiteralSecrets = {
    token: "",
    createdOn: new Date(),
    expiresOn: new Date()
}
export const NO_DESCRIPTION = "Whoops! There's no description available."
export const FALLBACK_IMAGE = "/avatar.png";

export * from "./queries";