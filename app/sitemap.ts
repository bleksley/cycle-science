import type { MetadataRoute } from "next";
import { getDestinationSlugs } from "@/lib/content";
import { baseUrl } from "@/lib/metadata";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/about",
    "/experiences",
    "/pricing",
    "/gallery",
    "/faq",
    "/enquire",
    "/contact",
  ];

  const destinationRoutes = getDestinationSlugs().map(
    (slug) => `/experiences/${slug}`,
  );

  const all = [...staticRoutes, ...destinationRoutes];

  return all.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : path.startsWith("/experiences/") ? 0.9 : 0.7,
  }));
}
