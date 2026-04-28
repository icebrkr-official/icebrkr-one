export default function Investors() {
  return (
    <section id="investors" className="py-[100px] bg-brand-dark text-white">
      <div className="max-w-7xl mx-auto px-8">
        <div className="animate-fade-in text-center mb-16">
          <div className="inline-flex items-center gap-2 text-[12px] font-bold tracking-[1px] uppercase text-brand-orange bg-[#F5A623]/10 px-4 py-2 rounded-[100px] border border-[#F5A623]/20 mb-6">
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><circle cx="6" cy="6" r="5" fill="#F5A623" opacity="0.3"/><circle cx="6" cy="6" r="2" fill="#F5A623"/></svg>
            Seed Round Open — Close Before 1 July 2026
          </div>
          <h2 className="font-serif text-[clamp(40px,6vw,64px)] leading-[1.1] tracking-[-1px] text-white mb-6">CHF 5,000,000<br />Seed Round</h2>
          <p className="text-[18px] text-white/60 leading-[1.6] max-w-[640px] mx-auto">The only privacy-compliant AI Life OS architecturally ready for EU AI Act enforcement. Investable now, before the compliance window closes.</p>
        </div>

        <div className="bg-gradient-to-r from-brand-red via-brand-orange to-brand-green p-[2px] rounded-[12px] max-w-[800px] mx-auto mb-16 animate-fade-in">
          <div className="bg-brand-dark rounded-[10px] p-10 text-center">
            <div className="text-[11px] font-bold tracking-[1px] uppercase text-white/50 mb-3">Potential Return — Seed to Seed 1</div>
            <div className="font-serif text-[64px] tracking-[-2px] text-white mb-3 leading-none">40×</div>
            <div className="text-[13px] text-white/60">Seed (CHF 7.5M pre-money) → Seed 1 (CHF 50M pre-money) · 18 months · Milestone-gated</div>
          </div>
        </div>

        <div className="animate-fade-in mb-3">
          <span className="text-[11px] font-bold uppercase tracking-[1px] text-white/40">Funding Roadmap</span>
        </div>
        
        <div className="bg-white/5 border border-white/10 rounded-[10px] overflow-hidden mb-16 animate-fade-in overflow-x-auto">
          <div className="min-w-[700px]">
            <div className="grid grid-cols-5 text-[12px] font-bold uppercase tracking-[1px] text-white/40 p-5 border-b border-white/10 bg-white/5">
              <div>Round</div>
              <div>Amount</div>
              <div>Pre-Money</div>
              <div>Period</div>
              <div>Status</div>
            </div>
            
            <div className="grid grid-cols-5 p-5 border-b border-white/10 items-center text-[14px]">
              <div className="font-semibold text-white/60">Pre-Seed R1</div>
              <div className="text-white">CHF 300K</div>
              <div className="text-white/40">—</div>
              <div className="text-white/60">2025</div>
              <div><span className="inline-block px-3 py-1 bg-white/10 text-white/60 rounded-[100px] text-[11px] font-bold tracking-[0.5px]">Closed</span></div>
            </div>
            
            <div className="grid grid-cols-5 p-5 border-b border-white/10 items-center text-[14px]">
              <div className="font-semibold text-white/80">Pre-Seed R2</div>
              <div className="text-white">CHF 200K</div>
              <div className="text-white/40">—</div>
              <div className="text-white/60">2026</div>
              <div><span className="inline-block px-3 py-1 bg-[#27AE60]/20 text-brand-green border border-[#27AE60]/30 rounded-[100px] text-[11px] font-bold tracking-[0.5px]">Open Now</span></div>
            </div>
            
            <div className="grid grid-cols-5 p-5 border-b border-white/10 items-center text-[14px] bg-[#F5A623]/5">
              <div className="font-semibold text-brand-orange">Seed ★</div>
              <div className="font-bold text-brand-orange">CHF 5M</div>
              <div className="text-white">CHF 7.5M</div>
              <div className="text-white/80">Q2 2026</div>
              <div><span className="inline-block px-3 py-1 bg-[#F5A623]/20 text-brand-orange border border-[#F5A623]/30 rounded-[100px] text-[11px] font-bold tracking-[0.5px]">Open — Close Jul 2026</span></div>
            </div>
            
            <div className="grid grid-cols-5 p-5 border-b border-white/10 items-center text-[14px]">
              <div className="font-semibold text-white/60">Seed 1</div>
              <div className="text-white">CHF 20M</div>
              <div className="text-white/60">CHF 50M</div>
              <div className="text-white/60">Q4 2026</div>
              <div><span className="inline-block px-3 py-1 border border-white/20 text-white/40 rounded-[100px] text-[11px] font-bold tracking-[0.5px]">Gated: 100K users</span></div>
            </div>
            
            <div className="grid grid-cols-5 p-5 border-b border-white/10 items-center text-[14px]">
              <div className="font-semibold text-white/60">Seed 2</div>
              <div className="text-white">CHF 50M</div>
              <div className="text-white/60">CHF 150M</div>
              <div className="text-white/60">Q2 2027</div>
              <div><span className="inline-block px-3 py-1 border border-white/20 text-white/40 rounded-[100px] text-[11px] font-bold tracking-[0.5px]">Gated: 500K users</span></div>
            </div>
            
            <div className="grid grid-cols-5 p-5 items-center text-[14px]">
              <div className="font-semibold text-white/60">Seed 3</div>
              <div className="text-white">CHF 200M</div>
              <div className="text-white/60">CHF 1B</div>
              <div className="text-white/60">2028</div>
              <div><span className="inline-block px-3 py-1 border border-white/20 text-white/40 rounded-[100px] text-[11px] font-bold tracking-[0.5px]">Gated: 5M users</span></div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 animate-fade-in">
          <div className="bg-white/5 border border-white/10 rounded-[10px] p-8">
            <div className="text-[16px] font-bold text-white mb-6">Instrument & Terms</div>
            <div className="flex flex-col gap-4">
              <div className="flex justify-between border-b border-white/10 pb-4">
                <span className="text-[13px] text-white/50">Instrument</span>
                <span className="text-[13px] font-medium text-white text-right">SAFE / Convertible Note</span>
              </div>
              <div className="flex justify-between border-b border-white/10 pb-4">
                <span className="text-[13px] text-white/50">Amount</span>
                <span className="text-[13px] font-medium text-white text-right">CHF 5,000,000</span>
              </div>
              <div className="flex justify-between border-b border-white/10 pb-4">
                <span className="text-[13px] text-white/50">Valuation Cap</span>
                <span className="text-[13px] font-medium text-white text-right">CHF 7,500,000 pre-money</span>
              </div>
              <div className="flex justify-between border-b border-white/10 pb-4">
                <span className="text-[13px] text-white/50">Discount</span>
                <span className="text-[13px] font-medium text-white text-right">20% at Series A conversion</span>
              </div>
              <div className="flex justify-between border-b border-white/10 pb-4">
                <span className="text-[13px] text-white/50">Minimum Ticket</span>
                <span className="text-[13px] font-medium text-white text-right">CHF 100,000</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[13px] text-white/50">Deadline</span>
                <span className="text-[13px] font-bold text-brand-orange text-right">1 July 2026</span>
              </div>
            </div>
          </div>
          
          <div className="bg-white/5 border border-white/10 rounded-[10px] p-8">
            <div className="text-[16px] font-bold text-white mb-6">Use of Funds</div>
            <div>
              <div className="flex justify-between text-[13px] mb-1">
                <span className="text-white/60">Infrastructure</span>
                <span className="font-medium text-white">40%</span>
              </div>
              <div className="h-[3px] rounded-[2px] bg-brand-red w-[40%] mb-4"></div>
              
              <div className="flex justify-between text-[13px] mb-1">
                <span className="text-white/60">Engineering (Technomark + SRM)</span>
                <span className="font-medium text-white">30%</span>
              </div>
              <div className="h-[3px] rounded-[2px] bg-brand-orange w-[30%] mb-4"></div>
              
              <div className="flex justify-between text-[13px] mb-1">
                <span className="text-white/60">Go-to-Market (96-day campaign)</span>
                <span className="font-medium text-white">20%</span>
              </div>
              <div className="h-[3px] rounded-[2px] bg-brand-green w-[20%] mb-4"></div>
              
              <div className="flex justify-between text-[13px] mb-1">
                <span className="text-white/60">Legal & Ops (6-jurisdiction)</span>
                <span className="font-medium text-white">10%</span>
              </div>
              <div className="h-[3px] rounded-[2px] bg-white/20 w-[10%]"></div>
            </div>
          </div>
        </div>

        <div className="mb-10 animate-fade-in">
          <span className="text-[11px] font-bold uppercase tracking-[1px] text-white/40 block mb-4">Risk Assessment</span>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-white/5 border border-white/10 p-6 rounded-[8px]">
              <div className="text-[10px] font-bold uppercase tracking-[1px] text-brand-green mb-3">⚠ MITIGATED — Adoption Speed</div>
              <div className="text-[14px] font-bold text-white mb-2">50,000+ captive first users from day one</div>
              <div className="text-[13px] text-white/50 leading-[1.5]">19-engineer SRM University cohort as early adopters. 96-day social campaign live 5 Apr – 9 Jul 2026. 18-language reach from day one.</div>
            </div>
            <div className="bg-white/5 border border-white/10 p-6 rounded-[8px]">
              <div className="text-[10px] font-bold uppercase tracking-[1px] text-brand-green mb-3">⚠ MITIGATED — Regulatory Shift</div>
              <div className="text-[14px] font-bold text-white mb-2">Architecture exceeds current regulation</div>
              <div className="text-[13px] text-white/50 leading-[1.5]">On-device zero-knowledge architecture is regulation-agnostic by design. If GDPR tightens, we already exceed it. nLPD built in.</div>
            </div>
            <div className="bg-white/5 border border-white/10 p-6 rounded-[8px]">
              <div className="text-[10px] font-bold uppercase tracking-[1px] text-brand-orange mb-3">⚠ PRICED IN — Enterprise Sales Cycle</div>
              <div className="text-[14px] font-bold text-white mb-2">3-month MOU bypasses procurement</div>
              <div className="text-[13px] text-white/50 leading-[1.5]">CHF 24K pilot structure bypasses standard procurement. 18-month runway from CHF 5M Seed covers full enterprise cycle.</div>
            </div>
            <div className="bg-white/5 border border-brand-red/30 p-6 rounded-[8px] relative overflow-hidden">
              <div className="absolute top-0 right-0 w-12 h-12 bg-brand-red/10 rounded-bl-full"></div>
              <div className="text-[10px] font-bold uppercase tracking-[1px] text-brand-red mb-3">⚠ MOAT — Big-Tech Counter-Move</div>
              <div className="text-[14px] font-bold text-white mb-2">Apple/Google still require cloud synthesis</div>
              <div className="text-[13px] text-white/50 leading-[1.5]">Our fully server-independent model is architecturally differentiated. Not a feature — a structural moat they cannot acquire by policy alone.</div>
            </div>
          </div>
        </div>

        <div className="text-center py-12 px-6 bg-white/5 border border-white/10 rounded-2xl animate-fade-in max-w-[800px] mx-auto">
          <div className="font-serif text-[28px] text-white tracking-[-0.5px] mb-2">Signed before 1 July 2026 = first-mover terms</div>
          <div className="text-[15px] text-white/60 mb-8">After go-live, terms move to market rate. The window is open now.</div>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="mailto:invest@icebrkr.one" className="bg-brand-red text-white px-8 py-3.5 rounded-md font-semibold text-[15px] transition-all duration-150 hover:bg-[#c92a24] hover:-translate-y-[1px] inline-block">Contact Investor Relations →</a>
            <a href="mailto:invest@icebrkr.one" className="bg-transparent text-white px-8 py-3.5 rounded-md font-semibold text-[15px] border-[1.5px] border-white/20 transition-all duration-150 hover:border-white hover:-translate-y-[1px] inline-block">invest@icebrkr.one</a>
          </div>
        </div>
      </div>
    </section>
  );
}
