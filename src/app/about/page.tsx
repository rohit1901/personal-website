import type { Metadata } from "next";
import { AboutView } from "@website/components/About/AboutView";
import { getEnglishResume } from "@website/lib/server/resume";

export const metadata: Metadata = {
  title: "About — Rohit Khanduri",
  description:
    "Rohit Khanduri is an AWS Cloud & Software Architect focused on Well-Architected cloud platforms, Infrastructure as Code, and cloud-native engineering.",
};

export default async function About() {
  const resume = await getEnglishResume();
  return (
    <div className="ds-container py-16 md:py-20">
      <AboutView resume={resume} />
    </div>
  );
}
