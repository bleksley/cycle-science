import Link from "next/link";
import type { Package } from "@/lib/schemas";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";

function RateCard({
  label,
  amount,
  currency,
  note,
}: {
  label: string;
  amount: string;
  currency: string;
  note?: string;
}) {
  return (
    <div className="rounded-sm border border-border bg-off-white p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sunset">
        {label}
      </p>
      <p className="font-display mt-2 text-3xl font-bold text-charcoal">
        {amount}{" "}
        <span className="text-lg text-muted">{currency}</span>
      </p>
      {note && <p className="mt-2 text-sm text-muted">{note}</p>}
    </div>
  );
}

export function PricingSnapshot({
  packages,
  title,
  subtitle,
}: {
  packages: Package[];
  title: string;
  subtitle?: string;
}) {
  const featured = packages[0];

  return (
    <section className="py-16 lg:py-24">
      <Container>
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
          <div>
            <SectionHeading
              eyebrow="Pricing"
              title={title}
              subtitle={subtitle}
            />
            <div className="mt-8">
              <Button href="/pricing" variant="secondary">
                View all packages
              </Button>
            </div>
          </div>

          {featured && (
            <div className="rounded-sm border border-border bg-sand/50 p-6 lg:p-8">
              <p className="font-display text-xl font-bold uppercase text-charcoal">
                {featured.name}
              </p>
              <p className="mt-1 text-sm text-muted">
                {featured.destination} · {featured.duration}
              </p>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <RateCard {...featured.localRate} />
                <RateCard {...featured.internationalRate} />
              </div>
              <p className="mt-4 text-sm text-muted">
                Both rates shown on every package —{" "}
                <Link href="/pricing" className="font-semibold text-sunset hover:underline">
                  compare all destinations
                </Link>
                .
              </p>
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}
