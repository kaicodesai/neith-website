'use client'

import { useState } from 'react'

// ─── Slide 1: Notion-style client onboarding database ─────────────────────────
function SlideNotion() {
  const statuses = [
    { label: 'Active', bg: '#E6F4EC', text: '#1A6636' },
    { label: 'Onboarding', bg: '#FEF3C7', text: '#92400E' },
    { label: 'Active', bg: '#E6F4EC', text: '#1A6636' },
    { label: 'In Review', bg: '#EDE9FE', text: '#4C1D95' },
  ]
  const rows = [
    { name: 'Bloom Studio', company: 'Bloom Studio Co.', start: 'Jun 2', tasks: '12 / 12', score: '94' },
    { name: 'Meridian Legal', company: 'Meridian LLP', start: 'Jun 9', tasks: '7 / 14', score: '81' },
    { name: 'Oaks Advisory', company: 'Oaks Group', start: 'Jun 14', tasks: '11 / 11', score: '97' },
    { name: 'Vesper Media', company: 'Vesper Inc.', start: 'Jun 18', tasks: '3 / 10', score: '72' },
  ]

  return (
    <svg viewBox="0 0 800 480" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      {/* Window chrome */}
      <rect width="800" height="480" fill="#ffffff" />
      <rect width="800" height="48" fill="#F7F7F5" />
      <circle cx="20" cy="24" r="6" fill="#FFBD2E" />
      <circle cx="40" cy="24" r="6" fill="#28C840" />
      <circle cx="60" cy="24" r="6" fill="#FF6159" />
      {/* Page icon + title */}
      <rect x="88" y="15" width="14" height="18" rx="2" fill="#111010" fillOpacity="0.12" />
      <text x="110" y="28" fill="#111010" fontSize={13} fontWeight="600" fontFamily="system-ui">Client Onboarding</text>
      {/* Breadcrumb */}
      <text x="110" y="44" fill="#999" fontSize={9.5} fontFamily="system-ui">Neith AI  /  Workspaces  /  Clients</text>

      {/* Sidebar */}
      <rect x="0" y="48" width="180" height="432" fill="#F7F7F5" />
      {['Dashboard', 'Clients', 'Leads', 'Projects', 'Reports'].map((item, i) => (
        <g key={item}>
          {i === 1 && <rect x="4" y={72 + i * 36} width="172" height="28" rx="5" fill="#111010" fillOpacity="0.08" />}
          <text x="20" y={91 + i * 36} fill={i === 1 ? '#111010' : '#666'} fontSize={12} fontFamily="system-ui" fontWeight={i === 1 ? '600' : '400'}>{item}</text>
        </g>
      ))}
      <text x="12" y="290" fill="#aaa" fontSize={9} fontFamily="system-ui" letterSpacing={1.5}>AUTOMATIONS</text>
      {['New client intake', 'Task generator', 'Weekly digest'].map((item, i) => (
        <g key={item}>
          <circle cx="20" cy={313 + i * 26} r="3.5" fill="#2A5C3F" fillOpacity="0.5" />
          <text x="32" y={317 + i * 26} fill="#555" fontSize={11} fontFamily="system-ui">{item}</text>
        </g>
      ))}

      {/* Main content */}
      <rect x="180" y="48" width="620" height="432" fill="#ffffff" />

      {/* Filter bar */}
      <rect x="196" y="62" width="82" height="24" rx="5" fill="#111010" />
      <text x="237" y="78" fill="#fff" fontSize={10} fontFamily="system-ui" textAnchor="middle" fontWeight="600">All clients</text>
      <rect x="286" y="62" width="72" height="24" rx="5" fill="none" stroke="#E0E0E0" strokeWidth="1" />
      <text x="322" y="78" fill="#666" fontSize={10} fontFamily="system-ui" textAnchor="middle">Active only</text>
      {/* Auto-badge */}
      <rect x="620" y="62" width="130" height="24" rx="5" fill="#E6F4EC" />
      <circle cx="634" cy="74" r="3.5" fill="#2A5C3F" className="animate-pulse" />
      <text x="643" y="78" fill="#1A6636" fontSize={10} fontFamily="system-ui" fontWeight="500">Auto-synced · 2 min ago</text>

      {/* Table header */}
      <rect x="196" y="100" width="588" height="28" fill="#F7F7F5" />
      {['Client', 'Company', 'Start', 'Status', 'Tasks', 'AI Score'].map((h, i) => {
        const xs = [210, 320, 420, 490, 570, 670]
        return <text key={h} x={xs[i]} y="118" fill="#999" fontSize={9.5} fontFamily="system-ui" fontWeight="600" letterSpacing={0.8}>{h.toUpperCase()}</text>
      })}

      {/* Table rows */}
      {rows.map((r, i) => {
        const y = 128 + i * 50
        const s = statuses[i]
        return (
          <g key={r.name}>
            <rect x="196" y={y} width="588" height="50" fill={i % 2 === 0 ? '#ffffff' : '#FAFAFA'} />
            <rect x="196" y={y + 49} width="588" height="1" fill="#F0F0F0" />
            {/* Avatar circle */}
            <circle cx="222" cy={y + 24} r="12" fill="#111010" fillOpacity="0.07" />
            <text x="222" y={y + 28} fill="#111010" fontSize={10} fontFamily="system-ui" textAnchor="middle" fontWeight="600">{r.name[0]}</text>
            <text x="244" y={y + 28} fill="#111010" fontSize={12} fontFamily="system-ui" fontWeight="500">{r.name}</text>
            <text x="320" y={y + 28} fill="#555" fontSize={12} fontFamily="system-ui">{r.company}</text>
            <text x="420" y={y + 28} fill="#777" fontSize={11} fontFamily="system-ui">{r.start}</text>
            {/* Status pill */}
            <rect x="482" y={y + 14} width="72" height="20" rx="10" fill={s.bg} />
            <text x="518" y={y + 28} fill={s.text} fontSize={9.5} fontFamily="system-ui" fontWeight="600" textAnchor="middle">{s.label}</text>
            <text x="570" y={y + 28} fill="#555" fontSize={11} fontFamily="system-ui">{r.tasks}</text>
            {/* Score bar */}
            <rect x="660" y={y + 19} width="40" height="8" rx="4" fill="#E8E8E8" />
            <rect x="660" y={y + 19} width={40 * parseInt(r.score) / 100} height="8" rx="4" fill="#2A5C3F" />
            <text x="707" y={y + 27} fill="#111010" fontSize={10} fontFamily="system-ui" fontWeight="600">{r.score}</text>
          </g>
        )
      })}

      {/* Bottom badge */}
      <rect x="196" y="432" width="588" height="36" fill="#F7F7F5" />
      <text x="210" y="454" fill="#aaa" fontSize={10} fontFamily="system-ui">4 clients  ·  Auto-populated via intake form  ·  Tasks generated by AI on entry</text>
    </svg>
  )
}

