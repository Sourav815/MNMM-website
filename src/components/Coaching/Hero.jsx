import { Link } from "gatsby";
import React from "react";

function Hero() {
  return (
    <>
      <div className="bg-black z-10 w-full h-[80vh] absolute top-18 opacity-60" />

      <img
        src="https://images.unsplash.com/photo-1595078475328-1ab05d0a6a0e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z3ltJTIwZ2lybHxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"
        className="absolute h-[80vh] z-0 w-full object-cover"
      />
      <div className="h-[80vh] z-20 gap-y-10 flex flex-col justify-center items-center">
        <h1 className="font-extrabold text-center text-4xl p-5">
          Unlock Your Fitness Potential with{" "}
          <span className="text-black bg-white px-2 pb-1">
            Minimum <span className="underline">Strength</span>
          </span>
        </h1>
        <p className="text-center font-medium p-5 px-3">
          Our coaching section within the fitness app offers a personalized and
          transformative fitness experience like no other. With our certified
          coaches by your side, you'll receive expert guidance, motivation, and
          support tailored specifically to your goals and needs.
        </p>
        <Link
          to="#"
          className="py-5 px-8 text-xl xl:text-2xl font-bold ring-1 ring-white rounded-full flex justify-center cursor-pointer"
        >
          Book a Call
        </Link>
      </div>
    </>
  );
}

export default Hero;
