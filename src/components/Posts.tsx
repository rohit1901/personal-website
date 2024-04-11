"use client"
import {useEffect, useState} from "react";
import {FeedItem, RssToJSON} from "@website/types";
import Link from "next/link";
import {FaArrowRight} from "react-icons/fa";
import {formatDate} from "@website/lib";
import {ContentLoader} from "@website/components/ContentLoader";
import {usePathname} from "next/navigation";

const FEED_URL = encodeURI("https://rohitkhanduri.substack.com/feed")
const API_URL = `https://api.rss2json.com/v1/api.json?rss_url=${FEED_URL}`
export const Post = (item?: FeedItem) => {
    const pathname = usePathname()
    if (!item) return null
    return (
        <article className={`post group flex ${pathname === "/" ? "flex-col" : "flex-row"} items-baseline rounded-2xl p-6 transition-all ml-4`}>
            <div className="z-10 flex-row mb-3 mr-4 flex items-center text-sm">
                <span className="h-4 rounded-full">{formatDate(item.pubDate)}</span>
            </div>
            <div className="flex flex-col">
                <h2 className="font-semibold tracking-tight text-lg">
                    <Link href={item.link}>
                        <span className="sm:rounded-2xl"></span><span
                        className="relative z-10">{item.title}</span>
                    </Link>
                </h2>
                <p className="mt-2  text-sm">{item.description}</p>
                <Link href={item.link} className="mt-4 flex items-center font-medium read-article-link  text-sm">Read article
                    <FaArrowRight className="w-3 h-3 ml-1"/>
                </Link>
            </div>
        </article>
    )
}
export const Posts = () => {
    const [loading, setLoading] = useState(false)
    const [substack, setSubstack] = useState<RssToJSON>()
    useEffect(() => {
        setLoading(true)
        fetch(API_URL)
            .then(res => res.json())
            .then(data => {
                setSubstack(data)
            })
            .catch(err => console.error(err))
            .finally(() => setLoading(false))
    }, [])
    if (loading) return <ContentLoader/>
    return (
        <aside className="lg:w-1/2 w-full flex flex-col space-y-10 mr-2 border-l justify-evenly">
            {substack?.items.map((item, index) => (
                <Post key={`item.guid-${index}`} {...item}/>
            ))}
        </aside>
    )
}