'use client'

import { useEffect, useRef, useState, useCallback } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import useEmblaCarousel from 'embla-carousel-react'

gsap.registerPlugin(ScrollTrigger)

const VIDEOS = [
  { id: 'J0CEiuOfON0', title: 'Email Marketing Tutorial for Beginners' },
  { id: 'XFumpG-w-vM', title: 'Advanced Email Marketing Optimization Strategies' },
  { id: 'W9fQP4TqHfk', title: 'Complete Lifecycle Framework Design Course' },
  { id: 'pLhQOYMGa88', title: 'Learn Email Marketing in 39 Minutes' },
  { id: 'E0C-RnPy004', title: 'Brevo Email Marketing for Beginners' },
  { id: '08Xdy4eYCz8', title: 'Klaviyo Email Marketing Full Course' },
]

export default function VideoTestimonialsSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const modalRef = useRef<HTMLDivElement>(null)
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: 'start',
    loop: false,
    dragFree: true,
    containScroll: false,
  })
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [activeVideo, setActiveVideo] = useState<string | null>(null)

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    emblaApi.on('select', onSelect)
    onSelect()
  }, [emblaApi, onSelect])

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('[data-anim="video-header"]', {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' },
      })
      const cards = gsap.utils.toArray<HTMLElement>('[data-anim="video-card"]')
      cards.forEach((card, i) => {
        gsap.from(card, {
          y: 60,
          opacity: 0,
          duration: 0.6,
          delay: i * 0.1,
          ease: 'power3.out',
          scrollTrigger: { trigger: card, start: 'top 85%' },
        })
        card.addEventListener('mouseenter', () => {
          gsap.to(card, { y: -8, scale: 1.02, duration: 0.3, ease: 'power2.out' })
        })
        card.addEventListener('mouseleave', () => {
          gsap.to(card, { y: 0, scale: 1, duration: 0.3, ease: 'power2.out' })
        })
      })
    }, sectionRef)

    ScrollTrigger.refresh()
    return () => ctx.revert()
  }, [])

  useEffect(() => {
    if (!activeVideo || !modalRef.current) return
    gsap.fromTo(modalRef.current, { opacity: 0, scale: 0.95 }, { opacity: 1, scale: 1, duration: 0.3, ease: 'power2.out' })
  }, [activeVideo])

  useEffect(() => {
    if (activeVideo) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [activeVideo])

  return (
    <>
      <section ref={sectionRef} className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-12 max-w-3xl text-center sm:mb-16">
            <h2
              data-anim="video-header"
              className="font-heading text-3xl font-bold leading-snug tracking-tight sm:text-4xl sm:leading-snug lg:text-5xl"
            >
              Learn From The <em className="not-italic text-brand-purple">Experts</em>
            </h2>
          </div>

          <div className="relative">
            <div className="overflow-hidden" ref={emblaRef}>
              <div className="flex touch-pan-y">
                {VIDEOS.map((video, index) => (
                  <div
                    key={video.id}
                    className="min-w-0 shrink-0 grow-0 basis-[70%] sm:basis-[40%] lg:basis-[30%] px-4"
                  >
                    <button
                      data-anim="video-card"
                      type="button"
                      onClick={() => setActiveVideo(video.id)}
                      className="group block w-full focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-purple"
                    >
                      <div className="relative aspect-[3/4] w-full overflow-hidden rounded-3xl">
                        <img
                          src={`https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`}
                          alt={video.title}
                          className="h-full w-full object-cover"
                        />
                        <div className="absolute inset-0 flex items-center justify-center transition-all duration-300 group-hover:bg-black/10">
                          <span className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-brand-purple bg-white/90 shadow-lg transition-transform duration-300 group-hover:scale-110">
                            <svg className="ml-0.5 h-6 w-6 text-brand-purple" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M8 5v14l11-7z" />
                            </svg>
                          </span>
                        </div>
                      </div>
                    </button>
                  </div>
                ))}
              </div>
            </div>
            <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-white to-transparent" />
          </div>

          <div className="mt-8 flex items-center justify-center gap-2 sm:mt-10">
            {VIDEOS.map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => emblaApi?.scrollTo(index)}
                className={`rounded-full transition-all duration-300 ${
                  index === selectedIndex
                    ? 'h-2 w-8 bg-brand-purple'
                    : 'h-2 w-2 bg-gray-300'
                }`}
                aria-label={`Go to video ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {activeVideo && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          onClick={() => setActiveVideo(null)}
        >
          <div
            ref={modalRef}
            className="relative w-full max-w-3xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setActiveVideo(null)}
              className="absolute -right-2 -top-10 z-10 text-white/80 transition-colors hover:text-white"
              aria-label="Close video"
            >
              <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="aspect-video w-full overflow-hidden rounded-2xl">
              <iframe
                src={`https://www.youtube.com/embed/${activeVideo}?autoplay=1`}
                title="Video testimonial"
                className="h-full w-full"
                allow="autoplay; encrypted-media"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </>
  )
}
