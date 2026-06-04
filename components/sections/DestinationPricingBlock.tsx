import type { Package } from "@/lib/schemas";
import { Button } from "@/components/ui/Button";

export function DestinationPricingBlock({ pkg }: { pkg: Package }) {
  return (
    <div className="rounded-sm border border-border bg-sand/40 p-6 lg:p-8">
      <h3 className="font-display text-2xl font-bold uppercase text-charcoal">
        {pkg.name}
      </h3>
      <p className="mt-1 text-sm text-muted">
        {pkg.duration} · {pkg.difficulty}
      </p>
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <div className="rounded-sm bg-off-white p-5 border border-border">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sunset">
            {pkg.localRate.label}
          </p>
          <p className="font-display mt-2 text-2xl font-bold">
            {pkg.localRate.amount} {pkg.localRate.currency}
          </p>
          {pkg.localRate.note && (
            <p className="mt-2 text-sm text-muted">{pkg.localRate.note}</p>
          )}
        </div>
        <div className="rounded-sm bg-off-white p-5 border border-border">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sunset">
            {pkg.internationalRate.label}
          </p>
          <p className="font-display mt-2 text-2xl font-bold">
            {pkg.internationalRate.amount} {pkg.internationalRate.currency}
          </p>
          {pkg.internationalRate.note && (
            <p className="mt-2 text-sm text-muted">{pkg.internationalRate.note}</p>
          )}
        </div>
      </div>
      <div className="mt-6">
        <Button href="/enquire" variant="primary">
          Enquire about this safari
        </Button>
      </div>
    </div>
  );
}
