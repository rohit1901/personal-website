import {ThemeToggle} from "@website/components/ThemeToggle";
import {MobileNavigation} from "@website/components/Navigation/MobileNavigation";
import {DesktopNavigation} from "@website/components/Navigation/DesktopNavigation";

export const Navbar = () => {
    return (
        <div className="sticky top-0 left-0 right-0 z-50" data-theme="">
            <div className="navbar my-4 px-8">
                {/*Mobile Navigation*/}
                <MobileNavigation/>
                {/*Desktop Navigation*/}
                <DesktopNavigation/>
                <div className="navbar-end">
                    <ThemeToggle/>
                </div>
            </div>
        </div>
    )
}