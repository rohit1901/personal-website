"use client"
import {ThemeToggle} from "@website/components/ThemeToggle";
import {CgMenuLeft} from "react-icons/cg";
import Image from "next/image";
import Link from "next/link";
import {usePathname} from "next/navigation";

export const setActiveClass = (currentPath?: string | null, path?: string | null) => {
    if (currentPath === path) {
        return "btn-active"
    }
}
export const Navbar = () => {
    const pathname = usePathname()
    return (
        <div className="mx-auto navbar bg-base-100 w-1/2 border rounded-full my-4 px-8">
            {/*Mobile Navigation*/}
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
                            <li><a>Project</a></li>
                            <li><a>Currently Reading</a></li>

                        </ul>
                    </div>
                </div>
            </div>
            {/*Desktop Navigation*/}
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><Link href="/about" className={`text-md ${setActiveClass(pathname, "/about")}`}>About me</Link></li>
                    <li>
                        <Link href="/articles" className={`text-md ${setActiveClass(pathname, "/articles")}`}>Articles</Link>
                    </li>
                    <li><a className={`text-md ${setActiveClass(pathname, "")}`}>Projects</a></li>
                    <li><a className={`text-md ${setActiveClass(pathname, "")}`}>Currently Reading</a></li>
                </ul>
            </div>
            <div className="navbar-end">
                <ThemeToggle/>
            </div>
        </div>
    )
}