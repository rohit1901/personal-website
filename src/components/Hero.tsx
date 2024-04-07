import Image from "next/image";
import {FaGithub, FaInstagram, FaLinkedin, FaTwitter} from "react-icons/fa";

export const Hero = () => {
    return (
        <div className="flex flex-col m-10">
            <div className="avatar px-4 mb-10">
                <div className="w-24 rounded-full">
                    <Image src="/avatar.png" width="100" height="100" alt="rohit avatar"/>
                </div>
            </div>
            <div className="hero flex flex-col items-start min-w-full">
                <div className="hero-content text-left block w-full">
                    <div className="w-3/4">
                        <h1 className="text-3xl font-semibold">Software Architect, Consultant, and an amateur Goofball.</h1>
                        <p className="py-6">I’m a Mathematician interested in AI/ML, Software Architecture, Java, Python, and all things JS!
                            I love to read, write, and code. I’m currently working as a Software Architect at Adesso SE.
                            In my free time, I write articles and review books that I've read, work on side projects, and contribute to open-source.
                            Oh, and I love to work out and play video games!
                        </p>
                    </div>
                </div>
                <div className="hero-content text-left block w-full">
                    <div className="w-3/4">
                        <a className="btn btn-circle mr-2" href="https://github.com/rohit1901" target="_blank">
                            <FaGithub className="w-6 h-6"/>
                        </a>
                        <a className="btn btn-circle mr-2">
                            <FaLinkedin className="w-6 h-6"/>
                        </a>
                        <a className="btn btn-circle mr-2">
                            <FaTwitter className="w-6 h-6"/>
                        </a>
                        <a className="btn btn-circle mr-2">
                            <FaInstagram className="w-6 h-6"/>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}