import { useRef, useEffect, useState, useCallback } from "react";
import gsap from "gsap";

export const useAnimatedLines = () => {
  const sourceRef = useRef(null);
  // Create stable refs for three targets
  const targetRefs = useRef([useRef(null), useRef(null), useRef(null)]).current;
  const [paths, setPaths] = useState([]);
  const [gradientY1, setGradientY1] = useState(0);
  const [gradientY2, setGradientY2] = useState(0);
  const frameId = useRef(null);
  const animationTriggered = useRef(false); // prevent multiple draw calls

  // Update paths (read current positions)
  const updatePaths = useCallback(() => {
    if (!sourceRef.current) return false;
    const container = document.getElementById("svg-container");
    if (!container) return false;
    const containerRect = container.getBoundingClientRect();
    const sourceRect = sourceRef.current.getBoundingClientRect();
    const sourceX = sourceRect.left + sourceRect.width / 2 - containerRect.left;
    const sourceY = sourceRect.bottom - containerRect.top;

    let hasValidTarget = false;
    const newPaths = targetRefs.map((ref) => {
      if (!ref.current) return "";
      hasValidTarget = true;
      const rect = ref.current.getBoundingClientRect();
      const targetX = rect.left + rect.width / 2 - containerRect.left;
      const targetY = rect.top - containerRect.top;
      const cp1x = sourceX;
      const cp1y = sourceY + (targetY - sourceY) * 0.35;
      const cp2x = targetX;
      const cp2y = targetY - (targetY - sourceY) * 0.25;
      let bend = 0;
      if (targetX < sourceX - 50) bend = -60;
      if (targetX > sourceX + 50) bend = 60;
      return `M ${sourceX} ${sourceY} C ${cp1x + bend * 0.25} ${cp1y}, ${cp2x + bend * 0.2} ${cp2y}, ${targetX} ${targetY}`;
    });
    if (hasValidTarget) setPaths(newPaths);
    return hasValidTarget;
  }, [targetRefs]);

  // Update gradient vertical bounds
  const updateGradientBounds = useCallback(() => {
    const container = document.getElementById("svg-container");
    if (!container) return;
    const containerRect = container.getBoundingClientRect();
    if (!sourceRef.current) return;
    const sourceRect = sourceRef.current.getBoundingClientRect();
    const heroBottom = sourceRect.bottom - containerRect.top;
    const featuresSection = document.querySelector(".features-section");
    if (!featuresSection) return;
    const featuresRect = featuresSection.getBoundingClientRect();
    const featuresTop = featuresRect.top - containerRect.top;
    setGradientY1(heroBottom - 50);
    setGradientY2(featuresTop + 50);
  }, []);

  // Throttled update (scroll + resize)
  const throttledUpdate = useCallback(() => {
    if (frameId.current) return;
    frameId.current = requestAnimationFrame(() => {
      updatePaths();
      updateGradientBounds();
      frameId.current = null;
    });
  }, [updatePaths, updateGradientBounds]);

  // Initial measurement and observers
  useEffect(() => {
    // Small delay to ensure DOM is fully painted
    const timer = setTimeout(() => {
      throttledUpdate();
    }, 100);
    window.addEventListener("resize", throttledUpdate);
    window.addEventListener("scroll", throttledUpdate);

    const observer = new ResizeObserver(() => throttledUpdate());
    if (sourceRef.current) observer.observe(sourceRef.current);
    targetRefs.forEach((ref) => {
      if (ref.current) observer.observe(ref.current);
    });
    const featuresSection = document.querySelector(".features-section");
    if (featuresSection) observer.observe(featuresSection);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("resize", throttledUpdate);
      window.removeEventListener("scroll", throttledUpdate);
      observer.disconnect();
      if (frameId.current) cancelAnimationFrame(frameId.current);
    };
  }, [throttledUpdate]);

  // Force update when targetRefs become available (e.g., after Features mounts)
  useEffect(() => {
    const checkTargets = setInterval(() => {
      if (targetRefs.some((ref) => ref.current !== null)) {
        throttledUpdate();
        clearInterval(checkTargets);
      }
    }, 50);
    return () => clearInterval(checkTargets);
  }, [targetRefs, throttledUpdate]);

  // Draw lines (called by ScrollTrigger)
  const drawLines = useCallback(() => {
    if (animationTriggered.current) return;
    // Ensure paths are fresh before drawing
    const hasValid = updatePaths();
    if (!hasValid) {
      // Retry after a short delay
      setTimeout(() => drawLines(), 100);
      return;
    }
    const lines = document.querySelectorAll(".animated-line");
    if (lines.length === 0) return;
    lines.forEach((line) => {
      const len = line.getTotalLength();
      if (len === 0) return;
      line.style.strokeDasharray = len;
      line.style.strokeDashoffset = len;
    });
    gsap.to(".animated-line", {
      strokeDashoffset: 0,
      duration: 2.4,
      stagger: { amount: 0.7, from: "start", ease: "power2.inOut" },
      ease: "expo.out",
      delay: 0.2,
      onComplete: () => {
        animationTriggered.current = true;
      },
    });
  }, [updatePaths]);

  return { sourceRef, targetRefs, paths, gradientY1, gradientY2, drawLines };
};
