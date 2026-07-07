import ContactForm from '@/components/ContactForm'
import MockupCarousel from '@/components/MockupCarousel'

// ─── Shared primitives ────────────────────────────────────────────────────────

function Rule({ dark = false }: { dark?: boolean }) {
  const stroke = dark ? 'rgba(240,237,230,0.18)' : '#C8C2B8'
  return (
    <svg viewBox="0 0 1200 40" preserveAspectRatio="none" className="w-full h-6" aria-hidden="true">
      <path
        d="M0 20 C200 2, 400 38, 600 20 C800 2, 1000 38, 1200 20"
        stroke={stroke} strokeWidth="1.6" fill="none" strokeLinecap="round"
      />
    </svg>
  )
}

function SectionLabel({ children, dark = false }: { children: string; dark?: boolean }) {
  return (
    <p
      className={`font-body text-xs tracking-label uppercase ${
        dark ? 'text-dust/60' : 'text-dust'
      }`}
    >
      {children}
    </p>
  )
}

// Monstera leaf — line art botanical, animated sway
function MonsteraLeaf({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 220 300"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`leaf-sway ${className ?? ''}`}
      aria-hidden="true"
    >
      {/* Petiole (stem) */}
      <path d="M 110 295 C 110 265 108 248 108 230" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />

      {/* Main leaf outline — lobes with visible sinuses */}
      <path
        d="
          M 108 230
          C 80 222 42 205 20 178
          C 4 158 6 132 22 114
          C 4 94 0 64 18 42
          C 34 22 62 10 90 16
          C 98 4 114 0 130 6
          C 158 12 178 36 176 62
          C 198 70 214 94 210 120
          C 220 142 214 170 196 186
          C 208 208 204 236 182 250
          C 162 264 136 260 108 230
          Z
        "
        stroke="currentColor" strokeWidth="1.6" fill="none"
      />

      {/* Deep radial sinuses — the characteristic monstera cuts */}
      <path d="M 22 114 C 55 118 82 128 108 230" stroke="currentColor" strokeWidth="1.1" />
      <path d="M 18 42  C 52 68  80 118 108 230" stroke="currentColor" strokeWidth="1" />
      <path d="M 196 186 C 164 178 138 162 108 230" stroke="currentColor" strokeWidth="1.1" />
      <path d="M 210 120 C 178 120 148 138 108 230" stroke="currentColor" strokeWidth="1" />

      {/* Fenestrations (holes) */}
      <ellipse cx="80"  cy="112" rx="13" ry="18" transform="rotate(-18 80 112)"  stroke="currentColor" strokeWidth="1.3" />
      <ellipse cx="142" cy="100" rx="14" ry="19" transform="rotate(18 142 100)"  stroke="currentColor" strokeWidth="1.3" />
      <ellipse cx="86"  cy="170" rx="11" ry="15" transform="rotate(-10 86 170)"  stroke="currentColor" strokeWidth="1.2" />
      <ellipse cx="144" cy="162" rx="10" ry="14" transform="rotate(10 144 162)"  stroke="currentColor" strokeWidth="1.2" />

      {/* Midrib */}
      <path d="M 108 230 C 106 195 104 158 106 120 C 108 88 112 58 116 30" stroke="currentColor" strokeWidth="0.8" opacity="0.5" />

      {/* Secondary veins */}
      <path d="M 106 140 C 78 132 50 130 24 136"  stroke="currentColor" strokeWidth="0.6" opacity="0.4" />
      <path d="M 108 160 C 136 152 164 150 190 158" stroke="currentColor" strokeWidth="0.6" opacity="0.4" />
      <path d="M 108 195 C 82 188 58 190 36 198"  stroke="currentColor" strokeWidth="0.6" opacity="0.4" />
    </svg>
  )
}

// Vesica Piscis break mark — sacred geometry section divider
function NeithBreakMark({ dark = false }: { dark?: boolean }) {
  return (
    <svg
      viewBox="0 0 48 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`w-10 h-auto ${dark ? 'text-dust/40' : 'text-dust'}`}
      aria-hidden="true"
    >
      {/* Two overlapping circles — vesica piscis */}
      <circle cx="17" cy="10" r="8" stroke="currentColor" strokeWidth="1" />
      <circle cx="31" cy="10" r="8" stroke="currentColor" strokeWidth="1" />
      {/* Center dot */}
      <circle cx="24" cy="10" r="1.5" fill="currentColor" />
    </svg>
  )
}

