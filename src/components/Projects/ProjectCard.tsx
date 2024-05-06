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
                                avatar_url,
                                html_url
                            }: GitHubRepo) => {
    return (
        <div className="xl:w-2/5 md:mx-5 w-full mb-4">
            <div className="coding inverse-toggle px-5 shadow-lg font-mono subpixel-antialiased
            bg-transparent pb-6 rounded-lg leading-normal overflow-hidden border">
                <div className="flex flex-col justify-between">
                    <div className="flex my-6">
                        <div className="h-3 w-3 bg-red-500 rounded-full"></div>
                        <div className="ml-2 h-3 w-3 bg-orange-300 rounded-full"></div>
                        <div className="ml-2 h-3 w-3 bg-green-500 rounded-full"></div>
                    </div>
                </div>
                <Divider classNames="my-0"/>
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
                <Divider classNames="mt-4"/>
                {html_url && <Link className="flex flex-row items-center justify-between" href={html_url}>
                    <Image src={getCoverImage(avatar_url)} alt={title} className="w-8 h-8 mask mask-circle mr-4" width={20} height={20}/>
                    <Image src={image} alt={title} className="w-12 h-12 mask mask-circle" width={20} height={20} loading="eager"/>
                </Link>}
            </div>
        </div>
    )
} 