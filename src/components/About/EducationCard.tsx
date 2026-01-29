import { getMMYYYYDate } from "@website/lib";
import { ContentText } from "@website/components/ContentText";
import Link from "next/link";
import { PhoneHidden } from "@website/components/Phone/PhoneHidden";
import { FaUserGraduate } from "react-icons/fa";
import { AboutContentProps } from "@website/components/About/AboutContent";

export default async function EducationCard({ resume }: AboutContentProps) {
  const education = resume?.education;
  return (
    <div className="rounded-2xl border p-6">
      <h2 className="flex font-semibold items-baseline">
        <div className="rounded-full">
          <FaUserGraduate />
        </div>
        <span className="ml-3">Education</span>
      </h2>
      <ContentText className="mt-2 w-full">
        {education?.map((c, i) => (
          <div className="mt-6 flex flex-row" key={`c.url-${i}`}>
            <div className="w-auto md:w-2/3 lg:w-2/3 xl:w-2/3 2xl:w-2/3 flex flex-row items-center">
              <div className="flex flex-col items-center">
                <ContentText className="">
                  <Link href={c?.url ?? "#"} className="mr-2">
                    <h3 className="font-bold text-sm sm:text-lg">
                      {c.studyType}
                    </h3>
                    <h3 className="font-semibold text-sm">{c.area}</h3>
                    <h3 className="text-sm">{c.institution}</h3>
                  </Link>
                </ContentText>
              </div>
            </div>
            <PhoneHidden className="w-1/3 text-right">
              <ContentText>{getMMYYYYDate(c.startDate, c.endDate)}</ContentText>
            </PhoneHidden>
          </div>
        ))}
      </ContentText>
    </div>
  );
}
