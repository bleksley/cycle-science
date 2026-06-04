import Link from "next/link";
import { getSite } from "@/lib/content";
import { Container } from "@/components/ui/Container";
import { WhatsAppLink } from "@/components/layout/WhatsAppLink";

export function Footer() {
  const site = getSite();

  return (
    <footer className="mt-auto border-t border-border bg-earth-dark text-off-white">
      <Container className="py-12 lg:py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <p className="font-display text-2xl font-bold uppercase tracking-tight">
              {site.name}
            </p>
            <p className="mt-1 text-sm uppercase tracking-widest text-sand/80">
              {site.tagline}
            </p>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-sand/90">
              {site.description}
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sunset">
              Explore
            </p>
            <ul className="mt-4 space-y-2">
              {site.nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-sand/90 hover:text-off-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sunset">
              Contact
            </p>
            <ul className="mt-4 space-y-2 text-sm text-sand/90">
              <li>
                <a href={`mailto:${site.contact.email}`} className="hover:text-off-white">
                  {site.contact.email}
                </a>
              </li>
              <li>{site.contact.phone}</li>
              <li>
                <WhatsAppLink message="Hi Cycle Science, I'd like to enquire about a safari.">
                  WhatsApp us
                </WhatsAppLink>
              </li>
              <li>{site.contact.location}</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-sand/20 pt-8 text-xs text-sand/70 sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {new Date().getFullYear()} {site.name}. All rights reserved.</p>
          <Link href="/enquire" className="font-semibold uppercase tracking-wide text-sunset hover:text-off-white">
            {site.ctas.primary}
          </Link>
        </div>
      </Container>
    </footer>
  );
}
