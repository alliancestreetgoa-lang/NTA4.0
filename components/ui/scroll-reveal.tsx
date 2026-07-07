"use client";

/**
 * Scroll-linked progressive reveal — adapted from 21st.dev "Reading Text Reveal"
 * (@waleedkibhen/reading-text-reveal). As the block scrolls through an
 * "eye-level" band, its items brighten in reading order, tied continuously to
 * scroll position and smoothed with a requestAnimationFrame lerp.
 *
 * Extracted here as a headless hook so it can drive semantic <tr> rows. Unlike a
 * hard reveal, un-reached items stay in the DOM (dimmed, not removed), so the
 * content remains crawlable and readable without JS.
 */

import { useEffect, useRef, useState } from "react";

export interface ScrollRevealOptions {
  /** Fraction of viewport height used as the reveal "eye level". @default 0.72 */
  eyeLevel?: number;
  /** Lerp smoothing factor per frame (higher = snappier). @default 0.14 */
  smoothing?: number;
}

export function useScrollReveal(count: number, options: ScrollRevealOptions = {}) {
  const { eyeLevel = 0.72, smoothing = 0.14 } = options;
  const containerRef = useRef<HTMLElement | null>(null);
  // Default: everything revealed — SSR/no-JS/reduced-motion all render legibly.
  const [revealed, setRevealed] = useState(count);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    setReduced(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);

  useEffect(() => {
    if (reduced) {
      setRevealed(count);
      return;
    }
    let raf = 0;
    let target = 0;
    let current = 0;

    const tick = () => {
      current += (target - current) * smoothing;
      if (Math.abs(target - current) > 0.002) {
        setRevealed(Math.round(current * count));
        raf = requestAnimationFrame(tick);
      } else {
        current = target;
        setRevealed(Math.round(target * count));
      }
    };

    const onScroll = () => {
      const el = containerRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const eye = window.innerHeight * eyeLevel;
      const start = rect.top + window.scrollY - eye;
      const end = rect.top + window.scrollY + rect.height - eye;
      const dist = Math.max(1, end - start);
      target = Math.max(0, Math.min(1, (window.scrollY - start) / dist));
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(tick);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, [count, reduced, eyeLevel, smoothing]);

  return {
    containerRef,
    active: !reduced,
    /** True once the scroll position has reached this item's turn. */
    isRevealed: (index: number) => reduced || index < revealed,
  };
}
