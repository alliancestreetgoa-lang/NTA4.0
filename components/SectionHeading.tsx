import { Reveal } from "./Reveal";

export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
  light = false,
  direction = "up",
}: {
  eyebrow?: string;
  title: string;
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
          <span className={`eyebrow ${light ? "text-white/60" : ""}`}>
            {eyebrow}
          </span>
        </Reveal>
      )}
      <Reveal delay={1} direction={dir}>
        <h2 className="mt-5 text-display-md font-display font-semibold text-balance text-white">
          {title}
        </h2>
      </Reveal>
      {intro && (
        <Reveal delay={2} direction={dir}>
          <p className="mt-6 text-lg leading-relaxed text-white/70">{intro}</p>
        </Reveal>
      )}
    </div>
  );
}