// Leopard spot — golden center + dark irregular surrounding blobs, 4 organic variants
function LeopardSpot({ cx, cy, r, variant }: { cx: number; cy: number; r: number; variant: number }) {
  // Each variant has different blob angles + sizes to look organic
  const configs = [
    { blobs: [{ a: 10, rx: 1.1, ry: 0.7 }, { a: 140, rx: 0.9, ry: 1.1 }, { a: 260, rx: 1.2, ry: 0.8 }] },
    { blobs: [{ a: 50, rx: 1.0, ry: 0.6 }, { a: 155, rx: 1.3, ry: 0.9 }, { a: 250, rx: 0.8, ry: 1.1 }, { a: 330, rx: 1.0, ry: 0.7 }] },
    { blobs: [{ a: 20, rx: 1.2, ry: 0.8 }, { a: 130, rx: 0.9, ry: 1.0 }, { a: 230, rx: 1.1, ry: 0.6 }, { a: 310, rx: 0.8, ry: 1.2 }] },
    { blobs: [{ a: 70, rx: 1.1, ry: 0.9 }, { a: 190, rx: 1.3, ry: 0.7 }, { a: 300, rx: 0.9, ry: 1.1 }] },
  ]
  const { blobs } = configs[variant % 4]
  const toRad = (deg: number) => (deg * Math.PI) / 180
  const dr = r * 1.5

  return (
    <g>
      {blobs.map(({ a, rx, ry }, i) => {
        const rad = toRad(a)
        const bx = cx + dr * Math.cos(rad)
        const by = cy + dr * Math.sin(rad)
        return (
          <ellipse
            key={i}
            cx={bx} cy={by}
            rx={r * rx} ry={r * ry}
            transform={`rotate(${a + 45}, ${bx}, ${by})`}
            fill="#1C0D00"
          />
        )
      })}
      {/* Golden tan center */}
      <circle cx={cx} cy={cy} r={r * 0.85} fill="#C8860A" />
    </g>
  )
}

// Orb-weaver web with leopard-print junction nodes + color gradient
function CornerWeb({ flip = false, className, gradientFrom = '#2A5C3F', gradientTo = '#C06044' }: { flip?: boolean; className?: string; gradientFrom?: string; gradientTo?: string }) {
  const threadAngles = [0, 14, 28, 42, 58, 74, 90]   // 7 threads, well-spaced
  const arcRadii = [50, 100, 160, 230]                 // 4 rings, airy gaps
  const size = 320
  const gradId = `webGrad-${flip ? 'r' : 'l'}-${gradientFrom.replace('#','')}`

  const ox = flip ? size : 0
  const oy = 0
  const dir = flip ? -1 : 1
  const baseAngle = flip ? 80 : 0
  const toRad = (deg: number) => (deg * Math.PI) / 180

  return (
    <svg
      viewBox={`0 0 ${size} ${size}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id={gradId} gradientUnits="userSpaceOnUse"
          x1={flip ? size : 0} y1="0" x2={flip ? 0 : size} y2={size}>
          <stop offset="0%"   stopColor={gradientFrom} stopOpacity="1" />
          <stop offset="100%" stopColor={gradientTo}   stopOpacity="0.25" />
        </linearGradient>
      </defs>
      {/* Radial silk threads */}
      {threadAngles.map((deg, i) => {
        const angle = toRad(baseAngle + deg)
        const len = arcRadii[arcRadii.length - 1] * 1.15
        return (
          <line
            key={i}
            x1={ox} y1={oy}
            x2={ox + dir * len * Math.cos(angle)}
            y2={oy + len * Math.sin(angle)}
            stroke={`url(#${gradId})`} strokeWidth={i % 3 === 0 ? 0.9 : 0.55}
          />
        )
      })}

      {/* Concentric capture-spiral arcs */}
      {arcRadii.map((r, ri) => {
        const startAngle = toRad(baseAngle)
        const endAngle = toRad(baseAngle + 100)
        const x1 = ox + dir * r * Math.cos(startAngle)
        const y1 = oy + r * Math.sin(startAngle)
        const x2 = ox + dir * r * Math.cos(endAngle)
        const y2 = oy + r * Math.sin(endAngle)
        const sweepFlag = flip ? 0 : 1
        return (
          <path
            key={ri}
            d={`M ${x1} ${y1} A ${r} ${r} 0 0 ${sweepFlag} ${x2} ${y2}`}
            stroke={`url(#${gradId})`}
            strokeWidth={ri < 2 ? 0.9 : 0.6}
          />
        )
      })}

      {/* Leopard-spot junction nodes — outer rings only to keep inner web clean */}
      {threadAngles.map((deg, ti) =>
        arcRadii.map((r, ri) => {
          if (ri < 2) return null  // skip inner two rings
          const angle = toRad(baseAngle + deg)
          const cx = ox + dir * r * Math.cos(angle)
          const cy = oy + r * Math.sin(angle)
          return (
            <LeopardSpot
              key={`${ti}-${ri}`}
              cx={cx} cy={cy}
              r={ri === 2 ? 3.5 : 4.5}
              variant={(ti * 3 + ri * 5) % 4}
            />
          )
        })
      )}

      {/* Spiral detail near origin */}
      <path
        d={`M ${ox + dir * 12} ${oy + 4} A 10 10 0 1 ${flip ? 0 : 1} ${ox + dir * 4} ${oy + 14}`}
        stroke="currentColor" strokeWidth="0.7" opacity="0.7"
      />
      <circle cx={ox} cy={oy} r="4" fill="#C8860A" />
    </svg>
  )
}

// Bow-and-arrow icon for the CTA button (Neith / Pinaki reference)
function BowArrowIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 36 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Bow arc */}
      <path d="M 5 2 Q 0 9 5 16" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      {/* Bowstring */}
      <line x1="5" y1="2" x2="5" y2="16" stroke="currentColor" strokeWidth="0.8" opacity="0.6" />
      {/* Arrow shaft */}
      <line x1="5" y1="9" x2="28" y2="9" stroke="currentColor" strokeWidth="1" />
      {/* Arrowhead */}
      <path d="M 25 5.5 L 31 9 L 25 12.5" stroke="currentColor" strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
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

