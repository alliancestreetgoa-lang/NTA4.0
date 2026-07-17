import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface CTAProps {
  badge?: { text: string };
  title: string;
  description?: string;
  action: { text: string; href: string };
  className?: string;
}

/** From 21st.dev (@mikolajdobrucki) — CTA section (glow/animation classes stripped for v3). */
export function CTASection({ badge, title, description, action, className }: CTAProps) {
  return (
    <section className={cn("overflow-hidden border-t", className)}>
      <div className="relative mx-auto flex max-w-container flex-col items-center gap-6 px-8 py-12 text-center sm:gap-8 md:py-24">
        {badge && (
          <Badge variant="outline">
            <span className="text-muted-foreground">{badge.text}</span>
          </Badge>
        )}
        <h2 className="text-3xl font-semibold sm:text-5xl text-balance max-w-2xl">{title}</h2>
        {description && (
          <p className="text-muted-foreground max-w-xl">{description}</p>
        )}
        <Button size="lg" asChild>
          <a href={action.href}>{action.text}</a>
        </Button>
      </div>
    </section>
  );
}
