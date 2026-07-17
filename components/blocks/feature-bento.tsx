import type { LucideIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { cn } from "@/lib/utils";

export interface BentoItem {
  title: string;
  description: string;
  icon: LucideIcon;
  /** Optional background image (full-bleed, with a legibility gradient). */
  image?: string;
  /** Span two columns on large screens (for a bento rhythm). */
  wide?: boolean;
}

/**
 * From 21st.dev (@tommyjepsen) — feature section with bento grid.
 * Parameterized: pass badge/title/subtitle + items with icons.
 */
export function FeatureBento({
  badge,
  title,
  subtitle,
  items,
}: {
  badge?: string;
  title: string;
  subtitle?: string;
  items: BentoItem[];
}) {
  return (
    <div className="w-full py-20 lg:py-32">
      <div className="container mx-auto">
        <div className="flex flex-col gap-10">
          <div className="flex gap-4 flex-col items-start">
            {badge && (
              <div>
                <Badge>{badge}</Badge>
              </div>
            )}
            <div className="flex gap-2 flex-col">
              <h2 className="text-3xl md:text-5xl tracking-tighter max-w-xl font-semibold text-left text-balance">
                {title}
              </h2>
              {subtitle && (
                <p className="text-lg max-w-xl leading-relaxed tracking-tight text-muted-foreground text-left">
                  {subtitle}
                </p>
              )}
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {items.map((it, i) => {
              const Icon = it.icon;
              return (
                <SpotlightCard
                  key={i}
                  className={cn(
                    "group relative overflow-hidden bg-muted rounded-xl p-6 flex justify-between flex-col aspect-square",
                    it.wide && "lg:col-span-2 lg:aspect-auto"
                  )}
                >
                  {it.image && (
                    <>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={it.image}
                        alt=""
                        aria-hidden="true"
                        className="absolute inset-0 h-full w-full object-cover object-center grayscale-[0.65] brightness-[0.82] contrast-[1.05] transition-all duration-700 ease-out group-hover:grayscale-0 group-hover:brightness-100 group-hover:scale-[1.05]"
                      />
                      {/* Warm near-black wash: strong at the base for text legibility,
                          a lighter veil up top so the icon stays legible. Unifies the
                          desaturated imagery into one trading-desk system. */}
                      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/75 to-ink/35" />
                      <div className="absolute inset-0 bg-accent/[0.06] mix-blend-overlay" />
                    </>
                  )}
                  <Icon
                    className={cn(
                      "relative z-10 w-8 h-8 stroke-1",
                      it.image && "text-white [filter:drop-shadow(0_1px_6px_rgba(10,10,9,0.6))]"
                    )}
                  />
                  <div className="relative z-10 flex flex-col">
                    <h3
                      className={cn(
                        "text-xl tracking-tight",
                        it.image && "text-white"
                      )}
                    >
                      {it.title}
                    </h3>
                    <p
                      className={cn(
                        "max-w-xs text-base",
                        it.image ? "text-white/85" : "text-muted-foreground"
                      )}
                    >
                      {it.description}
                    </p>
                  </div>
                </SpotlightCard>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
