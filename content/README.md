# Content assets

Update pricing, contact details, and copy by editing JSON files in this folder — no code changes required for most updates.

## Contact (`site.json`)

- `contact.email`, `contact.phone`, `contact.whatsappNumber` (digits only, country code, no +)
- Social URLs when available

## Pricing (`pricing.json`)

- Set `amount` on each package's `localRate` and `internationalRate`
- Add new packages; link destinations via `packageId` in `destinations/*.json`

## Images

Place files under `public/images/` and update paths in JSON:

| Use | Suggested ratio | Path pattern |
|-----|-----------------|--------------|
| Destination hero | 16:9, min 1920×1080 | `/images/destinations/{slug}/hero.jpg` |
| Gallery | 4:3 or 3:2 | `/images/destinations/{slug}/gallery-N.jpg` |
| Global gallery | mixed | `/images/gallery/` |

Replace `.svg` placeholders when photo/video assets are ready.
