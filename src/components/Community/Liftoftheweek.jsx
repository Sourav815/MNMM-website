import React from "react";

function Liftoftheweek() {
  return (
    <div className="flex flex-col items-center">
      <h2 className="text-3xl font-extrabold py-10 text-center">
        Lift Of the Week
      </h2>
      <img
        src="https://images.unsplash.com/photo-1595078475328-1ab05d0a6a0e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z3ltJTIwZ2lybHxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"
        alt=""
        className="h-96 rounded-lg"
      />
      <div className="flex flex-col items-center py-10">
        <p className="text-2xl font-bold">Charlotte Parker</p>
        <p className="text-lg font-bold text-gray-400"> Power Lifter</p>
      </div>
    </div>
  );
}

export default Liftoftheweek;
