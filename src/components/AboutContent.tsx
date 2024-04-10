"use client"
import Image from 'next/image'
import {FaEnvelope} from "react-icons/fa";
import Link from "next/link";
import {useEffect, useState} from "react";
import {ResumeSchema} from "@website/types";
import {NetworkProfiles} from "@website/components/NetworkProfiles";
import {ContentLoader} from "@website/components/ContentLoader";
import {getGraphQLQueryStr, getImageUrl} from "@website/lib";
import {AboutQuery} from "@website/constants/queries";

export const AboutContent = () => {
    const [loading, setLoading] = useState(false)
    const [basics, setBasics] = useState<ResumeSchema["basics"]>({})
    useEffect(() => {
        setLoading(true)
        fetch("/api/resume/graphql", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: getGraphQLQueryStr(AboutQuery)
        }).then(res => res.json())
            .then((data) => {
                setBasics(data.data.basics)
            })
            .catch(console.error)
            .finally(() => setLoading(false))

    }, [])
    if (loading) return <ContentLoader/>
    return (
        <div className="flex md:flex-row lg:flex-row flex-col h-full m-20">
            <div className="flex flex-col md:w-1/2 lg:w-1/2 w-full">
                <h1 className="text-4xl font-bold my-5">I’m Rohit Khanduri. I live in Frankfurt am Main, where I design the future.</h1>
                <div className="mt-6 space-y-7 text-base">
                    <p>I’ve loved making things for as long as I can remember, and wrote my first program when I was 6 years old, just two weeks after
                        my mom brought home the brand new Macintosh LC 550 that I taught myself to type on.</p>
                    <p>The only thing I loved more than computers as a kid was space. When I was 8, I climbed the 40-foot oak tree at the back of our
                        yard while wearing my older sister’s motorcycle helmet, counted down from three, and jumped — hoping the tree was tall enough
                        that with just a bit of momentum I’d be able to get to orbit.</p>
                    <p>I spent the next few summers indoors working on a rocket design, while I recovered from the multiple surgeries it took to fix
                        my badly broken legs. It took nine iterations, but when I was 15 I sent my dad’s Blackberry into orbit and was able to
                        transmit a photo back down to our family computer from space.</p>
                    <p>Today, I’m the founder of Planetaria, where we’re working on civilian space suits and manned shuttle kits you can assemble at
                        home so that the next generation of kids really can make it to orbit — from the comfort of their own backyards.</p>
                </div>
            </div>
            {basics && <div className="flex flex-col ml-auto sm:mt-6">
                <div className="ml-auto">
                    <Link href="/">
                        {basics.image &&
                            <Image src={getImageUrl(basics.image)} alt="Rohit Khanduri" className="mask mask-squircle object-cover" height={400}
                                   width={400}/>}
                    </Link>
                </div>
                <div className="mt-6">
                    <div className="flex flex-col mt-6">
                        <NetworkProfiles profiles={basics?.profiles ?? []} showNetworks={true} className="my-2 flex flex-row"/>
                    </div>
                </div>
                <div className="divider"></div>
                <div className="mt-6">
                    <div className="flex hover:text-cyan-500">
                        <FaEnvelope className="w-5 h-5 themed-icon hover:cursor-pointer"/>
                        {basics.email && <Link href={`mailto:${basics.email}`} className="ml-3">rohit.khanduri@hotmail.com</Link>}
                    </div>
                </div>
            </div>}
        </div>
    )
}