"use client"
import Link from "next/link";
import {setActiveClass} from "@website/components/Navbar";
import {usePathname} from "next/navigation";

export const DesktopNavigation = () => {
    const pathname = usePathname()
    return (
        <div className="navbar-center hidden lg:flex border rounded-full mx-auto">
            <ul className="menu menu-horizontal px-1">
                <li><Link href="/about" className={`text-md  ${setActiveClass(pathname, "/about")}`}>About me</Link></li>
                <li>
                    <Link href="/articles" className={`text-md  ${setActiveClass(pathname, "/articles")}`}>Articles</Link>
                </li>
                <li>
                    <Link href="/projects" className={`text-md  ${setActiveClass(pathname, "/projects")}`}>Projects</Link>
                </li>
                <li><a className={`text-md  ${setActiveClass(pathname, "")}`}>Currently Reading</a></li>
            </ul>
        </div>
    )
}