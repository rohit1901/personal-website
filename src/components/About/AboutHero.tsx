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
                    <h1 className="text-4xl font-bold my-5">I&apos;m Rohit Khanduri. Mathematician, Software Architect, and Accidental Poet.</h1>
                    <div className="mt-6 space-y-7 text-base">
                        <p>Hey there! 😊 I&apos;m Rohit Khanduri, a Software Architect by profession and a mathematician by education.
                            But let&apos;s be real, I was basically born with a calculator in my hand and a penchant for solving complex problems.
                            🤓 Okay, maybe that&apos;s a bit dramatic, but I did ace my math exams in school (#nerd).</p>
                        <p>Growing up in New Delhi, India, I had a typical 90s childhood filled with sports, music, and a healthy dose of mischief. 🏃‍♂️🎸
                            I was the kid who would always try to sneak in a few extra questions during math class (#rebel),
                            and my teachers would often find me doodling math problems in my notebook instead of taking notes (#distracted).</p>
                        <p>But don&apos;t let my math geekery fool you – I also have a secret love for the arts. 🎨
                            I was the drummer for a rock band (#drumroll please), and I even tried my hand at writing poetry (#poetlife).
                            In fact, I once wrote a poem for my wife (then, girlfriend) that was so sappy and emotional, she thought I was depressed (#fail). 😅</p>
                        <p>Now, as a software architect, I&apos;ve turned my love for problem-solving and creativity into a career. 💻
                            I&apos;ve worked with some amazing clients and collaborated with talented developers to create some truly innovative
                            software solutions.</p>
                        <p>
                            So, if you&apos;re looking for a software architect who can balance the technical and the creative, look no further! 🤝
                            I&apos;m your guy. Just don&apos;t ask me to solve any more math problems – my brain is still recovering from all that
                            calculus. 😅😂
                        </p>
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