"use client";

/**
 * ParallaxMedia — scroll-linked parallax wrapper for images/video.
 *
 * The scroll-progress → y-offset idea is harvested from 21st.dev
 * "Parallax Motion" (@avanishverma4): `useScroll({ target })` piped through
 * `useTransform` into a small vertical drift. Only that hook logic was taken.
 *
 * Deliberately NOT carried over from the donor:
 *  - its <StyleSheet /> block, which injected a GLOBAL
 *    `html { scroll-snap-type: y mandatory; }` (would hijack site-wide scroll)
 *    plus fixed .img-container sizing and a hardcoded pixabay <img>;
 *  - its neon (#8df0cc) progress bar and headings, which break the one-brass
 *    accent rule.
 *
 * Differences by design: the donor's 200px drift is showy — this defaults to a
 * restrained 32px. The offset is widened to ['start end', 'end start'] so
 * progress spans the element's full pass through the viewport rather than only
 * the top edge, and the inner media is scaled slightly so the y-offset can
 * never expose an edge of the frame.
 */

import { useRef, type ReactNode } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

export interface ParallaxMediaProps {
  children: ReactNode;
  /** Total vertical drift in px (travels from -distance/2 to +distance/2). @default 32 */
  distance?: number;
  /**
   * Scale applied to the inner media so the drift stays inside the frame.
   * Must be > 1 + distance/height for full coverage. @default 1.14
   */
  scale?: number;
  /** Classes for the outer frame — set the size/aspect ratio here. */
  className?: string;
}

/**
 * Wraps media in an overflow-hidden frame and drifts it vertically with scroll.
 * The frame is the positioning context, so `fill` images work as children.
 * Respects `prefers-reduced-motion`: renders the final static state (no drift,
 * no scale, no transform).
 */
export function ParallaxMedia({
  children,
  distance = 32,
  scale = 1.14,
  className,
}: ParallaxMediaProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  // Progress runs 0 → 1 across the element's whole pass through the viewport.
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Hooks must run unconditionally; the reduced-motion branch happens at apply.
  const y = useTransform(scrollYProgress, [0, 1], [-distance / 2, distance / 2]);

  return (
    <div
      ref={ref}
      className={cn("relative overflow-hidden rounded-xl bg-sand-50", className)}
    >
      <motion.div
        className="absolute inset-0"
        style={
          reduced
            ? undefined
            : { y, scale, willChange: "transform" }
        }
      >
        {children}
      </motion.div>
    </div>
  );
}
