# Current Feature

## Status
Complete

## Goals
- [x] Section header with centered layout, eyebrow badge "CLIENT SUCCESS STORIES", H2 with italic *Help* and *Revenue*, subtext
- [x] 3-column responsive card grid (desktop → tablet → mobile)
- [x] 3 case study cards with portrait photo, category tag, brand name, narrative blurb
- [x] Card 1 featured with distinct themed styling, Cards 2 & 3 with gray/white backgrounds
- [x] GSAP ScrollTrigger entrance animations
- [x] Image overlap with content panel floating over image bottom
- [x] Card 1 solid brand-purple content panel with white text for highlight
- [x] `rounded-4xl` borders, `mix-blend-multiply` for image transparency
- [x] Data cleanliness: no social icons, no fabricated metrics, no real logos

## Notes
- Images use `mix-blend-multiply` to handle white studio backgrounds
- Content panels use `rounded-xl shadow-sm` floating over image via `-mt-16`
- Card 1 content: `bg-brand-purple text-white` (solid dark); Cards 2-3: `bg-white`
- Square aspect ratio (`aspect-[1/1]`) chosen over spec's `aspect-[3/4]` for compact card height

## History

- **2026-07-14** — Hero Section (Section 01): implemented NavBar (ZYLORA logo, 6 nav links, purple CTA), hero split-grid with GSAP entrance animations, eyebrow badge with purple dot indicator, serif H1 headline, subtext with "guarantee" highlight, image collage with floating badge chips.
- **2026-07-15** — Work Carousel Section (Section 02): built full-bleed purple section with repeating typographic watermark, 5-card Embla carousel with center-focus depth effects (blur/scale/opacity), metric ribbon overlay, dot/amber-pill navigation, and CTA button; responsive breakpoints and small-device border-radius fix.
- **2026-07-15** — Comparison Section (Section 03): built two-column antithesis layout with white bg, pill badge (border-black + purple dot), serif H2 with italic purple "Klaviyo Dashboard", left gray card (4 pain points with purple icons: Frame-4/5/6/7), right purple card (4 counter-claims with yellow icons: Frame/1/2/3), GSAP ScrollTrigger entrance animations, centered CTA button; responsive stacking on mobile.
- **2026-07-15** — Client Success Cards Section (Section 04): 3-card responsive grid with portrait photos overlapped by floating content panels; Card 1 solid `bg-brand-purple text-white`, Cards 2-3 `bg-white`; GSAP ScrollTrigger fade-up; `rounded-4xl` borders, `mix-blend-multiply` for transparent image backgrounds.
