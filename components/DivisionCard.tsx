"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  FlaskConical,
  Flame,
  Droplets,
  Atom,
  Wheat,
  Globe2,
  type LucideIcon,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  "chemical-fertilizers": FlaskConical,
  energy: Flame,
  oil: Droplets,
  petrochemicals: Atom,
  "grains-cereals": Wheat,
  "commodity-solutions": Globe2,
};

export type DivisionCardProps = {
  slug: string;
  title: string;
  short: string;
  primary?: boolean;
  index: number;
};

export function DivisionCard({
  slug,
  title,
  short,
  primary,
  index,
}: DivisionCardProps) {
  const Icon = iconMap[slug] ?? Globe2;
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 28 },
        visible: { opacity: 1, y: 0 },
      }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      <Link
        href={`/commodities#${slug}`}
        className="group relative flex h-full flex-col overflow-hidden border border-line bg-white p-8 card-hover hover:border-ink/20 hover:shadow-[0_24px_60px_-30px_rgba(0,0,0,0.25)]"
      >
        {primary && (
          <span className="absolute right-5 top-5 rounded-full bg-sand-100 px-3 py-1 text-[0.62rem] font-semibold uppercase tracking-[0.14em] text-sand-500">
            Flagship
          </span>
        )}

        <div className="flex h-14 w-14 items-center justify-center border border-line bg-sand-50 text-ink transition-colors duration-500 group-hover:bg-ink group-hover:text-white">
          <Icon className="h-6 w-6" strokeWidth={1.4} />
        </div>

        <div className="mt-7 flex items-baseline gap-3">
          <span className="font-display text-xs font-semibold tabular-nums text-sand-400">
            0{index + 1}
          </span>
        </div>

        <h3 className="mt-2 font-display text-2xl font-semibold text-ink">
          {title}
        </h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-charcoal-light">
          {short}
        </p>

        <div className="mt-7 flex items-center gap-2 text-sm font-medium text-ink">
          <span className="link-underline">Explore division</span>
          <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </div>
      </Link>
    </motion.div>
  );
}