// ─── Slide 2: HubSpot-style lead pipeline ─────────────────────────────────────
function SlidePipeline() {
  const cols = [
    { label: 'New Lead', count: 3, color: '#F3F4F6' },
    { label: 'AI Qualified', count: 2, color: '#EFF6FF' },
    { label: 'Proposal Sent', count: 2, color: '#F5F3FF' },
    { label: 'Closed Won', count: 2, color: '#F0FDF4' },
  ]
  const cards = [
    [
      { name: 'Arlo Skincare', value: '$4,200', tag: 'E-commerce', score: null },
      { name: 'Trove Wellness', value: '$3,600', tag: 'Health', score: null },
      { name: 'Dune Creative', value: '$2,800', tag: 'Agency', score: null },
    ],
    [
      { name: 'Bloom Studio', value: '$6,000', tag: 'Design', score: '92' },
      { name: 'Meridian Legal', value: '$8,500', tag: 'Legal', score: '87' },
    ],
    [
      { name: 'Oaks Advisory', value: '$7,200', tag: 'Finance', score: '95' },
      { name: 'Vesper Media', value: '$5,400', tag: 'Media', score: '79' },
    ],
    [
      { name: 'Nova Retail', value: '$4,800', tag: 'Retail', score: '91' },
      { name: 'Crest Brands', value: '$6,100', tag: 'Brand', score: '88' },
    ],
  ]

  return (
    <svg viewBox="0 0 800 480" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <rect width="800" height="480" fill="#ffffff" />
      {/* Top bar */}
      <rect width="800" height="48" fill="#F7F7F5" />
      <circle cx="20" cy="24" r="6" fill="#FFBD2E" />
      <circle cx="40" cy="24" r="6" fill="#28C840" />
      <circle cx="60" cy="24" r="6" fill="#FF6159" />
      <text x="88" y="30" fill="#111010" fontSize={13} fontWeight="600" fontFamily="system-ui">Sales Pipeline — Q2 2024</text>
      <rect x="580" y="13" width="110" height="22" rx="5" fill="#E6F4EC" />
      <circle cx="594" cy="24" r="3.5" fill="#2A5C3F" className="animate-pulse" />
      <text x="603" y="28" fill="#1A6636" fontSize={9.5} fontFamily="system-ui" fontWeight="500">AI scoring on · live</text>
      <rect x="698" y="13" width="84" height="22" rx="5" fill="#111010" />
      <text x="740" y="28" fill="#fff" fontSize={10} fontFamily="system-ui" fontWeight="600" textAnchor="middle">+ Add Deal</text>

      {/* Pipeline columns */}
      {cols.map((col, ci) => {
        const x = 12 + ci * 196
        const colCards = cards[ci]
        return (
          <g key={col.label}>
            <rect x={x} y={56} width={188} height={416} rx="8" fill={col.color} />
            {/* Column header */}
            <text x={x + 12} y={78} fill="#111010" fontSize={11} fontFamily="system-ui" fontWeight="700">{col.label}</text>
            <rect x={x + 148} y={65} width={24} height={18} rx="9" fill="#111010" fillOpacity="0.1" />
            <text x={x + 160} y={77} fill="#111010" fontSize={10} fontFamily="system-ui" textAnchor="middle" fontWeight="600">{col.count}</text>

            {/* Cards */}
            {colCards.map((card, cardi) => {
              const cy = 94 + cardi * 110
              return (
                <g key={card.name}>
                  <rect x={x + 8} y={cy} width={172} height={96} rx="7" fill="#ffffff" />
                  <rect x={x + 8} y={cy} width={172} height={96} rx="7" stroke="#E8E8E8" strokeWidth="1" />
                  {/* Company initial */}
                  <circle cx={x + 28} cy={cy + 22} r="11" fill="#111010" fillOpacity="0.07" />
                  <text x={x + 28} y={cy + 26} fill="#111010" fontSize={10} fontFamily="system-ui" textAnchor="middle" fontWeight="700">{card.name[0]}</text>
                  <text x={x + 46} y={cy + 27} fill="#111010" fontSize={11} fontFamily="system-ui" fontWeight="600">{card.name}</text>
                  {/* Tag */}
                  <rect x={x + 12} y={cy + 40} width={46} height={16} rx="8" fill="#111010" fillOpacity="0.06" />
                  <text x={x + 35} y={cy + 51} fill="#555" fontSize={9} fontFamily="system-ui" textAnchor="middle">{card.tag}</text>
                  {/* Value */}
                  <text x={x + 12} y={cy + 74} fill="#111010" fontSize={14} fontFamily="system-ui" fontWeight="700">{card.value}</text>
                  {/* AI score badge */}
                  {card.score && (
                    <>
                      <rect x={x + 132} y={cy + 38} width={40} height={20} rx="10" fill="#E6F4EC" />
                      <text x={x + 152} y={cy + 51} fill="#1A6636" fontSize={10} fontFamily="system-ui" fontWeight="700" textAnchor="middle">★ {card.score}</text>
                    </>
                  )}
                  {/* Score label */}
                  {card.score && <text x={x + 132} y={cy + 74} fill="#aaa" fontSize={8.5} fontFamily="system-ui">AI score</text>}
                </g>
              )
            })}
          </g>
        )
      })}

      {/* Bottom note */}
      <rect x="0" y="448" width="800" height="32" fill="#F7F7F5" />
      <text x="16" y="468" fill="#aaa" fontSize={9.5} fontFamily="system-ui">Leads auto-qualify via form + AI scoring  ·  Deals move stages when proposal is opened  ·  Won deals trigger onboarding workflow</text>
    </svg>
  )
}

