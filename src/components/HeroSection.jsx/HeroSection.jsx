import "./HeroSection.css";
import logo from "../../assets/img/image.png";

const HeroSection = () => {
  return (
    <div className="heroSection" id="home">
      <div className="container">
        <div className="heroSection-wrapper">
          <div className="hero-text">
            <h1>
              JAFARBEK G'AYRATOV <br /> <span>FULL STACK</span>
            </h1>
            <div className="hero-buttons">
              <button className="btn hire">Hire me</button>
              <button className="btn download">
                Download CV <span>⬇️</span>
              </button>
            </div>
          </div>

          <div className="hero-image">
            <img className="img1" src={logo} alt="Illustration" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
