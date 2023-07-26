import React from "react";
import { Link } from "gatsby";
import { ip } from "../../utils/ip";

function Blog({ img, title, description, url, tags }) {
  return (
    <div className="bg-slate-900 flex flex-col items-center max-w-xl mb-10 pb-10">
      <img className="h-96 object-cover" alt="" src={`${ip}${img?.url}`} />
      <h2 className="text-2xl font-bold px-3 pt-10 text-center">{title}</h2>
      <div
        className="text-center flex flex-col items-center px-3 py-10 line-clamp-6"
        // dangerouslySetInnerHTML={{ __html: description }}
      >
        {description}
      </div>
      {/* <div class="px-6 pt-4 pb-7">
        {tags.map((tag) => (
          <span class="inline-block bg-gray-700 rounded-full px-3 py-1 text-sm font-semibold text-gray-200 mr-2 mb-2">
            {tag.name}
          </span>
        ))}
      </div> */}
      <Link
        className="bg-black p-6 py-7 text-lg rounded-full font-bold inline-flex items-center justify-center  h-10"
        href={url}
      >
        Read Now
      </Link>
    </div>
  );
}

export default Blog;
