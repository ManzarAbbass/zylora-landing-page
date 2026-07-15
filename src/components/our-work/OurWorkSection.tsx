'use client'

import { useEffect, useRef, useState, useCallback } from 'react'
import Image from 'next/image'
import useEmblaCarousel from 'embla-carousel-react'

const SLIDES = [
  { id: 0, blur: '/assets/our_work/mobile_blur/Group 2147229250.png', sharp: '/assets/our_work/mobile_unblur/Group 2147229255.png', label: 'Open rate: 42%' },
  { id: 1, blur: '/assets/our_work/mobile_blur/Group 2147229251.png', sharp: '/assets/our_work/mobile_unblur/Group 2147229256.png', label: 'CTR: 18.7%' },
  { id: 2, blur: '/assets/our_work/mobile_blur/Group 2147229252.png', sharp: '/assets/our_work/mobile_unblur/Group 2147229257.png', label: 'Revenue: +$23K' },
  { id: 3, blur: '/assets/our_work/mobile_blur/Group 2147229253.png', sharp: '/assets/our_work/mobile_unblur/Group 2147229258.png', label: 'Conv: 8.3%' },
  { id: 4, blur: '/assets/our_work/mobile_blur/Group 2147229254.png', sharp: '/assets/our_work/mobile_unblur/Group 2147229259.png', label: 'ROI: 4.2x' },
]

export default function OurWorkSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: 'start',
    loop: false,
    dragFree: true,
    containScroll: false,
  })
  const [selectedIndex, setSelectedIndex] = useState(2)

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    emblaApi.on('select', onSelect)
    emblaApi.scrollTo(2)
    onSelect()
  }, [emblaApi, onSelect])

  return (
    <section
      ref={sectionRef}
      className="relative mx-auto mt-16 w-full max-w-[1384px] overflow-hidden sm:rounded-3xl bg-brand-purple pb-12 pt-16 sm:mt-20 sm:pb-16 sm:pt-24"
      style={{ backgroundImage: 'url(/assets/our_work/Our%20Work%20BG.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <div className="mx-auto mb-10 max-w-[1384px] px-4 text-center sm:mb-14 sm:px-6 lg:px-8">
        <h2 className="font-heading text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-5xl">
          Our Work Speaks{' '}
          <em className="not-italic text-brand-amber">For Itself</em>
        </h2>
      </div>

      <div className="mx-auto max-w-[1384px] px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex touch-pan-y">
            {SLIDES.map((slide, index) => {
              const isCenter = index === selectedIndex
              return (
                <div
                  key={slide.id}
                  className="min-w-0 shrink-0 grow-0 basis-[80%] transition-all duration-500 sm:basis-[40%] md:basis-[28%] lg:basis-[24%]"
                >
                  <div className={`relative mx-auto w-full transition-all duration-500 ${isCenter ? 'scale-100 opacity-100' : 'scale-[0.85] opacity-60'}`}>
                    <div className="relative aspect-[309/630] w-full">
                      <Image
                        src={slide.sharp}
                        alt={`Email mockup ${slide.id + 1}`}
                        fill
                        className={`object-contain transition-all duration-500 ${isCenter ? 'blur-0' : 'blur-[2px]'}`}
                        sizes="(max-width: 640px) 80vw, (max-width: 768px) 40vw, 24vw"
                      />
                    </div>
                    {isCenter && (
                      <div className="absolute -right-2 -top-2 z-10 rotate-12 rounded bg-brand-amber px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-text-primary shadow-lg sm:-right-3 sm:-top-3 sm:px-3 sm:py-1.5 sm:text-xs">
                        {slide.label}
                      </div>
                    )}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      <div className="mt-8 flex items-center justify-center gap-2 sm:mt-10">
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

      <div className="mt-8 text-center sm:mt-10">
        <button
          type="button"
          className="inline-flex items-center gap-2 rounded-lg bg-brand-amber px-6 py-3 text-sm font-bold text-text-primary transition-all hover:brightness-110 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-amber sm:px-8 sm:py-4 sm:text-base"
        >
          Get a Free Email Audit
          <span className="inline-block">→</span>
        </button>
      </div>
    </section>
  )
}
