export default function Team() {
  return (
    <section id="team" className="py-[100px] bg-white">
      <div className="max-w-7xl mx-auto px-8">
        <div className="animate-fade-in">
          <span className="inline-block text-[11px] font-bold uppercase tracking-[1.5px] text-brand-red mb-4">Leadership</span>
          <h2 className="font-serif text-[clamp(32px,4vw,48px)] leading-[1.15] tracking-[-0.5px] mb-5 text-brand-ink">25 years of enterprise AI.<br />One fixed deadline.</h2>
          <p className="text-[17px] text-brand-muted leading-[1.7] max-w-[560px]">Bennet&apos;s track record at Roche, Swiss Re, and UNHCR is the guarantee behind every milestone commitment.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 mt-14 items-start">
          <div className="border border-brand-border rounded-xl overflow-hidden animate-fade-in">
            <div className="bg-brand-dark p-10 text-center relative">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-brand-red to-brand-orange mx-auto mb-4 flex items-center justify-center font-serif text-[28px] text-white">BP</div>
              <div className="font-bold text-[20px] text-white mb-1">Bennet Prasannakumar</div>
              <div className="text-[13px] text-white/50">Founder & CTO · icebrkr · Geneva, Switzerland</div>
            </div>
            
            <div className="p-8 pb-10 bg-white">
              <div className="flex flex-wrap gap-2 mb-8">
                <span className="bg-brand-bg border border-brand-border px-3 py-1 rounded-[100px] text-[11px] font-semibold text-brand-muted uppercase tracking-[0.5px]">Roche</span>
                <span className="bg-brand-bg border border-brand-border px-3 py-1 rounded-[100px] text-[11px] font-semibold text-brand-muted uppercase tracking-[0.5px]">Swiss Re</span>
                <span className="bg-brand-bg border border-brand-border px-3 py-1 rounded-[100px] text-[11px] font-semibold text-brand-muted uppercase tracking-[0.5px]">UNHCR</span>
                <span className="bg-brand-bg border border-brand-border px-3 py-1 rounded-[100px] text-[11px] font-semibold text-brand-muted uppercase tracking-[0.5px]">Trafigura</span>
                <span className="bg-brand-bg border border-brand-border px-3 py-1 rounded-[100px] text-[11px] font-semibold text-brand-muted uppercase tracking-[0.5px]">Lonza</span>
                <span className="bg-brand-bg border border-brand-border px-3 py-1 rounded-[100px] text-[11px] font-semibold text-brand-muted uppercase tracking-[0.5px]">Koch</span>
              </div>
              
              <div className="flex flex-col gap-5">
                <div className="flex gap-4 items-start">
                  <div className="w-2 h-2 rounded-full bg-brand-red mt-[6px] shrink-0"></div>
                  <div className="text-[14px] text-brand-muted leading-[1.6]"><strong className="text-brand-ink">July 2026 go-live</strong> — Roche + Lonza delivery experience: complex multi-module launches on fixed regulatory deadlines.</div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="w-2 h-2 rounded-full bg-brand-red mt-[6px] shrink-0"></div>
                  <div className="text-[14px] text-brand-muted leading-[1.6]"><strong className="text-brand-ink">nLPD / GDPR compliance</strong> — Swiss Re + UNHCR privacy architecture across multiple jurisdictions.</div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="w-2 h-2 rounded-full bg-brand-red mt-[6px] shrink-0"></div>
                  <div className="text-[14px] text-brand-muted leading-[1.6]"><strong className="text-brand-ink">B2B enterprise sales</strong> — C-suite relationships at Trafigura + Koch in regulated, high-value environments.</div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="w-2 h-2 rounded-full bg-brand-red mt-[6px] shrink-0"></div>
                  <div className="text-[14px] text-brand-muted leading-[1.6]"><strong className="text-brand-ink">CHF 300K+ personal capital</strong> committed. Swiss entity incorporated. Skin in the game.</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col gap-6 animate-fade-in">
            <div className="font-bold text-[18px] text-brand-ink mb-2">Technology & Delivery Partners</div>
            
            <div className="flex gap-5 items-start">
              <div className="text-2xl shrink-0 mt-1">⚙️</div>
              <div>
                <div className="font-bold text-[15px] text-brand-ink mb-1.5">Technomark</div>
                <div className="text-[14px] text-brand-muted leading-[1.6]">Technology delivery partner. 19 SRM engineers on active sprints. Milestone-locked contracts. Sprint governance via VAIZ platform.</div>
              </div>
            </div>
            
            <div className="flex gap-5 items-start">
              <div className="text-2xl shrink-0 mt-1">🎓</div>
              <div>
                <div className="font-bold text-[15px] text-brand-ink mb-1.5">SRM University</div>
                <div className="text-[14px] text-brand-muted leading-[1.6]">19 engineers on active development sprints. 50,000+ captive first users from the SRM engineer cohort at go-live.</div>
              </div>
            </div>
            
            <div className="flex gap-5 items-start">
              <div className="text-2xl shrink-0 mt-1">🏛️</div>
              <div>
                <div className="font-bold text-[15px] text-brand-ink mb-1.5">Swiss Legal Architecture</div>
                <div className="text-[14px] text-brand-muted leading-[1.6]">Incorporated in Switzerland. Six-jurisdiction compliance coverage from day one. nLPD + GDPR + EU AI Act ready.</div>
              </div>
            </div>
            
            <div className="mt-8 p-6 bg-brand-bg rounded-[10px] border border-brand-border">
              <div className="text-[11px] font-bold uppercase tracking-[1px] text-brand-muted mb-3">96-Day Launch Campaign</div>
              <div className="text-[14px] text-brand-ink leading-[1.6]">Live 5 April – 9 July 2026. 18-language social reach. 50,000+ captive early adopters from SRM University cohort. GenZ-first acquisition strategy.</div>
              <div className="mt-3 text-[13px] text-brand-muted">For GenZ partnerships: <a href="mailto:genz@icebrkr.one" className="text-brand-ink font-semibold hover:underline">genz@icebrkr.one</a></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
