import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PageHeader } from "@/components/layout/PageHeader";
import { CTABanner } from "@/components/sections/CTABanner";
import { buildMetadata } from "@/lib/metadata";
import { getSite } from "@/lib/content";

export const metadata = buildMetadata({
  title: "About",
  description:
    "Cycle Science is a premium mountain bike safari operator in KwaZulu-Natal, serving international adventure travellers and local South African riders.",
  path: "/about",
});

export default function AboutPage() {
  const site = getSite();

  return (
    <>
      <PageHeader
        title="About Cycle Science"
        subhead="Premium MTB safaris in KwaZulu-Natal"
        image="/images/home/hero.svg"
        imageAlt="Cycle Science team and riders"
      />

      <section className="py-16 lg:py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <SectionHeading
                eyebrow="Our story"
                title="Adventure-led, destination-first"
              />
              <div className="mt-6 space-y-4 text-lg leading-relaxed text-muted">
                <p>
                  {site.name} positions guided mountain biking through premium
                  South African landscapes — not as a day on trails, but as a
                  full safari experience with accommodation, meals, and
                  immersion in each destination.
                </p>
                <p>
                  Based in KwaZulu-Natal, we launch with three distinct
                  experiences: Zingela&apos;s wild bushveld, the Drakensberg&apos;s
                  big-mountain icons, and Karkloof&apos;s forest flow — with room to
                  grow into more locations and package types.
                </p>
              </div>
            </div>

            <div>
              <SectionHeading eyebrow="Who we serve" title="Two audiences, one standard" />
              <div className="mt-6 space-y-6">
                <article className="rounded-sm border border-border bg-sand/50 p-6">
                  <h3 className="font-display text-lg font-bold uppercase text-charcoal">
                    International guests
                  </h3>
                  <p className="mt-2 text-muted leading-relaxed">
                    Adventure travellers seeking safari-style landscapes, guided
                    riding, and curated accommodation — a premium, memorable,
                    all-in-one MTB destination product in South Africa.
                  </p>
                </article>
                <article className="rounded-sm border border-border bg-sand/50 p-6">
                  <h3 className="font-display text-lg font-bold uppercase text-charcoal">
                    Local South African riders
                  </h3>
                  <p className="mt-2 text-muted leading-relaxed">
                    Mountain bikers looking for affordable bucket-list experiences
                    and weekend escapes. Our Local Rider Rates are designed to feel
                    exceptionally accessible compared to international pricing.
                  </p>
                </article>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <CTABanner
        title="Experience KZN on two wheels"
        primaryLabel={site.ctas.secondary}
        primaryHref="/experiences"
      />
    </>
  );
}
