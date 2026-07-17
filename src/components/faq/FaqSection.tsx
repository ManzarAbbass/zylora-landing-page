'use client'

import { useEffect, useRef, useState } from 'react'
import { gsap, ScrollTrigger } from '@/lib/gsap-setup'

const FAQ_DATA = [
  {
    id: 1,
    question: 'Will I be handed over to freelancers?',
    answer:
      'No. Every Zylora engagement is managed by our core in-house team of strategists, designers, and copywriters. You get a dedicated account manager who oversees your entire campaign lifecycle — from initial strategy through execution and reporting. We never outsource client work to freelancers or offshore contractors.',
  },
  {
    id: 2,
    question: 'How do I know you can do what you say you can?',
    answer:
      'We publish our client results transparently. Our current portfolio shows an average 42% open rate improvement, 18.7% click-through rates, and 4.2x ROI across active campaigns. Beyond the metrics, we offer a free email audit that benchmarks your current performance against industry standards — no commitment required.',
  },
  {
    id: 3,
    question: 'Do I need an email provider?',
    answer:
      'Yes, you will need an active email service provider — we work primarily with Klaviyo, Mailchimp, HubSpot, and Shopify Email. If you already have one, we integrate directly into your existing account. If you do not, we help you select and set up the right platform for your business size and technical requirements.',
  },
  {
    id: 4,
    question: 'What do I need to do?',
    answer:
      'Very little. After onboarding, your weekly commitment is roughly 30–45 minutes: reviewing campaign drafts, approving creative concepts, and providing brief feedback. Our team handles everything else — strategy development, copywriting, design, automation setup, segmentation, A/B testing, and reporting.',
  },
  {
    id: 5,
    question: 'Will email marketing work for me?',
    answer:
      'Email marketing delivers an average of $36 for every $1 spent across e-commerce, but results depend on execution quality. We have yet to encounter a client in the DTC or e-commerce space where a properly structured email program — combining strategic flows, compelling creative, and data-driven optimization — failed to generate a positive return within the first 90 days.',
  },
]

function AccordionItem({
  item,
  isOpen,
  onToggle,
  index,
}: {
  item: (typeof FAQ_DATA)[number]
  isOpen: boolean
  onToggle: (id: number) => void
  index: number
}) {
  const contentRef = useRef<HTMLDivElement>(null)
  const initialized = useRef(false)
  const iconRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    if (!contentRef.current) return
    gsap.set(contentRef.current, { height: 0, opacity: 0 })
    initialized.current = true
  }, [])

  useEffect(() => {
    if (!initialized.current || !contentRef.current) return

    if (isOpen) {
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
      if (iconRef.current) {
        gsap.to(iconRef.current, {
          rotation: 45,
          duration: 0.3,
          ease: 'power2.out',
        })
      }
    } else {
      gsap.to(contentRef.current, {
        height: 0,
        opacity: 0,
        duration: 0.35,
        ease: 'power2.inOut',
      })
      if (iconRef.current) {
        gsap.to(iconRef.current, {
          rotation: 0,
          duration: 0.3,
          ease: 'power2.out',
        })
      }
    }
  }, [isOpen])

  return (
    <div
      data-anim="faq-row"
      className="cursor-pointer rounded-2xl bg-white px-5 py-4 sm:px-8 sm:py-5 lg:px-10 lg:py-6"
      onClick={() => onToggle(isOpen ? 0 : item.id)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault()
          onToggle(isOpen ? 0 : item.id)
        }
      }}
      aria-expanded={isOpen}
    >
      <div className="flex items-center justify-between">
        <span className="text-sm font-bold text-[#111111] sm:text-base lg:text-lg">
          {item.question}
        </span>
        <span
          ref={iconRef}
          className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gray-100 text-lg font-bold text-[#111111] sm:h-10 sm:w-10 sm:text-xl"
        >
          +
        </span>
      </div>
      <div ref={contentRef} className="overflow-hidden">
        <p className="pt-4 text-sm leading-relaxed text-[#111111]/70 sm:text-base">
          {item.answer}
        </p>
      </div>
    </div>
  )
}

export default function FaqSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [openId, setOpenId] = useState(0)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('[data-anim="faq-header"]', {
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

      const rows = gsap.utils.toArray<HTMLElement>('[data-anim="faq-row"]')
      rows.forEach((row) => {
        gsap.from(row, {
          y: 40,
          opacity: 0,
          duration: 0.6,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: row,
            start: 'top 85%',
          },
        })
      })
    }, sectionRef)

    ScrollTrigger.refresh()
    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative mx-auto mt-6 w-full max-w-[1384px] overflow-hidden sm:rounded-[2rem] bg-[#6366F1] pb-16 pt-10 sm:mt-8 sm:pb-20 sm:pt-14"
      style={{
        backgroundImage: 'url(/assets/our_work/Our%20Work%20BG.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >

      <div className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 text-center sm:mb-12">
          <h2
            data-anim="faq-header"
            className="font-heading text-3xl font-bold leading-snug tracking-tight text-white sm:text-4xl sm:leading-snug lg:text-5xl"
          >
            Frequently Asked <em className="not-italic text-[#FACC15]">Questions</em>
          </h2>
        </div>

        <div className="space-y-3 sm:space-y-4">
          {FAQ_DATA.map((item) => (
            <AccordionItem
              key={item.id}
              item={item}
              index={item.id}
              isOpen={openId === item.id}
              onToggle={setOpenId}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
