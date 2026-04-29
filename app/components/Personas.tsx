"use client";
import React, { useState } from 'react';

const personas = [
  {
    id: 'persona',
    bg: 'bg-white',
    eyebrow: 'User Persona · Working Mother',
    title: <>Sophie, 38. Architect, mother of two.<br/>One app. Zero data sold.</>,
    sub: 'Sophie navigates high-stakes client meetings, crèche drop-offs, and running a household. icebrkr is the only AI that can handle her entire life context without monetising it.',
    profile: {
      avatar: '👩‍💼',
      name: 'Sophie Laurent',
      desc: <>Millennial · 38 · Lead Architect<br/>Working mother · Zurich</>,
      stats: [
        { label: 'Commute', value: '1.5 hrs/day' },
        { label: 'Crèche drop-offs', value: '5x / week' },
        { label: 'Time saved/day', value: '42 min', isGreen: true },
        { label: 'Deep work blocks', value: '2/day protected', isGreen: true },
        { label: 'Decisions saved', value: '14/day', isGreen: true }
      ],
      modules: ['AIPA', 'IB-Map', 'IB-Health', 'Journal AI', 'Private Vault', 'Smart Closet']
    },
    stories: [
      {
        id: 'sophie-1',
        icon: '📍',
        color: 'text-brand-orange',
        bg: 'bg-brand-orange/10',
        title: 'Morning Route Calculation — Crèche to Office',
        sub: 'IB-Map · P1 Critical',
        metric: 'Never late',
        as: 'IB-Map auto-calculates the optimal morning sequence — crèche or school first based on opening times and traffic — and alerts me 7 minutes early if a tram delay changes the plan.',
        criteria: [
          'Learns routine and auto-proposes route daily — no manual input ever',
          'Accounts for crèche and school opening times — never arrives before doors open',
          'Location processed on-device — no route history shared with third-party mapping services'
        ]
      },
      {
        id: 'sophie-2',
        icon: '🤖',
        color: 'text-brand-red',
        bg: 'bg-brand-red/10',
        title: 'Deep Work Guardian',
        sub: 'AIPA · P1 Critical',
        metric: '+8 hrs productive/week',
        as: 'AIPA carves and defends two deep-work blocks daily — handling routine messages on my behalf — so I can advance my career, not just respond to it.',
        criteria: [
          'Two 45–90 min uninterrupted blocks daily based on calendar and energy patterns',
          'Auto-responds to non-urgent Slack/email with holding message, queues for review',
          'Blocks protected — low-priority meeting invites declined automatically'
        ]
      },
      {
        id: 'sophie-3',
        icon: '📔',
        color: 'text-brand-orange',
        bg: 'bg-brand-orange/10',
        title: 'Lunchtime Emotional Reset',
        sub: 'Journal AI + IB-Health · P2 High',
        metric: 'Wellbeing ↑ measurably',
        as: "Journal AI offers a 3-minute guided check-in at lunch — how I'm feeling, one reframe — so I don't carry the morning's stress into afternoon meetings.",
        criteria: [
          'Adaptive questions based on week\'s mood history — never the same prompt',
          'If overwhelmed, offers specific micro-action ("4-min walk before 1pm meeting")',
          'All journal data zero-knowledge encrypted — not readable by icebrkr or any third party'
        ]
      },
      {
        id: 'sophie-4',
        icon: '🔐',
        color: 'text-brand-red',
        bg: 'bg-brand-red/10',
        title: 'Any Document in 10 Seconds',
        sub: 'Private Vault · P1 Critical',
        metric: '<10 sec retrieval',
        as: 'When the crèche nurse calls at 2pm asking for Leo\'s allergy certificate, I share it in 10 seconds — not 20 minutes searching WhatsApp threads.',
        criteria: [
          'Documents categorised by child, personal, and professional with nested tags (Leo → Medical → Vaccination)',
          'One-click time-limited share link — shares one document, never reveals vault contents',
          'AIPA alerts proactively when a document is expiring (school insurance, passport, medical certificate)'
        ]
      }
    ]
  },
  {
    id: 'genz',
    bg: 'bg-brand-bg',
    eyebrow: 'User Persona · Gen Z Student',
    title: <>Kai, 21. Student, creator, job hunter.<br/>One app. Zero data sold.</>,
    sub: 'Kai studies business, creates content, job hunts, and navigates a complex social world — all while managing a tight budget. icebrkr is the only AI that works for him without working against him.',
    profile: {
      avatar: '🧑‍🎓',
      name: 'Kai Müller',
      desc: <>Gen Z · 21 · Business student<br/>Creator · Job hunter · Geneva</>,
      stats: [
        { label: 'Study load', value: 'Full-time' },
        { label: 'Side project', value: 'Content creator' },
        { label: 'Job apps tracked', value: '12 active', isGreen: true },
        { label: 'Decisions saved', value: '~7/day', isGreen: true },
        { label: 'Social hours saved', value: '~40 min/day', isGreen: true }
      ],
      modules: ['AIPA', 'Smart Closet', 'IB-Connect', 'Journal AI', 'IB-Health', 'Private Vault']
    },
    stories: [
      {
        id: 'kai-1',
        icon: '🤖',
        color: 'text-brand-red',
        bg: 'bg-brand-red/10',
        title: 'Morning Brief — Classes, Deadlines, Social',
        sub: 'AIPA · P1 Critical',
        metric: '↓ 15 min/day',
        as: "As Kai, I want my morning brief to include my class schedule, assignment deadlines, and social highlights so I manage academic and social life in one glance — in a casual tone that doesn't feel like a corporate robot.",
        criteria: [
          'University calendar integrated — lectures, seminars, office hours',
          'Red flag if assignment due within 24h — with word count remaining estimate',
          'Unread social digest from group chats, no per-message noise',
          'Tone adapts to casual/friendly style — not formal'
        ]
      },
      {
        id: 'kai-2',
        icon: '💬',
        color: 'text-brand-dark',
        bg: 'bg-brand-dark/10',
        title: '200-Message Group Chat in 10 Seconds',
        sub: 'IB-Connect · P2 High',
        metric: '↓ 40 min/day',
        as: 'I want missed group chat messages summarised into a concise digest so I catch up in 10 seconds instead of scrolling 200 messages — and my @mentions always float to the top.',
        criteria: [
          'Summaries generated for chats with >20 unread messages',
          'Key decisions, mentions, and shared media highlighted',
          'Direct @mentions always elevated to top of summary',
          'Digest delivered as a card in unified feed — not a separate app'
        ]
      },
      {
        id: 'kai-3',
        icon: '👔',
        color: 'text-brand-orange',
        bg: 'bg-brand-orange/10',
        title: 'AR Try-On — Look Great Without Buying More',
        sub: 'Smart Closet · P1',
        metric: '↓ 9 decisions/day',
        as: 'I want to virtually try on outfits from my Smart Closet using AR before getting dressed — and get celebrity-inspired matches from what I already own — so I always leave looking exactly how I intended without buying anything new.',
        criteria: [
          'AR overlay renders clothing on camera feed in real-time',
          'Celebrity outfit inspiration matched to existing closet items (match % shown)',
          'Weather + calendar context baked in — right outfit for the right occasion',
          'Cost-per-wear tracked — flags items never worn after 90 days'
        ]
      },
      {
        id: 'kai-4',
        icon: '🚀',
        color: 'text-brand-red',
        bg: 'bg-brand-red/10',
        title: 'Job Application Tracker + Interview Prep',
        sub: 'AIPA · E08 Career · P2 High',
        metric: '0 missed deadlines',
        as: 'I want to track all my job applications, interview stages, and deadlines in one place — and have AIPA generate role-specific interview questions with coaching so I walk in fully prepared.',
        criteria: [
          'Application card: company, role, status, deadline, notes',
          'Red alert 48h before application close',
          'Role + company → 15 likely questions (behavioural, technical, company-specific)',
          'Practice mode: AIPA plays interviewer and gives STAR-method feedback'
        ]
      },
      {
        id: 'kai-5',
        icon: '💶',
        color: 'text-brand-green',
        bg: 'bg-brand-green/10',
        title: 'Multi-Currency Budget — Student Life',
        sub: 'Financial Intelligence · P1',
        metric: 'Budget never blown',
        as: 'I want to log expenses, track subscriptions, and set a savings goal for my summer trip — all with PPP-adjusted pricing that actually reflects what CHF means on a student budget.',
        criteria: [
          'Multi-currency logging with auto-conversion at spot rate',
          'Red alert when any category budget exceeded by >10%',
          'Unused subscription flagged if no usage for 60 days',
          'PPP-tier pricing auto-detected — feature parity guaranteed regardless of tier'
        ]
      }
    ]
  },
  {
    id: 'traveller',
    bg: 'bg-white',
    eyebrow: 'User Persona · World Traveller',
    title: <>Priya, 31. Digital nomad.<br/>52 countries. Zero data trail.</>,
    sub: 'Priya works remotely, travels full-time, and crosses 6 cultural contexts a month. icebrkr is the only AI that moves with her without tracking her.',
    profile: {
      avatar: '✈️',
      name: 'Priya Sharma',
      desc: <>World traveller · 31 · UX Consultant<br/>Digital nomad · 52 countries visited</>,
      stats: [
        { label: 'Countries/year', value: '18–22' },
        { label: 'Languages spoken', value: '4' },
        { label: 'Languages needed', value: '25+' },
        { label: 'Stress events eliminated', value: '~6/week', isGreen: true },
        { label: 'Time saved planning', value: '~3 hrs/trip', isGreen: true }
      ],
      modules: ['IB-Map', 'AIPA', 'IB-Connect', 'Private Vault', 'Smart Closet', 'IB-Health']
    },
    stories: [
      {
        id: 'priya-1',
        icon: '📍',
        color: 'text-brand-orange',
        bg: 'bg-brand-orange/10',
        title: 'Smart Route + Airport Intelligence',
        sub: 'IB-Map + AIPA · P1 Critical',
        metric: '↓ 6 stress events/week',
        as: 'I want real-time flight status, gate changes, and check-in reminders pushed proactively — and IB-Map to plan optimal routes with live transit and walking options wherever I am — so I never miss a flight or arrive at a closed gate.',
        criteria: [
          'Flight details auto-detected from email confirmation — no manual entry',
          'Red alert on gate change or delay >15 min · Check-in reminder 24h + 2h before',
          'Route calculated for car/transit/walk with real-time traffic',
          'Location processed on-device — route history never shared with third-party mapping'
        ]
      },
      {
        id: 'priya-2',
        icon: '🌍',
        color: 'text-brand-dark',
        bg: 'bg-brand-dark/10',
        title: 'Full Itinerary Builder — Day by Day',
        sub: 'AIPA + IB-Map · P1',
        metric: '↓ 3 hrs planning/trip',
        as: 'I want AIPA to build a full itinerary for any destination based on my preferences — activities matched to pace, local opening hours, cultural events — without spending hours on research.',
        criteria: [
          'Destination + dates + preferences → full day-by-day plan',
          'Activities matched to interests (coworking spaces, gyms, local markets)',
          'Itinerary respects local opening hours and cultural calendar',
          'Shareable via link or PDF — no account needed for recipients'
        ]
      },
      {
        id: 'priya-3',
        icon: '🗣️',
        color: 'text-brand-green',
        bg: 'bg-brand-green/10',
        title: 'Real-Time Translation — Signs, Menus, Conversations',
        sub: 'IB-Connect · P1 Critical',
        metric: 'Language barrier: eliminated',
        as: 'I want camera-based translation of signs, menus, and conversations in 50+ languages — with offline language packs downloaded before travel — so language barriers never limit my experience.',
        criteria: [
          'Camera-based sign/menu translation via on-device OCR — no cloud required',
          'Spoken phrase translation in 50+ languages',
          'Offline language packs downloadable before departure',
          'Cultural etiquette tips shown when translating sensitive content'
        ]
      },
      {
        id: 'priya-4',
        icon: '🤝',
        color: 'text-brand-red',
        bg: 'bg-brand-red/10',
        title: 'Cultural Safety Layer — Video Calls Abroad',
        sub: 'IB-Connect + Cultural Bridge · P2',
        metric: '0 cultural missteps',
        as: 'I want video calls to include real-time cultural sensitivity hints so I avoid unintentional offence when speaking with clients from different backgrounds — delivered subtly, not intrusively.',
        criteria: [
          'Caller\'s cultural profile triggers hint overlay (opt-in per contact)',
          'Hints cover: greeting customs, eye contact norms, hierarchy signals',
          'Delivered as subtle banner — never as an intrusive popup',
          'Religious holidays and dietary restrictions flagged before scheduling'
        ]
      },
      {
        id: 'priya-5',
        icon: '💼',
        color: 'text-brand-orange',
        bg: 'bg-brand-orange/10',
        title: 'Smart Packing — Virtual Wardrobe for Any Trip',
        sub: 'Smart Closet · P2',
        metric: 'Always right-packed',
        as: 'I want to virtually try on outfits and save a packing list from my virtual wardrobe — destination + duration + activities — so I pack efficiently without overpacking or underpacking.',
        criteria: [
          'Trip mode: select destination, duration, and activities',
          'AIPA suggests outfits from virtual closet per day — weather-aware',
          'Packing list auto-generated from selected outfits with weight estimate',
          'Capsule wardrobe builder — 20-30 items for maximum outfit combinations'
        ]
      }
    ]
  }
];

