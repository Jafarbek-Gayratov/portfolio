import "./App.css";
import Navbar from "./components/navbar/Navbar";
import HeroSection from "./components/HeroSection.jsx/HeroSection";
import AboutSection from "./components/AboutSection/AboutSection";
import WorksSection from "./components/WorksSection/WorksSection";
import ContactSection from "./components/ContactSection/ContactSection";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <hr color="rgba(238, 238, 238, 0.1)" />
      <HeroSection />
      <hr color="rgba(238, 238, 238, 0.1)" />
      <AboutSection />
      <hr color="rgba(238, 238, 238, 0.1)" />
      <WorksSection />
      <hr color="rgba(238, 238, 238, 0.1)" />
      <ContactSection />
      <hr color="rgba(238, 238, 238, 0.1)" />
      <Footer />
    </div>
  );
}

export default App;
