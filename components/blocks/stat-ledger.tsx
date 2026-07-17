"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

// Adapted from 21st.dev "Count Animation" (@bundui): the bare framer-motion
// count-up is wrapped to (1) trigger on scroll-into-view once, (2) respect
// reduced motion, (3) parse a "40+" / "24/7" / "6" string into a counted
// number + a brass suffix. Rendered as a sharp-edged proof ledger (structural
// grid, no card radius) — the site's "proof by numbers" beat.
export interface Stat {
  value: string;
  label: string;
}

function Figure({ value }: { value: string }) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -12% 0px" });

  const match = value.match(/^(\d[\d,]*)(.*)$/);
  const isNumeric = match !== null;
  const target = match ? parseInt(match[1].replace(/,/g, ""), 10) : 0;
  const suffix = match ? match[2] : value;

  const [display, setDisplay] = useState(reduce ? target : 0);

  useEffect(() => {
    if (!isNumeric) return;
    if (reduce) {
      setDisplay(target);
      return;
    }
    if (!inView) return;
    let raf = 0;
    const start = performance.now();
    const duration = 1600;
    const easeOut = (t: number) => 1 - Math.pow(1 - t, 3);
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      setDisplay(Math.round(easeOut(t) * target));
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, reduce, target, isNumeric]);

  if (!isNumeric) {
    return (
      <span ref={ref} className="tabular-nums">
        {value}
      </span>
    );
  }

  return (
    <span ref={ref} className="tabular-nums">
      {display.toLocaleString()}
      {suffix && <span className="text-accent-deep">{suffix}</span>}
    </span>
  );
}

export function StatLedger({
  items,
  eyebrow,
  className,
}: {
  items: Stat[];
  eyebrow?: string;
  className?: string;
}) {
  const cols =
    items.length === 3
      ? "lg:grid-cols-3"
      : items.length === 2
        ? "lg:grid-cols-2"
        : "lg:grid-cols-4";

  return (
    <section className={cn("bg-sand-50", className)}>
      <div className="container-px py-16 md:py-20">
        {eyebrow && <span className="eyebrow mb-10 block">{eyebrow}</span>}
        <div
          className={cn(
            "grid grid-cols-2 border-l border-t border-ink/10",
            cols
          )}
        >
          {items.map((s) => (
            <div
              key={s.label}
              className="border-b border-r border-ink/10 px-5 py-8 md:px-8 md:py-10"
            >
              <div className="font-display text-4xl font-semibold leading-none text-ink md:text-5xl">
                <Figure value={s.value} />
              </div>
              <div className="mt-3 font-mono text-[0.7rem] uppercase tracking-[0.16em] text-sand-500 md:text-xs">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
