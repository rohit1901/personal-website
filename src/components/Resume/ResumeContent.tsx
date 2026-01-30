import { Fragment } from "react";
import Section from "@website/components/Section";
import Link from "next/link";
import Image from "next/image";
import { ResumeSchema } from "@website/types";
import { NetworkProfiles } from "@website/components/NetworkProfiles";
import { Divider } from "@website/components/Divider";
import { FaEnvelope, FaPhone, FaGlobe, FaMapMarkerAlt } from "react-icons/fa";
import CertificationsCard from "@website/components/About/CertificationsCard";
import EducationCard from "@website/components/About/EducationCard";
import AwardsCard from "@website/components/About/AwardsCard";
import Volunteering from "@website/components/About/Volunteering";
import WorkExperiences from "@website/components/Home/WorkExperiences";
import { JobsCard } from "@website/components/Home/MainContent";
import SkillsCard from "@website/components/Resume/SkillsCard";
import LanguagesCard from "@website/components/Resume/LanguagesCard";

export type ResumeContentProps = {
  resume: ResumeSchema;
};

export const ResumeContent = ({ resume }: ResumeContentProps) => {
  const basics = resume?.basicInformation;

  return (
    <Fragment>
      <Section className="xl:flex-wrap 2xl:flex-wrap flex-wrap-reverse">
        <div className="flex flex-col xl:w-1/2 2xl:w-1/2">
          <h1 className="text-4xl font-bold my-5">{basics?.name}</h1>
          <h2 className="text-2xl font-semibold my-3">{basics?.label}</h2>
          <div className="mt-6 space-y-4 text-base">
            <p>{basics?.summary}</p>
          </div>
          <div className="mt-6 space-y-2">
            {basics?.email && (
              <div className="flex items-center">
                <FaEnvelope className="w-5 h-5 mr-3" />
                <Link
                  href={`mailto:${basics?.email}`}
                  className="hover:text-cyan-500"
                >
                  {basics?.email}
                </Link>
              </div>
            )}
            {basics?.phone && (
              <div className="flex items-center">
                <FaPhone className="w-5 h-5 mr-3" />
                <span>{basics?.phone}</span>
              </div>
            )}
            {basics?.url && (
              <div className="flex items-center">
                <FaGlobe className="w-5 h-5 mr-3" />
                <Link href={basics?.url} className="hover:text-cyan-500">
                  {basics?.url}
                </Link>
              </div>
            )}
            {basics?.location && (
              <div className="flex items-center">
                <FaMapMarkerAlt className="w-5 h-5 mr-3" />
                <span>
                  {basics?.location.city}, {basics?.location.region},{" "}
                  {basics?.location.countryCode}
                </span>
              </div>
            )}
          </div>
        </div>
        {basics && (
          <div className="xl:ml-auto 2xl:ml-auto mx-auto">
            {basics.image && (
              <Image
                src={basics.image.src}
                alt={basics.image.alt}
                className="mask mask-squircle object-cover"
                height={400}
                width={400}
              />
            )}
            <div className="mt-6">
              <div className="flex flex-col mt-6">
                <NetworkProfiles
                  profiles={basics?.profiles ?? []}
                  showNetworks={true}
                  className="my-2 flex flex-row"
                />
              </div>
            </div>
          </div>
        )}
      </Section>

      <Section className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <WorkExperiences {...JobsCard} resume={resume} description />
        <div className="flex flex-col gap-4">
          <SkillsCard resume={resume} />
          <LanguagesCard resume={resume} />
        </div>
      </Section>

      <Section className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <EducationCard resume={resume} />
        <Volunteering resume={resume} />
      </Section>
      <Section className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <CertificationsCard resume={resume} />
        <AwardsCard resume={resume} />
      </Section>
    </Fragment>
  );
};
