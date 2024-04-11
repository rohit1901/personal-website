import {GitHubRepo} from "@website/types";
import Link from "next/link";

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
        <div className="m-5 lg:w-2/5 w-full">
            <div className="coding inverse-toggle px-5 pt-4 shadow-lg text-sm font-mono subpixel-antialiased
              dark:bg-gray-800 bg-transparent pb-6 rounded-lg leading-normal overflow-hidden border">
                <div className="top mb-2 flex justify-between items-center">
                    <div className="flex">
                        <div className="h-3 w-3 bg-red-500 rounded-full"></div>
                        <div className="ml-2 h-3 w-3 bg-orange-300 rounded-full"></div>
                        <div className="ml-2 h-3 w-3 bg-green-500 rounded-full"></div>
                    </div>
                    <Link href={url}><img src={image} alt={title} className="w-12 h-12 mask mask-circle"/></Link>
                </div>
                <div className="divider"/>
                <div className="mt-4 flex">
                    <span className="text-green-400">github:~$</span>
                    <p className="flex-1 typing items-center pl-2">
                        {title}
                        <br/>
                    </p>
                </div>
                <div className="mt-4 flex">
                    <span className="text-green-400">github:~$</span>
                    <p className="flex-1 typing items-center pl-2">
                        {description}
                        <br/>
                    </p>
                </div>
                <div className="mt-4 flex">
                    <span className="text-green-400">github:~$</span>
                    <p className="flex-1 typing items-center pl-2">
                        <Link href={url} target="_blank" rel="noreferrer">
                            Here is the 👉🏽 link to the project
                        </Link>
                        <br/>
                    </p>
                </div>
                <div className="divider"/>
                {html_url && <div className="my-4 flex flex-row justify-between">
                    <Link className="flex flex-row items-center" href={html_url}>
                        <img src={avatar_url} alt={title} className="w-8 h-8 mask mask-circle mr-4"/>
                        <span>{login}</span>
                    </Link>
                </div>}
            </div>
        </div>
    )
} 