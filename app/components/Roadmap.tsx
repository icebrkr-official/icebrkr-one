export default function Roadmap() {
  return (
    <section id="roadmap" className="py-[100px] bg-brand-bg">
      <div className="max-w-7xl mx-auto px-8">
        <div className="animate-fade-in">
          <span className="inline-block text-[11px] font-bold uppercase tracking-[1.5px] text-brand-red mb-4">Execution</span>
          <h2 className="font-serif text-[clamp(32px,4vw,48px)] leading-[1.15] tracking-[-0.5px] mb-5 text-brand-ink">Every gate is contractually locked</h2>
          <p className="text-[17px] text-brand-muted leading-[1.7] max-w-[560px]">19 engineers. 18 languages. Six compliance jurisdictions. One fixed deadline. July 2026 is contractually committed with Technomark.</p>
        </div>
        
        <div className="mt-14 grid grid-cols-2 md:grid-cols-6 gap-y-12 md:gap-y-0 relative md:before:content-[''] md:before:absolute md:before:top-5 md:before:left-[8%] md:before:right-[8%] md:before:h-[2px] md:before:bg-brand-border animate-fade-in">
          
          <div className="text-center relative md:pt-12">
            <div className="hidden md:block absolute top-3 left-1/2 -translate-x-1/2 w-[18px] h-[18px] rounded-full border-2 border-brand-green bg-brand-green"></div>
            <div className="text-[11px] font-bold text-brand-muted tracking-[0.5px] mb-1.5">Jan 2026</div>
            <div className="text-[12px] font-medium text-brand-ink leading-[1.4]">Core AIPA + Private Vault</div>
            <div className="text-[11px] text-brand-muted mt-1">Feature complete ✓</div>
          </div>
          
          <div className="text-center relative md:pt-12">
            <div className="hidden md:block absolute top-3 left-1/2 -translate-x-1/2 w-[18px] h-[18px] rounded-full border-2 border-brand-green bg-brand-green"></div>
            <div className="text-[11px] font-bold text-brand-muted tracking-[0.5px] mb-1.5">Mar 2026</div>
            <div className="text-[12px] font-medium text-brand-ink leading-[1.4]">IB-Health + Journal AI</div>
            <div className="text-[11px] text-brand-muted mt-1">Feature complete ✓</div>
          </div>
          
          <div className="text-center relative md:pt-12">
            <div className="hidden md:block absolute top-3 left-1/2 -translate-x-1/2 w-[18px] h-[18px] rounded-full border-2 border-brand-orange bg-brand-orange"></div>
            <div className="text-[11px] font-bold text-brand-muted tracking-[0.5px] mb-1.5">May 2026</div>
            <div className="text-[12px] font-medium text-brand-ink leading-[1.4]">All 9 Modules</div>
            <div className="text-[11px] text-brand-muted mt-1">Feature complete</div>
          </div>
          
          <div className="text-center relative md:pt-12">
            <div className="hidden md:block absolute top-3 left-1/2 -translate-x-1/2 w-[18px] h-[18px] rounded-full border-2 border-brand-border bg-white"></div>
            <div className="text-[11px] font-bold text-brand-muted tracking-[0.5px] mb-1.5">Jun 2026</div>
            <div className="text-[12px] font-medium text-brand-ink leading-[1.4]">Enterprise API + 18-lang</div>
            <div className="text-[11px] text-brand-muted mt-1">Tuning</div>
          </div>
          
          <div className="text-center relative md:pt-12">
            <div className="hidden md:block absolute top-3 left-1/2 -translate-x-1/2 w-[18px] h-[18px] rounded-full border-2 border-brand-border bg-white"></div>
            <div className="text-[11px] font-bold text-brand-muted tracking-[0.5px] mb-1.5">Jul 2026</div>
            <div className="text-[12px] font-medium text-brand-ink leading-[1.4]">Public Go-Live</div>
            <div className="text-[11px] text-brand-muted mt-1">100K users</div>
          </div>
          
          <div className="text-center relative md:pt-12">
            <div className="hidden md:block absolute top-3 left-1/2 -translate-x-1/2 w-[18px] h-[18px] rounded-full border-2 border-brand-border bg-white"></div>
            <div className="text-[11px] font-bold text-brand-muted tracking-[0.5px] mb-1.5">Sep 2026</div>
            <div className="text-[12px] font-medium text-brand-ink leading-[1.4]">B2B Pilot Cohort</div>
            <div className="text-[11px] text-brand-muted mt-1">CHF 50K MRR</div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
