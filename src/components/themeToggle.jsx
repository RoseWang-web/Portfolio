import { Moon, Sun } from "lucide-react";
import { useState } from "react";

export const ThemeToggle = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const toggleTheme = () => {
        isDarkMode ? document.documentElement.classList.remove("dark") : 
        document.documentElement.classList.add("dark");

        setIsDarkMode(!isDarkMode);
    };
    return (
        <button onClick={toggleTheme}>
        {" "}
        {isDarkMode ? (
            <Sun className="h-6 w-6 text-yellow-300" />
        ): ( 
        <Moon className="h-6 w-6 text-blue-900"/>
    )}
</button>
);
}