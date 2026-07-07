'use client'

import { useState } from 'react'

// ─── Sparkline helper ─────────────────────────────────────────────────────────
function spark(data: number[], x: number, y: number, w: number, h: number) {
  const lo = Math.min(...data), hi = Math.max(...data), rng = hi - lo || 1
  return data.map((v, i) => `${x + (i / (data.length - 1)) * w},${y + h - ((v - lo) / rng) * h}`).join(' ')
}

// ─── Shared chrome ────────────────────────────────────────────────────────────
function Chrome({ view }: { view: 'feed' | 'analytics' | 'systems' | 'reports' }) {
  const nav = ['Feed', 'Analytics', 'Systems', 'Reports']
  return (
    <>
      {/* Header */}
      <rect width="800" height="44" fill="#0B1310" />
      <polygon points="16,22 22,15 28,22 22,29" stroke="#2A5C3F" strokeWidth={1.3} fill="none" />
      <circle cx="22" cy="22" r="2.2" fill="#2A5C3F" />
      <text x="36" y="19" fill="#F0EDE6" fontSize={10} fontWeight="600" fontFamily="system-ui" letterSpacing={2}>COMMAND</text>
      <text x="36" y="33" fill="#4A7A5E" fontSize={7.5} fontFamily="system-ui" letterSpacing={1}>by Neith AI</text>
      {/* Live pulse */}
      <circle cx="614" cy="22" r="4" fill="#2A5C3F" className="animate-pulse" />
      <text x="624" y="26" fill="#4A7A5E" fontSize={8.5} fontFamily="system-ui">Bloom Studio</text>
      {/* Avatar */}
      <circle cx="770" cy="22" r="11" fill="#2A5C3F" fillOpacity={0.25} stroke="#2A5C3F" strokeWidth={0.8} />
      <text x="770" y="26.5" fill="#2A5C3F" fontSize={10} fontFamily="system-ui" textAnchor="middle" fontWeight="600">B</text>
      {/* Notif badge */}
      <rect x="726" y="13" width="18" height="18" rx={3} fill="none" stroke="#2A5C3F" strokeWidth={0.7} strokeOpacity={0.4} />
      <text x="735" y="25" fill="#4A7A5E" fontSize={8.5} fontFamily="system-ui" textAnchor="middle">2</text>

      {/* Sidebar */}
      <rect x="0" y="44" width="148" height="436" fill="#08100D" />
      <line x1="148" y1="44" x2="148" y2="480" stroke="#172519" strokeWidth={1} />
      {nav.map((label, i) => {
        const active = label.toLowerCase() === view
        const y = 88 + i * 52
        return (
          <g key={label}>
            {active && <rect x="0" y={y - 16} width="148" height="34" fill="#2A5C3F" fillOpacity={0.13} />}
            {active && <rect x="0" y={y - 16} width="3" height="34" fill="#2A5C3F" />}
            {/* icon lines */}
            <line x1="20" y1={y - 2} x2="28" y2={y - 2} stroke={active ? '#2A5C3F' : '#3A5244'} strokeWidth={1.5} />
            <line x1="20" y1={y + 3} x2="26" y2={y + 3} stroke={active ? '#2A5C3F' : '#3A5244'} strokeWidth={1} />
            <text x="38" y={y + 5} fill={active ? '#F0EDE6' : '#4A7A5E'} fontSize={11}
              fontFamily="system-ui" fontWeight={active ? '500' : '400'}>{label}</text>
          </g>
        )
      })}
      <line x1="16" y1="445" x2="132" y2="445" stroke="#172519" strokeWidth={0.6} />
      <circle cx="24" cy="460" r="3.5" fill="#2A5C3F" />
      <text x="34" y="464" fill="#3A5244" fontSize={8} fontFamily="system-ui">All systems live</text>
    </>
  )
}

