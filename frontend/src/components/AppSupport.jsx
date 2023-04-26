import "../design/custom.css";
import About from "./About.jsx";
import Contact from "./Contact.jsx";
import Experience from "./Experience.jsx";
import Feedbacks from "./Feedbacks.jsx";
import Hero from "./Hero.jsx";
import Navbar from "./Navbar.jsx";
import Tech from "./Tech.jsx";
import Works from "./Works.jsx";
import { StarsCanvas } from "./index.js";

function AppSupport() {
  return (
    <>
      <div className="relative z-0 bgColor">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <Feedbacks />
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </>
  );
}

export default AppSupport;
