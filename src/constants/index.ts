import {Basics, LiteralSecrets} from "@website/types";
// External API Constants
export const INSTAGRAM_MEDIA_URL = "https://graph.instagram.com/me/media?fields=caption,media_url&access_token=";
export const SUBSTACK_FEED_URL = "https://rohitkhanduri.substack.com/feed";
export const GRAPHQL_URL = `${process.env.GRAPHQL_SERVER_HOST}/graphql`

// RESUME Links
export const EN_RESUME = "https://rohit-khanduri.notion.site/Rohit-Khanduri-f392a68fcf27414ba547e19e2ab90eb9?pvs=4";
export const DE_RESUME = "https://rohit-khanduri.notion.site/Rohit-Khanduri-49933fefd490419d81c11877560759c0?pvs=4";

// Internal API Constants
export const ILITERAL_TOKEN_URL = "/api/literal/token";
export const ILITERAL_GRAPHQL_URL = "/api/literal/graphql";

export const DefaultLiteralToken: LiteralSecrets = {
    token: "",
    createdOn: new Date(),
    expiresOn: new Date()
}
export const defaultBasicProfile: Basics = {
    phone: "", profiles: [], summary: "", url: "",
    location: {
        address: "",
        city: "",
        countryCode: "",
        postalCode: "",
        region: ""
    },
    name: "Rohit Khanduri",
    label: "Software Architect",
    image: "/avatar.png",
    email: "rohit.khanduri@proton.me"
}
export const NO_DESCRIPTION = "Whoops! There's no description available."
export const FALLBACK_IMAGE = "/avatar.png";
export const PROFILE_PIC = "/portfolio/profile.pic.svg"

export * from "./queries";