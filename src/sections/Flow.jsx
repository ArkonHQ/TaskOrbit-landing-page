import React from "react";
import { Element } from "react-scroll";
import { HowItWorks } from "../constants/index";
import clsx from "clsx";

const Flow = () => {
  return (
    <section id="Flow" className={" h-230 w-full"}>
      <Element name="how-it-works">
        <div className=" flex flex-col items-center justify-center relative mt-20 text-center gap-6">
          <div className="flex flex-col gap-6">
            <h1 className="font-bold text-gray-200 text-5xl max-lg:text-4xl max-md:text-2xl">
              From <span className={"gradient-text-another"}>chaos</span> to{" "}
              <span className={"gradient-text-light"}>clarity </span> in 3
              simple steps
            </h1>
            <p
              className={"text-lg text-gray-300 max-lg:text-md max-md:text-sm"}
            >
              Get started in minutes, not days. No complexity, just results.
            </p>
          </div>
          <div
            className={
              "grid grid-cols-3 flex-row mt-30 gap-24 max-md:grid-cols-2 max-lg:grid-cols-2 max-md:h-40"
            }
          >
            {HowItWorks.map((how, index) => (
              <div
                className={clsx(
                  "glass-light rounded-4xl w-100 h-64  hover:-translate-y-4 transition-all duration-200 max-md:h-55 gap-20 max-lg:w-full max-md:items-center max-md:w-full",
                  index === 2
                    ? "max-md:items-center max-md:w-full max-lg:col-span-2"
                    : "",
                  index === 1 ? "max-md:h-67" : "",
                  index === 0 ? "max-sm:h-67" : "",
                )}
              >
                <img
                  src={how.icon}
                  className={clsx(
                    "flex justify-center w-full mt-6 gap-16 hover:-translate-y-4 transition-all duration-200 absolute h-20",
                  )}
                  alt={`${how.title}`}
                />
                <h2 className="justify-center items-center mt-24 m-auto pt-3 max-md:text-md max-md:pt-0 max-md text-xl font-extrabold text-white hover:-translate-y-4 transition-all duration-200">
                  {how.title}
                </h2>
                <p
                  className={clsx(
                    "text-md pt-4 text-gray-300 max-md:text-sm  hover:-translate-y-4 transition-all duration-200",
                    index === 1 ? "max-md:pt-1 " : "",
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
