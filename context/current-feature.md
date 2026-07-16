# Current Feature: Dashboard Section (Section 06)

## Status
In Progress

## Goals
- [ ] Dark (#111111) background section with faint repeating typographic wordmark pattern
- [ ] Top-left eyebrow pill badge: "THE TRUTH ABOUT YOUR NUMBERS" with amber dot
- [ ] Symmetrical split layout header: left column (serif H2 across 3-line break with "Built" and "Software" in amber italic + body paragraph) + right column (amber CTA button)
- [ ] Body paragraph naming Klaviyo's limitation and introducing Zylora's proprietary infrastructure
- [ ] Nested gray (#1F2937) card container below header — fixed outer card, does not slide
- [ ] Sub-heading inside card: "The Full Picture, One Screen"
- [ ] Short context paragraph introducing dashboard functionality
- [ ] Embla carousel inside card — only sub-heading, paragraph, and dashboard image change per slide (4 slides)
- [ ] High-fidelity dashboard screenshot per slide showing sidebar nav, metric tiles, dollar figures, campaign/flow split, delivery rates, ROI deltas
- [ ] Elongated amber dot pagination below screenshot container
- [ ] GSAP ScrollTrigger entrance animations with proper cleanup
- [ ] Registered in page.tsx after Video Testimonials section

## Notes
- Color palette: Section bg #111111, Card bg #1F2937, Typography #FFFFFF, Accent #FACC15
- Typography: Editorial Serif for headers, Geometric Sans-Serif for UI/body/data
- Argument structure: name Klaviyo → describe limitation → introduce Zylora proprietary tool → show dashboard proof
- 4 dashboard screenshots in public/assets/dashboard/ (4 JPGs + BG.png for background pattern)
- CTA button matches Section 3 yellow button style for visual rhythm
- Dashboard data must look realistic: fractional numbers, status indicators, date range selectors
- Reference: @context/zylora_ui/06-dashboard-feature.md

## History
- **2026-07-14** — Hero Section (Section 01): implemented NavBar (ZYLORA logo, 6 nav links, purple CTA), hero split-grid with GSAP entrance animations, eyebrow badge with purple dot indicator, serif H1 headline, subtext with &quot;guarantee&quot; highlight, image collage with floating badge chips.
- **2026-07-15** — Work Carousel Section (Section 02): built full-bleed purple section with repeating typographic watermark, 5-card Embla carousel with center-focus depth effects (blur/scale/opacity), metric ribbon overlay, dot/amber-pill navigation, and CTA button; responsive breakpoints and small-device border-radius fix.
- **2026-07-15** — Comparison Section (Section 03): built two-column antithesis layout with white bg, pill badge (border-black + purple dot), serif H2 with italic purple &quot;Klaviyo Dashboard&quot;, left gray card (4 pain points with purple icons: Frame-4/5/6/7), right purple card (4 counter-claims with yellow icons: Frame/1/2/3), GSAP ScrollTrigger entrance animations, centered CTA button; responsive stacking on mobile.
- **2026-07-15** — Client Success Cards Section (Section 04): 3-card responsive grid with portrait photos overlapped by floating content panels; Card 1 solid `bg-brand-purple text-white`, Cards 2-3 `bg-white`; GSAP ScrollTrigger fade-up; `rounded-4xl` borders, `mix-blend-multiply` for transparent image backgrounds.
- **2026-07-16** — Video Testimonials Section (Section 05): built Embla carousel with 6 portrait (3:4) video thumbnail cards, YouTube thumbnails (6 verified IDs), purple-bordered play button with indigo triangle icon, modal overlay with YouTube iframe (autoplay, backdrop &amp; X dismiss), GSAP ScrollTrigger stagger + hover + modal animations, carousel dot navigation, responsive breakpoints.
