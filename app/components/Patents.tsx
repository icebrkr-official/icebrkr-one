"use client";
import React, { useState } from 'react';

export default function Patents() {
  const [activeTab, setActiveTab] = useState('fridge');
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({});

  const toggleItem = (id: string) => {
    setOpenItems(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <section id="patents" className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-8">
        <div className="mb-12">
          <span className="inline-block text-[11px] font-bold uppercase tracking-[1.5px] text-brand-muted mb-3">
            Intellectual Property
          </span>
          <h2 className="font-serif text-[clamp(28px,3.5vw,44px)] leading-[1.15] tracking-[-0.5px] mb-3.5">
            Patent-pending innovations.<br />Architectural moats, not features.
          </h2>
          <p className="text-[16px] text-brand-muted leading-[1.7] max-w-[540px]">
            Two patent applications covering the complete icebrkr hardware ecosystem. Filed December
            2025, Switzerland.
          </p>
        </div>

        <div className="flex flex-wrap gap-3 mb-8">
          <button
            onClick={() => setActiveTab('fridge')}
            className={`px-5 py-3 rounded-full font-bold text-[13px] transition-all duration-300 border ${
              activeTab === 'fridge' ? 'bg-brand-green border-brand-green text-white shadow-md' : 'bg-transparent border-brand-border text-brand-muted hover:border-brand-ink hover:text-brand-ink'
            }`}
          >
            Smart Fridge System
          </button>
          <button
            onClick={() => setActiveTab('hub')}
            className={`px-5 py-3 rounded-full font-bold text-[13px] transition-all duration-300 border ${
              activeTab === 'hub' ? 'bg-brand-orange border-brand-orange text-white shadow-md' : 'bg-transparent border-brand-border text-brand-muted hover:border-brand-ink hover:text-brand-ink'
            }`}
          >
            Delivery Hub System
          </button>
          <button
            onClick={() => setActiveTab('ubts')}
            className={`px-5 py-3 rounded-full font-bold text-[13px] transition-all duration-300 border ${
              activeTab === 'ubts' ? 'bg-brand-red border-brand-red text-white shadow-md' : 'bg-transparent border-brand-border text-brand-muted hover:border-brand-ink hover:text-brand-ink'
            }`}
          >
            UBTS Core Architecture
          </button>
        </div>

        <div className="mt-8">
          {activeTab === 'fridge' && (
            <div className="animate-fade-in bg-white border border-brand-border rounded-2xl shadow-lg overflow-hidden">
              <div className="p-8 border-b-4 border-brand-green bg-brand-green/5">
                <div className="inline-block px-3 py-1 bg-brand-green text-white text-[10px] font-bold uppercase tracking-[1px] rounded mb-3">Patent Pending · Filed Dec 2025</div>
                <div className="font-serif text-[24px] tracking-[-0.5px] leading-[1.2] mb-3">Intelligent Home Refrigeration System with Biometric Identification, Per-User LED Guidance & Zero-Knowledge Vault Architecture</div>
                <div className="text-[12px] text-brand-muted font-medium">Inventor: Bennet Prasannakumar · icebrkr AG, Switzerland</div>
              </div>
              <div className="p-0">
                <div className="flex justify-between items-center p-6 bg-brand-bg border-b border-brand-border cursor-pointer hover:bg-black/5 transition-colors" onClick={() => toggleItem('fridge-claims')}>
                  <span className="font-bold text-[14px] uppercase tracking-[1px]">Primary Claims</span>
                  <svg className={`w-4 h-4 transition-transform duration-300 ${openItems['fridge-claims'] ? 'rotate-180' : ''}`} viewBox="0 0 16 16" fill="none">
                    <path d="M3 6l5 5 5-5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                  </svg>
                </div>
                <div className={`overflow-hidden transition-all duration-300 ${openItems['fridge-claims'] ? 'max-h-[800px]' : 'max-h-0'}`}>
                  <div className="p-6 text-[14px] text-brand-ink leading-[1.7]">
                    <div className="pl-8 relative mb-4"><span className="absolute left-0 top-0 font-bold text-brand-green">1.</span>Facial recognition module with 3D RGB-D capture (68+ landmarks), encrypted local biometric storage — no cloud transmission of biometric data at any stage.</div>
                    <div className="pl-8 relative mb-4"><span className="absolute left-0 top-0 font-bold text-brand-green">2.</span>Per-shelf RGB LED guidance activated per-user profile: Green (safe) · Yellow (dietary conflict) · Red (allergen) — personalised to medical restrictions and age-appropriate dietary rules.</div>
                    <div className="pl-8 relative mb-4"><span className="absolute left-0 top-0 font-bold text-brand-green">3.</span>RFID smart container system (ISO 15693, 50+ simultaneous reads) tracking food type, pack date, expiry, owner ID (encrypted), allergen flags — all processed on-device.</div>
                    <div className="pl-8 relative"><span className="absolute left-0 top-0 font-bold text-brand-green">4.</span>AES-256-GCM vault encryption keyed to biometric data with PBKDF2 (100,000 iterations). Homomorphic encryption for biometric storage. Zero central server access to unencrypted data.</div>
                  </div>
                </div>

                <div className="flex justify-between items-center p-6 bg-brand-bg border-y border-brand-border cursor-pointer hover:bg-black/5 transition-colors" onClick={() => toggleItem('fridge-specs')}>
                  <span className="font-bold text-[14px] uppercase tracking-[1px]">Technical Specifications</span>
                  <svg className={`w-4 h-4 transition-transform duration-300 ${openItems['fridge-specs'] ? 'rotate-180' : ''}`} viewBox="0 0 16 16" fill="none">
                    <path d="M3 6l5 5 5-5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                  </svg>
                </div>
                <div className={`overflow-hidden transition-all duration-300 ${openItems['fridge-specs'] ? 'max-h-[800px]' : 'max-h-0'}`}>
                  <div className="p-6 overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                      <tbody>
                        {[
                          ['Processing unit', 'ARM quad-core 1.5GHz · 4GB RAM · Secure enclave'],
                          ['Recognition speed', '<0.5s from door open'],
                          ['User profiles', '5–20 per unit · Fallback: QR/NFC'],
                          ['Temperature zones', '6 independent (−18°C to +6°C)'],
                          ['RFID frequency', '13.56 MHz NFC + 860–960 MHz UHF'],
                          ['Container sizes', '500ml · 1L · 2L · 4L · IP67 waterproof tags'],
                          ['Encryption', 'AES-256-GCM · TLS 1.3 · WPA3 · E2EE cloud sync']
                        ].map((row, i) => (
                          <tr key={i}>
                            <td className="py-3 px-4 border-b border-brand-border font-bold text-[13px] bg-black/5 w-1/3">{row[0]}</td>
                            <td className="py-3 px-4 border-b border-brand-border text-[14px] text-brand-ink">{row[1]}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'hub' && (
            <div className="animate-fade-in bg-white border border-brand-border rounded-2xl shadow-lg overflow-hidden">
              <div className="p-8 border-b-4 border-brand-orange bg-brand-orange/5">
                <div className="inline-block px-3 py-1 bg-brand-orange text-white text-[10px] font-bold uppercase tracking-[1px] rounded mb-3">Patent Pending · Filed Dec 2025</div>
                <div className="font-serif text-[24px] tracking-[-0.5px] leading-[1.2] mb-3">Mobile Delivery Hub System with Automated Contactless Dispensing, Biometric Collection & RFID Chain-of-Custody</div>
                <div className="text-[12px] text-brand-muted font-medium">Inventor: Bennet Prasannakumar · icebrkr AG, Switzerland</div>
              </div>
              <div className="p-0">
                <div className="flex justify-between items-center p-6 bg-brand-bg border-b border-brand-border cursor-pointer hover:bg-black/5 transition-colors" onClick={() => toggleItem('hub-claims')}>
                  <span className="font-bold text-[14px] uppercase tracking-[1px]">Primary Claims</span>
                  <svg className={`w-4 h-4 transition-transform duration-300 ${openItems['hub-claims'] ? 'rotate-180' : ''}`} viewBox="0 0 16 16" fill="none">
                    <path d="M3 6l5 5 5-5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                  </svg>
                </div>
                <div className={`overflow-hidden transition-all duration-300 ${openItems['hub-claims'] ? 'max-h-[800px]' : 'max-h-0'}`}>
                  <div className="p-6 text-[14px] text-brand-ink leading-[1.7]">
                    <div className="pl-8 relative mb-4"><span className="absolute left-0 top-0 font-bold text-brand-orange">1.</span>Mobile Hub Truck with 32 independent temperature-controlled dispenser slots (4×8 grid), each with climate control, RFID reader, and LED indicator — operated without human intermediaries.</div>
                    <div className="pl-8 relative mb-4"><span className="absolute left-0 top-0 font-bold text-brand-orange">2.</span>Biometric-triggered slot release: facial recognition or QR authenticates user, correct slot illuminates green LED and auto-unlocks — logs pickup time, sends app confirmation.</div>
                    <div className="pl-8 relative mb-4"><span className="absolute left-0 top-0 font-bold text-brand-orange">3.</span>End-to-end RFID chain-of-custody: tagged at kitchen prep, scanned at hub loading, synced to user app in real-time, logged at pickup and optional return — full food safety audit trail.</div>
                    <div className="pl-8 relative"><span className="absolute left-0 top-0 font-bold text-brand-orange">4.</span>Reusable smart container return system with automated deposit refund on return slot insertion — promotes zero single-use packaging at scale.</div>
                  </div>
                </div>

                <div className="flex justify-between items-center p-6 bg-brand-bg border-y border-brand-border cursor-pointer hover:bg-black/5 transition-colors" onClick={() => toggleItem('hub-specs')}>
                  <span className="font-bold text-[14px] uppercase tracking-[1px]">Technical Specifications</span>
                  <svg className={`w-4 h-4 transition-transform duration-300 ${openItems['hub-specs'] ? 'rotate-180' : ''}`} viewBox="0 0 16 16" fill="none">
                    <path d="M3 6l5 5 5-5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                  </svg>
                </div>
                <div className={`overflow-hidden transition-all duration-300 ${openItems['hub-specs'] ? 'max-h-[800px]' : 'max-h-0'}`}>
                  <div className="p-6 overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                      <tbody>
                        {[
                          ['Vehicle platform', 'Mercedes Sprinter · 6m length'],
                          ['Dispenser slots', '32 (4×8) · independent climate control per slot'],
                          ['Power system', 'Solar-powered cooling · grid backup'],
                          ['Authentication', 'Facial recognition OR QR code scan'],
                          ['Operating hours', '11:00 AM – 2:00 PM · office parks · residential'],
                          ['Location tracking', 'GPS real-time · shared with users via app'],
                          ['Container return', 'Instant deposit credit · automated processing']
                        ].map((row, i) => (
                          <tr key={i}>
                            <td className="py-3 px-4 border-b border-brand-border font-bold text-[13px] bg-black/5 w-1/3">{row[0]}</td>
                            <td className="py-3 px-4 border-b border-brand-border text-[14px] text-brand-ink">{row[1]}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'ubts' && (
            <div className="animate-fade-in bg-white border border-brand-border rounded-2xl shadow-lg overflow-hidden">
              <div className="p-8 border-b-4 border-brand-red bg-brand-red/5">
                <div className="inline-block px-3 py-1 bg-brand-red text-white text-[10px] font-bold uppercase tracking-[1px] rounded mb-3">Core Architecture · Patent Pending · Dec 2025</div>
                <div className="font-serif text-[24px] tracking-[-0.5px] leading-[1.2] mb-3">UBTS — User Behaviour Training System: On-Device SLM Personalisation Without Raw Data Egress</div>
                <div className="text-[12px] text-brand-muted font-medium">Covers all 9 COMPASS modules · icebrkr AG, Switzerland</div>
              </div>
              <div className="p-0">
                <div className="flex justify-between items-center p-6 bg-brand-bg border-b border-brand-border cursor-pointer hover:bg-black/5 transition-colors" onClick={() => toggleItem('ubts-claims')}>
                  <span className="font-bold text-[14px] uppercase tracking-[1px]">What UBTS Protects</span>
                  <svg className={`w-4 h-4 transition-transform duration-300 ${openItems['ubts-claims'] ? 'rotate-180' : ''}`} viewBox="0 0 16 16" fill="none">
                    <path d="M3 6l5 5 5-5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                  </svg>
                </div>
                <div className={`overflow-hidden transition-all duration-300 ${openItems['ubts-claims'] ? 'max-h-[800px]' : 'max-h-0'}`}>
                  <div className="p-6 text-[14px] text-brand-ink leading-[1.7]">
                    <div className="pl-8 relative"><span className="absolute left-0 top-0 font-bold text-brand-red">—</span>UBTS is the architectural core that allows icebrkr to personalise an AI model to a specific user without any raw personal data leaving the device. It is the mechanism that makes every COMPASS module comply with the EU AI Act and nLPD by design, not by policy.</div>
                  </div>
                </div>

                <div className="flex justify-between items-center p-6 bg-brand-bg border-y border-brand-border cursor-pointer hover:bg-black/5 transition-colors" onClick={() => toggleItem('ubts-specs')}>
                  <span className="font-bold text-[14px] uppercase tracking-[1px]">The 3-Stage Evolution</span>
                  <svg className={`w-4 h-4 transition-transform duration-300 ${openItems['ubts-specs'] ? 'rotate-180' : ''}`} viewBox="0 0 16 16" fill="none">
                    <path d="M3 6l5 5 5-5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                  </svg>
                </div>
                <div className={`overflow-hidden transition-all duration-300 ${openItems['ubts-specs'] ? 'max-h-[800px]' : 'max-h-0'}`}>
                  <div className="p-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="p-5 border border-brand-border rounded-lg bg-white">
                        <div className="font-bold text-[14px] mb-2 text-brand-red">Stage 1 — Guided</div>
                        <div className="text-[13px] text-brand-muted leading-[1.6]">LLM-assisted with SLM verification. Cloud-optional for novel queries. Builds interaction history.</div>
                      </div>
                      <div className="p-5 border border-brand-border rounded-lg bg-white">
                        <div className="font-bold text-[14px] mb-2 text-brand-red">Stage 2 — Hybrid</div>
                        <div className="text-[13px] text-brand-muted leading-[1.6]">SLM handles majority. LLM only for low-confidence edge cases. Adapters trained from encrypted local data.</div>
                      </div>
                      <div className="p-5 border border-brand-border rounded-lg bg-white">
                        <div className="font-bold text-[14px] mb-2 text-brand-red">Stage 3 — Autonomous</div>
                        <div className="text-[13px] text-brand-muted leading-[1.6]">Full on-device inference. No internet dependency. Works offline. Personalisation entirely local.</div>
                      </div>
                      <div className="p-5 border border-brand-border rounded-lg bg-white">
                        <div className="font-bold text-[14px] mb-2 text-brand-red">QLoRA + PEFT</div>
                        <div className="text-[13px] text-brand-muted leading-[1.6]">Efficient on-device adapter training. Mistral 7B + Llama 3.1 8B base models. Sub-1GB adapter deltas.</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
