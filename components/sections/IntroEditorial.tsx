import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function IntroEditorial({
  eyebrow,
  title,
  paragraphs,
}: {
  eyebrow?: string;
  title: string;
  paragraphs: string[];
}) {
  return (
    <section className="py-16 lg:py-24">
      <Container>
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <SectionHeading eyebrow={eyebrow} title={title} />
          </div>
          <div className="space-y-6 text-lg leading-relaxed text-muted lg:col-span-7">
            {paragraphs.map((p) => (
              <p key={p.slice(0, 40)}>{p}</p>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
