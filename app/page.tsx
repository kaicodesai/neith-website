import ContactForm from '@/components/ContactForm'

// ─── Shared primitives ────────────────────────────────────────────────────────

function Rule({ dark = false }: { dark?: boolean }) {
  return <div className={dark ? 'rule-ink' : 'rule'} />
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

// Double-diamond break mark ◇—◇ based on Neith's tablet symbols
function NeithBreakMark({ dark = false }: { dark?: boolean }) {
  return (
    <svg
      viewBox="0 0 52 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`w-10 h-auto ${dark ? 'text-dust/40' : 'text-dust'}`}
      aria-hidden="true"
    >
      <polygon points="9,9 15,3 21,9 15,15" stroke="currentColor" strokeWidth="1.3" />
      <line x1="21" y1="9" x2="31" y2="9" stroke="currentColor" strokeWidth="0.8" />
      <polygon points="31,9 37,3 43,9 37,15" stroke="currentColor" strokeWidth="1.3" />
    </svg>
  )
}

// Pinwheel bloom for corner decoration — all arcs, no sharp angles
function CornerBloom({ className }: { className?: string }) {
  const arms = 12
  return (
    <svg
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {Array.from({ length: arms }).map((_, i) => {
        const angle = (i * (360 / arms) * Math.PI) / 180
        return (
          <line
            key={i}
            x1="100" y1="100"
            x2={100 + 92 * Math.cos(angle)}
            y2={100 + 92 * Math.sin(angle)}
            stroke="currentColor" strokeWidth="0.9"
          />
        )
      })}
      <circle cx="100" cy="100" r="32" stroke="currentColor" strokeWidth="0.7" />
      <circle cx="100" cy="100" r="60" stroke="currentColor" strokeWidth="0.7" />
      <circle cx="100" cy="100" r="88" stroke="currentColor" strokeWidth="0.7" />
      <circle cx="100" cy="100" r="3.5" fill="currentColor" />
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
      <path d="M 25 5.5 L 31 9 L 25 12.5" stroke="currentColor" strokeWidth="1.2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
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

// ─── Hero ─────────────────────────────────────────────────────────────────────

function Hero() {
  return (
    <section
      className="relative min-h-screen flex flex-col justify-center pt-24 pb-20 overflow-hidden"
      aria-label="Introduction"
    >
      {/* Corner bloom decorations */}
      <CornerBloom className="absolute -top-16 -left-16 w-72 h-72 text-brand opacity-[0.12] pointer-events-none" />
      <CornerBloom className="absolute -top-16 -right-16 w-72 h-72 text-ember opacity-[0.10] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto w-full px-6 lg:px-12">
        {/* Section marker */}
        <div className="flex items-center gap-4 mb-10 md:mb-14">
          <span className="font-display text-xs text-dust tracking-label uppercase">
            01
          </span>
          <div className="flex-1 rule" />
        </div>

        {/* Headline */}
        <h1 className="font-display font-bold text-ink text-hero max-w-5xl mb-0">
          We weave intelligent
          <br className="hidden sm:block" /> business systems.
        </h1>

        {/* Rule below headline */}
        <div className="rule my-8 md:my-12" />

        {/* Subhead + CTA row */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 lg:gap-16">
          <p className="font-body text-lg md:text-xl text-slate leading-relaxed max-w-2xl">
            We eliminate the Manual Layer between your tools, your team, and your growth.
            <br className="hidden md:block" />
            <span className="text-ink font-medium">
              Production-grade. Documented. Done.
            </span>
          </p>

          <a
            href="#contact"
            className="shrink-0 inline-flex items-center gap-3 font-body text-xs font-medium tracking-label uppercase
                       bg-ink text-paper px-8 py-4 rounded-full
                       hover:bg-brand
                       focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand
                       transition-colors duration-200 self-start lg:self-auto"
          >
            <BowArrowIcon className="w-8 h-auto" />
            Book a 30-minute call
          </a>
        </div>

        {/* Bottom rule */}
        <div className="rule mt-16 md:mt-24" />

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
    <section className="py-24 md:py-32" id="services" aria-label="What we build">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center gap-4 mb-0">
          <SectionLabel>What we build</SectionLabel>
          <div className="flex-1 rule" />
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

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section label */}
        <div className="flex items-center gap-4 mb-12 md:mb-16">
          <SectionLabel dark>Built by</SectionLabel>
          <div className="flex-1 rule-ink" />
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

        <div className="rule-ink mb-12 md:mb-16" />

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
              <div className="rule-ink mb-3" />
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
              <div className="rule-ink mb-3" />
              <p className="font-body text-sm text-paper/70 leading-relaxed">
                Product and platform work inside Lyft, SurveyMonkey, and
                Google. Systems built to operate at scale, not to impress on a
                demo call.
              </p>
            </div>
          </div>
        </div>

        <div className="rule-ink" />

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
    <section className="py-24 md:py-32" id="process" aria-label="How we work">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center gap-4 mb-0">
          <SectionLabel>How we work</SectionLabel>
          <div className="flex-1 rule" />
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
      className="py-24 md:py-32 bg-bone/30"
      id="contact"
      aria-label="Contact"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section header */}
        <div className="flex items-center gap-4 mb-12 md:mb-16">
          <SectionLabel>Work with us</SectionLabel>
          <div className="flex-1 rule" />
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
    <footer className="bg-ink py-12 md:py-16" aria-label="Footer">
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
              Neith AI
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

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function Page() {
  return (
    <>
      <Hero />
      <Services />
      <Founders />
      <Process />
      <Contact />
      <Footer />
    </>
  )
}
