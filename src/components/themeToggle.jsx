import { Moon, Sun } from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "../lib/utils";

export const ThemeToggle = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);
    useEffect(() => {
        const savedTheme = localStorage.getItem("theme");
        if (savedTheme === "dark") {
            setIsDarkMode(true);
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
            setIsDarkMode(false);
        }
    }, []); //add [] in the end so only run once
    const toggleTheme = () => {
        isDarkMode ? (document.documentElement.classList.remove("dark"), localStorage.setItem("theme", "light")) : 
        (document.documentElement.classList.add("dark"), localStorage.setItem("theme", "dark"));
        setIsDarkMode(!isDarkMode);
    };
    // max-sm:hidden for hidden the button on small screens
    return (
        <button onClick={toggleTheme} className={cn("fixed top-5 right-5 z-50",
            "p-2 rounded-full transition-colors duration-300 focus:outline-hidden")}>
        {isDarkMode ? (
            <Sun className="h-6 w-6 text-yellow-300" />
        ): ( 
        <Moon className="h-6 w-6 text-blue-900"/>
    )}
</button>
);
}
