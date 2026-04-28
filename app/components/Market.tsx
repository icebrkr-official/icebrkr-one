export default function Market() {
  return (
    <section id="market" className="py-[100px] bg-white">
      <div className="max-w-7xl mx-auto px-8">
        <div className="animate-fade-in">
          <span className="inline-block text-[11px] font-bold uppercase tracking-[1.5px] text-brand-red mb-4">Market Opportunity</span>
          <h2 className="font-serif text-[clamp(32px,4vw,48px)] leading-[1.15] tracking-[-0.5px] mb-5 text-brand-ink">A $407B market forming.<br />Zero dominant privacy players.</h2>
          <p className="text-[17px] text-brand-muted leading-[1.7] max-w-[560px]">The privacy-first segment of the personal AI OS market is investable now — no compliant platform exists at scale.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-14">
          <div className="border border-brand-border rounded-[10px] p-9 text-center animate-fade-in">
            <div className="font-serif text-5xl tracking-[-2px] mb-2 text-brand-red">$407B</div>
            <div className="text-[14px] font-semibold text-brand-ink mb-2">Personal AI OS Global TAM by 2030</div>
            <div className="text-xs text-brand-muted">IMARC Group 2024</div>
          </div>
          
          <div className="border border-brand-border rounded-[10px] p-9 text-center animate-fade-in">
            <div className="font-serif text-5xl tracking-[-2px] mb-2 text-brand-orange">$84B</div>
            <div className="text-[14px] font-semibold text-brand-ink mb-2">Privacy-Tech Market by 2027 — 35% CAGR</div>
            <div className="text-xs text-brand-muted">MarketsandMarkets</div>
          </div>
          
          <div className="border border-brand-border rounded-[10px] p-9 text-center animate-fade-in">
            <div className="font-serif text-5xl tracking-[-2px] mb-2 text-brand-green">0</div>
            <div className="text-[14px] font-semibold text-brand-ink mb-2">Zero-Knowledge AI Life OS at scale globally</div>
            <div className="text-xs text-brand-muted">Competitive Gap — icebrkr is first</div>
          </div>
        </div>

        <div className="mt-16 animate-fade-in">
          <span className="inline-block text-[11px] font-bold uppercase tracking-[1.5px] text-brand-red mb-4">Revenue Model</span>
          <h2 className="font-serif text-[32px] leading-[1.15] tracking-[-0.5px] text-brand-ink">Dual-track monetisation</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          <div className="border border-brand-border rounded-[10px] p-9">
            <div className="text-[11px] font-bold uppercase tracking-[1px] text-brand-red mb-5">B2C — Freemium</div>
            <div className="font-serif text-4xl mb-1">CHF 9.90<span className="text-lg font-sans text-brand-muted">/month</span></div>
            <div className="text-[13px] text-brand-muted mb-6">Personal tier — all 9 COMPASS modules</div>
            <div className="text-[14px] text-brand-muted leading-[1.7]">
              Free: Core AIPA + Journal AI — always free<br />
              Family: Up to 5 members at CHF 19.90/month<br />
              <strong className="text-brand-ink">5% conversion · CHF 247K MRR at 500K users</strong>
            </div>
          </div>
          
          <div className="border border-brand-border rounded-[10px] p-9">
            <div className="text-[11px] font-bold uppercase tracking-[1px] text-brand-orange mb-5">B2B — Enterprise</div>
            <div className="font-serif text-4xl mb-1">CHF 500K+<span className="text-lg font-sans text-brand-muted">/year</span></div>
            <div className="text-[13px] text-brand-muted mb-6">Enterprise tier — 500+ seats + custom SLM</div>
            <div className="text-[14px] text-brand-muted leading-[1.7]">
              Pilot: CHF 24–48K/year · 1–50 seats<br />
              Growth: CHF 80–200K/year · 50–500 seats<br />
              <strong className="text-brand-ink">10 pilots = CHF 480K ARR → Seed 1 eligibility</strong>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
