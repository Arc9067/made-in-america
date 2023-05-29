import React from "react";
import Logo from "../assets/img.jpg";

const Swap = () => {
  return (
    <section className="py-[50px] w-full">
      <div className="container flex flex-col md:grid md:grid-cols-2 gap-y-10 items-center justify-between">
        <div className="">
          <h1 className="capitalize text-3xl">buy here!</h1>
          <iframe
            className="mt-14"
            width="100%"
            height="720"
            frameborder="0"
            allow="clipboard-read *; clipboard-write *; web-share *; accelerometer *; autoplay *; camera *; gyroscope *; payment *; geolocation *"
            src="https://flooz.xyz/embed/trade?swapDisabled=false&swapLockToToken=false&onRampDisabled=true&onRampAsDefault=false&onRampDefaultAmount=200&onRampTokenAddress=eth&stakeDisabled=true&network=eth&lightMode=true&primaryColor=%23ba032f&backgroundColor=transparent&roundedCorners=10&padding=20"
          ></iframe>
        </div>
        <img
          src={Logo}
          alt="
        "
        />
      </div>
    </section>
  );
};

export default Swap;
