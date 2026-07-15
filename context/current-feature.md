# Current Feature: Video Testimonials Section (05)

## Status
In Progress

## Goals
- Build section with heading "Real Results. *Real Clients.*" (italicized phrase in brand purple)
- Embla carousel with 3 portrait (9:16) video thumbnail cards
- YouTube thumbnails fetched from `https://img.youtube.com/vi/VIDEO_ID/maxresdefault.jpg`
- Purple circular play button overlay on each card
- Click opens modal overlay with YouTube iframe (autoplay)
- Modal dismiss via X button or backdrop click
- Carousel dot indicators — active = elongated purple pill, inactive = circle
- GSAP ScrollTrigger staggered entrance animations
- GSAP hover micro-scale on cards
- GSAP modal fade + scale animation on open/close

## Notes
- Video IDs: `J0CEiuOfON0`, `XFumpG-w-vM`, `W9fQP4TqHfk`
- White background section (`#FFFFFF`)
- No text content beyond heading — video only
- Follow existing patterns from Section 02 (OurWork) for Embla carousel + dot navigation

## History
- **2026-07-14** — Hero Section (Section 01): implemented NavBar (ZYLORA logo, 6 nav links, purple CTA), hero split-grid with GSAP entrance animations, eyebrow badge with purple dot indicator, serif H1 headline, subtext with &quot;guarantee&quot; highlight, image collage with floating badge chips.
- **2026-07-15** — Work Carousel Section (Section 02): built full-bleed purple section with repeating typographic watermark, 5-card Embla carousel with center-focus depth effects (blur/scale/opacity), metric ribbon overlay, dot/amber-pill navigation, and CTA button; responsive breakpoints and small-device border-radius fix.
- **2026-07-15** — Comparison Section (Section 03): built two-column antithesis layout with white bg, pill badge (border-black + purple dot), serif H2 with italic purple &quot;Klaviyo Dashboard&quot;, left gray card (4 pain points with purple icons: Frame-4/5/6/7), right purple card (4 counter-claims with yellow icons: Frame/1/2/3), GSAP ScrollTrigger entrance animations, centered CTA button; responsive stacking on mobile.
- **2026-07-15** — Client Success Cards Section (Section 04): 3-card responsive grid with portrait photos overlapped by floating content panels; Card 1 solid `bg-brand-purple text-white`, Cards 2-3 `bg-white`; GSAP ScrollTrigger fade-up; `rounded-4xl` borders, `mix-blend-multiply` for transparent image backgrounds.
