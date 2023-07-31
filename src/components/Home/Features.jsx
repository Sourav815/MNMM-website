import React from "react";
import Feature from "./Feature";

function Features() {
  const data = [
    {
      title: "Vibrant Community",
      description:
        "Be part of a community that understands your journey, celebrates your progress and pushes you to new heights.",
      imgLink:
        "https://www.glofox.com/wp-content/uploads/2019/03/fitness20community-2.png",
    },
    {
      title: "Coaching Support",
      description:
        "Our squad of expert coaches will be your personal cheerleaders, virtual spotter, and source of limitless inspiration to help you crush your goals.",
      imgLink:
        "https://www.ideafit.com/wp-content/uploads/2021/05/Online-Coaching-Service-1024x683.jpg",
    },
    {
      title: "Understand Your Sport",
      description:
        "Dive into our blog-o-sphere of strength wisdom, where we spill the tea on training tips, debunk myths, all sprinkled with the juiciest fitness memes.",
      imgLink: "https://a.storyblok.com/f/59991/0981f77a05/know-your-sport.jpg",
    },
  ];
  return (
    <div className="">
      <h2 className="text-3xl md:text-4xl font-bold text-center pb-5">
        Can’t wait to know more ?
      </h2>

      <div className="flex flex-col lg:flex-row gap-x-10 gap-y-14 py-10">
        {data.map((feature, index) => (
          <Feature
            title={feature.title}
            description={feature.description}
            imgLink={feature.imgLink}
          />
        ))}
      </div>
    </div>
  );
}

export default Features;
