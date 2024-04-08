import {SubstackCard} from "@website/components/SubstackCard";
import {FaBriefcase, FaDownload} from "react-icons/fa";
import {Card} from "@website/components/Card";
import {Posts} from "@website/components/Posts";

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
        icon: <FaBriefcase className="w-5 h-5"/>,
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
            <Posts/>
            <aside className="md:w-1/2 lg:w-1/2 w-full flex flex-col space-y-10 md:ml-2 lg:ml-2 md:mt-0 lg:mt-0 mt-4">
                <SubstackCard/>
                <Card {...JobsCard} />
            </aside>
        </section>
    );
}