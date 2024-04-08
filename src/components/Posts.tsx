"use client"
import {useEffect, useState} from "react";
import {FeedItem, RssToJSON} from "@website/types";
import Link from "next/link";
import {FaArrowRight} from "react-icons/fa";
import {formatDate} from "@website/lib";

const FEED_URL = encodeURI("https://rohitkhanduri.substack.com/feed")
const API_URL = `https://api.rss2json.com/v1/api.json?rss_url=${FEED_URL}`
export const Post = (item?: FeedItem) => {
    if (!item) return null
    return (
        <article className="group flex flex-col items-start rounded-2xl border p-6">
            <div className="z-10 flex-row mb-3 flex items-center text-sm">
                <span className="h-4 rounded-full">{formatDate(item.pubDate)}</span>
            </div>
            <h2 className="text-base font-semibold tracking-tight">
                <Link href={item.link}>
                    <span className="sm:rounded-2xl"></span><span
                    className="relative z-10">{item.title}</span>
                </Link>
            </h2>
            <p className="mt-2 text-sm">{item.description}</p>
            <Link href={item.link} className="mt-4 flex items-center text-sm font-medium text-teal-500">Read article
                <FaArrowRight className="w-3 h-3 ml-1"/>
            </Link>
        </article>
    )
}
export const Posts = () => {
    const [substack, setSubstack] = useState<RssToJSON>()
    useEffect(() => {
        fetch(API_URL)
            .then(res => res.json())
            .then(data => {
                setSubstack(data)
            })
    }, [])
    return (
        <aside className="md:w-1/2 lg:w-1/2 w-full flex flex-col space-y-10 mr-2">
            {substack?.items.map((item, index) => (
                <Post key={`item.guid-${index}`} {...item}/>
            ))}
        </aside>
    )
}