"use client"
import {useEffect, useState} from "react";
import {FeedItem, RssToJSON} from "@website/types";
import Link from "next/link";
import {FaArrowRight} from "react-icons/fa";
import {formatDate, getBlogPosts} from "@website/lib";
import {ContentLoader} from "@website/components/ContentLoader";
import {usePathname} from "next/navigation";
import {ContentText} from "@website/components/ContentText";
import {SUBSTACK_FEED_URL} from "@website/constants";

const FEED_URL = encodeURI(SUBSTACK_FEED_URL)
const API_URL = `https://api.rss2json.com/v1/api.json?rss_url=${FEED_URL}`
export const Post = (item?: FeedItem) => {
    const pathname = usePathname()
    if (!item) return null
    return (
        <ContentText className={`post flex ${pathname === "/" ? "flex-col" : "flex-row"} items-baseline rounded-2xl p-6 transition-all lg:ml-4`}>
            <div className="z-10 mb-3 mr-4 flex flex-row items-center">
                <span className="rounded-full text-sm">{formatDate(item.pubDate)}</span>
            </div>
            <div className="flex flex-col w-2/3">
                <h2 className="font-semibold tracking-tight text-sm">
                    <Link href={item.link}>
                        <span className="sm:rounded-2xl"></span><span
                        className="relative z-10">{item.title}</span>
                    </Link>
                </h2>
                <p className="mt-2 text-sm">{item.description}</p>
                <Link href={item.link} className="mt-4 flex items-center font-medium read-article-link text-sm">Read article
                    <FaArrowRight className=" ml-1"/>
                </Link>
            </div>
        </ContentText>
    )
}
export const Posts = () => {
    const [loading, setLoading] = useState(false)
    const [substack, setSubstack] = useState<RssToJSON>()
    const pathname = usePathname()
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
        <aside className="lg:w-3/4 w-full flex flex-col space-y-10 mr-2 border-l justify-evenly">
            {getBlogPosts(substack, pathname)?.map((item, index) => (
                <Post key={`item.guid-${index}`} {...item}/>
            ))}
        </aside>
    )
}