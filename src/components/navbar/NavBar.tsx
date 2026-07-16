'use client'

import { useState } from 'react'

const NAV_LINKS = [
  'About us',
  'Testimonials',
  'Our Work',
  'Designs',
  'Our AI System',
  'FAQs',
]

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between lg:h-20">
          <div className="flex flex-col items-center leading-none">
            <span className="block h-px w-full bg-text-primary" />
            <span className="block px-1 text-xl font-bold tracking-[0.2em] text-text-primary">
              ZYLORA
            </span>
            <span className="block h-px w-full bg-text-primary" />
          </div>

          <div className="hidden items-center gap-8 lg:flex">
            {NAV_LINKS.map((link) => (
              <a
                key={link}
                href="#"
                className="rounded-sm px-1 py-1.5 text-sm font-medium text-gray-600 transition-colors hover:text-text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-purple"
              >
                {link}
              </a>
            ))}
          </div>

          <button type="button" className="group hidden items-center gap-2 rounded-lg bg-brand-purple px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-purple-dark focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-purple lg:flex">
            Get a Free Email Audit
            <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </button>

          <button
            type="button"
            className="rounded-sm p-2.5 lg:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="border-t border-gray-100 bg-white lg:hidden">
          <div className="space-y-1 px-4 py-4">
            {NAV_LINKS.map((link) => (
              <a
                key={link}
                href="#"
                className="block rounded-sm py-2 text-sm font-medium text-gray-600 transition-colors hover:text-text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-purple"
              >
                {link}
              </a>
            ))}
            <button type="button" className="mt-4 w-full rounded-lg bg-brand-purple px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-purple-dark focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-purple">
              Get a Free Email Audit →
            </button>
          </div>
        </div>
      )}
    </nav>
  )
}
