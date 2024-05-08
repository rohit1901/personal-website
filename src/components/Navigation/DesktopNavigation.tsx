"use client"
import Link from "next/link";
import {usePathname} from "next/navigation";
import {setActiveClass} from "@website/lib";
import {HomeNavigationItem} from "@website/components/Navigation/HomeNavigationItem";

export const DesktopNavigation = () => {
    const pathname = usePathname()
    return (
        <div className="navbar-center hidden lg:flex border rounded-full mx-auto">
            <ul className="menu menu-horizontal px-1">
                <li>
                    <HomeNavigationItem pathname={pathname}/>
                </li>
                <li><Link href="/about" className={`text-md ${setActiveClass(pathname, "/about")}`}>About me</Link></li>
                <li>
                    <Link href="/articles" className={`text-md ${setActiveClass(pathname, "/articles")}`}>Articles</Link>
                </li>
                <li>
                    <Link href="/projects" className={`text-md ${setActiveClass(pathname, "/projects")}`}>Projects</Link>
                </li>
                <li><Link href="/books" className={`text-md ${setActiveClass(pathname, "/books")}`}>Books</Link></li>
            </ul>
        </div>
    )
}