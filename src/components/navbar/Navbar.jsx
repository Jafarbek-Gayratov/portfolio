import React, { useState, useEffect } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const closeSidebar = () => {
    setIsOpen(false);
  };

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    document.body.className = !darkMode ? "dark-mode" : "light-mode";
    localStorage.setItem("theme", !darkMode ? "dark" : "light");
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "light") {
      setDarkMode(false);
      document.body.className = "light-mode";
    } else {
      setDarkMode(true);
      document.body.className = "dark-mode";
    }
  }, []);

  return (
    <div className="navbar">
      <div className="container">
        <div className="navbar-wrapper">
          <h1 className="logo">JAFARBEK</h1>

          <ul className="nav-links desktop">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About Me</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>

          <div className="right-controls">
            <div className="theme-toggle" onClick={toggleTheme}>
              {darkMode ? "☀️" : "🌙"}
            </div>
            <div
              className={`hamburger ${isOpen ? "active" : ""}`}
              onClick={toggleSidebar}
            >
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      </div>

      {/* Overlay */}
      <div
        className={`overlay ${isOpen ? "show" : ""}`}
        onClick={closeSidebar}
      ></div>

      {/* Sidebar */}
      <div className={`sidebar ${isOpen ? "open" : ""}`}>
        <ul className="nav-links mobile">
          <li>
            <a href="#home" onClick={closeSidebar}>
              Home
            </a>
          </li>
          <li>
            <a href="#about" onClick={closeSidebar}>
              About Me
            </a>
          </li>
          <li>
            <a href="#contact" onClick={closeSidebar}>
              Contact
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