// ─── Slide 3: Slack-style automated weekly digest ─────────────────────────────
function SlideSlack() {
  return (
    <svg viewBox="0 0 800 480" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <rect width="800" height="480" fill="#ffffff" />
      {/* Window chrome */}
      <rect width="800" height="48" fill="#F7F7F5" />
      <circle cx="20" cy="24" r="6" fill="#FFBD2E" />
      <circle cx="40" cy="24" r="6" fill="#28C840" />
      <circle cx="60" cy="24" r="6" fill="#FF6159" />
      <text x="88" y="30" fill="#111010" fontSize={13} fontWeight="600" fontFamily="system-ui"># weekly-reporting — Neith AI Workspace</text>

      {/* Sidebar */}
      <rect x="0" y="48" width="220" height="432" fill="#F7F7F5" />
      <text x="16" y="76" fill="#888" fontSize={9} fontFamily="system-ui" letterSpacing={1.2}>CHANNELS</text>
      {['# general', '# weekly-reporting', '# client-alerts', '# new-leads', '# team'].map((ch, i) => (
        <g key={ch}>
          {i === 1 && <rect x="4" y={86 + i * 30} width="212" height="26" rx="5" fill="#111010" fillOpacity="0.08" />}
          <text x="16" y={103 + i * 30} fill={i === 1 ? '#111010' : '#777'} fontSize={12} fontFamily="system-ui" fontWeight={i === 1 ? '600' : '400'}>{ch}</text>
        </g>
      ))}
      <text x="16" y="250" fill="#888" fontSize={9} fontFamily="system-ui" letterSpacing={1.2}>DIRECT MESSAGES</text>
      {['Neith Bot', 'Kai S.', 'Nicolas A.'].map((dm, i) => (
        <g key={dm}>
          <circle cx="28" cy={268 + i * 28} r="8" fill={i === 0 ? '#2A5C3F' : '#ddd'} />
          <text x="28" y={272 + i * 28} fill="#fff" fontSize={8} fontFamily="system-ui" textAnchor="middle">{dm[0]}</text>
          <text x="44" y={272 + i * 28} fill="#666" fontSize={11.5} fontFamily="system-ui">{dm}</text>
        </g>
      ))}

      {/* Chat area */}
      <rect x="220" y="48" width="580" height="432" fill="#ffffff" />

      {/* Channel header */}
      <rect x="220" y="48" width="580" height="44" fill="#ffffff" />
      <rect x="220" y="91" width="580" height="1" fill="#E8E8E8" />
      <text x="238" y="76" fill="#111010" fontSize={13} fontWeight="700" fontFamily="system-ui"># weekly-reporting</text>
      <text x="238" y="90" fill="#aaa" fontSize={10} fontFamily="system-ui">Auto-posted every Monday at 8:00 AM by Neith Bot</text>

      {/* Date separator */}
      <rect x="238" y="108" width="544" height="1" fill="#E8E8E8" />
      <rect x="354" y="101" width="74" height="16" rx="8" fill="#ffffff" stroke="#E8E8E8" strokeWidth="1" />
      <text x="391" y="113" fill="#999" fontSize={9} fontFamily="system-ui" textAnchor="middle">Mon, Jun 17</text>

      {/* Bot message */}
      <circle cx="252" cy="145" r="16" fill="#2A5C3F" />
      <text x="252" y="150" fill="#fff" fontSize={12} fontFamily="system-ui" textAnchor="middle" fontWeight="700">N</text>
      <text x="276" y="140" fill="#111010" fontSize={12} fontFamily="system-ui" fontWeight="700">Neith Bot</text>
      <rect x="276" y="128" width="46" height="14" rx="7" fill="#E6F4EC" />
      <text x="299" y="139" fill="#1A6636" fontSize={8.5} fontFamily="system-ui" fontWeight="600" textAnchor="middle">APP</text>
      <text x="330" y="140" fill="#aaa" fontSize={10} fontFamily="system-ui">8:00 AM</text>

      {/* Message card */}
      <rect x="276" y="152" width="502" height="268" rx="8" fill="#ffffff" stroke="#E0E0E0" strokeWidth="1" />
      {/* Card header */}
      <rect x="276" y="152" width="502" height="44" rx="8" fill="#111010" />
      <rect x="276" y="172" width="502" height="24" fill="#111010" />
      <text x="298" y="179" fill="#fff" fontSize={13} fontFamily="system-ui" fontWeight="700">Weekly Performance Brief</text>
      <text x="298" y="192" fill="#aaa" fontSize={9.5} fontFamily="system-ui">Week of June 10–16, 2024  ·  Generated by Neith AI</text>

      {/* Stats row */}
      {[
        { label: 'Revenue', value: '$58,200', delta: '+12%', good: true },
        { label: 'New Leads', value: '23', delta: '+5', good: true },
        { label: 'Deals Closed', value: '4', delta: '—', good: null },
        { label: 'Avg Response', value: '1.8 hrs', delta: '-34%', good: true },
      ].map((stat, i) => (
        <g key={stat.label}>
          <rect x={288 + i * 122} y="210" width="110" height="68" rx="6" fill="#F9F9F9" />
          <text x={343 + i * 122} y="231" fill="#999" fontSize={9} fontFamily="system-ui" textAnchor="middle" letterSpacing={0.8}>{stat.label.toUpperCase()}</text>
          <text x={343 + i * 122} y="254" fill="#111010" fontSize={18} fontFamily="system-ui" fontWeight="700" textAnchor="middle">{stat.value}</text>
          {stat.good !== null && (
            <rect x={318 + i * 122} y="260" width="50" height="14" rx="7" fill={stat.good ? '#E6F4EC' : '#FEE2E2'} />
          )}
          <text x={343 + i * 122} y="271" fill={stat.good ? '#1A6636' : stat.good === false ? '#991B1B' : '#999'} fontSize={9} fontFamily="system-ui" textAnchor="middle" fontWeight="600">{stat.delta}</text>
        </g>
      ))}

      {/* Divider */}
      <rect x="290" y="288" width="476" height="1" fill="#EFEFEF" />

      {/* AI summary */}
      <text x="290" y="308" fill="#aaa" fontSize={9} fontFamily="system-ui" fontWeight="600" letterSpacing={1}>AI SUMMARY</text>
      <text x="290" y="326" fill="#333" fontSize={11} fontFamily="system-ui">Strong week. Revenue up 12% driven by Oaks Advisory close ($7.2k). Lead volume</text>
      <text x="290" y="342" fill="#333" fontSize={11} fontFamily="system-ui">healthy — 8 from referral channel (highest this month). Response time improvement</text>
      <text x="290" y="358" fill="#333" fontSize={11} fontFamily="system-ui">reflects new intake automation. No follow-up needed — next digest Mon Jun 24.</text>

      {/* Divider */}
      <rect x="290" y="370" width="476" height="1" fill="#EFEFEF" />

      {/* Action buttons */}
      <rect x="290" y="380" width="108" height="28" rx="6" fill="#F3F4F6" />
      <text x="344" y="398" fill="#333" fontSize={10} fontFamily="system-ui" textAnchor="middle" fontWeight="500">View full report</text>
      <rect x="406" y="380" width="96" height="28" rx="6" fill="#F3F4F6" />
      <text x="454" y="398" fill="#333" fontSize={10} fontFamily="system-ui" textAnchor="middle" fontWeight="500">All deals →</text>
    </svg>
  )
}

