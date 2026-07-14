# Zylora Agency Final CTA Booking Section Spec

## Overview
This is the final conversion module (Section 9 of 5) for the Zylora agency landing page layout. Use this specification document to structure the UI component architecture, inline third-party widget embeds, and responsive dual-column form factors for OpenCode execution. This section serves as the ultimate transaction point on the page.

## Component Requirements & Layout Architecture

### 1. Section Container
- **Section Surface**: Clean Solid White background (`#FFFFFF`).
- **Responsive Layout**: A balanced two-column split grid on desktop viewports, collapsing symmetrically into a single-column stacked format on mobile devices.

### 2. Left Column: Persuasion & Scarcity Stack
- **Urgency Eyebrow Element**: A prominent top-aligned layout pill badge featuring high-visibility urgency framing. Text must read exactly: `"ONLY 5 SPOTS LEFT THIS MONTH FOR NEW PARTNERS"`.
- **Primary Header (H2)**: Large editorial Serif typography running across a strict 3-line structural layout. The phrase tracking emotional resonance (e.g., linking conversion results to quality of life/sleep metrics) must use markdown italicization markers to trigger the custom brand purple styling variables.
- **Subtext Container**: A clean 1–2 line descriptive paragraph block positioned directly beneath the H2 block to frame the meeting expectations.
- **Backup Fallback CTA**: A solid purple call-to-action button positioned beneath the subtext, matching Section 1 style properties exactly to serve as a directional fallback anchor.

### 3. Right Column: Functional Calendly Widget Embed
- **Implementation Core**: This side of the column does not use graphic mockup elements; it must render a fully operational, live third-party **Inline Calendly Embed Component**.
- **Widget Properties & Parameters**:
  - **Target Booking URL**: `https://calendly.com/manzarja32/zylora-10-minutes-discovery`
  - **Meeting Event Title**: `"Zylora | 10 Minutes Discovery"`
  - **Active Session Duration**: 15 minutes.
  - **Confirmation Inclusions**: Native web conferencing details automatically appended upon booking verification.
- **UI Render Layout**: The active embed must natively render the month calendar grid with highlighted dates and an integrated timezone selector selector layout at the footer boundary.

---

## Content Structure & Core Directives

- **Urgency Scarcity Badge Node**: `"ONLY 5 SPOTS LEFT THIS MONTH FOR NEW PARTNERS"`
- **Primary Heading Structure**: `"Transform Your Agency Framework To Sleep Better At Night"`
- **Backup CTA Label Node**: `"Book Your Discovery Call"`

---

## Design Tokens & Integration Rules

- **Color Palette Variables**:
  - Section Backdrop Surface: Solid Clean White (`#FFFFFF`).
  - Active Accents / Left-Side Elements / Backup CTA Fill: Branding Purple (`#6366F1`).
  - Typography Layout Variables: Pitch Black (`#111111`) paired with neutral dark gray body copy.
- **Typography Configurations**:
  - Main Persuasion Headers: Editorial Serif font face (with inline italic styling support).
  - Subtext Blocks / Inline Calendly Interfaces: Highly readable Geometric Sans-Serif font families.
- **Friction Reduction Pattern**: Embedding a live widget interface directly inside the view stack reduces conversational drop-offs by bypassing transitional redirect steps.

---

## Reference-Only Guardrails (Strict Compliance Rules)

- **Scarcity Matrix Ethics (Dark Pattern Prevention)**: Static scarcity claims that remain evergreen across page sessions are highly risky and function as deceptive dark patterns. 
- **Production Directives**: For real client-facing deployment branches, OpenCode must integrate this scarcity badge parameter into a live dynamic database variable or remove the specific layout badge if slot metrics cannot be programmatically verified in real-time. Do not maintain static fabricated scarcity counts in production builds.

---

## File References
- `@context/zyloraui/09-booking-cta.md`
- `@context/project-overview.md`
- `@context/zyloraui/01-hero.md`
- `@context/zyloraui/02-work-carousal.md`
- `@context/zyloraui/03-comparison.md`
- `@context/zyloraui/04-client-success-cards.md`
- `@context/zyloraui/05-video-testimonials.md`
- `@context/zyloraui/06-dashboard-feature.md`
- `@context/zyloraui/07-educational-videos.md`
- `@context/zyloraui/08-faq.md`
- `@context/zyloraui/10-footer.md`