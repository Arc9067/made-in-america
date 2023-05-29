import React from "react";
import logo from "../assets/made.png";

const About = () => {
  return (
    <section className="py-[50px] w-full text-white">
      <div className="container grid md:grid-cols-2 items-center justify-between gap-14">
        <div className="order-2 md:order-1">
          <img src={logo} alt="" />
        </div>

        <div className="flex flex-col gap-4 mt-10">
          <h1 className="text-4xl break-all text-white  capitalize w-max">
            about made in america
          </h1>
          <p>
            An image of the Statue of Liberty, proudly holding a toolbox, while
            a bunch of shoddy products made in China lay broken around her.
            Caption: "MIA: Because we believe in quality, not just quantity!"
          </p>
          <p
            className="
          "
          >
            A GIF of Uncle Sam rolling up his sleeves, repairing a broken toy
            labeled "Made in China" with a confident smirk. Caption: "MIA:
            Fixing the world, one product at a time!" 3 A side-by-side
            comparison of an American flag-wrapped product labeled "Made in
            America" and a flimsy Chinese knockoff. Caption: "Choose MIA for
            durability and American pride!"
          </p>
          <p className="">
            Remember, this is a fictional meme token created for fun and
            entertainment purposes. Always make informed decisions when it comes
            to investments and consider researching any product thoroughly
            before purchasing. Enjoy the meme-filled ride with Made in America
            (MIA) and let's celebrate quality and humor together! 🎉😄🇺🇸
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
