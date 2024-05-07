import {SubstackCard} from "@website/components/Home/SubstackCard";
import {FaBriefcase} from "react-icons/fa";
import WorkExperiences from "@website/components/Home/WorkExperiences";
import {Posts} from "@website/components/Posts";
import Section from "@website/components/Section";
import {DE_RESUME, EN_RESUME} from "@website/constants";
import {FaSquareArrowUpRight} from "react-icons/fa6";

export const DownloadCV = () => {
    return (
        <div className="flex justify-center gap-2 w-full">
            <a className="action-button mt-6 rounded-md text-sm" target="_blank" href={EN_RESUME}>
                <FaSquareArrowUpRight className="w-3 h-3"/>
                <span className="ml-2">Resume EN</span>
            </a>
            <a className="action-button mt-6 rounded-md text-sm" target="_blank" href={DE_RESUME}>
                <FaSquareArrowUpRight className="w-3 h-3"/>
                <span className="ml-2">Resume DE</span>
            </a>
        </div>
    )
}
const JobsCard = {
    heading: {
        icon: <FaBriefcase className="w-5 h-5 text-gray-400"/>,
        text: "Work Experience"
    },
    button: <DownloadCV/>
}

export const MainContent = () => {
    return (
        <Section className="flex-col xl:flex-row 2xl:flex-row justify-between">
            <Posts/>
            <aside className="flex flex-col xl:ml-2 xl:mt-0 2xl:ml-2 2xl:mt-0 mt-4">
                <SubstackCard/>
                <WorkExperiences {...JobsCard} />
            </aside>
        </Section>
    );
}