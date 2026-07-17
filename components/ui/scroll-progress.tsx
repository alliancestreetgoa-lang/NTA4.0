"use client";

import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  type SpringOptions,
} from "framer-motion";
import { useEffect, useState, type RefObject } from "react";

import { cn } from "@/lib/utils";

interface ScrollProgressProps {
  className?: string;
  springOptions?: SpringOptions;
  containerRef?: RefObject<HTMLDivElement>;
}

const DEFAULT_SPRING_OPTIONS: SpringOptions = {
  stiffness: 200,
  damping: 50,
  restDelta: 0.001,
};

/**
 * The animated bar itself. Split out of `ScrollProgress` so the scroll
 * listener is never attached when we've decided not to render — hooks can't
 * live behind an early return.
 */
function ScrollProgressBar({
  className,
  springOptions,
  containerRef,
}: ScrollProgressProps) {
  const { scrollYProgress } = useScroll({
    container: containerRef,
    layoutEffect: containerRef?.current !== null,
  });

  const scaleX = useSpring(scrollYProgress, springOptions ?? DEFAULT_SPRING_OPTIONS);

  return (
    <motion.div
      aria-hidden="true"
      className={cn("inset-x-0 top-0 h-1 origin-left bg-accent", className)}
      style={{ scaleX }}
    />
  );
}

export function ScrollProgress(props: ScrollProgressProps) {
  const shouldReduceMotion = useReducedMotion();
  const [mounted, setMounted] = useState(false);

  // Render nothing on the server and on the first client pass: the static
  // export has no way to know the viewer's motion preference at build time, so
  // deferring past hydration keeps the markup identical on both sides.
  useEffect(() => setMounted(true), []);

  // A progress bar that can't animate would jump between discrete positions on
  // every scroll event — worse than no bar at all. Reduced motion gets nothing.
  if (!mounted || shouldReduceMotion) return null;

  return <ScrollProgressBar {...props} />;
}
