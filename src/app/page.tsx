import {Navbar} from "@website/components/Navbar";
import Hero from "@website/components/Home/Hero";
import {Carousel} from "@website/components/Home/Carousel";
import Runner from "@website/components/Runner";
import {Footer} from "@website/components/Footer";
import {MainContent} from "@website/components/Home/MainContent";
// TODO: CI/CD, Heroku, GitHub Actions
export default async function Home() {
    return (
        <main className="min-w-screen min-h-screen flex-auto">
            <div className="flex flex-col mx-auto h-auto min-h-full">
                <Runner>
                    <Navbar/>
                    <Hero/>
                </Runner>
                <Carousel/>
                <Runner>
                    <MainContent/>
                    <Footer/>
                </Runner>
            </div>
        </main>
    );
}
