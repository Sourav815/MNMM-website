import React from "react";
import { useFetchAthletes } from "../../hooks/useFetchAthletes";
import AthleteCard from "./AthleteCard";

function AthleteHighlight() {
  const atheletes = useFetchAthletes();
  return (
    <div className="flex flex-col items-center">
      <h2 className="text-3xl font-extrabold text-center py-10">
        Athlete Highlight
      </h2>
      <div>
        {atheletes.allStrapiAthlete.nodes.map((athelete) => (
          <AthleteCard
            key={athelete.id}
            name={athelete.name}
            sport={athelete.sport}
            link={athelete.id}
            imgLink={athelete.profilePicture}
          />
        ))}
      </div>
    </div>
  );
}

export default AthleteHighlight;