// Shield-shaped CTA button
function ShieldButton() {
  return (
    <a
      href="#contact"
      className="shrink-0 relative inline-flex flex-col items-center justify-center self-start lg:self-auto
                 text-ink hover:text-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand
                 transition-colors duration-200 group"
      style={{ width: '148px', height: '168px' }}
    >
      {/* Shield outline */}
      <svg
        viewBox="0 0 148 168"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute inset-0 w-full h-full"
        aria-hidden="true"
      >
        <path
          d="M 74 6 C 112 6 140 26 140 58 C 140 112 74 162 74 162 C 74 162 8 112 8 58 C 8 26 36 6 74 6 Z"
          stroke="currentColor" strokeWidth="1.5" fill="none"
        />
        <path
          d="M 74 18 C 104 18 128 34 128 60 C 128 106 74 150 74 150 C 74 150 20 106 20 60 C 20 34 44 18 74 18 Z"
          stroke="currentColor" strokeWidth="0.6" opacity="0.4" fill="none"
        />
      </svg>
      {/* Bow icon crest */}
      <BowArrowIcon className="w-7 h-auto mb-2 relative z-10" />
      {/* Text centered inside shield */}
      <span className="relative z-10 font-body text-[9px] font-medium tracking-label uppercase text-center leading-relaxed px-4">
        Book a<br />30-minute<br />call
      </span>
    </a>
  )
}

// ─── Orb-weave background SVG (founder section only) ────────────────────────

function OrbWeaveSVG() {
  return (
    <svg
      viewBox="0 0 800 800"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className="absolute inset-0 w-full h-full"
      preserveAspectRatio="xMidYMid slice"
    >
      {/* Radial arms — 8 directions, matching logo structure */}
      <line x1="400" y1="400" x2="400" y2="10"   stroke="#F0EDE6" strokeWidth="0.8" />
      <line x1="400" y1="400" x2="672" y2="128"  stroke="#F0EDE6" strokeWidth="0.8" />
      <line x1="400" y1="400" x2="790" y2="400"  stroke="#F0EDE6" strokeWidth="0.8" />
      <line x1="400" y1="400" x2="672" y2="672"  stroke="#F0EDE6" strokeWidth="0.8" />
      <line x1="400" y1="400" x2="400" y2="790"  stroke="#F0EDE6" strokeWidth="0.8" />
      <line x1="400" y1="400" x2="128" y2="672"  stroke="#F0EDE6" strokeWidth="0.8" />
      <line x1="400" y1="400" x2="10"  y2="400"  stroke="#F0EDE6" strokeWidth="0.8" />
      <line x1="400" y1="400" x2="128" y2="128"  stroke="#F0EDE6" strokeWidth="0.8" />

      {/* Concentric hexagonal rings (weft threads) */}
      <polygon
        points="400,270 510,335 510,465 400,530 290,465 290,335"
        stroke="#F0EDE6" strokeWidth="0.8"
      />
      <polygon
        points="400,175 573,288 573,513 400,625 227,513 227,288"
        stroke="#F0EDE6" strokeWidth="0.8"
      />
      <polygon
        points="400,80 636,240 636,560 400,720 164,560 164,240"
        stroke="#F0EDE6" strokeWidth="0.8"
      />

      {/* Junction nodes at ring/arm intersections */}
      {[
        [400,270],[510,335],[510,465],[400,530],[290,465],[290,335],
        [400,175],[573,288],[573,513],[400,625],[227,513],[227,288],
      ].map(([cx, cy], i) => (
        <circle key={i} cx={cx} cy={cy} r="3" fill="#F0EDE6" />
      ))}

      {/* Central diamond mark */}
      <polygon points="400,365 435,400 400,435 365,400" stroke="#F0EDE6" strokeWidth="1.2" />
      <polygon points="400,378 422,400 400,422 378,400" stroke="#F0EDE6" strokeWidth="0.7" />
      <circle cx="400" cy="400" r="3.5" fill="#F0EDE6" />
    </svg>
  )
}

// ─── Flow Diagram (systems / social proof) ────────────────────────────────────

interface FlowNodeDef {
  label: string
  sub?: string
  type: 'trigger' | 'process' | 'ai' | 'output'
}

const nodePalette = {
  trigger: { bg: '#E9E5DD', border: '#ADA69B', text: '#2D2925' },
  process: { bg: '#F0EDE6', border: '#C8C2B8', text: '#2D2925' },
  ai:      { bg: '#2A5C3F', border: '#2A5C3F', text: '#F0EDE6' },
  output:  { bg: '#111010', border: '#111010', text: '#F0EDE6' },
} as const

