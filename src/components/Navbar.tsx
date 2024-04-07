import {ThemeToggle} from "@website/components/ThemeToggle";

export const Navbar = () => {
    return (
        <div className="mx-auto navbar bg-base-100 w-1/2 border rounded-full my-4 px-8">
            {/*Mobile Navigation*/}
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16"/>
                        </svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a>About Me</a></li>
                        <li>
                            <a>Articles</a>
                        </li>
                        <li><a>Project</a></li>
                        <li><a>Uses</a></li>
                    </ul>
                </div>
            </div>
            {/*Desktop Navigation*/}
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><a className="text-lg">About Me</a></li>
                    <li>
                        <a className="text-lg">Articles</a>
                    </li>
                    <li><a className="text-lg">Projects</a></li>
                    <li><a className="text-lg">Uses</a></li>
                </ul>
            </div>
            <div className="navbar-end">
                <ThemeToggle/>
            </div>
        </div>
    )
}