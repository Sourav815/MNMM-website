import { Link } from "gatsby";
import React from "react";
function Service({ title, description }) {
  return (
    <div className="flex flex-col items-center py-5 max-w-xl">
      <h3 className="text-2xl font-bold p-3 ">{title}</h3>
      <p className="text-center text-gray-200 p-3">{description}</p>
      <Link
        to="#"
        className="py-4 px-6 mt-3 text-lg xl:text-2xl font-bold bg-black rounded-full flex justify-center cursor-pointer z-10 mb-5"
      >
        Learn More
      </Link>
    </div>
  );
}

export default Service;
