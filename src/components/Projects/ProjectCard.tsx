import {GitHubRepo} from "@website/types";
import Link from "next/link";
import Image from "next/image";
import {getCoverImage} from "@website/lib";
import {Divider} from "@website/components/Divider";

export const ProjectCard = ({
                                description,
                                image,
                                title,
                                url,
                                login,
                                avatar_url,
                                html_url
                            }: GitHubRepo) => {
    return (
        <div className="lg:mx-5 md:mx-5 xl:w-2/5 2xl:w-2/5 w-full mb-4">
            <div className="coding inverse-toggle px-5 pt-2 shadow-lg font-mono subpixel-antialiased
            bg-transparent pb-6 rounded-lg leading-normal overflow-hidden border">
                <div className="top flex justify-between items-center">
                    <div className="flex">
                        <div className="h-3 w-3 bg-red-500 rounded-full"></div>
                        <div className="ml-2 h-3 w-3 bg-orange-300 rounded-full"></div>
                        <div className="ml-2 h-3 w-3 bg-green-500 rounded-full"></div>
                    </div>
                    <Link href={url}><img src={image} alt={title} className="w-12 h-12 mask mask-circle"/></Link>
                </div>
                <Divider/>
                <div className="mt-4 flex command">
                    <span className="text-green-400">github:~$</span>
                    <p className="flex-1 typing items-center pl-2">
                        {title}
                        <br/>
                    </p>
                </div>
                <div className="mt-4 flex command">
                    <span className="text-green-400">github:~$</span>
                    <p className="flex-1 typing items-center pl-2">
                        {description}
                        <br/>
                    </p>
                </div>
                <div className="mt-4 flex command">
                    <span className="text-green-400">github:~$</span>
                    <p className="flex-1 typing items-center pl-2">
                        <Link href={url} target="_blank" rel="noreferrer">
                            Here is the 👉🏽 link to the project
                        </Link>
                        <br/>
                    </p>
                </div>
                <Divider/>
                {html_url && <Link className="flex flex-row items-center justify-between" href={html_url}>
                    <Image src={getCoverImage(avatar_url)} alt={title} className="w-8 h-8 mask mask-circle mr-4" width={20} height={20}/>
                    <span className="command">{login}</span>
                </Link>}
            </div>
        </div>
    )
} 