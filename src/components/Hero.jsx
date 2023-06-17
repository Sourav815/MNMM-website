import React from "react";

function Hero() {
  return (
    <>
      <section className="flex flex-col items-center gap-10 px-3 py-20 ">
        <h1 className="text-center font-bold text-3xl z-10">
          Creating a supportive community of athletes who share your{" "}
          <span className="text-[#FFD362]">PASSION</span> and{" "}
          <span className="text-[#FFD362]">GOALS</span>
        </h1>
        <h2 className="text-center text-lg text-gray-300 z-10">
          Even though the journey of physical and mental strength may feel
          lonely at times, there are many others waiting to meet someone like
          you.
        </h2>
        <div className=" flex flex-col gap-7">
          <div className="py-5 px-6 text-xl text-black font-bold bg-[#FFD362] rounded-full flex justify-center cursor-pointer z-10 bg-gradient-to-tr from-[#ffd262] to-[#ffb20d] ">
            Join the Crew
          </div>
          <div className="py-4 px-6 text-xl font-bold ring-2 ring-white flex justify-center rounded-full cursor-pointer z-10">
            Learn More
          </div>
        </div>
      </section>
      <div className="h-48 top-64 bg-[#FFD362]/20 w-full absolute -skew-y-12" />
      <div className="h-8 top-52 bg-gray-400/20 w-full absolute -skew-y-12" />
      <div className="h-8 top-[29rem] bg-gray-400/20 w-full absolute -skew-y-12" />
    </>
  );
}

export default Hero;