function FlowDiagram({ nodes }: { nodes: FlowNodeDef[] }) {
  const NW = 86, NH = 28, GAP = 36, PAD = 14
  const totalW = nodes.length * NW + (nodes.length - 1) * GAP + PAD * 2
  const totalH = 72
  const midY = totalH / 2

  return (
    <svg viewBox={`0 0 ${totalW} ${totalH}`} className="w-full h-auto" aria-hidden="true">
      {nodes.map((node, i) => {
        const cx = PAD + i * (NW + GAP) + NW / 2
        const c = nodePalette[node.type]
        const prevRightX = PAD + (i - 1) * (NW + GAP) + NW
        return (
          <g key={i}>
            {i > 0 && (
              <>
                <line x1={prevRightX + 1} y1={midY} x2={cx - NW / 2 - 5} y2={midY}
                  stroke="#ADA69B" strokeWidth="0.8" />
                <polygon
                  points={`${cx - NW / 2},${midY} ${cx - NW / 2 - 7},${midY - 3.5} ${cx - NW / 2 - 7},${midY + 3.5}`}
                  fill="#ADA69B"
                />
              </>
            )}
            <rect
              x={cx - NW / 2} y={midY - NH / 2}
              width={NW} height={NH} rx="2"
              fill={c.bg} stroke={c.border} strokeWidth="0.8"
            />
            <text
              x={cx} y={node.sub ? midY - 2 : midY + 4}
              textAnchor="middle" fontSize="6.5" fontWeight="500" fill={c.text}
              style={{ fontFamily: 'system-ui, sans-serif', letterSpacing: '0.04em' }}
            >
              {node.label}
            </text>
            {node.sub && (
              <text
                x={cx} y={midY + 8}
                textAnchor="middle" fontSize="5.5" fill={c.text} opacity={0.65}
                style={{ fontFamily: 'system-ui, sans-serif' }}
              >
                {node.sub}
              </text>
            )}
          </g>
        )
      })}
    </svg>
  )
}

const systems: {
  n: string
  name: string
  description: string
  result: string
  nodes: FlowNodeDef[]
}[] = [
  {
    n: '01',
    name: 'Lead Qualification',
    description:
      'Every new contact scored and routed the moment the form submits. Hot leads land in HubSpot with a Slack alert within 90 seconds. Cold leads enter a nurture sequence automatically. Zero manual triage.',
    result: '~4 hrs/week of manual triage → fully automated',
    nodes: [
      { label: 'Website Form',  type: 'trigger' },
      { label: 'n8n',           sub: 'webhook trigger',  type: 'process' },
      { label: 'Claude API',    sub: 'score + qualify',  type: 'ai' },
      { label: 'HubSpot CRM',   sub: 'deal created',     type: 'output' },
      { label: 'Slack Alert',   sub: 'sales team',       type: 'output' },
    ],
  },
  {
    n: '02',
    name: 'Client Onboarding',
    description:
      'Payment confirms. Account provisions. Welcome kit sends. Client portal activates. Every step runs automatically. New clients are live in minutes, not a two-day back-and-forth.',
    result: 'Manual 2-day process → under 4 minutes',
    nodes: [
      { label: 'Stripe Payment', type: 'trigger' },
      { label: 'n8n',            sub: 'orchestrate',     type: 'process' },
      { label: 'Supabase',       sub: 'create account',  type: 'process' },
      { label: 'Airtable',       sub: 'log client',      type: 'output' },
      { label: 'Welcome Email',  sub: '+ portal link',   type: 'output' },
    ],
  },
  {
    n: '03',
    name: 'Weekly Reporting',
    description:
      "Every Monday at 7 AM, a complete performance report hits leadership's inbox. Sourced from Airtable, Amazon, and ad platforms. Written and formatted by Claude. Nobody touched it.",
    result: '8 hrs of analyst time per week → zero',
    nodes: [
      { label: 'Airtable',    sub: '+ Amazon Ads',    type: 'trigger' },
      { label: 'n8n',         sub: 'aggregate data',  type: 'process' },
      { label: 'Claude API',  sub: 'synthesize',      type: 'ai' },
      { label: 'PDF Report',  sub: 'auto-formatted',  type: 'output' },
      { label: 'Slack + Email', sub: 'auto-send',     type: 'output' },
    ],
  },
]

