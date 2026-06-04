export function InclusionsList({
  inclusions,
  exclusions,
}: {
  inclusions: string[];
  exclusions: string[];
}) {
  return (
    <div className="grid gap-8 sm:grid-cols-2">
      <div>
        <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-sunset">
          Included
        </h4>
        <ul className="mt-4 space-y-2 text-muted">
          {inclusions.map((item) => (
            <li key={item} className="flex gap-2">
              <span className="text-sunset">✓</span>
              {item}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-earth">
          Not included
        </h4>
        <ul className="mt-4 space-y-2 text-muted">
          {exclusions.map((item) => (
            <li key={item} className="flex gap-2">
              <span className="text-earth">—</span>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
