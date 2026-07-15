# Current Feature: Comparison Section (03)

## Status
In Progress

## Goals
- Build `ComparisonSection` component in `src/components/comparison/ComparisonSection.tsx`
- Add pill badge eyebrow: "THE TRUTH ABOUT YOUR NUMBERS"
- Add centered serif H2 heading with italic purple highlight on the tool/dashboard reference
- Add muted gray subtext paragraph below heading
- Build left card (light gray `#F3F4F6` bg): "THE TYPICAL AGENCY OR FREELANCER" with 4 pain-point rows — purple circle with crossed-out icon, bold title, gray description
- Build right card (solid purple `#6366F1` bg): "ZYLORA MARKETING" with 4 counter-claim rows — yellow circle with check icon, white bold title, light purple/white description
- Direct one-for-one antithesis pairing across all 4 rows:
  1. Vanity metrics → Proprietary conversion data & deep analytics access
  2. One-size-fits-all flows → Purchase-timing AI tracking models
  3. Poor cookie-cutter design → Direct client-to-designer collaboration
  4. AI-generated copy → Human-designed layouts with human-written copy
- Add centered CTA button: "Get a Free Email Audit →" (purple fill, white text, arrow)
- Implement GSAP scroll-triggered entrance animations
- Ensure responsive — cards stack vertically on mobile
- Register component in `src/app/page.tsx`

## Notes
- Color tokens: white `#FFFFFF`, light gray `#F3F4F6`, brand purple `#6366F1`, yellow `#FACC15`
- Purple circle icons = negative (left column), Yellow circle icons = positive (right column)
- GSAP animations with `ScrollTrigger` for section entrance (must use `'use client'`)
- Follow existing patterns from `HeroSection` and `OurWorkSection`
- Assets: check `public/assets/` for any relevant icons; otherwise use inline SVG icons

## History

- **2026-07-14** — Hero Section (Section 01): implemented NavBar (ZYLORA logo, 6 nav links, purple CTA), hero split-grid with GSAP entrance animations, eyebrow badge with purple dot indicator, serif H1 headline, subtext with "guarantee" highlight, image collage with floating badge chips.
- **2026-07-15** — Work Carousel Section (Section 02): built full-bleed purple section with repeating typographic watermark, 5-card Embla carousel with center-focus depth effects (blur/scale/opacity), metric ribbon overlay, dot/amber-pill navigation, and CTA button; responsive breakpoints and small-device border-radius fix.
