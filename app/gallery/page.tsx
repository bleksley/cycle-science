import { getAllDestinations, getSite } from "@/lib/content";
import { buildMetadata } from "@/lib/metadata";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PageHeader } from "@/components/layout/PageHeader";
import { GalleryGrid } from "@/components/sections/GalleryGrid";
import { CTABanner } from "@/components/sections/CTABanner";

export const metadata = buildMetadata({
  title: "Gallery",
  description:
    "Photo and video gallery from Cycle Science mountain bike safaris across KZN.",
  path: "/gallery",
});

export default function GalleryPage() {
  const site = getSite();
  const destinations = getAllDestinations();

  const globalImages = Array.from({ length: 8 }, (_, i) => ({
    src: `/images/gallery/global-${i + 1}.svg`,
    alt: `Cycle Science gallery ${i + 1}`,
    tag: "all" as const,
  }));

  const destinationImages = destinations.flatMap((d) =>
    d.gallery.map((g) => ({
      src: g.src,
      alt: g.alt,
      tag: d.slug,
    })),
  );

  const items = [
    ...globalImages.map((g) => ({ ...g, tag: "all" })),
    ...destinationImages,
  ];

  const filters = [
    { id: "all", label: "All" },
    ...destinations.map((d) => ({ id: d.slug, label: d.name })),
  ];

  return (
    <>
      <PageHeader
        title="Gallery"
        subhead="Trails, riders, accommodation & landscapes"
        image="/images/gallery/global-1.svg"
        imageAlt="Cycle Science photo gallery"
      />

      <section className="py-16 lg:py-24">
        <Container>
          <SectionHeading
            eyebrow="Media"
            title="Ride the story"
            subtitle="Strong landscape photography, rider action, accommodation, and safari atmosphere — replace placeholders with your assets when ready."
            className="mb-10"
          />
          <GalleryGrid items={items} filters={filters} />
        </Container>
      </section>

      <CTABanner
        title="Picture yourself here"
        primaryLabel={site.ctas.primary}
      />
    </>
  );
}
