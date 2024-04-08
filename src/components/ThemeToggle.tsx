"use client"
import {IoMoon, IoSunny} from "react-icons/io5";
import {useEffect, useState} from "react";
import {useLocalStorage} from "usehooks-ts";

export const ThemeToggle = () => {
    const [value, setValue, removeValue] =
        useLocalStorage<string>("sb-react-daisyui-preview-theme", "garden");
    const [themeState, setThemeState] = useState<string>("garden");
    useEffect(() => {
        document.getElementById("custom-substack-embed")
    }, [themeState]);
    return (
        <label className="swap swap-rotate">
            {/* this hidden checkbox controls the state */}
            <input type="checkbox" className="theme-controller" onChange={(event) => {
                const t = event.target.checked ? "black" : "garden";
                const runnerTheme = t === "black" ? "dark" : "light";
                setThemeState(t);
                setValue((prev: string) => prev !== t ? t : prev);
                Array.from(document.getElementsByTagName("html")).forEach((html) => {
                    html.setAttribute("data-theme", t)
                });
                document.getElementById("substack-embed")?.setAttribute("data-theme", t)
                const runners = document.getElementsByClassName("runner")
                Array.from(runners).forEach((runner) => {
                    runner.setAttribute("data-theme", runnerTheme)
                });
                document.getElementById("footer")?.setAttribute("data-theme", runnerTheme)
            }}/>
            {/* sun icon */}
            <IoSunny className="swap-off fill-current w-6 h-6" color="orange"/>
            {/* moon icon */}
            <IoMoon className="swap-on fill-current w-6 h-6"/>

        </label>
    )
}