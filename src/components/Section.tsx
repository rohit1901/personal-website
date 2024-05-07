import {PropsWithChildren} from "react";

type SectionProps = {
    className?: string
}
export default async function Section({children, className}: PropsWithChildren<SectionProps>) {
    return (
        <section className={`flex h-full m-10 md:m-20 lg:m-20 xl:m-20 2xl:m-20 ${className}`}>
            {children}
        </section>
    )
}