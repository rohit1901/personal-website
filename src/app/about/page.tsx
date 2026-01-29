import Runner from "@website/components/Runner";
import { Navbar } from "@website/components/Navbar";
import { Footer } from "@website/components/Footer";
import { AboutContent } from "@website/components/About/AboutContent";
import { ResumeSchema } from "@website/types";
import { getResumes } from "@website/lib/fetchData";

export default async function About() {
  const resumes: ResumeSchema[] = await getResumes();
  const resume = resumes?.[0] ?? {};
  return (
    <main className="min-w-screen min-h-screen flex-auto">
      <div className="flex flex-col mx-auto h-auto min-h-full">
        <Runner>
          <Navbar />
          <AboutContent resume={resume} />
          <Footer />
        </Runner>
      </div>
    </main>
  );
}
