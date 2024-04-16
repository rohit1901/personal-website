import {SubstackCard} from "@website/components/Home/SubstackCard";
import {FaBriefcase, FaChevronDown} from "react-icons/fa";
import {WorkExperiences} from "@website/components/Home/WorkExperiences";
import {Posts} from "@website/components/Posts";
import {Section} from "@website/components/Section";

export const DownloadCV = () => {
    return (
        <button className="action-button w-full mt-6 rounded-md text-sm">
            <FaChevronDown className="w-3 h-3 animate-bounce"/>
            <span className="ml-2">Download CV</span>
        </button>
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