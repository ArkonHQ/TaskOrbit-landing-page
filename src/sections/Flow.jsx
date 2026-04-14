import React, { useRef } from "react";
import { Element } from "react-scroll";
import { HowItWorks } from "../constants/index";
import clsx from "clsx";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const Flow = () => {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      const wrappers = gsap.utils.toArray(
        ".how-icon-wrapper",
        containerRef.current,
      );

      wrappers.forEach((wrapper, index) => {
        gsap.fromTo(
          wrapper,
          { opacity: 0, y: 30, scale: 0.85 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.9,
            delay: index * 0.08,
            ease: "power3.out",
            scrollTrigger: {
              trigger: wrapper.closest(".glass-light"),
              start: "top 65%",
              toggleActions: "play none none none",
            },
          },
        );
      });
    },
    { scope: containerRef },
  );

  return (
    <section id="Flow" className="h-230 w-full">
      <Element name="how-it-works">
        <div className="flex flex-col items-center justify-center relative mt-20 text-center gap-6">
          <div className="flex flex-col gap-6">
            <h1 className="font-bold text-gray-200 text-5xl max-lg:text-4xl max-md:text-2xl">
              From <span className="gradient-text-another">chaos</span> to
              <span className="gradient-text-light">clarity </span> in 3 simple
              steps
            </h1>
            <p className="text-lg text-gray-300 max-lg:text-md max-md:text-sm">
              Get started in minutes, not days. No complexity, just results.
            </p>
          </div>

          <div
            ref={containerRef}
            className="grid grid-cols-3 flex-row mt-30 gap-24 max-md:grid-cols-2 max-lg:grid-cols-2 max-md:h-40"
          >
            {HowItWorks.map((how, index) => (
              <div
                key={how.title}
                className={clsx(
                  "glass-light rounded-4xl w-100 h-64 hover:-translate-y-4 transition-all duration-200 max-md:h-55 gap-20 max-lg:w-full max-md:items-center max-md:w-full relative",
                  index === 2 &&
                    "max-md:items-center max-md:w-full max-lg:col-span-2",
                  index === 1 && "max-md:h-67",
                  index === 0 && "max-sm:h-67",
                )}
              >
                <div className="how-icon-wrapper absolute top-0 left-0 w-full flex justify-center mt-6">
                  <img
                    src={how.icon}
                    className="h-20 hover:-translate-y-4 transition-all duration-200"
                    alt={how.title}
                  />
                </div>

                <h2 className="justify-center items-center mt-24 m-auto pt-3 max-md:text-md max-md:pt-0 text-xl font-extrabold text-white">
                  {how.title}
                </h2>
                <p
                  className={clsx(
                    "text-md pt-4 text-gray-300 max-md:text-sm",
                    index === 1 && "max-md:pt-1",
                  )}
                >
                  {how.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Element>
    </section>
  );
};

export default Flow;
