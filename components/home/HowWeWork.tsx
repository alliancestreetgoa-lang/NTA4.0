import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Reveal, RevealGroup } from "@/components/Reveal";
import { whyNta, services } from "@/lib/data";

// The one light section on the page — a paper "credibility ledger": three
// numbered reasons, then the service lines that back them up.
export function HowWeWork() {
  return (
    <section className="bg-sand-50 text-[#201E1B]">
      <div className="container-px py-24 md:py-32">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
          {/* Left: heading — cols 1–4 */}
          <div className="lg:col-span-4">
            <Reveal direction="left">
              <span className="eyebrow !text-[#57544D]">Why NTA Group</span>
            </Reveal>
            <Reveal delay={1} direction="left">
              <h2 className="mt-5 text-display-md font-display font-semibold text-balance">
                Built like a trading house, run like a partner.
              </h2>
            </Reveal>
            <Reveal delay={2} direction="left">
              <p className="mt-6 text-lg leading-relaxed text-[#57544D]">
                Physical trading is a business of trust: reliable origins,
                disciplined logistics and documentation that clears without
                surprises.
              </p>
            </Reveal>
            <Reveal delay={3} direction="left">
              <Link
                href="/why-nta"
                className="link-underline mt-8 text-[#201E1B] hover:text-[#8A6A1F]"
              >
                See all six reasons to partner with NTA
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </Reveal>
          </div>

          {/* Right: numbered reasons — cols 5–12 */}
          <RevealGroup className="lg:col-span-8">
            {whyNta.slice(0, 3).map((item, i) => (
              <Reveal key={item.title} delay={i}>
                <div className="grid gap-x-6 gap-y-2 border-t border-[#D8D4CB] py-7 sm:grid-cols-[3.5rem_minmax(0,16rem)_1fr] md:py-8">
                  <span className="font-mono text-sm text-[#8A6A1F]">
                    0{i + 1}
                  </span>
                  <h3 className="font-display text-xl font-semibold">
                    {item.title}
                  </h3>
                  <p className="text-base leading-relaxed text-[#57544D]">
                    {item.desc}
                  </p>
                </div>
              </Reveal>
            ))}

            {/* Service lines — label and items reveal individually so nothing
                animates twice (an outer Reveal would fade the opacity again). */}
            <div className="border-t border-[#D8D4CB] pt-8">
              <Reveal>
                <p className="font-mono text-[0.68rem] uppercase tracking-[0.18em] text-[#57544D]">
                  Services across the value chain
                </p>
              </Reveal>
              <ul className="mt-5 grid gap-x-10 gap-y-3 sm:grid-cols-2 lg:grid-cols-3">
                {services.slice(0, 6).map((s, i) => (
                  <Reveal
                    as="li"
                    key={s.title}
                    delay={i + 1}
                    className="flex items-center gap-3 text-sm font-medium"
                  >
                    <span aria-hidden className="h-px w-4 shrink-0 bg-[#8A6A1F]" />
                    {s.title}
                  </Reveal>
                ))}
              </ul>
            </div>
          </RevealGroup>
        </div>
      </div>
    </section>
  );
}
