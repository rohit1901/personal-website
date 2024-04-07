import {ThemeToggle} from "@website/components/ThemeToggle";
import {CgMenuLeft} from "react-icons/cg";
import Image from "next/image";

export const Navbar = () => {
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
                            <li><a>About Me</a></li>
                            <li>
                                <a>Articles</a>
                            </li>
                            <li><a>Project</a></li>
                            <li><a>Uses</a></li>

                        </ul>
                    </div>
                </div>
            </div>
            {/*Desktop Navigation*/}
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><a className="text-md">About Me</a></li>
                    <li>
                        <a className="text-md">Articles</a>
                    </li>
                    <li><a className="text-md">Projects</a></li>
                    <li><a className="text-md">Uses</a></li>
                </ul>
            </div>
            <div className="navbar-end">
                <ThemeToggle/>
            </div>
        </div>
    )
}