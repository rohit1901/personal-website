import * as parser from "xml2js"
import {isRawFeed, isRawFeedChannel} from "@website/lib/substack.typeguards";
import {RawFeedChannel, RawItem, SubstackItem} from "@website/types/substack.types";

//const CORS_PROXY = "https://api.allorigins.win/get?url=";
const CORS_PROXY = "https://corsproxy.io/?";

// Internal API

const getRawXMLSubstackFeed = async (feedUrl: string) => {
    try {
        const promise = await fetch(
            `${CORS_PROXY}${encodeURIComponent(
                feedUrl
            )}`
        )
        if (promise.ok) return promise.text()
    } catch (e) {
        throw new Error("Error occurred fetching Feed from Substack", {
            cause: e
        })
    }
}
const parseXML = async (xml = "", callback: (err: Error | null, result: any) => void) => {
    try {
        parser.parseString(xml, callback)
    } catch (e) {
        throw new Error("Error occurred parsing XML", {
            cause: e
        })
    }
}
// Utils
const transformRawItem = (item: RawItem): SubstackItem => {
    return {
        title: item.title[0],
        description: item.description[0],
        link: item.link[0],
        pubDate: item.pubDate[0],
        content: item["content:encoded"][0]
    }
}

// Public API

export const getSubstackFeed = async (feedUrl: string, callback: (err: Error | null, result: any) => void): Promise<void> => {
    try {
        const rawXML = await getRawXMLSubstackFeed(feedUrl)
        await parseXML(rawXML, callback)
    } catch (e) {
        throw new Error("Error occurred fetching Substack Feed", {
            cause: e
        })
    }
}
export const getFeedByLink = (rawFeed: any, link: string): RawFeedChannel[] => {
    if (!isRawFeed(rawFeed)) throw new Error("Feed is not in the correct format")
    try {
        return rawFeed.rss.channel.filter(isRawFeedChannel).filter(channel => channel.link[0] === link)
    } catch (e) {
        throw new Error(`Error occurred fetching Feed by Link: ${link}`, {
            cause: e
        })
    }
}
export const getPosts = (channels: RawFeedChannel[]) => {
    const channel = channels[0]
    return channel.item.map(transformRawItem)
}