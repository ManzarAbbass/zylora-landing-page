'use client'

import { useEffect, useRef } from 'react'
import { gsap, ScrollTrigger } from '@/lib/gsap-setup'

type CardTheme = 'purple' | 'amber' | 'slate'

interface CardConfig {
  id: number
  category: string
  brand: string
  initials: string
  narrative: string
  theme: CardTheme
  tagline: string
}

const CARDS: CardConfig[] = [
  {
    id: 1,
    category: 'FASHION ECOMMERCE',
    brand: 'Velora Studio',
    initials: 'VS',
    narrative: 'Came to us with scattered email efforts. We built their automation flows and helped them retain more customers consistently.',
    theme: 'purple',
    tagline: 'Automation & Retention-Focused',
  },
  {
    id: 2,
    category: 'HEALTH & WELLNESS',
    brand: 'Lumex Co.',
    initials: 'LC',
    narrative: 'No email strategy in place. We set up their full system and improved their subscriber engagement significantly.',
    theme: 'amber',
    tagline: 'Full-System Implementation',
  },
  {
    id: 3,
    category: 'HOME & LIFESTYLE',
    brand: 'Nestly',
    initials: 'NE',
    narrative: 'Inconsistent campaigns with no direction. We streamlined their email marketing and built predictable revenue flows.',
    theme: 'slate',
    tagline: 'Streamlined Revenue Flows',
  },
]

function SparkleIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2l1.5 6.5L20 9l-5 4.5 1.5 6.5L12 16l-6.5 4L7 13.5 2 9l6.5-0.5L12 2z" />
    </svg>
  )
}

