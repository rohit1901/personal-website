import {PropsWithChildren} from "react";

type DesktopShowProps = {
    className?: string;
}
export const DesktopShow = ({className, children}: PropsWithChildren<DesktopShowProps>) => {
    return (
        <div className={`hidden xl:block 2xl:block ${className}`}>
            {children}
        </div>
    )
}