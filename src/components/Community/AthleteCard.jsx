import { Link } from "gatsby";
import React from "react";

function AthleteCard({ name, sport, imgLink, link }) {
  return (
    <div className="flex flex-col items-center py-10">
      <img
        src={imgLink}
        alt=""
        className="h-32 w-32 object-cover rounded-full"
      />
      <div className="text-center pt-8 pb-5">
        <h3 className="text-2xl font-bold ">{name}</h3>
        <h4 className="text-xl font-bold text-gray-400">{sport}</h4>
      </div>
      <Link
        to={link}
        className="py-3 px-5 text-xl xl:text-2xl font-bold ring-1 ring-white flex justify-center rounded-full cursor-pointer"
      >
        Know me
      </Link>
    </div>
  );
}

export default AthleteCard;
