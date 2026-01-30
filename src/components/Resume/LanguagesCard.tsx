import { ReactNode } from "react";
import { ContentText } from "@website/components/ContentText";
import { ResumeSchema } from "@website/types";
import { FaLanguage } from "react-icons/fa";

type CardHeading = {
  icon: ReactNode;
  text: string;
};
type LanguagesCardProps = {
  heading?: CardHeading;
  resume: ResumeSchema;
};
export default async function LanguagesCard({
  heading = {
    icon: <FaLanguage className="w-5 h-5 text-gray-400" />,
    text: "Languages",
  },
  resume,
}: LanguagesCardProps) {
  const languages = resume.resumeLanguages;
  return (
    <div className="flex flex-col items-start rounded-2xl border p-6">
      <h2 className="flex font-semibold items-start">
        <div className="rounded-full">{heading.icon}</div>
        <span className="ml-3">{heading.text}</span>
      </h2>
      <ContentText className="mt-2 w-full">
        <div className="flex flex-wrap gap-2">
          {languages?.map((language) => (
            <span key={language.id} className="badge badge-outline">
              {language.language} ({language.fluency})
            </span>
          ))}
        </div>
      </ContentText>
    </div>
  );
}
