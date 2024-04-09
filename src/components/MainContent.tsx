import {SubstackCard} from "@website/components/SubstackCard";
import {FaBriefcase, FaChevronDown} from "react-icons/fa";
import {Card} from "@website/components/Card";
import {Posts} from "@website/components/Posts";

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
        <section className="flex md:flex-row lg:flex-row m-10 flex-col justify-between">
            <Posts/>
            <aside className="flex flex-col space-y-10 md:ml-2 lg:ml-2 md:mt-0 lg:mt-0 mt-4">
                <SubstackCard/>
                <Card {...JobsCard} />
            </aside>
        </section>
    );
}