# Section: Real Results, Real Clients (Video Testimonial Carousel)

## Layout
- White background, centered heading: "Real Results. *Real Clients.*" 
  (serif, italic purple on second phrase).
- 3-across row of rounded-rectangle video thumbnail cards 
  (portrait orientation, like short-form video/reel format), 
  each with a centered purple circular play-button overlay.
- Carousel dot indicators below, centered 
  (active dot elongated/highlighted).

## Content Structure
- No text content beyond the heading
- 3 video cards — YouTube embedded videos
- Each card shows YouTube thumbnail image
- Play button click → opens YouTube video in modal overlay

## Video Implementation
- Thumbnail image fetched from YouTube:
  https://img.youtube.com/vi/VIDEO_ID/maxresdefault.jpg
- On play button click → modal opens with YouTube iframe embed
- Modal closes on outside click or X button
- Use 3 real email marketing YouTube videos as placeholders

## Placeholder Videos
Search YouTube for "email marketing tips" and pick 3 videos.
Replace VIDEO_ID with actual YouTube video IDs:

- Video 1: VIDEO_ID_1
- Video 2: VIDEO_ID_2  
- Video 3: VIDEO_ID_3

## Component Behavior
- Default state: thumbnail visible, purple play button overlay
- Hover state: slight scale up on card — GSAP animation
- Click state: modal opens with YouTube iframe
- Modal: dark overlay background, centered video, X close button
- Carousel dots: click to navigate between cards on mobile

## Design Notes
- Portrait/reel-style thumbnails — authentic UGC feel
- Purple circular play button — consistent with brand color #6366F1
- Carousel dot pattern matches Our Work section
- Modal overlay: rgba(0,0,0,0.8) background

## Animation — GSAP
- Cards fade in on scroll — ScrollTrigger
- Stagger animation — cards appear one by one
- Hover: subtle scale transform on card
- Modal: fade in/scale up on open, fade out on close

## Reference Screenshot
- @context/design-reference/L4.png

## Reference Only Note
Video testimonials are strongest trust signal on this page.
For a real project — videos must be real with client consent.
For Zylora demo — placeholder YouTube videos used.
All content is fictional for portfolio demonstration only.