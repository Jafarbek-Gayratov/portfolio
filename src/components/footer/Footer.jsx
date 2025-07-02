import React from "react";
import "./Footer.css";
import { FaGithub, FaTelegramPlane, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="container">
        <div className="footer-wrapper">
          <h2>Jafarbek G'ayratov</h2>

          <p>Creative UI Designer & Web Developer</p>

          <div className="footer-links">
            <a
              href="https://github.com/Jafarbek-Gayratov"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>
            <a
              href="https://t.me/gayratovj"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTelegramPlane />
            </a>
            <a
              href="https://linkedin.com/in/your_username"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>
          </div>

          <p className="footer-copy">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
