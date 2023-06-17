import React from "react";
import TestimonialCard from "./TestimonialCard";

const testimonials = [
  {
    name: "James R.",
    sport: "Strength Athlete",
    description:
      "I can't thank the Minimum Strength coaches enough for their guidance and expertise. They pushed me beyond my limits, corrected my form, and helped me achieve personal bests. Their dedication to my success is unmatched!",

    imageUrl:
      "https://www.mecgale.com/wp-content/uploads/2017/08/dummy-profile.png",
  },
  {
    name: "Sarah H.",
    sport: "Powerlifting Enthusiast",
    description:
      "Minimum Strength changed the game for me! Thanks to this incredible community, I found the support and motivation I needed to push my limits and reach new heights. It's more than a community; it's a family. Forever grateful!",
    imageUrl: "https://randomuser.me/api/portraits/thumb/women/91.jpg",
  },
];

function Testimonials() {
  return (
    <section className="">
      <h2 className="text-2xl font-bold text-center pb-5">
        What people are saying ?
      </h2>
      {testimonials.map((testimonial) => (
        <TestimonialCard
          name={testimonial.name}
          sport={testimonial.sport}
          description={testimonial.description}
          imageUrl={testimonial.imageUrl}
        />
      ))}
    </section>
  );
}

export default Testimonials;
