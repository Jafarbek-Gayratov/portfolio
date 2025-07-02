import React from "react";
import "./AboutSection.css";
import logo from "../../assets/img/image.png";

const AboutSection = () => {
  return (
    <div className="aboutSection" id="about">
      <div className="container">
        <div className="aboutSection-wrapper">
          <div className="about-image">
            <img className="img1" src={logo} alt="About Illustration" />
          </div>

          <div className="about-text">
            <h2>
              About <span>me</span>
            </h2>
            <p>
              Men zamonaviy, funksional va samarali veb-ilovalarni yaratishga
              ishtiyoqmand bo‘lgan iqtidorli web dasturchiman. Foydalanuvchi
              ehtiyojlari, toza kod va estetik dizayn muvozanatini topishga
              ixtisoslashganman. Har bir loyihamda tezkorlik, moslashuvchanlik
              va ilg‘or texnologiyalarni ustuvor deb bilaman.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
