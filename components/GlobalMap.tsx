"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { useId, useState } from "react";
import { asset } from "@/lib/asset";

const EARTH = asset("/world-trade-map.png");
const BRASS = "#6D8BFF";

type Node = {
  id: string;
  label: string;
  x: number;
  y: number;
  hub?: boolean;
  role: string;
  // Extra vertical offset for the label, to avoid collisions between close nodes.
  labelDy?: number;
};

// Positions tuned to world-trade-map.png. The 1672x941 (~16:9) image is shown
// with object-cover inside the 2:1 viewBox, cropping ~5.6% off top & bottom, so
// y = (imageYfraction - 0.0556) * 562.5 and x = imageXfraction * 1000.
const nodes: Node[] = [
  { id: "uae", label: "UAE", x: 607, y: 217, hub: true, role: "Global trading hub" },
  { id: "gcc", label: "GCC", x: 582, y: 177, labelDy: -14, role: "Regional supply network" },
  { id: "europe", label: "Europe", x: 451, y: 125, role: "Mature trading corridors" },
  { id: "africa", label: "Africa", x: 520, y: 269, role: "Growth & food-security markets" },
  { id: "india", label: "India", x: 662, y: 215, role: "High-demand import market" },
  { id: "sea", label: "Southeast Asia", x: 755, y: 240, role: "Industrial & agri demand" },
];

const hub = nodes[0];

function arc(from: Node, to: Node) {
  const mx = (from.x + to.x) / 2;
  const my = (from.y + to.y) / 2 - Math.abs(to.x - from.x) * 0.22 - 20;
  return `M ${from.x} ${from.y} Q ${mx} ${my} ${to.x} ${to.y}`;
}

export function GlobalMap() {
  const [active, setActive] = useState<string | null>(null);
  const reduce = useReducedMotion();
  const titleId = useId();

  // With reduced motion, skip the draw-on and render everything at rest.
  const pathMotion = (i: number) =>
    reduce
      ? { initial: false as const, animate: { pathLength: 1, opacity: 1 } }
      : {
          initial: { pathLength: 0, opacity: 0 },
          whileInView: { pathLength: 1, opacity: 1 },
          viewport: { once: true },
          transition: { duration: 1.4, delay: 0.3 + i * 0.15, ease: "easeInOut" as const },
        };

  const nodeMotion = (i: number) =>
    reduce
      ? { initial: false as const, animate: { scale: 1, opacity: 1 } }
      : {
          initial: { scale: 0, opacity: 0 },
          whileInView: { scale: 1, opacity: 1 },
          viewport: { once: true },
          transition: { duration: 0.5, delay: 0.4 + i * 0.1 },
        };

  return (
    <div className="relative w-full overflow-hidden rounded-sm border border-white/10 bg-ink">
      <Image
        src={EARTH}
        alt="World map showing NTA Group's trade network radiating from Dubai across the GCC, Europe, Africa, India and Southeast Asia"
        fill
        className="object-cover opacity-90"
        sizes="100vw"
      />
      {/* Lighter overlay than before, so the landmasses stay legible under the routes. */}
      <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/35 to-ink/15" />
      <div className="absolute inset-0 grain opacity-20" />
      <svg
        viewBox="0 0 1000 500"
        className="relative z-10 w-full"
        role="img"
        aria-labelledby={titleId}
        style={{ background: "transparent" }}
      >
        <title id={titleId}>
          NTA Group global trade network: Dubai hub connecting to the GCC,
          Europe, Africa, India and Southeast Asia.
        </title>
        <defs>
          <pattern id="dots" width="14" height="14" patternUnits="userSpaceOnUse">
            <circle cx="1.2" cy="1.2" r="1.2" fill="rgba(255,255,255,0.05)" />
          </pattern>
          <linearGradient id="route" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor={BRASS} stopOpacity="0.12" />
            <stop offset="100%" stopColor={BRASS} stopOpacity="0.95" />
          </linearGradient>
        </defs>
        <rect width="1000" height="500" fill="url(#dots)" />

        {/* Trade routes from hub */}
        {nodes.slice(1).map((n, i) => (
          <motion.path
            key={n.id}
            d={arc(hub, n)}
            fill="none"
            stroke="url(#route)"
            strokeWidth={active === n.id ? 2.6 : 1.4}
            strokeDasharray="6 8"
            {...pathMotion(i)}
          />
        ))}

        {/* Nodes — focusable and hoverable, keyboard and pointer both drive `active` */}
        {nodes.map((n, i) => (
          <g
            key={n.id}
            tabIndex={0}
            role="button"
            aria-label={`${n.label} — ${n.role}`}
            onMouseEnter={() => setActive(n.id)}
            onMouseLeave={() => setActive(null)}
            onFocus={() => setActive(n.id)}
            onBlur={() => setActive(null)}
            className="cursor-pointer outline-none [&:focus-visible>circle]:stroke-accent"
          >
            {/* Enlarged transparent hit area for pointer + touch */}
            <circle cx={n.x} cy={n.y} r={18} fill="transparent" />
            <motion.circle
              cx={n.x}
              cy={n.y}
              r={n.hub ? 7 : 5}
              fill={n.hub || active === n.id ? BRASS : "#fff"}
              strokeWidth={2}
              {...nodeMotion(i)}
            />
            <motion.text
              x={n.x}
              y={n.y - 16 + (n.labelDy ?? 0)}
              textAnchor="middle"
              initial={reduce ? false : { opacity: 0 }}
              whileInView={reduce ? undefined : { opacity: 1 }}
              animate={reduce ? { opacity: 1 } : undefined}
              viewport={{ once: true }}
              transition={{ delay: 0.6 + i * 0.1 }}
              className="fill-white font-medium [text-shadow:0_1px_6px_rgba(0,0,0,0.9)]"
              style={{ fontSize: 15 }}
            >
              {n.label}
            </motion.text>
          </g>
        ))}
      </svg>

      <div className="relative z-10 flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-white/10 bg-ink/70 px-6 py-4 text-xs text-white/70 backdrop-blur">
        <span className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-accent" /> Trading hub —
          Dubai, UAE
        </span>
        <span className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-white" /> Active markets
        </span>
        <span className="flex items-center gap-2">
          <span className="inline-block h-px w-6 border-t border-dashed border-accent" />
          Trade routes &amp; shipping lanes
        </span>
      </div>
    </div>
  );
}
