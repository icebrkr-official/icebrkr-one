export default function Technology() {
  return (
    <section id="technology" className="py-[100px] bg-brand-bg">
      <div className="max-w-7xl mx-auto px-8">
        <div className="animate-fade-in">
          <span className="inline-block text-[11px] font-bold uppercase tracking-[1.5px] text-brand-red mb-4">Architecture</span>
          <h2 className="font-serif text-[clamp(32px,4vw,48px)] leading-[1.15] tracking-[-0.5px] mb-5 text-brand-ink">An architectural moat<br />US-cloud AI cannot replicate</h2>
          <p className="text-[17px] text-brand-muted leading-[1.7] max-w-[560px]">On-device SLM inference and privately-owned Swiss servers create a structural compliance advantage that competitors cannot acquire by policy alone.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mt-14 items-center">
          <div className="bg-brand-dark rounded-xl p-10 text-white relative overflow-hidden animate-fade-in">
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-brand-red via-brand-orange to-brand-green"></div>
            
            <div className="text-[11px] font-bold tracking-[1.5px] uppercase text-brand-orange mb-5">On-Device SLM Stack</div>
            
            <div className="mb-6 pb-6 border-b border-white/10">
              <div className="font-semibold text-[14px] text-white mb-1.5">Foundation Models</div>
              <div className="text-[13px] text-white/50 leading-[1.5]">Mistral 7B + Llama 3.1 8B — run entirely locally on device, no cloud synthesis required.</div>
            </div>
            
            <div className="mb-6 pb-6 border-b border-white/10">
              <div className="font-semibold text-[14px] text-white mb-1.5">UBTS Fine-Tuning</div>
              <div className="text-[13px] text-white/50 leading-[1.5]">Personalises to the user without raw data leaving the device. Patent-pending, filed December 2025.</div>
              <div className="inline-block bg-[#E8302A]/20 text-brand-red border border-[#E8302A]/30 px-3 py-1 rounded-full text-[11px] font-bold tracking-[0.5px] mt-2">Patent Pending</div>
            </div>
            
            <div className="mb-0 pb-0 border-none">
              <div className="font-semibold text-[14px] text-white mb-1.5">QLoRA + PEFT</div>
              <div className="text-[13px] text-white/50 leading-[1.5]">Efficient on-device adaptation. Zero cloud dependency. Works in fully air-gapped environments.</div>
            </div>
            
            <div className="text-[11px] font-bold tracking-[1.5px] uppercase text-brand-orange mb-5 mt-8">Private Swiss Cloud</div>
            
            <div className="mb-6 pb-6 border-b border-white/10">
              <div className="font-semibold text-[14px] text-white mb-1.5">100% icebrkr-Owned Hardware</div>
              <div className="text-[13px] text-white/50 leading-[1.5]">Self-hosted Swiss servers. K3s · Supabase · MinIO · HashiCorp Vault · Traefik.</div>
            </div>
            
            <div className="mb-0 pb-0 border-none">
              <div className="font-semibold text-[14px] text-white mb-1.5">Compliance by Design</div>
              <div className="text-[13px] text-white/50 leading-[1.5]">nLPD + GDPR compliant. Not by policy — by architecture. icebrkr has zero access to personal data.</div>
            </div>
          </div>
          
          <div className="flex flex-col gap-6 animate-fade-in">
            <div className="flex gap-5 items-start">
              <div className="w-9 h-9 rounded-lg flex items-center justify-center font-bold text-[14px] shrink-0 bg-[#E8302A]/10 text-brand-red">✕</div>
              <div>
                <div className="font-bold text-[16px] text-brand-ink mb-1.5">No Anthropic. No OpenAI. No Google.</div>
                <div className="text-[14px] text-brand-muted leading-[1.6]">Zero third-party AI dependency. No vendor lock-in. No external model calls. Your intelligence layer is entirely yours.</div>
              </div>
            </div>
            
            <div className="flex gap-5 items-start">
              <div className="w-9 h-9 rounded-lg flex items-center justify-center font-bold text-[14px] shrink-0 bg-[#27AE60]/10 text-brand-green">🛡</div>
              <div>
                <div className="font-bold text-[16px] text-brand-ink mb-1.5">Regulation-Agnostic Architecture</div>
                <div className="text-[14px] text-brand-muted leading-[1.6]">If GDPR tightens further, our architecture already exceeds it. If the EU AI Act expands scope, we are already inside the boundary.</div>
              </div>
            </div>
            
            <div className="flex gap-5 items-start">
              <div className="w-9 h-9 rounded-lg flex items-center justify-center font-bold text-[14px] shrink-0 bg-[#F5A623]/10 text-brand-orange">⚡</div>
              <div>
                <div className="font-bold text-[16px] text-brand-ink mb-1.5">Sprint Governance via VAIZ</div>
                <div className="text-[14px] text-brand-muted leading-[1.6]">19 SRM engineers on active sprints. Technology delivery partner Technomark. Milestone-locked contracts with contractual go-live July 2026.</div>
              </div>
            </div>
            
            <div className="flex gap-5 items-start">
              <div className="w-9 h-9 rounded-lg flex items-center justify-center font-bold text-[14px] shrink-0 bg-[#0F1923]/10 text-brand-dark">🔬</div>
              <div>
                <div className="font-bold text-[16px] text-brand-ink mb-1.5">Six Compliance Jurisdictions</div>
                <div className="text-[14px] text-brand-muted leading-[1.6]">Switzerland, EU, UK, India, US, Nepal. 18 languages at go-live. Legal architecture covering every active market from day one.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
