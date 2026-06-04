import { getFAQ, getSite } from "@/lib/content";
import { buildMetadata } from "@/lib/metadata";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PageHeader } from "@/components/layout/PageHeader";
import { FAQAccordion } from "@/components/sections/FAQAccordion";
import { CTABanner } from "@/components/sections/CTABanner";

export const metadata = buildMetadata({
  title: "FAQ",
  description: "Frequently asked questions about Cycle Science mountain bike safaris.",
  path: "/faq",
});

export default function FAQPage() {
  const faq = getFAQ();
  const site = getSite();

  return (
    <>
      <PageHeader
        title="FAQ"
        subhead="Your questions answered"
        image="/images/home/hero.svg"
        imageAlt="Cycle Science FAQ"
      />

      <section className="py-16 lg:py-24">
        <Container>
          <SectionHeading
            title="Before you book"
            subtitle="Local and international rates, fitness, inclusions, and how to enquire."
            className="mb-10"
          />
          <FAQAccordion items={faq.items} />
        </Container>
      </section>

      <CTABanner
        title="Still have questions?"
        primaryLabel={site.ctas.primary}
      />
    </>
  );
}
