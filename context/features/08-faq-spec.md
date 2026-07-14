# Zylora Agency FAQ Section Spec

## Overview
This is the final conversion and trust-building section for the Zylora agency landing page layout [cite: 0.5.3]. Use this specification document to structure the UI component architecture, vertically stacked accordion components, and psychological objection-handling text structures for OpenCode execution [cite: 0.5.1, 0.5.3].

## Component Requirements & Layout Architecture

### 1. Section Container & Visual Anchors
- **Surface Backdrop**: Full-bleed responsive row container featuring deep, aggressively rounded border-radius parameters (matching Section 3 boundaries) [cite: 0.5.3].
- **Surface Fill**: Solid branding purple backdrop token [cite: 0.5.3].
- **Decorative Base**: A low-opacity, faint, repeating typographic background wordmark pattern acting as a cohesive visual backdrop texture [cite: 0.5.3].

### 2. Header Block
- **Alignment**: Symmetrically centered text alignment layout [cite: 0.5.3].
- **Typography Layout**: Premium editorial Serif font face styled in solid pure white [cite: 0.5.3].
- **Accent Weight**: The specific word *“Questions”* must be isolated using markdown italicization markers (`*Questions*`) to dynamically toggle color configurations into the vibrant yellow accent channel [cite: 1, 0.5.3].

### 3. Progressive Objection-Ladder Accordion List
A interactive vertical stack containing exactly 5 clean accordion row components engineered around soft, boutique-brand visual guidelines [cite: 0.5.1, 0.5.3]:

#### Accordion Row Architecture & Behaviors
- **Row Styling**: Individual items must be enclosed within full-bleed rounded-pill / rounded-rectangle white containers [cite: 0.5.3]. Standard single-line underlying rule borders are strictly prohibited [cite: 0.5.3].
- **Layout Distribution**: 
  - **Left Side**: High-contrast, pitch-black bold question text node [cite: 0.5.1, 0.5.3].
  - **Right Side**: An interactive dynamic plus (`+`) expansion icon asset [cite: 0.5.1, 0.5.17].
- **Interaction States**: 
  - **Default Initial State**: All 5 accordion rows render completely collapsed (no active textual answer blocks visible in initial viewport passes) [cite: 0.5.1, 0.5.6].
  - **Toggle Animation (GSAP)**: Triggering a pointer event over a row expands the container smoothly to reveal responsive client-focused placeholder copy strings, transitioning the plus (`+`) symbol dynamically [cite: 0.5.1, 0.5.17].

---

## Content Structure & Systematic Objection Ordering

The accordion structure must strictly arrange questions in a sequential order designed to lower buyer friction points systematically [cite: 0.5.3]:

1. **Item 1: Trust/Quality Constraint**
   - *Question Label*: `"Will I be handed over to freelancers?"`
   - *Target Intent*: Diffuse immediate agency quality execution worries [cite: 0.5.3].
2. **Item 2: Credibility/Proof Verification**
   - *Question Label*: `"How do I know you can do what you say you can?"`
   - *Target Intent*: Establishes baseline functional authority and analytical tracking proof [cite: 0.5.3].
3. **Item 3: Practical Operational Prerequisites**
   - *Question Label*: `"Do I need an email provider?"`
   - *Target Intent*: Clarifies technical dependencies and workflow on-boarding limits [cite: 0.5.3].
4. **Item 4: User Resource/Effort Allocation**
   - *Question Label*: `"What do I need to do?"`
   - *Target Intent*: Sets realistic time investment benchmarks for direct client team alignment [cite: 0.5.3].
5. **Item 5: Overarching System Suitability Doubt**
   - *Question Label*: `"Will email marketing work for me?"`
   - *Target Intent*: Resolves broad, open-ended business fit anxieties prior to final sales action points [cite: 0.5.3].

---

## Design Tokens & Interaction Rules

- **Color Palette Variables**:
  - Section Backdrop Surface: Solid Deep Branding Purple (`#6366F1`) [cite: 0.5.3].
  - Main Heading Typography: Pure Crisp White (`#FFFFFF`) [cite: 0.5.3].
  - Highlight Accent Typography: Vibrant Contrast Yellow (`#FACC15`) [cite: 0.5.3].
  - Accordion Row Fill Background: Pure Solid White (`#FFFFFF`) [cite: 0.5.3].
  - Question Text Element: Dark Obsidian / Black (`#111111`) [cite: 0.5.3].
- **Typography Matrix**:
  - Headings: Editorial Serif typeface (supporting fluid inline italics) [cite: 0.5.3].
  - Interface Accordion Triggers / Body Responses: Geometric Sans-Serif font [cite: 0.5.3].
- **Visual Continuity Directive**: The full pill/rounded-rect shape matrix used across individual rows must match the organic design signatures established by hero sketches and thumbnail wrappers used globally across the project stack [cite: 0.5.3].

---

## Reference-Only Guardrails (Context Adaptation Rules)

- **Template Generalization Warning**: The 5 sequential structural questions serve as an industry-standard tactical objection matrix checklist [cite: 0.5.3]. 
- **Production Directives**: While the question rows are perfectly reusable, OpenCode must configure all internal hidden text answers to output factual, verified operational data matching the custom agency framework rather than duplicating template dummy arrays [cite: 0.5.3].

---

## File References
- `@context/zyloraui/08-faq.md`
- `@context/project-overview.md`
- `@context/zyloraui/01-hero.md`
- `@context/zyloraui/02-work-carousal.md`
- `@context/zyloraui/03-comparison.md`
- `@context/zyloraui/04-client-success-cards.md`
- `@context/zyloraui/05-video-testimonials.md`
- `@context/zyloraui/06-dashboard-feature.md`
- `@context/zyloraui/07-educational-videos.md`
- `@context/zyloraui/09-booking-cta.md`
- `@context/zyloraui/10-footer.md`