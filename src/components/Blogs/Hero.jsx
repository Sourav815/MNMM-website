import React from "react";

function Hero() {
  return (
    <>
      <div className="bg-black z-10 w-full h-[80vh] absolute top-18 opacity-40" />

      <img
        src="https://img.freepik.com/premium-photo/computer-tablet-is-putting-table-blurred-gym-as-background_35674-2792.jpg?w=1800"
        className="absolute h-[80vh] z-0 w-full object-cover"
      />
      <div className="h-[80vh] z-20 gap-y-10 flex flex-col pt-20 items-center">
        <h1 className="font-extrabold text-center text-5xl p-5">
          Ignite Your Fitness Journey with Minumum Strength
        </h1>
        <p className="text-center  font-medium p-5 px-3">
          Our blog is your go-to destination for expert advice, uplifting
          success stories, and practical tips to help you achieve your fitness
          goals. Whether you're a beginner or a seasoned fitness enthusiast, our
          passionate team is here to guide and empower you every step of the
          way. Let's unlock your full potential and embark on a remarkable
          transformation together. Get ready to sweat, smile, and surpass your
          limits as you embrace a healthier, stronger, and more vibrant version
          of yourself.
        </p>
      </div>
    </>
  );
}

export default Hero;
