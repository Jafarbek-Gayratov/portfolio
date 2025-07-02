import React from "react";
import "./ContactSection.css";

const ContactSection = () => {
  return (
    <div className="contactSection" id="contact">
      <div className="container">
        <div className="contactSection-wrapper">
          <h2>
            Contact <span>me</span>
          </h2>

          <form className="contact-form">
            <input type="text" placeholder="Your name" required />
            <input type="email" placeholder="Your email" required />
            <textarea rows="6" placeholder="Your message" required></textarea>
            <button type="submit">Send message</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
