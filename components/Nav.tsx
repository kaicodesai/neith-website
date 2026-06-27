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
      {/* Outer diamond */}
      <polygon
        points="14,2 26,14 14,26 2,14"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      {/* Inner diamond */}
      <polygon
        points="14,7 21,14 14,21 7,14"
        stroke="currentColor"
        strokeWidth="0.9"
      />
      {/* Center dot */}
      <circle cx="14" cy="14" r="2" fill="currentColor" />
      {/* Vertical stem */}
      <line x1="14" y1="26" x2="14" y2="35" stroke="currentColor" strokeWidth="1" />
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
            Neith AI
          </span>
        </a>

        <a
          href="#contact"
          className="font-body text-xs font-medium tracking-label uppercase text-ink
                     border border-ink px-5 py-2.5
                     hover:bg-ink hover:text-paper
                     focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand
                     transition-colors duration-200"
        >
          Book a call
        </a>
      </div>
    </header>
  )
}
