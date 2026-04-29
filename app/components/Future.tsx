"use client";
import React, { useState } from 'react';

export default function Future() {
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({});

  const toggleItem = (id: string) => {
    setOpenItems(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <section id="future" className="py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-8">
        <div className="mb-12">
          <span className="inline-block text-[11px] font-bold uppercase tracking-[1.5px] text-brand-red mb-3">
            Coming Post-Launch
          </span>
          <h2 className="font-serif text-[clamp(28px,3.5vw,44px)] leading-[1.15] tracking-[-0.5px] mb-3.5">
            The hardware frontier.<br />Three modules. Physical world.
          </h2>
          <p className="text-[16px] text-brand-muted leading-[1.7] max-w-[540px]">
            Smart Closet, Smart Fridge, and the Smart Delivery Hub extend COMPASS from software into
            physical space — all zero-knowledge, all Swiss-privacy-compliant.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Smart Closet */}
          <div className="bg-white border border-brand-border rounded-xl shadow-[0_4px_24px_rgba(0,0,0,0.04)] overflow-hidden flex flex-col">
            <div className="p-7 pb-5 border-b border-brand-border relative">
              <div className="absolute top-7 right-7 bg-black text-white text-[10px] font-bold uppercase tracking-[1px] py-1 px-2.5 rounded-sm">Post-Launch</div>
              <div className="w-12 h-12 rounded flex items-center justify-center text-xl mb-4 bg-brand-red/10">👔</div>
              <div className="font-serif text-[24px] tracking-[-0.5px] leading-[1.1] mb-1">Smart Closet</div>
              <div className="text-[14px] text-brand-muted">AI Style & Wardrobe Intelligence</div>
            </div>
            <div className="flex-grow p-0">
              <div 
                className="flex justify-between items-center px-7 py-5 font-bold text-[14px] cursor-pointer select-none transition-colors hover:bg-black/5"
                onClick={() => toggleItem('closet-core')}
              >
                <span>Core Features</span>
                <svg className={`w-3.5 h-3.5 transition-transform duration-300 ${openItems['closet-core'] ? 'rotate-180' : ''}`} viewBox="0 0 14 14" fill="none">
                  <path d="M2 4l5 5 5-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                </svg>
              </div>
              <div className={`overflow-hidden transition-all duration-300 ${openItems['closet-core'] ? 'max-h-[500px]' : 'max-h-0'}`}>
                <div className="px-7 pb-5 text-[14px] text-brand-muted leading-[1.6]">
                  <ul className="list-none flex flex-col gap-3 m-0 p-0">
                    <li className="flex items-start gap-3"><span className="w-2 h-2 rounded-full bg-brand-red shrink-0 mt-1.5"></span>Weather-aware outfit suggestions from your actual wardrobe, synced with calendar context</li>
                    <li className="flex items-start gap-3"><span className="w-2 h-2 rounded-full bg-brand-red shrink-0 mt-1.5"></span>Family bag checklists — crèche bag, PE kit, school supplies — reset automatically each morning</li>
                    <li className="flex items-start gap-3"><span className="w-2 h-2 rounded-full bg-brand-red shrink-0 mt-1.5"></span>Wardrobe inventory via RFID tags, tracked on-device — no cloud, no vendor access</li>
                    <li className="flex items-start gap-3"><span className="w-2 h-2 rounded-full bg-brand-red shrink-0 mt-1.5"></span>Capsule wardrobe analysis and sustainable fashion scoring</li>
                  </ul>
                </div>
              </div>

              <div className="flex border-t border-brand-border">
                <div className="flex-1 p-5 border-r border-brand-border flex flex-col justify-center">
                  <div className="font-serif text-[28px] tracking-[-1px] text-brand-red leading-none mb-1">9</div>
                  <div className="text-[12px] text-brand-muted font-medium leading-[1.3]">Decisions/day eliminated</div>
                </div>
                <div className="flex-1 p-5 flex flex-col justify-center">
                  <div className="font-serif text-[28px] tracking-[-1px] text-brand-ink leading-none mb-1">0</div>
                  <div className="text-[12px] text-brand-muted font-medium leading-[1.3]">Data to cloud</div>
                </div>
              </div>
            </div>
          </div>

          {/* Smart Fridge */}
          <div className="bg-white border border-brand-border rounded-xl shadow-[0_4px_24px_rgba(0,0,0,0.04)] overflow-hidden flex flex-col">
            <div className="p-7 pb-5 border-b border-brand-border relative">
              <div className="absolute top-7 right-7 bg-black text-white text-[10px] font-bold uppercase tracking-[1px] py-1 px-2.5 rounded-sm">Patent Filed</div>
              <div className="w-12 h-12 rounded flex items-center justify-center text-xl mb-4 bg-brand-green/10">🧊</div>
              <div className="font-serif text-[24px] tracking-[-0.5px] leading-[1.1] mb-1">Smart Fridge</div>
              <div className="text-[14px] text-brand-muted">AI Nutrition & Inventory</div>
            </div>
            <div className="flex-grow p-0">
              <div 
                className="flex justify-between items-center px-7 py-5 font-bold text-[14px] cursor-pointer select-none transition-colors hover:bg-black/5"
                onClick={() => toggleItem('fridge-core')}
              >
                <span>Core Features</span>
                <svg className={`w-3.5 h-3.5 transition-transform duration-300 ${openItems['fridge-core'] ? 'rotate-180' : ''}`} viewBox="0 0 14 14" fill="none">
                  <path d="M2 4l5 5 5-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                </svg>
              </div>
              <div className={`overflow-hidden transition-all duration-300 ${openItems['fridge-core'] ? 'max-h-[500px]' : 'max-h-0'}`}>
                <div className="px-7 pb-5 text-[14px] text-brand-muted leading-[1.6]">
                  <ul className="list-none flex flex-col gap-3 m-0 p-0">
                    <li className="flex items-start gap-3"><span className="w-2 h-2 rounded-full bg-brand-green shrink-0 mt-1.5"></span>Facial recognition per family member — each person sees only their safe foods via LED colour guidance</li>
                    <li className="flex items-start gap-3"><span className="w-2 h-2 rounded-full bg-brand-green shrink-0 mt-1.5"></span>6 independent temperature zones (−18°C to +6°C) for produce, proteins, dairy, meals, beverages, freezer</li>
                    <li className="flex items-start gap-3"><span className="w-2 h-2 rounded-full bg-brand-green shrink-0 mt-1.5"></span>RFID smart containers — 50+ simultaneous reads, expiry tracking, allergen flags, AES-256 encrypted</li>
                    <li className="flex items-start gap-3"><span className="w-2 h-2 rounded-full bg-brand-green shrink-0 mt-1.5"></span>Predictive expiry alerts and automatic shopping list management</li>
                  </ul>
                </div>
              </div>

              <div 
                className="flex justify-between items-center px-7 py-5 font-bold text-[14px] cursor-pointer select-none transition-colors hover:bg-black/5 border-t border-brand-border"
                onClick={() => toggleItem('fridge-led')}
              >
                <span>LED Allergen System</span>
                <svg className={`w-3.5 h-3.5 transition-transform duration-300 ${openItems['fridge-led'] ? 'rotate-180' : ''}`} viewBox="0 0 14 14" fill="none">
                  <path d="M2 4l5 5 5-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                </svg>
              </div>
              <div className={`overflow-hidden transition-all duration-300 ${openItems['fridge-led'] ? 'max-h-[500px]' : 'max-h-0'}`}>
                <div className="px-7 pb-5 flex gap-2.5">
                  <div className="flex-1 p-3 bg-brand-green/10 border border-brand-green/20 rounded-lg text-center text-[12px]">
                    <div className="font-bold text-brand-green mb-1">🟢 Green</div>Safe for you
                  </div>
                  <div className="flex-1 p-3 bg-brand-orange/10 border border-brand-orange/20 rounded-lg text-center text-[12px]">
                    <div className="font-bold text-brand-orange mb-1">🟡 Yellow</div>Dietary conflict
                  </div>
                  <div className="flex-1 p-3 bg-brand-red/10 border border-brand-red/20 rounded-lg text-center text-[12px]">
                    <div className="font-bold text-brand-red mb-1">🔴 Red</div>Allergen — do not consume
                  </div>
                </div>
              </div>

              <div className="flex border-t border-brand-border mt-auto">
                <div className="flex-1 p-5 border-r border-brand-border flex flex-col justify-center">
                  <div className="font-serif text-[28px] tracking-[-1px] text-brand-green leading-none mb-1">22 min</div>
                  <div className="text-[12px] text-brand-muted font-medium leading-[1.3]">Morning prep saved/day</div>
                </div>
                <div className="flex-1 p-5 flex flex-col justify-center">
                  <div className="font-serif text-[28px] tracking-[-1px] text-brand-ink leading-none mb-1">6</div>
                  <div className="text-[12px] text-brand-muted font-medium leading-[1.3]">Temp zones</div>
                </div>
              </div>
            </div>
          </div>

          {/* Smart Delivery Hub */}
          <div className="bg-white border border-brand-border rounded-xl shadow-[0_4px_24px_rgba(0,0,0,0.04)] overflow-hidden flex flex-col">
            <div className="p-7 pb-5 border-b border-brand-border relative">
              <div className="absolute top-7 right-7 bg-black text-white text-[10px] font-bold uppercase tracking-[1px] py-1 px-2.5 rounded-sm">Patent Filed</div>
              <div className="w-12 h-12 rounded flex items-center justify-center text-xl mb-4 bg-brand-orange/10">🚚</div>
              <div className="font-serif text-[24px] tracking-[-0.5px] leading-[1.1] mb-1">Smart Delivery Hub</div>
              <div className="text-[14px] text-brand-muted">Mobile Contactless Dispatch</div>
            </div>
            <div className="flex-grow p-0 flex flex-col">
              <div 
                className="flex justify-between items-center px-7 py-5 font-bold text-[14px] cursor-pointer select-none transition-colors hover:bg-black/5"
                onClick={() => toggleItem('hub-core')}
              >
                <span>How it Works</span>
                <svg className={`w-3.5 h-3.5 transition-transform duration-300 ${openItems['hub-core'] ? 'rotate-180' : ''}`} viewBox="0 0 14 14" fill="none">
                  <path d="M2 4l5 5 5-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                </svg>
              </div>
              <div className={`overflow-hidden transition-all duration-300 ${openItems['hub-core'] ? 'max-h-[600px]' : 'max-h-0'}`}>
                <div className="px-7 pb-5 text-[14px] text-brand-muted leading-[1.6]">
                  <ul className="list-none flex flex-col gap-3 m-0 p-0">
                    <li className="flex items-start gap-3"><span className="w-2 h-2 rounded-full bg-brand-orange shrink-0 mt-1.5"></span>Mercedes Sprinter Hub Truck with 32 temperature-controlled smart dispenser slots (4×8 grid)</li>
                    <li className="flex items-start gap-3"><span className="w-2 h-2 rounded-full bg-brand-orange shrink-0 mt-1.5"></span>Contactless collection via facial recognition or QR — correct slot auto-unlocks with green LED</li>
                    <li className="flex items-start gap-3"><span className="w-2 h-2 rounded-full bg-brand-orange shrink-0 mt-1.5"></span>RFID chain-of-custody: tagged at kitchen → scanned at hub → synced to app → logged at pickup</li>
                    <li className="flex items-start gap-3"><span className="w-2 h-2 rounded-full bg-brand-orange shrink-0 mt-1.5"></span>Solar-powered cooling. GPS tracking. 11AM–2PM at office parks and residential complexes</li>
                    <li className="flex items-start gap-3"><span className="w-2 h-2 rounded-full bg-brand-orange shrink-0 mt-1.5"></span>Reusable container return with instant deposit refund — zero single-use packaging</li>
                  </ul>
                </div>
              </div>

              <div className="flex border-t border-brand-border mt-auto">
                <div className="flex-1 p-5 border-r border-brand-border flex flex-col justify-center">
                  <div className="font-serif text-[28px] tracking-[-1px] text-brand-orange leading-none mb-1">32</div>
                  <div className="text-[12px] text-brand-muted font-medium leading-[1.3]">Slots per truck</div>
                </div>
                <div className="flex-1 p-5 flex flex-col justify-center">
                  <div className="font-serif text-[28px] tracking-[-1px] text-brand-ink leading-none mb-1">0</div>
                  <div className="text-[12px] text-brand-muted font-medium leading-[1.3]">Human contact</div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
