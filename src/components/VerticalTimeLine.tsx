import {useEffect, useState} from "react";
import {RssToJSON} from "@website/types";
import {formatDate} from "@website/lib";
import Link from "next/link";
import {FaArrowRight} from "react-icons/fa";
import {ContentLoader} from "@website/components/ContentLoader";
import {IoCheckmarkCircle} from "react-icons/io5";

const getAlternateTimelineClass = (index: number) => {
    return index % 2 === 0 ? 'timeline-start' : 'timeline-end'
}

const getTextDirectionClass = (index: number) => {
    return index % 2 === 0 ? "text-left" : "text-right"
}

const FEED_URL = encodeURI("https://rohitkhanduri.substack.com/feed")
const API_URL = `https://api.rss2json.com/v1/api.json?rss_url=${FEED_URL}`
export const VerticalTimeLine = () => {
    const [loading, setLoading] = useState<boolean>(true)
    const [substack, setSubstack] = useState<RssToJSON>()
    useEffect(() => {
        setLoading(true)
        fetch(API_URL)
            .then(res => res.json())
            .then(data => {
                setSubstack(data)
            }).catch(console.error)
            .finally(() => setLoading(false))
    }, [])
    if (loading) {
        return <ContentLoader/>
    }
    return (
        <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical my-10">
            {substack?.items.map((item, index) => (
                <li key={`item.guid-${index}`}>
                    <div className="timeline-middle">
                        <IoCheckmarkCircle className="w-6 h-6"/>
                    </div>
                    <div className={`${getAlternateTimelineClass(index)} timeline-box`}>
                        <div className={`my-5 ${getTextDirectionClass(index)}`}>
                            <span className="h-4 rounded-full text-sm">{formatDate(item.pubDate)}</span>
                            <h2 className="text-base font-semibold tracking-tight my-2">
                                <Link href={item.link}>
                                    <span className="sm:rounded-2xl"></span><span
                                    className="relative z-10">{item.title}</span>
                                </Link>
                            </h2>
                            <p className="text-sm my-4">{item.description}</p>
                            <Link href={item.link} className="flex items-center text-sm font-medium text-cyan-500 my-2">Read article
                                <FaArrowRight className="w-3 h-3 ml-1"/>
                            </Link>
                        </div>
                    </div>
                    <hr className="timeline-divider"/>
                </li>
            ))}
        </ul>
    )
}