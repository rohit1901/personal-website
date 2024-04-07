import {Navbar} from "@website/components/Navbar";
import {Hero} from "@website/components/Hero";
import {Carousel} from "@website/components/Carousel";

export default function Home() {
    return (
        <main className="min-w-screen min-h-screen flex-auto" data-theme="forest">
            <div className="flex flex-col mx-auto h-auto min-h-full">
                <div className="flex flex-col mx-auto w-3/4 h-auto min-h-full" data-theme="dark">
                    <Navbar/>
                    <Hero/>
                </div>
                <Carousel/>
                <footer className="footer p-10 bg-neutral text-neutral-content w-3/4 mx-auto flex justify-between" data-theme="dark">
                    <nav className="grid grid-flow-col gap-4">
                        <a className="link link-hover">About Me</a>
                        <a className="link link-hover">Articles</a>
                        <a className="link link-hover">Projects</a>
                        <a className="link link-hover">Uses</a>
                    </nav>
                    <aside>
                        <p>© 2024 Rohit Khanduri. All rights reserved.</p>
                    </aside>
                </footer>
            </div>
        </main>
    );
}
