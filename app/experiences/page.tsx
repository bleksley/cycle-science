import { getAllDestinations, getSite } from "@/lib/content";
import { buildMetadata } from "@/lib/metadata";
import { PageHeader } from "@/components/layout/PageHeader";
import { DestinationGrid } from "@/components/sections/DestinationGrid";
import { CTABanner } from "@/components/sections/CTABanner";

export const metadata = buildMetadata({
  title: "Experiences",
  description:
    "Explore Cycle Science mountain bike safaris at Zingela, Drakensberg, and Karkloof in KwaZulu-Natal.",
  path: "/experiences",
});

export default function ExperiencesPage() {
  const site = getSite();
  const destinations = getAllDestinations();

  return (
    <>
      <PageHeader
        title="Safari experiences"
        subhead="Zingela · Drakensberg · Karkloof"
        image="/images/home/hero.svg"
        imageAlt="Cycle Science safari experiences"
      />

      <DestinationGrid
        eyebrow="Choose your landscape"
        title="Guided MTB safaris"
        subtitle="Each destination follows the same premium structure — hero riding, accommodation, meals, and clear local and international pricing."
        destinations={destinations}
      />

      <CTABanner
        title="Not sure which safari fits?"
        subtitle="Tell us your dates, fitness, and whether you're booking as a local or international guest."
        primaryLabel={site.ctas.primary}
      />
    </>
  );
}
