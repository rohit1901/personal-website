import {Profile} from "@website/types";
import {FaGithub, FaInstagram, FaLinkedin, FaTwitter} from "react-icons/fa";
import Link from "next/link";
import {Fragment} from "react";

export const NetworkIcon = ({network}: Profile) => {
    switch (network) {
        case "Github":
            return <FaGithub className="w-6 h-6"/>
        case "Twitter":
            return <FaTwitter className="w-6 h-6"/>
        case "Instagram":
            return <FaInstagram className="w-6 h-6"/>
        case "LinkedIn":
            return <FaLinkedin className="w-6 h-6"/>
        default:
            return null
    }

}
type NetworkProfileProps = {
    profiles: Profile[]
    showNetworks?: boolean
    className?: string
}
export const NetworkProfiles = ({profiles, showNetworks, className = "btn btn-circle mr-2"}: NetworkProfileProps) => {
    if (!profiles) return null
    return (
        <Fragment>
            {profiles?.map((profile, index) => (
                <Link className={className} href={profile.url ?? ""} target="_blank" key={`${profile.network}-${index}`}>
                    <NetworkIcon {...profile}/>
                    {showNetworks && <span className="ml-2">{profile.network}</span>}
                </Link>
            ))}
        </Fragment>
    )
}