# Zylora Agency Hero Section Spec

## Overview
This is section 1 of 10 for the Zylora agency landing page layout. Use this specification document to structure the UI component architecture, responsive grid constraints, and copy alignments for OpenCode execution. The visual details are tailored to represent a boutique email marketing agency ecosystem.

## Component Requirements & Layout Architecture

### 1. Navigation Bar Component (`<Nav />`)
- **Logo Block**: Left-aligned text or minimalist element reading exactly `"ZYLORA"`.
- **Navigation Links**: Center-aligned menu mapping exactly 6 navigation targets:
  - `About us`
  - `Testimonials`
  - `Our Work`
  - `Designs`
  - `Our AI System`
  - `FAQs`
- **Action Node**: Top-right aligned solid purple CTA button. Must include an inline right-facing arrow asset (`->`) that shifts horizontally on hover.

### 2. Main Hero Split-Grid Layout
A two-column grid distribution pattern on large screens (1200px+), collapsing into a single-column stacked layout on mobile viewports.

#### Left Column: Content Stack
- **Eyebrow Pill Badge**: A small, uppercase, left-aligned badge container with a light gray fill background. Text copy must read exactly: `"OVER 35+ EDUCATIONAL VIDEOS ON YOUTUBE"`.
- **Primary Header (H1)**: Explicitly configured for a 3-line structural break. Font family must use a premium editorial Serif. The word *"Email"* must use markdown italicization markers (`*Email*`) to toggle styling weights.
- **Subtext Block**: A clean 1–2 line descriptive paragraph block positioned strictly beneath the H1. The word `"guarantee"` must be wrapped in an accent marker to trigger specific brand styling layers.
- **Primary CTA Node**: A large solid purple call-to-action button anchored beneath the subtext block. Style properties must remain identical to the Navigation CTA button wrapper.

#### Right Column: Illustration Collage Matrix
- **Base Container**: An absolute/relative stacked environment displaying a fanned collage of tilted, rectangular image layout boundaries (simulating high-fidelity product previews and email templates).
- **Overlaid UI Status Chips**: Two functional badge layers pinned over the collage assets with absolute alignment coordinates:
  1. Title Node: `"Bespoke Designs — By real graphic designers"`
  2. Title Node: `"Real reporting — Based off brand data"`
- **Decorative System**: Explicit injection points for playful, hand-drawn vector arrow sketches (purple squiggles) wrapping around the card collage to draw user attention vectors.

---

## Content Structure & Hard Copy Variables

- **Headline Text Node**: `"Boutique *Email* Agency That Takes Your Growth Seriously"`
- **Subtext Paragraph Value**: A crisp, conversion-focused value proposition stating bespoke brand scaling frameworks wrapped around a high-trust performance `guarantee` mechanism.
- **CTA Label Value**: `"Get a Free Email Audit"`

---

## Design Tokens & Theme Matrix

- **Color Palette Variables**:
  - Background Layer: Clean Solid White (`#FFFFFF`)
  - Typography Main: Deep Onyx / Black (`#111111`)
  - Accent / Primary CTA Fill: Branding Purple (`#6366F1` or adjacent indigo-purple token)
  - Badge/Pill System: Light Gray Tints (`#F3F4F6`) with absolute dark typography overlays
- **Typography Matrix**:
  - Headings/Accents: Editorial Serif typeface (used for premium boutique framing)
  - Body/Navigation/Buttons: Clean, highly-readable geometric Sans-Serif typeface
- **Tone Profile**: Clean, high-end agency minimalism broken up by hand-drawn decorative accent squiggles to communicate a bespoke, playful design boutique feel.

---

## Reference-Only Guardrails (Strict Constraints)
- This is a dedicated marketing reference structure utilizing the brand layout footprint of **Zylora**. 
- **Data Integrity**: Do not ingest, fabricate, or carry over any external template metrics, mock figures, placeholder client logos, or unverified testimonials into this specific system module unless explicitly outlined inside this file.

---

## File References
- `@context/zyloraui/01-hero.md`
- `@context/project-overview.md`
- `@context/zyloraui/02-work-carousal.md`
- `@context/zyloraui/03-comparison.md`
- `@context/zyloraui/04-client-success-cards.md`
- `@context/zyloraui/05-video-testimonials.md`
- `@context/zyloraui/06-dashboard-feature.md`
- `@context/zyloraui/07-educational-videos.md`
- `@context/zyloraui/08-faq.md`
- `@context/zyloraui/09-booking-cta.md`
- `@context/zyloraui/10-footer.md`

