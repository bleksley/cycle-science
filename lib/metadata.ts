import type { Metadata } from "next";
import { getSite } from "./content";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://cyclescience.co.za";

export function buildMetadata({
  title,
  description,
  path = "",
}: {
  title?: string;
  description?: string;
  path?: string;
}): Metadata {
  const site = getSite();
  const fullTitle = title ? `${title} | ${site.name}` : `${site.name} — ${site.tagline}`;
  const desc = description ?? site.description;

  return {
    title: fullTitle,
    description: desc,
    openGraph: {
      title: fullTitle,
      description: desc,
      url: `${baseUrl}${path}`,
      siteName: site.name,
      locale: "en_ZA",
      type: "website",
    },
  };
}

export { baseUrl };
