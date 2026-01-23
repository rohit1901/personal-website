import { ContentText } from "@website/components/ContentText";
import Link from "next/link";
import { PhoneHidden } from "@website/components/Phone/PhoneHidden";
import { GrCertificate } from "react-icons/gr";
import { getCertifications } from "@website/lib/fetchData";
import { AboutContentProps } from "./AboutContent";
import { Certificate } from "@website/types";
import Image from "next/image";

export default async function CertificationsCard({
  resume,
}: AboutContentProps) {
  const certificates: Certificate[] = resume.certificates;
  return (
    <div className="rounded-2xl border p-6">
      <h2 className="flex font-seXmibold items-baseline">
        <div className="rounded-full">
          <GrCertificate />
        </div>
        <span className="ml-3">Certifications</span>
      </h2>
      <ContentText className="mt-2 w-full flex-wrap">
        {certificates?.map((c, i) => (
          <div className="mt-6 flex flex-row" key={`c.title-${i}`}>
            <PhoneHidden className="mr-4 text-right">
              <Image
                src={c.image.src}
                alt={c.image.alt}
                className="rounded-full w-10 h-10"
                height={50}
                width={50}
              />
            </PhoneHidden>
            <div className="w-auto md:w-2/3 lg:w-2/3 xl:w-2/3 2xl:w-2/3 flex flex-row items-center">
              <div className="flex flex-col items-center">
                <ContentText className="">
                  <Link href={c?.link ?? "#"} className="mr-2">
                    <h3 className="font-bold text-sm sm:text-lg">{c.title}</h3>
                    <h3 className="font-semibold text-sm">{c.description}</h3>
                  </Link>
                </ContentText>
              </div>
            </div>
          </div>
        ))}
      </ContentText>
    </div>
  );
}
