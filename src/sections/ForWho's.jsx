import React from "react";
import { Element } from "react-scroll";

const ForWhoS = () => {
  const reasons = [
    {
      icon: "/images/arrows-to-dot-solid-full.svg",
      text: "No clutter — just clarity",
    },
    {
      icon: "/images/icons8-productivity-68.png",
      text: "Built for real productivity",
    },
    { icon: "/images/flash-68.svg", text: "Designed to keep you consistent" },
  ];

  return (
    <section id="for-who" className="pb-20 px-6 ">
      <Element name="ForWho">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-12">
            Why TaskOrbit?
          </h2>
          <ul className="flex flex-col md:flex-row justify-center gap-6 md:gap-10">
            {reasons.map((reason, idx) => (
              <li
                key={idx}
                className="flex items-center justify-center gap-3 text-lg text-gray-300 "
              >
                <img
                  src={reason.icon}
                  alt=""
                  className="w-10 h-10 object-contain hover:-translate-y-4 transition-all duration-200"
                />
                <span>{reason.text}</span>
              </li>
            ))}
          </ul>
          <div>
            <h2 className="text-3xl mt-20 font-medium mb-6 text-gray-300">
              Built for people who want to get things done
            </h2>
          </div>
        </div>
      </Element>
    </section>
  );
};

export default ForWhoS;
