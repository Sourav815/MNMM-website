import React from "react";

function Feature({ imgLink, title, description }) {
  return (
    <div className="pt-14 max-w-md overflow-hidden">
      <img src={imgLink} alt="" className="w-full h-64 object-cover" />
      <div className="">
        <h3 className="text-2xl py-4 pt-6  md:text-3xl font-bold text-center">
          {title}
        </h3>
        <p className="text-center text-base px-6 pb-3 lg:text-xl">
          {description}
        </p>
      </div>
    </div>
  );
}

export default Feature;
