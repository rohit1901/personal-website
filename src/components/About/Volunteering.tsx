"use client"
import {Fragment, useEffect, useState} from "react";
import {ResumeSchema} from "@website/types";
import {getGraphQLQueryStr, getMMYYYYDate} from "@website/lib";
import {AllVolunteersQuery} from "@website/constants";
import {ContentText} from "@website/components/ContentText";
import {ContentLoader} from "@website/components/ContentLoader";
import Link from "next/link";
import {PhoneHidden} from "@website/components/Phone/PhoneHidden";
import {MdOutlineVolunteerActivism} from "react-icons/md";

export const Volunteering = () => {
    const [loading, setLoading] = useState(false);
    const [volunteering, setVolunteering] = useState<ResumeSchema["volunteer"]>([])
    useEffect(() => {
        setLoading(true)
        fetch("/api/resume/graphql", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: getGraphQLQueryStr(AllVolunteersQuery)
        }).then(res => res.json())
            .then((data) => setVolunteering(data.volunteer)).catch(console.error)
            .finally(() => setLoading(false))
    }, [])
    if (loading) return <ContentLoader/>
    return (
        <div className="rounded-2xl border p-6">
            <h2 className="flex font-semibold items-start">
                <div className="rounded-full"><MdOutlineVolunteerActivism/></div>
                <span className="ml-3">Volunteering</span>
            </h2>
            <ContentText className="mt-2 w-full">
                {volunteering?.map((c, i) => (
                        <Fragment key={`c.url-${i}`}>
                            <div className="mt-6 flex flex-row">
                                <div className="w-auto md:w-2/3 lg:w-2/3 xl:w-2/3 2xl:w-2/3 flex flex-row items-center">
                                    <div className="flex flex-col">
                                        <Link href={c?.url ?? "#"} className="mr-2">
                                            <h2 className="text-lg font-semibold">{c.organization}</h2>
                                        </Link>
                                        <span className="text-sm">{c.summary}</span>
                                    </div>
                                </div>
                                <PhoneHidden className="w-1/3 text-right">
                                    <ContentText>{getMMYYYYDate(c.startDate, c.endDate)}</ContentText>
                                </PhoneHidden>
                            </div>

                            <ul className="m-5 ml-3 list-disc text-sm">
                                {c.highlights?.map((h, i) => (
                                    <li key={`highlight-${i}`}>{h}</li>
                                ))}
                            </ul>
                        </Fragment>
                    )
                )}
            </ContentText>
        </div>
    )
}