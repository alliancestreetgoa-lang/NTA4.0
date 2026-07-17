import { Button } from "@/components/ui/button";

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
          <span className="inline-flex items-center rounded-full border bg-muted px-3 py-1 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            {eyebrow}
          </span>
        )}
        <h1 className="max-w-4xl text-4xl font-extrabold tracking-tighter text-balance md:text-6xl">
          {title}
        </h1>
        {subtitle && (
          <p className="max-w-2xl text-lg text-muted-foreground md:text-xl">{subtitle}</p>
        )}
        {(primary || secondary) && (
          <div className="flex flex-wrap justify-center gap-3">
            {primary && (
              <Button size="lg" asChild>
                <a href={primary.href}>{primary.text}</a>
              </Button>
            )}
            {secondary && (
              <Button size="lg" variant="outline" asChild>
                <a href={secondary.href}>{secondary.text}</a>
              </Button>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