// ─── Slide 1: Live Feed ───────────────────────────────────────────────────────
function SlideFeed() {
  const events = [
    { time: '2:14:34 PM', type: 'ALERT',   text: 'Slack → #sales  ·  "Hot lead: Emma Chen, $8k ACV est."',   dot: '#2A5C3F' },
    { time: '2:14:33 PM', type: 'CRM',     text: 'Deal created  ·  Emma Chen  ·  Bloom-2047  ·  $8,400',     dot: '#2A5C3F' },
    { time: '2:14:33 PM', type: 'SCORE',   text: 'Lead scored  ·  Emma Chen  ·  9.2 / 10  →  HubSpot',       dot: '#2A5C3F' },
    { time: '2:11:10 PM', type: 'EMAIL',   text: 'Welcome kit sent  ·  Marcus Webb  ·  portal link included', dot: '#2A5C3F' },
    { time: '2:11:09 PM', type: 'ACCOUNT', text: 'Account created  ·  Marcus Webb  ·  Supabase + Airtable',   dot: '#2A5C3F' },
    { time: '2:11:08 PM', type: 'PAYMENT', text: 'Payment received  ·  Marcus Webb  ·  Stripe  ·  $2,200',    dot: '#C06044' },
    { time: '2:08:44 PM', type: 'NURTURE', text: 'Nurture triggered  ·  Jordan P.  ·  "7-day cold" sequence', dot: '#4A7A5E' },
    { time: '2:08:44 PM', type: 'SCORE',   text: 'Lead scored  ·  Jordan P.  ·  2.1 / 10  →  Nurture',       dot: '#4A7A5E' },
    { time: '1:59:12 PM', type: 'REPORT',  text: 'Intelligence brief delivered  ·  leadership@bloomstudio.co', dot: '#C06044' },
  ]
  const stats = [
    { label: 'Leads Processed', val: '47' },
    { label: 'Deals Created', val: '8' },
    { label: 'Pipeline Added', val: '$18.4k' },
    { label: 'Hours Saved', val: '12.5' },
  ]
  return (
    <svg viewBox="0 0 800 480" className="w-full h-full" aria-label="Live feed mockup">
      <rect width="800" height="480" fill="#0A0F0D" />
      <Chrome view="feed" />

      {/* Content header */}
      <rect x="148" y="44" width="652" height="36" fill="#0C1410" />
      <text x="168" y="66" fill="#F0EDE6" fontSize={13} fontWeight="500" fontFamily="system-ui">Live Feed</text>
      <text x="254" y="66" fill="#3A5244" fontSize={11} fontFamily="system-ui">· updating in real time</text>
      {/* today summary panel */}
      <rect x="596" y="80" width="196" height="388" fill="#0C1410" />
      <line x1="596" y1="80" x2="596" y2="468" stroke="#172519" strokeWidth={0.8} />
      <text x="614" y="104" fill="#4A7A5E" fontSize={8} fontFamily="system-ui" letterSpacing={1.2}>TODAY'S SUMMARY</text>
      {stats.map((s, i) => (
        <g key={i}>
          <line x1="614" y1={120 + i * 64} x2="782" y2={120 + i * 64} stroke="#172519" strokeWidth={0.5} />
          <text x="614" y={114 + i * 64} fill="#3A5244" fontSize={8} fontFamily="system-ui" letterSpacing={0.8}>{s.label.toUpperCase()}</text>
          <text x="614" y={142 + i * 64} fill="#F0EDE6" fontSize={26} fontWeight="700" fontFamily="system-ui">{s.val}</text>
        </g>
      ))}

      {/* Events */}
      <rect x="148" y="80" width="448" height="388" fill="#0A0F0D" />
      {/* Column labels */}
      <text x="168" y="100" fill="#3A5244" fontSize={8} fontFamily="system-ui" letterSpacing={1}>TIME</text>
      <text x="244" y="100" fill="#3A5244" fontSize={8} fontFamily="system-ui" letterSpacing={1}>TYPE</text>
      <text x="310" y="100" fill="#3A5244" fontSize={8} fontFamily="system-ui" letterSpacing={1}>EVENT</text>
      <line x1="148" y1="105" x2="596" y2="105" stroke="#172519" strokeWidth={0.6} />
      {events.map((ev, i) => (
        <g key={i}>
          <rect x="148" y={108 + i * 38} width="448" height="38"
            fill={i === 0 ? '#0F1D16' : i % 2 === 0 ? '#0A0F0D' : '#0C1410'} />
          <circle cx="161" cy={127 + i * 38} r="3.5" fill={ev.dot} />
          <text x="172" y={131 + i * 38} fill="#3A5244" fontSize={8.5} fontFamily="system-ui">{ev.time}</text>
          <rect x="240" y={119 + i * 38} width={ev.type.length * 5.5 + 8} height={16} rx={3}
            fill={ev.dot} fillOpacity={0.15} />
          <text x="244" y={131 + i * 38} fill={ev.dot} fontSize={7.5} fontWeight="500" fontFamily="system-ui" letterSpacing={0.5}>{ev.type}</text>
          <text x="308" y={131 + i * 38} fill={i < 3 ? '#C8D5CE' : '#8AAF9B'} fontSize={9.5} fontFamily="system-ui">{ev.text}</text>
        </g>
      ))}
      <rect x="148" y="448" width="448" height="20" fill="#0B1310" />
      <text x="168" y="461" fill="#3A5244" fontSize={8} fontFamily="system-ui">n8n · Claude API · HubSpot · Stripe · Supabase</text>
    </svg>
  )
}

