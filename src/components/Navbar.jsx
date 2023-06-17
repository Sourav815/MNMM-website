import React, { useState } from "react";

function Navbar() {
  const [checked, setChecked] = useState(false);
  const handleClick = () => setChecked(!checked);
  return (
    <div className="flex items-center h-16 p-3 px-4 bg-gray-900">
      <div className="flex-1 text-white font-bold text-2xl ">MNMM</div>
      <input
        onClick={handleClick}
        checked={checked}
        type="checkbox"
        id="menu-toggle"
        style={{ display: "none" }}
      />
      <label
        for="menu-toggle"
        className="inline-flex items-center p-2 ml-3 text-lg text-gray-500 rounded-lg lg:hidden  focus:outline-none focus:ring-2  dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
      >
        {!checked ? (
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
      </label>
    </div>
  );
}

export default Navbar;
