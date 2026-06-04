"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/Button";

type NavItem = { label: string; href: string };

export function MobileMenu({
  nav,
  ctaLabel,
}: {
  nav: NavItem[];
  ctaLabel: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        className="rounded-sm border border-border px-3 py-2 text-sm font-semibold uppercase"
        aria-expanded={open}
        aria-label="Toggle menu"
        onClick={() => setOpen(!open)}
      >
        Menu
      </button>

      {open && (
        <div className="fixed inset-x-0 top-[73px] z-40 border-t border-border bg-off-white shadow-lg">
          <ul className="mx-auto max-w-7xl flex flex-col gap-1 px-4 py-4">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="block py-2 text-sm font-medium uppercase tracking-wide"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li className="pt-2">
              <Button href="/enquire" variant="primary" className="w-full">
                {ctaLabel}
              </Button>
            </li>
          </ul>
        </div>
      )}

      {open && (
        <button
          type="button"
          className="fixed inset-0 top-[73px] z-30 bg-charcoal/20"
          aria-label="Close menu"
          onClick={() => setOpen(false)}
        />
      )}
    </div>
  );
}
