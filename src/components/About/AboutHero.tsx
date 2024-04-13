"use client"
import {ResumeSchema} from "@website/types";
import {Section} from "@website/components/Section";
import Link from "next/link";
import Image from "next/image";
import {getGraphQLQueryStr, getImageUrl} from "@website/lib";
import {DesktopShow} from "@website/components/Desktop/DesktopShow";
import {NetworkProfiles} from "@website/components/NetworkProfiles";
import {Divider} from "@website/components/Divider";
import {FaEnvelope} from "react-icons/fa";
import {DesktopHidden} from "@website/components/Desktop/DesktopHidden";
import {Fragment, useEffect, useState} from "react";
import {AboutQuery} from "@website/constants";
import {ContentLoader} from "@website/components/ContentLoader";

export const AboutHero = () => {
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
                setBasics(data.basics)
            })
            .catch(console.error)
            .finally(() => setLoading(false))

    }, [])
    if (loading) return <ContentLoader/>
    return (
        <Fragment>
            <Section className="xl:flex-wrap 2xl:flex-wrap flex-wrap-reverse">
                <div className="flex flex-col xl:w-1/2 2xl:w-1/2">
                    <h1 className="text-4xl font-bold my-5">I’m Rohit Khanduri. I live in Frankfurt am Main, where I design the future.</h1>
                    <div className="mt-6 space-y-7 text-base">
                        <p>I’ve loved making things for as long as I can remember, and wrote my first program when I was 6 years old, just two weeks
                            after
                            my mom brought home the brand new Macintosh LC 550 that I taught myself to type on.</p>
                        <p>The only thing I loved more than computers as a kid was space. When I was 8, I climbed the 40-foot oak tree at the back of
                            our
                            yard while wearing my older sister’s motorcycle helmet, counted down from three, and jumped — hoping the tree was tall
                            enough
                            that with just a bit of momentum I’d be able to get to orbit.</p>
                        <p>I spent the next few summers indoors working on a rocket design, while I recovered from the multiple surgeries it took to
                            fix
                            my badly broken legs. It took nine iterations, but when I was 15 I sent my dad’s Blackberry into orbit and was able to
                            transmit a photo back down to our family computer from space.</p>
                        <p>Today, I’m the founder of Planetaria, where we’re working on civilian space suits and manned shuttle kits you can assemble
                            at
                            home so that the next generation of kids really can make it to orbit — from the comfort of their own backyards.</p>
                    </div>
                </div>
                {basics && <div className="xl:ml-auto 2xl:ml-auto mx-auto">
                    <Link href="/">
                        {basics.image &&
                            <Image src={getImageUrl(basics.image)} alt="Rohit Khanduri" className="mask mask-squircle object-cover" height={400}
                                   width={400}/>}
                    </Link>
                    <DesktopShow>
                        <div className="mt-6">
                            <div className="flex flex-col mt-6">
                                <NetworkProfiles profiles={basics?.profiles ?? []} showNetworks={true} className="my-2 flex flex-row"/>
                            </div>
                        </div>
                        <Divider/>
                        <div className="mt-6">
                            <div className="flex hover:text-cyan-500">
                                <FaEnvelope className="w-5 h-5 themed-icon hover:cursor-pointer"/>
                                {basics?.email && <Link href={`mailto:${basics?.email}`} className="ml-3">rohit.khanduri@hotmail.com</Link>}
                            </div>
                        </div>
                    </DesktopShow>
                </div>}
            </Section>
            <DesktopHidden className="mx-20 mb-10">
                <div className="mt-6">
                    <div className="flex flex-col mt-6">
                        <NetworkProfiles profiles={basics?.profiles ?? []} showNetworks={true} className="my-2 flex flex-row"/>
                    </div>
                </div>
                <Divider classNames="my-4"/>
                <div className="flex hover:text-cyan-500">
                    <FaEnvelope className="w-5 h-5 themed-icon hover:cursor-pointer"/>
                    {basics?.email && <Link href={`mailto:${basics?.email}`} className="ml-3 truncate">rohit.khanduri@hotmail.com</Link>}
                </div>
            </DesktopHidden>
        </Fragment>
    )
}