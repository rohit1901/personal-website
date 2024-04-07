import Image from "next/image";
import {FaGithub, FaLinkedin, FaTwitter} from "react-icons/fa";

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
                        <h1 className="text-4xl font-semibold">Software architect, Consultant, and amateur Goofball.</h1>
                        <p className="py-6">I’m a Mathematician interested in AI/ML, Software Architecture, Java, Python, and all things JS!</p>
                    </div>
                </div>
                <div className="hero-content text-left block w-full">
                    <div className="w-3/4">
                        <button className="btn btn-circle mr-2">
                            <FaGithub className="w-6 h-6"/>
                        </button>
                        <button className="btn btn-circle mr-2">
                            <FaLinkedin className="w-6 h-6"/>
                        </button>
                        <button className="btn btn-circle mr-2">
                            <FaTwitter className="w-6 h-6"/>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}