'use client'

import { useEffect, useState } from 'react'

function NeithMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 28 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <polygon points="14,2 26,14 14,26 2,14" stroke="currentColor" strokeWidth="1.8" />
      <polygon points="14,7 21,14 14,21 7,14" stroke="currentColor" strokeWidth="0.9" />
      <circle cx="14" cy="14" r="2" fill="currentColor" />
      <line x1="14" y1="26" x2="14" y2="35" stroke="currentColor" strokeWidth="1" />
    </svg>
  )
}

// Shield-shaped nav CTA
function NavShieldButton() {
  return (
    <a
      href="#contact"
      className="relative inline-flex flex-col items-center justify-center text-ink hover:text-brand
                 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand
                 transition-colors duration-200"
      style={{ width: '80px', height: '90px' }}
      aria-label="Book a call"
    >
      <svg
        viewBox="0 0 80 90"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute inset-0 w-full h-full"
        aria-hidden="true"
      >
        <path
          d="M 40 4 C 62 4 74 16 74 34 C 74 62 40 86 40 86 C 40 86 6 62 6 34 C 6 16 18 4 40 4 Z"
          stroke="currentColor" strokeWidth="1.3" fill="none"
        />
        <path
          d="M 40 12 C 58 12 66 22 66 35 C 66 58 40 78 40 78 C 40 78 14 58 14 35 C 14 22 22 12 40 12 Z"
          stroke="currentColor" strokeWidth="0.5" opacity="0.4" fill="none"
        />
      </svg>
      <span className="relative z-10 font-body text-[8px] font-medium tracking-label uppercase text-center leading-relaxed">
        Book<br />a call
      </span>
    </a>
  )
}

// Ankh glyph — replaces the "t" in Neith inline
function AnkhLetter({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 14 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`inline-block h-[1em] w-auto align-middle mx-px ${className ?? ''}`}
      aria-hidden="true"
    >
      <ellipse cx="7" cy="5.5" rx="4.5" ry="5" stroke="currentColor" strokeWidth="1.3" />
      <line x1="7" y1="10.5" x2="7" y2="21" stroke="currentColor" strokeWidth="1.3" />
      <line x1="1" y1="13.5" x2="13" y2="13.5" stroke="currentColor" strokeWidth="1.3" />
    </svg>
  )
}

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-paper/95 backdrop-blur-sm border-b border-bone'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-5 flex items-center justify-between">
        <a
          href="/"
          className="flex items-center gap-3 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand rounded-sm"
          aria-label="Neith AI — home"
        >
          <NeithMark className="w-5 h-auto text-ink group-hover:text-brand transition-colors duration-200" />
          <span className="font-body font-medium text-ink tracking-label text-xs uppercase">
            Nei<AnkhLetter />h AI
          </span>
        </a>

        <NavShieldButton />
      </div>
    </header>
  )
}
