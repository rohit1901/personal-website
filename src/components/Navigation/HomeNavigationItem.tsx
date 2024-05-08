import Link from "next/link";
import {setActiveClass} from "@website/lib";

export const HomeNavigationItem = ({pathname, src = "head"}: { pathname: string | null, src?: "head" | "foot" }) => {
    if (pathname === "/") return null
    const item = <Link href="/" className={`text-md ${setActiveClass(pathname, "/")}`}>Home</Link>
    if (src === "head") return <li>{item}</li>
    return item
}