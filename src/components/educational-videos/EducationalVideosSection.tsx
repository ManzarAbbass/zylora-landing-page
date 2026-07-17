'use client'

import { useEffect, useRef, useState, useCallback } from 'react'
import { gsap, ScrollTrigger } from '@/lib/gsap-setup'
import useEmblaCarousel from 'embla-carousel-react'

interface ThumbnailConfig {
  id: number
  headline: string
  bg: string
  accent: string
  details: string
  duration: string
  difficulty: string
  takeaways: string[]
  youtubeLink: string
}

const CARDS: ThumbnailConfig[] = [
  {
    id: 1,
    headline: 'ADVANCED CAMPAIGN\nAUTOMATION',
    bg: 'from-violet-600 to-indigo-900',
    accent: 'bg-rose-500',
    details: 'Master multi-step email automation flows that convert cold leads into repeat buyers using behavioral triggers and smart segmentation.',
    duration: '18:45',
    difficulty: 'Advanced',
    takeaways: ['Behavioral trigger setup', 'Multi-branch flow logic', 'Smart list segmentation', 'A/B testing automation'],
    youtubeLink: 'https://youtube.com/watch?v=example1',
  },
  {
    id: 2,
    headline: 'WELCOME SEQUENCE\nCONVERSION HACKS',
    bg: 'from-emerald-500 to-teal-800',
    accent: 'bg-amber-400',
    details: 'Learn how to craft welcome sequences that achieve 60%+ open rates and drive first-purchase conversions from day one.',
    duration: '14:20',
    difficulty: 'Intermediate',
    takeaways: ['High-converting welcome flows', 'Discount timing strategies', 'Personalization tactics', 'Onboarding email design'],
    youtubeLink: 'https://youtube.com/watch?v=example2',
  },
  {
    id: 3,
    headline: 'CLICK-THROUGH RATE\nOPTIMIZATION',
    bg: 'from-orange-500 to-red-800',
    accent: 'bg-sky-400',
    details: 'Data-driven techniques to double your email click-through rates using advanced copywriting, design psychology, and CRO methods.',
    duration: '22:10',
    difficulty: 'Advanced',
    takeaways: ['CTA copywriting frameworks', 'Visual hierarchy principles', 'Mobile-first optimization', 'Heatmap-driven redesign'],
    youtubeLink: 'https://youtube.com/watch?v=example3',
  },
  {
    id: 4,
    headline: 'EMAIL LIST GROWTH\nSTRATEGIES',
    bg: 'from-blue-600 to-indigo-900',
    accent: 'bg-yellow-400',
    details: 'Proven tactics to grow your email list organically — from exit-intent popups to lead magnets and social cross-promotion.',
    duration: '16:30',
    difficulty: 'Beginner',
    takeaways: ['Lead magnet creation', 'Popup optimization', 'Social media integration', 'Referral program setup'],
    youtubeLink: 'https://youtube.com/watch?v=example4',
  },
  {
    id: 5,
    headline: 'ABANDONED CART\nRECOVERY TACTICS',
    bg: 'from-pink-500 to-purple-800',
    accent: 'bg-lime-400',
    details: 'Recover up to 15% of lost sales with strategic abandoned cart sequences that combine urgency, incentives, and smart retiming.',
    duration: '19:55',
    difficulty: 'Intermediate',
    takeaways: ['3-email recovery sequence', 'Discount psychology', 'Urgency triggers', 'Cross-sell upsell tactics'],
    youtubeLink: 'https://youtube.com/watch?v=example5',
  },
  {
    id: 6,
    headline: 'SUBJECT LINE\nA/B TESTING LAB',
    bg: 'from-cyan-500 to-blue-800',
    accent: 'bg-orange-400',
    details: 'A practical walkthrough of subject line A/B testing — what to test, how to measure significance, and winning formulas.',
    duration: '12:15',
    difficulty: 'Beginner',
    takeaways: ['A/B testing methodology', 'Statistical significance', 'Winning formula templates', 'Emoji and personalization'],
    youtubeLink: 'https://youtube.com/watch?v=example6',
  },
]