// ─── Slide 4: Airtable-style reporting base ────────────────────────────────────
function SlideAirtable() {
  const weeks = [
    { week: 'Jun 3–9', rev: '$44,100', deals: 3, leads: 18, flag: null },
    { week: 'Jun 10–16', rev: '$58,200', deals: 4, leads: 23, flag: 'up' },
    { week: 'Jun 17–23', rev: '$51,800', deals: 3, leads: 20, flag: null },
    { week: 'Jun 24–30', rev: '$62,400', deals: 5, leads: 27, flag: 'up' },
  ]
  return (
    <svg viewBox="0 0 800 480" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <rect width="800" height="480" fill="#ffffff" />
      {/* Window chrome */}
      <rect width="800" height="48" fill="#F7F7F5" />
      <circle cx="20" cy="24" r="6" fill="#FFBD2E" />
      <circle cx="40" cy="24" r="6" fill="#28C840" />
      <circle cx="60" cy="24" r="6" fill="#FF6159" />
      <text x="88" y="30" fill="#111010" fontSize={13} fontWeight="600" fontFamily="system-ui">Weekly Metrics — Auto-fill Base</text>

      {/* Sidebar */}
      <rect x="0" y="48" width="190" height="432" fill="#F7F7F5" />
      {['Grid view', 'Chart view', 'Summary', 'Exports'].map((item, i) => (
        <g key={item}>
          {i === 0 && <rect x="4" y={63 + i * 32} width="182" height="26" rx="5" fill="#111010" fillOpacity="0.08" />}
          <text x="18" y={80 + i * 32} fill={i === 0 ? '#111010' : '#777'} fontSize={12} fontFamily="system-ui" fontWeight={i === 0 ? '600' : '400'}>{item}</text>
        </g>
      ))}
      <rect x="4" y="190" width="182" height="1" fill="#E0E0E0" />
      <text x="12" y="212" fill="#aaa" fontSize={9} fontFamily="system-ui" letterSpacing={1}>AUTOMATIONS</text>
      {['Auto-fill on Monday', 'Flag anomalies', 'Email on close'].map((a, i) => (
        <g key={a}>
          <rect x="10" y={222 + i * 34} width="170" height="26" rx="5" fill="#ffffff" stroke="#E8E8E8" strokeWidth="1" />
          <circle cx="24" cy={235 + i * 34} r="5" fill="#E6F4EC" />
          <circle cx="24" cy={235 + i * 34} r="2.5" fill="#2A5C3F" />
          <text x="36" y={239 + i * 34} fill="#555" fontSize={10} fontFamily="system-ui">{a}</text>
        </g>
      ))}

      {/* Main grid */}
      <rect x="190" y="48" width="610" height="432" fill="#ffffff" />

      {/* Toolbar */}
      <rect x="190" y="52" width="610" height="36" fill="#ffffff" />
      <rect x="190" y="87" width="610" height="1" fill="#E0E0E0" />
      <rect x="200" y="60" width="80" height="20" rx="4" fill="#111010" />
      <text x="240" y="74" fill="#fff" fontSize={10} fontFamily="system-ui" textAnchor="middle" fontWeight="600">+ Add row</text>
      <rect x="290" y="60" width="72" height="20" rx="4" fill="none" stroke="#E0E0E0" strokeWidth="1" />
      <text x="326" y="74" fill="#666" fontSize={10} fontFamily="system-ui" textAnchor="middle">Filter</text>
      <rect x="640" y="58" width="148" height="22" rx="5" fill="#E6F4EC" />
      <circle cx="654" cy="69" r="3.5" fill="#2A5C3F" className="animate-pulse" />
      <text x="663" y="73" fill="#1A6636" fontSize={9.5} fontFamily="system-ui" fontWeight="500">Auto-fills every Monday</text>

      {/* Table header */}
      <rect x="190" y="88" width="610" height="30" fill="#F9F9F9" />
      {['Week', 'Revenue', 'Deals Closed', 'New Leads', 'Status', 'Auto-filled'].map((h, i) => {
        const xs = [204, 310, 400, 490, 568, 660]
        return (
          <text key={h} x={xs[i]} y="108" fill="#999" fontSize={9} fontFamily="system-ui" fontWeight="700" letterSpacing={0.8}>{h.toUpperCase()}</text>
        )
      })}

      {/* Rows */}
      {weeks.map((w, i) => {
        const y = 118 + i * 64
        return (
          <g key={w.week}>
            <rect x="190" y={y} width="610" height="64" fill={i % 2 === 0 ? '#ffffff' : '#FAFAFA'} />
            <rect x="190" y={y + 63} width="610" height="1" fill="#EFEFEF" />
            {/* Row expand */}
            <rect x="196" y={y + 22} width="18" height="18" rx="3" fill="#F3F4F6" />
            <text x="205" y={y + 35} fill="#999" fontSize={10} fontFamily="system-ui" textAnchor="middle">↗</text>
            <text x="222" y={y + 35} fill="#111010" fontSize={12} fontFamily="system-ui" fontWeight="500">{w.week}</text>
            <text x="310" y={y + 35} fill="#111010" fontSize={13} fontFamily="system-ui" fontWeight="700">{w.rev}</text>
            <text x="400" y={y + 35} fill="#555" fontSize={12} fontFamily="system-ui">{w.deals}</text>
            <text x="490" y={y + 35} fill="#555" fontSize={12} fontFamily="system-ui">{w.leads}</text>
            {/* Status */}
            {w.flag === 'up'
              ? <><rect x="560" y={y + 22} width="60" height="20" rx="10" fill="#E6F4EC" /><text x="590" y={y + 36} fill="#1A6636" fontSize={9.5} fontFamily="system-ui" fontWeight="600" textAnchor="middle">▲ Strong</text></>
              : <><rect x="560" y={y + 22} width="60" height="20" rx="10" fill="#F3F4F6" /><text x="590" y={y + 36} fill="#666" fontSize={9.5} fontFamily="system-ui" fontWeight="500" textAnchor="middle">Steady</text></>
            }
            {/* Auto-fill badge */}
            <rect x="650" y={y + 22} width="72" height="20" rx="10" fill="#F0FDF4" stroke="#BBF7D0" strokeWidth="1" />
            <text x="686" y={y + 36} fill="#15803D" fontSize={9.5} fontFamily="system-ui" fontWeight="600" textAnchor="middle">✓ Auto</text>
          </g>
        )
      })}

      {/* Totals row */}
      <rect x="190" y="374" width="610" height="40" fill="#F9F9F9" />
      <rect x="190" y="374" width="610" height="1" fill="#E0E0E0" />
      <text x="222" y="400" fill="#999" fontSize={10} fontFamily="system-ui" fontWeight="700">TOTAL / AVG</text>
      <text x="310" y="400" fill="#111010" fontSize={13} fontFamily="system-ui" fontWeight="800">$216,500</text>
      <text x="400" y="400" fill="#111010" fontSize={12} fontFamily="system-ui" fontWeight="700">15</text>
      <text x="490" y="400" fill="#111010" fontSize={12} fontFamily="system-ui" fontWeight="700">88</text>

      {/* Bottom note */}
      <rect x="190" y="430" width="610" height="38" fill="#F7F7F5" />
      <text x="204" y="453" fill="#aaa" fontSize={9.5} fontFamily="system-ui">Rows auto-created each Monday  ·  Revenue pulled from pipeline  ·  Anomalies flagged automatically and sent to Slack</text>
    </svg>
  )
}

