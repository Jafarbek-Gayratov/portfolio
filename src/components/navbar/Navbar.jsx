import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar-content">
          <div className="navbar-brand">MySite</div>
          <ul className={`navbar-links ${isMenuOpen ? "active" : ""}`}>
            <li>
              <a href="#home">Bosh sahifa</a>
            </li>
            <li>
              <a href="#about">Haqida</a>
            </li>
            <li>
              <a href="#services">Xizmatlar</a>
            </li>
            <li>
              <a href="#contact">Aloqa</a>
            </li>
          </ul>
          <button
            className="menu-toggle"
            aria-label="Toggle menu"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            ☰
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
