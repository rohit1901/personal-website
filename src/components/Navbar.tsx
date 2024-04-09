import {ThemeToggle} from "@website/components/ThemeToggle";
import {MobileNavigation} from "@website/components/Navigation/MobileNavigation";
import {DesktopNavigation} from "@website/components/Navigation/DesktopNavigation";

export const setActiveClass = (currentPath?: string | null, path?: string | null) => {
    if (currentPath === path) {
        return "text-cyan-500"
    }
}
export const Navbar = () => {
    return (
        <div className="navbar my-4 px-8">
            {/*Mobile Navigation*/}
            <MobileNavigation/>
            {/*Desktop Navigation*/}
            <DesktopNavigation/>
            <div className="navbar-end">
                <ThemeToggle/>
            </div>
        </div>
    )
}