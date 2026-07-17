import { Reveal } from "./Reveal";
import { TextReveal } from "@/components/ui/text-reveal";

export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
  light = false,
  direction = "up",
}: {
  eyebrow?: string;
  title: React.ReactNode;
  intro?: string;
  align?: "left" | "center";
  light?: boolean;
  direction?: "up" | "down" | "left" | "right";
}) {
  // Centered headings always rise — sliding sideways would fight the symmetry.
  const dir = align === "center" ? "up" : direction;
  return (
    <div
      className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : ""}`}
    >
      {eyebrow && (
        <Reveal direction={dir}>
          <span className={`eyebrow ${light ? "text-ink/60" : ""}`}>
            {eyebrow}
          </span>
        </Reveal>
      )}
      {/* The h2 reveals word-by-word on scroll; delay 0.08s keeps the old
          Reveal delay={1} beat after the eyebrow. No Reveal wrapper here —
          it would double-animate (block slide + per-word blur). */}
      <TextReveal
        as="h2"
        className="mt-5 text-display-md font-display font-semibold text-balance text-ink"
        delay={0.08}
        per="word"
        preset="fade-in-blur"
        speedReveal={1.2}
      >
        {title}
      </TextReveal>
      {intro && (
        <Reveal delay={2} direction={dir}>
          <p className="mt-6 text-lg leading-relaxed text-ink/70">{intro}</p>
        </Reveal>
      )}
    </div>
  );
}
