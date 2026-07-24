export default function Investors() {
  return (
    <section id="investors" className="py-16 md:py-24 bg-brand-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        {/* Header */}
        <div className="animate-fade-in text-center mb-10 md:mb-16">
          <div className="inline-flex items-center gap-2 text-[11px] sm:text-[12px] font-bold tracking-[1px] uppercase text-brand-orange bg-[#F5A623]/10 px-4 py-2 rounded-[100px] border border-[#F5A623]/20 mb-6">
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><circle cx="6" cy="6" r="5" fill="#F5A623" opacity="0.3"/><circle cx="6" cy="6" r="2" fill="#F5A623"/></svg>
            Seed Round 1 Open
          </div>
          <h2 className="font-serif text-[clamp(32px,6vw,64px)] leading-[1.1] tracking-[-1px] text-white mb-6">
            ₹2.5 Cr<br />Seed Round 1 Open
          </h2>
          <p className="text-[15px] sm:text-[18px] text-white/60 leading-[1.6] max-w-[640px] mx-auto">
            The zero-knowledge AI personal assistant architecturally ready for global compliance (EU AI Act, GDPR, DPDP Act 2023). Investable now in Seed Round 1.
          </p>
        </div>



        {/* Funding Roadmap Table */}
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
              <div className="font-semibold text-white/60">Pre-Seed</div>
              <div className="text-white">₹50 Lakhs</div>
              <div className="text-white/40">—</div>
              <div className="text-white/60">2025</div>
              <div><span className="inline-block px-3 py-1 bg-white/10 text-white/60 rounded-[100px] text-[11px] font-bold tracking-[0.5px]">Closed</span></div>
            </div>
            
            <div className="grid grid-cols-5 p-5 border-b border-white/10 items-center text-[14px] bg-[#F5A623]/10 border-l-4 border-brand-orange">
              <div className="font-bold text-brand-orange">Seed Round 1 ★</div>
              <div className="font-bold text-brand-orange">₹2.5 CR</div>
              <div className="text-white">₹75 Cr</div>
              <div className="text-white">2026</div>
              <div><span className="inline-block px-3 py-1 bg-[#F5A623]/20 text-brand-orange border border-[#F5A623]/30 rounded-[100px] text-[11px] font-bold tracking-[0.5px]">OPEN NOW</span></div>
            </div>
            
            <div className="grid grid-cols-5 p-5 border-b border-white/10 items-center text-[14px]">
              <div className="font-semibold text-white/60">Seed Round 2</div>
              <div className="text-white">₹10 Cr</div>
              <div className="text-white/60">₹150 Cr</div>
              <div className="text-white/60">Q4 2026</div>
              <div><span className="inline-block px-3 py-1 border border-white/20 text-white/40 rounded-[100px] text-[11px] font-bold tracking-[0.5px]">Gated: 100K users</span></div>
            </div>
            
            <div className="grid grid-cols-5 p-5 items-center text-[14px]">
              <div className="font-semibold text-white/60">Series A</div>
              <div className="text-white">₹40 Cr</div>
              <div className="text-white/60">₹500 Cr</div>
              <div className="text-white/60">2027</div>
              <div><span className="inline-block px-3 py-1 border border-white/20 text-white/40 rounded-[100px] text-[11px] font-bold tracking-[0.5px]">Gated: 500K users</span></div>
            </div>
          </div>
        </div>

        {/* THE ASK & KEY DETAILS (Images 1 & 2) */}
        <div className="mb-16 animate-fade-in">
          <div className="text-center mb-10">
            <span className="inline-block text-[11px] font-bold uppercase tracking-[1.5px] text-brand-green mb-2">The Ask</span>
            <h2 className="font-serif text-[clamp(28px,4vw,44px)] font-bold text-white">
              Join the seed round closing August 31, 2026.
            </h2>
          </div>

          {/* 3 Main Ask Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-[#19224D] border border-blue-500/30 rounded-2xl p-7 text-center shadow-lg hover:border-blue-400/50 transition-all">
              <div className="font-serif text-3xl sm:text-4xl font-bold text-white mb-2">INR 2.5CR</div>
              <div className="text-[13px] text-blue-200/70 font-medium">round size at 75 CR pre-money</div>
            </div>

            <div className="bg-[#19224D] border border-blue-500/30 rounded-2xl p-7 text-center shadow-lg hover:border-blue-400/50 transition-all">
              <div className="font-serif text-3xl sm:text-4xl font-bold text-white mb-2">INR 25L - 50L</div>
              <div className="text-[13px] text-blue-200/70 font-medium">preferred ticket (₹25–50 lakh)</div>
            </div>

            <div className="bg-[#19224D] border border-blue-500/30 rounded-2xl p-7 text-center shadow-lg hover:border-blue-400/50 transition-all">
              <div className="font-serif text-3xl sm:text-4xl font-bold text-white mb-2">SAFE / CCD</div>
              <div className="text-[13px] text-blue-200/70 font-medium">India instrument — investor&apos;s choice</div>
            </div>
          </div>

          {/* Terms & Round Momentum */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Standard, founder-clean terms */}
            <div className="bg-white/5 border border-purple-500/40 rounded-2xl p-8 shadow-lg">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-purple-500/20 text-purple-300 flex items-center justify-center text-xl">
                  ⚖️
                </div>
                <h3 className="font-serif text-2xl font-bold text-white">Standard, founder-clean terms</h3>
              </div>

              <ul className="flex flex-col gap-3 text-[14px] text-white/80 font-medium list-disc pl-5 leading-relaxed">
                <li>1× non-participating liquidation pref.</li>
                <li>Pro-rata rights from 29.7L</li>
                <li>Observer rights at 59.4L (no board seat at seed)</li>
                <li>Broad-based WA anti-dilution · clean cap table</li>
              </ul>
            </div>

            {/* Round Momentum */}
            <div className="bg-[#161D3B] border border-brand-green/30 rounded-2xl p-8 shadow-lg flex flex-col justify-between">
              <div>
                <div className="text-[11px] font-bold uppercase tracking-[1.5px] text-brand-green mb-3">Round Momentum</div>
                <div className="font-serif text-5xl font-bold text-brand-green mb-3">INR 50L</div>
                <p className="text-[14px] text-white/70 leading-relaxed font-medium">
                  committed / in active pipeline vs target (angels, VC, family office, corporate VC)
                </p>
              </div>

              <div className="mt-8 pt-5 border-t border-white/10 text-xs font-semibold text-white/50 uppercase tracking-[1px]">
                Closing Target: August 31, 2026
              </div>
            </div>
          </div>
        </div>

        {/* CTA Contact Footer */}
        <div className="text-center py-12 px-6 bg-white/5 border border-white/10 rounded-2xl animate-fade-in max-w-[800px] mx-auto">
          <div className="font-serif text-[28px] text-white tracking-[-0.5px] mb-2">Seed Round Closing August 31, 2026</div>
          <div className="text-[15px] text-white/60 mb-8">Preferred ticket ₹25L–50L · SAFE / CCD Instrument.</div>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="mailto:invest@icebrkr.one" className="bg-brand-red text-white px-8 py-3.5 rounded-md font-semibold text-[15px] transition-all duration-150 hover:bg-[#c92a24] hover:-translate-y-[1px] inline-block no-underline">Contact Investor Relations →</a>
            <a href="mailto:invest@icebrkr.one" className="bg-transparent text-white px-8 py-3.5 rounded-md font-semibold text-[15px] border-[1.5px] border-white/20 transition-all duration-150 hover:border-white hover:-translate-y-[1px] inline-block no-underline">invest@icebrkr.one</a>
          </div>
        </div>
      </div>
    </section>
  );
}
