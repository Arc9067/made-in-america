import React from "react";
import Logo from "../assets/logo.png";

const Hero = () => {
  return (
    <section className=" w-full pt-[150px] text-white">
      <div className="container flex-col gap-6 font-Asiana flex justify-center items-center">
        <h1 className="text-5xl text-center  md:text-6xl font-Asiana capitalize font-bold">
          "Made in America"! 🇺🇸💥
        </h1>
        <p className="text-center max-w-[500px] mx-auto text-2xl">
          Tired of cheap Chinese products flooding the market? Well, say hello
          to "Made in America" (MIA) — the meme token that's here to give those
          cheap products a run for their money, all while bringing a smile to
          your face!
        </p>
        <a
          href=""
          className="bg-black capitalize text-2xl rounded-md px-6 py-3"
        >
          buy made in america
        </a>
        <h1 className="text-4xl capitalize">contract</h1>
        <p>00000000000000000000000000000</p>
        <div className="mt-10 flex flex-col gap-6 md:flex-row">
          <a
            href=""
            className="bg-secondary capitalize text-2xl rounded-md px-6 py-3"
          >
            telegram
          </a>
          <a
            href=""
            className="bg-black capitalize text-2xl rounded-md px-6 py-3"
          >
            twitter
          </a>
          <a
            href=""
            className="bg-secondary capitalize text-2xl rounded-md px-6 py-3"
          >
            dextool
          </a>
          <a
            href=""
            className="bg-black capitalize text-2xl rounded-md px-6 py-3"
          >
            uniswap
          </a>
        </div>

        <img src={Logo} alt="logo" className="md:w-[15rem] object-cover" />
      </div>
    </section>
  );
};

export default Hero;
