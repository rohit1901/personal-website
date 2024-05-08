import Runner from "@website/components/Runner";
import {Navbar} from "@website/components/Navbar";
import {Footer} from "@website/components/Footer";
import {AboutContent} from "@website/components/About/AboutContent";

export default function About() {
    return (
        <main className="min-w-screen min-h-screen flex-auto">
            <div className="flex flex-col mx-auto h-auto min-h-full">
                <Runner>
                    <Navbar/>
                    <AboutContent/>
                    <Footer/>
                </Runner>
            </div>
        </main>
    );
}