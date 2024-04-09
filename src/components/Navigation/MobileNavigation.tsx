"use client"
import {CgMenuLeft} from "react-icons/cg";
import Image from "next/image";
import Link from "next/link";
import {setActiveClass} from "@website/components/Navbar";
import {usePathname} from "next/navigation";

export const MobileNavigation = () => {
    const pathname = usePathname()
    return (
        <div className="navbar-start z-20">
            <div className="drawer">
                <input id="my-drawer" type="checkbox" className="drawer-toggle"/>
                <div className="drawer-content">
                    <label htmlFor="my-drawer" className=" lg:hidden">
                        <CgMenuLeft className="w-6 h-6 drawer-button"/>
                    </label>
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 min-h-full bg-base-200 text-lg pt-20">
                        <div className="avatar px-4 mb-10">
                            <div className="w-12 rounded-full">
                                <Image src="/avatar.png" width="100" height="100" alt="rohit avatar"/>
                            </div>
                        </div>
                        <li><Link href="/about" className={`text-md ${setActiveClass(pathname, "/about")}`}>About me</Link></li>
                        <li>
                            <Link href="/articles" className={`text-md ${setActiveClass(pathname, "/articles")}`}>Articles</Link>
                        </li>
                        <li>
                            <Link href="/projects" className={`text-md ${setActiveClass(pathname, "/projects")}`}>Projects</Link>
                        </li>
                        <li><a>Currently Reading</a></li>

                    </ul>
                </div>
            </div>
        </div>
    )
}