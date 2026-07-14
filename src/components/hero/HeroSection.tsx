'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('[data-anim="fade-up"]', {
        y: 40,
        opacity: 0,
        stagger: 0.15,
        duration: 0.8,
        ease: 'power3.out',
      })

      gsap.from('[data-anim="card"]', {
        x: 80,
        opacity: 0,
        rotation: 8,
        duration: 1,
        ease: 'power3.out',
        delay: 0.4,
      })

      gsap.from('[data-anim="badge"]', {
        scale: 0,
        opacity: 0,
        stagger: 0.2,
        duration: 0.6,
        ease: 'back.out(1.7)',
        delay: 0.8,
      })
    }, sectionRef)

    ScrollTrigger.refresh()
    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen overflow-hidden bg-white pt-16 lg:pt-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-8 md:gap-12 lg:min-h-[calc(100vh-8rem)] lg:grid-cols-2">
          {/* Left Column — Content */}
          <div>
            <div
              data-anim="fade-up"
              className="mb-4 inline-flex items-center gap-2 rounded-full border border-black px-3 py-1 text-[10px] font-semibold uppercase tracking-wide text-text-primary sm:mb-6 sm:px-4 sm:py-1.5 sm:text-xs"
            >
              <span className="h-2 w-2 rounded-full bg-brand-purple" />
              OVER 35+ EDUCATIONAL VIDEOS ON YOUTUBE
            </div>

            <h1
              data-anim="fade-up"
              className="font-heading font-semibold text-3xl leading-tight sm:text-5xl lg:text-6xl xl:text-7xl"
            >
              Boutique{' '}
              <em className="not-italic text-brand-purple">Email</em>{' '}
              Agency That Takes Your Growth Seriously
            </h1>

            <p
              data-anim="fade-up"
              className="mt-4 max-w-lg text-base leading-relaxed text-gray-600 sm:mt-6 sm:text-lg sm:leading-relaxed sm:text-xl"
            >
              We build bespoke brand scaling frameworks that deliver real,
              measurable growth — backed by a{' '}
              <span className="font-semibold text-brand-purple">
                guarantee
              </span>
              .
            </p>

            <button
              data-anim="fade-up"
              className="group mt-6 flex w-full items-center justify-center gap-2 rounded-lg bg-brand-purple px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-purple-dark sm:w-auto sm:px-8 sm:py-4 sm:text-base"
            >
              Get a Free Email Audit
              <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </button>
          </div>

          {/* Right Column — Image */}
          <div className="relative flex items-center justify-center">
            <div className="relative h-[250px] w-full sm:h-[500px] lg:h-[600px]">
              <Image
                data-anim="card"
                src="/assets/hero/Hero Image.png"
                alt="Email marketing dashboard preview"
                fill
                className="object-contain"
                preload
              />

              {/* Floating Badge 1 — Bespoke Designs — top left */}
              <div
                data-anim="badge"
                className="absolute left-0 -top-4 z-20 max-w-[130px] rounded-xl bg-white px-2 py-1.5 shadow-lg sm:left-4 sm:-top-1 sm:max-w-[200px] sm:px-4 sm:py-3"
              >
                <p className="text-[10px] font-semibold text-text-primary sm:text-xs">
                  Bespoke Designs
                </p>
                <p className="mt-0.5 text-[8px] text-gray-500 sm:text-[10px]">
                  — By real graphic designers
                </p>
              </div>

              {/* Floating Badge 2 — Real Reporting — bottom right */}
              <div
                data-anim="badge"
                className="absolute bottom-1 right-0 z-20 max-w-[130px] rounded-xl bg-white px-2 py-1.5 shadow-lg sm:bottom-2 sm:right-4 sm:max-w-[200px] sm:px-4 sm:py-3"
              >
                <p className="text-[10px] font-semibold text-text-primary sm:text-xs">
                  Real reporting
                </p>
                <p className="mt-0.5 text-[8px] text-gray-500 sm:text-[10px]">
                  — Based off brand data
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
