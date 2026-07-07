// CSS-driven entrance (see Hero) so the H1 paints on the first frame — no
// flash of an empty hero on navigation. Reduced-motion is handled globally.
export function PageHero({
  eyebrow,
  title,
  intro,
  image,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
  image: string;
}) {
  return (
    <section className="relative flex min-h-[60svh] items-end overflow-hidden bg-ink pt-20">
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 animate-slow-zoom bg-cover bg-center"
          style={{ backgroundImage: `url('${image}')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/75 to-ink/40" />
        <div className="absolute inset-0 grain opacity-25" />
      </div>

      <div className="container-px relative w-full pb-16 pt-24 md:pb-20">
        <span className="eyebrow animate-fade-up text-white/80">{eyebrow}</span>

        <h1
          className="mt-6 max-w-4xl animate-fade-up text-display-lg font-display font-semibold text-white text-balance"
          style={{ animationDelay: "0.08s" }}
        >
          {title}
        </h1>

        {intro && (
          <p
            className="mt-6 max-w-2xl animate-fade-up text-lg leading-relaxed text-white/80"
            style={{ animationDelay: "0.18s" }}
          >
            {intro}
          </p>
        )}
      </div>
    </section>
  );
}
