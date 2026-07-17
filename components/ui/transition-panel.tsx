"use client";

import {
  AnimatePresence,
  motion,
  useReducedMotion,
  type MotionProps,
  type Transition,
  type Variant,
} from "framer-motion";
import { cn } from "@/lib/utils";

// Adapted from 21st.dev "Transition Panel" (@ibelick) — crossfades between
// indexed content blocks (e.g. a tab/division panel) instead of an abrupt
// swap. Added a reduced-motion guard the donor lacked: when reduced, skip
// AnimatePresence entirely and render the active child directly.
type TransitionPanelProps = {
  children: React.ReactNode[];
  className?: string;
  transition?: Transition;
  activeIndex: number;
  variants?: { enter: Variant; center: Variant; exit: Variant };
} & MotionProps;

export function TransitionPanel({
  children,
  className,
  transition,
  variants,
  activeIndex,
  ...motionProps
}: TransitionPanelProps) {
  const reduce = useReducedMotion();

  if (reduce) {
    return <div className={cn("relative", className)}>{children[activeIndex]}</div>;
  }

  return (
    <div className={cn("relative", className)}>
      <AnimatePresence initial={false} mode="popLayout" custom={motionProps.custom}>
        <motion.div
          key={activeIndex}
          variants={variants}
          transition={transition}
          initial="enter"
          animate="center"
          exit="exit"
          {...motionProps}
        >
          {children[activeIndex]}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
