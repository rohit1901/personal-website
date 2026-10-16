import type { Metadata } from "next";
import { ResumeView } from "@website/components/Resume/ResumeView";
import { getResumeWithCertifications } from "@website/lib/server/resume";
import { site } from "@website/content/site";

export const metadata: Metadata = {
  title: "Résumé — Rohit Khanduri",
  description:
    "Rohit Khanduri's résumé: AWS Cloud & Software Architect with 14+ years of experience across cloud architecture, platform engineering, and enterprise systems.",
};

export default async function Resume() {
  const resume = await getResumeWithCertifications();

  return (
    <div className="ds-container py-16 md:py-20">
      <div className="mb-10 flex flex-wrap gap-x-6 gap-y-2">
        <a
          href={site.resume.en}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-medium text-accent underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm"
        >
          Download résumé (EN) →
        </a>
        <a
          href={site.resume.de}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-muted-foreground hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm"
        >
          Lebenslauf (DE) →
        </a>
      </div>

      {resume ? (
        <ResumeView resume={resume} />
      ) : (
        <p className="ds-prose">
          Résumé content is temporarily unavailable. Please use the download
          links above.
        </p>
      )}
    </div>
  );
}
