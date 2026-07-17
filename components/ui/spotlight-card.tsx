"use client";

import { useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

export interface SpotlightCardProps
  extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  /** Colour of the glow at the cursor. Fades to transparent at `spotlightSize`. */
  spotlightColor?: string;
  /** Where the gradient reaches full transparency. */
  spotlightSize?: string;
}

/**
 * From 21st.dev (@preetsuthar17) — "Spotlight Card".
 * A cursor-following radial-gradient spotlight on hover. Zero dependencies:
 * plain useState + an inline radial-gradient.
 *
 * Re-themed for this light, institutional site: the glow is a single warm
 * brass wash (rgba(217,168,78,…)) rather than the original violet.
 *
 * The spotlight layer is `pointer-events-none` and sits at `z-[5]` — above
 * un-z-indexed card media (images, gradient overlays) but below the `z-10`
 * caption/badge/icon content, so text stays crisp and links stay clickable.
 *
 * Reduced motion: a cursor-tracking glow is motion, so when the user prefers
 * reduced motion the spotlight layer and its listeners are not rendered at all
 * — the card renders exactly as it would without this wrapper.
 */
export function SpotlightCard({
  children,
  className,
  spotlightColor = "rgba(217, 168, 78, 0.18)",
  spotlightSize = "40%",
  ...rest
}: SpotlightCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);
  const shouldReduceMotion = useReducedMotion();

  // Reduced motion: render the card unchanged — no glow, no listeners.
  if (shouldReduceMotion) {
    return (
      <div className={className} {...rest}>
        {children}
      </div>
    );
  }

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setOpacity(1)}
      onMouseLeave={() => setOpacity(0)}
      className={cn("relative", className)}
      {...rest}
    >
      {children}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-[5] transition-opacity duration-500 ease-out"
        style={{
          opacity,
          background: `radial-gradient(circle at ${position.x}px ${position.y}px, ${spotlightColor}, transparent ${spotlightSize})`,
        }}
      />
    </div>
  );
}
