import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { WhatsAppLink } from "@/components/layout/WhatsAppLink";

export function CTABanner({
  title,
  subtitle,
  primaryLabel,
  primaryHref = "/enquire",
  showWhatsApp = true,
}: {
  title: string;
  subtitle?: string;
  primaryLabel: string;
  primaryHref?: string;
  showWhatsApp?: boolean;
}) {
  return (
    <section className="bg-earth-dark py-16 text-off-white lg:py-20">
      <Container className="text-center">
        <h2 className="font-display text-3xl font-bold uppercase tracking-tight sm:text-4xl">
          {title}
        </h2>
        {subtitle && (
          <p className="mx-auto mt-4 max-w-2xl text-lg text-sand/90">{subtitle}</p>
        )}
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button href={primaryHref} variant="primary">
            {primaryLabel}
          </Button>
          {showWhatsApp && (
            <WhatsAppLink
              message="Hi Cycle Science, I'd like to enquire about a safari."
              className="text-sm font-semibold uppercase tracking-wide text-sand hover:text-off-white"
            >
              Or chat on WhatsApp
            </WhatsAppLink>
          )}
        </div>
      </Container>
    </section>
  );
}
