# Coding Standards — Zylora

## TypeScript
- Strict mode enabled
- No `any` types — use proper typing or `unknown`
- Define interfaces for all props and data
- Use type inference where obvious

## React
- Functional components only
- Use hooks for state and side effects
- One job per component — keep them focused
- Extract reusable logic into custom hooks

## Next.js
- Server components by default
- Only use `'use client'` when needed:
  - GSAP animations — requires browser APIs
  - Embla Carousel
  - useState, useEffect hooks
  - Any browser specific APIs
- No API routes needed — static landing page
- No database, no auth, no server actions

## Tailwind CSS
- Tailwind CSS for all styling
- No inline styles except GSAP transforms
- Mobile first — always verify small screen layout
- Use CSS variables for brand colors

## GSAP + ScrollTrigger
- Always initialize GSAP inside `useEffect`
- Always cleanup animations on unmount:
```typescript
return () => {
  ScrollTrigger.getAll().forEach(t => t.kill())
}
```
- Always call `ScrollTrigger.refresh()` after page load
- Never use GSAP outside of `useEffect` — SSR will break
- Use `gsap.context()` for scoped animations:
```typescript
const ctx = gsap.context(() => {
  // animations here
}, containerRef)
return () => ctx.revert()
```
- Register ScrollTrigger plugin once at top of file:
```typescript
gsap.registerPlugin(ScrollTrigger)
```

## Embla Carousel
- Use `embla-carousel-react` package
- One carousel component per section
- Always cleanup on unmount
- Mobile responsive — check on 375px

## ShadCN UI
- Use for: Accordion, Button, Carousel
- Do NOT use for custom layout sections
- Customize with Zylora brand colors
- Install components as needed — not all at once

## File Organization
- Components: `src/components/[section]/ComponentName.tsx`
- Pages: `src/app/page.tsx`
- Types: `src/types/index.ts`
- Lib/Utils: `src/lib/[utility].ts`
- Assets: `public/assets/[category]/`

## Naming
- Components: PascalCase (`HeroSection.tsx`)
- Files: Match component name or kebab-case
- Functions: camelCase
- Constants: SCREAMING_SNAKE_CASE
- Types/Interfaces: PascalCase

## Assets
- All images in `public/assets/`
- Use Next.js `Image` component — not `<img>` tag
- Always add `alt` text
- Optimize images before adding to project
- AI generated client images in `public/assets/clients/`

## Code Quality
- No commented-out code
- No unused imports or variables
- Keep components under 100 lines when possible
- One component per section
- No console.log in production code

## Mobile First
- Always build mobile layout first
- Test on 375px viewport
- Navbar: hamburger menu on mobile
- Carousels: touch/swipe enabled on mobile
- All sections stack vertically on mobile

## Rules
- Never use Myria branding or content
- Never add sections not in project-overview.md
- Never add fake or placeholder content outside
  of fictional client cards
- All files must be TypeScript — no .js files
- Never use `db push` — no database in this project
- No authentication required