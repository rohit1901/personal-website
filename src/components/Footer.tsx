export const Footer = () => {
    return (
        <footer className="footer p-10 bg-neutral text-neutral-content flex md:flex-row lg:flex-row flex-col justify-between">
            <nav className="flex flex-row mx-auto md:mx-0 lg:mx-0">
                <a className="link link-hover">About Me</a>
                <a className="link link-hover">Articles</a>
                <a className="link link-hover">Projects</a>
                <a className="link link-hover">Uses</a>
            </nav>
            <aside className="flex mx-auto md:mx-0 lg:mx-0">
                <p className="text-right">© 2024 Rohit Khanduri. All rights reserved.</p>
            </aside>
        </footer>
    )
}