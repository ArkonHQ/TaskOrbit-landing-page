import { Element } from "react-scroll";
import clsx from "clsx";
import { useActiveSection } from "../constants/useActiveSection.js";
import { FeaturesData } from "../constants/featuresData.js";

const Features = () => {
  const sectionIds = FeaturesData.map((f) => f.id);
  const activeSection = useActiveSection(sectionIds);

  return (
    <section
      id="Features"
      className={clsx(
        "relative w-full flex justify-center overflow-visible pt-20 pb-40 radial-gradient-white rounded-2xl p-5 shadow-sm features-section",
      )}
    >
      <Element name="Features" className="w-full">
        <div className="max-w-6xl mx-auto px-6 text-center mb-16 z-10">
          <h1 className="text-5xl font-bold text-black text-center mb-5">
            Master your <span className="gradient-text-dark">workflow</span>
          </h1>
          <p className="text-black font-bold text-xl">
            Five powerful engines that transform how you organize, track, and
            execute tasks.
          </p>
        </div>

        <div className="max-w-6xl mx-auto justify-center px-6 grid grid-cols-1 md:grid-cols-3 mt-80 gap-12">
          {/* Sticky sidebar */}
          <div className="md:col-span-1 justify-self-start sticky top-8 self-start -translate-x-40 max-lg:translate-x-0 max-[1390px]:-translate-x-20 max-[768px]:hidden">
            <div className="bg-gray-100 backdrop-blur-md rounded-xl lg:w-80 p-5 mt-40 tracking-wide drop-shadow-3xl shadow-black-100/40 shadow-md">
              {FeaturesData.map((feature, index) => (
                <h3
                  key={feature.id}
                  className={`text-md text-black font-sans flex justify-between pb-2 mb-4 transition-all duration-300
                    ${index === FeaturesData.length - 1 ? "mb-4" : ""} 
                    ${activeSection === feature.id ? "glow" : "glowHover"}`}
                >
                  {feature.title}
                  <span className="text-sm font-black text-gray-800">
                    {feature.number}
                  </span>
                </h3>
              ))}
            </div>
          </div>

          <div className="md:col-span-2 justify-self-center flex flex-col">
            {FeaturesData.map((feature, idx) => (
              <div
                key={feature.id}
                className="flex flex-row lg:flex-row gap-20 max-[1390px]:flex-col mb-50 items-center"
              >
                <div className="video-card max-lg:w-100 max-lg:h-90 max-[1390px]:h-120 max-[1390px]:w-100 max-md:h-100 max-md:w-100">
                  <video
                    src={feature.videoSrc}
                    className={feature.videoClass}
                    autoPlay
                    loop
                    muted
                    playsInline
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/40 via-black/10 to-transparent" />
                  <div className="video-overlay">
                    <p className="text-start text-md text-white-50 text-shadow-2xs font-light">
                      {feature.overlayText}
                    </p>
                  </div>
                </div>
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl max-[1390px]:-translate-x-14 drop-shadow-3xl shadow-black-100/40 max-[1024px]:translate-x-0 p-5 shadow-md w-80 shrink-0 hover:-translate-y-4 transition-all duration-200">
                  <h3 className="text-xl text-black font-bold border-b border-gray-500 pb-2 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Element>
    </section>
  );
};

export default Features;
