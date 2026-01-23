import { Fragment } from "react";
import { getMMYYYYDate } from "@website/lib";
import { ContentText } from "@website/components/ContentText";
import Link from "next/link";
import { PhoneHidden } from "@website/components/Phone/PhoneHidden";
import { MdOutlineVolunteerActivism } from "react-icons/md";
import { getVolunteering } from "@website/lib/fetchData";
import { AboutContentProps } from "./AboutContent";
// TODO: fix image, dates, and highlights
export default async function Volunteering({ resume }: AboutContentProps) {
  const volunteering = resume?.volunteer;
  const highlights = volunteering.map((v) => v.highlights);
  return (
    <div className="rounded-2xl border p-6">
      <h2 className="flex font-semibold items-baseline">
        <div className="rounded-full">
          <MdOutlineVolunteerActivism />
        </div>
        <span className="ml-3">Volunteering</span>
      </h2>
      <ContentText className="mt-2 w-full">
        {volunteering?.map((c, i) => (
          <Fragment key={`c.url-${i}`}>
            <div className="mt-6 flex flex-row">
              <div className="w-auto md:w-2/3 lg:w-2/3 xl:w-2/3 2xl:w-2/3 flex flex-row items-center">
                <div className="flex flex-col">
                  <Link href={c?.url ?? "#"} className="mr-2">
                    <h2 className="text-lg font-semibold">{c.organization}</h2>
                  </Link>
                  <span className="text-sm">{c.summary}</span>
                </div>
              </div>
              <PhoneHidden className="w-1/3 text-right">
                <ContentText>
                  {getMMYYYYDate(c.startDate, c.endDate)}
                </ContentText>
              </PhoneHidden>
            </div>

            <ul className="m-5 ml-3 list-disc text-sm">
              {highlights?.map((h, i) => <li key={`highlight-${i}`}>{h}</li>)}
            </ul>
          </Fragment>
        ))}
      </ContentText>
    </div>
  );
}
