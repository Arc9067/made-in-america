import React from "react";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Footer from "./Components/Footer";
import Token from "./Components/Token";

const App = () => {
  return (
    <div className="min-h-screen w-full font-Asiana bg-primary relative">
      <Hero />
      <About />
      <Token />
      <Footer />
    </div>
  );
};

export default App;
