import React from "react";
import Button from "../components/Button.jsx";
import gsap from "gsap";
import

const Cta = () => (
  <section id="cta" className="py-28 px-6 rounded-t-2xl bg-white">
    <div className="max-w-3xl mx-auto text-center">
      <h2 className="text-4xl md:text-5xl font-semibold text-slate-900 tracking-tight">
        Start organizing your work today
      </h2>
      <p className="text-xl text-gray-500 mt-4 mb-10">
        Simple, powerful, and built to help you stay consistent every day.
      </p>
      <button className="group cursor-pointer relative px-12 py-4.5 rounded-full bg-linear-to-br active:translate-y-3  from-gray-800 via-gray-900 to-black border border-gray-600 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-500 overflow-hidden">
        <span className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></span>
        <span className="relative z-10 text-lg font-semibold tracking-[2px] uppercase bg-linear-to-r from-white to-cyan-400 bg-clip-text text-transparent group-hover:tracking-[3px] transition-all">
          Get Started
        </span>
        <img
          src="/images/arrow-2.svg"
          className="absolute right-5 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 w-5 h-5"
          alt={"arrow"}
        />
      </button>
      <div className="flex flex-row gap-4 justify-center">
        <img
          src={"public/images/lock-open-solid-full.svg"}
          className={"h-6 flex-row mt-5 "}
          alt={"lock-open"}
        />
        <p className="text-sm text-gray-400 mt-6 flex-row">
          No signup required — try it instantly
        </p>
      </div>
    </div>
  </section>
);

export default Cta;
