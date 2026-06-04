import Link from "next/link";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "outline";

const variants: Record<Variant, string> = {
  primary:
    "bg-sunset text-off-white hover:bg-sunset-hover border border-transparent",
  secondary:
    "bg-earth-dark text-off-white hover:bg-earth border border-transparent",
  outline:
    "bg-transparent text-charcoal border border-border hover:bg-sand",
};

type ButtonProps = {
  variant?: Variant;
  className?: string;
  children: React.ReactNode;
} & (
  | { href: string; onClick?: never; type?: never }
  | { href?: never; onClick?: () => void; type?: "button" | "submit" }
);

export function Button({
  variant = "primary",
  className,
  children,
  href,
  onClick,
  type = "button",
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center rounded-sm px-6 py-3 text-sm font-semibold uppercase tracking-wide transition-colors",
    variants[variant],
    className,
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
