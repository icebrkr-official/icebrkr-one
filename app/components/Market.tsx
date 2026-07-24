export default function Market() {
  return (
    <section id="market" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        {/* MARKET OPPORTUNITY (Image 2) */}
        <div className="animate-fade-in">
          <span className="inline-block text-[11px] font-bold uppercase tracking-[1.5px] text-brand-red mb-4">Market Opportunity</span>
          <h2 className="font-serif text-[clamp(28px,4vw,48px)] leading-[1.15] tracking-[-0.5px] mb-5 text-brand-ink">
            A $407B market forming.<br className="hidden sm:inline" />Zero dominant privacy players.
          </h2>
          <p className="text-[15px] sm:text-[17px] text-brand-muted leading-[1.7] max-w-[640px]">
            The privacy-first segment of the personal AI OS market is investable now — no compliant platform exists at scale.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10 md:mt-14">
          <div className="border border-brand-border rounded-[14px] p-6 sm:p-9 text-center animate-fade-in shadow-sm hover:shadow-md transition-shadow">
            <div className="font-serif text-5xl tracking-[-2px] mb-2 text-brand-red font-bold">$407B</div>
            <div className="text-[15px] font-bold text-brand-ink mb-2">Personal AI OS Global TAM by 2030</div>
            <div className="text-xs text-brand-muted font-medium">IMARC Group 2024</div>
          </div>
          
          <div className="border border-brand-border rounded-[14px] p-6 sm:p-9 text-center animate-fade-in shadow-sm hover:shadow-md transition-shadow">
            <div className="font-serif text-5xl tracking-[-2px] mb-2 text-brand-orange font-bold">$84B</div>
            <div className="text-[15px] font-bold text-brand-ink mb-2">Privacy-Tech Market by 2027 — 35% CAGR</div>
            <div className="text-xs text-brand-muted font-medium">MarketsandMarkets</div>
          </div>
          
          <div className="border border-brand-border rounded-[14px] p-6 sm:p-9 text-center animate-fade-in shadow-sm hover:shadow-md transition-shadow">
            <div className="font-serif text-5xl tracking-[-2px] mb-2 text-brand-green font-bold">0</div>
            <div className="text-[15px] font-bold text-brand-ink mb-2">Zero-Knowledge AI Life OS at scale globally</div>
            <div className="text-xs text-brand-muted font-medium">Competitive Gap — icebrkr is first</div>
          </div>
        </div>

        {/* BUSINESS MODEL — FREEMIUM CONSUMER + ENTERPRISE B2B (Image 4) */}
        <div className="mt-20 animate-fade-in">
          <span className="inline-block text-[11px] font-bold uppercase tracking-[1.5px] text-brand-red mb-3">Revenue Model</span>
          <h2 className="font-serif text-[clamp(28px,3.8vw,44px)] leading-[1.15] tracking-[-0.5px] text-brand-ink mb-3">
            Business Model — Freemium Consumer + Enterprise B2B
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          {/* Consumer — Freemium SaaS */}
          <div className="bg-[#FAF9F5] border border-brand-border/80 rounded-2xl p-8 sm:p-10 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-brand-dark text-white flex items-center justify-center text-lg">
                  👥
                </div>
                <h3 className="font-serif text-2xl font-bold text-brand-ink">Consumer — Freemium SaaS</h3>
              </div>

              <ul className="flex flex-col gap-3 text.brand-ink text-[14px] font-medium leading-relaxed list-disc pl-5">
                <li><strong className="text-brand-ink">Free tier:</strong> basic modules</li>
                <li><strong className="text-brand-ink">Premium:</strong> USD 1–5/mo (India: ₹99–499/mo)</li>
                <li>GenZ campus-viral acquisition, referral-driven</li>
              </ul>
            </div>

            <div className="mt-8 pt-5 border-t border-brand-border/60 text-xs font-semibold text-brand-red uppercase tracking-[1px]">
              Viral B2C Scale
            </div>
          </div>
          
          {/* Enterprise — B2B Licensing */}
          <div className="bg-[#FAF9F5] border border-brand-border/80 rounded-2xl p-8 sm:p-10 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-brand-dark text-white flex items-center justify-center text-lg">
                  🏢
                </div>
                <h3 className="font-serif text-2xl font-bold text-brand-ink">Enterprise — B2B Licensing</h3>
              </div>

              <ul className="flex flex-col gap-3 text-brand-ink text-[14px] font-medium leading-relaxed list-disc pl-5">
                <li>Compliant AI assistant for employees</li>
                <li><strong className="text-brand-ink">Preliminary ACV:</strong> USD 5–20K per org (India: 5L–20L)</li>
                <li>Campus/institutional plans (SRM model)</li>
              </ul>
            </div>

            <div className="mt-8 pt-5 border-t border-brand-border/60 text-xs font-semibold text-brand-orange uppercase tracking-[1px]">
              Enterprise B2B Recurring ACV
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
