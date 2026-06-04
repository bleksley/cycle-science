import { getSite } from "@/lib/content";
import { buildMetadata } from "@/lib/metadata";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PageHeader } from "@/components/layout/PageHeader";
import { EnquiryForm } from "@/components/forms/EnquiryForm";
import { WhatsAppLink } from "@/components/layout/WhatsAppLink";

export const metadata = buildMetadata({
  title: "Enquire / Book",
  description: "Enquire about Cycle Science mountain bike safari packages in KwaZulu-Natal.",
  path: "/enquire",
});

export default function EnquirePage() {
  const site = getSite();

  return (
    <>
      <PageHeader
        title="Enquire & book"
        subhead="Start your safari"
        image="/images/home/hero.svg"
        imageAlt="Book a Cycle Science safari"
      />

      <section className="py-16 lg:py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-5">
            <div className="lg:col-span-2">
              <SectionHeading
                title="Tell us about your trip"
                subtitle="We'll confirm availability, pricing, and the right destination — Zingela, Drakensberg, or Karkloof."
              />
              <p className="mt-6 text-muted">
                Prefer to chat?{" "}
                <WhatsAppLink message="Hi Cycle Science, I'd like to enquire about a safari.">
                  Message us on WhatsApp
                </WhatsAppLink>{" "}
                or email{" "}
                <a
                  href={`mailto:${site.contact.email}`}
                  className="font-semibold text-sunset hover:underline"
                >
                  {site.contact.email}
                </a>
                .
              </p>
            </div>
            <div className="lg:col-span-3">
              <EnquiryForm />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
