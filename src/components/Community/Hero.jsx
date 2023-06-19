import { Link } from "gatsby";
import React from "react";

function Hero() {
  return (
    <>
      <h1 className="text-4xl font-extrabold py-10 text-center">
        OUR COMMUNITY
      </h1>
      <img
        className="h-[30rem] rounded-lg py-10"
        src="https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d29ya291dHxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"
      />
      <Link
        to="#"
        className="py-5 px-6 text-xl xl:text-2xl font-bold bg-black rounded-full flex justify-center cursor-pointer z-10 mb-5"
      >
        Join Now
      </Link>
    </>
  );
}

export default Hero;
