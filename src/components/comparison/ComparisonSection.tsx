'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import { gsap, ScrollTrigger } from '@/lib/gsap-setup'

const DATA = {
  eyebrow: 'THE TRUTH ABOUT YOUR NUMBERS',
  subtext:
    'Most agencies report what looks good. We report what drives revenue \u2014 and overhaul everything that doesn\u2019t.',
  left: {
    title: 'THE TYPICAL AGENCY OR FREELANCER',
    rows: [
      {
        id: 'vanity-metrics',
        icon: '/assets/icons/Frame-4.svg',
        title: 'Vanity Metrics',
        desc: 'Metrics that do not scale business value',
      },
      {
        id: 'cookie-cutter-flows',
        icon: '/assets/icons/Frame-5.svg',
        title: 'Cookie-Cutter Flows',
        desc: 'One-size-fits-all templated automation sequences',
      },
      {
        id: 'poor-design-work',
        icon: '/assets/icons/Frame-6.svg',
        title: 'Poor Design Work',
        desc: 'Low-fidelity cookie-cutter design execution',
      },
      {
        id: 'ai-generated-copy',
        icon: '/assets/icons/Frame-7.svg',
        title: 'AI-Generated Copy',
        desc: 'Soulless, fully automated copywriting structures',
      },
    ],
  },
  right: {
    title: 'ZYLORA MARKETING',
    rows: [
      {
        id: 'deep-analytics',
        icon: '/assets/icons/Frame.svg',
        title: 'Deep Analytics Access',
        desc: 'Proprietary conversion data and deep analytics access',
      },
      {
        id: 'ai-purchase-tracking',
        icon: '/assets/icons/Frame-1.svg',
        title: 'AI Purchase Tracking',
        desc: 'Purchase-timing AI models optimized per user behavior',
      },
      {
        id: 'direct-designer-access',
        icon: '/assets/icons/Frame-2.svg',
        title: 'Direct Designer Access',
        desc: 'Frictionless client-to-designer collaboration channels',
      },
      {
        id: 'human-written-copy',
        icon: '/assets/icons/Frame-3.svg',
        title: 'Human-Written Copy',
        desc: 'Human-designed layouts with bespoke human-written copy',
      },
    ],
  },
  cta: 'Get a Free Email Audit',
}

export default function ComparisonSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('[data-anim="comparison-header"]', {
        y: 40,
        opacity: 0,
        stagger: 0.2,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
      })

      const mql = window.matchMedia('(max-width: 767px)')
      const offset = mql.matches ? 20 : 60

      gsap.from('[data-anim="comparison-card-left"]', {
        x: -offset,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '[data-anim="comparison-card-left"]',
          start: 'top 80%',
        },
      })

      gsap.from('[data-anim="comparison-card-right"]', {
        x: offset,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '[data-anim="comparison-card-right"]',
          start: 'top 80%',
        },
      })

      gsap.from('[data-anim="comparison-cta"]', {
        y: 30,
        opacity: 0,
        duration: 0.6,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '[data-anim="comparison-cta"]',
          start: 'top 90%',
        },
      })
    }, sectionRef)

    ScrollTrigger.refresh()
    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="bg-white py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-12 max-w-3xl text-center sm:mb-16">
          <span
            data-anim="comparison-header"
            className="inline-flex items-center gap-1.5 rounded-full border border-black px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-text-primary sm:gap-2 sm:px-4 sm:py-1.5 sm:text-xs"
          >
            <span className="h-2 w-2 rounded-full bg-brand-purple" />
            {DATA.eyebrow}
          </span>
          <h2
            data-anim="comparison-header"
            className="font-heading mt-6 text-3xl font-bold leading-snug tracking-tight sm:text-4xl sm:leading-snug lg:text-5xl"
          >
            Your{' '}
            <em className="not-italic text-brand-purple">
              Klaviyo Dashboard
            </em>{' '}
            Is Hiding{' '}
            <br />
            {' '}The Truth About Your Revenue
          </h2>
          <p
            data-anim="comparison-header"
            className="mt-4 text-base leading-relaxed text-text-primary/60 sm:text-lg"
          >
            {DATA.subtext}
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2 lg:gap-8">
          <div
            data-anim="comparison-card-left"
            className="rounded-2xl bg-badge-bg p-6 sm:p-8 lg:p-10"
          >
            <h3 className="mb-6 text-center text-lg font-bold tracking-wide sm:text-xl">
              {DATA.left.title}
            </h3>
            <div className="space-y-4">
              {DATA.left.rows.map((row) => (
                <div
                  key={row.id}
                  className="flex items-start gap-4 rounded-xl bg-white p-4"
                >
                  <Image
                    src={row.icon}
                    alt=""
                    width={40}
                    height={40}
                    className="mt-0.5 shrink-0"
                    aria-hidden
                  />
                  <div>
                    <p className="font-bold text-text-primary">{row.title}</p>
                    <p className="mt-0.5 text-sm text-text-primary/60">
                      {row.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div
            data-anim="comparison-card-right"
            className="rounded-2xl bg-brand-purple p-6 sm:p-8 lg:p-10"
          >
            <h3 className="mb-6 text-center text-lg font-bold tracking-wide text-white sm:text-xl">
              {DATA.right.title}
            </h3>
            <div className="space-y-4">
              {DATA.right.rows.map((row) => (
                <div
                  key={row.id}
                  className="flex items-start gap-4 rounded-xl bg-white/10 p-4"
                >
                  <Image
                    src={row.icon}
                    alt=""
                    width={40}
                    height={40}
                    className="mt-0.5 shrink-0"
                    aria-hidden
                  />
                  <div>
                    <p className="font-bold text-white">{row.title}</p>
                    <p className="mt-0.5 text-sm text-white/70">
                      {row.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div
          data-anim="comparison-cta"
          className="mt-10 text-center sm:mt-12"
        >
          <button
            type="button"
            className="group inline-flex items-center gap-2 rounded-lg bg-brand-purple px-6 py-3 text-sm font-bold text-white transition-all hover:brightness-110 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-purple sm:px-8 sm:py-4 sm:text-base"
          >
            {DATA.cta}
            <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
              {'\u2192'}
            </span>
          </button>
        </div>
      </div>
    </section>
  )
}
