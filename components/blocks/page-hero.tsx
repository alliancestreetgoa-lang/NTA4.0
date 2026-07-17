import Link from "next/link";
import { Button } from "@/components/ui/button";
import { TextReveal } from "@/components/ui/text-reveal";
import { Reveal } from "@/components/Reveal";

/** Server-friendly page hero (link-based CTAs) built from shadcn tokens. */
export function PageHero21({
  eyebrow,
  title,
  subtitle,
  primary,
  secondary,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  subtitle?: string;
  primary?: { text: string; href: string };
  secondary?: { text: string; href: string };
}) {
  return (
    <section className="border-b bg-background text-foreground">
      <div className="container mx-auto flex flex-col items-center gap-6 px-4 py-20 text-center md:py-28">
        {eyebrow && (
          <Reveal>
            <span className="inline-flex items-center rounded-full border bg-muted px-3 py-1 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              {eyebrow}
            </span>
          </Reveal>
        )}
        {/* title is ReactNode: plain strings reveal word-by-word, JSX
            (e.g. an accent <span>) falls back to a whole-block fade. Starts
            just after the badge (delay in raw seconds, not Reveal's index units). */}
        <TextReveal
          as="h1"
          className="max-w-4xl text-4xl font-extrabold tracking-tighter text-balance md:text-6xl"
          per="word"
          preset="fade-in-blur"
          speedReveal={1.2}
          delay={0.15}
        >
          {title}
        </TextReveal>
        {subtitle && (
          <Reveal delay={3}>
            <p className="max-w-2xl text-lg text-muted-foreground md:text-xl">{subtitle}</p>
          </Reveal>
        )}
        {(primary || secondary) && (
          <Reveal delay={4}>
            <div className="flex flex-wrap justify-center gap-3">
              {primary && (
                <Button size="lg" asChild>
                  <Link href={primary.href}>{primary.text}</Link>
                </Button>
              )}
              {secondary && (
                <Button size="lg" variant="outline" asChild>
                  <Link href={secondary.href}>{secondary.text}</Link>
                </Button>
              )}
            </div>
          </Reveal>
        )}
      </div>
    </section>
  );
}
