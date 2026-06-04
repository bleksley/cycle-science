import Image from "next/image";
import { notFound } from "next/navigation";
import {
  getDestination,
  getDestinationSlugs,
  getPackageById,
} from "@/lib/content";
import { buildMetadata } from "@/lib/metadata";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { PageHeader } from "@/components/layout/PageHeader";
import { ItineraryTimeline } from "@/components/sections/ItineraryTimeline";
import { InclusionsList } from "@/components/sections/InclusionsList";
import { DestinationPricingBlock } from "@/components/sections/DestinationPricingBlock";
import { GalleryGrid } from "@/components/sections/GalleryGrid";
import { EnquiryForm } from "@/components/forms/EnquiryForm";
import { CTABanner } from "@/components/sections/CTABanner";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return getDestinationSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const dest = getDestination(slug);
  if (!dest) return {};
  return buildMetadata({
    title: dest.name,
    description: dest.overview,
    path: `/experiences/${slug}`,
  });
}

export default async function DestinationPage({ params }: Props) {
  const { slug } = await params;
  const dest = getDestination(slug);
  if (!dest) notFound();

  const pkg = getPackageById(dest.packageId);

  return (
    <>
      <PageHeader
        title={dest.name}
        subhead={dest.subhead}
        image={dest.heroImage}
        imageAlt={dest.heroImageAlt}
      />

      <section className="py-16 lg:py-20">
        <Container>
          <div className="max-w-3xl">
            <Badge>{dest.positioning}</Badge>
            <p className="mt-6 text-xl leading-relaxed text-charcoal lg:text-2xl">
              {dest.overview}
            </p>
          </div>
        </Container>
      </section>

      <section className="border-t border-border bg-sand/30 py-16">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <SectionHeading title="What to expect" />
              <p className="mt-6 text-lg leading-relaxed text-muted">
                {dest.whatToExpect}
              </p>
            </div>
            <div>
              <SectionHeading title="Highlights" />
              <ul className="mt-6 space-y-3">
                {dest.highlights.map((h) => (
                  <li
                    key={h}
                    className="flex gap-3 text-muted before:text-sunset before:content-['→']"
                  >
                    {h}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-16 lg:py-20">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <SectionHeading eyebrow="Terrain" title="Trails & riding" />
              <p className="mt-6 text-lg leading-relaxed text-muted">{dest.trails}</p>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-sm lg:col-span-5">
              <Image
                src={dest.gallery[0]?.src ?? dest.heroImage}
                alt={dest.gallery[0]?.alt ?? dest.name}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
            </div>
          </div>
        </Container>
      </section>

      <section className="border-t border-border bg-off-white py-16">
        <Container>
          <SectionHeading eyebrow="Stay" title="Accommodation" />
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-muted">
            {dest.accommodation}
          </p>
        </Container>
      </section>

      <section className="py-16 lg:py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2">
            <SectionHeading eyebrow="Itinerary" title="Sample schedule" />
            <ItineraryTimeline items={dest.itinerary} />
          </div>
        </Container>
      </section>

      <section className="border-t border-border bg-sand/30 py-16">
        <Container>
          <SectionHeading title="Inclusions" className="mb-8" />
          <InclusionsList
            inclusions={dest.inclusions}
            exclusions={dest.exclusions}
          />
        </Container>
      </section>

      {pkg && (
        <section className="py-16">
          <Container>
            <SectionHeading eyebrow="Pricing" title="Rates for this safari" />
            <div className="mt-8">
              <DestinationPricingBlock pkg={pkg} />
            </div>
          </Container>
        </section>
      )}

      <section className="py-16 lg:py-20">
        <Container>
          <SectionHeading title="Gallery" className="mb-8" />
          <GalleryGrid
            items={dest.gallery.map((g) => ({ ...g, tag: dest.slug }))}
          />
        </Container>
      </section>

      <section className="border-t border-border bg-sand/40 py-16 lg:py-20" id="enquire">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2">
            <SectionHeading
              eyebrow="Book"
              title="Enquire about this safari"
              subtitle="Share your dates, group size, and rider type — we'll confirm availability and pricing."
            />
            <EnquiryForm defaultDestination={dest.slug} />
          </div>
        </Container>
      </section>

      <CTABanner
        title={`Ready for ${dest.name}?`}
        primaryLabel="Send enquiry"
        primaryHref="#enquire"
        showWhatsApp
      />
    </>
  );
}
