import type { Site } from "@/lib/schemas";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Testimonials({
  items,
}: {
  items: Site["testimonials"];
}) {
  return (
    <section className="bg-sand py-16 lg:py-24">
      <Container>
        <SectionHeading
          eyebrow="Rider stories"
          title="Trusted by adventurers"
          subtitle="Premium enough for international guests. Exceptional value for local South African riders."
          className="mb-12 text-center [&_p]:mx-auto"
          align="center"
        />
        <div className="grid gap-8 md:grid-cols-3">
          {items.map((t) => (
            <blockquote
              key={t.author}
              className="flex flex-col rounded-sm border border-border bg-off-white p-6"
            >
              <p className="flex-1 text-base leading-relaxed text-charcoal">
                &ldquo;{t.quote}&rdquo;
              </p>
              <footer className="mt-6 border-t border-border pt-4">
                <cite className="not-italic font-semibold text-earth-dark">
                  {t.author}
                </cite>
                <p className="text-sm text-muted">{t.location}</p>
              </footer>
            </blockquote>
          ))}
        </div>
      </Container>
    </section>
  );
}
