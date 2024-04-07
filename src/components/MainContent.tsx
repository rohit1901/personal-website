import {SubstackCard} from "@website/components/SubstackCard";
import {FaArrowRight, FaBriefcase, FaDownload} from "react-icons/fa";
import {Card} from "@website/components/Card";
import Link from "next/link";

export const DownloadCV = () => {
    return (
        <button className="btn btn-outline w-full mt-6 rounded-md text-sm">
            <FaDownload className="w-5 h-5"/>
            <span className="ml-2">Download CV</span>
        </button>
    )
}
const JobsCard = {
    heading: {
        icon: <FaBriefcase className="w-5 h-5" data-theme="dark"/>,
        text: "Work Experience"
    },
    content: [
        {
            image: "/avatar.png",
            title: "Adesso SE",
            subtitle: "Software Architect",
            aside: "2019 - 2021"
        },
        {
            image: "/avatar.png",
            title: "Finatix GmbH",
            subtitle: "Software Engineer",
            aside: "2017 - 2019"
        }
    ],
    button: <DownloadCV/>
}

export const MainContent = () => {
    return (
        <section className="flex md:flex-row lg:flex-row m-10 flex-col">
            <aside className="md:w-1/2 lg:w-1/2 w-full flex flex-col space-y-10 ">
                <article className="group flex flex-col items-start rounded-2xl border p-6">
                    <div className="z-10 flex-row mb-3 flex items-center text-sm">
                        <span className="h-4 rounded-full">September 5, 2022</span>
                    </div>
                    <h2 className="text-base font-semibold tracking-tight">
                        <a href="/articles/crafting-a-design-system-for-a-multiplanetary-future"><span
                            className="sm:rounded-2xl"></span><span
                            className="relative z-10">Crafting a design system for a multiplanetary future</span></a>
                    </h2>
                    <p className="mt-2 text-sm">Most companies try to stay ahead of the curve when it
                        comes to visual design, but for Planetaria we needed to create a brand that would still inspire us 100 years from now when
                        humanity has spread across our entire solar system.</p>
                    <Link href="#" className="mt-4 flex items-center text-sm font-medium text-teal-500">Read article
                        <FaArrowRight className="w-3 h-3 ml-1"/>
                    </Link>
                </article>
                <article className="group flex flex-col items-start rounded-2xl border p-6">
                    <div className="z-10 flex-row mb-3 flex items-center text-sm">
                        <span className="h-4 rounded-full">September 5, 2022</span>
                    </div>
                    <h2 className="text-base font-semibold tracking-tight">
                        <a href="/articles/crafting-a-design-system-for-a-multiplanetary-future"><span
                            className="sm:rounded-2xl"></span><span
                            className="relative z-10">Crafting a design system for a multiplanetary future</span></a>
                    </h2>
                    <p className="mt-2 text-sm">Most companies try to stay ahead of the curve when it
                        comes to visual design, but for Planetaria we needed to create a brand that would still inspire us 100 years from now when
                        humanity has spread across our entire solar system.</p>
                    <Link href="#" className="mt-4 flex items-center text-sm font-medium text-teal-500">Read article
                        <FaArrowRight className="w-3 h-3 ml-1"/>
                    </Link>
                </article>
                <article className="group flex flex-col items-start rounded-2xl border p-6">
                    <div className="z-10 flex-row mb-3 flex items-center text-sm">
                        <span className="h-4 rounded-full">September 5, 2022</span>
                    </div>
                    <h2 className="text-base font-semibold tracking-tight">
                        <a href="/articles/crafting-a-design-system-for-a-multiplanetary-future"><span
                            className="sm:rounded-2xl"></span><span
                            className="relative z-10">Crafting a design system for a multiplanetary future</span></a>
                    </h2>
                    <p className="mt-2 text-sm">Most companies try to stay ahead of the curve when it
                        comes to visual design, but for Planetaria we needed to create a brand that would still inspire us 100 years from now when
                        humanity has spread across our entire solar system.</p>
                    <Link href="#" className="mt-4 flex items-center text-sm font-medium text-teal-500">Read article
                        <FaArrowRight className="w-3 h-3 ml-1"/>
                    </Link>
                </article>
            </aside>
            <aside className="md:w-1/2 lg:w-1/2 w-full mt-10 md:mt-0 lg:mt-0 flex flex-col space-y-10">
                <SubstackCard/>
                <Card {...JobsCard} />
            </aside>
        </section>
    );
}