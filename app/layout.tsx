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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${fraunces.variable} ${instrumentSans.variable}`}>
      <body className="bg-paper font-body text-slate antialiased">
        <Nav />
        <main>{children}</main>
      </body>
    </html>
  )
}
