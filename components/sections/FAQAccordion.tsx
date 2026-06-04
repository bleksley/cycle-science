"use client";

import { useState } from "react";
import type { FAQ } from "@/lib/schemas";
import { cn } from "@/lib/utils";

export function FAQAccordion({ items }: { items: FAQ["items"] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="divide-y divide-border rounded-sm border border-border bg-off-white">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div key={item.question}>
            <button
              type="button"
              className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
              aria-expanded={isOpen}
              onClick={() => setOpenIndex(isOpen ? null : index)}
            >
              <span className="font-display text-lg font-semibold uppercase tracking-tight text-charcoal">
                {item.question}
              </span>
              <span className="text-sunset text-xl" aria-hidden>
                {isOpen ? "−" : "+"}
              </span>
            </button>
            <div
              className={cn(
                "overflow-hidden px-6 transition-all",
                isOpen ? "max-h-96 pb-5" : "max-h-0",
              )}
            >
              <p className="text-muted leading-relaxed">{item.answer}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
