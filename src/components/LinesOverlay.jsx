import React from "react";

const LinesOverlay = ({ paths, gradientY1, gradientY2 }) => {
  // Fallback to solid yellow if gradient not ready
  const isValidGradient =
    gradientY1 && gradientY2 && Math.abs(gradientY2 - gradientY1) > 10;
  return (
    <div
      id="svg-container"
      className="absolute inset-0 pointer-events-none"
      style={{ zIndex: 20, overflow: "visible" }}
    >
      <svg className="w-full h-full" style={{ overflow: "visible" }}>
        <defs>
          <linearGradient
            id="lineGradient"
            gradientUnits="userSpaceOnUse"
            x1="0"
            y1={gradientY1}
            x2="0"
            y2={gradientY2}
          >
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="100%" stopColor="#000000" />
          </linearGradient>
        </defs>
        {paths.map((d, idx) => (
          <path
            key={idx}
            className="animated-line"
            d={d}
            stroke={isValidGradient ? "url(#lineGradient)" : "#facc15"}
            strokeWidth="3.5"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        ))}
      </svg>
    </div>
  );
};

export default LinesOverlay;
