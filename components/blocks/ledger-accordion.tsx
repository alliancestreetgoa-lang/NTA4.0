"use client";

import type { ReactNode } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";

// Shared themed accordion on the repo's Radix accordion primitive: sharp
// structural rows (hairline borders, no card radius), muted trigger that goes
// brass on open, IBM Plex Mono meta, brass chevron. Each page composes its own
// content (commodities catalog groups, contact FAQ answers) into `content`.
export interface LedgerRow {
  id: string;
  label: string;
  meta?: string;
  content: ReactNode;
}

export function LedgerAccordion({
  items,
  defaultValue,
  className,
}: {
  items: LedgerRow[];
  defaultValue?: string;
  className?: string;
}) {
  return (
    <Accordion
      type="single"
      collapsible
      defaultValue={defaultValue}
      className={cn("border-t border-ink/10", className)}
    >
      {items.map((row) => (
        <AccordionItem
          key={row.id}
          value={row.id}
          className="border-ink/10"
        >
          <AccordionTrigger className="gap-4 py-6 text-left text-ink/65 transition-colors duration-300 hover:no-underline data-[state=open]:text-accent-deep">
            <span className="flex flex-1 flex-wrap items-baseline gap-x-4 gap-y-1">
              <span className="font-display text-lg font-semibold tracking-tight md:text-xl">
                {row.label}
              </span>
              {row.meta && (
                <span className="font-mono text-xs uppercase tracking-[0.12em] text-sand-500">
                  {row.meta}
                </span>
              )}
            </span>
          </AccordionTrigger>
          <AccordionContent className="pb-8 pr-6 text-sand-500 md:pr-10">
            {row.content}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
