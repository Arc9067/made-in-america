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
          swap now
        </h1>
        <iframe
          className="mt-10"
          width="100%"
          height="720"
          frameborder="0"
          allow="clipboard-read *; clipboard-write *; web-share *; accelerometer *; autoplay *; camera *; gyroscope *; payment *; geolocation *"
          src="https://flooz.xyz/embed/trade?swapDisabled=false&swapLockToToken=false&onRampDisabled=false&onRampAsDefault=false&onRampDefaultAmount=200&onRampTokenAddress=eth&stakeDisabled=true&network=eth&lightMode=true&primaryColor=%230065b3&backgroundColor=transparent&roundedCorners=10&padding=20"
        ></iframe>
      </div>
    </div>
  );
};

export default Roadmap;
