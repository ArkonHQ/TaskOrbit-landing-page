// sections/Hero.jsx
import Button from "../components/Button.jsx";
import { words } from "../constants";
import { Element } from "react-scroll";
import React, { useState, useRef } from "react";

// In React 19, just accept ref as a regular prop
const Hero = ({ ref }) => {
  const [isPlay, setIsPlay] = useState(true);
  const lightVideoRef = useRef(null);
  const darkVideoRef = useRef(null);

  const handelPlayPause = () => {
    const lightVideo = lightVideoRef.current;
    const darkVideo = darkVideoRef.current;
    if (isPlay) {
      lightVideo?.pause();
      darkVideo?.pause();
    } else {
      lightVideo?.play();
      darkVideo?.play();
    }
    setIsPlay(!isPlay);
  };

  return (
    <section id="hero" className="relative overflow-hidden">
      <Element name="hero">
        {/* Background images - made responsive */}
        <div className="absolute top-0 left-0 z-0 w-full h-full">
          <img src="/images/bg.png" alt="background" className="object-cover" />
        </div>
        <div className="absolute right-0 w-60 sm:w-80 md:w-96 opacity-70 m-5 mt-20 md:mt-40 lg:mt-60">
          <img
            src="/images/Background_Pixels.svg"
            alt="background pixels"
            className="w-full h-auto"
          />
        </div>

        <header className="flex relative justify-center w-full px-5 pt-16 md:pt-24 lg:pt-32 items-center">
          <div className="flex flex-col gap-6 md:gap-8 w-full max-w-6xl">
            <div className="hero-text text-center md:text-left">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold leading-tight">
                Stop managing tasks
                <br />
                Start finishing them
                <span className="slide relative inline-block ml-2 md:ml-4 align-middle">
                  <span className="wrapper flex flex-col">
                    {words.map((word, index) => (
                      <span
                        key={`${word.text}-${index}`}
                        className="flex items-center gap-2 md:gap-3 pb-1 md:pb-2"
                      >
                        <img
                          src={word.imgPath}
                          alt={word.text}
                          className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 p-1 md:p-2 rounded-xl bg-white-50"
                        />
                        <span className="text-inherit">{word.text}</span>
                      </span>
                    ))}
                  </span>
                </span>
              </h1>
              <p className="max-w-2xl mx-auto md:mx-0 mt-4 md:mt-6 text-base sm:text-lg md:text-xl lg:text-2xl text-[#A2A2A2] leading-relaxed">
                TaskOrbit gives you a clear system to manage tasks, track
                deadlines, and actually get things done — all in one place.
              </p>
            </div>
            <div className="flex justify-center md:justify-start">
              <Button
                className="w-60 h-12 md:w-80 md:h-16 z-10"
                id="button"
                firstText="Try our App"
                text="View Features"
              />
            </div>
          </div>
        </header>

        <div className="hero-layout">
          <main className="flex justify-center items-start sm:px-15 sm:pb-30">
            <div className="w-full max-w-7xl mx-auto">
              {/* ATTACH THE REF DIRECTLY – no forwardRef needed */}
              <div
                ref={ref}
                className="glass-light rounded-3xl p-2 shadow-white-50 glow-after glow-before"
              >
                <div className="rounded-3xl overflow-hidden mx-5 lg:mx-0 mt-1 -mb-5">
                  <video
                    src="/videos/light-theme.mp4"
                    className="dark:hidden w-full h-full object-cover"
                    loop
                    ref={lightVideoRef}
                    autoPlay
                    muted
                    playsInline
                    poster="preview.png"
                  />
                </div>
                <div className="rounded-3xl overflow-hidden mx-5 lg:mx-0 mt-5">
                  <video
                    src="/videos/dark-theme.mp4"
                    className="light:hidden w-full h-full object-cover"
                    loop
                    ref={darkVideoRef}
                    autoPlay
                    playsInline
                    muted
                    poster="preview.png"
                  />
                  <div
                    className="max-w-15 right-5 bottom-5"
                    onClick={handelPlayPause}
                  >
                    <img
                      src={`/images/${isPlay ? "pause" : "play"}.png`}
                      alt={isPlay ? "pause" : "play"}
                      className="absolute max-w-12 right-5 bottom-5 cursor-pointer bg-[#7a7a7a59] rounded-[40%] max-lg:right-[35px]"
                    />
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </Element>
    </section>
  );
};

export default Hero;
