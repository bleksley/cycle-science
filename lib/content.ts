import fs from "fs";
import path from "path";
import {
  destinationSchema,
  faqSchema,
  pricingSchema,
  siteSchema,
  type Destination,
  type FAQ,
  type Package,
  type Pricing,
  type Site,
} from "./schemas";

const contentDir = path.join(process.cwd(), "content");

function readJson<T>(filePath: string, schema: { parse: (data: unknown) => T }): T {
  const raw = fs.readFileSync(filePath, "utf-8");
  return schema.parse(JSON.parse(raw));
}

export function getSite(): Site {
  return readJson(path.join(contentDir, "site.json"), siteSchema);
}

export function getPricing(): Pricing {
  return readJson(path.join(contentDir, "pricing.json"), pricingSchema);
}

export function getFAQ(): FAQ {
  return readJson(path.join(contentDir, "faq.json"), faqSchema);
}

export function getDestinationSlugs(): string[] {
  const dir = path.join(contentDir, "destinations");
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".json"))
    .map((f) => f.replace(".json", ""));
}

export function getDestination(slug: string): Destination | null {
  const filePath = path.join(contentDir, "destinations", `${slug}.json`);
  if (!fs.existsSync(filePath)) return null;
  return readJson(filePath, destinationSchema);
}

export function getAllDestinations(): Destination[] {
  return getDestinationSlugs()
    .map((slug) => getDestination(slug))
    .filter((d): d is Destination => d !== null);
}

export function getPackageById(id: string): Package | undefined {
  return getPricing().packages.find((p) => p.id === id);
}

export function getWhatsAppUrl(number: string, message?: string): string {
  const digits = number.replace(/\D/g, "");
  const base = `https://wa.me/${digits}`;
  if (!message) return base;
  return `${base}?text=${encodeURIComponent(message)}`;
}
