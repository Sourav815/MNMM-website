import React from "react";

function Liftoftheweek() {
  URL = "https://www.youtube.com/embed/rM8T8WcGtbI";
  return (
    <div className="flex flex-col items-center">
      <h2 className="text-3xl font-extrabold py-10 text-center">
        Lift Of the Week
      </h2>
      <iframe
        className="w-full aspect-[9/16]"
        src="https://www.youtube.com/embed/rM8T8WcGtbI?autoplay=1&mute=1"
      ></iframe>

      <div className="flex flex-col items-center py-10">
        <p className="text-2xl font-bold">Charlotte Parker</p>
        <p className="text-lg font-bold text-gray-400"> Power Lifter</p>
      </div>
    </div>
  );
}

export default Liftoftheweek;
