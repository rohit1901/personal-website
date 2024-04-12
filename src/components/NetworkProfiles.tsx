import {Profile} from "@website/types";
import {FaGithub, FaInstagram, FaLinkedin, FaTwitter} from "react-icons/fa";
import Link from "next/link";
import {Fragment} from "react";
import {BsSubstack} from "react-icons/bs";

export const NetworkIcon = ({network}: Profile) => {
    switch (network) {
        case "Github":
            return <FaGithub className="w-5 h-5 themed-icon"/>
        case "Twitter":
            return <FaTwitter className="w-5 h-5 themed-icon"/>
        case "Instagram":
            return <FaInstagram className="w-5 h-5 themed-icon"/>
        case "LinkedIn":
            return <FaLinkedin className="w-5 h-5 themed-icon"/>
        case "Substack":
            return <BsSubstack className="w-5 h-5 themed-icon"/>
        default:
            return null
    }

}
type NetworkProfileProps = {
    profiles: Profile[]
    showNetworks?: boolean
    className?: string
}
export const NetworkProfiles = ({profiles, showNetworks, className = "inline-flex rounded-full mr-6"}: NetworkProfileProps) => {
    if (!profiles) return null
    return (
        <Fragment>
            {profiles?.map((profile, index) => (
                <Link className={`hover:text-cyan-500 bg-transparent hover:border-0 ${className}`} href={profile.url ?? ""} target="_blank"
                      key={`${profile.network}-${index}`}>
                    <NetworkIcon {...profile}/>
                    {showNetworks && <span className="ml-2">{profile.network}</span>}
                </Link>
            ))}
        </Fragment>
    )
}