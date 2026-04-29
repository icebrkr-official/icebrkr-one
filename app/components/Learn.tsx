"use client";
import React, { useState } from 'react';

export default function Learn() {
  const [activeUnit, setActiveUnit] = useState(1);
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({});

  const toggleItem = (id: string) => {
    setOpenItems(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <section id="learn" className="py-20 md:py-32 bg-brand-bg">
      <div className="max-w-7xl mx-auto px-8">
        <div className="mb-12">
          <span className="inline-block text-[11px] font-bold uppercase tracking-[1.5px] text-brand-muted mb-3">
            Learn · Students & Teachers
          </span>
          <h2 className="font-serif text-[clamp(28px,3.5vw,44px)] leading-[1.15] tracking-[-0.5px] mb-3.5">
            AIPA as your teaching assistant.<br />FinTech made exam-ready.
          </h2>
          <p className="text-[16px] text-brand-muted leading-[1.7] max-w-[540px]">
            icebrkr AIPA transforms complex FinTech concepts into personalised exam prep cards —
            crisis-aware, GenZ-relevant, and ready for classroom or self-study. 90 teaching cards across 5 units.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mb-8">
          {[
            { id: 1, icon: '🏦', title: 'Unit 1', sub: 'FinTech & Context', color: '#3B82F6', count: 18 },
            { id: 2, icon: '💳', title: 'Unit 2', sub: 'Digital Payments', color: 'var(--green)', count: 18 },
            { id: 3, icon: '🚀', title: 'Unit 3', sub: 'Digital Finance', color: 'var(--orange)', count: 18 },
            { id: 4, icon: '⚖️', title: 'Unit 4', sub: 'Regulation', color: '#8B5CF6', count: 18 },
            { id: 5, icon: '🤖', title: 'Unit 5', sub: 'AI & Future', color: 'var(--red)', count: 18 }
          ].map(unit => (
            <div 
              key={unit.id}
              onClick={() => setActiveUnit(unit.id)}
              className={`p-4 border rounded-xl text-center cursor-pointer transition-all ${
                activeUnit === unit.id ? 'bg-white shadow-md transform scale-105' : 'bg-transparent hover:bg-white/50'
              }`}
              style={{ borderColor: activeUnit === unit.id ? unit.color : 'var(--border)' }}
            >
              <div className="text-[28px] mb-2">{unit.icon}</div>
              <div className="font-bold text-[13px]" style={{ color: unit.color }}>{unit.title}</div>
              <div className="text-[12px] font-semibold text-brand-ink mt-1">{unit.sub}</div>
              <div className="text-[11px] text-brand-muted mt-2">{unit.count} cards</div>
            </div>
          ))}
        </div>

        <div>
          {/* Unit 1 */}
          {activeUnit === 1 && (
            <div className="animate-fade-in">
              <div className="text-[12px] text-brand-muted mb-4">Expand any card to see the exam prep content, GenZ real-world example, and interactive activity.</div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                
                <div className="bg-white border border-brand-border rounded-xl shadow-sm overflow-hidden flex flex-col">
                  <div className="p-5 border-b border-brand-border bg-brand-bg relative">
                    <div className="text-[11px] font-bold text-brand-muted mb-1">Card 1.1</div>
                    <div className="font-bold text-[15px] leading-[1.3] mb-2">FinTech Revolution: Money Meets Code</div>
                    <div className="inline-block bg-white border border-brand-border rounded-full px-2 py-0.5 text-[10px] font-bold text-brand-muted">30 min</div>
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-center p-4 cursor-pointer hover:bg-black/5 border-b border-brand-border" onClick={() => toggleItem('card1-1')}>
                      <span className="font-bold text-[13px] text-brand-ink">GenZ Example + Exam Prep</span>
                      <svg className={`w-3 h-3 transition-transform duration-300 ${openItems['card1-1'] ? 'rotate-180' : ''}`} viewBox="0 0 14 14" fill="none"><path d="M2 4l5 5 5-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" /></svg>
                    </div>
                    {openItems['card1-1'] && (
                      <div className="p-4 text-[13px] text-brand-muted leading-[1.6] border-b border-brand-border bg-white">
                        <strong>GenZ:</strong> 2007: iPhone. 2008: Banks fail → Bitcoin born. 2010: Venmo, Square. 2023: $200B+ FinTech investment. GenZ never knew banking without apps.<br/><br/>
                        <strong>Crisis Link:</strong> Every major crisis accelerates FinTech. COVID → mobile banking +300%. Ukraine war → crypto donations $200M+. Pattern: Crisis destroys traditional → digital surges → never returns.<br/><br/>
                        <strong>Exam Q:</strong> "How does financial crisis accelerate FinTech adoption?" → Use 2008 → distrust → Bitcoin as the canonical example. Always cite a crisis + its specific FinTech output.
                      </div>
                    )}
                    <div className="flex justify-between items-center p-4 cursor-pointer hover:bg-black/5" onClick={() => toggleItem('card1-1a')}>
                      <span className="font-bold text-[13px] text-brand-ink">Activity Prompt</span>
                      <svg className={`w-3 h-3 transition-transform duration-300 ${openItems['card1-1a'] ? 'rotate-180' : ''}`} viewBox="0 0 14 14" fill="none"><path d="M2 4l5 5 5-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" /></svg>
                    </div>
                    {openItems['card1-1a'] && (
                      <div className="p-4 text-[13px] text-brand-muted leading-[1.6] border-t border-brand-border bg-brand-bg">
                        Map major crises (2008, COVID, Ukraine) to specific FinTech adoption spikes. Predict: what's the next crisis and what FinTech emerges from it? Defend your prediction with evidence.
                      </div>
                    )}
                  </div>
                </div>

                <div className="bg-white border border-brand-border rounded-xl shadow-sm overflow-hidden flex flex-col">
                  <div className="p-5 border-b border-brand-border bg-brand-bg relative">
                    <div className="text-[11px] font-bold text-brand-muted mb-1">Card 1.11</div>
                    <div className="font-bold text-[15px] leading-[1.3] mb-2">Data: The New Oil — FinTech's Core Business</div>
                    <div className="inline-block bg-white border border-brand-border rounded-full px-2 py-0.5 text-[10px] font-bold text-brand-muted">30 min</div>
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-center p-4 cursor-pointer hover:bg-black/5 border-b border-brand-border" onClick={() => toggleItem('card1-2')}>
                      <span className="font-bold text-[13px] text-brand-ink">GenZ Example + Exam Prep</span>
                      <svg className={`w-3 h-3 transition-transform duration-300 ${openItems['card1-2'] ? 'rotate-180' : ''}`} viewBox="0 0 14 14" fill="none"><path d="M2 4l5 5 5-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" /></svg>
                    </div>
                    {openItems['card1-2'] && (
                      <div className="p-4 text-[13px] text-brand-muted leading-[1.6] border-b border-brand-border bg-white">
                        <strong>GenZ:</strong> Free FinTech app = you're the product. PayPal knows every purchase. Robinhood knows your risk tolerance. They sell this to advertisers and hedge funds. FinTech user worth $200–500/year in data value. You receive $0.<br/><br/>
                        <strong>icebrkr Connection:</strong> This is exactly the problem icebrkr solves. Zero-knowledge architecture means no data extracted, no data sold. Your financial life is your asset, not a product.<br/><br/>
                        <strong>Exam Q:</strong> "What is surveillance capitalism in FinTech?" → Link free service → data extraction → targeted monetisation. Contrast with zero-knowledge alternatives.
                      </div>
                    )}
                    <div className="flex justify-between items-center p-4 cursor-pointer hover:bg-black/5" onClick={() => toggleItem('card1-2a')}>
                      <span className="font-bold text-[13px] text-brand-ink">Activity Prompt</span>
                      <svg className={`w-3 h-3 transition-transform duration-300 ${openItems['card1-2a'] ? 'rotate-180' : ''}`} viewBox="0 0 14 14" fill="none"><path d="M2 4l5 5 5-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" /></svg>
                    </div>
                    {openItems['card1-2a'] && (
                      <div className="p-4 text-[13px] text-brand-muted leading-[1.6] border-t border-brand-border bg-brand-bg">
                        Data audit: List every FinTech app you use. Estimate commercial value of your data per app at $200–500/year. Calculate total annual value you generate. Discuss: Should you be compensated?
                      </div>
                    )}
                  </div>
                </div>

                <div className="bg-white border border-brand-border rounded-xl shadow-sm overflow-hidden flex flex-col">
                  <div className="p-5 border-b border-brand-border bg-brand-bg relative">
                    <div className="text-[11px] font-bold text-brand-muted mb-1">Card 1.18</div>
                    <div className="font-bold text-[15px] leading-[1.3] mb-2">The FinTech Paradox — Unit 1 Integration</div>
                    <div className="inline-block bg-white border border-brand-border rounded-full px-2 py-0.5 text-[10px] font-bold text-brand-muted">30 min</div>
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-center p-4 cursor-pointer hover:bg-black/5 border-b border-brand-border" onClick={() => toggleItem('card1-3')}>
                      <span className="font-bold text-[13px] text-brand-ink">Synthesis + Exam Prep</span>
                      <svg className={`w-3 h-3 transition-transform duration-300 ${openItems['card1-3'] ? 'rotate-180' : ''}`} viewBox="0 0 14 14" fill="none"><path d="M2 4l5 5 5-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" /></svg>
                    </div>
                    {openItems['card1-3'] && (
                      <div className="p-4 text-[13px] text-brand-muted leading-[1.6] border-b border-brand-border bg-white">
                        <strong>Core Paradox:</strong> FinTech liberates AND imprisons. Includes AND excludes. Empowers AND exploits. Same technology → opposite results based on: regulation, business model, government support, accessibility.<br/><br/>
                        <strong>Exam Structure (3 paragraphs):</strong><br/>
                        1. What is FinTech really (beyond hype)?<br/>
                        2. How does crisis affect FinTech (and vice versa)?<br/>
                        3. What role should government play — and can they afford it?<br/><br/>
                        <strong>Top Exam Tip:</strong> Never give a one-sided answer. Always acknowledge the paradox: "FinTech X can achieve Y, however in context Z it produces W."
                      </div>
                    )}
                    <div className="flex justify-between items-center p-4 cursor-pointer hover:bg-black/5" onClick={() => toggleItem('card1-3a')}>
                      <span className="font-bold text-[13px] text-brand-ink">Activity Prompt</span>
                      <svg className={`w-3 h-3 transition-transform duration-300 ${openItems['card1-3a'] ? 'rotate-180' : ''}`} viewBox="0 0 14 14" fill="none"><path d="M2 4l5 5 5-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" /></svg>
                    </div>
                    {openItems['card1-3a'] && (
                      <div className="p-4 text-[13px] text-brand-muted leading-[1.6] border-t border-brand-border bg-brand-bg">
                        Write a FinTech thesis statement: 3 paragraphs answering the 3 questions above. Must demonstrate systems thinking, acknowledge paradoxes, and use at least 3 specific examples from Unit 1.
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <div className="mt-6 p-4 md:p-5 bg-white border border-brand-border rounded-xl text-[13px] text-brand-muted">
                📚 Unit 1 covers 18 cards total: FinTech evolution, infrastructure, collaboration models, typology, emerging economies, opportunities, challenges, regulation, global hubs, trust, data, financial literacy, cashless society, inclusion metrics, RegTech, cybersecurity, environmental impact, and synthesis. Ask AIPA to generate exam prep cards for any topic.
              </div>
            </div>
          )}

          {/* Unit 5 */}
          {activeUnit === 5 && (
            <div className="animate-fade-in">
              <div className="text-[12px] text-brand-muted mb-4">Unit 5 focuses on AI in finance — the most relevant unit to icebrkr's mission.</div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                
                <div className="bg-white border border-brand-border rounded-xl shadow-sm overflow-hidden flex flex-col">
                  <div className="p-5 border-b border-brand-border bg-brand-bg relative">
                    <div className="text-[11px] font-bold text-brand-muted mb-1">Card 5.1</div>
                    <div className="font-bold text-[15px] leading-[1.3] mb-2">AI in Finance: Promise & Peril</div>
                    <div className="inline-block bg-white border border-brand-border rounded-full px-2 py-0.5 text-[10px] font-bold text-brand-muted">30 min</div>
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-center p-4 cursor-pointer hover:bg-black/5 border-b border-brand-border" onClick={() => toggleItem('card5-1')}>
                      <span className="font-bold text-[13px] text-brand-ink">GenZ Example + Exam Prep</span>
                      <svg className={`w-3 h-3 transition-transform duration-300 ${openItems['card5-1'] ? 'rotate-180' : ''}`} viewBox="0 0 14 14" fill="none"><path d="M2 4l5 5 5-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" /></svg>
                    </div>
                    {openItems['card5-1'] && (
                      <div className="p-4 text-[13px] text-brand-muted leading-[1.6] border-b border-brand-border bg-white">
                        <strong>GenZ:</strong> AI trading algorithms execute 70% of stock trades. Robo-advisors manage $5T+. But: AI bias, flash crashes, deepfake fraud ($250M+ stolen via fake CEO videos). Technology accelerating faster than governance.<br/><br/>
                        <strong>icebrkr Connection:</strong> UBTS runs on-device — no AI training on your data. The risk of AI-powered deepfake fraud is exactly why zero-knowledge architecture matters: your data can't be used to train an attack against you.<br/><br/>
                        <strong>Exam Q:</strong> "What are the risks of AI in FinTech?" → Cite algorithmic bias, flash crashes, deepfake fraud. Then explain governance gap: technology outpaces regulation.
                      </div>
                    )}
                    <div className="flex justify-between items-center p-4 cursor-pointer hover:bg-black/5" onClick={() => toggleItem('card5-1a')}>
                      <span className="font-bold text-[13px] text-brand-ink">AI Ethics Activity</span>
                      <svg className={`w-3 h-3 transition-transform duration-300 ${openItems['card5-1a'] ? 'rotate-180' : ''}`} viewBox="0 0 14 14" fill="none"><path d="M2 4l5 5 5-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" /></svg>
                    </div>
                    {openItems['card5-1a'] && (
                      <div className="p-4 text-[13px] text-brand-muted leading-[1.6] border-t border-brand-border bg-brand-bg">
                        Design a loan approval AI. Training data shows: women repay better, minorities default more (due to systemic poverty). Choose: (1) Use all data — accurate but discriminatory, (2) Exclude protected characteristics — legal but less accurate, (3) Oversample minorities — fair but loses money. Defend your choice. No good option exists — that's the point.
                      </div>
                    )}
                  </div>
                </div>

                <div className="bg-white border border-brand-border rounded-xl shadow-sm overflow-hidden flex flex-col">
                  <div className="p-5 border-b border-brand-border bg-brand-bg relative">
                    <div className="text-[11px] font-bold text-brand-muted mb-1">Card 5.x</div>
                    <div className="font-bold text-[15px] leading-[1.3] mb-2">Zero-Knowledge AI — The icebrkr Model</div>
                    <div className="inline-block bg-white border border-brand-border rounded-full px-2 py-0.5 text-[10px] font-bold text-brand-muted">30 min · Applied</div>
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-center p-4 cursor-pointer hover:bg-black/5 border-b border-brand-border" onClick={() => toggleItem('card5-2')}>
                      <span className="font-bold text-[13px] text-brand-ink">Applied Case Study</span>
                      <svg className={`w-3 h-3 transition-transform duration-300 ${openItems['card5-2'] ? 'rotate-180' : ''}`} viewBox="0 0 14 14" fill="none"><path d="M2 4l5 5 5-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" /></svg>
                    </div>
                    {openItems['card5-2'] && (
                      <div className="p-4 text-[13px] text-brand-muted leading-[1.6] border-b border-brand-border bg-white">
                        <strong>Case:</strong> EU AI Act August 2026 enforcement. Penalty: €35M or 7% global revenue. Existing AI (ChatGPT, Gemini, Meta AI) trained on user data — architecturally non-compliant. icebrkr: on-device inference, zero egress, UBTS fine-tuning without raw data leaving device — compliant by architecture.<br/><br/>
                        <strong>Exam Framework:</strong> Problem (data extraction model) → Regulatory cliff (EU AI Act) → Solution (zero-knowledge architecture) → Moat (cannot be replicated by policy, requires rebuild).<br/><br/>
                        <strong>Discussion:</strong> Is compliance by architecture a genuine competitive advantage or just a marketing claim? What evidence would you need to verify it?
                      </div>
                    )}
                    <div className="flex justify-between items-center p-4 cursor-pointer hover:bg-black/5" onClick={() => toggleItem('card5-2a')}>
                      <span className="font-bold text-[13px] text-brand-ink">Professor's Playbook</span>
                      <svg className={`w-3 h-3 transition-transform duration-300 ${openItems['card5-2a'] ? 'rotate-180' : ''}`} viewBox="0 0 14 14" fill="none"><path d="M2 4l5 5 5-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" /></svg>
                    </div>
                    {openItems['card5-2a'] && (
                      <div className="p-4 text-[13px] text-brand-muted leading-[1.6] border-t border-brand-border bg-brand-bg">
                        Future isn't predetermined. The choices made now — regulation, investment, ethics, accessibility — shape whether AI FinTech empowers or oppresses. Don't let students be passive observers. They are building the future. Every architectural choice matters. Teach agency.
                      </div>
                    )}
                  </div>
                </div>

                <div className="bg-white border border-brand-border rounded-xl shadow-sm overflow-hidden flex flex-col">
                  <div className="p-5 border-b border-brand-border bg-brand-bg relative">
                    <div className="text-[11px] font-bold text-brand-muted mb-1">AIPA</div>
                    <div className="font-bold text-[15px] leading-[1.3] mb-2">Generate Your Own Exam Cards</div>
                    <div className="inline-block bg-white border border-brand-border rounded-full px-2 py-0.5 text-[10px] font-bold text-brand-muted">Unlimited · On-device</div>
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-center p-4 cursor-pointer hover:bg-black/5 border-b border-brand-border" onClick={() => toggleItem('card5-3')}>
                      <span className="font-bold text-[13px] text-brand-ink">How AIPA Helps Students</span>
                      <svg className={`w-3 h-3 transition-transform duration-300 ${openItems['card5-3'] ? 'rotate-180' : ''}`} viewBox="0 0 14 14" fill="none"><path d="M2 4l5 5 5-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" /></svg>
                    </div>
                    {openItems['card5-3'] && (
                      <div className="p-4 text-[13px] text-brand-muted leading-[1.6] border-b border-brand-border bg-white">
                        Tell AIPA your exam topic, your learning style, and how much time you have. AIPA generates personalised flash cards, practice questions, and concept summaries — adapted to your pace and level. All processing is on-device. Your study data is never shared with anyone.<br/><br/>
                        <strong>For teachers:</strong> AIPA can generate differentiated learning materials for the same unit at 3 levels: foundation, standard, and extension. Crisis-linked examples are auto-updated as new events occur.
                      </div>
                    )}
                    <div className="flex justify-between items-center p-4 cursor-pointer hover:bg-black/5" onClick={() => toggleItem('card5-3a')}>
                      <span className="font-bold text-[13px] text-brand-ink">Early Access</span>
                      <svg className={`w-3 h-3 transition-transform duration-300 ${openItems['card5-3a'] ? 'rotate-180' : ''}`} viewBox="0 0 14 14" fill="none"><path d="M2 4l5 5 5-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" /></svg>
                    </div>
                    {openItems['card5-3a'] && (
                      <div className="p-4 text-[13px] text-brand-muted leading-[1.6] border-t border-brand-border bg-brand-bg">
                        University partnerships, professor early access, and GenZ student programmes launching with the 96-day campaign from 5 April – 9 July 2026. Contact <a href="mailto:genz@icebrkr.one" className="text-brand-red font-semibold hover:underline">genz@icebrkr.one</a> for educational institution pricing and pilot access.
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <div className="mt-6 p-4 md:p-5 bg-white border border-brand-border rounded-xl text-[13px] text-brand-muted">
                🤖 Unit 5 covers 18 cards on AI governance, machine learning bias, digital identity, KYC evolution, deepfake fraud, algorithmic trading risks, and the future of privacy-compliant AI. All 90 cards available via AIPA on-device.
              </div>
            </div>
          )}

          {/* Stubs for Unit 2, 3, 4 */}
          {[2, 3, 4].includes(activeUnit) && (
            <div className="animate-fade-in p-10 text-center border border-brand-border rounded-xl bg-white text-brand-muted">
              <div className="text-[32px] mb-3">
                {activeUnit === 2 ? '💳' : activeUnit === 3 ? '🚀' : '⚖️'}
              </div>
              <div className="font-bold text-[16px] text-brand-ink mb-2">
                Unit {activeUnit} — {
                  activeUnit === 2 ? 'Digital Payments & Services' : 
                  activeUnit === 3 ? 'Digital Finance & Innovation' : 
                  'Regulation & Compliance'
                }
              </div>
              <div className="text-[13px] mb-5 max-w-[600px] mx-auto leading-[1.6]">
                {activeUnit === 2 && '18 cards covering payment rails, digital wallets, UPI/M-Pesa/WeChat Pay, real-time gross settlement, cross-border payments, and crisis resilience of payment infrastructure. Ask AIPA to generate exam prep cards for any of the 18 topics.'}
                {activeUnit === 3 && '18 cards on crowdfunding, marketplace lending, P2P platforms, ICOs, tokenisation, and the regulatory grey zones of alternative finance. Real conflict-funding case studies (Ukraine, Hamas crypto) and government dilemma frameworks.'}
                {activeUnit === 4 && '18 cards on KYC/AML, sandboxes, sanctions warfare, compliance costs, RegTech arms race, and the balance between innovation protection and consumer safety. Directly relevant to EU AI Act compliance — icebrkr\'s core positioning.'}
              </div>
              <a href="mailto:genz@icebrkr.one" className="inline-block bg-brand-dark text-white py-2.5 px-6 rounded-md font-semibold text-[13px] no-underline hover:opacity-90 transition-opacity">
                Request Educational Access →
              </a>
            </div>
          )}

        </div>
      </div>
    </section>
  );
}