function SystemsBuilt() {
  return (
    <section
      className="relative py-24 md:py-32 overflow-hidden"
      id="systems"
      aria-label="Systems in production"
    >
      <MonsteraLeaf className="absolute -top-6 -right-4 w-44 h-auto text-ember opacity-20 pointer-events-none scale-x-[-1]" />
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section header */}
        <div className="flex items-center gap-4 mb-0">
          <SectionLabel>In practice</SectionLabel>
          <div className="flex-1 overflow-hidden">
            <svg viewBox="0 0 400 40" preserveAspectRatio="none" className="w-full h-6" aria-hidden="true">
              <path d="M0 20 C67 2,133 38,200 20 C267 2,333 38,400 20" stroke="#C8C2B8" strokeWidth="1.6" fill="none" strokeLinecap="round" />
            </svg>
          </div>
        </div>

        {/* Heading + framing */}
        <div className="pt-10 md:pt-14 mb-8 md:mb-10">
          <h2
            className="font-display font-bold text-ink mb-4"
            style={{ fontSize: 'clamp(1.75rem, 4vw, 3.25rem)', lineHeight: '1.06', letterSpacing: '-0.02em' }}
          >
            What a system looks like.
          </h2>
          <p className="font-body text-base text-slate max-w-xl leading-relaxed">
            Real tools. Real logic. Not a prototype — the kind of production system
            we spec, build, and hand off.
          </p>
        </div>

        {/* Diagram legend */}
        <div className="flex flex-wrap gap-x-6 gap-y-2 pb-2">
          {(['trigger', 'process', 'ai', 'output'] as const).map((type) => {
            const c = nodePalette[type]
            const labels = { trigger: 'Trigger', process: 'Process', ai: 'AI step', output: 'Output' }
            return (
              <div key={type} className="flex items-center gap-2">
                <span
                  className="inline-block w-3 h-3 rounded-[1px]"
                  style={{ background: c.bg, border: `1px solid ${c.border}` }}
                />
                <span className="font-body text-xs text-dust uppercase tracking-label">
                  {labels[type]}
                </span>
              </div>
            )
          })}
        </div>

        {/* System registers */}
        <div>
          {systems.map((sys) => (
            <div key={sys.n}>
              <Rule />
              <div className="py-8 md:py-10">
                {/* Number + name + result stat */}
                <div className="grid grid-cols-[auto,1fr] md:grid-cols-[64px,1fr] gap-x-6 md:gap-x-12 mb-6">
                  <span className="font-display font-medium text-sm text-dust mt-1 tracking-label">
                    {sys.n}
                  </span>
                  <div>
                    <h3 className="font-display font-semibold text-service-name text-ink mb-1">
                      {sys.name}
                    </h3>
                    <p className="font-body text-xs font-medium text-brand tracking-label uppercase">
                      {sys.result}
                    </p>
                  </div>
                </div>

                {/* Diagram — horizontally scrollable on small screens */}
                <div className="md:pl-[76px] overflow-x-auto">
                  <div style={{ minWidth: '480px' }}>
                    <FlowDiagram nodes={sys.nodes} />
                  </div>
                </div>

                {/* Description */}
                <p className="md:pl-[76px] mt-5 font-body text-sm md:text-base text-slate leading-relaxed max-w-2xl">
                  {sys.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <Rule />
      </div>
    </section>
  )
}

// ─── Hero ─────────────────────────────────────────────────────────────────────

function Hero() {
  return (
    <section
      className="relative min-h-screen flex flex-col justify-center pt-24 pb-20 overflow-hidden"
      aria-label="Introduction"
    >
      {/* Corner webs — sit below fixed nav (top-16), extend further into page */}
      <CornerWeb className="absolute top-16 -left-2 w-[28rem] h-[28rem] opacity-[0.7] pointer-events-none" gradientFrom="#2A5C3F" gradientTo="#C06044" />
      <CornerWeb flip className="absolute top-16 -right-2 w-[28rem] h-[28rem] opacity-[0.6] pointer-events-none" gradientFrom="#C06044" gradientTo="#2A5C3F" />

      {/* Large sweeping web from bottom-right */}
      <CornerWeb flip className="absolute -bottom-24 -right-24 w-[72vw] h-[72vw] opacity-[0.08] pointer-events-none" gradientFrom="#2A5C3F" gradientTo="#C06044" />

      {/* Monstera leaves — bottom corners */}
      <MonsteraLeaf className="absolute -bottom-4 -left-2 w-52 h-auto text-brand opacity-60 pointer-events-none" />
      <MonsteraLeaf className="absolute -bottom-4 -right-2 w-36 h-auto text-ember opacity-40 pointer-events-none scale-x-[-1]" />

      <div className="relative max-w-7xl mx-auto w-full px-6 lg:px-12">
        {/* Section marker */}
        <div className="flex items-center gap-4 mb-10 md:mb-14">
          <span className="font-display text-xs text-dust tracking-label uppercase">
            01
          </span>
          <div className="flex-1 overflow-hidden"><svg viewBox="0 0 400 40" preserveAspectRatio="none" className="w-full h-6" aria-hidden="true"><path d="M0 20 C67 2,133 38,200 20 C267 2,333 38,400 20" stroke="#C8C2B8" strokeWidth="1.6" fill="none" strokeLinecap="round" /></svg></div>
        </div>

        {/* Headline */}
        <h1 className="font-display font-bold text-ink text-hero max-w-5xl mb-0">
          We weave intelligent
          <br className="hidden sm:block" /> business systems.
        </h1>

        {/* Wavy rule below headline */}
        <div className="my-8 md:my-12">
          <svg viewBox="0 0 1200 40" preserveAspectRatio="none" className="w-full h-6" aria-hidden="true">
            <path d="M0 20 C200 2,400 38,600 20 C800 2,1000 38,1200 20" stroke="#C8C2B8" strokeWidth="1.6" fill="none" strokeLinecap="round" />
          </svg>
        </div>

        {/* Subhead */}
        <p className="font-body text-lg md:text-xl text-slate leading-relaxed max-w-2xl">
          We dissolve the busywork between your tools, your team, and your growth —
          <br className="hidden md:block" />
          <span className="text-ink font-medium">
            so your business feels as effortless as the experience you give your clients.
          </span>
        </p>

        {/* Wavy bottom rule */}
        <div className="mt-16 md:mt-24">
          <svg viewBox="0 0 1200 40" preserveAspectRatio="none" className="w-full h-6" aria-hidden="true">
            <path d="M0 20 C200 2,400 38,600 20 C800 2,1000 38,1200 20" stroke="#C8C2B8" strokeWidth="1.6" fill="none" strokeLinecap="round" />
          </svg>
        </div>

        {/* Specificity strip */}
        <div className="mt-6 flex flex-wrap gap-x-8 gap-y-2">
          {['n8n', 'Claude API', 'Supabase', 'HubSpot', 'GoHighLevel', 'Airtable', 'Stripe', 'Lovable'].map(
            (tool) => (
              <span key={tool} className="font-body text-xs tracking-label text-dust uppercase">
                {tool}
              </span>
            )
          )}
        </div>
      </div>
    </section>
  )
}

// ─── Services ─────────────────────────────────────────────────────────────────

const services = [
  {
    n: '01',
    name: 'AI Workflow Automation',
    description:
      'n8n and Claude API. Lead generation, client onboarding, outreach systems, reporting pipelines, multi-agent backends that run 24/7 without human input.',
  },
  {
    n: '02',
    name: 'Custom Websites',
    description:
      'React-based on Lovable, with Stripe and Supabase. Mobile-first, payment-integrated, fully owned by you. Not rented. Not templated.',
  },
  {
    n: '03',
    name: 'Social Media and Content Automation',
    description:
      'AI systems that generate, schedule, and distribute on-brand content. No full-time content team required.',
  },
  {
    n: '04',
    name: 'CRM and Sales Intelligence',
    description:
      'HubSpot, GoHighLevel, and Airtable connected to AI agents that score, route, and follow up automatically.',
  },
  {
    n: '05',
    name: 'Full AI Business Operating System',
    description:
      'Website plus automation backend, built as one connected system. Everything talking to everything, from day one.',
  },
]

function Services() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden" id="services" aria-label="What we build">
      <CornerWeb flip className="absolute -top-4 -right-4 w-56 h-56 opacity-40 pointer-events-none" gradientFrom="#C06044" gradientTo="#2A5C3F" />
      <MonsteraLeaf className="absolute -bottom-6 -right-4 w-44 h-auto text-ember opacity-30 pointer-events-none scale-x-[-1]" />
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center gap-4 mb-0">
          <SectionLabel>What we build</SectionLabel>
          <div className="flex-1 overflow-hidden"><svg viewBox="0 0 400 40" preserveAspectRatio="none" className="w-full h-6" aria-hidden="true"><path d="M0 20 C67 2,133 38,200 20 C267 2,333 38,400 20" stroke="#C8C2B8" strokeWidth="1.6" fill="none" strokeLinecap="round" /></svg></div>
        </div>

        {/* Service registers */}
        <div>
          {services.map((s, i) => (
            <div key={s.n}>
              <div className="py-8 md:py-10 grid grid-cols-[auto,1fr] md:grid-cols-[64px,1fr,auto] gap-6 md:gap-12 items-start group">
                {/* Ordinal */}
                <span
                  className="font-display font-medium text-sm text-dust mt-1 tracking-label"
                  aria-hidden="true"
                >
                  {s.n}
                </span>

                {/* Content */}
                <div>
                  <h3 className="font-display font-semibold text-service-name text-ink mb-2 group-hover:text-brand transition-colors duration-200">
                    {s.name}
                  </h3>
                  <p className="font-body text-sm md:text-base text-slate leading-relaxed max-w-2xl">
                    {s.description}
                  </p>
                </div>

                {/* Desktop: small break mark */}
                <NeithBreakMark />
              </div>
              {i < services.length - 1 && <Rule />}
            </div>
          ))}
        </div>

        <Rule />
      </div>
    </section>
  )
}

// ─── Founders ─────────────────────────────────────────────────────────────────

function Founders() {
  return (
    <section
      className="relative bg-ink overflow-hidden py-24 md:py-36"
      id="about"
      aria-label="About the founders"
    >
      {/* Orb-weave background — ghosted at low opacity */}
      <div className="absolute inset-0 opacity-[0.07] pointer-events-none">
        <OrbWeaveSVG />
      </div>
      {/* Plants + webs on dark bg — paper-toned so they show */}
      <MonsteraLeaf className="absolute -bottom-4 -left-4 w-64 h-auto text-paper opacity-[0.08] pointer-events-none" />
      <MonsteraLeaf className="absolute top-12 -right-6 w-40 h-auto text-paper opacity-[0.06] pointer-events-none scale-x-[-1]" />
      <CornerWeb className="absolute -bottom-4 -right-4 w-52 h-52 opacity-20 pointer-events-none" gradientFrom="#F0EDE6" gradientTo="#2A5C3F" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section label */}
        <div className="flex items-center gap-4 mb-12 md:mb-16">
          <SectionLabel dark>Built by</SectionLabel>
          <div className="flex-1 overflow-hidden"><svg viewBox="0 0 400 40" preserveAspectRatio="none" className="w-full h-6" aria-hidden="true"><path d="M0 20 C67 2,133 38,200 20 C267 2,333 38,400 20" stroke="rgba(240,237,230,0.18)" strokeWidth="1.6" fill="none" strokeLinecap="round" /></svg></div>
          <NeithBreakMark dark />
        </div>

        {/* Pull-quote — the grid-breaking moment */}
        <div className="lg:-mx-4 xl:-mx-12 mb-16 md:mb-20">
          <blockquote>
            <p
              className="font-display italic font-semibold text-pullquote text-brand leading-tight"
            >
              &ldquo;We build what we
              <br className="hidden sm:block" /> wished had existed.&rdquo;
            </p>
          </blockquote>
        </div>

        <svg viewBox="0 0 1200 40" preserveAspectRatio="none" className="w-full h-6 mb-12 md:mb-16" aria-hidden="true"><path d="M0 20 C200 2,400 38,600 20 C800 2,1000 38,1200 20" stroke="rgba(240,237,230,0.18)" strokeWidth="1.6" fill="none" strokeLinecap="round" /></svg>

        {/* Founder body copy */}
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 mb-16">
          <div>
            <p className="font-body text-base md:text-lg text-paper/80 leading-relaxed mb-6">
              We&apos;ve both been inside large operations and watched manual process
              slow everything down. Every time. Not because the tools didn&apos;t
              exist. Because no one built the system that connected them.
            </p>
            <p className="font-body text-base md:text-lg text-paper/80 leading-relaxed">
              We do that now. Not consulting. Not templates. Not Zapier with a
              logo on it. Production systems with error handling, documentation,
              and nothing that requires babysitting.
            </p>
          </div>

          {/* Credential blocks */}
          <div className="space-y-8">
            <div>
              <p className="font-body text-xs tracking-label uppercase text-dust/60 mb-3">
                Founder — Operations
              </p>
              <svg viewBox="0 0 400 40" preserveAspectRatio="none" className="w-full h-6 mb-3" aria-hidden="true"><path d="M0 20 C67 2,133 38,200 20 C267 2,333 38,400 20" stroke="rgba(240,237,230,0.18)" strokeWidth="1.6" fill="none" strokeLinecap="round" /></svg>
              <p className="font-body text-sm text-paper/70 leading-relaxed">
                Enterprise ecommerce at scale: Amazon Vendor Central, Walmart
                Connect, Target Plus. The kind of operations where a single
                manual reporting process costs a team a week of capacity every
                quarter.
              </p>
            </div>

            <div>
              <p className="font-body text-xs tracking-label uppercase text-dust/60 mb-3">
                Founder — Product and Platform
              </p>
              <svg viewBox="0 0 400 40" preserveAspectRatio="none" className="w-full h-6 mb-3" aria-hidden="true"><path d="M0 20 C67 2,133 38,200 20 C267 2,333 38,400 20" stroke="rgba(240,237,230,0.18)" strokeWidth="1.6" fill="none" strokeLinecap="round" /></svg>
              <p className="font-body text-sm text-paper/70 leading-relaxed">
                Product and platform work inside Lyft, SurveyMonkey, and
                Google. Systems built to operate at scale, not to impress on a
                demo call.
              </p>
            </div>
          </div>
        </div>

        <svg viewBox="0 0 1200 40" preserveAspectRatio="none" className="w-full h-6" aria-hidden="true"><path d="M0 20 C200 2,400 38,600 20 C800 2,1000 38,1200 20" stroke="rgba(240,237,230,0.18)" strokeWidth="1.6" fill="none" strokeLinecap="round" /></svg>

        {/* Bottom note */}
        <div className="mt-10 flex items-center gap-4">
          <NeithBreakMark dark />
          <p className="font-body text-xs text-dust/50 tracking-label uppercase">
            Built by women who have been inside the system
          </p>
        </div>
      </div>
    </section>
  )
}

