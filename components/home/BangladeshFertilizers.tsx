import Image from "next/image";
import { Sprout } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal, RevealGroup } from "@/components/Reveal";
import { bangladeshFertilizers } from "@/lib/data";

const tierStyle: Record<string, string> = {
  Major: "bg-ink text-white",
  Secondary: "bg-sand-300 text-ink",
  Micronutrient: "bg-white text-charcoal border border-line",
};

export function BangladeshFertilizers() {
  return (
    <section
      id="bangladesh-fertilizers"
      className="scroll-mt-28 border-y border-white/15 bg-sand-600"
    >
      <div className="container-px py-24 md:py-32">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="Fertilizers We Provide"
            title="The complete range of chemical fertilizers we supply."
          />
          <Reveal delay={2}>
            <p className="max-w-sm text-base leading-relaxed text-white/70">
              NTA Group supplies the full range of chemical fertilizers — from
              the major nitrogen, phosphate and potash grades to essential
              micronutrients — sourced and delivered to global agricultural
              markets.
            </p>
          </Reveal>
        </div>

        <RevealGroup className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {bangladeshFertilizers.map((f) =>
            f.poster ? (
              <Reveal key={f.name}>
                <a
                  href={f.poster}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block h-full overflow-hidden border border-line bg-white transition-shadow duration-500 hover:shadow-[0_24px_60px_-30px_rgba(10,10,11,0.35)]"
                >
                  <div className="relative aspect-[3/4] overflow-hidden">
                    <Image
                      src={f.poster}
                      alt={`${f.name} — product information`}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                </a>
              </Reveal>
            ) : (
            <Reveal key={f.name}>
              <article className="group flex h-full flex-col overflow-hidden border border-line bg-white transition-shadow duration-500 hover:shadow-[0_24px_60px_-30px_rgba(10,10,11,0.35)]">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={f.image}
                    alt={f.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <span
                    className={`absolute left-3 top-3 rounded-full px-3 py-1 text-[0.6rem] font-semibold uppercase tracking-[0.12em] ${tierStyle[f.tier]}`}
                  >
                    {f.tier}
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="font-display text-lg font-semibold leading-snug text-ink">
                      {f.name}
                    </h3>
                  </div>

                  <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-charcoal-muted">
                    <span className="font-mono tracking-tight text-charcoal">
                      {f.formula}
                    </span>
                    <span className="h-1 w-1 rounded-full bg-sand-400" />
                    <span className="font-medium text-sand-500">{f.grade}</span>
                  </div>

                  <p className="mt-4 text-sm leading-relaxed text-charcoal-light">
                    {f.uses}
                  </p>

                  <div className="mt-5 flex items-start gap-2 border-t border-line pt-4">
                    <Sprout
                      className="mt-0.5 h-4 w-4 shrink-0 text-sand-500"
                      strokeWidth={1.6}
                    />
                    <div className="flex flex-wrap gap-1.5">
                      {f.crops.map((c) => (
                        <span
                          key={c}
                          className="rounded-full bg-sand-50 px-2.5 py-1 text-[0.7rem] font-medium text-charcoal"
                        >
                          {c}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            </Reveal>
            )
          )}
        </RevealGroup>
      </div>
    </section>
  );
}
