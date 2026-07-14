# Section: Final CTA — Booking Widget

## Layout
- Two-column layout: left = text/CTA, right = embedded scheduling widget (calendar picker UI).
- Left column: pill badge with urgency framing ("ONLY 5 SPOTS LEFT THIS MONTH FOR NEW PARTNERS"), large serif headline (3 lines, one phrase in purple italic — unconventional metaphor tying the service to an unrelated benefit, e.g. sleep quality), short subtext, purple CTA button matching site-wide style.
- Right column: Calendly embed (real functional scheduling widget)
  - Host name
  - Meeting title: "Zylora | 10 Minutes Discovery"
  - Duration: 15 minutes
  - Web conferencing details provided upon confirmation
  - Month calendar grid with available dates highlighted
  - Timezone selector at bottom
  
## Implementation Note
Real Calendly embed used — not mock UI.
Event: "Zylora | 10 Minutes Discovery"
Duration: 15 minutes
Embed type: Inline
Calendly URL: https://calendly.com/manzarja32/zylora-10-minutes-discovery

## Content structure
- Left: scarcity hook (limited spots) → benefit-metaphor headline → CTA.
- Right: functional booking widget — this is the actual conversion mechanism, not decorative.

## Design notes
- Scarcity badge ("Only 5 spots left") is a classic urgency/FOMO pattern — only ethical to use if the number is real and actively maintained/updated, not a static evergreen claim.
- Embedding a real, functional calendar widget (vs. just a CTA button) reduces friction at the exact point of conversion — this is a strong pattern to reuse regardless of content specifics.
- Headline metaphor (linking the service to something unrelated like sleep) is a copywriting device to create emotional resonance beyond the literal service — can feel like a stretch if the connection isn't well-earned elsewhere on the page.

## Reference-only note
The "5 spots left" claim is the most obviously risky element to copy verbatim — static scarcity claims that never change are a well-known dark pattern. If reusing this section type, the number needs to be genuinely dynamic/true.
