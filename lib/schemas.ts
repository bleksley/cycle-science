import { z } from "zod";

export const navItemSchema = z.object({
  label: z.string(),
  href: z.string(),
});

export const siteSchema = z.object({
  name: z.string(),
  tagline: z.string(),
  description: z.string(),
  contact: z.object({
    email: z.string(),
    phone: z.string(),
    whatsappNumber: z.string(),
    location: z.string(),
  }),
  nav: z.array(navItemSchema),
  ctas: z.object({
    primary: z.string(),
    secondary: z.string(),
  }),
  social: z
    .object({
      instagram: z.string().optional(),
      facebook: z.string().optional(),
      youtube: z.string().optional(),
    })
    .optional(),
  testimonials: z.array(
    z.object({
      quote: z.string(),
      author: z.string(),
      location: z.string(),
    }),
  ),
});

export const pricingTierSchema = z.object({
  label: z.string(),
  amount: z.string(),
  currency: z.string(),
  note: z.string().optional(),
});

export const packageSchema = z.object({
  id: z.string(),
  name: z.string(),
  destination: z.string(),
  duration: z.string(),
  difficulty: z.string(),
  localRate: pricingTierSchema,
  internationalRate: pricingTierSchema,
  inclusions: z.array(z.string()),
  optionalUpgrades: z.array(z.string()).optional(),
});

export const pricingSchema = z.object({
  intro: z.string(),
  packages: z.array(packageSchema),
  footnote: z.string(),
});

export const faqSchema = z.object({
  items: z.array(
    z.object({
      question: z.string(),
      answer: z.string(),
    }),
  ),
});

export const destinationSchema = z.object({
  slug: z.string(),
  name: z.string(),
  tagline: z.string(),
  subhead: z.string(),
  positioning: z.string(),
  role: z.string(),
  heroImage: z.string(),
  heroImageAlt: z.string(),
  overview: z.string(),
  whatToExpect: z.string(),
  trails: z.string(),
  accommodation: z.string(),
  itinerary: z.array(
    z.object({
      day: z.string(),
      title: z.string(),
      description: z.string(),
    }),
  ),
  inclusions: z.array(z.string()),
  exclusions: z.array(z.string()),
  packageId: z.string(),
  gallery: z.array(
    z.object({
      src: z.string(),
      alt: z.string(),
    }),
  ),
  highlights: z.array(z.string()),
});

export type Site = z.infer<typeof siteSchema>;
export type Pricing = z.infer<typeof pricingSchema>;
export type FAQ = z.infer<typeof faqSchema>;
export type Destination = z.infer<typeof destinationSchema>;
export type Package = z.infer<typeof packageSchema>;
