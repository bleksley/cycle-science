import Link from "next/link";
import { getSite } from "@/lib/content";
import { Button } from "@/components/ui/Button";
import { MobileMenu } from "@/components/layout/MobileMenu";

export function Navbar() {
  const site = getSite();

  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-off-white/95 backdrop-blur">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between py-4">
          <Link href="/">
            <span className="font-display text-xl font-bold uppercase tracking-tight text-charcoal sm:text-2xl">
              {site.name}
            </span>
            <span className="block text-xs uppercase tracking-[0.15em] text-muted">
              {site.tagline}
            </span>
          </Link>

          <ul className="hidden items-center gap-6 lg:flex">
            {site.nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm font-medium uppercase tracking-wide text-charcoal hover:text-sunset"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-4">
            <div className="hidden lg:block">
              <Button href="/enquire" variant="primary">
                {site.ctas.primary}
              </Button>
            </div>
            <MobileMenu nav={site.nav} ctaLabel={site.ctas.primary} />
          </div>
        </nav>
      </div>
    </header>
  );
}
