import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

function Header() {
    // Initialize the theme from localStorage, fallback to "light"
    const [theme, setTheme] = useState(() => {
        const savedTheme = localStorage.getItem("theme");
        return savedTheme ? savedTheme : "light";
    });

    // Sync theme with localStorage
    useEffect(() => {
        localStorage.setItem("theme", theme);
    }, [theme]);

    // Toggle between light and dark themes
    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    };

    return (
        <header
            className="navbar-area"
            style={{
                background: theme === "dark" ? "#333" : "#fff",
                color: theme === "dark" ? "#fff" : "#333",
            }}
        >
            <div className="main-navbar">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-3">
                            <div className="logo">
                                <NavLink to="/">
                                    <img
                                        src="../images/black-logo.png"
                                        alt="img"
                                    />
                                </NavLink>
                            </div>
                        </div>

                        <div className="col-md-9">
                            <ul className="navigation">
                                <li>
                                    <NavLink
                                        to="/"
                                        style={({ isActive }) => ({
                                            color: isActive
                                                ? "#f16425"
                                                : "#000",
                                        })}
                                    >
                                        Home
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to="/about"
                                        style={({ isActive }) => ({
                                            color: isActive
                                                ? "#f16425"
                                                : "#000",
                                        })}
                                    >
                                        About
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to="/contact"
                                        style={({ isActive }) => ({
                                            color: isActive
                                                ? "#f16425"
                                                : "#000",
                                        })}
                                    >
                                        Contact
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <button onClick={toggleTheme}>
                Toggle Theme to {theme === "light" ? "Dark" : "Light"}
            </button>
        </header>
    );
}

export default Header;
