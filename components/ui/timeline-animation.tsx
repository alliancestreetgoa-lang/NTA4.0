"use client";

import React from "react";
import {
  motion,
  useInView,
  useReducedMotion,
  type Variants,
} from "framer-motion";

// Recreated from the ui-layouts "TimelineContent" (the Animated Blocks Hero
// primitive), using the project's framer-motion. Renders any element and
// reveals it — staggered by `animationNum` — when `timelineRef` enters view.
const defaultVariants: Variants = {
  hidden: { filter: "blur(10px)", y: -20, opacity: 0 },
  visible: (i = 0) => ({
    y: 0,
    opacity: 1,
    filter: "blur(0px)",
    transition: { delay: i * 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  }),
};

type TimelineContentProps = {
  children?: React.ReactNode;
  as?: keyof React.JSX.IntrinsicElements;
  animationNum: number;
  timelineRef: React.RefObject<HTMLElement | null>;
  customVariants?: Variants;
  className?: string;
  once?: boolean;
} & Record<string, unknown>;

export function TimelineContent({
  children,
  as = "div",
  animationNum,
  timelineRef,
  customVariants,
  className,
  once = true,
  ...props
}: TimelineContentProps) {
  const reduce = useReducedMotion();
  const isInView = useInView(timelineRef, {
    once,
    margin: "0px 0px -10% 0px",
  });
  const variants = customVariants || defaultVariants;

  // Reduced motion: render the plain element, fully visible, no transform.
  if (reduce) {
    const Tag = as as React.ElementType;
    return (
      <Tag className={className} {...props}>
        {children}
      </Tag>
    );
  }

  const MotionTag = (motion as unknown as Record<string, React.ElementType>)[
    as
  ];

  return (
    <MotionTag
      custom={animationNum}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants}
      className={className}
      {...props}
    >
      {children}
    </MotionTag>
  );
}