// ─── Slide 2: Analytics ───────────────────────────────────────────────────────
function SlideAnalytics() {
  const sparkData = [
    [31, 38, 35, 44, 42, 53, 49, 58],
    [18, 22, 19, 26, 24, 31, 28, 33],
    [4.2, 5.1, 4.8, 6.0, 5.6, 7.2, 6.8, 8.1],
  ]
  const kpis = [
    { label: 'REVENUE',       val: '$58,200', delta: '+18% vs last week', c: '#2A5C3F',  spark: sparkData[0] },
    { label: 'LEADS SCORED',  val: '214',     delta: '+23% vs last week', c: '#2A5C3F',  spark: sparkData[1] },
    { label: 'HOURS SAVED',   val: '18.5',    delta: 'automated this week', c: '#C06044', spark: sparkData[2] },
  ]
  const insights = [
    { text: 'Walmart channel outperformed forecast by 23% — the automated reorder alert system drove $12k in reactivated orders.' },
    { text: 'Lead-to-deal conversion is tracking at 17.4%, up from 12.1% since routing automation launched 6 weeks ago.' },
    { text: 'Wednesday inbound volume is 2.4× higher than Monday. Consider shifting outreach sequences to Tue night.' },
  ]
  // area chart path
  const area = 'M 160,380 L 160,362 Q 204,343 248,325 Q 292,334 336,343 Q 380,318 424,293 Q 468,299 512,306 Q 556,275 600,245 Q 644,254 688,264 Q 732,240 776,216 L 776,380 Z'
  const line = 'M 160,362 Q 204,343 248,325 Q 292,334 336,343 Q 380,318 424,293 Q 468,299 512,306 Q 556,275 600,245 Q 644,254 688,264 Q 732,240 776,216'
  const gridYs = [216, 255, 293, 332, 370]
  const gridLabels = ['$58k', '$48k', '$38k', '$28k', '$18k']
  const weekLabels = ['May 19', 'Jun 2', 'Jun 16', 'Jun 30', 'Jul 7']
  const weekXs = [160, 336, 512, 688, 776]

  return (
    <svg viewBox="0 0 800 480" className="w-full h-full" aria-label="Analytics mockup">
      <defs>
        <linearGradient id="ag" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#2A5C3F" stopOpacity={0.55} />
          <stop offset="100%" stopColor="#2A5C3F" stopOpacity={0} />
        </linearGradient>
        <filter id="glow2">
          <feGaussianBlur stdDeviation={3} result="b" />
          <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>
      <rect width="800" height="480" fill="#0A0F0D" />
      <Chrome view="analytics" />

      {/* KPI tiles */}
      {kpis.map((k, i) => {
        const x = 148 + i * 217
        const pts = spark(k.spark, x + 12, 130, 140, 30)
        return (
          <g key={i}>
            <rect x={x} y="80" width="210" height="118" fill="#0C1410" />
            <line x1={x} y1="80" x2={x + 210} y2="80" stroke="#172519" strokeWidth={0.8} />
            <text x={x + 14} y="100" fill="#3A5244" fontSize={8} fontFamily="system-ui" letterSpacing={1.2}>{k.label}</text>
            <text x={x + 14} y="126" fill="#F0EDE6" fontSize={28} fontWeight="700" fontFamily="system-ui">{k.val}</text>
            <text x={x + 14} y="143" fill={k.c} fontSize={8.5} fontFamily="system-ui">{k.delta}</text>
            <polyline points={pts} fill="none" stroke={k.c} strokeWidth={1.2} opacity={0.7} />
            <line x1={x + 210} y1="80" x2={x + 210} y2="198" stroke="#172519" strokeWidth={0.8} />
          </g>
        )
      })}
      <rect x="148" y="80" width="504" height="118" fill="none" />
      {/* last tile edge */}
      <line x1="148" y1="198" x2="652" y2="198" stroke="#172519" strokeWidth={0.8} />

      {/* Chart bg */}
      <rect x="148" y="198" width="448" height="200" fill="#090D0B" />
      {/* Grid */}
      {gridYs.map((gy, i) => (
        <g key={i}>
          <line x1="160" y1={gy + 8} x2="590" y2={gy + 8} stroke="#172519" strokeWidth={0.6} />
          <text x="152" y={gy + 12} fill="#3A5244" fontSize={8} fontFamily="system-ui" textAnchor="end">{gridLabels[i]}</text>
        </g>
      ))}
      {/* Current week line */}
      <line x1="776" y1="224" x2="776" y2="388" stroke="#2A5C3F" strokeWidth={0.6} strokeDasharray="3,3" strokeOpacity={0.5} />
      {/* Area fill */}
      <path d={area} fill="url(#ag)" />
      {/* Line */}
      <path d={line} fill="none" stroke="#2A5C3F" strokeWidth={1.8} />
      {/* Latest point glow */}
      <circle cx="776" cy="216" r="6" fill="#2A5C3F" filter="url(#glow2)" />
      <circle cx="776" cy="216" r="3.5" fill="#F0EDE6" />
      {/* Latest label */}
      <rect x="740" y="200" width="52" height="18" rx={3} fill="#2A5C3F" />
      <text x="766" y="212.5" fill="#F0EDE6" fontSize={9} fontFamily="system-ui" textAnchor="middle" fontWeight="500">$58.2k</text>
      {/* Week labels */}
      {weekLabels.map((wl, i) => (
        <text key={i} x={weekXs[i]} y="402" fill="#3A5244" fontSize={8} fontFamily="system-ui" textAnchor="middle">{wl}</text>
      ))}
      <text x="168" y="215" fill="#3A5244" fontSize={8} fontFamily="system-ui" letterSpacing={1}>WEEKLY REVENUE — 8 WEEKS</text>

      {/* AI Insights panel */}
      <rect x="596" y="80" width="204" height="388" fill="#0C1410" />
      <line x1="596" y1="80" x2="596" y2="468" stroke="#172519" strokeWidth={0.8} />
      <text x="614" y="104" fill="#4A7A5E" fontSize={8} fontFamily="system-ui" letterSpacing={1.2}>CLAUDE INSIGHTS</text>
      <line x1="614" y1="110" x2="786" y2="110" stroke="#172519" strokeWidth={0.5} />
      {insights.map((ins, i) => (
        <g key={i}>
          <rect x="614" y={118 + i * 108} width="4" height="36" rx={2} fill="#2A5C3F" fillOpacity={0.7} />
          {ins.text.match(/.{1,24}/g)!.slice(0, 5).map((line, li) => (
            <text key={li} x="624" y={132 + i * 108 + li * 12} fill="#8AAF9B" fontSize={8.5} fontFamily="system-ui">{line}</text>
          ))}
        </g>
      ))}

      {/* Bottom strip */}
      <rect x="148" y="398" width="448" height="70" fill="#090D0B" />
      <line x1="148" y1="398" x2="596" y2="398" stroke="#172519" strokeWidth={0.6} />
    </svg>
  )
}

