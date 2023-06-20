import React from "react";
import { Link } from "gatsby";

function Blog() {
  return (
    <div className="flex flex-col items-center max-w-xl mb-20">
      <img
        alt=""
        src="https://t4.ftcdn.net/jpg/03/17/72/47/360_F_317724775_qHtWjnT8YbRdFNIuq5PWsSYypRhOmalS.jpg"
      />
      <h2 className="text-2xl font-bold px-3 pb-5 pt-10 text-center">
        Sweat, Strength, and Success, Success
      </h2>
      <p className="text-center pb-5 px-3">
        Before diving into any fitness journey, it's crucial to set specific,
        measurable, achievable, relevant, and time-bound (SMART) goals. Learn
        how to define your objectives and create a roadmap that keeps you
        motivated and focused throughout your fitness adventure.
      </p>
      <Link
        className="bg-black p-6 py-7 text-lg rounded-full font-bold inline-flex items-center justify-center  h-10"
        href="#"
      >
        Read Now
      </Link>
    </div>
  );
}

export default Blog;