// ─── Slides config ─────────────────────────────────────────────────────────────
const SLIDES = [
  {
    el: <SlideNotion />,
    tool: 'Notion',
    caption: 'Client Onboarding — new clients auto-populate when an intake form is submitted. Tasks are generated by AI on entry, status updates itself.',
  },
  {
    el: <SlidePipeline />,
    tool: 'CRM Pipeline',
    caption: 'Lead Qualification — inbound leads are scored by AI the moment they arrive. High-fit leads move stages automatically; low-fit are flagged.',
  },
  {
    el: <SlideSlack />,
    tool: 'Slack',
    caption: 'Weekly Digest — every Monday at 8 AM your team receives a structured performance brief written by AI. No manual reporting.',
  },
  {
    el: <SlideAirtable />,
    tool: 'Reporting Base',
    caption: 'Auto-filled Metrics — weekly rows are created and populated from your pipeline data. Anomalies are flagged and routed to Slack automatically.',
  },
]

// ─── Carousel wrapper ──────────────────────────────────────────────────────────
export default function MockupCarousel() {
  const [idx, setIdx] = useState(0)
  const prev = () => setIdx(i => (i - 1 + SLIDES.length) % SLIDES.length)
  const next = () => setIdx(i => (i + 1) % SLIDES.length)

  return (
    <section className="py-24 bg-paper">
      <div className="max-w-5xl mx-auto px-6 lg:px-12">
        {/* Label */}
        <div className="flex items-center gap-3 mb-10">
          <span className="font-body text-xs tracking-label uppercase text-dust">What it looks like in practice</span>
          <svg viewBox="0 0 60 4" className="flex-1 max-w-[120px]" fill="none">
            <path d="M0 2 Q15 0 30 2 Q45 4 60 2" stroke="#ADA69B" strokeWidth="1" />
          </svg>
        </div>

        {/* Slide counter + nav */}
        <div className="flex items-center justify-between mb-6 gap-4">
          <div className="flex items-center gap-4 overflow-x-auto scrollbar-none pb-0.5 min-w-0">
            {SLIDES.map((s, i) => (
              <button
                key={i}
                onClick={() => setIdx(i)}
                className={`font-body text-xs tracking-label uppercase whitespace-nowrap transition-colors duration-200 shrink-0 ${
                  i === idx ? 'text-ink font-semibold' : 'text-dust hover:text-slate'
                }`}
              >
                {s.tool}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={prev}
              aria-label="Previous slide"
              className="w-8 h-8 rounded-full border border-bone flex items-center justify-center text-slate hover:border-ink transition-colors duration-200"
            >
              <svg viewBox="0 0 12 12" className="w-3 h-3" fill="none">
                <path d="M7 2 L3 6 L7 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <button
              onClick={next}
              aria-label="Next slide"
              className="w-8 h-8 rounded-full border border-bone flex items-center justify-center text-slate hover:border-ink transition-colors duration-200"
            >
              <svg viewBox="0 0 12 12" className="w-3 h-3" fill="none">
                <path d="M5 2 L9 6 L5 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mockup frame */}
        <div
          className="relative rounded-xl overflow-hidden border border-bone shadow-sm"
          style={{ aspectRatio: '5/3' }}
        >
          {SLIDES.map((s, i) => (
            <div
              key={i}
              className="absolute inset-0 transition-opacity duration-400"
              style={{ opacity: i === idx ? 1 : 0, pointerEvents: i === idx ? 'auto' : 'none' }}
            >
              {s.el}
            </div>
          ))}
        </div>

        {/* Caption */}
        <p className="mt-6 font-body text-sm text-slate/70 max-w-2xl">
          {SLIDES[idx].caption}
        </p>

        {/* Dot indicators */}
        <div className="flex gap-2 mt-4">
          {SLIDES.map((_, i) => (
            <button
              key={i}
              onClick={() => setIdx(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`h-1 rounded-full transition-all duration-300 ${
                i === idx ? 'w-6 bg-ink' : 'w-2 bg-bone'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
