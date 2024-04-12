import {PropsWithChildren} from "react";

type PhoneHiddenProps = {
    className?: string;
}
export const PhoneHidden = ({className, children}: PropsWithChildren<PhoneHiddenProps>) => {
    return (
        <div className={`hidden md:block lg:block xl:block 2xl:block ${className}`}>
            {children}
        </div>
    )
}