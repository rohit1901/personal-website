import { Navbar } from "@website/components/Navbar";
import Hero from "@website/components/Home/Hero";
import { Carousel } from "@website/components/Home/Carousel";
import Runner from "@website/components/Runner";
import { Footer } from "@website/components/Footer";
import { MainContent } from "@website/components/Home/MainContent";
import { ResumeSchema } from "@website/types";
import { getResumes } from "@website/lib/fetchData";

export default async function Home() {
  const resumes: ResumeSchema[] = await getResumes();
  const resume = resumes?.[0] ?? {};

  return (
    <main className="min-w-screen min-h-screen flex-auto">
      <div className="flex flex-col mx-auto h-auto min-h-full">
        <Runner>
          <Navbar />
          <Hero basics={resume.basicInformation} />
        </Runner>
        <Carousel />
        <Runner>
          <MainContent resume={resume} />
          <Footer />
        </Runner>
      </div>
    </main>
  );
}
