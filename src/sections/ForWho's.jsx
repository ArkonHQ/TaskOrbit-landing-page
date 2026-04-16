import React, { useRef } from "react";
import { Element } from "react-scroll";
import { reasons } from "../constants/index.js";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const ForWhoS = () => {
  const sectionRef = useRef(null);

  useGSAP(
    () => {
      const heading = document.querySelector(".forwho-heading");
      const subheading = document.querySelector(".forwho-subheading");
      const icons = document.querySelectorAll(".animatedIcon ");
      const textWhos = document.querySelectorAll(".animated ");

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });

      tl.fromTo(
        heading,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" },
      )

        .fromTo(
          subheading,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" },
          "-=0.2",
        )
        .fromTo(
          textWhos,
          { opacity: 0, y: 40, scale: 0.9 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.7,
            stagger: 0.2,
            ease: "back.out(1.2)",
          },
          "-=0.1",
        )

        .fromTo(
          icons,
          { opacity: 0, y: 20, scale: 0.9 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.3,
            stagger: 0.2,
            ease: "back.out(1.2)",
          },
          "-=0.1",
        );
    },
    { scope: sectionRef },
  );

  return (
    <section ref={sectionRef} id="for-who" className="pb-20 px-6">
      <Element name="ForWho">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="forwho-heading text-4xl  md:text-5xl font-bold text-white mb-4">
            Why TaskOrbit?
          </h2>
          <div className="forwho-subheading text-gray-300 mb-12">
            <p>Discover the difference clarity makes.</p>
          </div>

          <ul className="flex flex-col md:flex-row justify-center gap-6 md:gap-10 animated">
            {reasons.map((reason, idx) => (
              <li
                key={idx}
                className="flex items-center justify-center gap-3 text-lg text-gray-300"
              >
                <img
                  src={reason.icon}
                  alt="Icon"
                  className="w-10 h-10 animatedIcon object-contain transition-transform duration-200 hover:-translate-y-2"
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
