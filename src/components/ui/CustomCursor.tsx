import React, { useEffect, useState } from "react";

export function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [showCursor, setShowCursor] = useState(false);
  const [isInteracting, setIsInteracting] = useState(false);
  const [interactionPosition, setInteractionPosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const isTouchDevice = window.matchMedia("(pointer: coarse)").matches;

    if (isTouchDevice) {
      setShowCursor(false);
      return;
    }

    setShowCursor(true);

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnter = (e: React.MouseEvent) => {
      setIsInteracting(true);
      setInteractionPosition({
        x: e.clientX - e.currentTarget.getBoundingClientRect().width / 2,
        y: e.clientY - e.currentTarget.getBoundingClientRect().height / 2,
      });
    };

    const handleMouseLeave = () => {
      setIsInteracting(false);
    };

    // Add event listeners to interactive elements (you might need to adjust the selector)
    const interactiveElements = document.querySelectorAll(
      "button, a, input[type='submit'], input[type='button'], label, .interactive"
    );
    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", handleMouseEnter);
      el.addEventListener("mouseleave", handleMouseLeave);
    });

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter);
        el.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, []);

  if (!showCursor) return null;

  const outerScale = isInteracting ? 1.5 : 1;
  const innerScale = isInteracting ? 0.5 : 1;
  const outerTranslateX = isInteracting
    ? (interactionPosition.x - position.x) * 0.2
    : 0;
  const outerTranslateY = isInteracting
    ? (interactionPosition.y - position.y) * 0.2
    : 0;

  return (
    <>
      {/* Outer Glow Ring */}
      <div
        className="fixed top-0 left-0 w-16 h-16 rounded-full pointer-events-none transition-all duration-200 ease-out z-50"
        style={{
          transform: `translate(calc(${position.x}px - 32px + ${outerTranslateX}px), calc(${position.y}px - 32px + ${outerTranslateY}px)) scale(${outerScale})`,
          border: "2px solid #a78bfa", // Soft purple
          boxShadow: "0 0 15px rgba(167, 139, 250, 0.6)",
          mixBlendMode: "exclusion",
        }}
      />
      {/* Inner Smooth Dot */}
      <div
        className="fixed top-0 left-0 w-8 h-8 rounded-full pointer-events-none transition-all duration-200 ease-out z-50"
        style={{
          transform: `translate(calc(${position.x}px - 16px), calc(${position.y}px - 16px)) scale(${innerScale})`,
          backgroundColor: "#d8b4fe", // Lighter purple
          mixBlendMode: "exclusion",
        }}
      />
    </>
  );
}
