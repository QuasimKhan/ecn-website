import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import ToggleSwitch from "./ToggleSwitch"; // Import the toggle switch component
import logo from "./logo.png"; // Import the logo image
import { useTheme } from "./ThemeContext"; // Import the theme context

export default function Navigation() {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const location = useLocation();
  const { darkMode, toggleDarkMode } = useTheme();

  const toggleMenu = () => {
    setOpen(!open);
  };

  const isActive = (path) => {
    return location.pathname === path ? "text-blue-500" : "text-white";
  };

  const handleToggleDarkMode = () => {
    toggleDarkMode();
    const newMessage = darkMode ? "Light mode enabled" : "Dark mode enabled";
    setMessage(newMessage);
    setTimeout(() => setMessage(""), 3000); // Hide message after 3 seconds
  };

  return (
    <>
      <div className="flex justify-center w-full fixed top-5 font-serif">
        <nav
          className={`h-20 w-5/6 rounded-lg flex items-center justify-between p-4 transition-colors duration-300 dark:bg-gray-900 dark:shadow-[0_0_10px_5px_rgba(59,130,246,1)] bg-gray-800 shadow-[0_0_10px_5px_rgba(211,211,211,1)] text-white z-50`}
        >
          <a href="/" className="flex items-center justify-center z-30">
            <img
              src={logo}
              alt="logo"
              className="logo w-32 h-32 md:w-44 md:h-44 object-contain"
            />
          </a>
          <div className="flex items-center">
            <ul
              className={`flex flex-col justify-end md:flex-row md:space-x-4 fixed md:static top-0 left-0 w-full md:w-auto h-4/6 md:h-auto bg-gray-800 md:bg-transparent transition-transform transform ${
                open ? "translate-x-0" : "-translate-x-full"
              } md:translate-x-0 z-20 md:z-auto`}
            >
              <li className="md:hidden flex justify-end p-4">
                <button onClick={toggleMenu} className="text-2xl">
                  <i className="fas fa-times"></i>
                </button>
              </li>
              <li className="flex justify-center md:justify-start p-4">
                <ToggleSwitch
                  darkMode={darkMode}
                  onToggle={handleToggleDarkMode}
                />
              </li>
              <li className="flex justify-center md:justify-start p-4">
                <Link
                  to="/"
                  className={`hover:text-gray-400 ${isActive("/")}`}
                  onClick={toggleMenu}
                >
                  Home
                </Link>
              </li>
              <li className="flex justify-center md:justify-start p-4">
                <Link
                  to="/about"
                  className={`hover:text-gray-400 ${isActive("/about")}`}
                  onClick={toggleMenu}
                >
                  About
                </Link>
              </li>
              <li className="flex justify-center md:justify-start p-4">
                <Link
                  to="/services"
                  className={`hover:text-gray-400 ${isActive("/services")}`}
                  onClick={toggleMenu}
                >
                  Services
                </Link>
              </li>
              <li className="flex justify-center md:justify-start p-4">
                <Link
                  to="/books"
                  className={`hover:text-gray-400 ${isActive("/books")}`}
                  onClick={toggleMenu}
                >
                  Books
                </Link>
              </li>
              <li className="flex justify-center md:justify-start p-4">
                <Link
                  to="/contact"
                  className={`hover:text-gray-400 ${isActive("/contact")}`}
                  onClick={toggleMenu}
                >
                  Contact
                </Link>
              </li>
            </ul>
            <button className="md:hidden ml-4 z-30" onClick={toggleMenu}>
              <div className="space-y-1">
                <span
                  className={`block h-0.5 w-6 bg-current transform transition duration-500 ${
                    open ? "rotate-45 translate-y-1.5" : ""
                  }`}
                ></span>
                <span
                  className={`block h-0.5 w-6 bg-current transition duration-500 ${
                    open ? "opacity-0" : ""
                  }`}
                ></span>
                <span
                  className={`block h-0.5 w-6 bg-current transform transition duration-500 ${
                    open ? "-rotate-45 -translate-y-1.5" : ""
                  }`}
                ></span>
              </div>
            </button>
          </div>
        </nav>
      </div>
      <div className="pt-20">
        {message && (
          <div className="fixed bottom-4 right-4 bg-gray-700 text-white px-4 py-2 rounded-lg shadow-lg z-auto">
            {message}
          </div>
        )}
      </div>
    </>
  );
}
