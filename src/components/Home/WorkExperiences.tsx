import { ReactNode } from "react";
import Image from "next/image";
import { getImageUrl } from "@website/lib";
import Link from "next/link";
import { ContentText } from "@website/components/ContentText";
import { PhoneHidden } from "@website/components/Phone/PhoneHidden";
import { ResumeSchema } from "@website/types";
import AvatarPlaceholder from "../AvatarPlaceholder";

type CardHeading = {
  icon: ReactNode;
  text: string;
};
type CardContent = {
  name: string;
  position: string;
  image: string;
  date: string;
  url: string;
};
type CardProps = {
  heading: CardHeading;
  content?: CardContent[];
  button?: ReactNode;
  description?: boolean;
};
type WorkExperienceProps = {
  resume: ResumeSchema;
} & CardProps;
export default async function WorkExperiences({
  heading,
  button,
  resume,
  description = false,
}: WorkExperienceProps) {
  const workExperience = resume.work;
  return (
    <div className="flex flex-col items-start rounded-2xl border p-6">
      <h2 className="flex font-semibold items-start">
        <div className="rounded-full">{heading.icon}</div>
        <span className="ml-3">{heading.text}</span>
      </h2>
      <ContentText className="mt-2 w-full">
        {workExperience?.map((c, i) => (
          <div className="mt-6 flex flex-row" key={`c.image-${i}`}>
            <div className="w-2/3 sm:w-full flex flex-row items-center">
              <Link href={c.url} className="mr-2">
                <AvatarPlaceholder text={c.name} size="xs" />
              </Link>
              <div className="flex flex-col">
                <ContentText className="">
                  <h3 className="w-full flex-none font-medium text-sm">
                    {c.name}
                  </h3>
                </ContentText>
                <ContentText>
                  <p>{c.position}</p>
                </ContentText>
                {description && c.summary && (
                  <ContentText>
                    <p className="text-sm text-gray-500">{c.summary}</p>
                  </ContentText>
                )}
              </div>
            </div>
            <PhoneHidden className="w-1/3 text-right">
              <ContentText>{c.date}</ContentText>
            </PhoneHidden>
          </div>
        ))}
      </ContentText>
      {button}
    </div>
  );
}
