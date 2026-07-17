"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

// Adapted from a 21st.dev stats/meters pattern — the Radix Progress bar is
// reimplemented as a plain width-% div (no new dependency). Brass fill on a
// muted track, animated to its value on scroll-in, reduced-motion guarded.
export interface Meter {
  label: string;
  value: string;
  percent: number;
  note?: string;
}

function MeterRow({ label, value, percent, note }: Meter) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -12% 0px" });
  const [w, setW] = useState(reduce ? percent : 0);

  useEffect(() => {
    if (reduce) {
      setW(percent);
      return;
    }
    if (inView) setW(percent);
  }, [inView, reduce, percent]);

  return (
    <div
      ref={ref}
      className="rounded-xl border border-ink/10 bg-sand-50 p-6 md:p-7"
    >
      <div className="flex items-baseline justify-between gap-4">
        <h3 className="font-display text-base font-semibold text-ink">
          {label}
        </h3>
        <span className="shrink-0 font-mono text-sm text-accent-deep">{value}</span>
      </div>
      {note && (
        <p className="mt-2 text-sm leading-relaxed text-sand-500">{note}</p>
      )}
      <div className="mt-5 h-1.5 w-full overflow-hidden rounded-full bg-ink/10">
        <div
          className="h-full rounded-full bg-accent transition-[width] duration-1000 ease-premium"
          style={{ width: `${Math.max(0, Math.min(100, w))}%` }}
        />
      </div>
    </div>
  );
}

export function MetricMeters({
  items,
  eyebrow,
  title,
  subtitle,
  className,
}: {
  items: Meter[];
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  className?: string;
}) {
  return (
    <section className={cn("bg-white", className)}>
      <div className="container-px py-24 md:py-32">
        {(eyebrow || title) && (
          <div className="max-w-2xl">
            {eyebrow && <span className="eyebrow block">{eyebrow}</span>}
            {title && (
              <h2 className="mt-5 text-display-md font-display font-semibold text-balance text-ink">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="mt-5 text-lg leading-relaxed text-sand-500">
                {subtitle}
              </p>
            )}
          </div>
        )}
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {items.map((m) => (
            <MeterRow key={m.label} {...m} />
          ))}
        </div>
      </div>
    </section>
  );
}
