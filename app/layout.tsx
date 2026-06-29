import type { Metadata } from 'next'
import { Fraunces, Instrument_Sans } from 'next/font/google'
import Nav from '@/components/Nav'
import './globals.css'

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces',
  display: 'swap',
  style: ['normal', 'italic'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
})

const instrumentSans = Instrument_Sans({
  subsets: ['latin'],
  variable: '--font-instrument',
  display: 'swap',
  weight: ['400', '500', '600'],
  style: ['normal', 'italic'],
})

export const metadata: Metadata = {
  title: 'Neith AI — Intelligent Business Systems',
  description:
    'Production-grade AI automation built by founders who have been inside large operations at Amazon, Walmart, Lyft, and Google. n8n, Claude API, HubSpot, Supabase — documented, delivered, done.',
  keywords: [
    'AI automation',
    'business automation',
    'n8n automation',
    'Claude API',
    'workflow automation',
    'CRM automation',
    'AI agency',
  ],
  openGraph: {
    title: 'Neith AI — Intelligent Business Systems',
    description:
      'We eliminate the manual layer between your tools, your team, and your growth.',
    type: 'website',
  },
}

// Left-side paint blob — top third of page
function PaintBlobLeft() {
  return (
    <svg
      viewBox="0 0 100 600"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMinYMin meet"
      aria-hidden="true"
      className="absolute top-0 left-0 pointer-events-none z-0 w-[7vw] max-w-[90px]"
    >
      <path
        d={`
          M 0 0
          C 28 0 52 6 68 18
          C 82 28 90 44 84 64
          C 78 84 58 90 62 112
          C 66 136 86 142 88 168
          C 90 194 74 210 64 234
          C 52 262 34 268 40 296
          C 46 324 70 330 72 358
          C 74 386 54 402 40 428
          C 24 458 4 464 0 490
          L 0 600
          Z
        `}
        fill="#111010"
      />
    </svg>
  )
}

// Right-side paint blob — middle-to-bottom of page
function PaintBlobRight() {
  return (
    <svg
      viewBox="0 0 100 700"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMaxYMin meet"
      aria-hidden="true"
      className="absolute top-[38%] right-0 pointer-events-none z-0 w-[7vw] max-w-[90px]"
    >
      <path
        d={`
          M 100 0
          C 72 0 48 8 32 22
          C 16 36 8 56 14 80
          C 20 104 42 110 38 136
          C 34 162 12 170 10 198
          C 8 226 26 244 30 272
          C 34 300 18 318 14 346
          C 10 376 28 392 32 420
          C 36 450 20 468 16 498
          C 10 532 0 548 0 580
          L 0 700
          L 100 700
          Z
        `}
        fill="#111010"
      />
    </svg>
  )
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${fraunces.variable} ${instrumentSans.variable}`}>
      <body className="relative bg-paper font-body text-slate antialiased overflow-x-hidden">
        <PaintBlobLeft />
        <PaintBlobRight />
        <div className="relative z-10">
          <Nav />
          <main>{children}</main>
        </div>
      </body>
    </html>
  )
}
