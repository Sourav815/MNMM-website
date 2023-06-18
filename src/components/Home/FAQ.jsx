import React, { useState } from "react";

function FAQ() {
  const [clicked, setClicked] = useState(false);
  const Data = [
    {
      question: "How do I join the Minimum Strength community?",
      answer:
        "Joining our community is super easy! We’re currently on Instagram. Simply click on the Join Now button,give us a follow on insta, and voila! You'll gain access to a world of strength and support.",
    },
    {
      question:
        "What kind of athletes are part of the Minimum Strength community?",
      answer:
        "Our community welcomes athletes from various sports, including powerlifting, weightlifting, and more! Whether you're a seasoned pro or a beginner, there's a place for you in our tribe.",
    },
    {
      question: "What does the coaching support entail?",
      answer:
        "Our experienced coaches provide personalized strength and performance coaching tailored to your personal goals. They offer expert guidance, training programs, technique refinement, and continuous support to help you unleash your full potential.",
    },
    {
      question: "Can I access the community and coaching support remotely?",
      answer:
        "Absolutely! Our community and coaching support are available both online and remotely. You can connect with athletes and coaches from around the world, no matter where you're located.",
    },
    {
      question: "Is there a membership fee to join the community?",
      answer:
        "No membership fees here! Our community is free to join, providing you with a supportive network of like-minded athletes without any financial burden.",
    },
    {
      question: " Are there any age or skill level requirements to join?",
      answer:
        "Minimum Strength welcomes athletes of all ages and skill levels. Whether you're a teenager starting your strength journey or a seasoned veteran, our community is here to support and uplift you.",
    },
    {
      question:
        "Can I share my own strength journey and experiences with the community?",
      answer:
        "Absolutely! We encourage our community members to share their inspiring stories, progress, and experiences. Your journey can motivate and uplift others, fostering a positive and supportive environment.",
    },
    {
      question:
        "How can I contact the Minimum Strength team if I have additional questions?",
      answer:
        "You can reach out to us anytime through our Instagram page. We're always here to answer your questions and concerns, and provide any assistance you may need.",
    },
    {
      question: "Can I participate in community events and challenges?",
      answer:
        "Definitely! Our community organizes exciting events, challenges, and virtual competitions to keep the energy high. Follow our Instagram for updates and get ready to push your limits, have fun, and bond with fellow athletes.",
    },
  ];

  const toggle = (index) => {
    if (clicked === index) {
      //if clicked question is already active, then close it
      return setClicked(null);
    }

    setClicked(index);
  };

  return (
    <section className="max-w-4xl">
      <h2 className="text-2xl md:text-4xl font-bold text-center pt-10">
        Frequently Asked Questions
      </h2>
      <div className="py-10">
        {Data.map((item, index) => {
          return (
            <>
              <div
                className="flex justify-between items-center w-full text-left cursor-pointer py-2 "
                onClick={() => toggle(index)}
                key={index}
              >
                <h3 className="pl-5 text-md md:text-xl lg:text-2xl">
                  {item.question}
                </h3>
                <span className="m-4">
                  {clicked === index ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-6 h-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M4.5 15.75l7.5-7.5 7.5 7.5"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-6 h-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                      />
                    </svg>
                  )}
                </span>
              </div>
              {clicked === index ? (
                <div className="p-5 pt-4 text-sm md:text-lg lg:text-xl md:pb-10 text-gray-300 max-w-4xl">
                  <p className="leading-6">{item.answer}</p>
                </div>
              ) : null}
            </>
          );
        })}
      </div>
    </section>
  );
}

export default FAQ;
