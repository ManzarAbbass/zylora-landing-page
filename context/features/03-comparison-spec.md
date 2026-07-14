# Zylora Agency Comparison Section Spec

## Overview
This is section 3 of 10 for the Zylora agency landing page layout. Use this specification document to structure the UI component architecture, asymmetric two-column comparison layouts, and "problem vs. counter-claim" data mapping for OpenCode execution. 

## Component Requirements & Layout Architecture

### 1. Section Header Block
- **Section Surface**: Clean Solid White background (`#FFFFFF`).
- **Eyebrow Element**: Centered layout pill badge containing exactly the uppercase string: `"THE TRUTH ABOUT YOUR NUMBERS"`.
- **Primary Header (H2)**: Symmetrically centered text running across a strict 2-line break layout. Font family must use a premium editorial Serif. The specific tool/dashboard reference phrase must use markdown italicization markers to toggle brand purple configurations.
- **Muted Subtext**: A centered 2-line paragraph block set in a neutral muted gray tone directly beneath the heading.

### 2. Two-Column Antithesis Comparison Grid
A structured side-by-side comparative layout component containing two high-contrast master cards designed to establish a direct visual rebuttal framework:

#### Left Card: Negative/Competitor Matrix ("Them")
- **Surface Styling**: Light gray background wrapper (`#F3F4F6` or adjacent tint) to project a neutral/subdued aesthetic tone.
- **Card Header**: Bold typography reading exactly: `"THE TYPICAL AGENCY OR FREELANCER"`.
- **Content Row Nodes**: Exactly 4 stacked sub-cards containing:
  - **Icon Accent**: A muted purple circle containing a negative/crossed-out visual indicator asset.
  - **Text Typography**: Pitch-black bold title paired with a concise muted gray structural description row.

#### Right Card: Positive/Brand Matrix ("Us")
- **Surface Styling**: Solid vibrant branding purple backdrop fill (`#6366F1`) to aggressively draw primary layout weight.
- **Card Header**: Crisp bold white typography tracking the positive agency title: `"ZYLORA MARKETING"`.
- **Content Row Nodes**: Exactly 4 stacked sub-cards matching the left column's row footprint to establish clean symmetry:
  - **Icon Accent**: A vibrant yellow circle containing a positive validation/check indicator asset.
  - **Text Typography**: Solid pure white bold title paired with a high-contrast light purple or white structural description row.

### 3. Core Section Action Element
- **Alignment**: Centered block element anchored symmetrically below both master comparison cards.
- **Visual Style**: Solid purple button fill accented with white typography and an interactive inline right-facing arrow icon asset (`->`).

---

## Content Structure & Direct Antithesis Pairing Matrix

The grid must follow a direct, one-for-one structural rebuttal pattern mapping problem rows directly onto brand performance channels:

1. **Row 1 (Metrics)**:
   - Left Pain Point: Vanity metrics that do not scale business value.
   - Right Counter-Claim: Proprietary conversion data and deep analytics access.
2. **Row 2 (Framework Automation)**:
   - Left Pain Point: One-size-fits-all flows and templated automation sequences.
   - Right Counter-Claim: Purchase-timing AI tracking models optimized per user behavior.
3. **Row 3 (Asset Execution)**:
   - Left Pain Point: Poor, low-fidelity cookie-cutter design work.
   - Right Counter-Claim: Direct, frictionless client-to-designer collaboration channels.
4. **Row 4 (Copywriting Integrity)**:
   - Left Pain Point: Soulless, fully automated AI-generated copywriting structures.
   - Right Counter-Claim: Human-designed layouts built around bespoke, human-written copy strings.

- **Primary Section CTA Label Node**: `"Get a Free Email Audit"`

---

## Design Tokens & Icon Color Coding Rules

- **Color Palette Variables**:
  - Main Background Layer: Pure Solid White (`#FFFFFF`).
  - Competitor Card Background: Subtle Light Gray Fill (`#F3F4F6`).
  - Brand Card Background / CTA Button Fill: Branding Purple (`#6366F1`).
  - Positive Circle Icons / Brand Highlights: Vibrant Contrast Yellow (`#FACC15`).
- **Icon Functional Color Code**: 
  - Purple Circle Elements = Negative/Problem indicators (Left Column).
  - Yellow Circle Elements = Positive/Value-driver indicators (Right Column).

---

## Reference-Only Guardrails (Strict Context Verification Constraints)
- **Rhetorical Safeguards**: The "us vs. them" comparison model relies heavily on high-converting authoritative positioning. 
- **Production Guardrails**: When generating copy values for production, OpenCode must verify that all right-column value propositions map onto actual, verifiable brand capabilities. Do not ingest or carry over overclaimed or unprovable tech jargon into live production environments unless explicitly requested by project state changes.

---

## File References
- `@context/zyloraui/03-comparison.md`
- `@context/project-overview.md`
- `@context/zyloraui/01-hero.md`
- `@context/zyloraui/02-work-carousal.md`
- `@context/zyloraui/04-client-success-cards.md`
- `@context/zyloraui/05-video-testimonials.md`
- `@context/zyloraui/06-dashboard-feature.md`
- `@context/zyloraui/07-educational-videos.md`
- `@context/zyloraui/08-faq.md`
- `@context/zyloraui/09-booking-cta.md`
- `@context/zyloraui/10-footer.md`