const GLOBAL_BANNER = '🔥 Join the Free Blueprint Giveaway — Limited Slots Active'
const CHANNEL_ATTRIBUTION = 'Created by Zylora Insights'

function VideoCard({ card, index, isExpanded, onToggle }: { card: ThumbnailConfig; index: number; isExpanded: boolean; onToggle: (id: number) => void }) {
  const contentRef = useRef<HTMLDivElement>(null)
  const detailsRef = useRef<HTMLDivElement>(null)
  const initialized = useRef(false)

  const handleClick = () => {
    onToggle(isExpanded ? 0 : card.id)
  }

  useEffect(() => {
    if (!contentRef.current) return
    gsap.set(contentRef.current, { height: 0, opacity: 0 })
    initialized.current = true
  }, [])

  useEffect(() => {
    if (!initialized.current || !contentRef.current || !detailsRef.current) return

    if (isExpanded) {
      contentRef.current.style.height = 'auto'
      const h = contentRef.current.offsetHeight
      gsap.set(contentRef.current, { height: 0 })
      requestAnimationFrame(() => {
        gsap.to(contentRef.current, {
          height: h,
          opacity: 1,
          duration: 0.4,
          ease: 'power2.out',
        })
      })
    } else {
      gsap.to(contentRef.current, {
        height: 0,
        opacity: 0,
        duration: 0.35,
        ease: 'power2.inOut',
      })
    }
  }, [isExpanded])

  return (
    <article
      data-anim="edu-card"
      className="group cursor-pointer overflow-hidden rounded-2xl bg-white shadow-md transition-shadow duration-500 hover:shadow-xl"
      onClick={handleClick}
    >
      <div className={`relative aspect-[16/9] w-full bg-gradient-to-br ${card.bg}`}>
        <div className="absolute inset-0 p-4 sm:p-6">
          <div className="flex h-full flex-col justify-between">
            <div className="flex items-center gap-2">
              <span className={`self-start rounded px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white ${card.accent}`}>
                Featured
              </span>
              <span className="self-start rounded bg-black/40 px-2 py-0.5 text-[10px] font-bold text-white backdrop-blur-sm">
                {card.duration}
              </span>
            </div>
            <h3 className="text-xl font-black leading-tight text-white sm:text-2xl lg:text-3xl [text-shadow:_2px_2px_0_rgba(0,0,0,0.3)]">
              {card.headline}
            </h3>
          </div>
        </div>
        <div className="absolute bottom-2 right-2 flex items-center gap-1.5 rounded-full bg-black/40 px-2 py-1 text-[10px] font-semibold text-white backdrop-blur-sm">
          <span className="h-1.5 w-1.5 rounded-full bg-red-500" />
          LIVE
        </div>
      </div>
      <div className={`px-3 py-2 text-center text-[11px] font-bold uppercase tracking-wider text-white ${card.accent}`}>
        {GLOBAL_BANNER}
      </div>
      <div className="px-3 py-2 text-center text-[10px] text-text-primary/50 sm:text-xs">
        {CHANNEL_ATTRIBUTION}
      </div>

      <div
        ref={contentRef}
        className="overflow-hidden"
      >
        <div ref={detailsRef} className="border-t border-gray-100 px-4 py-3 sm:px-5 sm:py-4">
          <div className="mb-2 flex items-center gap-2">
            <span className={`rounded px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wider text-white ${card.accent === 'bg-rose-500' ? 'bg-rose-500' : card.accent === 'bg-amber-400' ? 'bg-amber-400' : card.accent === 'bg-sky-400' ? 'bg-sky-400' : card.accent === 'bg-yellow-400' ? 'bg-yellow-400' : card.accent === 'bg-lime-400' ? 'bg-lime-400' : 'bg-orange-400'}`}>
              {card.difficulty}
            </span>
          </div>
          <p className="text-xs leading-relaxed text-text-primary/70 sm:text-sm">
            {card.details}
          </p>
          <ul className="mt-2 space-y-1">
            {card.takeaways.map((t, i) => (
              <li key={i} className="flex items-start gap-1.5 text-[11px] text-text-primary/60 sm:text-xs">
                <span className="mt-0.5 h-1 w-1 shrink-0 rounded-full bg-brand-purple" />
                {t}
              </li>
            ))}
          </ul>
          <a
            href={card.youtubeLink}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="mt-3 inline-flex items-center gap-1.5 text-[11px] font-bold text-brand-purple transition-colors hover:text-indigo-700 sm:text-xs"
          >
            Watch on YouTube &rarr;
          </a>
        </div>
      </div>
    </article>
  )
}

