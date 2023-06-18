import React from "react";
import Service from "./Service";

function Services() {
  const services = [
    {
      title: "Personalized Fitness Training",
      description:
        "Welcome to our fitness center, where we offer personalized fitness training programs designed to help you unlock your full potential and achieve your health and wellness goals. Our team of expert trainers is committed to providing you with a customized fitness experience that caters to your unique needs and aspirations.",
    },
    {
      title: "Fitness Challenges and Events",
      description:
        "Stay motivated and engaged with our fitness challenges and events. From 30-day fitness challenges to community walks and charity runs, we create exciting opportunities for you to push your limits, connect with like-minded individuals, and celebrate your achievements.",
    },
    {
      title: "Group Fitness Classes",
      description:
        "Join our invigorating group fitness classes led by experienced instructors. Choose from a wide variety of classes such as HIIT (High-Intensity Interval Training), yoga, Pilates, Zumba, spin, and more. Enjoy the energy and motivation of exercising with like-minded individuals in a supportive group setting.",
    },
    {
      title: "Nutritional Guidance",
      description:
        "Achieving your fitness goals requires more than just exercise. Our team of nutrition experts will provide personalized guidance to help you make healthier food choices, create balanced meal plans, and develop sustainable eating habits. Fuel your body with the right nutrients to optimize your fitness results.",
    },
  ];
  return (
    <div>
      <h1 className="text-4xl font-extrabold pt-20 pb-14 text-center">
        OUR SERVICES
      </h1>
      {services.map((services) => (
        <Service title={services.title} description={services.description} />
      ))}
    </div>
  );
}

export default Services;
