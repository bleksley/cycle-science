import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export function HeroCinematic({
  title,
  subtitle,
  image,
  imageAlt,
  primaryCta,
  primaryHref,
  secondaryCta,
  secondaryHref,
}: {
  title: string;
  subtitle: string;
  image: string;
  imageAlt: string;
  primaryCta: string;
  primaryHref: string;
  secondaryCta: string;
  secondaryHref: string;
}) {
  return (
    <section className="relative min-h-[85vh] bg-charcoal text-off-white">
      <Image
        src={image}
        alt={imageAlt}
        fill
        priority
        className="object-cover opacity-60"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-charcoal/95 via-charcoal/60 to-charcoal/30" />
      <Container className="relative flex min-h-[85vh] flex-col justify-center py-24">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-sunset">
          Mountain Bike Safaris · KwaZulu-Natal
        </p>
        <h1 className="font-display max-w-4xl text-5xl font-bold uppercase leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl">
          {title}
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-sand/95 sm:text-xl">
          {subtitle}
        </p>
        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <Button href={secondaryHref} variant="primary">
            {secondaryCta}
          </Button>
          <Button href={primaryHref} variant="outline" className="border-sand/40 text-off-white hover:bg-sand/10">
            {primaryCta}
          </Button>
        </div>
      </Container>
    </section>
  );
}
