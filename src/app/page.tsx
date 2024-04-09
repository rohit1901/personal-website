import {Navbar} from "@website/components/Navbar";
import {Hero} from "@website/components/Hero";
import {Carousel} from "@website/components/Carousel";
import {Runner} from "@website/components/Runner";
import {Footer} from "@website/components/Footer";
import {MainContent} from "@website/components/MainContent";

// TODO: Currently reading page
// TODO: Add Book reviews to substack
// TODO: Responsive design
// TODO: Download Resume
// TODO: Upload Assets to S3 and consume via CloudFront
// TODO: MongoDB config and APIs
// TODO: Consume Literal.club GraphQL API for Currently Reading Books and other statistics
// TODO: Readme
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
