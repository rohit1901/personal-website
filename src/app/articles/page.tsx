import {Runner} from "@website/components/Runner";
import {Navbar} from "@website/components/Navbar";
import {Footer} from "@website/components/Footer";
import {ArticlesContent} from "@website/components/ArticlesContent";

export default function Articles() {
    return (
        <main className="min-w-screen min-h-screen flex-auto">
            <div className="flex flex-col mx-auto h-auto min-h-full">
                <Runner>
                    <Navbar/>
                    <ArticlesContent/>
                    <Footer/>
                </Runner>
            </div>
        </main>
    );
}