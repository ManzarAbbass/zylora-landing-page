# Zylora Agency Testimonials Section Spec

## Overview
This is section 4 of 10 for the Zylora agency landing page layout. Use this specification document to structure the UI component architecture, asymmetric 3-column responsive card grids, and high-fidelity text layouts for OpenCode execution. This section focuses on presenting clean, conversion-focused client case studies without using fabricated metrics or unverified external links.

## Component Requirements & Layout Architecture

### 1. Section Header Block
- **Alignment**: Symmetrically centered text layout.
- **Eyebrow Element**: Centered pill badge containing exactly the uppercase string: `"CLIENT SUCCESS STORIES"`.
- **Primary Header (H2)**: Large editorial Serif font face. The target words **"Help"** and **"Revenue"** must use markdown italicization markers (`*Help*`, `*Revenue*`) to dynamically activate the custom purple brand accent styles.
- **Subtext Element**: A minimal, centered single-line paragraph description directly beneath the H2 block.

### 2. Three-Column Case Study Responsive Grid
A balanced 3-column layout distribution pattern on desktop screens that smoothly stacks down onto tablet and mobile viewports:

#### Shared Card Node Architecture
Each individual card inside the layout matrix must strictly expose the following structural layout stack from top to bottom:
- **Media Block**: A prominent vertical portrait photo canvas (`aspect-[3/4]` or standard portrait ratio) displaying clean AI-generated human or high-end stock portrait photography.
- **Category Tracker**: A small, uppercase structural text label tracking the specific industry market niche.
- **Brand Typography**: Bold text tracking the fictional client or brand identifier.
- **Narrative Blurb**: A 2–3 line structural text context paragraph structured using a rigid narrative sequence mapping: `Context -> Operational Action -> Resulting Outflow`.

#### Card Variation & Stylistic Themes
- **Card 1 (First/Featured Node)**: Styled with an explicit light purple-tinted background fill to serve as a visual anchor and focus point.
- **Card 2 & Card 3 (Standard Nodes)**: Styled with minimal white or ultra-light neutral gray backgrounds to maintain high-contrast layout balance across the screen.

---

## Content Structure & Hard Copy Variables

The grid container must strictly ingest and display the following data arrays:

### Card 1 (Featured)
- **Category Tag**: `"FASHION ECOMMERCE"`
- **Brand Identifier**: `"Velora Studio"`
- **Narrative Blurb Value**: `"Came to us with scattered email efforts. We built their automation flows and helped them retain more customers consistently."`

### Card 2 (Standard)
- **Category Tag**: `"HEALTH & WELLNESS"`
- **Brand Identifier**: `"Lumex Co."`
- **Narrative Blurb Value**: `"No email strategy in place. We set up their full system and improved their subscriber engagement significantly."`

### Card 3 (Standard)
- **Category Tag**: `"HOME & LIFESTYLE"`
- **Brand Identifier**: `"Nestly"`
- **Narrative Blurb Value**: `"Inconsistent campaigns with no direction. We streamlined their email marketing and built predictable revenue flows."`

---

## Design Tokens & System Rules

- **Color Palette Variables**:
  - Main Background Layer: Pure Solid White (`#FFFFFF`).
  - Featured Card Background: Subtle Light Purple Tint/Wash (`#F5F3FF` or adjacent violet-50 token).
  - Standard Card Backgrounds: Clean Minimal White or Light Gray Tint (`#F9FAFB`).
  - Highlight Accent Elements: Custom Branding Purple (`#6366F1`).
- **Typography Matrix**:
  - Core Headings: Premium Editorial Serif font face (with inline italic styling support).
  - Utility Elements / Subtext Labels / Brand Names: Clean Geometric Sans-Serif font family.

---

## Data Cleanliness Guardrails (Strict Constraints)

To ensure high data integrity and a real, professional agency deliverable, the following elements have been intentionally stripped from the production requirements:
- **No Social Icons**: Completely omit external, unverifiable social platform links (such as Instagram icons) next to fictional entities.
- **No Fabricated Numbers**: Do not insert arbitrary, misleading percentage jumps or fake conversion metrics (e.g., "+342% ROI") inside the narratives.
- **No Real Logos**: Do not reference or render established real-world brand assets or logos alongside fictional content nodes.

---

## File References
- `@context/zyloraui/04-client-success-cards.md`
- `@context/project-overview.md`
- `@context/zyloraui/01-hero.md`
- `@context/zyloraui/02-work-carousal.md`
- `@context/zyloraui/03-comparison.md`
- `@context/zyloraui/05-video-testimonials.md`
- `@context/zyloraui/06-dashboard-feature.md`
- `@context/zyloraui/07-educational-videos.md`
- `@context/zyloraui/08-faq.md`
- `@context/zyloraui/09-booking-cta.md`
- `@context/zyloraui/10-footer.md`