// ─── Process ──────────────────────────────────────────────────────────────────

const steps = [
  {
    n: '01',
    name: 'Scope',
    description:
      'We audit your current stack and map where manual process is costing you. We spec the exact system that replaces it — tools, logic, connections.',
  },
  {
    n: '02',
    name: 'Build',
    description:
      'We build in production. Error handling, logging, retry logic, documentation. No prototypes. No handoff to your developer.',
  },
  {
    n: '03',
    name: 'Deliver',
    description:
      'You get a running system with documentation you can actually read. No retainer required. No onboarding calls to schedule your next call.',
  },
]

function Process() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden" id="process" aria-label="How we work">
      <MonsteraLeaf className="absolute -top-8 -left-4 w-48 h-auto text-brand opacity-25 pointer-events-none" />
      <CornerWeb flip className="absolute -bottom-4 -right-4 w-60 h-60 opacity-35 pointer-events-none" gradientFrom="#2A5C3F" gradientTo="#C06044" />
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center gap-4 mb-0">
          <SectionLabel>How we work</SectionLabel>
          <div className="flex-1 overflow-hidden"><svg viewBox="0 0 400 40" preserveAspectRatio="none" className="w-full h-6" aria-hidden="true"><path d="M0 20 C67 2,133 38,200 20 C267 2,333 38,400 20" stroke="#C8C2B8" strokeWidth="1.6" fill="none" strokeLinecap="round" /></svg></div>
        </div>

        {/* Step registers */}
        <div>
          {steps.map((step, i) => (
            <div key={step.n}>
              <div className="py-8 md:py-12 grid grid-cols-[auto,1fr] md:grid-cols-[64px,200px,1fr] gap-6 md:gap-12 items-start">
                <span className="font-display font-medium text-sm text-dust mt-0.5 tracking-label">
                  {step.n}
                </span>
                <h3 className="font-display font-semibold text-service-name text-ink">
                  {step.name}
                </h3>
                <p className="font-body text-sm md:text-base text-slate leading-relaxed col-start-2 md:col-start-auto">
                  {step.description}
                </p>
              </div>
              {i < steps.length - 1 && <Rule />}
            </div>
          ))}
        </div>

        <Rule />
      </div>
    </section>
  )
}