// ─── Slide 3: Systems ─────────────────────────────────────────────────────────
function SlideSystems() {
  const workflows = [
    { name: 'Lead Qualification',   status: 'Running',    sc: '#2A5C3F', runs: '1,247', rate: 98, last: '2 min ago'  },
    { name: 'Client Onboarding',    status: 'Active (2)', sc: '#2A5C3F', runs: '94',    rate: 100, last: '11 min ago' },
    { name: 'Content Distribution', status: 'Running',    sc: '#2A5C3F', runs: '389',   rate: 96, last: '58 min ago' },
    { name: 'Weekly Reporting',     status: 'Scheduled',  sc: '#C06044', runs: '52',    rate: 100, last: 'Mon 7:00 AM'},
    { name: 'CRM Intelligence',     status: 'Idle',       sc: '#3A5244', runs: '28',    rate: 93, last: '3 days ago'  },
  ]
  const nodes = ['Website Form', 'n8n', 'Claude API', 'HubSpot', 'Slack']
  const nodeColors = ['#172519', '#1C3324', '#2A5C3F', '#172519', '#172519']
  const runs = [
    { time: '2:14 PM', dur: '1.4s', name: 'Emma Chen',   score: '9.2' },
    { time: '2:08 PM', dur: '1.3s', name: 'Jordan P.',   score: '2.1' },
    { time: '1:52 PM', dur: '1.6s', name: 'Alex Torres', score: '7.8' },
    { time: '1:44 PM', dur: '1.4s', name: 'Kim Yu',      score: '4.5' },
  ]
  return (
    <svg viewBox="0 0 800 480" className="w-full h-full" aria-label="Systems mockup">
      <rect width="800" height="480" fill="#0A0F0D" />
      <Chrome view="systems" />

      {/* Left: workflow list */}
      <rect x="148" y="44" width="280" height="436" fill="#090D0B" />
      <rect x="148" y="44" width="280" height="34" fill="#0C1410" />
      <text x="164" y="65" fill="#F0EDE6" fontSize={11} fontWeight="500" fontFamily="system-ui">Active Systems</text>
      <line x1="148" y1="78" x2="428" y2="78" stroke="#172519" strokeWidth={0.8} />
      {workflows.map((wf, i) => (
        <g key={i}>
          <rect x="148" y={78 + i * 72} width="280" height="72"
            fill={i === 0 ? '#0F1D16' : '#090D0B'} />
          {i === 0 && <rect x="148" y={78} width="3" height="72" fill="#2A5C3F" />}
          <line x1="148" y1={150 + i * 72} x2="428" y2={150 + i * 72} stroke="#172519" strokeWidth={0.5} />
          <circle cx="172" cy={114 + i * 72} r="4.5" fill={wf.sc} fillOpacity={i === 3 ? 0.6 : 1} />
          <text x="184" y={108 + i * 72} fill={i < 3 ? '#D0DDD8' : i === 3 ? '#8AAF9B' : '#4A7A5E'}
            fontSize={10.5} fontWeight="500" fontFamily="system-ui">{wf.name}</text>
          <text x="184" y={122 + i * 72} fill={wf.sc} fontSize={8.5} fontFamily="system-ui">{wf.status}</text>
          <text x="184" y={135 + i * 72} fill="#3A5244" fontSize={8} fontFamily="system-ui">{wf.last} · {wf.runs} runs</text>
          {/* Success rate bar */}
          <rect x="184" y={140 + i * 72} width="108" height="3" rx={1.5} fill="#172519" />
          <rect x="184" y={140 + i * 72} width={wf.rate * 1.08} height="3" rx={1.5} fill={wf.sc} fillOpacity={0.7} />
        </g>
      ))}

      {/* Right: selected workflow detail */}
      <rect x="428" y="44" width="372" height="436" fill="#090D0B" />
      <rect x="428" y="44" width="372" height="34" fill="#0C1410" />
      <line x1="428" y1="44" x2="428" y2="480" stroke="#172519" strokeWidth={0.8} />
      <text x="444" y="65" fill="#F0EDE6" fontSize={11} fontWeight="500" fontFamily="system-ui">Lead Qualification</text>
      <circle cx="568" cy="62" r="4" fill="#2A5C3F" className="animate-pulse" />
      <text x="578" y="66" fill="#2A5C3F" fontSize={8.5} fontFamily="system-ui">Running</text>
      <line x1="428" y1="78" x2="800" y2="78" stroke="#172519" strokeWidth={0.8} />

      {/* Flow diagram */}
      <text x="444" y="102" fill="#3A5244" fontSize={8} fontFamily="system-ui" letterSpacing={1}>PIPELINE</text>
      {nodes.map((n, i) => {
        const x = 444 + i * 66
        const isActive = i === 2
        return (
          <g key={i}>
            {i > 0 && <line x1={x - 9} y1="122" x2={x + 1} y2="122" stroke={i <= 2 ? '#2A5C3F' : '#172519'} strokeWidth={0.8} />}
            <rect x={x} y="112" width={58} height="20" rx={3} fill={nodeColors[i]} stroke={isActive ? '#2A5C3F' : '#1A2B22'} strokeWidth={isActive ? 1.2 : 0.6} />
            <text x={x + 29} y="125" fill={isActive ? '#F0EDE6' : '#8AAF9B'} fontSize={7.5} fontFamily="system-ui" textAnchor="middle">{n}</text>
          </g>
        )
      })}

      {/* Recent runs */}
      <text x="444" y="158" fill="#3A5244" fontSize={8} fontFamily="system-ui" letterSpacing={1}>RECENT EXECUTIONS</text>
      <line x1="444" y1="164" x2="786" y2="164" stroke="#172519" strokeWidth={0.5} />
      {/* column labels */}
      {['TIME', 'DURATION', 'LEAD', 'SCORE', 'STATUS'].map((h, i) => {
        const xs = [444, 506, 566, 672, 732]
        return <text key={i} x={xs[i]} y="180" fill="#3A5244" fontSize={7.5} fontFamily="system-ui" letterSpacing={0.8}>{h}</text>
      })}
      <line x1="444" y1="185" x2="786" y2="185" stroke="#172519" strokeWidth={0.5} />
      {runs.map((r, i) => {
        const score = parseFloat(r.score)
        const hot = score >= 7
        return (
          <g key={i}>
            <rect x="428" y={188 + i * 38} width="372" height="38" fill={i % 2 === 0 ? '#0A0F0D' : '#0C1410'} />
            <text x="444" y={211 + i * 38} fill="#6A9A7E" fontSize={9} fontFamily="system-ui">{r.time}</text>
            <text x="506" y={211 + i * 38} fill="#4A7A5E" fontSize={9} fontFamily="system-ui">{r.dur}</text>
            <text x="566" y={211 + i * 38} fill="#C8D5CE" fontSize={9} fontFamily="system-ui">{r.name}</text>
            <rect x="668" y={200 + i * 38} width="32" height="16" rx={8} fill={hot ? '#2A5C3F' : '#1A2B22'} />
            <text x="684" y={211 + i * 38} fill={hot ? '#F0EDE6' : '#4A7A5E'} fontSize={8.5} fontFamily="system-ui" textAnchor="middle">{r.score}</text>
            <circle cx="740" cy={208 + i * 38} r="3.5" fill="#2A5C3F" />
            <text x="750" y={212 + i * 38} fill="#4A7A5E" fontSize={8.5} fontFamily="system-ui">success</text>
          </g>
        )
      })}

      {/* Stats row */}
      <line x1="428" y1="342" x2="800" y2="342" stroke="#172519" strokeWidth={0.8} />
      {[
        { l: 'LIFETIME RUNS', v: '1,247' },
        { l: 'AVG DURATION', v: '1.4s' },
        { l: 'SUCCESS RATE', v: '98.2%' },
        { l: 'TRIGGER', v: 'Webhook' },
      ].map((s, i) => (
        <g key={i}>
          <text x={444 + i * 88} y="362" fill="#3A5244" fontSize={7.5} fontFamily="system-ui" letterSpacing={0.8}>{s.l}</text>
          <text x={444 + i * 88} y="384" fill="#F0EDE6" fontSize={16} fontWeight="600" fontFamily="system-ui">{s.v}</text>
        </g>
      ))}
    </svg>
  )
}

