"use client";

import { CircularGallery, type GalleryItem } from "@/components/ui/circular-gallery";
import { bangladeshFertilizers } from "@/lib/data";
import { asset } from "@/lib/asset";

// Flagship + secondary grades (skip micronutrients) shown as a rotating 3D
// gallery of their spec-sheet posters. ~12 keeps the ring readable.
const items: GalleryItem[] = bangladeshFertilizers
  .filter((f) => f.poster && f.tier !== "Micronutrient")
  .slice(0, 12)
  .map((f) => ({
    title: f.name,
    subtitle: f.grade,
    imageUrl: asset(f.poster as string),
  }));

export function FertilizerGallery() {
  return (
    <div className="relative">
      <CircularGallery items={items} />
      <p className="mt-3 text-center font-mono text-[0.68rem] uppercase tracking-[0.18em] text-muted-foreground">
        Drag to rotate · click a sheet to read it · {items.length} grades
      </p>
    </div>
  );
}
