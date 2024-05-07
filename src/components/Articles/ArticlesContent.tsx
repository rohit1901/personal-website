import {Posts} from "@website/components/Posts";
import Section from "@website/components/Section";

export default function ArticlesContent() {
    return (
        <Section className="flex-col">
            <div className="flex flex-col lg:w-3/4 w-full mb-10">
                <h1 className="text-4xl font-bold tracking-tight">Writing about the books I read, the things I learn, and the projects I
                    build.</h1>
                <div className="mt-6 space-y-7 text-base">
                    <span>All of my long-form thoughts on the things I’m learning, the books I’m reading, and the projects I’m building
                        in a chronological order, so you can follow along with my journey.</span>
                </div>
            </div>
            <Posts/>
        </Section>
    )
}