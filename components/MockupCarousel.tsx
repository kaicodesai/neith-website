'use client'

import { useState } from 'react'

// ── Mockup 1: KPI Command Center ──────────────────────────────────────────────
function KPIDashboard() {
  const bars = [28, 35, 22, 40, 47, 38, 51, 44, 39, 52, 48, 55, 47, 61]
  return (
    <svg viewBox="0 0 800 480" className="w-full h-full" aria-label="KPI dashboard mockup">
      <rect width="800" height="480" fill="#0D1B14" />
      {/* Nav bar */}
      <rect width="800" height="44" fill="#0A1510" />
      <text x="20" y="28" fill="#2A5C3F" fontSize={12} fontWeight="600" fontFamily="system-ui" letterSpacing={2}>NEITH AI</text>
      <text x="96" y="28" fill="#ADA69B" fontSize={11} fontFamily="system-ui">· Lead Intelligence</text>
      <circle cx="758" cy="22" r="5" fill="#2A5C3F" />
      <text x="770" y="26" fill="#2A5C3F" fontSize={9} fontFamily="system-ui">LIVE</text>
      {/* KPI cards */}
      {[
        { label: 'LEADS SCORED', val: '47',   sub: '↑ 12 vs yesterday',    c: '#2A5C3F' },
        { label: 'HRS SAVED / WK', val: '12.5', sub: '↑ 3.5 from last week', c: '#C06044' },
        { label: 'DEALS CREATED', val: '8',   sub: '↑ 2 today',             c: '#2A5C3F' },
        { label: 'ROUTING ACCURACY', val: '96%', sub: '30-day average',     c: '#2A5C3F' },
      ].map((k, i) => (
        <g key={i}>
          <rect x={12 + i * 194} y={54} width={182} height={88} rx={4} fill="#0F1E18" stroke="#1A3324" strokeWidth={0.8} />
          <text x={24 + i * 194} y={72} fill="#ADA69B" fontSize={7.5} fontFamily="system-ui" letterSpacing={1.2}>{k.label}</text>
          <text x={24 + i * 194} y={115} fill="#F0EDE6" fontSize={34} fontWeight="700" fontFamily="system-ui">{k.val}</text>
          <text x={24 + i * 194} y={132} fill={k.c} fontSize={9} fontFamily="system-ui">{k.sub}</text>
        </g>
      ))}
      {/* Chart */}
      <rect x="12" y="154" width="506" height="196" rx={4} fill="#0F1E18" />
      <text x="24" y="174" fill="#ADA69B" fontSize={7.5} fontFamily="system-ui" letterSpacing={1.2}>LEADS SCORED — LAST 14 DAYS</text>
      {bars.map((h, i) => (
        <rect key={i} x={28 + i * 33} y={316 - h * 2.6} width={22} height={h * 2.6} rx={2}
          fill="#2A5C3F" fillOpacity={i === 13 ? 1 : 0.4} />
      ))}
      <line x1="24" y1="317" x2="506" y2="317" stroke="#1A3324" strokeWidth={0.8} />
      {/* Activity feed */}
      <rect x="530" y="154" width="258" height="196" rx={4} fill="#0F1E18" />
      <text x="542" y="174" fill="#ADA69B" fontSize={7.5} fontFamily="system-ui" letterSpacing={1.2}>RECENT ACTIVITY</text>
      {[
        { t: 'Lead scored — 9/10 → HubSpot', s: '2 min ago', d: '#2A5C3F' },
        { t: 'Deal created — Sarah M.', s: '2 min ago', d: '#2A5C3F' },
        { t: 'Slack alert sent to #sales', s: '3 min ago', d: '#C06044' },
        { t: 'Lead scored — 3/10 → Nurture', s: '9 min ago', d: '#ADA69B' },
        { t: 'Email sequence triggered', s: '9 min ago', d: '#2A5C3F' },
      ].map((item, i) => (
        <g key={i}>
          <circle cx="543" cy={198 + i * 30} r={3.5} fill={item.d} />
          <text x="555" y={202 + i * 30} fill="#F0EDE6" fontSize={9.5} fontFamily="system-ui">{item.t}</text>
          <text x="555" y={214 + i * 30} fill="#ADA69B" fontSize={8} fontFamily="system-ui">{item.s}</text>
        </g>
      ))}
      {/* Workflow strips */}
      <rect y="362" width="800" height="118" fill="#0A1510" />
      <text x="18" y="382" fill="#ADA69B" fontSize={7.5} fontFamily="system-ui" letterSpacing={1.2}>WORKFLOW STATUS</text>
      {[
        { n: 'Lead Qualification', s: 'Running',    c: '#2A5C3F', r: '1,247 lifetime runs' },
        { n: 'Client Onboarding',  s: '2 Active',   c: '#2A5C3F', r: '94 runs this month'  },
        { n: 'Weekly Report',      s: 'Mon 7:00 AM', c: '#C06044', r: 'Scheduled'           },
        { n: 'Content Pipeline',   s: 'Idle',        c: '#ADA69B', r: 'On demand'           },
      ].map((wf, i) => (
        <g key={i}>
          <rect x={12 + i * 194} y={390} width={182} height={72} rx={4} fill="#0F1E18" />
          <circle cx={28 + i * 194} cy={412} r={4} fill={wf.c} />
          <text x={38 + i * 194} y={416} fill="#F0EDE6" fontSize={10} fontFamily="system-ui">{wf.n}</text>
          <text x={38 + i * 194} y={430} fill={wf.c} fontSize={9} fontFamily="system-ui">{wf.s}</text>
          <text x={38 + i * 194} y={446} fill="#ADA69B" fontSize={8} fontFamily="system-ui">{wf.r}</text>
        </g>
      ))}
    </svg>
  )
}

