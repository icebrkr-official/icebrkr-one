export default function Product() {
  const modules = [
    { name: 'AIPA', icon: '🧠', color: 'red', desc: 'Personal AI Chief of Staff. Proactively manages your life, schedule, priorities, and decisions.' },
    { name: 'IB-Health', icon: '❤️', color: 'green', desc: 'Private Wellness Intelligence. Health tracking and insights that never reach a cloud server.' },
    { name: 'IB-Connect', icon: '💬', color: 'dark', desc: 'Privacy-first Messaging. Encrypted communications with zero-knowledge architecture.' },
    { name: 'Journal AI', icon: '📔', color: 'orange', desc: 'Adaptive Life Journal. Your thoughts, goals, and reflections — private by design.' },
    { name: 'Private Vault', icon: '🔐', color: 'red', desc: 'Documents & Identity. Military-grade local encryption for your most sensitive assets.' },
    { name: 'Smart Home', icon: '🏠', color: 'green', desc: 'AI Home Intelligence. Local processing for a genuinely smart home — no vendor lock-in.' },
    { name: 'Smart Fridge', icon: '🧊', color: 'dark', desc: 'AI Nutrition & Inventory. Tracks food, suggests meals, manages shopping — all on-device.' },
    { name: 'IB-Map', icon: '📍', color: 'orange', desc: 'Private Navigation & Places. Routing and discovery without surrendering location data.' },
    { name: 'Smart Closet', icon: '👔', color: 'red', desc: 'AI Style & Wardrobe. Outfit intelligence and personal styling — private and personalised.' },
  ];

  return (
    <>
      <section id="product" className="py-[100px] bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <div className="animate-fade-in">
            <span className="inline-block text-[11px] font-bold uppercase tracking-[1.5px] text-brand-red mb-4">COMPASS — 9 Modules</span>
            <h2 className="font-serif text-[clamp(32px,4vw,48px)] leading-[1.15] tracking-[-0.5px] mb-5 text-brand-ink">Your complete AI Life OS.<br />Zero cloud. Zero egress.</h2>
            <p className="text-[17px] text-brand-muted leading-[1.7] max-w-[560px]">Nine AI modules unified in one zero-knowledge intelligence layer — your data never leaves your device.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-14">
            {modules.map((m, i) => (
              <div key={i} className="border border-brand-border rounded-[10px] p-7 relative overflow-hidden transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)] animate-fade-in">
                <div className={`absolute top-0 left-0 right-0 h-[3px] bg-brand-${m.color === 'dark' ? 'dark' : m.color}`}></div>
                <div className={`w-11 h-11 rounded-[10px] flex items-center justify-center mb-4 text-xl ${
                  m.color === 'red' ? 'bg-[#E8302A]/10' : 
                  m.color === 'green' ? 'bg-[#27AE60]/10' : 
                  m.color === 'orange' ? 'bg-[#F5A623]/10' : 
                  'bg-[#0F1923]/10'
                }`}>
                  {m.icon}
                </div>
                <div className="font-bold text-[16px] text-brand-ink mb-1.5">{m.name}</div>
                <div className="text-[13px] text-brand-muted leading-[1.5]">{m.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="compass" className="py-[100px] bg-brand-bg">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="bg-brand-dark rounded-2xl p-10 text-center relative overflow-hidden animate-fade-in">
              <div className="absolute top-10 left-10 flex flex-col gap-2">
                <div className="h-1 rounded-[2px] bg-brand-red w-8"></div>
                <div className="h-1 rounded-[2px] bg-brand-orange w-6"></div>
                <div className="h-1 rounded-[2px] bg-brand-green w-10"></div>
              </div>
              <div className="font-serif text-[clamp(48px,8vw,80px)] leading-[1] text-white tracking-[-2px] mt-16 mb-4">COMPASS</div>
              <div className="text-[14px] font-semibold tracking-[2px] uppercase text-brand-orange mb-8">9 Modules · Private AI</div>
              <div className="w-16 h-[2px] bg-white/20 mx-auto mb-8"></div>
              <div className="text-2xl font-serif text-white mb-2">Your Data. Your Asset.</div>
              <div className="text-[13px] text-white/50">On-device SLM · Zero egress · Swiss servers · EU AI Act compliant</div>
            </div>
            
            <div className="flex flex-col gap-8 animate-fade-in">
              <div className="flex gap-5">
                <div className="w-10 h-10 rounded-lg shrink-0 flex items-center justify-center font-bold text-brand-red bg-[#E8302A]/10">1</div>
                <div>
                  <div className="font-bold text-[16px] text-brand-ink mb-1.5">Progressive AI Evolution</div>
                  <div className="text-[14px] text-brand-muted leading-[1.6]">Three-stage UBTS system: Guided → Hybrid → Autonomous. Your AI companion becomes increasingly capable over time without ever sharing raw data.</div>
                </div>
              </div>
              <div className="flex gap-5">
                <div className="w-10 h-10 rounded-lg shrink-0 flex items-center justify-center font-bold text-brand-green bg-[#27AE60]/10">2</div>
                <div>
                  <div className="font-bold text-[16px] text-brand-ink mb-1.5">On-Device SLM Inference</div>
                  <div className="text-[14px] text-brand-muted leading-[1.6]">Mistral 7B + Llama 3.1 8B run locally. QLoRA + PEFT enables efficient on-device adaptation. Zero cloud dependency.</div>
                </div>
              </div>
              <div className="flex gap-5">
                <div className="w-10 h-10 rounded-lg shrink-0 flex items-center justify-center font-bold text-brand-orange bg-[#F5A623]/10">3</div>
                <div>
                  <div className="font-bold text-[16px] text-brand-ink mb-1.5">Cultural Personalisation</div>
                  <div className="text-[14px] text-brand-muted leading-[1.6]">25+ languages with regionally adapted responses — not just translation. Domain experts for farmers, teachers, healthcare workers, and more.</div>
                </div>
              </div>
              <div className="flex gap-5">
                <div className="w-10 h-10 rounded-lg shrink-0 flex items-center justify-center font-bold text-brand-dark bg-[#0F1923]/10">4</div>
                <div>
                  <div className="font-bold text-[16px] text-brand-ink mb-1.5">Works Offline</div>
                  <div className="text-[14px] text-brand-muted leading-[1.6]">Full functionality without internet in AUTONOMOUS stage. Critical for rural areas and air-gapped enterprise environments.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