// ─── Contact ──────────────────────────────────────────────────────────────────

function Contact() {
  return (
    <section
      className="relative py-24 md:py-32 overflow-hidden"
      style={{ background: '#E9E5DD' }}
      id="contact"
      aria-label="Contact"
    >
      <MonsteraLeaf className="absolute -bottom-6 -left-4 w-72 h-auto text-brand opacity-30 pointer-events-none" />
      <MonsteraLeaf className="absolute -top-6 -right-4 w-36 h-auto text-ember opacity-20 pointer-events-none scale-x-[-1]" />
      <CornerWeb className="absolute -top-4 -left-4 w-48 h-48 opacity-30 pointer-events-none" gradientFrom="#2A5C3F" gradientTo="#C06044" />
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section header */}
        <div className="flex items-center gap-4 mb-12 md:mb-16">
          <SectionLabel>Work with us</SectionLabel>
          <div className="flex-1 overflow-hidden"><svg viewBox="0 0 400 40" preserveAspectRatio="none" className="w-full h-6" aria-hidden="true"><path d="M0 20 C67 2,133 38,200 20 C267 2,333 38,400 20" stroke="#C8C2B8" strokeWidth="1.6" fill="none" strokeLinecap="round" /></svg></div>
        </div>

        {/* Headline */}
        <div className="mb-12 md:mb-16">
          <h2 className="font-display font-bold text-ink mb-4"
              style={{ fontSize: 'clamp(2rem, 5vw, 4rem)', lineHeight: '1.08', letterSpacing: '-0.02em' }}>
            Tell us what you&apos;re
            <br className="hidden sm:block" /> doing manually.
          </h2>
          <p className="font-body text-base md:text-lg text-slate max-w-xl leading-relaxed">
            We&apos;ll map the system that replaces it. No pitch. No deck. One
            conversation.
          </p>
        </div>

        <Rule />
        <div className="pt-12">
          <ContactForm />
        </div>
      </div>
    </section>
  )
}

