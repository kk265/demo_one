// ThemeContext.jsx
import React, { createContext, useState } from "react";

// Create the ThemeContext
export const ThemeContext = createContext();

// Create a ThemeProvider component
export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState("light"); // Default theme

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};
