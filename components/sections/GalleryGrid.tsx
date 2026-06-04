"use client";

import Image from "next/image";
import { useState } from "react";
import { cn } from "@/lib/utils";

export type GalleryItem = {
  src: string;
  alt: string;
  tag?: string;
};

export function GalleryGrid({
  items,
  filters,
}: {
  items: GalleryItem[];
  filters?: { id: string; label: string }[];
}) {
  const [active, setActive] = useState(filters?.[0]?.id ?? "all");

  const filtered =
    active === "all"
      ? items
      : items.filter((item) => item.tag === active);

  return (
    <div>
      {filters && filters.length > 1 && (
        <div className="mb-8 flex flex-wrap gap-2">
          {filters.map((f) => (
            <button
              key={f.id}
              type="button"
              onClick={() => setActive(f.id)}
              className={cn(
                "rounded-sm px-4 py-2 text-xs font-semibold uppercase tracking-wide transition-colors",
                active === f.id
                  ? "bg-earth-dark text-off-white"
                  : "bg-sand text-earth-dark hover:bg-border",
              )}
            >
              {f.label}
            </button>
          ))}
        </div>
      )}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((item) => (
          <div
            key={item.src + item.alt}
            className="relative aspect-[4/3] overflow-hidden rounded-sm"
          >
            <Image
              src={item.src}
              alt={item.alt}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
