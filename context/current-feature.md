# Current Feature: FAQ Section (Section 08)

## Status
Complete

## Goals
- Build full-bleed purple backdrop section with repeating typographic wordmark pattern
- Add centered serif heading with yellow italic *Questions* accent
- Create 5 vertically stacked accordion rows in white rounded-pill containers
- Implement GSAP toggle animations for expand/collapse and plus-to-symbol transition
- All 5 rows start collapsed; pointer event toggles open/close
- Use dark obsidian (#111111) question text and white row backgrounds
- Resolve buyer objections in sequential order: freelancer concern → credibility proof → email provider dependency → client effort → system suitability

## Notes
- **Design Tokens**: Section bg: `#6366F1` (brand purple), Heading: `#FFFFFF` white, Accent: `#FACC15` yellow, Row bg: `#FFFFFF` white, Question text: `#111111`
- **Typography**: Headings in editorial serif with italic support; accordion triggers/body in geometric sans-serif
- **5 Questions**: "Will I be handed over to freelancers?", "How do I know you can do what you say you can?", "Do I need an email provider?", "What do I need to do?", "Will email marketing work for me?"
- **Answers require**: factual, verified operational data (no template dummy text)
- Accordion row shape must match the pill/rounded-rect design signatures used across hero, thumbnails, etc.

## History
- **2026-07-14** — Hero Section (Section 01): implemented NavBar (ZYLORA logo, 6 nav links, purple CTA), hero split-grid with GSAP entrance animations, eyebrow badge with purple dot indicator, serif H1 headline, subtext with &quot;guarantee&quot; highlight, image collage with floating badge chips.
- **2026-07-15** — Work Carousel Section (Section 02): built full-bleed purple section with repeating typographic watermark, 5-card Embla carousel with center-focus depth effects (blur/scale/opacity), metric ribbon overlay, dot/amber-pill navigation, and CTA button; responsive breakpoints and small-device border-radius fix.
- **2026-07-15** — Comparison Section (Section 03): built two-column antithesis layout with white bg, pill badge (border-black + purple dot), serif H2 with italic purple &quot;Klaviyo Dashboard&quot;, left gray card (4 pain points with purple icons: Frame-4/5/6/7), right purple card (4 counter-claims with yellow icons: Frame/1/2/3), GSAP ScrollTrigger entrance animations, centered CTA button; responsive stacking on mobile.
- **2026-07-15** — Client Success Cards Section (Section 04): 3-card responsive grid with portrait photos overlapped by floating content panels; Card 1 solid `bg-brand-purple text-white`, Cards 2-3 `bg-white`; GSAP ScrollTrigger fade-up; `rounded-4xl` borders, `mix-blend-multiply` for transparent image backgrounds.
- **2026-07-16** — Video Testimonials Section (Section 05): built Embla carousel with 6 portrait (3:4) video thumbnail cards, YouTube thumbnails (6 verified IDs), purple-bordered play button with indigo triangle icon, modal overlay with YouTube iframe (autoplay, backdrop &amp; X dismiss), GSAP ScrollTrigger stagger + hover + modal animations, carousel dot navigation, responsive breakpoints.
- **2026-07-16** — Dashboard Section (Section 06): dark (#111111) credibility section with BG.png wordmark background, pill badge, 3-line serif heading with amber-italic &quot;Built&quot;/&quot;Software&quot;, body paragraph naming Klaviyo limitation, amber CTA button aligned to heading bottom-right, fixed gray (#1F2937) card with rounded-[2rem] border, 4-slide Embla carousel (sub-heading + paragraph + dashboard screenshot per slide) with responsive peek basis ([85%] mobile / [65%] tablet / full desktop), elongated amber dot pagination, GSAP ScrollTrigger entrance animations.
- **2026-07-17** — Educational Videos Section (Section 07): white bg section with pill badge (&quot;EMAIL MARKETING INSIGHTS&quot;), serif H2 with italic purple &quot;Educational&quot;, subtext, top-right purple CTA button, 6-card YouTube-style thumbnail grid (3-col desktop / Embla carousel mobile/tablet) with gradient thumbnail backgrounds, bold clickbait headline overlays, expandable detail panel with accordion behavior (GSAP animated height/opacity), &quot;LIVE&quot; badge, shared promo banner, channel attribution, GSAP ScrollTrigger + hover animations, carousel dot pagination.