export default function ClientSuccessCardsSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('[data-anim="success-header"]', {
        y: 40,
        opacity: 0,
        stagger: 0.2,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' },
      })
      gsap.from('[data-anim="success-card"]', {
        y: 60,
        opacity: 0,
        stagger: 0.25,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: { trigger: '[data-anim="success-card"]', start: 'top 85%' },
      })
      gsap.from('[data-anim="float-deco"]', {
        y: () => Math.random() * 40 - 20,
        x: () => Math.random() * 40 - 20,
        opacity: 0,
        duration: 1.2,
        ease: 'power2.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 70%' },
      })
    }, sectionRef)

    ScrollTrigger.refresh()
    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden py-10 sm:py-16 lg:py-24"
      style={{
        background: 'linear-gradient(180deg, #FAFAF8 0%, #FFFFFF 50%, #F5F3FF 100%)',
      }}
    >
      {/* Decorative background elements */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
        <div
          data-anim="float-deco"
          className="absolute -left-8 top-20 h-32 w-32 rounded-full border border-brand-purple/8 sm:-left-16 sm:h-48 sm:w-48 lg:h-64 lg:w-64"
        />
        <div
          data-anim="float-deco"
          className="absolute -right-8 top-40 h-24 w-24 rounded-full border border-brand-amber/8 sm:-right-12 sm:h-36 sm:w-36 lg:h-48 lg:w-48"
        />
        <div
          data-anim="float-deco"
          className="absolute bottom-16 left-1/3 h-16 w-16 rounded-full bg-brand-purple/3 sm:bottom-20 sm:h-24 sm:w-24 lg:h-32 lg:w-32"
        />
        <div className="absolute right-1/4 top-32 hidden sm:block">
          <SparkleIcon className="h-4 w-4 text-brand-amber/20 sm:h-5 sm:w-5 lg:h-6 lg:w-6" />
        </div>
        <div className="absolute bottom-32 left-1/4 hidden sm:block">
          <SparkleIcon className="h-3 w-3 text-brand-purple/15 sm:h-4 sm:w-4" />
        </div>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-6 max-w-3xl text-center sm:mb-10 lg:mb-14">
          <span
            data-anim="success-header"
            className="inline-flex items-center gap-1.5 rounded-full border border-black/10 bg-white px-2.5 py-1 text-[9px] font-semibold uppercase tracking-wide text-text-primary shadow-xs sm:gap-2 sm:px-4 sm:py-1.5 sm:text-[10px] lg:text-xs"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-brand-purple" />
            CLIENT SUCCESS STORIES
          </span>
          <h2
            data-anim="success-header"
            className="font-heading mt-3 text-2xl font-bold leading-tight tracking-tight sm:mt-4 sm:text-3xl sm:leading-tight lg:text-5xl"
          >
            We <em className="not-italic text-brand-purple">Help</em> Brands Take Control Of Their Email{' '}
            <em className="not-italic text-brand-purple">Revenue</em>
          </h2>
          <p
            data-anim="success-header"
            className="mt-2 text-xs leading-relaxed text-text-primary/50 sm:mt-3 sm:text-sm lg:text-base"
          >
            Real results from real partnerships — no fluff, just execution.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:gap-8">
          {CARDS.map((card, idx) => {
            const isPurple = card.theme === 'purple'
            const isAmber = card.theme === 'amber'
            const headerBg = isPurple
              ? 'bg-gradient-to-br from-brand-purple to-indigo-700'
              : isAmber
                ? 'bg-gradient-to-br from-brand-amber to-amber-600'
                : 'bg-gradient-to-br from-slate-800 to-slate-900'
            const textLight = isPurple || card.theme === 'slate'
            const badgeStyle = isPurple
              ? 'bg-white/20 text-white'
              : isAmber
                ? 'bg-amber-800/15 text-amber-900'
                : 'bg-white/20 text-white'
            const tagColor = isPurple
              ? 'text-brand-purple'
              : isAmber
                ? 'text-amber-700'
                : 'text-slate-700'

            return (
              <article
                key={card.id}
                data-anim="success-card"
                className="group relative overflow-hidden rounded-2xl bg-white shadow-md transition-all duration-500 hover:-translate-y-1 hover:shadow-xl sm:rounded-3xl sm:hover:-translate-y-2"
              >
                {/* Colored header block */}
                <div className={`relative flex h-36 items-end overflow-hidden sm:h-44 lg:h-52 ${headerBg}`}>
                  {/* Decorative pattern overlay */}
                  <div className="absolute inset-0 opacity-10">
                    <div className="absolute -right-4 -top-4 h-20 w-20 rounded-full border-[3px] border-white sm:-right-6 sm:-top-6 sm:h-28 sm:w-28 lg:h-32 lg:w-32" />
                    <div className="absolute -bottom-3 -left-3 h-16 w-16 rounded-full border-2 border-white/60 sm:-bottom-4 sm:-left-4 sm:h-20 sm:w-20 lg:h-24 lg:w-24" />
                    <div className="absolute right-6 top-3 flex gap-1 sm:right-8 sm:top-4">
                      {[...Array(3)].map((_, i) => (
                        <span key={i} className="h-0.5 w-0.5 rounded-full bg-white/40 sm:h-1 sm:w-1" />
                      ))}
                    </div>
                    <div className="absolute bottom-4 left-5 flex gap-1.5 sm:bottom-6 sm:left-8 sm:gap-2">
                      {[...Array(4)].map((_, i) => (
                        <span
                          key={i}
                          className="inline-block h-0.5 w-2.5 rounded-full bg-white/30 sm:w-4"
                          style={{ opacity: 1 - i * 0.2 }}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Giant initials */}
                  <span
                    className={`absolute bottom-1 right-2 select-none text-[72px] font-black leading-none tracking-tighter sm:bottom-2 sm:right-4 sm:text-[100px] lg:text-[140px] ${textLight ? 'text-white/10' : 'text-black/10'}`}
                  >
                    {card.initials}
                  </span>

                  {/* Icon badge in header */}
                  <div className="relative z-10 mb-4 ml-4 sm:mb-5 sm:ml-6">
                    <div className={`flex h-10 w-10 items-center justify-center rounded-xl shadow-lg backdrop-blur-sm transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6 sm:h-12 sm:w-12 sm:rounded-2xl lg:h-14 lg:w-14 ${textLight ? 'bg-white/20 text-white' : 'bg-black/10 text-amber-900'}`}>
                      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5 sm:h-6 sm:w-6 lg:h-7 lg:w-7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        {isPurple && <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />}
                        {isAmber && <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />}
                        {card.theme === 'slate' && (
                          <>
                            <path d="M3 9.5L12 3l9 6.5V20a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9.5z" />
                            <path d="M9 21V12h6v9" />
                          </>
                        )}
                      </svg>
                    </div>
                  </div>

                  {/* Category badge */}
                  <div className="absolute right-3 top-3 sm:right-5 sm:top-4">
                    <span className={`inline-block rounded-full px-2 py-0.5 text-[7px] font-bold uppercase tracking-widest sm:px-3 sm:py-1 sm:text-[8px] lg:text-[9px] ${badgeStyle}`}>
                      {card.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="px-4 pb-6 pt-4 sm:px-6 sm:pb-7 sm:pt-5 lg:px-7 lg:pb-8 lg:pt-6">
                  <div className="mb-1 flex items-center gap-1.5 sm:gap-2">
                    <span className={`inline-block h-1 w-1 rounded-full sm:h-1.5 sm:w-1.5 ${isPurple ? 'bg-brand-purple' : isAmber ? 'bg-brand-amber' : 'bg-slate-700'}`} />
                    <span className="text-[9px] font-semibold uppercase tracking-wider text-text-primary/40 sm:text-[10px] lg:text-[11px]">
                      Case Study {String(idx + 1).padStart(2, '0')}
                    </span>
                  </div>

                  <h3 className={`font-heading text-lg font-bold leading-tight tracking-tight sm:text-xl lg:text-2xl ${isPurple ? 'text-brand-purple' : isAmber ? 'text-amber-800' : 'text-slate-800'}`}>
                    {card.brand}
                  </h3>

                  <div className={`my-2 h-0.5 w-8 rounded-full sm:my-3 sm:w-10 ${isPurple ? 'bg-brand-purple/20' : isAmber ? 'bg-brand-amber/20' : 'bg-slate-300'}`} />

                  <p className="text-xs leading-relaxed text-text-primary/60 sm:text-sm">
                    {card.narrative}
                  </p>

                  <div className={`mt-4 flex items-center gap-1.5 text-[11px] font-bold sm:mt-5 sm:text-xs ${tagColor}`}>
                    <SparkleIcon className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
                    {card.tagline}
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
