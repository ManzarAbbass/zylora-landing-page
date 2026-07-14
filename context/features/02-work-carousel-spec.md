# Zylora Agency Our Work Section Spec

## Overview
This is section 2 of 10 for the Zylora agency landing page layout. Use this specification document to structure the UI component architecture, horizontal carousel constraints, and visual depth behaviors for OpenCode execution. This section focuses on showcasing live portfolio examples inside a high-end interactive slider.

## Component Requirements & Layout Architecture

### 1. Section Container & Background System
- **Layout Model**: Full-bleed responsive row container featuring aggressively rounded border corners to clip into adjacent sections cleanly.
- **Surface Fill**: Solid branding purple backdrop token.
- **Decorative Base**: A low-opacity, faint, large repeating typographic background wordmark pattern acting strictly as a static visual watermark texture.

### 2. Header Block
- **Alignment**: Symmetrically centered text alignment.
- **Typography Layout**: Premium editorial Serif font face styled in solid white.
- **Accent Weight**: The specific phrase *"For Itself"* must be isolated using markdown italicization markers (`*For Itself*`) to dynamically toggle color configurations into the secondary yellow accent channel.

### 3. Center-Focus Horizontal Carousel Matrix
An interactive multi-card slider showcasing exactly 5 visible viewport instances concurrently, optimized through modern layout depth practices:

#### Slide Layer & Depth Configurations
- **Outer Perimeter Cards (2 Left, 2 Right)**: Automatically scaled down in dimensional ratio, lowered in opacity, and masked with a heavy CSS blur filter to establish peripheral depth of field.
- **Center Focus Card (Active Node)**: Rendered sharply at 100% scale and maximum opacity. The screenshot layout inside must display a detailed high-fidelity email mockup enclosed within an explicit phone/device structural frame.
- **Overlay Flourish**: The center active phone frame must feature an absolute-positioned diagonal ribbon/tag label system overlaying its boundary corners to showcase specific performance metric callouts.

#### Carousel Navigation Indicators
- **Positioning**: Anchored centered directly beneath the carousel track loop.
- **Shape Formats**: Inactive pagination nodes must render as small minimal circular dots. The active slide index node must automatically transform into an elongated pill-shaped horizontal element tracking the secondary yellow brand token.

### 4. High-Contrast Section Call-to-Action
- **Alignment**: Centered block element positioned below the pagination indicator nodes.
- **Visual Style**: Solid high-contrast yellow button fill accented with dark pitch-black typography and an inline directional arrow asset.
- **Intent**: Breaks layout harmony by introducing a dedicated contrast color mechanism specifically engineered to pierce visibility over solid purple surface background boundaries.

---

## Content Structure & Hard Copy Variables

- **Section Heading Node**: `"Our Work Speaks *For Itself*"`
- **Body Context**: Section contains zero markdown paragraph copy block elements; narrative weight is driven solely through asset captures and device mockup layers.

---

## Design Tokens & Theme Matrix

- **Color Palette Variables**:
  - Section Background Layer: Solid Deep Branding Purple (`#6366F1` or adjacent dark indigo-purple token).
  - Main Heading Typography: Pure Crisp White (`#FFFFFF`).
  - Active Accents / Primary CTA Fill / Active Dots: High-Contrast Vibrant Yellow (`#FACC15` / `#EAB308` range).
  - CTA Typography Node: Pitch Black / Dark Obsidian (`#111111`).
- **Typography Matrix**:
  - Headings: Editorial Serif typeface (with custom italic styling parameters).
  - Navigation Elements / CTA Buttons / Interface UI: Clean Geometric Sans-Serif.

---

## Reference-Only Guardrails (Strict Constraints)
- **Data Integrity Safety**: The reference snapshots visible inside source templates utilize broken, nonsensical filler text and fabricated metrics. 
- **Production Rules**: Under no circumstances should unverified template data strings, mock placeholder conversions, or fictional tracking metrics be ingested or outputted into live production deployment scopes.

---

## File References
- `@context/zyloraui/02-work-carousal.md`
- `@context/project-overview.md`
- `@context/zyloraui/01-hero.md`
- `@context/zyloraui/03-comparison.md`
- `@context/zyloraui/04-client-success-cards.md`
- `@context/zyloraui/05-video-testimonials.md`
- `@context/zyloraui/06-dashboard-feature.md`
- `@context/zyloraui/07-educational-videos.md`
- `@context/zyloraui/08-faq.md`
- `@context/zyloraui/09-booking-cta.md`
- `@context/zyloraui/10-footer.md`