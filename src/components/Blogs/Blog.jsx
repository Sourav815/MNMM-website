import React from "react";
import { Link } from "gatsby";

function Blog({ img, title, description }) {
  return (
    <div className="flex flex-col items-center max-w-xl mb-20">
      <img alt="" src={img} />
      <h2 className="text-2xl font-bold px-3 pb-5 pt-10 text-center">
        {title}
      </h2>
      <p className="text-center px-3">{description}</p>
      <div class="px-6 pt-4 pb-7">
        <span class="inline-block bg-gray-700 rounded-full px-3 py-1 text-sm font-semibold text-gray-200 mr-2 mb-2">
          #gym
        </span>
        <span class="inline-block bg-gray-700 rounded-full px-3 py-1 text-sm font-semibold text-gray-200 mr-2 mb-2">
          #lifting
        </span>
        <span class="inline-block bg-gray-700 rounded-full px-3 py-1 text-sm font-semibold text-gray-200 mr-2 mb-2">
          #strength
        </span>
      </div>
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
