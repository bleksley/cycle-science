import Image from "next/image";
import { Container } from "@/components/ui/Container";

export function PageHeader({
  title,
  subhead,
  image,
  imageAlt,
}: {
  title: string;
  subhead?: string;
  image?: string;
  imageAlt?: string;
}) {
  return (
    <section className="relative min-h-[40vh] bg-earth-dark text-off-white lg:min-h-[50vh]">
      {image && (
        <Image
          src={image}
          alt={imageAlt ?? title}
          fill
          className="object-cover opacity-50"
          priority
          sizes="100vw"
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/40 to-transparent" />
      <Container className="relative flex min-h-[40vh] flex-col justify-end pb-12 pt-24 lg:min-h-[50vh] lg:pb-16">
        {subhead && (
          <p className="mb-3 max-w-3xl text-sm font-semibold uppercase tracking-[0.2em] text-sunset">
            {subhead}
          </p>
        )}
        <h1 className="font-display max-w-4xl text-4xl font-bold uppercase leading-none tracking-tight sm:text-5xl lg:text-6xl">
          {title}
        </h1>
      </Container>
    </section>
  );
}