// ── Mockup 2: Workflow Status Monitor ─────────────────────────────────────────
function WorkflowMonitor() {
  const cols = [24, 240, 362, 472, 582, 696]
  const headers = ['WORKFLOW', 'STATUS', 'TRIGGER', 'LAST RUN', 'RUNS', '']
  const rows = [
    { name: 'Lead Qualification',  sub: 'n8n → Claude API → HubSpot',    status: 'Running',   sc: '#2A5C3F', trigger: 'Webhook',    last: '2 min ago',  runs: '1,247' },
    { name: 'Client Onboarding',   sub: 'Stripe → Supabase → Email',      status: 'Active (2)',sc: '#2A5C3F', trigger: 'Stripe',     last: '14 min ago', runs: '94'    },
    { name: 'Content Distribution',sub: 'Airtable → Claude API → Social', status: 'Running',   sc: '#2A5C3F', trigger: 'Schedule',   last: '1 hr ago',   runs: '389'   },
    { name: 'Weekly Reporting',    sub: 'Airtable → Claude API → Email',  status: 'Scheduled', sc: '#C06044', trigger: 'Mon 7:00 AM',last: '6 days ago', runs: '52'    },
    { name: 'CRM Intelligence',    sub: 'HubSpot → Claude API → GHL',     status: 'Idle',      sc: '#ADA69B', trigger: 'On demand',  last: '3 days ago', runs: '28'    },
  ]
  return (
    <svg viewBox="0 0 800 480" className="w-full h-full" aria-label="Workflow monitor mockup">
      <rect width="800" height="480" fill="#F0EDE6" />
      {/* Header */}
      <rect width="800" height="52" fill="#ECEAE2" />
      <text x="24" y="30" fill="#111010" fontSize={14} fontWeight="600" fontFamily="system-ui">Active Systems</text>
      <text x="24" y="45" fill="#ADA69B" fontSize={9} fontFamily="system-ui">5 workflows · 3 currently running</text>
      <rect x="670" y="14" width="114" height="26" rx={4} fill="#2A5C3F" />
      <text x="727" y="31" fill="#F0EDE6" fontSize={9} fontWeight="500" fontFamily="system-ui" textAnchor="middle">+ New Workflow</text>
      {/* Column headers */}
      <rect y="52" width="800" height="28" fill="#E5E2DA" />
      {headers.map((h, i) => (
        <text key={i} x={cols[i]} y="70" fill="#ADA69B" fontSize={8} fontFamily="system-ui" letterSpacing={1}>{h}</text>
      ))}
      {/* Rows */}
      {rows.map((r, i) => (
        <g key={i}>
          <rect y={80 + i * 72} width="800" height="72" fill={i % 2 === 0 ? '#F0EDE6' : '#EAE7DF'} />
          <line x1="0" y1={152 + i * 72} x2="800" y2={152 + i * 72} stroke="#D8D3C9" strokeWidth={0.5} />
          <circle cx="32" cy={116 + i * 72} r={5} fill={r.sc} />
          <text x="46" y={112 + i * 72} fill="#111010" fontSize={11} fontWeight="500" fontFamily="system-ui">{r.name}</text>
          <text x="46" y={126 + i * 72} fill="#ADA69B" fontSize={9} fontFamily="system-ui">{r.sub}</text>
          <rect x={232} y={106 + i * 72} width={92} height={20} rx={10} fill={r.sc} fillOpacity={0.12} />
          <text x={278} y={120 + i * 72} fill={r.sc} fontSize={9} fontWeight="500" fontFamily="system-ui" textAnchor="middle">{r.status}</text>
          <text x={cols[2]} y={120 + i * 72} fill="#2D2925" fontSize={10} fontFamily="system-ui">{r.trigger}</text>
          <text x={cols[3]} y={120 + i * 72} fill="#2D2925" fontSize={10} fontFamily="system-ui">{r.last}</text>
          <text x={cols[4]} y={120 + i * 72} fill="#2D2925" fontSize={10} fontFamily="system-ui">{r.runs}</text>
          <rect x={cols[5]} y={108 + i * 72} width={62} height={22} rx={3} fill="none" stroke="#D8D3C9" strokeWidth={0.8} />
          <text x={729} y={123 + i * 72} fill="#ADA69B" fontSize={9} fontFamily="system-ui" textAnchor="middle">View logs</text>
        </g>
      ))}
      {/* Footer */}
      <rect y="440" width="800" height="40" fill="#E5E2DA" />
      <text x="24" y="464" fill="#ADA69B" fontSize={9} fontFamily="system-ui">Powered by Neith AI · n8n · Claude API</text>
      <text x="776" y="464" fill="#ADA69B" fontSize={9} fontFamily="system-ui" textAnchor="end">Last refresh: just now</text>
    </svg>
  )
}

