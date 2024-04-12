import {PropsWithChildren} from "react";

type PhoneShowProps = {
    className?: string;
}
export const PhoneShow = ({className, children}: PropsWithChildren<PhoneShowProps>) => {
    return (
        <div className={`block md:hidden lg:hidden xl:hidden 2xl:hidden ${className}`}>
            {children}
        </div>
    )
}