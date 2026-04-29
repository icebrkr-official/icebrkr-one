import React from 'react';

export default function Accessibility() {
  return (
    <section id="ib-challenged" className="py-20 md:py-32 bg-brand-dark">
      <div className="max-w-7xl mx-auto px-8">
        <div className="mb-12">
          <span className="inline-block text-[11px] font-bold uppercase tracking-[1.5px] text-brand-red mb-3">
            Accessibility · IB Challenged
          </span>
          <h2 className="font-serif text-[clamp(28px,3.5vw,44px)] leading-[1.15] tracking-[-0.5px] text-white mb-3.5">
            icebrkr for every ability.<br />No one left behind.
          </h2>
          <p className="text-[16px] text-brand-muted leading-[1.7] max-w-[540px]">
            COMPASS is built so that every module works for every user — including those with visual,
            hearing, cognitive, and motor challenges. Accessibility is architecture, not afterthought.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white/5 border border-white/10 rounded-xl p-6 md:p-8">
            <div className="flex items-start gap-4 mb-5">
              <div className="w-12 h-12 rounded flex items-center justify-center text-xl shrink-0" style={{ background: 'rgba(39,174,96,.12)' }}>👁️</div>
              <div>
                <div className="font-bold text-[15px] mb-1 text-white">Visual Impairment</div>
                <div className="text-[12px] text-brand-muted">Low vision · Blind · Colour blind</div>
              </div>
            </div>
            <ul className="list-none flex flex-col gap-3">
              <li className="flex gap-2 text-[13px] text-white/70 leading-[1.5]"><span className="w-1.5 h-1.5 rounded-full bg-brand-green shrink-0 mt-1.5"></span>Voice-first interface — full AIPA access via spoken commands only</li>
              <li className="flex gap-2 text-[13px] text-white/70 leading-[1.5]"><span className="w-1.5 h-1.5 rounded-full bg-brand-green shrink-0 mt-1.5"></span>Dynamic font scaling: 18pt minimum, adjustable to 32pt</li>
              <li className="flex gap-2 text-[13px] text-white/70 leading-[1.5]"><span className="w-1.5 h-1.5 rounded-full bg-brand-green shrink-0 mt-1.5"></span>High-contrast mode — WCAG 2.1 AAA compliant colour ratios</li>
              <li className="flex gap-2 text-[13px] text-white/70 leading-[1.5]"><span className="w-1.5 h-1.5 rounded-full bg-brand-green shrink-0 mt-1.5"></span>Smart Fridge LED system usable by voice override — "read my shelf"</li>
              <li className="flex gap-2 text-[13px] text-white/70 leading-[1.5]"><span className="w-1.5 h-1.5 rounded-full bg-brand-green shrink-0 mt-1.5"></span>Screen-reader compatible architecture across all 9 modules</li>
              <li className="flex gap-2 text-[13px] text-white/70 leading-[1.5]"><span className="w-1.5 h-1.5 rounded-full bg-brand-green shrink-0 mt-1.5"></span>Audio descriptions for Smart Closet outfit suggestions</li>
            </ul>
            <div className="mt-5 pt-5 border-t border-white/10 font-bold text-[12px] text-brand-green">✅ WCAG 2.1 AAA · Voice-complete access</div>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-xl p-6 md:p-8">
            <div className="flex items-start gap-4 mb-5">
              <div className="w-12 h-12 rounded flex items-center justify-center text-xl shrink-0" style={{ background: 'rgba(245,166,35,.12)' }}>👂</div>
              <div>
                <div className="font-bold text-[15px] mb-1 text-white">Hearing Impairment</div>
                <div className="text-[12px] text-brand-muted">Deaf · Hard of hearing</div>
              </div>
            </div>
            <ul className="list-none flex flex-col gap-3">
              <li className="flex gap-2 text-[13px] text-white/70 leading-[1.5]"><span className="w-1.5 h-1.5 rounded-full bg-brand-orange shrink-0 mt-1.5"></span>All alerts delivered as visual cards — no audio-only notifications</li>
              <li className="flex gap-2 text-[13px] text-white/70 leading-[1.5]"><span className="w-1.5 h-1.5 rounded-full bg-brand-orange shrink-0 mt-1.5"></span>IB-Connect auto-transcribes incoming voice calls in real-time</li>
              <li className="flex gap-2 text-[13px] text-white/70 leading-[1.5]"><span className="w-1.5 h-1.5 rounded-full bg-brand-orange shrink-0 mt-1.5"></span>Haptic alert patterns: short/long pulses for priority levels</li>
              <li className="flex gap-2 text-[13px] text-white/70 leading-[1.5]"><span className="w-1.5 h-1.5 rounded-full bg-brand-orange shrink-0 mt-1.5"></span>Sign language prompt cards for cultural bridge features</li>
              <li className="flex gap-2 text-[13px] text-white/70 leading-[1.5]"><span className="w-1.5 h-1.5 rounded-full bg-brand-orange shrink-0 mt-1.5"></span>Visual emergency alert — scam/safety detection via banner only</li>
              <li className="flex gap-2 text-[13px] text-white/70 leading-[1.5]"><span className="w-1.5 h-1.5 rounded-full bg-brand-orange shrink-0 mt-1.5"></span>Subtitle-first video call mode — no audio dependency</li>
            </ul>
            <div className="mt-5 pt-5 border-t border-white/10 font-bold text-[12px] text-brand-orange">✅ Visual-first · Haptic alerts · Full transcript</div>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-xl p-6 md:p-8">
            <div className="flex items-start gap-4 mb-5">
              <div className="w-12 h-12 rounded flex items-center justify-center text-xl shrink-0" style={{ background: 'rgba(232,48,42,.12)' }}>🧠</div>
              <div>
                <div className="font-bold text-[15px] mb-1 text-white">Cognitive & Learning</div>
                <div className="text-[12px] text-brand-muted">Dyslexia · ADHD · Autism spectrum</div>
              </div>
            </div>
            <ul className="list-none flex flex-col gap-3">
              <li className="flex gap-2 text-[13px] text-white/70 leading-[1.5]"><span className="w-1.5 h-1.5 rounded-full bg-brand-red shrink-0 mt-1.5"></span>Dyslexia-friendly font option (OpenDyslexic) across all modules</li>
              <li className="flex gap-2 text-[13px] text-white/70 leading-[1.5]"><span className="w-1.5 h-1.5 rounded-full bg-brand-red shrink-0 mt-1.5"></span>Simplified language mode — plain English, no jargon, short sentences</li>
              <li className="flex gap-2 text-[13px] text-white/70 leading-[1.5]"><span className="w-1.5 h-1.5 rounded-full bg-brand-red shrink-0 mt-1.5"></span>Focus mode: single-task AIPA cards, no multi-item feed overwhelm</li>
              <li className="flex gap-2 text-[13px] text-white/70 leading-[1.5]"><span className="w-1.5 h-1.5 rounded-full bg-brand-red shrink-0 mt-1.5"></span>Routine reinforcement — AIPA learns and respects structured patterns</li>
              <li className="flex gap-2 text-[13px] text-white/70 leading-[1.5]"><span className="w-1.5 h-1.5 rounded-full bg-brand-red shrink-0 mt-1.5"></span>Sensory-calm UI: reduced animations, muted colour palette option</li>
              <li className="flex gap-2 text-[13px] text-white/70 leading-[1.5]"><span className="w-1.5 h-1.5 rounded-full bg-brand-red shrink-0 mt-1.5"></span>Journal AI adapted for neurodivergent mood tracking with visual scales</li>
            </ul>
            <div className="mt-5 pt-5 border-t border-white/10 font-bold text-[12px] text-brand-red">✅ OpenDyslexic · Plain language · Calm mode</div>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-xl p-6 md:p-8">
            <div className="flex items-start gap-4 mb-5">
              <div className="w-12 h-12 rounded flex items-center justify-center text-xl shrink-0" style={{ background: 'rgba(15,25,35,.15)' }}>✋</div>
              <div>
                <div className="font-bold text-[15px] mb-1 text-white">Motor Impairment</div>
                <div className="text-[12px] text-brand-muted">Limited mobility · Switch access</div>
              </div>
            </div>
            <ul className="list-none flex flex-col gap-3">
              <li className="flex gap-2 text-[13px] text-white/70 leading-[1.5]"><span className="w-1.5 h-1.5 rounded-full bg-brand-dark shrink-0 mt-1.5"></span>Voice-complete control — every action achievable without touch</li>
              <li className="flex gap-2 text-[13px] text-white/70 leading-[1.5]"><span className="w-1.5 h-1.5 rounded-full bg-brand-dark shrink-0 mt-1.5"></span>Large tap targets: 48×48px minimum across all interactive elements</li>
              <li className="flex gap-2 text-[13px] text-white/70 leading-[1.5]"><span className="w-1.5 h-1.5 rounded-full bg-brand-dark shrink-0 mt-1.5"></span>Switch access compatible — sequential focus navigation</li>
              <li className="flex gap-2 text-[13px] text-white/70 leading-[1.5]"><span className="w-1.5 h-1.5 rounded-full bg-brand-dark shrink-0 mt-1.5"></span>Gesture simplification — single-tap alternatives for all swipe actions</li>
              <li className="flex gap-2 text-[13px] text-white/70 leading-[1.5]"><span className="w-1.5 h-1.5 rounded-full bg-brand-dark shrink-0 mt-1.5"></span>Dwell selection support for hands-free navigation</li>
              <li className="flex gap-2 text-[13px] text-white/70 leading-[1.5]"><span className="w-1.5 h-1.5 rounded-full bg-brand-dark shrink-0 mt-1.5"></span>Smart Fridge LED guide operable by voice — no physical interaction needed</li>
            </ul>
            <div className="mt-5 pt-5 border-t border-white/10 font-bold text-[12px] text-brand-dark">✅ Voice-complete · Switch access · Large targets</div>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-xl p-6 md:p-8">
            <div className="flex items-start gap-4 mb-5">
              <div className="w-12 h-12 rounded flex items-center justify-center text-xl shrink-0" style={{ background: 'rgba(39,174,96,.12)' }}>👴</div>
              <div>
                <div className="font-bold text-[15px] mb-1 text-white">Elderly & Age-Related</div>
                <div className="text-[12px] text-brand-muted">Elderly parents · Carers</div>
              </div>
            </div>
            <ul className="list-none flex flex-col gap-3">
              <li className="flex gap-2 text-[13px] text-white/70 leading-[1.5]"><span className="w-1.5 h-1.5 rounded-full bg-brand-green shrink-0 mt-1.5"></span>Voice-assisted onboarding — set up independently without help</li>
              <li className="flex gap-2 text-[13px] text-white/70 leading-[1.5]"><span className="w-1.5 h-1.5 rounded-full bg-brand-green shrink-0 mt-1.5"></span>Scam & fraud detection on all calls and messages — proactive alerts</li>
              <li className="flex gap-2 text-[13px] text-white/70 leading-[1.5]"><span className="w-1.5 h-1.5 rounded-full bg-brand-green shrink-0 mt-1.5"></span>Medication reminders with voice alerts + family notification (opt-in)</li>
              <li className="flex gap-2 text-[13px] text-white/70 leading-[1.5]"><span className="w-1.5 h-1.5 rounded-full bg-brand-green shrink-0 mt-1.5"></span>Expiry alerts in plain language: "Use your milk today — expires tonight"</li>
              <li className="flex gap-2 text-[13px] text-white/70 leading-[1.5]"><span className="w-1.5 h-1.5 rounded-full bg-brand-green shrink-0 mt-1.5"></span>Emergency SOS card always visible in unified feed</li>
              <li className="flex gap-2 text-[13px] text-white/70 leading-[1.5]"><span className="w-1.5 h-1.5 rounded-full bg-brand-green shrink-0 mt-1.5"></span>Family carer view — trusted contact sees health cards (opt-in)</li>
            </ul>
            <div className="mt-5 pt-5 border-t border-white/10 font-bold text-[12px] text-brand-green">✅ Anti-scam · Medication · Family safety net</div>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-xl p-6 md:p-8">
            <div className="flex items-start gap-4 mb-5">
              <div className="w-12 h-12 rounded flex items-center justify-center text-xl shrink-0" style={{ background: 'rgba(245,166,35,.12)' }}>🌐</div>
              <div>
                <div className="font-bold text-[15px] mb-1 text-white">Language & Literacy</div>
                <div className="text-[12px] text-brand-muted">Non-native · Low literacy</div>
              </div>
            </div>
            <ul className="list-none flex flex-col gap-3">
              <li className="flex gap-2 text-[13px] text-white/70 leading-[1.5]"><span className="w-1.5 h-1.5 rounded-full bg-brand-orange shrink-0 mt-1.5"></span>25+ languages at launch — culturally adapted, not just translated</li>
              <li className="flex gap-2 text-[13px] text-white/70 leading-[1.5]"><span className="w-1.5 h-1.5 rounded-full bg-brand-orange shrink-0 mt-1.5"></span>Voice-in, voice-out — full access with zero reading required</li>
              <li className="flex gap-2 text-[13px] text-white/70 leading-[1.5]"><span className="w-1.5 h-1.5 rounded-full bg-brand-orange shrink-0 mt-1.5"></span>Visual icon system — every alert has an icon, not just text</li>
              <li className="flex gap-2 text-[13px] text-white/70 leading-[1.5]"><span className="w-1.5 h-1.5 rounded-full bg-brand-orange shrink-0 mt-1.5"></span>Generation gap bridge — slang decoded, messages simplified</li>
              <li className="flex gap-2 text-[13px] text-white/70 leading-[1.5]"><span className="w-1.5 h-1.5 rounded-full bg-brand-orange shrink-0 mt-1.5"></span>Real-time sign/menu translation via camera — 50+ languages</li>
              <li className="flex gap-2 text-[13px] text-white/70 leading-[1.5]"><span className="w-1.5 h-1.5 rounded-full bg-brand-orange shrink-0 mt-1.5"></span>PPP-adjusted pricing — accessible in emerging markets</li>
            </ul>
            <div className="mt-5 pt-5 border-t border-white/10 font-bold text-[12px] text-brand-orange">✅ 25+ languages · Voice-first · Icon system</div>
          </div>
        </div>

        <div className="mt-8 bg-brand-green/10 border border-brand-green/20 rounded-xl p-7 text-center">
          <div className="text-[11px] font-bold uppercase tracking-[1px] text-brand-green mb-2.5">
            IB Challenged Partnership
          </div>
          <div className="text-[15px] text-white/65 max-w-[600px] mx-auto mb-4">
            icebrkr is actively seeking partnerships with assistive technology organisations, disability charities, and healthcare providers to co-design the IB Challenged feature set.
          </div>
          <a href="mailto:genz@icebrkr.one" className="inline-block bg-brand-green text-white py-3 px-7 rounded-md font-bold text-[14px] no-underline hover:opacity-90 transition-opacity">
            Partner With Us →
          </a>
        </div>
      </div>
    </section>
  );
}
