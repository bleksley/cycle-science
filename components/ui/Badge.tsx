import { cn } from "@/lib/utils";

export function Badge({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-block rounded-sm bg-sand px-2 py-1 text-xs font-semibold uppercase tracking-wide text-earth-dark",
        className,
      )}
    >
      {children}
    </span>
  );
}
