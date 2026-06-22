import { Reveal } from "./Reveal";

export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
  light = false,
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
  align?: "left" | "center";
  light?: boolean;
}) {
  return (
    <div
      className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : ""}`}
    >
      {eyebrow && (
        <Reveal>
          <span className={`eyebrow ${light ? "text-white/60" : ""}`}>
            {eyebrow}
          </span>
        </Reveal>
      )}
      <Reveal delay={1}>
        <h2 className="mt-5 text-display-md font-display font-semibold text-balance text-white">
          {title}
        </h2>
      </Reveal>
      {intro && (
        <Reveal delay={2}>
          <p className="mt-6 text-lg leading-relaxed text-white/70">{intro}</p>
        </Reveal>
      )}
    </div>
  );
}
