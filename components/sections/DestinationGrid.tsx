import Image from "next/image";
import Link from "next/link";
import type { Destination } from "@/lib/schemas";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";

export function DestinationGrid({
  destinations,
  eyebrow,
  title,
  subtitle,
}: {
  destinations: Destination[];
  eyebrow?: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <section className="bg-sand py-16 lg:py-24">
      <Container>
        <SectionHeading
          eyebrow={eyebrow}
          title={title}
          subtitle={subtitle}
          className="mb-12"
        />
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {destinations.map((dest) => (
            <article
              key={dest.slug}
              className="group flex flex-col overflow-hidden rounded-sm bg-off-white shadow-sm"
            >
              <Link href={`/experiences/${dest.slug}`} className="relative block aspect-[4/3]">
                <Image
                  src={dest.heroImage}
                  alt={dest.heroImageAlt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </Link>
              <div className="flex flex-1 flex-col p-6">
                <Badge>{dest.positioning}</Badge>
                <h3 className="font-display mt-3 text-2xl font-bold uppercase tracking-tight text-charcoal">
                  <Link href={`/experiences/${dest.slug}`} className="hover:text-sunset">
                    {dest.name}
                  </Link>
                </h3>
                <p className="mt-2 text-sm font-semibold uppercase tracking-wide text-sunset">
                  {dest.tagline}
                </p>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-muted">
                  {dest.overview.slice(0, 160)}…
                </p>
                <Link
                  href={`/experiences/${dest.slug}`}
                  className="mt-6 text-sm font-semibold uppercase tracking-wide text-earth-dark hover:text-sunset"
                >
                  Explore {dest.name} →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
