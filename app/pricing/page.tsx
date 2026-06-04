import { getPricing, getSite } from "@/lib/content";
import { buildMetadata } from "@/lib/metadata";
import { PageHeader } from "@/components/layout/PageHeader";
import { PricingTableSection } from "@/components/sections/PricingTable";
import { CTABanner } from "@/components/sections/CTABanner";

export const metadata = buildMetadata({
  title: "Pricing",
  description:
    "Local Rider Rates in ZAR and International Guest Rates for Cycle Science MTB safari packages.",
  path: "/pricing",
});

export default function PricingPage() {
  const pricing = getPricing();
  const site = getSite();

  return (
    <>
      <PageHeader
        title="Pricing"
        subhead="Local & international rates — always visible"
        image="/images/home/hero.svg"
        imageAlt="Cycle Science safari pricing"
      />

      <PricingTableSection
        intro={pricing.intro}
        packages={pricing.packages}
        footnote={pricing.footnote}
      />

      <CTABanner
        title="Get a confirmed quote"
        subtitle="Rates shown are indicative until we confirm your dates and package."
        primaryLabel={site.ctas.primary}
      />
    </>
  );
}
