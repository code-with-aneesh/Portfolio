import React, { useState, useMemo, useRef, useEffect } from "react";
import { motion } from "framer-motion";

interface Path {
  id: string;
  d: string;
  className: string;
}

interface AnimatedGlobeProps {
  width?: string | number;
  height?: string | number;
  className?: string;
  animationDuration?: number;
  onAnimationComplete?: () => void;
}

const paths: Path[] = [
  {
    id: "outer-circle",
    d: "M512 960c-92.8 0-160-200-160-448S419.2 64 512 64s160 200 160 448-67.2 448-160 448z m0-32c65.6 0 128-185.6 128-416S577.6 96 512 96s-128 185.6-128 416 62.4 416 128 416z",
    className: "text-gray-900 dark:text-gray-100",
  },
  {
    id: "left-wing",
    d: "M124.8 736c-48-80 92.8-238.4 307.2-363.2S852.8 208 899.2 288 806.4 526.4 592 651.2 171.2 816 124.8 736z m27.2-16c33.6 57.6 225.6 17.6 424-97.6S905.6 361.6 872 304 646.4 286.4 448 401.6 118.4 662.4 152 720z",
    className: "text-gray-900 dark:text-gray-100",
  },
  {
    id: "right-wing",
    d: "M899.2 736c-46.4 80-254.4 38.4-467.2-84.8S76.8 368 124.8 288s254.4-38.4 467.2 84.8S947.2 656 899.2 736z m-27.2-16c33.6-57.6-97.6-203.2-296-318.4S184 246.4 152 304 249.6 507.2 448 622.4s392 155.2 424 97.6z",
    className: "text-gray-900 dark:text-gray-100",
  },
  {
    id: "center-dots",
    d: "M512 592c-44.8 0-80-35.2-80-80s35.2-80 80-80 80 35.2 80 80-35.2 80-80 80zM272 312c-27.2 0-48-20.8-48-48s20.8-48 48-48 48 20.8 48 48-20.8 48-48 48zM416 880c-27.2 0-48-20.8-48-48s20.8-48 48-48 48 20.8 48 48-20.8 48-48 48z m448-432c-27.2 0-48-20.8-48-48s20.8-48 48-48 48 20.8 48 48-20.8 48-48 48z",
    className: "text-blue-600 dark:text-blue-400", // This color will be used for fill
  },
];

export function AnimatedGlobe({
  width = 256,
  height = 256,
  className = "",
  animationDuration = 0.6,
  onAnimationComplete,
}: AnimatedGlobeProps) {
  const [allPathsDrawn, setAllPathsDrawn] = useState(false);
  const hasCalledOnCompleteProp = useRef(false);
  const filledPathsCount = useRef(0);

  const containerVariants = useMemo(
    () => ({
      hidden: { opacity: 0, scale: 0.8 },
      visible: {
        opacity: 1,
        scale: 1,
        transition: {
          duration: animationDuration,
          ease: "easeOut",
          when: "beforeChildren",
          staggerChildren: 0.15 * (animationDuration / 0.6),
        },
      },
      hover: {
        scale: 1.05,
        rotate: 5,
        transition: {
          duration: 0.3 * (animationDuration / 0.6),
          ease: "easeInOut",
        },
      },
    }),
    [animationDuration]
  );

  const pathVariants = useMemo(
    () => ({
      hidden: {
        pathLength: 0,
        opacity: 0,
        fillOpacity: 0,
        strokeOpacity: 0,
      },
      visible: (index: number) => ({
        pathLength: 1,
        opacity: 1,
        strokeOpacity: 1,
        fillOpacity: 0, // Keep fill transparent while drawing stroke
        transition: {
          pathLength: {
            duration: 1.2 * (animationDuration / 0.6),
            delay: index * 0.5 * (animationDuration / 0.6),
            ease: [0.4, 0, 0.2, 1],
          },
          opacity: {
            duration: 0.4 * (animationDuration / 0.6),
            delay: index * 0.15 * (animationDuration / 0.6),
          },
          // fillOpacity is handled by the 'filled' state transition
        },
      }),
      filled: {
        fillOpacity: 1, // Animate fill to be visible
        transition: {
          fillOpacity: {
            duration: 1.0 * (animationDuration / 0.6),
            ease: "easeInOut",
          },
        },
      },
    }),
    [animationDuration]
  );

  useEffect(() => {
    // This effect now correctly triggers onAnimationComplete after all paths are drawn AND all paths have finished their 'filled' animation.
    if (
      allPathsDrawn &&
      filledPathsCount.current === paths.length &&
      !hasCalledOnCompleteProp.current
    ) {
      onAnimationComplete?.();
      hasCalledOnCompleteProp.current = true;
    }
    // Adding filledPathsCount.current to dependencies is not standard for refs,
    // but if we want the effect to re-evaluate when it changes *and* allPathsDrawn is already true,
    // we would typically trigger it via a state that changes alongside the ref, or include it knowing its implications.
    // However, the primary trigger is `allPathsDrawn`, and the condition checks the ref's current value.
  }, [allPathsDrawn, onAnimationComplete]); // Rely on allPathsDrawn to trigger check

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      whileHover="hover"
      className={`flex items-center justify-center ${className}`}
      style={{ width, height }}
    >
      <svg
        viewBox="0 0 1024 1024"
        role="img"
        aria-label="Animated globe graphic"
        fill="none" // Parent SVG does not force fill, children control their own
      >
        {paths.map((path, index) => (
          <motion.path
            key={path.id}
            d={path.d}
            variants={pathVariants}
            custom={index}
            initial="hidden"
            animate={allPathsDrawn ? "filled" : "visible"}
            className={path.className} // Applies Tailwind text color (e.g., text-blue-600)
            stroke="currentColor" // Stroke uses the text color
            fill="currentColor" // Explicitly set fill to use the text color
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            onAnimationComplete={(definition) => {
              if (definition === "visible" && index === paths.length - 1) {
                setAllPathsDrawn(true);
              } else if (definition === "filled") {
                filledPathsCount.current += 1;
                // If all paths are drawn and this is the last path to be filled,
                // the useEffect will catch this state and call onAnimationComplete.
                // We can also force a re-check of the useEffect if needed,
                // but setAllPathsDrawn already triggers it.
                if (
                  allPathsDrawn &&
                  filledPathsCount.current === paths.length &&
                  !hasCalledOnCompleteProp.current
                ) {
                  onAnimationComplete?.();
                  hasCalledOnCompleteProp.current = true;
                }
              }
            }}
          />
        ))}
      </svg>
    </motion.div>
  );
}
