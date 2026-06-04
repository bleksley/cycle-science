import type { Package } from "@/lib/schemas";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";

export function PricingTable({ packages }: { packages: Package[] }) {
  return (
    <div className="space-y-10">
      {packages.map((pkg) => (
        <article
          key={pkg.id}
          className="overflow-hidden rounded-sm border border-border bg-off-white"
        >
          <div className="border-b border-border bg-sand/60 px-6 py-5 sm:px-8">
            <div className="flex flex-wrap items-center gap-3">
              <h3 className="font-display text-2xl font-bold uppercase text-charcoal">
                {pkg.name}
              </h3>
              <Badge>{pkg.difficulty}</Badge>
            </div>
            <p className="mt-1 text-sm text-muted">
              {pkg.destination} · {pkg.duration}
            </p>
          </div>

          <div className="grid gap-6 p-6 sm:grid-cols-2 sm:p-8">
            <div className="rounded-sm border border-border p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sunset">
                {pkg.localRate.label}
              </p>
              <p className="font-display mt-2 text-3xl font-bold text-charcoal">
                {pkg.localRate.amount}{" "}
                <span className="text-lg text-muted">{pkg.localRate.currency}</span>
              </p>
              {pkg.localRate.note && (
                <p className="mt-2 text-sm text-muted">{pkg.localRate.note}</p>
              )}
            </div>
            <div className="rounded-sm border border-border p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sunset">
                {pkg.internationalRate.label}
              </p>
              <p className="font-display mt-2 text-3xl font-bold text-charcoal">
                {pkg.internationalRate.amount}{" "}
                <span className="text-lg text-muted">{pkg.internationalRate.currency}</span>
              </p>
              {pkg.internationalRate.note && (
                <p className="mt-2 text-sm text-muted">{pkg.internationalRate.note}</p>
              )}
            </div>
          </div>

          <div className="border-t border-border px-6 py-5 sm:px-8">
            <p className="text-xs font-semibold uppercase tracking-wide text-earth-dark">
              Included
            </p>
            <ul className="mt-2 grid gap-1 text-sm text-muted sm:grid-cols-2">
              {pkg.inclusions.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
            {pkg.optionalUpgrades && pkg.optionalUpgrades.length > 0 && (
              <>
                <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-earth-dark">
                  Optional upgrades
                </p>
                <ul className="mt-2 text-sm text-muted">
                  {pkg.optionalUpgrades.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
              </>
            )}
          </div>
        </article>
      ))}
    </div>
  );
}

export function PricingTableSection({
  intro,
  packages,
  footnote,
}: {
  intro: string;
  packages: Package[];
  footnote: string;
}) {
  return (
    <section className="py-16 lg:py-24">
      <Container>
        <p className="max-w-3xl text-lg leading-relaxed text-muted">{intro}</p>
        <div className="mt-12">
          <PricingTable packages={packages} />
        </div>
        <p className="mt-10 text-sm text-muted">{footnote}</p>
      </Container>
    </section>
  );
}