// ─── Slide 4: Intelligence Brief ──────────────────────────────────────────────
function SlideReports() {
  const channels = [
    { name: 'Amazon Vendor',  rev: '$24,100', delta: '+14%', share: 41, c: '#2A5C3F' },
    { name: 'Walmart Connect', rev: '$18,600', delta: '+31%', share: 32, c: '#2A5C3F' },
    { name: 'Paid Social',    rev: '$9,400',  delta: '+8%',  share: 16, c: '#C06044' },
    { name: 'Direct / Email', rev: '$6,100',  delta: '+4%',  share: 11, c: '#3A5244' },
  ]
  const areaLine = 'M 164,350 Q 208,332 252,314 Q 296,324 340,332 Q 384,308 428,282 Q 472,288 516,296 Q 560,264 604,234 Q 648,244 692,252 Q 736,226 780,204'
  const areaFill = 'M 164,370 L 164,350 Q 208,332 252,314 Q 296,324 340,332 Q 384,308 428,282 Q 472,288 516,296 Q 560,264 604,234 Q 648,244 692,252 Q 736,226 780,204 L 780,370 Z'
  const commentary = [
    'Walmart Connect delivered the strongest WoW growth at +31%, driven entirely by the',
    'automated reorder alert system deployed in Week 5. Amazon held steady at +14%.',
    'Paid social ROAS improved to 4.1× after Claude began rewriting ad copy variants.',
    'Recommendation: allocate 15% of June Paid Social budget to Walmart Sponsored Brands.',
  ]
  return (
    <svg viewBox="0 0 800 480" className="w-full h-full" aria-label="Intelligence brief mockup">
      <defs>
        <linearGradient id="rg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#2A5C3F" stopOpacity={0.4} />
          <stop offset="100%" stopColor="#2A5C3F" stopOpacity={0} />
        </linearGradient>
      </defs>
      <rect width="800" height="480" fill="#0A0F0D" />
      <Chrome view="reports" />

      {/* Report area */}
      <rect x="148" y="44" width="652" height="436" fill="#090D0B" />
      <rect x="148" y="44" width="652" height="38" fill="#0C1410" />
      <text x="164" y="63" fill="#F0EDE6" fontSize={11} fontWeight="500" fontFamily="system-ui">Intelligence Brief  ·  Week of July 7, 2025</text>
      <circle cx="720" cy="63" r="3.5" fill="#C06044" />
      <text x="730" y="67" fill="#C06044" fontSize={8} fontFamily="system-ui">Delivered Mon 7:00 AM</text>
      <line x1="148" y1="82" x2="800" y2="82" stroke="#172519" strokeWidth={0.8} />

      {/* Hero metric */}
      <text x="164" y="110" fill="#3A5244" fontSize={8.5} fontFamily="system-ui" letterSpacing={1.2}>TOTAL REVENUE THIS WEEK</text>
      <text x="164" y="158" fill="#F0EDE6" fontSize={54} fontWeight="700" fontFamily="system-ui">$58,200</text>
      <rect x="164" y="168" width="66" height="20" rx={3} fill="#2A5C3F" fillOpacity={0.2} />
      <text x="197" y="181" fill="#2A5C3F" fontSize={9} fontFamily="system-ui" textAnchor="middle" fontWeight="500">+18% WoW</text>
      <text x="244" y="181" fill="#3A5244" fontSize={8.5} fontFamily="system-ui">vs $49,300 last week</text>

      {/* Sparkline */}
      <path d={areaFill} fill="url(#rg)" />
      <path d={areaLine} fill="none" stroke="#2A5C3F" strokeWidth={1.5} />
      <circle cx="780" cy="204" r="4" fill="#2A5C3F" />
      <circle cx="780" cy="204" r="2" fill="#F0EDE6" />
      <line x1="164" y1="370" x2="780" y2="370" stroke="#172519" strokeWidth={0.5} />
      {['May 19', 'May 26', 'Jun 9', 'Jun 23', 'Jul 7'].map((wl, i) => (
        <text key={i} x={[164,252,428,604,780][i]} y="382" fill="#3A5244" fontSize={7.5} fontFamily="system-ui" textAnchor="middle">{wl}</text>
      ))}

      {/* Channel breakdown */}
      <line x1="556" y1="82" x2="556" y2="392" stroke="#172519" strokeWidth={0.8} />
      <text x="572" y="105" fill="#3A5244" fontSize={8} fontFamily="system-ui" letterSpacing={1.2}>CHANNEL BREAKDOWN</text>
      {channels.map((ch, i) => (
        <g key={i}>
          <text x="572" y={128 + i * 60} fill="#6A9A7E" fontSize={9} fontFamily="system-ui">{ch.name}</text>
          <text x="572" y={146 + i * 60} fill="#F0EDE6" fontSize={17} fontWeight="600" fontFamily="system-ui">{ch.rev}</text>
          <rect x="648" y={137 + i * 60} width={ch.share * 1.3} height={10} rx={2} fill={ch.c} fillOpacity={0.6} />
          <text x="572" y={160 + i * 60} fill={ch.c} fontSize={8} fontFamily="system-ui">{ch.delta} WoW</text>
        </g>
      ))}

      {/* Commentary */}
      <line x1="148" y1="392" x2="556" y2="392" stroke="#172519" strokeWidth={0.8} />
      <text x="164" y="410" fill="#3A5244" fontSize={8} fontFamily="system-ui" letterSpacing={1.2}>CLAUDE COMMENTARY</text>
      {commentary.map((line, i) => (
        <text key={i} x="164" y={424 + i * 12} fill="#6A9A7E" fontSize={8.5} fontFamily="system-ui">{line}</text>
      ))}
    </svg>
  )
}

