import type { Metadata } from "next";
import { PageHero21 } from "@/components/blocks/page-hero";
import { DivisionExplorer } from "@/components/blocks/division-explorer";
import { CTASection } from "@/components/blocks/cta-section";
import { FertilizerGallery } from "@/components/home/FertilizerGallery";
import { divisions } from "@/lib/data";

export const metadata: Metadata = {
  title: "Commodities",
  description:
    "Explore NTA Group's commodity portfolio: chemical fertilizers, energy, oil, petrochemicals, grains and cereals — with global supply capability across every category.",
};

export default function CommoditiesPage() {
  return (
    <main className="bg-background text-foreground">
      <PageHero21
        eyebrow="Our Commodities"
        title={
          <>
            A complete portfolio across{" "}
            <span className="text-accent-deep">energy &amp; agri commodities</span>.
          </>
        }
        subtitle="From our flagship fertilizer trading to energy, oil, petrochemicals and grains — explore the commodities we source and supply to global markets."
        primary={{ text: "Contact Trading Team", href: "/contact" }}
      />

      <DivisionExplorer />

      <div className="container mx-auto px-4 pb-8">
        {divisions.map((d) => {
          const products = d.groups.flatMap((g) => g.products.map((p) => p.name));
          return (
            <section
              key={d.slug}
              id={d.slug}
              className="scroll-mt-24 border-t py-12"
            >
              <h2 className="text-2xl font-semibold text-foreground">{d.title}</h2>
              <p className="mt-3 max-w-2xl text-muted-foreground">
                {d.description}
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {products.map((name) => (
                  <span
                    key={name}
                    className="inline-flex items-center rounded-full border px-3 py-1 text-xs text-muted-foreground"
                  >
                    {name}
                  </span>
                ))}
              </div>
              {d.slug === "chemical-fertilizers" && (
                <div className="mt-10">
                  <h3 className="mb-4 text-sm font-medium uppercase tracking-wider text-muted-foreground">
                    Fertilizer specification sheets
                  </h3>
                  <FertilizerGallery />
                </div>
              )}
            </section>
          );
        })}
      </div>

      <CTASection
        badge={{ text: "Global supply" }}
        title="Source with confidence."
        description="Partner with NTA Group's trading desk for reliable, quality-assured supply across every commodity category."
        action={{ text: "Contact Trading Team", href: "/contact" }}
      />
    </main>
  );
}
