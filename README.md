# Bryan Plumbing

Marketing site for Bryan Plumbing LLC — a veteran-owned Orlando plumbing shop
specializing in whole-home repipes, with its own drywall crew closing the walls.

- **Address** 3804 John Young Pkwy #2, Orlando, FL 32804
- **Phone** (407) 299-9006
- **Hours** Open daily, closes 12 AM

## Pages

| File | Contents |
| --- | --- |
| `index.html` | Hero, key numbers, service teaser, pull quote, rating summary |
| `services.html` | Repipes, repairs, drywall — plus the residential/commercial/industrial book |
| `process.html` | The four repipe stages, the finish, schedule questions |
| `reviews.html` | Google reviews verbatim, plus BBB and Birdeye |
| `about.html` | Who we are, the numbers, full FAQ |
| `contact.html` | Address, phone, hours, emergency steps, service area |

## Structure

Static HTML, no build step. Shared styling lives in `assets/site.css`;
photographs are real files under `assets/img/`.

Fonts (Cormorant Garamond + Lora) load from Google Fonts — the only external
request the site makes.

Design system: "Classical" — editorial serif on a warm ground, hairline rules,
color applied as stroke rather than fill.

## Reviews

Reviews are quoted verbatim from their published sources and attributed:

- **Google** — 3 of 79 shown (Caprice Walker, Landson Reid, Neil Downing),
  with the owner replies. `reviews.html` links out to the full Google listing.
- **BBB** — Karlita L., Judi M. Accredited since 2015, A+ rating.
- **Birdeye** — Rebecca M.

The remaining Google reviews are rendered client-side by Google Maps and could
not be scraped without an authenticated browser session. To add them, drop more
`<article class="review">` blocks into the Google section of `reviews.html` —
the markup is uniform.

## Before launch

- Photography is placeholder stock via Unsplash and Pexels. Swap in real job
  photos — replace the files in `assets/img/`, keeping the filenames.
- Confirm the service-area list on `contact.html` with the shop.
- Rating and review counts are current as of September 2026.