// ── Mockup 3: Client Onboarding Kanban ────────────────────────────────────────
function OnboardingBoard() {
  const columns = [
    { title: 'Payment Received', color: '#C06044', cards: [
      { name: 'Apex Creative', note: 'Stripe webhook received', tag: 'New',  tc: '#C06044' },
      { name: 'Bloom Studio',  note: 'Stripe webhook received', tag: 'New',  tc: '#C06044' },
    ]},
    { title: 'Account Created', color: '#2A5C3F', cards: [
      { name: 'Fernwood Co.',  note: 'Supabase account live',   tag: 'Auto', tc: '#2A5C3F' },
    ]},
    { title: 'Welcome Sent', color: '#2A5C3F', cards: [
      { name: 'Marble Agency', note: 'Portal link delivered',   tag: 'Sent', tc: '#2A5C3F' },
      { name: 'Dune Partners', note: 'Portal link delivered',   tag: 'Sent', tc: '#2A5C3F' },
    ]},
    { title: 'Active', color: '#2A5C3F', cards: [
      { name: 'Solstice Media', note: 'Onboarded 2 days ago',   tag: 'Live', tc: '#2A5C3F' },
      { name: 'Orbit Design',   note: 'Onboarded 5 days ago',   tag: 'Live', tc: '#2A5C3F' },
      { name: 'Crest & Co.',    note: 'Onboarded 1 week ago',   tag: 'Live', tc: '#2A5C3F' },
    ]},
  ]
  return (
    <svg viewBox="0 0 800 480" className="w-full h-full" aria-label="Onboarding kanban mockup">
      <rect width="800" height="480" fill="#F0EDE6" />
      {/* Header */}
      <rect width="800" height="48" fill="#2A5C3F" />
      <text x="24" y="28" fill="#F0EDE6" fontSize={14} fontWeight="600" fontFamily="system-ui">Client Onboarding Pipeline</text>
      <text x="24" y="42" fill="#F0EDE6" fontSize={9} fontFamily="system-ui" fillOpacity={0.7}>Auto-updated · Powered by Neith AI</text>
      <text x="684" y="30" fill="#F0EDE6" fontSize={11} fontFamily="system-ui">8 clients total</text>
      <text x="684" y="44" fill="#F0EDE6" fontSize={9} fontFamily="system-ui" fillOpacity={0.7}>avg. 3 min 42 sec</text>
      {/* Columns */}
      {columns.map((col, ci) => (
        <g key={ci}>
          <rect x={12 + ci * 194} y="56" width={182} height={416} rx={4} fill="#EAE7DF" />
          {/* Column header */}
          <rect x={12 + ci * 194} y="56" width={182} height={32} rx={4} fill={col.color} fillOpacity={0.18} />
          <rect x={12 + ci * 194} y="72" width={182} height={16} fill={col.color} fillOpacity={0.18} />
          <circle cx={26 + ci * 194} cy={72} r={4.5} fill={col.color} />
          <text x={36 + ci * 194} y={76} fill="#111010" fontSize={10} fontWeight="500" fontFamily="system-ui">{col.title}</text>
          <rect x={166 + ci * 194} y="60" width={20} height={20} rx={10} fill={col.color} />
          <text x={176 + ci * 194} y={74} fill="#F0EDE6" fontSize={9} fontWeight="600" fontFamily="system-ui" textAnchor="middle">{col.cards.length}</text>
          {/* Cards */}
          {col.cards.map((card, ri) => (
            <g key={ri}>
              <rect x={20 + ci * 194} y={98 + ri * 90} width={166} height={78} rx={4} fill="#F0EDE6" stroke="#D8D3C9" strokeWidth={0.8} />
              <text x={32 + ci * 194} y={120 + ri * 90} fill="#111010" fontSize={11} fontWeight="500" fontFamily="system-ui">{card.name}</text>
              <text x={32 + ci * 194} y={134 + ri * 90} fill="#ADA69B" fontSize={9} fontFamily="system-ui">{card.note}</text>
              <rect x={32 + ci * 194} y={148 + ri * 90} width={36} height={16} rx={8} fill={card.tc} />
              <text x={50 + ci * 194} y={160 + ri * 90} fill="#F0EDE6" fontSize={7.5} fontFamily="system-ui" textAnchor="middle">{card.tag}</text>
            </g>
          ))}
        </g>
      ))}
    </svg>
  )
}

