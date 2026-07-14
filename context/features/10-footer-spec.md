# Zylora Agency Footer Section Spec

## Overview
This is the final boundary element (Section 10 of 5) for the Zylora agency landing page layout [cite: 1]. Use this specification document to structure the UI component architecture, legal data compliance layers, newsletter capture blocks, and structural footer link layouts for OpenCode execution [cite: 1].

## Component Requirements & Layout Architecture

### 1. Section Container & Visual Anchors
- **Surface Backdrop**: Full-bleed Solid Matte Black / Obsidian background (`#111111`) [cite: 1]. This creates a high-contrast terminal endpoint for the viewport flow [cite: 1].
- **Responsive Layout**: A split multi-column distribution on desktop screens, collapsing cleanly into a vertical stacked single-column setup on mobile devices [cite: 1].

### 2. Left Column: Brand Identity & Data Capture Stack
- **Brand Logo Typography**: Bold geometric text anchor reading exactly `"ZYLORA"` [cite: 1].
- **Newsletter Value Proposition**: A short, high-conversion copy block introducing weekly brand insight distributions [cite: 1].
- **Interactive Email Signup Row**: 
  - An inline horizontal form factor layout containing a styled `<input type="email" />` text entry field [cite: 1].
  - A solid purple primary **"Submit"** action button node accented with a micro-animated inline right-facing arrow asset (`->`) [cite: 1].
- **Compliance Microcopy Line**: Positioned directly beneath the input row wrapper using small, muted text elements to signal legal consent frameworks (Privacy Policy links and marketing disclosure text) [cite: 1].

### 3. Right Column: Navigation Links Matrix
Divided into exactly two clean, minimalist utility text columns optimized for a single-product service architecture [cite: 1]:
- **Column 1 ("Company")**: Contains anchor nodes tracking `Home` and `Our Work` layout routes [cite: 1].
- **Column 2 ("Follow Us")**: Contains external link configurations tracking social media properties, each explicitly paired with its native platform SVG icon layout [cite: 1]:
  - `LinkedIn` [cite: 1]
  - `YouTube` [cite: 1]
  - `Instagram` [cite: 1]

### 4. Copyright Terminal Row
- **Horizontal Splitter**: A full-width, low-opacity horizontal divider rule line positioned symmetrically below both column grids [cite: 1].
- **Footer Copyright Line**: Left-aligned or centered inline string set in ultra-small, muted gray typography tracking standard brand protection boilerplate data [cite: 1].

---

## Content Structure & Persistent Variables

- **Newsletter Headline Pitch**: `"Join thousands of brand owners and marketers who get our weekly insights on email, SMS, and retention."` [cite: 1]
- **Email Input Placeholder Text**: `"name@company.com"` [cite: 1]
- **Legal Compliance Boilerplate**: `"By submitting, you agree to our Privacy Policy and consent to receive automated marketing messages."` [cite: 1]

---

## Design Tokens & Technical Compliance Rules

- **Color Palette Variables**:
  - Main Background Layer: Solid Matte Black (`#111111`) [cite: 1].
  - Email Field Background: Low-opacity dark gray container borders (`#1F2937`) [cite: 1].
  - Action Button Fill Node: Branding Purple (`#6366F1`) [cite: 1].
  - Typography Primary: Solid Pure White (`#FFFFFF`) [cite: 1].
  - Typography Secondary / Microcopy: Muted Gray Variables (`#9CA3AF`) [cite: 1].
- **Typography Configurations**:
  - Interface Labels / Links / Forms / Disclosures: Highly readable Sans-Serif font families to maintain utility compliance [cite: 1].
- **Legal Signals & Best Practices**: Including consent boilerplate microcopy serves as an essential compliance layer (GDPR / CAN-SPAM signals) that must be preserved in production forms [cite: 1].

---

## Reference-Only Guardrails (Context Adaptation Rules)

- **Navigation Density Guard**: This layout utilizes a highly restricted 2-column, lean link matrix because the project functions exclusively as a focused, single-purpose conversion landing page [cite: 1]. 
- **Production Directives**: If this template asset is ever adapted for multi-page site structures, OpenCode must expand the link matrix density programmatically to accommodate full informational terms, team pages, and auxiliary indexing layouts rather than copying the lean 2-link footprint verbatim [cite: 1].

---

## File References
- `@context/zyloraui/10-footer.md`
- `@context/project-overview.md`
- `@context/zyloraui/01-hero.md`
- `@context/zyloraui/02-work-carousal.md`
- `@context/zyloraui/03-comparison.md`
- `@context/zyloraui/04-client-success-cards.md`
- `@context/zyloraui/05-video-testimonials.md`
- `@context/zyloraui/06-dashboard-feature.md`
- `@context/zyloraui/07-educational-videos.md`
- `@context/zyloraui/08-faq.md`
- `@context/zyloraui/09-booking-cta.md`