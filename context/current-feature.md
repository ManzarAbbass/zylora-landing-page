# Current Feature

## Feature

Hero Section (Section 01)

## Status

In Progress

## Goals

- Build responsive NavBar with ZYLORA logo, 6 nav links (About us, Testimonials, Our Work, Designs, Our AI System, FAQs), and purple CTA button with hover arrow animation
- Build hero split-grid: left column with eyebrow badge, serif H1 headline ("Boutique *Email* Agency..."), subtext with "guarantee" highlight, and CTA button
- Build right column: tilted image collage stack using Hero Image.png + Hero Background.png, floating UI status chips, and purple squiggle decorative arrows
- Wire GSAP entrance animations for all hero elements
- Mobile-first responsive layout (grid collapses to single column on mobile, hamburger nav)

## Notes

- Next.js 16: Image `priority` deprecated → use `preload` prop. Async request APIs required, but static page so no params/searchParams needed.
- Tailwind v4: CSS-first config via `@theme` in globals.css. No tailwind.config.ts needed.
- No tailwind.config.ts exists; brand colors/fonts defined via `@theme` block.
- GSAP ^3.15.0 already installed. Registered in HeroSection via `gsap.registerPlugin(ScrollTrigger)`. Entrance animations: fade-up stagger for content, card slide + rotation for collage, scale bounce for badges.
- Assets in `public/assets/hero/`: Hero Background.png (likely decorative bg element for collage), Hero Image.png (main email mockup card).
- NavBar uses `'use client'` for hover state/animations. HeroSection uses `'use client'` for GSAP.
- Font choice: editorial serif for headings (Playfair Display), clean sans-serif for body/nav (Inter or Plus Jakarta Sans) — via Google Fonts.
- Load fonts via next/font in layout.tsx for performance.

## History

