import Link from "next/link";
import {setActiveClass} from "@website/lib";

export const HomeNavigationItem = ({pathname}: { pathname: string | null }) => {
    if (pathname === "/") return null
    return <Link href="/" className={`text-md ${setActiveClass(pathname, "/")}`}>Home</Link>
}