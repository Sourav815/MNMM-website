import { Link } from "gatsby";
import React from "react";

function Hero() {
  return (
    <>
      <section className="px-3 py-20 w-full flex flex-col items-center lg:flex-row lg:justify-evenly lg:items-center lg:h-[93vh]">
        <div className="flex flex-col items-center lg:items-start gap-10  max-w-2xl">
          <h1 className="text-center font-extrabold tracking-wide leading-10 text-3xl z-10 lg:text-4xl lg:text-left xl:text-5xl">
            Creating a supportive community of athletes who share your{" "}
            <span className="text-[#FFD362]">PASSION</span> and{" "}
            <span className="text-[#FFD362]">GOALS</span>
          </h1>
          <h2 className="text-center text-lg lg:py-10 lg:text-left lg:text-xl xl:text-2xl text-gray-300 z-10">
            Even though the journey of physical and mental strength may feel
            lonely at times, there are many others waiting to meet someone like
            you.
          </h2>
          <div className=" flex flex-col lg:flex-row gap-7">
            <Link
              to="#"
              className="py-5 px-6 text-xl xl:text-2xl text-black font-bold bg-[#FFD362] rounded-full flex justify-center cursor-pointer z-10 bg-gradient-to-tr from-[#ffd262] to-[#ffb20d] "
            >
              Join the Crew
            </Link>
            <Link
              to="/community"
              className="py-5 px-6 text-xl xl:text-2xl font-bold ring-2 ring-white flex justify-center rounded-full cursor-pointer z-10"
            >
              Learn More
            </Link>
          </div>
        </div>
        <img
          className="z-10 rounded-lg h-0 w-0 lg:h-[28rem] lg:w-[38rem] xl:h-[33rem] xl:w-[45rem]"
          src="https://media.istockphoto.com/id/838386570/photo/strong-man-doing-deadlift-training-in-gym.jpg?s=612x612&w=0&k=20&c=ok5sL3Fr8dos-fthuxQkjTZsIRN9mu0bhNE4RODC9CI="
        />
        {/* <img src="/hero.jpg" style={{ maxWidth: "100%" }} /> */}
      </section>
      <div className="h-48 top-64 bg-[#FFD362]/20 w-full absolute -skew-y-12" />
      <div className="h-8 top-52 bg-gray-400/20 w-full absolute -skew-y-12" />
      <div className="h-8 top-[29rem] bg-gray-400/20 w-full absolute -skew-y-12" />
    </>
  );
}

export default Hero;
