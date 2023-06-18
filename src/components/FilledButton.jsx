import React from "react";
import { Link } from "gatsby";

function FilledButton({ link, color, text }) {
  return (
    <Link
      to={link}
      className={`py-5 px-6 text-xl xl:text-2xl text-white font-bold  rounded-full flex justify-center cursor-pointer z-10 ${color}`}
    >
      {text}
    </Link>
  );
}

export default FilledButton;
