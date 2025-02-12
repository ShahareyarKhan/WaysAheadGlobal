import { createContext, useContext, useEffect, useState } from "react";

const ModeContext = createContext();

export const ModeProvider = ({ children }) => {
    // Get theme from localStorage or default to light
    const [darkMode, setDarkMode] = useState(
        localStorage.getItem("theme") || "light"
    );

    // Toggle between dark and light mode
    const toggleMode = () => {
        setDarkMode(prevMode => {
            const newMode = prevMode === "light" ? "dark" : "light";
            localStorage.setItem("theme", newMode);
            return newMode;
        });
    };

    // Apply theme to <html> tag
    useEffect(() => {
        if (darkMode === "dark") {
            document.documentElement.classList.add("dark");
            document.body.style.backgroundColor = "#00050b";
            document.body.style.color = "#fff";
        } else {
            document.documentElement.classList.remove("dark");
            document.body.style.backgroundColor = "#fff";
            document.body.style.color = "#000";

        }
    }, [darkMode]);

    return (
        <ModeContext.Provider value={{ darkMode, toggleMode }}>
            {children}
        </ModeContext.Provider>
    );
};

// Custom hook to use the ModeContext
export const useMode = () => useContext(ModeContext);
