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

// Organic paint blob — solid ink, runs full left edge of page
function PaintBlob() {
  return (
    <svg
      viewBox="0 0 220 1800"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMinYMin meet"
      aria-hidden="true"
      className="absolute top-0 left-0 h-full w-auto max-w-[18vw] pointer-events-none z-0"
      style={{ minHeight: '100%' }}
    >
      <path
        d={`
          M 0 0
          C 60 0 110 8 148 22
          C 178 34 195 52 188 78
          C 180 106 155 112 162 138
          C 170 168 200 172 205 202
          C 210 232 190 248 178 274
          C 164 304 142 308 150 338
          C 158 368 185 374 192 404
          C 199 434 182 454 170 482
          C 156 514 130 520 138 552
          C 146 584 178 590 184 622
          C 190 654 170 672 155 700
          C 138 730 110 736 118 768
          C 126 800 158 806 162 838
          C 166 870 144 888 130 916
          C 114 948 88 952 96 984
          C 104 1016 138 1020 142 1052
          C 146 1084 122 1104 106 1132
          C 88 1164 60 1170 68 1204
          C 76 1238 112 1242 114 1276
          C 116 1310 88 1328 72 1356
          C 54 1388 28 1394 36 1430
          C 44 1466 82 1468 84 1504
          C 86 1540 58 1558 44 1588
          C 28 1622 4 1630 0 1660
          L 0 1800
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
        <PaintBlob />
        <div className="relative z-10">
          <Nav />
          <main>{children}</main>
        </div>
      </body>
    </html>
  )
}
