import React from "react";
import { Link } from "gatsby";
import { ip } from "../../utils/ip";

function Blog({ img, title, description, url, tags }) {
  return (
    <div className="bg-zinc-900 flex flex-col max-w-lg">
      <img className="h-72 object-cover" alt="" src={`${ip}${img?.url}`} />

      <div className="p-5 pb-8">
        <div className="flex items-center mb-2">
          <span class="inline-block bg-amber-600 rounded-full px-3 py-1 text-sm font-semibold text-zinc-200 ">
            Health
          </span>
          <svg
            className="text-zinc-400"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-dot"
          >
            <circle cx="12.1" cy="12.1" r="1" />
          </svg>
          <div className="text-sm font-semibold text-zinc-400">5 min read</div>
        </div>

        <h2 className="text-3xl font-extrabold pt-1 pb-5 flex cursor-pointer hover:underline">
          {title}
        </h2>
        <div className="line-clamp-6  text-zinc-300 ">{description}</div>

        {/* <div class="px-6 pt-4 pb-7">
          {tags.map((tag) => (
          <span class="inline-block bg-gray-700 rounded-full px-3 py-1 text-sm font-semibold text-gray-200 mr-2 mb-2">
            {tag.name}
          </span>
        ))}
        </div> */}
        <div className="py-6 flex items-center gap-3">
          <img
            className="rounded-full h-14 w-14 ring-1 p-1 ring-amber-500"
            src="https://pereaclinic.com/wp-content/uploads/2019/12/270x270-male-avatar.png"
            alt=""
          />
          <div className="text-sm text-zinc-300">
            <div>John Doe</div>
            <div>30 Jul</div>
          </div>
        </div>
        <Link
          className="bg-black pl-4 pr-2 py-7 text-lg rounded-md font-bold inline-flex items-center justify-center gap-0.5 h-10 [&>svg]:hover:translate-x-1 [&>svg]:hover:transition-all "
          href={url}
        >
          <div className="pb-0.5">Read Now</div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-chevron-right"
          >
            <path d="m9 18 6-6-6-6" />
          </svg>
        </Link>
      </div>
    </div>
  );
}

export default Blog;
