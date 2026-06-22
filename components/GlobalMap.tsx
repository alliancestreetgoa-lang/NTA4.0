"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";

const EARTH =
  "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=2000&q=80";

// Approximate positions on a 1000 x 500 stylised map canvas
type Node = {
  id: string;
  label: string;
  x: number;
  y: number;
  hub?: boolean;
};

const nodes: Node[] = [
  { id: "uae", label: "UAE", x: 612, y: 232, hub: true },
  { id: "gcc", label: "GCC", x: 588, y: 218 },
  { id: "europe", label: "Europe", x: 508, y: 150 },
  { id: "africa", label: "Africa", x: 520, y: 300 },
  { id: "india", label: "India", x: 690, y: 248 },
  { id: "sea", label: "Southeast Asia", x: 770, y: 300 },
];

const hub = nodes[0];

function arc(from: Node, to: Node) {
  const mx = (from.x + to.x) / 2;
  const my = (from.y + to.y) / 2 - Math.abs(to.x - from.x) * 0.22 - 20;
  return `M ${from.x} ${from.y} Q ${mx} ${my} ${to.x} ${to.y}`;
}

export function GlobalMap() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <div className="relative w-full overflow-hidden rounded-sm border border-white/10 bg-ink">
      <Image
        src={EARTH}
        alt="Global trade network — Earth at night"
        fill
        className="object-cover opacity-70"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/55 to-ink/35" />
      <div className="absolute inset-0 grain opacity-20" />
      <svg
        viewBox="0 0 1000 500"
        className="relative z-10 w-full"
        style={{ background: "transparent" }}
      >
        {/* Dotted graticule */}
        <defs>
          <pattern
            id="dots"
            width="14"
            height="14"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="1.2" cy="1.2" r="1.2" fill="rgba(255,255,255,0.06)" />
          </pattern>
          <linearGradient id="route" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#C9B596" stopOpacity="0.1" />
            <stop offset="100%" stopColor="#C9B596" stopOpacity="0.9" />
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
            strokeWidth={active === n.id ? 2.4 : 1.4}
            strokeDasharray="6 8"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.4, delay: 0.3 + i * 0.15, ease: "easeInOut" }}
          />
        ))}

        {/* Nodes */}
        {nodes.map((n, i) => (
          <g
            key={n.id}
            onMouseEnter={() => setActive(n.id)}
            onMouseLeave={() => setActive(null)}
            className="cursor-pointer"
          >
            {n.hub && (
              <motion.circle
                cx={n.x}
                cy={n.y}
                fill="none"
                stroke="#C9B596"
                strokeWidth={1.2}
                initial={{ r: 7, opacity: 0.7 }}
                animate={{ r: [7, 26], opacity: [0.7, 0] }}
                transition={{ duration: 2.4, repeat: Infinity, ease: "easeOut" }}
              />
            )}
            <motion.circle
              cx={n.x}
              cy={n.y}
              r={n.hub ? 7 : 5}
              fill={n.hub ? "#C9B596" : active === n.id ? "#C9B596" : "#fff"}
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
            />
            <motion.text
              x={n.x}
              y={n.y - 16}
              textAnchor="middle"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 + i * 0.1 }}
              className="fill-white font-medium"
              style={{ fontSize: 15 }}
            >
              {n.label}
            </motion.text>
          </g>
        ))}
      </svg>

      <div className="relative z-10 flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-white/10 bg-ink/60 px-6 py-4 text-xs text-white/60 backdrop-blur">
        <span className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-sand-400" /> Trading hub —
          Dubai, UAE
        </span>
        <span className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-white" /> Active markets
        </span>
        <span className="flex items-center gap-2">
          <span className="inline-block h-px w-6 border-t border-dashed border-sand-400" />
          Trade routes & shipping lanes
        </span>
      </div>
    </div>
  );
}
