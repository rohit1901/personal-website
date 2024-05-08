import {PropsWithChildren} from "react";

export default function Runner({children}: PropsWithChildren) {
    return (
        <div className="flex flex-col mx-auto lg:w-3/4 w-full h-auto min-h-full runner" data-theme="">
            {children}
        </div>
    )
}