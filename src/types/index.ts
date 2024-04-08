export type Feed = {
    author: string,
    description: string,
    image: string,
    link: string,
    title: string
    url: string
}
export type FeedItem = {
    author: string,
    categories: string[],
    content: string,
    description: string,
    enclosure: {
        link: string
        type: string
    },
    guid: string,
    link: string,
    pubDate: string,
    thumbnail: string,
    title: string
}
export type RssToJSON = {
    feed: Feed,
    items: FeedItem[],
    status: "ok" | "error" | "loading" | "unknown" | "timeout" | "invalid" | "missing"
}