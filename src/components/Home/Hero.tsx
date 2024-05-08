import Image from "next/image";
import {Profile} from "@website/types";
import {NetworkProfiles} from "@website/components/NetworkProfiles";
import {getImageUrl} from "@website/lib";
import {PROFILE_PIC} from "@website/constants";
import {getResumeBasics} from "@website/lib/fetchData";

type HeroProps = {
    name: string;
    label: string;
    image: string;
    summary: string;
    profiles: Profile[]
}
export default async function Hero() {
    const basics: HeroProps = await getResumeBasics();
    return (
        <div className="flex flex-col m-10">
            <div className="avatar px-4 mb-10 lg:sticky top-0 left-0 right-0 lg:z-50">
                <div className="w-24 rounded-full">
                    <Image src={getImageUrl(PROFILE_PIC)} width="100" height="100" alt="rohit avatar"/>
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