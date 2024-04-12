import {PropsWithChildren} from "react";

type ContentTextProps = {
    className?: string;
}
export const ContentText = ({className, children}: PropsWithChildren<ContentTextProps>) => {
    return (
        <div className={`text-xxs md:text-sm lg:text-sm xl:text-sm 2xl:text-sm ${className}`}>
            {children}
        </div>
    )
}