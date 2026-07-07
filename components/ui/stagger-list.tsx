"use client";

/**
 * Stagger List — from 21st.dev (@afridho.utama/stagger-list)
 * A viewport-aware staggered reveal: items animate in one-by-one on scroll via
 * IntersectionObserver + CSS transitions. Zero animation-library dependencies.
 *
 * Adapted for this project: dropped the `cn`/`@/lib/utils` import (plain class
 * join) and extracted the reveal logic into `useStaggeredReveal` so it can also
 * drive semantic <tr> rows, which can't be wrapped in the <div> list version.
 */

import React, { useEffect, useRef, useState } from "react";

const EASE = "cubic-bezier(0.16, 1, 0.3, 1)";

type From = "bottom" | "left" | "right" | "top";

export interface StaggerRevealOptions {
  /** Delay between each item, ms. @default 80 */
  staggerDelay?: number;
  /** Trigger once, or every time it re-enters the viewport. @default true */
  once?: boolean;
  /** Viewport intersection ratio to trigger (0–1). @default 0.1 */
  threshold?: number;
}

/**
 * Headless reveal hook. Attach `containerRef` to the scroll target (a <div>,
 * <tbody>, <ul>…); call `isVisible(index)` per child to drive its styles.
 * `shouldAnimate` is false when the user prefers reduced motion.
 */
export function useStaggeredReveal(count: number, options: StaggerRevealOptions = {}) {
  const { staggerDelay = 80, once = true, threshold = 0.1 } = options;
  const containerRef = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState<Set<number>>(new Set());
  const hasAnimated = useRef(false);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    setReduced(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const timers: number[] = [];
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (once && hasAnimated.current) return;
          hasAnimated.current = true;
          for (let i = 0; i < count; i++) {
            timers.push(
              window.setTimeout(() => {
                setVisible((prev) => new Set(prev).add(i));
              }, i * staggerDelay)
            );
          }
        } else if (!once) {
          setVisible(new Set());
          hasAnimated.current = false;
        }
      },
      { threshold }
    );
    observer.observe(el);
    return () => {
      observer.disconnect();
      timers.forEach(clearTimeout);
    };
  }, [count, staggerDelay, once, threshold]);

  return {
    containerRef,
    shouldAnimate: !reduced,
    isVisible: (index: number) => reduced || visible.has(index),
  };
}

/** Transition string for a staggered child at the given duration. */
export function staggerTransition(duration = 500) {
  return `opacity ${duration}ms ${EASE}, transform ${duration}ms ${EASE}`;
}

export interface StaggeredListProps extends StaggerRevealOptions {
  children: React.ReactNode[];
  /** Animation duration per item, ms. @default 500 */
  duration?: number;
  /** Direction items travel from. @default "bottom" */
  from?: From;
  /** Travel distance in px. @default 24 */
  distance?: number;
  className?: string;
  "aria-label"?: string;
  role?: string;
}

/** The 21st.dev div-based list. For semantic tables, use `useStaggeredReveal`. */
export function StaggeredList({
  children,
  staggerDelay = 80,
  duration = 500,
  from = "bottom",
  distance = 24,
  once = true,
  threshold = 0.1,
  className,
  "aria-label": ariaLabel,
  role = "list",
}: StaggeredListProps) {
  const { containerRef, shouldAnimate, isVisible } = useStaggeredReveal(
    React.Children.count(children),
    { staggerDelay, once, threshold }
  );

  const hidden: Record<From, string> = {
    bottom: `translate3d(0, ${distance}px, 0)`,
    top: `translate3d(0, -${distance}px, 0)`,
    left: `translate3d(-${distance}px, 0, 0)`,
    right: `translate3d(${distance}px, 0, 0)`,
  };

  return (
    <div
      ref={(el) => {
        containerRef.current = el;
      }}
      className={["relative", className].filter(Boolean).join(" ")}
      role={role}
      aria-label={ariaLabel}
    >
      {React.Children.map(children, (child, index) => {
        const shown = isVisible(index);
        return (
          <div
            role="listitem"
            style={{
              opacity: shouldAnimate ? (shown ? 1 : 0) : 1,
              transform: shouldAnimate ? (shown ? "translate3d(0,0,0)" : hidden[from]) : undefined,
              transition: shouldAnimate ? staggerTransition(duration) : undefined,
            }}
          >
            {child}
          </div>
        );
      })}
    </div>
  );
}
