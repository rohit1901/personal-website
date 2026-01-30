import { ReactNode } from "react";
import { ContentText } from "@website/components/ContentText";
import { ResumeSchema } from "@website/types";
import { FaCode } from "react-icons/fa";

type CardHeading = {
  icon: ReactNode;
  text: string;
};
type SkillsCardProps = {
  heading?: CardHeading;
  resume: ResumeSchema;
};
export default async function SkillsCard({
  heading = {
    icon: <FaCode className="w-5 h-5 text-gray-400" />,
    text: "Skills",
  },
  resume,
}: SkillsCardProps) {
  const skills = resume.skills;
  if (!skills || skills.length === 0) return null;
  return (
    <div className="flex flex-col items-start rounded-2xl border p-6">
      <h2 className="flex font-semibold items-start">
        <div className="rounded-full">{heading.icon}</div>
        <span className="ml-3">{heading.text}</span>
      </h2>
      <ContentText className="mt-2 w-full">
        <div className="flex flex-wrap gap-2">
          {skills?.map((skill) => (
            <span key={skill.id} className="badge badge-outline">
              {skill.name}
            </span>
          ))}
        </div>
      </ContentText>
    </div>
  );
}
