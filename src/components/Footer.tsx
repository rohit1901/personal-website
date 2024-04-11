"use client"
import Link from "next/link";
import {setActiveClass} from "@website/components/Navbar";
import {usePathname} from "next/navigation";

export const Footer = () => {
    const pathname = usePathname();
    return (
        <footer className="footer p-10 flex md:flex-row lg:flex-row sm:flex-col justify-between border-t" id="footer">
            <nav className="flex flex-row mx-auto md:mx-0 lg:mx-0">
                <Link href="/about" className={`link link-hover mr-2 ${setActiveClass(pathname, "/about")}`}>About Me</Link>
                <Link href="/articles" className={`link link-hover mr-2 ${setActiveClass(pathname, "/articles")}`}>Articles</Link>
                <Link href="/projects" className={`link link-hover mr-2 ${setActiveClass(pathname, "/projects")}`}>Projects</Link>
                <Link href="/books" className={`link link-hover mr-2 ${setActiveClass(pathname, "/books")}`}>Books</Link>
            </nav>
            <aside className="flex mx-auto md:mx-0 lg:mx-0">
                <p className="text-right">© 2024 Rohit Khanduri. All rights reserved.</p>
            </aside>
        </footer>
    )
}