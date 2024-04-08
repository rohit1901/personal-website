"use client"
import {VerticalTimeLine} from "@website/components/VerticalTimeLine";

export const ArticlesContent = () => {
    return (
        <div className="flex flex-col h-full m-20">
            <div className="flex flex-col w-3/4">
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Writing about the books I read, the things I learn, and the projects I
                    build.</h1>
                <div className="mt-6 space-y-7 text-base">
                    <span>All of my long-form thoughts on the things I’m learning, the books I’m reading, and the projects I’m building
                        in a chronological order, so you can follow along with my journey.</span>
                </div>
            </div>
            <VerticalTimeLine/>
        </div>
    )
}