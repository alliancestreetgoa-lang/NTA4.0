"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

// Adapted from 21st.dev "Timeline" (@Codehagen) — its date-sorting + Link
// behaviour is dropped (a trader's exact founding dates aren't ours to invent),
// leaving a phase-based vertical rail with a brass spine, staggered reveal and
// reduced-motion fallback, re-themed to the trading-desk system.
export interface Milestone {
  phase: string;
  title: string;
  description: string;
}

export function Milestones({
  items,
  eyebrow,
  title,
  className,
}: {
  items: Milestone[];
  eyebrow?: string;
  title?: string;
  className?: string;
}) {
  const reduce = useReducedMotion();
  return (
    <section className={cn("bg-white", className)}>
      <div className="container-px py-24 md:py-32">
        {eyebrow && <span className="eyebrow block">{eyebrow}</span>}
        {title && (
          <h2 className="mt-5 max-w-2xl text-display-md font-display font-semibold text-balance text-ink">
            {title}
          </h2>
        )}
        <ol className="mt-14 max-w-3xl">
          {items.map((m, i) => (
            <motion.li
              key={m.title}
              initial={reduce ? false : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "0px 0px -12% 0px" }}
              transition={
                reduce
                  ? { duration: 0 }
                  : { duration: 0.5, ease: [0.22, 1, 0.36, 1] }
              }
              className="grid grid-cols-[auto_1fr] gap-6"
            >
              <div className="flex flex-col items-center">
                <span className="mt-1.5 h-3 w-3 shrink-0 rounded-full border-2 border-accent bg-white" />
                {i < items.length - 1 && (
                  <span className="mt-1 w-px flex-1 bg-ink/10" />
                )}
              </div>
              <div className={cn(i < items.length - 1 && "pb-10")}>
                <span className="font-mono text-[0.62rem] uppercase tracking-[0.2em] text-accent-deep">
                  {m.phase}
                </span>
                <h3 className="mt-2 font-display text-xl font-semibold text-ink">
                  {m.title}
                </h3>
                <p className="mt-2.5 leading-relaxed text-sand-500">
                  {m.description}
                </p>
              </div>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
