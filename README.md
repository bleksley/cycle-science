# Cycle Science — Bicycle Tours & Safaris

Premium mountain bike safari website for Cycle Science (KwaZulu-Natal). Built with Next.js App Router and Tailwind CSS.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Content

Edit JSON in [`content/`](content/) — see [`content/README.md`](content/README.md) for image paths and pricing fields.

## Enquiries

Copy [`.env.example`](.env.example) to `.env.local` and set `RESEND_API_KEY` + `ENQUIRY_TO_EMAIL` to send enquiry emails. Without Resend, submissions are logged server-side and the form still succeeds.

## Scripts

- `npm run dev` — development server
- `npm run build` — production build
- `node scripts/generate-placeholders.mjs` — regenerate SVG placeholders

## Sitemap (brief)

Home · About · Experiences (Zingela, Drakensberg, Karkloof) · Pricing · Gallery · FAQ · Enquire · Contact

## Before launch
- Set real values in content/site.json (WhatsApp number, phone) and content/pricing.json (amounts).
- Copy .env.example → .env.local and add RESEND_API_KEY + ENQUIRY_TO_EMAIL for live enquiry emails.
- Replace placeholder images per content/README.md.
