'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import { gsap, ScrollTrigger } from '@/lib/gsap-setup'

const CARDS = [
  {
    id: 1,
    image: '/assets/how_we_can_help/Object.jpg',
    category: 'FASHION ECOMMERCE',
    brand: 'Velora Studio',
    narrative: 'Came to us with scattered email efforts. We built their automation flows and helped them retain more customers consistently.',
    featured: true,
  },
  {
    id: 2,
    image: '/assets/how_we_can_help/Object (1).jpg',
    category: 'HEALTH & WELLNESS',
    brand: 'Lumex Co.',
    narrative: 'No email strategy in place. We set up their full system and improved their subscriber engagement significantly.',
    featured: false,
  },
  {
    id: 3,
    image: '/assets/how_we_can_help/Object (2).jpg',
    category: 'HOME & LIFESTYLE',
    brand: 'Nestly',
    narrative: 'Inconsistent campaigns with no direction. We streamlined their email marketing and built predictable revenue flows.',
    featured: false,
  },
]

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
    }, sectionRef)

    ScrollTrigger.refresh()
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="bg-white pt-2 sm:pt-4 lg:pt-6 pb-10 sm:pb-20 lg:pb-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mx-auto mb-6 max-w-3xl text-center sm:mb-10">
          <span
            data-anim="success-header"
            className="inline-flex items-center gap-1.5 rounded-full border border-black px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-text-primary sm:gap-2 sm:px-4 sm:py-1.5 sm:text-xs"
          >
            <span className="h-2 w-2 rounded-full bg-brand-purple" />
            CLIENT SUCCESS STORIES
          </span>
          <h2
            data-anim="success-header"
            className="font-heading mt-3 text-2xl font-bold leading-snug tracking-tight sm:text-3xl sm:leading-snug lg:text-4xl"
          >
            We <em className="not-italic text-brand-purple">Help</em> Brands Take Control Of Their Email{' '}
            <em className="not-italic text-brand-purple">Revenue</em>
          </h2>
          <p
            data-anim="success-header"
            className="mt-2 text-sm leading-relaxed text-text-primary/60 sm:text-base"
          >
            Real results from real partnerships — no fluff, just execution.
          </p>
        </div>

        <div className="grid gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {CARDS.map((card) => (
            <article key={card.id} data-anim="success-card">
              <div
                className={`overflow-hidden rounded-2xl border border-gray-200 ${card.featured ? 'bg-brand-purple/5' : 'bg-gray-50'}`}
              >
                <div className="relative aspect-[4/3] w-full sm:aspect-[4/3] max-h-[200px]">
                  <Image
                    src={card.image}
                    alt={`${card.brand} client portrait`}
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <div
                  className={`relative z-10 -mt-6 rounded-xl px-2 pb-2 pt-3 shadow-sm sm:-mt-8 sm:px-3 sm:pb-2 sm:pt-5 ${card.featured ? 'bg-brand-purple text-white' : 'bg-white'}`}
                >
                  <span className={`text-[11px] font-semibold tracking-[0.12em] ${card.featured ? 'text-white/80' : 'text-brand-purple'}`}>
                    {card.category}
                  </span>
                  <h3 className={`mt-1 text-base font-bold sm:text-lg ${card.featured ? 'text-white' : 'text-text-primary'}`}>
                    {card.brand}
                  </h3>
                  <p className={`mt-1 text-xs leading-relaxed ${card.featured ? 'text-white/70' : 'text-text-primary/60'}`}>
                    {card.narrative}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
