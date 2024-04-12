import {PropsWithChildren} from "react";

type DesktopHiddenProps = {
    className?: string;
}
export const DesktopHidden = ({className, children}: PropsWithChildren<DesktopHiddenProps>) => {
    return (
        <div className={`block xl:hidden 2xl:hidden ${className}`}>
            {children}
        </div>
    )
}