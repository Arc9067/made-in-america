import React, { useEffect } from "react";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Footer from "./Components/Footer";
import Token from "./Components/Token";
import Roadmap from "./Components/Swap";
import Aos from "aos";
import "aos/dist/aos.css";
import Map from "./Components/Map";
import Header from "./Components/Header";

const App = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className="min-h-screen !break-all overflow-hidden w-full font-Asiana bg-secondary relative">
      <Header />
      <Hero />
      <About />
      <Token />
      <Roadmap />
      {/* <Map /> */}
      <Footer />
    </div>
  );
};

export default App;
