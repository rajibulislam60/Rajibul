import React from "react";
import HeroVideo from "../images/hero.mp4";

const Home = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute w-full h-full object-cover"
      >
        <source src={HeroVideo} type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 w-full px-6 text-center">
        <h1 className="w-full leading-none font-bold font-tit text-[10vw] bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-400">
          Rajibul Islam Rajib
        </h1>

        <p className="text-white mt-4 text-[2vw] tracking-widest">
          FULL STACK DEVELOPER
        </p>

        <div className="mt-16 max-w-4xl mx-auto text-white">
          <h4 className="font-medium text-[1.5vw] font-tit">
            Available for freelance & full-time work
          </h4>

          <p className="mt-4 text-[2.2vw] font-semibold font-tit leading-snug">
            I build modern, scalable web applications using technologies like{" "}
            <span className="text-gray-300">
              React, Next.js, Node.js, and MongoDB
            </span>{" "}
            — focused on performance, clean code, and real-world impact.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
