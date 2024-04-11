import {Runner} from "@website/components/Runner";
import {Navbar} from "@website/components/Navbar";
import {Footer} from "@website/components/Footer";
import {BooksContent} from "@website/components/Books/BooksContent";

export default function Books() {
    return (
        <main className="min-w-screen min-h-screen flex-auto">
            <div className="flex flex-col mx-auto h-auto min-h-full">
                <Runner>
                    <Navbar/>
                    <BooksContent/>
                    <Footer/>
                </Runner>
            </div>
        </main>
    );
}