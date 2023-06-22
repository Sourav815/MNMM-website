import React from "react";
import mxmm from "../../images/mxmm.mp4";

function Mxmmsunday() {
  return (
    <div className="flex flex-col items-center">
      <h2 className="text-3xl font-extrabold pt-10 text-center">
        MXMM Sundays
      </h2>
      <div className="flex flex-col items-center py-10">
        <video controls muted autoPlay className="px-10">
          <source src={mxmm} />
        </video>
        <p className="text-lg p-10 text-center text-gray-200">
          MXMM Sundays is a thrilling and invigorating event that takes place
          every Sunday, designed specifically for fitness enthusiasts and
          individuals seeking to push their physical limits. This extraordinary
          gathering brings together people from diverse backgrounds, all united
          by their passion for health, wellness, and the pursuit of personal
          growth.
        </p>
      </div>
    </div>
  );
}

export default Mxmmsunday;
