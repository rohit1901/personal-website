"use client"
import {Runner} from "@website/components/Runner";
import {Navbar} from "@website/components/Navbar";
import {Footer} from "@website/components/Footer";
import {ProjectsContent} from "@website/components/Projects/ProjectsContent";
import {Section} from "@website/components/Section";

export default function Projects() {
    return (
        <main className="min-w-screen min-h-screen flex-auto">
            <div className="flex flex-col mx-auto h-auto min-h-full">
                <Runner>
                    <Navbar/>
                    <Section className="flex-col">
                        <div className="flex flex-col lg:w-3/4 w-full lg:ml-5 mb-4">
                            <h1 className="text-4xl font-bold tracking-tight">Things I’ve made trying to put my dent in the universe.</h1>
                            <div className="mt-6 space-y-7 text-base">
                        <span>I’ve worked on tons of little projects over the years but these are the
                        ones that I’m most proud of. Many of them are open-source,
                        so if you see something that piques your interest, check out the code and
                        contribute if you have ideas for how it can be improved.</span>
                            </div>
                        </div>
                        <ProjectsContent/>
                    </Section>
                    <Footer/>
                </Runner>
            </div>
        </main>
    );
}