export default function EducationalVideosSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: 'start',
    loop: false,
    dragFree: true,
    containScroll: false,
  })
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [expandedId, setExpandedId] = useState(0)

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
      gsap.from('[data-anim="edu-header"]', {
        y: 40,
        opacity: 0,
        stagger: 0.15,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' },
      })
      const cards = gsap.utils.toArray<HTMLElement>('[data-anim="edu-card"]')
      cards.forEach((card, i) => {
        gsap.from(card, {
          y: 60,
          opacity: 0,
          duration: 0.6,
          delay: i * 0.08,
          ease: 'power3.out',
          scrollTrigger: { trigger: card, start: 'top 85%' },
        })
        card.addEventListener('mouseenter', () => {
          gsap.to(card, { y: -4, scale: 1.01, duration: 0.3, ease: 'power2.out' })
        })
        card.addEventListener('mouseleave', () => {
          gsap.to(card, { y: 0, scale: 1, duration: 0.3, ease: 'power2.out' })
        })
      })
    }, sectionRef)

    ScrollTrigger.refresh()
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="bg-white py-10 sm:py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-2 sm:mb-4">
          <span
            data-anim="edu-header"
            className="inline-flex items-center gap-1.5 rounded-full border border-black px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-text-primary sm:gap-2 sm:px-4 sm:py-1.5 sm:text-xs"
          >
            <span className="h-2 w-2 rounded-full bg-brand-purple" />
            EMAIL MARKETING INSIGHTS
          </span>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2
                data-anim="edu-header"
                className="font-heading mt-2 text-3xl font-bold leading-snug tracking-tight sm:mt-3 sm:text-4xl sm:leading-snug lg:text-5xl"
              >
                Over 35 <em className="not-italic text-brand-purple">Educational</em> Videos
              </h2>
              <p
                data-anim="edu-header"
                className="mt-1 text-sm leading-relaxed text-text-primary/60 sm:mt-2 sm:text-base"
              >
                Checkout the latest in the E-commerce Email Marketing space.
              </p>
            </div>
            <button
              data-anim="edu-header"
              type="button"
              className="shrink-0 rounded-lg bg-brand-purple px-4 py-2 text-sm font-bold text-white transition-all hover:brightness-110 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-purple sm:px-6 sm:py-3 sm:text-base"
            >
              Get a Free Email Audit &rarr;
            </button>
          </div>
        </div>

        {/* Desktop 3-column grid */}
        <div className="mt-8 hidden lg:grid lg:grid-cols-3 lg:gap-6">
          {CARDS.map((card) => (
            <VideoCard key={card.id} card={card} index={card.id} isExpanded={expandedId === card.id} onToggle={setExpandedId} />
          ))}
        </div>

        {/* Mobile/tablet Embla carousel */}
        <div className="mt-6 lg:hidden">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex touch-pan-y">
              {CARDS.map((card) => (
                <div
                  key={card.id}
                  className="min-w-0 shrink-0 grow-0 basis-[80%] sm:basis-[45%] px-2"
                >
                  <VideoCard card={card} index={card.id} isExpanded={expandedId === card.id} onToggle={setExpandedId} />
                </div>
              ))}
            </div>
          </div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-white to-transparent" />
        </div>

        {/* Carousel dot navigation (visible only on mobile/tablet) */}
        <div className="mt-4 flex items-center justify-center gap-2 lg:hidden">
          {CARDS.map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => emblaApi?.scrollTo(index)}
              className={`rounded-full transition-all duration-300 ${
                index === selectedIndex
                  ? 'h-2 w-8 bg-brand-purple'
                  : 'h-2 w-2 bg-gray-300'
              }`}
              aria-label={`Go to video card ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
