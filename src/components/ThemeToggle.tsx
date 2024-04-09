"use client"
import {IoMoon, IoSunny} from "react-icons/io5";
import {useEffect} from "react";
import {useLocalStorage} from "usehooks-ts";
import {usePathname} from "next/navigation";
import {handleTheme} from "@website/lib";

export const ThemeToggle = () => {
    const pathname = usePathname()
    const [value, setValue, removeValue] =
        useLocalStorage<string>("sb-react-daisyui-preview-theme", "garden");
    useEffect(() => {
        handleTheme(value)
    }, [value, pathname]);
    return (
        <label className="swap swap-rotate btn btn-circle bg-transparent">
            {/* this hidden checkbox controls the state */}
            <input type="checkbox" className="theme-controller" defaultChecked={false} onChange={() => {
                setValue(prevState => prevState === "garden" ? "black" : "garden")
            }}/>
            {/* sun icon */}
            <IoSunny className="swap-off fill-current w-6 h-6" color="orange"/>
            {/* moon icon */}
            <IoMoon className="swap-on fill-cyan-500 w-6 h-6"/>

        </label>
    )
}