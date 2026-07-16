'use client'

import { useEffect, useRef, useState, useCallback } from 'react'
import Image from 'next/image'
import { gsap, ScrollTrigger } from '@/lib/gsap-setup'
import useEmblaCarousel from 'embla-carousel-react'

const SLIDES = [
  {
    id: 0,
    heading: 'The Full Picture, One Screen',
    description:
      'Every metric that matters, updated in real-time. Campaign performance, flow attribution, and revenue data \u2014 all in one unified dashboard.',
    image:
      '/assets/dashboard/Screenshot 2026-06-14 at 21.03.49 1.jpg',
  },
  {
    id: 1,
    heading: 'Campaign Performance Tracking',
    description:
      'See which campaigns drive real revenue, not just opens and clicks. Track attribution down to the individual customer journey.',
    image:
      '/assets/dashboard/Screenshot 2026-06-14 at 21.04.33 1.jpg',
  },
  {
    id: 2,
    heading: 'Automated Flow Analytics',
    description:
      'Monitor your triggered email sequences in real time. Identify drop-off points and optimize each flow for maximum conversion.',
    image:
      '/assets/dashboard/Screenshot 2026-06-14 at 21.09.17 1.jpg',
  },
  {
    id: 3,
    heading: 'ROI & Attribution Insights',
    description:
      'Know exactly where every dollar comes from. Our proprietary tracking reveals true ROI across channels and campaigns.',
    image:
      '/assets/dashboard/Screenshot 2026-06-14 at 21.05.29 1.jpg',
  },
]

export default function DashboardSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false })
  const [selectedIndex, setSelectedIndex] = useState(0)

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
      gsap.from('[data-anim="dash-header"]', {
        y: 40,
        opacity: 0,
        stagger: 0.15,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
      })
      gsap.from('[data-anim="dash-card"]', {
        y: 60,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '[data-anim="dash-card"]',
          start: 'top 80%',
        },
      })
      gsap.from('[data-anim="dash-cta"]', {
        y: 30,
        opacity: 0,
        duration: 0.6,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '[data-anim="dash-cta"]',
          start: 'top 85%',
        },
      })
    }, sectionRef)

    ScrollTrigger.refresh()
    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="mx-auto mt-6 w-full max-w-[1384px] overflow-hidden sm:rounded-3xl bg-[#111111] pb-8 pt-6 sm:mt-8 sm:pb-12 sm:pt-10"
      style={{
        backgroundImage: 'url(/assets/dashboard/BG.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-2 flex flex-col items-start justify-between gap-2 sm:flex-row sm:items-start">
          <div className="w-full max-w-6xl">
            <span
              data-anim="dash-header"
              className="inline-flex items-center gap-1.5 rounded-full border border-white/20 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-white sm:gap-2 sm:px-4 sm:py-1.5 sm:text-xs"
            >
              <span className="h-2 w-2 rounded-full bg-brand-amber" />
              THE TRUTH ABOUT YOUR NUMBERS
            </span>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <h2
                data-anim="dash-header"
                className="font-heading mt-2 text-3xl font-bold leading-snug tracking-tight text-white sm:text-4xl sm:leading-snug lg:text-5xl"
              >
                We{' '}
                <em className="not-italic text-brand-amber">Built</em>{' '}
                Our Own<br />
                <em className="not-italic text-brand-amber">
                  Software
                </em>{' '}
                To See What<br />
                Klaviyo Hides
              </h2>
              <button
                data-anim="dash-cta"
                type="button"
                className="shrink-0 rounded-lg bg-brand-amber px-4 py-2 text-sm font-bold text-text-primary transition-all hover:brightness-110 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-amber sm:px-6 sm:py-3 sm:text-base"
              >
                Get a Free Email Audit &rarr;
              </button>
            </div>
            <p
              data-anim="dash-header"
              className="mt-2 text-sm leading-relaxed text-white/60 sm:text-base"
            >
              Klaviyo gives you the highlights. We built a proprietary
              tracking system that surfaces what standard dashboards
              miss &mdash; real attribution, true ROI, and
              campaign-level data your analytics tools won&apos;t show
              you.
            </p>
          </div>
        </div>

        <div
          data-anim="dash-card"
          className="rounded-[2rem] border border-white/10 bg-[#1F2937] p-6 sm:p-8 lg:p-10 mt-6 sm:mt-8"
        >
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex touch-pan-y">
              {SLIDES.map((slide) => (
                <div
                  key={slide.id}
                  className="min-w-0 shrink-0 grow-0 basis-full"
                >
                    <div className="p-3 sm:p-4 lg:p-6">
                      <h3 className="text-2xl font-bold text-white sm:text-3xl">
                        {slide.heading}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-white/60 sm:text-base">
                        {slide.description}
                      </p>
                    </div>
                      <div className="relative w-full aspect-[16/9] overflow-hidden rounded-2xl  max-h-[400px] sm:max-h-[500px]">
                      <Image
                        src={slide.image}
                        alt={slide.heading}
                        fill
                        className="object-cover"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 80vw"
                      />
                    </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-3 flex items-center justify-center gap-2">
            {SLIDES.map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => emblaApi?.scrollTo(index)}
                className={`rounded-full transition-all duration-300 ${
                  index === selectedIndex
                    ? 'h-2 w-8 bg-brand-amber'
                    : 'h-2 w-2 bg-white/40'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
