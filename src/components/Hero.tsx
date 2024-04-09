"use client";
import Image from "next/image";
import {useEffect, useState} from "react";
import {Profile} from "@website/types";
import {NetworkProfiles} from "@website/components/NetworkProfiles";
import {ContentLoader} from "@website/components/ContentLoader";

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
        image: "/avatar.png",
        summary: "",
        profiles: []
    });
    useEffect(() => {
        setLoading(true)
        fetch("/api/resume/get?websiteBasics=true")
            .then(res => res.json())
            .then(setBasics).catch(console.error)
            .finally(() => setLoading(false))
    }, [])
    if (loading) return <ContentLoader/>
    return (
        <div className="flex flex-col m-10">
            <div className="avatar px-4 mb-10">
                <div className="w-24 rounded-full">
                    <Image src={basics?.image} width="100" height="100" alt="rohit avatar"/>
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
                    <div className="w-3/4">
                        <NetworkProfiles profiles={basics?.profiles}/>
                    </div>
                </div>
            </div>
        </div>
    )
}