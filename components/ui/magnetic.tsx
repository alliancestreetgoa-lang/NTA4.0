"use client";

import * as React from "react";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  type SpringOptions,
} from "framer-motion";
import { cn } from "@/lib/utils";

/**
 * From 21st.dev (@ibelick) — "Magnetic".
 * Upstream imports from 'motion/react'; remapped to 'framer-motion' (the only
 * animation package in this project). Adds a `className` passthrough and a
 * reduced-motion guard.
 */

const SPRING_CONFIG: SpringOptions = { stiffness: 26.7, damping: 4.1, mass: 0.2 };

export type MagneticProps = {
  children: React.ReactNode;
  intensity?: number;
  range?: number;
  actionArea?: "self" | "parent" | "global";
  springOptions?: SpringOptions;
  className?: string;
};

export function Magnetic({
  children,
  intensity = 0.6,
  range = 100,
  actionArea = "self",
  springOptions = SPRING_CONFIG,
  className,
}: MagneticProps) {
  const [isHovered, setIsHovered] = React.useState(false);
  const ref = React.useRef<HTMLDivElement>(null);

  // Mounted gate: `useReducedMotion` may report `true` on the first client
  // render while the prerendered HTML was built without it. Rendering the
  // motion wrapper on both passes keeps hydration identical.
  const prefersReduced = useReducedMotion();
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => setMounted(true), []);
  const isReduced = mounted && !!prefersReduced;

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x, springOptions);
  const springY = useSpring(y, springOptions);

  React.useEffect(() => {
    if (isReduced) {
      // No pull, and no listener at all.
      x.set(0);
      y.set(0);
      return;
    }

    const calculateDistance = (e: MouseEvent) => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const distanceX = e.clientX - centerX;
      const distanceY = e.clientY - centerY;
      const absoluteDistance = Math.sqrt(distanceX ** 2 + distanceY ** 2);

      if (isHovered && absoluteDistance <= range) {
        const scale = 1 - absoluteDistance / range;
        x.set(distanceX * intensity * scale);
        y.set(distanceY * intensity * scale);
      } else {
        x.set(0);
        y.set(0);
      }
    };

    document.addEventListener("mousemove", calculateDistance);
    return () => document.removeEventListener("mousemove", calculateDistance);
  }, [isHovered, intensity, range, isReduced, x, y]);

  React.useEffect(() => {
    if (isReduced) return;

    if (actionArea === "parent" && ref.current?.parentElement) {
      const parent = ref.current.parentElement;
      const handleParentEnter = () => setIsHovered(true);
      const handleParentLeave = () => setIsHovered(false);

      parent.addEventListener("mouseenter", handleParentEnter);
      parent.addEventListener("mouseleave", handleParentLeave);

      return () => {
        parent.removeEventListener("mouseenter", handleParentEnter);
        parent.removeEventListener("mouseleave", handleParentLeave);
      };
    } else if (actionArea === "global") {
      setIsHovered(true);
    }
  }, [actionArea, isReduced]);

  const handleMouseEnter = () => {
    if (actionArea === "self") setIsHovered(true);
  };

  const handleMouseLeave = () => {
    if (actionArea === "self") {
      setIsHovered(false);
      x.set(0);
      y.set(0);
    }
  };

  // Reduced motion: children render in place, untransformed.
  if (isReduced) {
    return (
      <div ref={ref} className={className}>
        {children}
      </div>
    );
  }

  return (
    <motion.div
      ref={ref}
      className={cn(className)}
      onMouseEnter={actionArea === "self" ? handleMouseEnter : undefined}
      onMouseLeave={actionArea === "self" ? handleMouseLeave : undefined}
      style={{ x: springX, y: springY }}
    >
      {children}
    </motion.div>
  );
}
