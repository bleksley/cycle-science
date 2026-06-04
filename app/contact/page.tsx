import { getSite, getWhatsAppUrl } from "@/lib/content";
import { buildMetadata } from "@/lib/metadata";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PageHeader } from "@/components/layout/PageHeader";
import { Button } from "@/components/ui/Button";
import { CTABanner } from "@/components/sections/CTABanner";

export const metadata = buildMetadata({
  title: "Contact",
  description: "Contact Cycle Science for mountain bike safari enquiries in KwaZulu-Natal.",
  path: "/contact",
});

export default function ContactPage() {
  const site = getSite();
  const whatsappUrl = getWhatsAppUrl(
    site.contact.whatsappNumber,
    "Hi Cycle Science, I'd like to get in touch.",
  );

  return (
    <>
      <PageHeader
        title="Contact"
        subhead="We're here to help plan your safari"
        image="/images/home/hero.svg"
        imageAlt="Contact Cycle Science"
      />

      <section className="py-16 lg:py-24">
        <Container>
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
            <article className="rounded-sm border border-border bg-off-white p-8">
              <SectionHeading eyebrow="Email" title="Enquiries" />
              <a
                href={`mailto:${site.contact.email}`}
                className="mt-4 block text-lg font-semibold text-sunset hover:underline"
              >
                {site.contact.email}
              </a>
            </article>

            <article className="rounded-sm border border-border bg-off-white p-8">
              <SectionHeading eyebrow="Phone" title="Call" />
              <p className="mt-4 text-lg text-charcoal">{site.contact.phone}</p>
            </article>

            <article className="rounded-sm border border-border bg-off-white p-8 md:col-span-2 lg:col-span-1">
              <SectionHeading eyebrow="Chat" title="WhatsApp" />
              <p className="mt-4 text-muted">
                Fastest way to ask about dates, pricing, and destinations.
              </p>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block font-semibold uppercase tracking-wide text-sunset hover:underline"
              >
                Open WhatsApp →
              </a>
            </article>
          </div>

          <div className="mt-12 rounded-sm border border-border bg-sand/50 p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sunset">
              Location
            </p>
            <p className="font-display mt-2 text-2xl font-bold uppercase text-charcoal">
              {site.contact.location}
            </p>
            <p className="mt-4 text-muted">
              Guided mountain bike safaris across KwaZulu-Natal — with launch
              experiences at Zingela, Drakensberg, and Karkloof.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button href="/enquire" variant="primary">
                {site.ctas.primary}
              </Button>
              <Button href="/experiences" variant="outline">
                {site.ctas.secondary}
              </Button>
            </div>
          </div>
        </Container>
      </section>

      <CTABanner title="Plan your safari" primaryLabel={site.ctas.primary} />
    </>
  );
}
