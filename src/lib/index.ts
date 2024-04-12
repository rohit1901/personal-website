import {FALLBACK_IMAGE, INSTAGRAM_MEDIA_URL} from "@website/constants";
import {DocumentNode} from "graphql";
import {GitHubOwner, GitHubRepo, LiteralBook, LiteralReadingState, LiteralReadingStatus} from "@website/types";

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
/**
 * Get the GraphQL query string
 * @param taggedQuery {DocumentNode} - the tagged query [GraphQL query string with the gql tag]
 * @param variables {any} - the variables to pass to the query
 * @returns {string} - the GraphQL query string
 */
export const getGraphQLQueryStr = (taggedQuery: DocumentNode, variables?: any): string => {
    return JSON.stringify({query: taggedQuery.loc?.source.body, variables})
}
/**
 * Get the reading section heading based on the status
 * @returns {Array<LiteralReadingStatus>} - the reading status values
 */
export const getLiteralReadingStatusValues = (): Array<LiteralReadingStatus> => {
    return ["IS_READING", "FINISHED", "WANTS_TO_READ"]
}
/**
 * Get the reading section heading based on the status
 * @param status {LiteralReadingStatus} - the reading status
 * @returns {string} - the reading section heading
 */
export const getReadingSectionHeading = (status: LiteralReadingStatus): string => {
    switch (status) {
        case "IS_READING":
            return "Books I'm reading"
        case "FINISHED":
            return "Books I've read"
        case "WANTS_TO_READ":
            return "Books I want to read"
    }
}
/**
 * Get the cover image of the book or the default avatar
 * @param cover {string | undefined} - the cover image of the book
 * @returns {string} - the cover image of the book or the default avatar
 */
export const getCoverImage = (cover?: string | undefined): string => {
    return cover ?? FALLBACK_IMAGE;
}
/**
 * Get the books based on the reading status
 * @param readingStates {LiteralReadingState[]} - the reading states
 * @param status {LiteralReadingStatus} - the reading status
 * @returns {LiteralBook[]} - the books based on the reading status
 */
export const getBooks = (readingStates: LiteralReadingState[], status: LiteralReadingStatus): LiteralBook[] => {
    return readingStates.filter(state => state.status === status).map(state => state.book)
}
/**
 * Transforms the GitHub data. The data is transformed by adding the login, avatar_url, and html_url to each item
 * and splitting the title into title and description.
 * @example transformGitHubData(data, {login: "test", avatar_url: "test", html_url: "test"}) => [{title: "test", description: "test", login: "test", avatar_url: "test", html_url: "test"}]
 * @param data {GitHubRepo[]} - the GitHub data
 * @param login {string | undefined} - the login
 * @param avatar_url {string | undefined} - the avatar url
 * @param html_url {string | undefined} - the html url
 */
export const transformGitHubData = (data: GitHubRepo[], {login, avatar_url, html_url}: GitHubOwner): GitHubRepo[] => {
    return data.map(m => ({
        ...m,
        title: m.title.split(":")[0],
        description: m.title.split(":")[1],
        login,
        avatar_url,
        html_url
    }));
}