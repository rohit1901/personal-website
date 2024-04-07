import {ReactNode} from "react";
import Image from "next/image";

type CardHeading = {
    icon: ReactNode;
    text: string;
}
type CardContent = {
    image: string;
    title: string;
    subtitle: string;
    aside: string;
}
type CardProps = {
    heading: CardHeading,
    content: CardContent[]
    button?: ReactNode;
}
export const Card = ({heading, content, button}: CardProps) => {
    return (
        <div className="lg:pl-16 xl:pl-24">
            <div className="rounded-2xl border p-6">
                <h2 className="flex font-semibold items-start">
                    <div className="rounded-full">{heading.icon}</div>
                    <span className="ml-3">{heading.text}</span>
                </h2>
                <div className="mt-2 text-sm">
                    {content.map((c, i) => (
                        <div className="mt-6 flex flex-row" key={`c.image-${i}`}>
                            <div className="w-2/3 flex flex-row items-center">
                                <Image src={c.image} width="100" height="100" alt="rohit avatar" className="rounded-full w-6 h-6 mr-2"/>
                                <div className="flex flex-col">
                                    <h3 className="w-full flex-none text-sm font-medium">{c.title}</h3>
                                    <p className="text-xs">{c.subtitle}</p>
                                </div>
                            </div>
                            <div className="w-1/3 text-right">
                                <aside className="text-xs">{c.aside}</aside>
                            </div>
                        </div>
                    ))}
                </div>
                {button}
            </div>
        </div>
    )
}