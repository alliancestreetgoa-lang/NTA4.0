import Link from "next/link";
import { ArrowUpRight, ArrowDown } from "lucide-react";
import { site } from "@/lib/site";

// Entrance is CSS-driven (not framer-motion on-mount) so the headline paints
// with the first frame instead of waiting for hydration — no flash of an empty
// hero on load/navigation. The reduced-motion media query neutralises it.
export function Hero() {
  return (
    <section className="relative flex min-h-[100svh] items-center overflow-hidden bg-ink">
      {/* Background image */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 animate-slow-zoom bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1494412651409-8963ce7935a7?auto=format&fit=crop&w=2400&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/80 to-ink/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/90 via-ink/40 to-transparent" />
        <div className="absolute inset-0 grain opacity-30" />
      </div>

      <div className="container-px relative w-full pt-24 pb-10">
        <span className="eyebrow animate-fade-up text-white/80">
          UAE-Based Global Commodity Trading
        </span>

        <h1 className="mt-6 max-w-5xl text-display-lg font-display font-semibold leading-[1.04] text-white text-balance">
          {["Powering Global Trade", "Through Energy &", "Agri Commodities"].map(
            (line, i) => (
              <span key={line} className="block overflow-hidden py-[0.08em]">
                <span
                  className="block animate-fade-up"
                  style={{ animationDelay: `${0.12 + i * 0.1}s` }}
                >
                  {line}
                </span>
              </span>
            )
          )}
        </h1>

        <p
          className="mt-5 max-w-xl animate-fade-up text-lg leading-relaxed text-white/80"
          style={{ animationDelay: "0.5s" }}
        >
          Connecting producers, suppliers, manufacturers and global markets
          through reliable commodity trading solutions.
        </p>

        <div
          className="mt-8 flex animate-fade-up flex-wrap gap-4"
          style={{ animationDelay: "0.62s" }}
        >
          <Link href="/commodities" className="btn-primary group">
            Explore Commodities
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
          <Link href="/contact" className="btn-ghost-light">
            Contact Trading Team
          </Link>
        </div>

        {/* Stats row */}
        <div
          className="mt-10 grid w-full max-w-3xl animate-fade-up grid-cols-2 gap-px overflow-hidden border border-white/15 bg-white/10 sm:grid-cols-4"
          style={{ animationDelay: "0.78s" }}
        >
          {site.stats.map((s) => (
            <div key={s.label} className="bg-ink/40 px-5 py-6 text-center backdrop-blur-sm">
              <div className="font-display text-3xl font-semibold text-white">
                {s.value}
              </div>
              <div className="mt-1.5 text-xs leading-snug text-white/70">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-8 right-6 hidden items-center gap-2 text-xs uppercase tracking-[0.2em] text-white/60 md:flex lg:right-16">
        Scroll
        <ArrowDown className="h-4 w-4 animate-scroll-hint" />
      </div>
    </section>
  );
}
