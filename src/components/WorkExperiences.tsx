"use client"
import {ReactNode, useEffect, useState} from "react";
import Image from "next/image";
import {getGraphQLQueryStr, getImageUrl, getMMYYYYDate} from "@website/lib";
import Link from "next/link";
import {ContentLoader} from "@website/components/ContentLoader";
import {AllWorkExperienceQuery} from "@website/constants";

type CardHeading = {
    icon: ReactNode;
    text: string;
}
type CardContent = {
    name: string;
    position: string;
    image: string;
    date: string;
    url: string;
}
type CardProps = {
    heading: CardHeading,
    content?: CardContent[]
    button?: ReactNode;
}
export const WorkExperiences = ({heading, button}: CardProps) => {
    const [loading, setLoading] = useState(false)
    const [workExperience, setWorkExperience] = useState<CardContent[]>([])
    useEffect(() => {
        setLoading(true)
        fetch("/api/resume/graphql", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: getGraphQLQueryStr(AllWorkExperienceQuery)
        }).then(res => res.json())
            .then(data => {
                const parsedData = data.work
                const formattedData: CardContent[] = parsedData.map((d: any) => ({
                    ...d,
                    date: getMMYYYYDate(d.startDate, d.endDate)
                }))
                setWorkExperience(formattedData ?? [])
            }).catch(console.error)
            .finally(() => setLoading(false))
    }, [])
    if (loading) return <ContentLoader/>
    return (
        <div className="group flex flex-col items-start rounded-2xl border p-6">
            <h2 className="flex font-semibold items-start">
                <div className="rounded-full">{heading.icon}</div>
                <span className="ml-3">{heading.text}</span>
            </h2>
            <div className="mt-2 text-sm w-full">
                {workExperience.map((c, i) => (
                    <div className="mt-6 flex flex-row" key={`c.image-${i}`}>
                        <div className="w-2/3 flex flex-row items-center">
                            <Link href={c.url} className="mr-2">
                                <Image src={getImageUrl(c.image)} width="100" height="100" alt="rohit avatar"
                                       className="rounded-full w-6 h-6"/>
                            </Link>
                            <div className="flex flex-col ml-2">
                                <h3 className="w-full flex-none text-sm font-medium">{c.name}</h3>
                                <p className="text-xs">{c.position}</p>
                            </div>
                        </div>
                        <div className="w-1/3 text-right">
                            <aside className="text-xs">{c.date}</aside>
                        </div>
                    </div>
                ))}
            </div>
            {button}
        </div>
    )
}