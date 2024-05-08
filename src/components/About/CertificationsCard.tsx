import {ContentText} from "@website/components/ContentText";
import Link from "next/link";
import {PhoneHidden} from "@website/components/Phone/PhoneHidden";
import {GrCertificate} from "react-icons/gr";
import {getCertifications} from "@website/lib/fetchData";

export default async function CertificationsCard() {
    const certificates = await getCertifications()
    return (<div className="rounded-2xl border p-6">
        <h2 className="flex font-semibold items-baseline">
            <div className="rounded-full"><GrCertificate/></div>
            <span className="ml-3">Certifications</span>
        </h2>
        <ContentText className="mt-2 w-full flex-wrap">
            {certificates?.map((c, i) => (
                <div className="mt-6 flex flex-row" key={`c.title-${i}`}>
                    <div className="w-auto md:w-2/3 lg:w-2/3 xl:w-2/3 2xl:w-2/3 flex flex-row items-center">
                        <div className="flex flex-col items-center">
                            <ContentText className="">
                                <Link href={c?.url ?? "#"} className="mr-2">
                                    <h3 className="font-bold text-sm sm:text-lg">{c.name}</h3>
                                    <h3 className="font-semibold text-sm">{c.issuer}</h3>
                                </Link>
                            </ContentText>
                        </div>
                    </div>
                    <PhoneHidden className="w-1/3 text-right">
                        <ContentText>{c.date}</ContentText>
                    </PhoneHidden>
                </div>
            ))}
        </ContentText>
    </div>);
}