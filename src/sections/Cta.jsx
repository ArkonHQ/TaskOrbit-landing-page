import React, { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import clsx from "clsx";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const Cta = () => {
  const scrollRef = useRef();
  const buttonWrapperRef = useRef();

  useGSAP(
    () => {
      const wrappers = gsap.utils.toArray(
        ".cta-button-wrapper",
        scrollRef.current,
      );

      wrappers.forEach((wrapper, index) => {
        gsap.fromTo(
          wrapper,
          { opacity: 0, y: 60, scale: 0.95 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            delay: index * 0.12,
            duration: 0.9,
            ease: "power3.out",
            scrollTrigger: {
              trigger: wrapper,
              start: "top 90%",
              toggleActions: "play none none none",
            },
          },
        );
      });
    },
    { scope: scrollRef },
  );

  const buttonRef = useRef(null);

  const handleClick = (e) => {
    e.preventDefault();
    setIsClicked(true);

    const tl = gsap.timeline();
    tl.to(buttonRef.current, {
      scale: 0.95,
      duration: 0.1,
      ease: "power2.in",
    })
      .to(buttonRef.current, {
        scale: 1.05,
        duration: 0.2,
        ease: "elastic.out(1, 0.3)",
      })
      .to(
        ".emergence-burst",
        {
          scale: 4,
          opacity: 0,
          duration: 0.5,
          ease: "power2.out",
        },
        "-=0.3",
      )
      .call(() => {
        window.location.href = "/signup";
      });
  };

  const [isClicked, setIsClicked] = useState(false);

  return (
    <section id="cta" className="py-28 px-6 rounded-t-2xl bg-white">
      <div ref={scrollRef} className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-semibold text-slate-900 tracking-tight">
          Start organizing your work today
        </h2>
        <p className="text-xl text-gray-500 mt-7 mb-10">
          Simple, powerful, and built to help you stay consistent every day.
        </p>

        <div className="cta-button-wrapper">
          <button
            ref={buttonWrapperRef}
            onClick={handleClick}
            disabled={isClicked}
            className="getBtn group cursor-pointer relative px-12 py-4.5 rounded-full bg-linear-to-br from-gray-800 via-gray-900 to-black border border-gray-600 shadow-2xl hover:shadow-[0_0_25px_rgba(0,255,255,0.3)] active:scale-95 active:shadow-lg active:bg-gradient-to-br active:from-gray-900 active:to-black transition-all duration-150 ease-out overflow-hidden"
          >
            <span
              className={clsx(
                "absolute inset-0 rounded-full bg-linear-to-r from-cyan-400 to-blue-500 opacity-0",
                isClicked && "animate-emergence",
              )}
            />

            <span
              className={clsx(
                "absolute inset-0 rounded-full bg-black/40 backdrop-blur-sm transition-opacity duration-300",
                isClicked ? "opacity-100" : "opacity-0",
              )}
            />

            <span className="absolute inset-0 bg-linear-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></span>

            <span className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-700 bg-linear-to-r from-cyan-400 to-blue-500 blur-xl"></span>

            <span
              className={clsx(
                "relative z-10 text-lg font-semibold tracking-[2px] uppercase transition-all duration-500",
                isClicked
                  ? "text-white drop-shadow-[0_0_12px_rgba(0,255,255,0.7)] text-xl font-bold"
                  : "bg-linear-to-r from-white to-cyan-400 bg-clip-text text-transparent group-hover:tracking-[3px]",
              )}
            >
              {isClicked ? "Thanks!" : "Get Started"}
            </span>

            {!isClicked && (
              <img
                src="/images/arrow-2.svg"
                className="absolute right-5 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 w-5 h-5"
                alt="arrow"
              />
            )}
          </button>
        </div>

        <div className="flex flex-row gap-4 justify-center">
          <img
            src="/images/lock-open-solid-full.svg"
            className="h-6 flex-row mt-5"
            alt="lock-open"
          />
          <p className="text-sm text-gray-400 mt-6 flex-row">
            No signup required — try it instantly
          </p>
        </div>
      </div>
    </section>
  );
};

export default Cta;
