import { Link } from "gatsby";
import React from "react";
function Service({ title, description }) {
  return (
    <div className="flex flex-col items-center max-w-xl mx-auto space-y-10 py-11 px-10 bg-zinc-900">
      <h3 className="text-2xl font-bold">{title}</h3>
      <p className="text-center text-gray-200">{description}</p>
      <Link
        to="#"
        className="py-4 px-6 text-lg xl:text-2xl font-bold ring-1 ring-amber-500 rounded-full flex justify-center cursor-pointer z-10 mb-5"
      >
        Learn More
      </Link>
    </div>
  );
}

export default Service;
