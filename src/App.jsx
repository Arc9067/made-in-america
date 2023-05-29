import React, { useEffect } from "react";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Footer from "./Components/Footer";
import Token from "./Components/Token";
import Roadmap from "./Components/Roadmap";
import Aos from "aos";
import "aos/dist/aos.css";

const App = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className="min-h-screen overflow-hidden w-full font-Asiana bg-primary relative">
      <Hero />
      <About />
      <Token />
      <Roadmap />
      <Footer />
    </div>
  );
};

export default App;
