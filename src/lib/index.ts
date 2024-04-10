import {INSTAGRAM_MEDIA_URL} from "@website/constants";
import {DocumentNode} from "graphql";

/**
 * This function formats the date to a human-readable format using the user's locale.
 * @param date {string} - the date to format
 * @returns {string} - the formatted date
 */
export const formatDate = (date: string): string => {
    const userLocale = navigator.language
    return new Date(date).toLocaleDateString(userLocale, {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    })
}
/**
 * This function formats the date to a human-readable format using the user's locale.
 * @param fromDate {string} - the from date to format
 * @param toDate {string} - the to date to format
 * @returns {string} - the formatted date
 * @example getMMYYYYDate("01-2021", "12-2021") => "January 2021 - December 2021"
 */
export const getMMYYYYDate = (fromDate: string, toDate?: string): string => {
    const userLocale = navigator.language
    const from = new Date(`01-${fromDate}`).toLocaleDateString(userLocale, {
        month: 'short',
        year: 'numeric'
    })
    const to = toDate ? new Date(`01-${toDate}`).toLocaleDateString(userLocale, {
        month: 'short',
        year: 'numeric'
    }) : "Present"
    return `${from} - ${to}`
}

/**
 * This function sets the theme attribute on the runners.
 * @param t {string} - the theme to set
 * @returns {void}
 */
export const handleRunnerTheme = (t: string): void => {
    const runnerTheme = t === "black" ? "dark" : "light";
    const runners = document.getElementsByClassName("runner")
    Array.from(runners).forEach((runner) => {
        runner.setAttribute("data-theme", runnerTheme)
    });
    document.getElementById("footer")?.setAttribute("data-theme", runnerTheme)
}
/**
 * This function sets the theme attribute on the html element and the substack embed
 * @param t {string} - the theme to set
 * @returns {void}
 */
export const handleTheme = (t: string): void => {
    // set the theme attribute on the html element
    Array.from(document.getElementsByTagName("html")).forEach((html) => {
        html.setAttribute("data-theme", t)
    });
    // set the theme attribute on the substack embed
    document.getElementById("substack-embed")?.setAttribute("data-theme", t)
    // set the theme attribute on the runners
    handleRunnerTheme(t)
}
/**
 * Get the image url from the src
 * Fetch from cloudfront in production and from dev in development
 * NOTE: the src should always have a leading slash
 * @example getImageUrl("/portfolio/profile.pic.svg") => "https://d1zjcuqflbd5k.cloudfront.net/portfolio/profile.pic.svg"
 * @param src {string} - the src of the image
 */
export const getImageUrl = (src?: string) => {
    const FALLBACK_IMAGE = "/avatar.png";
    if (!src) {
        return FALLBACK_IMAGE;
    }
    const basePath = process.env.NEXT_PUBLIC_AWS_CLOUDFRONT_URL;
    return `${basePath}${src}`
}
/**
 * Returns the complete Instagram URL
 * @returns {string} - the Instagram URL
 */
export const getInstagramUrl = (): string => {
    const ACCESS_TOKEN = process.env.INSTAGRAM_TESTER_SECRET;
    return `${INSTAGRAM_MEDIA_URL}${encodeURIComponent(ACCESS_TOKEN)}`;
}
export const getGraphQLQueryStr = (taggedQuery: DocumentNode, variables?: any) => {
    return JSON.stringify({query: taggedQuery.loc?.source.body, variables})
}