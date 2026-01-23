import { Fragment } from "react";
import AboutHero from "@website/components/About/AboutHero";
import Section from "@website/components/Section";
import Volunteering from "@website/components/About/Volunteering";
import AwardsCard from "@website/components/About/AwardsCard";
import CertificationsCard from "@website/components/About/CertificationsCard";
import EducationCard from "@website/components/About/EducationCard";
import { ResumeSchema } from "@website/types";
export type AboutContentProps = {
  resume: ResumeSchema;
};

export const AboutContent = ({ resume }: AboutContentProps) => {
  return (
    <Fragment>
      <AboutHero resume={resume} />
      <Section className="grid xl:grid-cols-2 2xl:grid-cols-2 gap-4">
        <EducationCard resume={resume} />
        <Volunteering resume={resume} />
        <AwardsCard resume={resume} />
        <CertificationsCard resume={resume} />
      </Section>
    </Fragment>
  );
};
