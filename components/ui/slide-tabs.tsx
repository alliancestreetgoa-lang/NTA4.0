"use client";

import React, { useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

// Adapted from 21st.dev "Slide Tabs" (@uniquesonu) — a hover indicator that
// follows the cursor. Re-themed for the dark trading-desk navbar: a soft
// sliding highlight (not the demo's black pill), so text stays legible in both
// states and there's no colour-inversion lag during the slide.
type Item = { title: string; url: string };

type Position = { left: number; width: number; opacity: number };

export function SlideTabs({ items }: { items: Item[] }) {
  const [position, setPosition] = useState<Position>({
    left: 0,
    width: 0,
    opacity: 0,
  });

  const pathname = usePathname();
  const norm = (p: string) => (p.length > 1 ? p.replace(/\/+$/, "") : p);
  const current = norm(pathname || "/");

  return (
    <ul
      onMouseLeave={() => setPosition((pv) => ({ ...pv, opacity: 0 }))}
      className="relative flex w-fit items-center rounded-full border border-ink/10 bg-ink/[0.03] p-1"
    >
      {items.map((item) => {
        const active = norm(item.url) === current;
        return (
          <Tab key={item.title} setPosition={setPosition}>
            <a
              href={item.url}
              aria-current={active ? "page" : undefined}
              className={cn(
                "block whitespace-nowrap rounded-full px-3.5 py-1.5 text-sm font-medium transition-colors duration-200",
                active ? "text-ink" : "text-ink/55 hover:text-ink"
              )}
            >
              {item.title}
            </a>
          </Tab>
        );
      })}
      <Cursor position={position} />
    </ul>
  );
}

function Tab({
  children,
  setPosition,
}: {
  children: React.ReactNode;
  setPosition: React.Dispatch<React.SetStateAction<Position>>;
}) {
  const ref = useRef<HTMLLIElement>(null);
  return (
    <li
      ref={ref}
      onMouseEnter={() => {
        if (!ref.current) return;
        const { width } = ref.current.getBoundingClientRect();
        setPosition({ left: ref.current.offsetLeft, width, opacity: 1 });
      }}
      className="relative z-10"
    >
      {children}
    </li>
  );
}

function Cursor({ position }: { position: Position }) {
  const reduce = useReducedMotion();
  return (
    <motion.li
      aria-hidden
      animate={position}
      transition={
        reduce ? { duration: 0 } : { type: "spring", stiffness: 400, damping: 34 }
      }
      className="absolute inset-y-1 z-0 rounded-full bg-ink/10"
    />
  );
}
