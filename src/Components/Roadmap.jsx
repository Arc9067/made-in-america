import React, { useEffect } from "react";
import Aos from "aos";

const Roadmap = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className="py-[50px] w-full bg-white">
      <div className="container">
        <h1
          className="text-4xl text-secondary capitalize"
          data-aos="zoom-out"
          data-aos-easing="linear"
          data-aos-duration="1500"
        >
          view live chart
        </h1>
        <div className="mt-10">
          <iframe
            className="h-[500px] w-full"
            src="https://dexscreener.com/ethereum/0x11950d141EcB863F01007AdD7D1A342041227b58?embed=1&trades=0&info=0"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
