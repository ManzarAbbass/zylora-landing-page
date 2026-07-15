# Current Feature: Work Carousel Section

## Status
Complete

## Goals
- Build full-bleed responsive section with purple backdrop and faint repeating typographic watermark
- Add centered header with serif heading "Our Work Speaks *For Itself*" (*For Itself* in yellow accent)
- Implement 5-card horizontal carousel with depth effects (outer cards scaled, blurred, opacity-reduced; center card full-scale, sharp, with phone frame)
- Add diagonal ribbon/tag overlay on center card for performance metric callouts
- Build carousel navigation indicators (dots for inactive, elongated yellow pill for active)
- Add high-contrast yellow CTA button below carousel with black text and arrow

## Notes
- Spec file: `context/features/02-work-carousel-spec.md`
- Data integrity guardrails: no fabricated metrics or placeholder data in production
- Color tokens: Purple `#6366F1`, Yellow `#FACC15`/`#EAB308`, Black `#111111`, White `#FFFFFF`
- Typography: Editorial serif for headings, geometric sans-serif for UI/CTA

## History

- **2026-07-14** — Hero Section (Section 01): implemented NavBar (ZYLORA logo, 6 nav links, purple CTA), hero split-grid with GSAP entrance animations, eyebrow badge with purple dot indicator, serif H1 headline, subtext with "guarantee" highlight, image collage with floating badge chips.
- **2026-07-15** — Work Carousel Section (Section 02): built full-bleed purple section with repeating typographic watermark, 5-card Embla carousel with center-focus depth effects (blur/scale/opacity), metric ribbon overlay, dot/amber-pill navigation, and CTA button; responsive breakpoints and small-device border-radius fix.