// ─── Footer ───────────────────────────────────────────────────────────────────

function Footer() {
  return (
    <footer className="relative bg-ink py-12 md:py-16 overflow-hidden" aria-label="Footer">
      <MonsteraLeaf className="absolute -bottom-4 -right-4 w-44 h-auto text-paper opacity-[0.07] pointer-events-none scale-x-[-1]" />
      <CornerWeb className="absolute -top-2 -left-2 w-36 h-36 opacity-15 pointer-events-none" gradientFrom="#F0EDE6" gradientTo="#2A5C3F" />
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          {/* Logo + wordmark (white version) */}
          <div className="flex items-center gap-3">
            <svg
              viewBox="0 0 28 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-auto text-paper/70"
              aria-hidden="true"
            >
              <polygon points="14,2 26,14 14,26 2,14" stroke="currentColor" strokeWidth="1.8" />
              <polygon points="14,7 21,14 14,21 7,14" stroke="currentColor" strokeWidth="0.9" />
              <circle cx="14" cy="14" r="2" fill="currentColor" />
              <line x1="14" y1="26" x2="14" y2="35" stroke="currentColor" strokeWidth="1" />
            </svg>
            <span className="font-body font-medium text-paper/70 tracking-label text-xs uppercase">
              Nei<AnkhLetter />h AI
            </span>
          </div>

          {/* Center note */}
          <p className="font-body text-xs text-dust/50 tracking-label uppercase">
            Built by women who&apos;ve been inside the system
          </p>

          {/* Right: contact */}
          <div className="flex items-center gap-6">
            <a
              href="mailto:nicolasasoul@gmail.com"
              className="font-body text-xs text-dust/60 hover:text-paper transition-colors duration-200
                         focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
            >
              nicolasasoul@gmail.com
            </a>
            <span className="text-dust/30 text-xs">
              &copy; {new Date().getFullYear()}
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}

// Full-width wave that replaces the hard straight edge between sections
function WaveDivider({ from, to, flip = false }: { from: string; to: string; flip?: boolean }) {
  // One big smooth S-curve crescent spanning the full width
  const path = flip
    ? 'M0,60 Q360,0 720,60 Q1080,120 1440,60 L1440,120 L0,120 Z'
    : 'M0,60 Q360,120 720,60 Q1080,0 1440,60 L1440,120 L0,120 Z'
  return (
    <div style={{ background: from }} aria-hidden="true">
      <svg
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        style={{ display: 'block', width: '100%', height: '70px' }}
      >
        <path d={path} fill={to} />
      </svg>
    </div>
  )
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function Page() {
  return (
    <>
      <Hero />
      <Services />
      <MockupCarousel />
      <SystemsBuilt />
      {/* paper → ink */}
      <WaveDivider from="#F0EDE6" to="#111010" />
      <Founders />
      {/* ink → paper */}
      <WaveDivider from="#111010" to="#F0EDE6" flip />
      <Process />
      {/* paper → light bone tint */}
      <WaveDivider from="#F0EDE6" to="#E9E5DD" />
      <Contact />
      {/* bone tint → ink */}
      <WaveDivider from="#E9E5DD" to="#111010" flip />
      <Footer />
    </>
  )
}
