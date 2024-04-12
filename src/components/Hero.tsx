"use client";
import Image from "next/image";
import {useEffect, useState} from "react";
import {Profile} from "@website/types";
import {NetworkProfiles} from "@website/components/NetworkProfiles";
import {ContentLoader} from "@website/components/ContentLoader";
import {getGraphQLQueryStr, getImageUrl} from "@website/lib";
import {AllBasicsQuery} from "@website/constants";

type HeroProps = {
    name: string;
    label: string;
    image: string;
    summary: string;
    profiles: Profile[]
}
export const Hero = () => {
    const [loading, setLoading] = useState(false);
    const [basics, setBasics] = useState<HeroProps>({
        name: "",
        label: "",
        image: "/portfolio/profile.pic.svg",
        summary: "",
        profiles: []
    });
    useEffect(() => {
        setLoading(true)
        fetch("/api/resume/graphql", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: getGraphQLQueryStr(AllBasicsQuery)
        }).then(res => res.json())
            .then((data) => setBasics(data.basics)).catch(console.error)
            .finally(() => setLoading(false))
    }, [])
    if (loading) return <ContentLoader/>
    return (
        <div className="flex flex-col m-10">
            <div className="avatar px-4 mb-10">
                <div className="w-24 rounded-full">
                    <Image src={getImageUrl(basics?.image)} width="100" height="100" alt="rohit avatar"/>
                </div>
            </div>
            <div className="hero flex flex-col items-start min-w-full">
                <div className="hero-content text-left block w-full">
                    <div className="w-3/4">
                        <h1 className="text-4xl font-bold">{basics?.label}</h1>
                        <p className="py-6">{basics?.summary}</p>
                    </div>
                </div>
                <div className="hero-content text-left block w-full">
                    <div className="w-full md:w-3/4 lg:w-3/4 xl:w-3/4 2xl:w-3/4">
                        <NetworkProfiles profiles={basics?.profiles}/>
                    </div>
                </div>
            </div>
        </div>
    )
}