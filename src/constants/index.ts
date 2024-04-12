import {LiteralReadingState, LiteralToken} from "@website/types";
// External API Constants
export const GITHUB_PUBLIC_REPOS_URL = "https://api.github.com/users/rohit1901/repos";
export const INSTAGRAM_MEDIA_URL = "https://graph.instagram.com/me/media?fields=caption,media_url&access_token=";
export const GRAPHQL_URL = "http://localhost:4000/graphql";

// Internal API Constants
export const ILITERAL_TOKEN_URL = "/api/literal/token";
export const ILITERAL_GRAPHQL_URL = "/api/literal/graphql";

// Literal API Constants
export const LITERAL_GRAPHQL_URL = "https://literal.club/graphql/";
export const LITERAL_COOKIE_NAME = "literal-api-token";

// Application Constants
export const DefaultLiteralReadingState: LiteralReadingState = {
    book: {
        title: "",
        description: "",
        cover: ""
    },
    status: "IS_READING"
}
export const DefaultLiteralToken: LiteralToken = {
    login: {
        token: "",
        email: "",
        languages: [],
        profile: {
            id: "",
            name: "",
            bio: "",
            handle: "",
            image: ""
        }
    }
}
export const NO_DESCRIPTION = "Whoops! There's no description available."
export const IS_DEV = process.env.NODE_ENV === "development";
export const FALLBACK_IMAGE = "/avatar.png";

export * from "./queries";