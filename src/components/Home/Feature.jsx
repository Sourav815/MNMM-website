import React from "react";

function Feature({ imgLink, title, description }) {
  return (
    <div className="max-w-md overflow-hidden bg-zinc-900">
      <img src={imgLink} alt="" className="w-full h-64 object-cover" />
      <div className="py-10 space-y-7">
        <h3 className="text-2xl  md:text-3xl font-bold text-center">{title}</h3>
        <p className="text-center text-base px-6 lg:text-xl">{description}</p>
      </div>
    </div>
  );
}

export default Feature;
