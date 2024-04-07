import {PropsWithChildren} from "react";

export const Runner = ({children}: PropsWithChildren) => {
    return (
        <div className="flex flex-col mx-auto w-3/4 h-auto min-h-full" data-theme="dark">
            {children}
        </div>
    )
}