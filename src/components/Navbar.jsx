import React, { useState } from "react";

function Navbar() {
  let Links = [
    { name: "HOME", link: "/" },
    { name: "COACHING", link: "/coaching" },
    { name: "BLOGS", link: "/blogs" },
    { name: "COMMUNITY", link: "/community" },
  ];
  let [open, setOpen] = useState(false);
  return (
    <div className="flex  items-center h-16 p-3 px-4 bg-gray-900 md:px-20 xl:px-32">
      <div className="flex-1 text-white font-bold text-2xl ">MNMM</div>
      <div
        onClick={() => setOpen(!open)}
        className="mr-1 cursor-pointer md:hidden w-7 h-7 text-white"
      >
        {!open ? (
          <svg
            className="w-8 h-8"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clip-rule="evenodd"
            ></path>
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-8 h-8"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        )}
      </div>
      {/* linke items */}
      <ul
        className={`md:flex md:items-center md:pb-0 py-20 absolute md:static bg-gray-900 z-50 left-0 w-full md:w-auto md:pl-0  transition-all duration-300 ease-in ${
          open ? "top-14" : "top-[-490px]"
        }`}
      >
        {Links.map((link) => (
          <li className="md:ml-14 md:my-0 my-10 flex justify-center text-xl font-semibold">
            <a
              href={link.link}
              className="text-gray-300 hover:text-orange-200 duration-200"
            >
              {link.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Navbar;