// ── Mockup 4: AI-Generated Weekly Report ──────────────────────────────────────
function WeeklyReport() {
  const channels = [
    { label: 'Amazon',      val: 68, c: '#2A5C3F' },
    { label: 'Walmart',     val: 42, c: '#2A5C3F' },
    { label: 'Paid Social', val: 31, c: '#C06044' },
    { label: 'Direct',      val: 24, c: '#ADA69B' },
  ]
  return (
    <svg viewBox="0 0 800 480" className="w-full h-full" aria-label="Weekly report mockup">
      <rect width="800" height="480" fill="#E5E2DA" />
      {/* Page shadow */}
      <rect x="62" y="14" width="676" height="452" rx={4} fill="#0D1B14" fillOpacity={0.12} />
      {/* Page */}
      <rect x="56" y="10" width="676" height="452" rx={4} fill="white" stroke="#E0DCD3" strokeWidth={0.8} />
      {/* Header */}
      <rect x="56" y="10" width="676" height="52" rx={4} fill="#2A5C3F" />
      <rect x="56" y="46" width="676" height="16" fill="#2A5C3F" />
      <text x="72" y="32" fill="#F0EDE6" fontSize={13} fontWeight="600" fontFamily="system-ui">Performance Report — Week of July 7, 2025</text>
      <text x="72" y="48" fill="#F0EDE6" fontSize={9} fontFamily="system-ui" fillOpacity={0.75}>Generated automatically by Claude API · Delivered Mon 7:00 AM</text>
      <text x="718" y="48" fill="#F0EDE6" fontSize={8} fontFamily="system-ui" textAnchor="end" fillOpacity={0.6}>CONFIDENTIAL</text>
      {/* KPI row */}
      {[
        { label: 'Total Revenue', val: '$48,200', delta: '+12% WoW', c: '#2A5C3F' },
        { label: 'New Leads',     val: '214',     delta: '+8% WoW',  c: '#2A5C3F' },
        { label: 'Ad ROAS',       val: '3.8×',    delta: '−0.2 WoW', c: '#C06044' },
      ].map((m, i) => (
        <g key={i}>
          <rect x={72 + i * 218} y="70" width="204" height="58" rx={4} fill="#F5F3EE" stroke="#E0DCD3" strokeWidth={0.8} />
          <text x={84 + i * 218} y="88" fill="#ADA69B" fontSize={7.5} fontFamily="system-ui" letterSpacing={0.8}>{m.label.toUpperCase()}</text>
          <text x={84 + i * 218} y="114" fill="#111010" fontSize={26} fontWeight="700" fontFamily="system-ui">{m.val}</text>
          <text x={84 + i * 218} y="122" fill={m.c} fontSize={8.5} fontFamily="system-ui" dy={8}>{m.delta}</text>
        </g>
      ))}
      {/* Executive Summary */}
      <text x="72" y="160" fill="#111010" fontSize={11} fontWeight="600" fontFamily="system-ui">Executive Summary</text>
      <line x1="72" y1="167" x2="716" y2="167" stroke="#E0DCD3" strokeWidth={0.8} />
      {[174, 185, 196].map((y, i) => (
        <rect key={y} x="72" y={y} width={i === 2 ? 280 : 600} height={7} rx={3} fill="#D8D3C9" fillOpacity={0.6} />
      ))}
      {/* Channel Breakdown */}
      <text x="72" y="228" fill="#111010" fontSize={11} fontWeight="600" fontFamily="system-ui">Channel Breakdown</text>
      <line x1="72" y1="235" x2="716" y2="235" stroke="#E0DCD3" strokeWidth={0.8} />
      {channels.map((ch, i) => (
        <g key={i}>
          <text x="72" y={258 + i * 30} fill="#2D2925" fontSize={10} fontFamily="system-ui">{ch.label}</text>
          <rect x="182" y={244 + i * 30} width={ch.val * 4} height={14} rx={2} fill={ch.c} fillOpacity={0.7} />
          <text x={190 + ch.val * 4} y={256 + i * 30} fill={ch.c} fontSize={9} fontFamily="system-ui">${ch.val}k</text>
        </g>
      ))}
      {/* Recommendations */}
      <text x="72" y="376" fill="#111010" fontSize={11} fontWeight="600" fontFamily="system-ui">Recommendations</text>
      <line x1="72" y1="383" x2="716" y2="383" stroke="#E0DCD3" strokeWidth={0.8} />
      {[390, 401, 412, 423].map((y, i) => (
        <rect key={y} x="72" y={y} width={i === 3 ? 190 : 580} height={7} rx={3} fill="#D8D3C9" fillOpacity={0.5} />
      ))}
      {/* Footer */}
      <line x1="72" y1="446" x2="716" y2="446" stroke="#E0DCD3" strokeWidth={0.6} />
      <text x="72" y="460" fill="#ADA69B" fontSize={8} fontFamily="system-ui">Generated by Claude API · Neith AI Automation</text>
      <text x="716" y="460" fill="#ADA69B" fontSize={8} fontFamily="system-ui" textAnchor="end">Do not distribute</text>
    </svg>
  )
}

