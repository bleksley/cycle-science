import {
  getAllDestinations,
  getPricing,
  getSite,
} from "@/lib/content";
import { HeroCinematic } from "@/components/sections/HeroCinematic";
import { IntroEditorial } from "@/components/sections/IntroEditorial";
import { DestinationGrid } from "@/components/sections/DestinationGrid";
import { PricingSnapshot } from "@/components/sections/PricingSnapshot";
import { MediaStrip } from "@/components/sections/MediaStrip";
import { Testimonials } from "@/components/sections/Testimonials";
import { CTABanner } from "@/components/sections/CTABanner";

export default function HomePage() {
  const site = getSite();
  const destinations = getAllDestinations();
  const pricing = getPricing();

  const stripImages = destinations.flatMap((d) =>
    d.gallery.slice(0, 2).map((g) => ({ src: g.src, alt: g.alt })),
  );

  return (
    <>
      <HeroCinematic
        title="Ride Into the Wild"
        subtitle="Mountain bike safaris across KwaZulu-Natal — epic trails, wild landscapes, accommodation, meals, and guided experiences in one unforgettable package."
        image="/images/home/hero.jpeg"
        imageAlt="Scenic safari overlook across a lush KwaZulu-Natal valley"
        primaryCta={site.ctas.primary}
        primaryHref="/enquire"
        secondaryCta={site.ctas.secondary}
        secondaryHref="/experiences"
      />

      <IntroEditorial
        eyebrow="Cycle Science"
        title="More than a bike trip"
        paragraphs={[
          "Cycle Science — Bicycle Tours & Safaris — is a premium mountain bike safari operator in KwaZulu-Natal. We combine guided riding, safari atmosphere, curated accommodation, and destination immersion into one clear offer.",
          "For international guests, our safaris are a distinctive South African adventure. For local riders, our Local Rider Rates make bucket-list trails exceptionally accessible — both rates are always visible so you know the value that applies to you.",
        ]}
      />

      <DestinationGrid
        eyebrow="Launch destinations"
        title="Three worlds to ride"
        subtitle="Zingela, Drakensberg, and Karkloof — each with its own landscape, pace, and story. More destinations coming."
        destinations={destinations}
      />

      <PricingSnapshot
        packages={pricing.packages}
        title="Local & international rates"
        subtitle="Premium destination experience for international guests. Outstanding value for South African riders."
      />

      <MediaStrip
        title="See the safari"
        subtitle="Strong photography and video sell the experience — trails, riders, accommodation, and wild KZN landscapes."
        images={stripImages.length > 0 ? stripImages : [{ src: "/images/home/hero.svg", alt: "Cycle Science" }]}
      />

      <Testimonials items={site.testimonials} />

      <CTABanner
        title="Ready to ride?"
        subtitle="View safari experiences or enquire now — we'll confirm dates, pricing, and the right destination for you."
        primaryLabel={site.ctas.primary}
      />
    </>
  );
}
