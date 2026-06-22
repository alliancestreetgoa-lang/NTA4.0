"use client";

import { useRef, type ReactNode } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

type ParallaxProps = {
  children: ReactNode;
  className?: string;
  /** Total vertical travel in px across the element's scroll through the viewport. */
  distance?: number;
};

/**
 * Subtle scroll-driven vertical drift. The wrapped content moves from
 * +distance to -distance as the element travels through the viewport,
 * creating depth against the page behind it.
 */
export function Parallax({ children, className, distance = 50 }: ParallaxProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [distance, -distance]);

  return (
    <motion.div ref={ref} style={{ y }} className={className}>
      {children}
    </motion.div>
  );
}
