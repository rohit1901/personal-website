import {useEffect, useState} from "react";
import {RssToJSON} from "@website/types";
import {formatDate} from "@website/lib";
import Link from "next/link";
import {FaArrowRight} from "react-icons/fa";

const getAlternateTimelineClass = (index: number) => {
    return index % 2 === 0 ? 'timeline-start' : 'timeline-end'
}

const getTextDirectionClass = (index: number) => {
    return index % 2 === 0 ? "text-left" : "text-right"
}

const FEED_URL = encodeURI("https://rohitkhanduri.substack.com/feed")
const API_URL = `https://api.rss2json.com/v1/api.json?rss_url=${FEED_URL}`
export const VerticalTimeLine = () => {
    const [substack, setSubstack] = useState<RssToJSON>()
    useEffect(() => {
        fetch(API_URL)
            .then(res => res.json())
            .then(data => {
                setSubstack(data)
            })
    }, [])
    return (
        <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical my-10">
            {substack?.items.map((item, index) => (
                <li key={`item.guid-${index}`}>
                    <div className="timeline-middle">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5">
                            <path fillRule="evenodd"
                                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                  clipRule="evenodd"/>
                        </svg>
                    </div>
                    <div className={`${getAlternateTimelineClass(index)} timeline-box`}>
                        <div className={`my-5 ${getTextDirectionClass(index)}`}>
                            <span className="h-4 rounded-full text-sm">{formatDate(item.pubDate)}</span>
                            <h2 className="text-base font-semibold tracking-tight">
                                <Link href={item.link}>
                                    <span className="sm:rounded-2xl"></span><span
                                    className="relative z-10">{item.title}</span>
                                </Link>
                            </h2>
                            <p className="text-sm">{item.description}</p>
                            <Link href={item.link} className="flex items-center text-sm font-medium text-teal-500">Read article
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