import "./WorksSection.css";
import timer from "../../assets/img/timer.png";
import obhavo from "../../assets/img/obhavo.png";
import olcha from "../../assets/img/olcha.png";

const WorksSection = () => {
  return (
    <div className="workSection" id="works">
      <div className="container">
        <div className="workSection-wrapper">
          <h2>
            My <span>works</span>
          </h2>

          <div className="works-grid">
            <div className="work-card">
              <a href="https://timer-six-roan.vercel.app/">
                <img src={timer} alt="TIMER" />
              </a>
            </div>
            <div className="work-card">
              <a href="https://run-wep-site.vercel.app/">
                <img src={obhavo} alt="OB HAVO" />
              </a>
            </div>
            <div className="work-card">
              <a href="https://olcha-chi.vercel.app/">
                <img src={olcha} alt="OLCHA" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorksSection;
