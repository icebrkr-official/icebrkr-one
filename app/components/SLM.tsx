"use client";
import React, { useState } from 'react';

export default function SLM() {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <section id="slm" className="bg-brand-dark py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-8">
        <div className="mb-12">
          <span className="inline-block text-[11px] font-bold uppercase tracking-[1.5px] text-brand-orange mb-3">
            Small Language Models · On-Device AI
          </span>
          <h2 className="font-serif text-[clamp(28px,3.5vw,44px)] leading-[1.15] tracking-[-0.5px] text-white mb-3.5">
            COMPASS SLM:<br />AI that evolves to autonomy.
          </h2>
          <p className="text-[16px] text-white/55 leading-[1.7] max-w-[540px]">
            Full IP ownership. Progressive cost reduction. 25+ languages. From cloud-supported to
            fully offline — without ever exposing raw data.
          </p>
        </div>

        <div className="flex border-b border-white/12 gap-8 mb-2 overflow-x-auto">
          {['overview', 'stages', 'stack', 'personas'].map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-4 text-[13px] font-bold uppercase tracking-[1px] border-b-[3px] transition-colors whitespace-nowrap ${
                activeTab === tab ? 'text-white border-brand-orange' : 'text-white/40 border-transparent hover:text-white/70 hover:border-white/20'
              }`}
            >
              {tab === 'stages' ? '3 Stages' : tab === 'stack' ? 'Tech Stack' : tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        <div className="mt-2">
          {/* OVERVIEW TAB */}
          {activeTab === 'overview' && (
            <div className="animate-fade-in">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-2">
                <div className="bg-white/5 border border-white/10 rounded-xl p-7">
                  <div className="text-[10px] font-bold tracking-[1px] uppercase text-brand-orange mb-4">Mission</div>
                  <p className="text-[14px] text-white/65 leading-[1.7]">
                    Build an independent SLM system with <strong className="text-white">full IP ownership</strong> that evolves from cloud-supported to fully autonomous on-device operation — serving 4 distinct user personas across 25+ languages with <strong className="text-white">privacy-first design</strong> and progressive cost reduction from $5.50/month to $1.00/month per user.
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div className="flex-1 min-w-[120px] bg-white/5 border border-white/10 rounded-lg p-4 text-center">
                    <div className="font-serif text-[24px] text-brand-orange tracking-[-0.5px]">80%</div>
                    <div className="text-[11px] text-white/40 mt-1">Cost reduction<br />over 12 months</div>
                  </div>
                  <div className="flex-1 min-w-[120px] bg-white/5 border border-white/10 rounded-lg p-4 text-center">
                    <div className="font-serif text-[24px] text-brand-orange tracking-[-0.5px]">25+</div>
                    <div className="text-[11px] text-white/40 mt-1">Languages<br />at launch</div>
                  </div>
                  <div className="flex-1 min-w-[120px] bg-white/5 border border-white/10 rounded-lg p-4 text-center">
                    <div className="font-serif text-[24px] text-brand-orange tracking-[-0.5px]">&lt;2s</div>
                    <div className="text-[11px] text-white/40 mt-1">Response latency<br />on-device</div>
                  </div>
                  <div className="flex-1 min-w-[120px] bg-white/5 border border-white/10 rounded-lg p-4 text-center">
                    <div className="font-serif text-[24px] text-brand-orange tracking-[-0.5px]">100%</div>
                    <div className="text-[11px] text-white/40 mt-1">IP ownership<br />icebrkr</div>
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap gap-5 mt-4">
                <div className="flex-1 min-w-[120px] bg-white/5 border border-white/10 rounded-lg p-4 text-center">
                  <div className="font-serif text-[24px] text-brand-orange tracking-[-0.5px]">15–30</div>
                  <div className="text-[11px] text-white/40 mt-1">Tokens/sec on-device</div>
                </div>
                <div className="flex-1 min-w-[120px] bg-white/5 border border-white/10 rounded-lg p-4 text-center">
                  <div className="font-serif text-[24px] text-brand-orange tracking-[-0.5px]">~4.5GB</div>
                  <div className="text-[11px] text-white/40 mt-1">Total storage footprint</div>
                </div>
                <div className="flex-1 min-w-[120px] bg-white/5 border border-white/10 rounded-lg p-4 text-center">
                  <div className="font-serif text-[24px] text-brand-orange tracking-[-0.5px]">&lt;3s</div>
                  <div className="text-[11px] text-white/40 mt-1">Cold start app launch</div>
                </div>
                <div className="flex-1 min-w-[120px] bg-white/5 border border-white/10 rounded-lg p-4 text-center">
                  <div className="font-serif text-[24px] text-brand-orange tracking-[-0.5px]">AES-256</div>
                  <div className="text-[11px] text-white/40 mt-1">Local encryption standard</div>
                </div>
              </div>
            </div>
          )}

          {/* STAGES TAB */}
          {activeTab === 'stages' && (
            <div className="animate-fade-in">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-2">
                <div className="rounded-xl p-6 relative overflow-hidden bg-brand-red/10 border border-brand-red/20">
                  <div className="font-serif text-[48px] tracking-[-2px] leading-none mb-2 text-brand-red">01</div>
                  <div className="font-bold text-[15px] mb-1 text-white">GUIDED</div>
                  <div className="text-[11px] font-semibold uppercase tracking-[1px] mb-3 opacity-50 text-white">Months 1–3</div>
                  <ul className="list-none flex flex-col gap-1.5 text-[12px] opacity-70 text-white">
                    <li>80% Cloud LLM assistance</li>
                    <li>Heavy learning phase</li>
                    <li>Adapter updates every 2–3 days</li>
                    <li>50+ interactions to progress</li>
                  </ul>
                  <div className="font-bold text-[13px] mt-3.5 pt-3.5 border-t border-white/10 text-brand-red">$5.50/month per user</div>
                </div>
                
                <div className="rounded-xl p-6 relative overflow-hidden bg-brand-orange/10 border border-brand-orange/20">
                  <div className="font-serif text-[48px] tracking-[-2px] leading-none mb-2 text-brand-orange">02</div>
                  <div className="font-bold text-[15px] mb-1 text-white">HYBRID</div>
                  <div className="text-[11px] font-semibold uppercase tracking-[1px] mb-3 opacity-50 text-white">Months 3–6</div>
                  <ul className="list-none flex flex-col gap-1.5 text-[12px] opacity-70 text-white">
                    <li>SLM handles majority of queries</li>
                    <li>LLM for low-confidence edge cases</li>
                    <li>Weekly adapter updates</li>
                    <li>100+ interactions to progress</li>
                  </ul>
                  <div className="font-bold text-[13px] mt-3.5 pt-3.5 border-t border-white/10 text-brand-orange">$2.50/month per user</div>
                </div>
                
                <div className="rounded-xl p-6 relative overflow-hidden bg-brand-green/10 border border-brand-green/20">
                  <div className="font-serif text-[48px] tracking-[-2px] leading-none mb-2 text-brand-green">03</div>
                  <div className="font-bold text-[15px] mb-1 text-white">AUTONOMOUS</div>
                  <div className="text-[11px] font-semibold uppercase tracking-[1px] mb-3 opacity-50 text-white">Month 6+</div>
                  <ul className="list-none flex flex-col gap-1.5 text-[12px] opacity-70 text-white">
                    <li>100% on-device inference</li>
                    <li>Zero internet dependency</li>
                    <li>Monthly adapter updates</li>
                    <li>Works fully offline</li>
                  </ul>
                  <div className="font-bold text-[13px] mt-3.5 pt-3.5 border-t border-white/10 text-brand-green">$1.00/month per user</div>
                </div>
              </div>
              
              <div className="mt-5 bg-white/5 border border-white/10 rounded-xl p-5">
                <div className="text-[11px] font-bold uppercase tracking-[1px] text-white/30 mb-3">UBTS Independence Score Formula</div>
                <div className="font-mono text-[13px] text-brand-orange bg-black/30 py-3 px-4 rounded-md overflow-x-auto whitespace-nowrap">
                  score = (slm_success × 0.60 + slm_usage × 0.20 + avg_quality × 0.20) × 100
                </div>
                <div className="text-[12px] text-white/40 mt-2.5">
                  Score ≥60 → HYBRID · Score ≥80 → AUTONOMOUS · Score &lt;60 → remains GUIDED
                </div>
              </div>
            </div>
          )}

          {/* STACK TAB */}
          {activeTab === 'stack' && (
            <div className="animate-fade-in">
              <div className="overflow-x-auto">
                <table className="w-full border-collapse mt-2 text-left">
                  <thead>
                    <tr>
                      <th className="bg-white/5 text-brand-orange text-[10px] uppercase tracking-[1px] px-3.5 py-2.5 border-b border-white/10">Component</th>
                      <th className="bg-white/5 text-brand-orange text-[10px] uppercase tracking-[1px] px-3.5 py-2.5 border-b border-white/10">Technology</th>
                      <th className="bg-white/5 text-brand-orange text-[10px] uppercase tracking-[1px] px-3.5 py-2.5 border-b border-white/10">Purpose</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ['Adaptation', 'LoRA (r=16 persona, r=8 user)', 'Efficient fine-tuning without full model retraining'],
                      ['Training', 'PyTorch 2.1 + Transformers 4.35', 'Model training pipeline'],
                      ['Cloud Inference', 'vLLM 0.2.7', 'High-throughput serving in GUIDED stage'],
                      ['Mobile Inference', 'llama.cpp (GGUF 4-bit)', 'On-device processing — HYBRID and AUTONOMOUS'],
                      ['Vector DB', 'LanceDB', 'Knowledge bases, RAG retrieval'],
                      ['Backend', 'FastAPI + PostgreSQL + Redis', 'API services, caching, user data'],
                      ['Mobile', 'Kotlin/Compose · Swift/SwiftUI', 'Native Android and iOS apps'],
                      ['Privacy', 'AES-256-GCM · Differential privacy ε=0.1', 'On-device vault + anonymised telemetry']
                    ].map((row, i) => (
                      <tr key={i}>
                        <td className="px-3.5 py-2.5 text-[13px] text-white/65 border-b border-white/5">{row[0]}</td>
                        <td className="px-3.5 py-2.5 text-[13px] text-white/65 border-b border-white/5">{row[1]}</td>
                        <td className="px-3.5 py-2.5 text-[13px] text-white/65 border-b border-white/5">{row[2]}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                <div className="bg-white/5 border border-white/10 rounded-xl p-5">
                  <div className="text-[10px] font-bold uppercase tracking-[1px] text-brand-orange mb-3">Persona LoRA Config</div>
                  <div className="flex flex-col gap-1.5 text-[12px] text-white/55">
                    <div className="flex justify-between"><span>LoRA Rank (r)</span><span className="text-white font-bold">16</span></div>
                    <div className="flex justify-between"><span>LoRA Alpha</span><span className="text-white font-bold">32</span></div>
                    <div className="flex justify-between"><span>Learning Rate</span><span className="text-white font-bold">2e-4</span></div>
                    <div className="flex justify-between"><span>Epochs</span><span className="text-white font-bold">3–5</span></div>
                    <div className="flex justify-between"><span>Adapter Size</span><span className="text-white font-bold">~200MB</span></div>
                  </div>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-xl p-5">
                  <div className="text-[10px] font-bold uppercase tracking-[1px] text-brand-orange mb-3">UBTS User Adapter</div>
                  <div className="flex flex-col gap-1.5 text-[12px] text-white/55">
                    <div className="flex justify-between"><span>LoRA Rank (r)</span><span className="text-white font-bold">8</span></div>
                    <div className="flex justify-between"><span>Training time</span><span className="text-white font-bold">~30 min</span></div>
                    <div className="flex justify-between"><span>Examples needed</span><span className="text-white font-bold">500 personalised</span></div>
                    <div className="flex justify-between"><span>Adapter size</span><span className="text-white font-bold">50–100MB</span></div>
                    <div className="flex justify-between"><span>Deployment</span><span className="text-white font-bold">OTA to mobile</span></div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* PERSONAS TAB */}
          {activeTab === 'personas' && (
            <div className="animate-fade-in">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3.5 mt-2">
                {[
                  { icon: '🌾', name: 'Farmer', meta: '18 languages · 200MB LoRA · ✅ Ready' },
                  { icon: '👷', name: 'Worker', meta: '15 languages · 200MB LoRA · ✅ Ready' },
                  { icon: '👨‍🏫', name: 'Teacher', meta: '13 languages · 200MB LoRA · ✅ Ready' },
                  { icon: '🎓', name: 'Student', meta: '20 languages · 200MB LoRA · ✅ Ready' }
                ].map((p, i) => (
                  <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-5 text-center">
                    <div className="text-[28px] mb-2.5">{p.icon}</div>
                    <div className="font-bold text-[14px] text-white mb-1">{p.name}</div>
                    <div className="text-[11px] text-white/40">{p.meta}</div>
                  </div>
                ))}
              </div>
              
              <div className="mt-4 bg-white/5 border border-white/10 rounded-xl p-5">
                <div className="text-[10px] font-bold uppercase tracking-[1px] text-white/30 mb-2.5">Persona Routing Algorithm</div>
                <div className="font-mono text-[13px] text-brand-green bg-black/30 py-3 px-4 rounded-md overflow-x-auto whitespace-nowrap">
                  Score = domain_match × 0.60 + language_match × 0.20 + user_preference × 0.30
                </div>
                <div className="text-[12px] text-white/40 mt-2.5">
                  Multiple personas can be layered (e.g. Student + Farmer for agricultural college). Routing threshold: confidence &gt;60% to surface prediction.
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
