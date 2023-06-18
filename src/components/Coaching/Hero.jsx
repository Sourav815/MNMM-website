import { Link } from "gatsby";
import React from "react";

function Hero() {
  return (
    <div className="h-[80vh] gap-y-10 flex flex-col justify-center items-center">
      <h1 className="font-extrabold text-center text-4xl p-5">
        Unlock Your Fitness Potential with Minumum Strength
      </h1>
      <p className="text-center p-5 px-3">
        Our coaching section within the fitness app offers a personalized and
        transformative fitness experience like no other. With our certified
        coaches by your side, you'll receive expert guidance, motivation, and
        support tailored specifically to your goals and needs.
      </p>
      <Link
        to="#"
        className="py-5 px-8 text-xl xl:text-2xl font-bold bg-black rounded-full flex justify-center cursor-pointer z-10"
      >
        Book a Call
      </Link>
    </div>
  );
}

export default Hero;
