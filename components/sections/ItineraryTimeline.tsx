import type { Destination } from "@/lib/schemas";

export function ItineraryTimeline({
  items,
}: {
  items: Destination["itinerary"];
}) {
  return (
    <ol className="space-y-8 border-l-2 border-sunset pl-8">
      {items.map((item, index) => (
        <li key={item.day} className="relative">
          <span className="absolute -left-[2.35rem] top-0 flex h-8 w-8 items-center justify-center rounded-full bg-sunset text-xs font-bold text-off-white">
            {index + 1}
          </span>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sunset">
            {item.day}
          </p>
          <h4 className="font-display mt-1 text-xl font-bold uppercase text-charcoal">
            {item.title}
          </h4>
          <p className="mt-2 text-muted leading-relaxed">{item.description}</p>
        </li>
      ))}
    </ol>
  );
}
