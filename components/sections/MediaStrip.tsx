import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function MediaStrip({
  images,
  title,
  subtitle,
}: {
  images: { src: string; alt: string }[];
  title: string;
  subtitle?: string;
}) {
  return (
    <section className="overflow-hidden bg-charcoal py-16 text-off-white lg:py-20">
      <Container>
        <SectionHeading
          eyebrow="The experience"
          title={title}
          subtitle={subtitle}
          className="mb-10 [&_h2]:text-off-white [&_p]:text-sand/90"
        />
      </Container>
      <div className="flex gap-4 overflow-x-auto px-4 pb-2 sm:px-6 lg:px-8">
        {images.map((img) => (
          <div
            key={img.src}
            className="relative h-56 w-72 shrink-0 overflow-hidden rounded-sm sm:h-64 sm:w-96"
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              className="object-cover"
              sizes="400px"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
