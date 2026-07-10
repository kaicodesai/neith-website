'use client'

import { useEffect, useState } from 'react'

const NAV_LINKS = [
  { label: 'Services', href: '#services' },
  { label: 'Systems', href: '#systems' },
  { label: 'About', href: '#about' },
  { label: 'Process', href: '#process' },
  { label: 'Contact', href: '#contact' },
]

function NeithMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 28 36" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
      <polygon points="14,2 26,14 14,26 2,14" stroke="currentColor" strokeWidth="1.8" />
      <polygon points="14,7 21,14 14,21 7,14" stroke="currentColor" strokeWidth="0.9" />
      <circle cx="14" cy="14" r="2" fill="currentColor" />
      <line x1="14" y1="26" x2="14" y2="35" stroke="currentColor" strokeWidth="1" />
    </svg>
  )
}

function AnkhLetter({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 14 22" fill="none" xmlns="http://www.w3.org/2000/svg"
      className={`inline-block h-[1em] w-auto align-middle mx-px ${className ?? ''}`} aria-hidden="true">
      <ellipse cx="7" cy="5.5" rx="4.5" ry="5" stroke="currentColor" strokeWidth="1.3" />
      <line x1="7" y1="10.5" x2="7" y2="21" stroke="currentColor" strokeWidth="1.3" />
      <line x1="1" y1="13.5" x2="13" y2="13.5" stroke="currentColor" strokeWidth="1.3" />
    </svg>
  )
}

function BookCallButton({ onClick }: { onClick?: () => void }) {
  return (
    <a
      href="#contact"
      onClick={onClick}
      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-ink/30
                 font-body text-xs font-medium tracking-label uppercase text-ink
                 hover:border-brand hover:text-brand transition-colors duration-200
                 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
    >
      Book a call
      <svg viewBox="0 0 16 8" fill="none" className="w-4 h-auto" aria-hidden="true">
        <line x1="0" y1="4" x2="12" y2="4" stroke="currentColor" strokeWidth="1" />
        <path d="M9 1 L13 4 L9 7" stroke="currentColor" strokeWidth="1" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </a>
  )
}

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const close = () => setMenuOpen(false)

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled || menuOpen
            ? 'bg-paper/95 backdrop-blur-sm border-b border-bone'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-4 flex items-center justify-between gap-8">
          <a
            href="/"
            onClick={close}
            className="flex items-center gap-3 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand rounded-sm shrink-0"
            aria-label="Neith AI — home"
          >
            <NeithMark className="w-8 h-auto text-ink group-hover:text-brand transition-colors duration-200" />
            <span className="font-body font-medium text-ink tracking-label text-sm uppercase">
              Nei<AnkhLetter />h AI
            </span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Site navigation">
            {NAV_LINKS.map(({ label, href }) => (
              <a key={label} href={href}
                className="font-body text-xs tracking-label uppercase text-slate/70 hover:text-ink transition-colors duration-200
                           focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand rounded-sm">
                {label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            {/* Desktop CTA */}
            <div className="hidden md:block">
              <BookCallButton />
            </div>

            {/* Mobile hamburger */}
            <button
              className="md:hidden w-11 h-11 flex items-center justify-center text-ink
                         focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand rounded-sm"
              onClick={() => setMenuOpen(o => !o)}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
            >
              <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" aria-hidden="true">
                {menuOpen ? (
                  <>
                    <line x1="4" y1="4" x2="20" y2="20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    <line x1="20" y1="4" x2="4"  y2="20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  </>
                ) : (
                  <>
                    <line x1="3" y1="7"  x2="21" y2="7"  stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    <line x1="3" y1="12" x2="21" y2="12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    <line x1="3" y1="17" x2="21" y2="17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  </>
                )}
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile full-screen menu */}
      <div
        className={`fixed inset-0 z-40 bg-paper flex flex-col md:hidden transition-opacity duration-200 ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        aria-hidden={!menuOpen}
      >
        <div className="h-16 shrink-0" />
        <nav className="flex flex-col px-6 pt-4 flex-1" aria-label="Mobile navigation">
          {NAV_LINKS.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              onClick={close}
              className="font-display font-medium text-3xl text-ink py-5 border-b border-bone
                         hover:text-brand transition-colors duration-200
                         focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
            >
              {label}
            </a>
          ))}
        </nav>
        <div className="px-6 pb-12 pt-6 shrink-0">
          <BookCallButton onClick={close} />
        </div>
      </div>
    </>
  )
}
