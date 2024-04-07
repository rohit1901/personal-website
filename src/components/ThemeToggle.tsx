"use client"
import {IoMoon, IoSunny} from "react-icons/io5";
import {useTheme} from "react-daisyui";

export const ThemeToggle = () => {
    const {setTheme} = useTheme("garden");
    return (
        <label className="swap swap-rotate">
            {/* this hidden checkbox controls the state */}
            <input type="checkbox" className="theme-controller" onChange={(event) => {
                const t = event.target.checked ? "black" : "garden";
                const runnerTheme = t === "black" ? "dark" : "light";
                setTheme(t)
                window.localStorage.setItem("sb-react-daisyui-preview-theme", t);
                Array.from(document.getElementsByTagName("html")).forEach((html) => {
                    html.setAttribute("data-theme", t)
                });
                const runners = document.getElementsByClassName("runner")
                Array.from(runners).forEach((runner) => {
                    runner.setAttribute("data-theme", runnerTheme)
                });
                document.getElementById("footer")?.setAttribute("data-theme", runnerTheme)
            }}/>
            {/* sun icon */}
            <IoSunny className="swap-off fill-current w-6 h-6"/>
            {/* moon icon */}
            <IoMoon className="swap-on fill-current w-6 h-6"/>

        </label>
    )
}