// ── Carousel ──────────────────────────────────────────────────────────────────

const SLIDES = [
  {
    el: <KPIDashboard />,
    caption: 'KPI Command Center — real-time visibility into every lead scored, hour saved, and deal created across your connected workflows.',
  },
  {
    el: <WorkflowMonitor />,
    caption: 'Workflow Monitor — a live view of every automation running, idle, or scheduled. No manual checking required.',
  },
  {
    el: <OnboardingBoard />,
    caption: 'Onboarding Pipeline — from Stripe payment to active client portal in under 4 minutes, fully tracked.',
  },
  {
    el: <WeeklyReport />,
    caption: 'AI-Generated Report — sourced from your data, written by Claude, delivered every Monday at 7 AM. Nobody touched it.',
  },
]

export default function MockupCarousel() {
  const [idx, setIdx] = useState(0)
  const prev = () => setIdx(i => (i - 1 + SLIDES.length) % SLIDES.length)
  const next = () => setIdx(i => (i + 1) % SLIDES.length)

  return (
    <section className="py-16 md:py-20 overflow-hidden" aria-label="Example systems">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section label */}
        <div className="flex items-center gap-4 mb-8">
          <p className="font-body text-xs tracking-label uppercase text-dust whitespace-nowrap">What it looks like</p>
          <div className="flex-1 overflow-hidden">
            <svg viewBox="0 0 400 40" preserveAspectRatio="none" className="w-full h-6" aria-hidden="true">
              <path d="M0 20 C67 2,133 38,200 20 C267 2,333 38,400 20" stroke="#C8C2B8" strokeWidth="1.6" fill="none" strokeLinecap="round" />
            </svg>
          </div>
        </div>

        {/* Screen frame */}
        <div className="relative">
          <div className="relative overflow-hidden border border-bone/70" style={{ aspectRatio: '5/3' }}>
            {SLIDES.map((slide, i) => (
              <div
                key={i}
                className={`absolute inset-0 transition-opacity duration-500 ${
                  i === idx ? 'opacity-100' : 'opacity-0 pointer-events-none'
                }`}
                aria-hidden={i !== idx}
              >
                {slide.el}
              </div>
            ))}
          </div>

          {/* Prev arrow */}
          <button
            onClick={prev}
            className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 flex items-center justify-center
                       bg-ink/60 hover:bg-ink text-paper transition-colors duration-200
                       focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
            aria-label="Previous slide"
          >
            <svg viewBox="0 0 10 18" className="w-2.5 h-auto" fill="none" aria-hidden="true">
              <path d="M8 2 L2 9 L8 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          {/* Next arrow */}
          <button
            onClick={next}
            className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 flex items-center justify-center
                       bg-ink/60 hover:bg-ink text-paper transition-colors duration-200
                       focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
            aria-label="Next slide"
          >
            <svg viewBox="0 0 10 18" className="w-2.5 h-auto" fill="none" aria-hidden="true">
              <path d="M2 2 L8 9 L2 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>

        {/* Caption + dots */}
        <div className="mt-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <p className="font-body text-sm text-slate leading-relaxed max-w-lg">
            {SLIDES[idx].caption}
          </p>
          <div className="flex gap-2 shrink-0">
            {SLIDES.map((_, i) => (
              <button
                key={i}
                onClick={() => setIdx(i)}
                className={`h-1.5 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand ${
                  i === idx ? 'w-8 bg-brand' : 'w-4 bg-bone hover:bg-dust'
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