export default function Personas() {
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({});

  const toggleItem = (id: string) => {
    setOpenItems(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <>
      {personas.map((persona) => (
        <section key={persona.id} id={persona.id} className={`${persona.bg} py-20 md:py-32`}>
          <div className="max-w-7xl mx-auto px-8">
            <div className="mb-12">
              <span className="inline-block text-[11px] font-bold uppercase tracking-[1.5px] text-brand-muted mb-3">
                {persona.eyebrow}
              </span>
              <h2 className="font-serif text-[clamp(28px,3.5vw,44px)] leading-[1.15] tracking-[-0.5px] mb-3.5">
                {persona.title}
              </h2>
              <p className="text-[16px] text-brand-muted leading-[1.7] max-w-[540px]">
                {persona.sub}
              </p>
            </div>

            <div className="flex flex-col lg:flex-row gap-10">
              <div className="lg:w-[320px] shrink-0">
                <div className="bg-white border border-brand-border rounded-xl p-7 shadow-sm sticky top-24">
                  <div className="flex items-center gap-4 mb-6 pb-6 border-b border-brand-border">
                    <div className="w-14 h-14 bg-brand-bg rounded-full flex items-center justify-center text-[28px] border border-brand-border">
                      {persona.profile.avatar}
                    </div>
                    <div>
                      <div className="font-bold text-[18px] text-brand-ink mb-1">{persona.profile.name}</div>
                      <div className="text-[12px] text-brand-muted leading-[1.5]">{persona.profile.desc}</div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-3 mb-6 pb-6 border-b border-brand-border">
                    {persona.profile.stats.map((stat, i) => (
                      <div key={i} className="flex justify-between items-center text-[13px]">
                        <span className="text-brand-muted font-medium">{stat.label}</span>
                        <span className={`font-bold ${stat.isGreen ? 'text-brand-green' : 'text-brand-ink'}`}>{stat.value}</span>
                      </div>
                    ))}
                  </div>
                  <div>
                    <div className="text-[10px] font-bold uppercase tracking-[1px] text-brand-muted mb-3">COMPASS Modules Active</div>
                    <div className="flex flex-wrap gap-2">
                      {persona.profile.modules.map((mod, i) => (
                        <span key={i} className="inline-block bg-brand-bg border border-brand-border px-2.5 py-1 rounded text-[11px] font-bold text-brand-muted">
                          {mod}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex-1 flex flex-col gap-4">
                {persona.stories.map(story => (
                  <div key={story.id} className="bg-white border border-brand-border rounded-xl shadow-sm overflow-hidden">
                    <div 
                      className="flex justify-between items-center p-5 cursor-pointer hover:bg-black/5 transition-colors"
                      onClick={() => toggleItem(story.id)}
                    >
                      <div className="flex items-center gap-4">
                        <div className={`w-10 h-10 rounded-lg flex items-center justify-center text-[20px] shrink-0 ${story.bg}`}>{story.icon}</div>
                        <div>
                          <div className="font-bold text-[15px] text-brand-ink leading-[1.3] mb-1">{story.title}</div>
                          <div className="text-[12px] font-semibold text-brand-muted">{story.sub}</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 shrink-0 ml-4">
                        <span className={`text-[12px] font-bold ${story.color}`}>{story.metric}</span>
                        <svg className={`w-4 h-4 text-brand-muted transition-transform duration-300 ${openItems[story.id] ? 'rotate-180' : ''}`} viewBox="0 0 20 20" fill="none">
                          <path d="M4 7l6 6 6-6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                        </svg>
                      </div>
                    </div>
                    <div className={`overflow-hidden transition-all duration-300 ${openItems[story.id] ? 'max-h-[800px]' : 'max-h-0'}`}>
                      <div className="px-5 pb-5 pt-0 border-t border-brand-border/50">
                        <div className="text-[14px] text-brand-muted italic leading-[1.6] mb-5 mt-5 pl-4 border-l-2 border-brand-border">
                          {story.as}
                        </div>
                        <ul className="list-none flex flex-col gap-3 m-0 p-0">
                          {story.criteria.map((crit, i) => (
                            <li key={i} className="flex gap-2.5 text-[13px] text-brand-ink leading-[1.5]">
                              <span className="font-bold text-brand-green">✓</span>
                              {crit}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      ))}
    </>
  );
}