// ─── Carousel shell ───────────────────────────────────────────────────────────
const SLIDES = [
  {
    el: <SlideFeed />,
    caption: 'Live Feed — every automation action timestamped and traceable in real time. Leads scored, deals created, emails sent. Nothing falls through the gap.',
  },
  {
    el: <SlideAnalytics />,
    caption: 'Analytics — eight weeks of revenue in one view, with Claude surfacing the patterns your team would otherwise spend hours finding manually.',
  },
  {
    el: <SlideSystems />,
    caption: 'Systems — every workflow, its run count, success rate, and last execution. The selected view shows each lead processed, scored, and routed.',
  },
  {
    el: <SlideReports />,
    caption: 'Intelligence Brief — delivered to your leadership inbox every Monday at 7 AM. Sourced, written, and formatted by Claude. Zero human hours.',
  },
]

export default function MockupCarousel() {
  const [idx, setIdx] = useState(0)
  const prev = () => setIdx(i => (i - 1 + SLIDES.length) % SLIDES.length)
  const next = () => setIdx(i => (i + 1) % SLIDES.length)

  return (
    <section className="py-16 md:py-20 overflow-hidden" aria-label="Platform preview">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center gap-4 mb-8">
          <p className="font-body text-xs tracking-label uppercase text-dust whitespace-nowrap">Platform preview</p>
          <div className="flex-1 overflow-hidden">
            <svg viewBox="0 0 400 40" preserveAspectRatio="none" className="w-full h-6" aria-hidden="true">
              <path d="M0 20 C67 2,133 38,200 20 C267 2,333 38,400 20" stroke="#C8C2B8" strokeWidth="1.6" fill="none" strokeLinecap="round" />
            </svg>
          </div>
        </div>

        <div className="relative">
          <div className="relative overflow-hidden border border-[#172519]" style={{ aspectRatio: '5/3' }}>
            {SLIDES.map((slide, i) => (
              <div key={i}
                className={`absolute inset-0 transition-opacity duration-500 ${i === idx ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
                aria-hidden={i !== idx}
              >
                {slide.el}
              </div>
            ))}
          </div>

          <button onClick={prev}
            className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 flex items-center justify-center
                       bg-[#0B1310]/80 hover:bg-[#172519] text-[#4A7A5E] hover:text-[#F0EDE6]
                       transition-colors duration-200 border border-[#172519]
                       focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
            aria-label="Previous">
            <svg viewBox="0 0 10 18" className="w-2.5" fill="none" aria-hidden="true">
              <path d="M8 2 L2 9 L8 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          <button onClick={next}
            className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 flex items-center justify-center
                       bg-[#0B1310]/80 hover:bg-[#172519] text-[#4A7A5E] hover:text-[#F0EDE6]
                       transition-colors duration-200 border border-[#172519]
                       focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
            aria-label="Next">
            <svg viewBox="0 0 10 18" className="w-2.5" fill="none" aria-hidden="true">
              <path d="M2 2 L8 9 L2 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>

        <div className="mt-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <p className="font-body text-sm text-slate leading-relaxed max-w-xl">
            {SLIDES[idx].caption}
          </p>
          <div className="flex gap-2 shrink-0">
            {SLIDES.map((_, i) => (
              <button key={i} onClick={() => setIdx(i)}
                className={`h-1.5 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand ${
                  i === idx ? 'w-8 bg-brand' : 'w-4 bg-bone hover:bg-dust'}`}
                aria-label={`Slide ${i + 1}`} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
