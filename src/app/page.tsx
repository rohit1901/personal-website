import {Navbar} from "@website/components/Navbar";
import {Hero} from "@website/components/Hero";
import {Carousel} from "@website/components/Carousel";
import {Runner} from "@website/components/Runner";
import {Footer} from "@website/components/Footer";
import {MainContent} from "@website/components/MainContent";

/**
 * curl -X GET \
 * 'https://graph.instagram.com/me/media?fields=caption,media_url&access_token=IGQWRNaXQ1OWtqSHRTRHo5M19HZA2FXY0NrRFU4d2xDeEJ2WENoMHFHblFRSExmV1NrSHFETFJEeWFXeHdpSndPSV9IMlR5YVFMVG5ocmVPQjBPWHk2RGU5YmdKZA2ZAGNEVsb0hybmNKdDZATQ3NIUGJvQ2QxSWVGWUUZD'
 */
// TODO: Currently reading page
// TODO: Add Book reviews to substack
// TODO: Responsive design
// TODO: Download Resume
// TODO: Upload Assets to S3 and consume via CloudFront
// TODO: MongoDB config and APIs
// TODO: Consume Literal.club GraphQL API for Currently Reading Books and other statistics
// TODO: Readme
// TODO: CI/CD, Heroku, GitHub Actions
// TODO: Instagram API for photos
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
