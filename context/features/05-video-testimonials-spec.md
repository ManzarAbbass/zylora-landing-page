# Zylora Agency Video Testimonials Section Spec

## Overview
This is section 5 of 10 for the Zylora agency landing page layout. Use this specification document to structure the UI component architecture, dynamic interactive video player modals, and responsive asset carousels for OpenCode execution. This system modules focus on establishing brand trust using actual external streaming mock references.

## Component Requirements & Layout Architecture

### 1. Section Header Block
- **Section Surface**: Clean Solid White background (`#FFFFFF`).
- **Alignment**: Symmetrically centered text alignment layout.
- **Primary Header (H2)**: Large editorial Serif font face. Text structure must read exactly: `"Real Results. *Real Clients.*"`. The phrase *“Real Clients.”* must use markdown italicization markers to toggle color configurations into the custom purple brand accent channel.

### 2. Portrait/Reel-Format Horizontal Video Carousel
A horizontal sequence row containing exactly 3 viewport cards aligned symmetrically across the grid screen space, designed to mirror modern vertical mobile video layouts (TikTok/Shorts format):

#### Card Track & Thumbnail Implementation
- **Dimensions**: Strictly portrait layout orientations (`aspect-[9/16]` or standard mobile aspect boundaries) featuring smoothed rounded-rectangle edge parameters.
- **Background Cover**: Thumbnail images must be fetched directly and dynamically using standard streaming paths matching: `https://img.youtube.com/vi/VIDEO_ID/maxresdefault.jpg`.
- **Primary UI Overlay Accent**: A centered, high-contrast purple circular interactive play-button layout anchored right over the visual thumbnail asset stack.

#### Carousel Navigation Indicators
- **Positioning**: Anchored centered directly beneath the mobile card loop track.
- **Shape Formats**: Symmetrical dot matrix patterns matching Section 3 design rules (inactive nodes = minimal circles, active index node = elongated horizontal pill layout tracking the purple brand token).

### 3. Dedicated Video Player Modal Overlay Subcomponent
A global interaction viewport container invoked exclusively via click events dispatched from target card nodes:
- **Surface Backdrop**: Fixed layout canvas spanning full visibility boundaries colored in dark matte overlays (`rgba(0,0,0,0.8)`).
- **Core Screen Target**: Symmetrically centered responsive standard HTML `<iframe>` embed container block mapping YouTube streaming targets.
- **Dismissal Controls**: Closes automatically whenever a user fires a pointer event target over the explicit top-right "X" closing button node, or clicks natively into empty background surface backdrop fields.

---

## Live Placeholder Video Mapping Matrix

To maintain demo system scaffolding, use the following real-world verified YouTube IDs inside production variable arrays:

1. **Card Video Target 1**:
   - **Target ID Mapping**: `J0CEiuOfON0`
   - **Context Track**: Email Marketing Tutorial for Beginners Tutorial
2. **Card Video Target 2**:
   - **Target ID Mapping**: `XFumpG-w-vM`
   - **Context Track**: Advanced Email Marketing Optimization Strategies
3. **Card Video Target 3**:
   - **Target ID Mapping**: `W9fQP4TqHfk`
   - **Context Track**: Complete Lifecycle Framework Design Course

---

## Technical Component Interaction Logic & Animations (GSAP)

- **Scroll Entrance Phase**: Connect cards into native GSAP `ScrollTrigger` modules to initiate layout slide-ups with staggered frame entry increments (cards render smoothly one by one on entrance).
- **Pointer Focus States (Hover)**: Use subtle micro-scale translations via transform properties to smoothly expand target card dimensions slightly upward on cursor focus.
- **Modal Lifecycle Phase**: Toggling overlay visibility states must trigger smooth alpha opacity crossfades accompanied by responsive fluid container scaling animations on initialization and teardown states.

---

## Design System & Theme Alignment Rules

- **Color Palette Variables**:
  - Base Surface Background: Clean White (`#FFFFFF`).
  - Active Accents / Play UI Buttons / Pagination Paths: Primary Brand Purple (`#6366F1`).
  - Modal Screen Backdrop Fill: Semi-Transparent Charcoal Shadow (`rgba(0, 0, 0, 0.8)`).
- **Tone Profile**: Authentic UGC user-generated micro-content formats designed to project transparency and real boutique agency workflow outputs.

---

## Reference-Only Guardrails (Strict Compliance Rules)
- **Data Integrity Guard**: This video component module provides core conversion-optimized layouts using open placeholder items. 
- **Production Directives**: For real client delivery modules, all placeholder nodes must transition onto live client UGC records and production assets backed by legal consent frameworks. Do not preserve dummy placeholder variables during production deployments.

---

## File References
- `@context/zyloraui/05-video-testimonials.md`
- `@context/project-overview.md`
- `@context/zyloraui/01-hero.md`
- `@context/zyloraui/02-work-carousal.md`
- `@context/zyloraui/03-comparison.md`
- `@context/zyloraui/04-client-success-cards.md`
- `@context/zyloraui/06-dashboard-feature.md`
- `@context/zyloraui/07-educational-videos.md`
- `@context/zyloraui/08-faq.md`
- `@context/zyloraui/09-booking-cta.md`
- `@context/zyloraui/10-footer.md`