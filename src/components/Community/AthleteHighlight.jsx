import React from "react";
import AthleteCard from "./AthleteCard";

function AthleteHighlight() {
  const atheletes = [
    {
      name: "Dave Lee",
      sport: "Powerlifting",
      link: "/athelete",
      imgLink:
        "https://machohairstyles.com/wp-content/uploads/2020/12/top-knot-for-man-with-square-face-shape.jpg",
    },
    {
      name: "Dave Lee",
      sport: "Powerlifting",
      link: "/athelete",
      imgLink:
        "https://machohairstyles.com/wp-content/uploads/2020/12/top-knot-for-man-with-square-face-shape.jpg",
    },
  ];
  return (
    <div className="flex flex-col items-center">
      <h2 className="text-3xl font-extrabold text-center py-10">
        Athlete Highlight
      </h2>
      <div>
        {atheletes.map((athelete) => (
          <AthleteCard
            name={athelete.name}
            sport={athelete.sport}
            link={athelete.link}
            imgLink={athelete.imgLink}
          />
        ))}
      </div>
    </div>
  );
}

export default AthleteHighlight;
