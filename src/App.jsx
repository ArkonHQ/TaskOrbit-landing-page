import React, { useEffect } from "react";
import Hero from "./sections/Hero.jsx";
import Header from "./sections/Header.jsx";
import Features from "./sections/Features.jsx";
import LinesOverlay from "./components/LinesOverlay.jsx";
import { useAnimatedLines } from "./hooks/useAnimationLines.jsx";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Flow from "./sections/Flow.jsx";
import ForWhoS from "./sections/ForWho's.jsx";
import Footer from "./sections/Footer.jsx";
import Cta from "./sections/Cta.jsx";

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  const { sourceRef, targetRefs, paths, gradientY1, gradientY2, drawLines } =
    useAnimatedLines();

  useEffect(() => {
    if (paths.length === 0) return;
    const trigger = ScrollTrigger.create({
      trigger: ".features-section",
      start: "top 80%",
      onEnter: () => drawLines(),
      once: true,
    });
    return () => trigger.kill();
  }, [paths, drawLines]);

  return (
    <main className="relative">
      <Header />
      <div className={"max-[1024px]:hidden"}>
        <LinesOverlay
          paths={paths}
          gradientY1={gradientY1}
          gradientY2={gradientY2}
        />
      </div>
      <Hero ref={sourceRef} />
      <Features targetRefs={targetRefs} />
      <Flow />
      <ForWhoS />
      <Cta />
      <Footer />
    </main>
  );
};

export default App;
