import Link from 'next/link';

export default function Hero() {
  return (
    <section id="home" className="pt-40 pb-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-full md:w-[480px] h-full bg-brand-dark opacity-95" style={{ clipPath: 'polygon(15% 0%, 100% 0%, 100% 100%, 0% 100%)' }}>
        <div className="absolute top-10 right-10 flex flex-col gap-2">
          <div className="h-1 rounded-[2px] bg-brand-red w-[120px]"></div>
          <div className="h-1 rounded-[2px] bg-brand-orange w-[90px]"></div>
          <div className="h-1 rounded-[2px] bg-brand-green w-[150px]"></div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-8 relative z-10">
        <div className="max-w-[640px] animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-brand-accent-light border border-brand-border px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide text-brand-muted uppercase mb-7">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-green animate-pulse"></span>
            Live July 2026 · Created in Switzerland
          </div>
          
          <h1 className="font-serif text-[clamp(42px,5vw,64px)] leading-[1.1] text-brand-ink mb-6 tracking-[-1px]">
            The only <em className="italic text-brand-red not-italic font-serif">AI Life OS</em><br />
            your data never leaves.
          </h1>
          
          <p className="text-lg text-brand-muted leading-[1.7] mb-10 max-w-[520px]">
            icebrkr COMPASS delivers nine AI modules unified in one zero-knowledge intelligence layer — architecturally compliant with the EU AI Act before enforcement begins.
          </p>
          
          <div className="flex gap-4 flex-wrap mb-16">
            <Link href="#product" className="bg-brand-dark text-white px-8 py-3.5 rounded-md font-semibold text-[15px] transition-all duration-150 hover:bg-brand-dark2 hover:-translate-y-[1px] inline-block">
              Explore COMPASS
            </Link>
            <Link href="#investors" className="bg-transparent text-brand-ink px-8 py-3.5 rounded-md font-semibold text-[15px] border-[1.5px] border-brand-border transition-all duration-150 hover:border-brand-ink hover:-translate-y-[1px] inline-block">
              Investor Relations →
            </Link>
          </div>
          
          <div className="flex gap-12 flex-wrap">
            <div className="hero-stat">
              <div className="font-serif text-[32px] text-brand-ink tracking-[-0.5px]">9</div>
              <div className="text-xs text-brand-muted uppercase tracking-[0.5px] font-medium mt-[2px]">AI Modules</div>
            </div>
            <div className="hero-stat">
              <div className="font-serif text-[32px] text-brand-ink tracking-[-0.5px]">0</div>
              <div className="text-xs text-brand-muted uppercase tracking-[0.5px] font-medium mt-[2px]">Data Egress</div>
            </div>
            <div className="hero-stat">
              <div className="font-serif text-[32px] text-brand-ink tracking-[-0.5px]">25+</div>
              <div className="text-xs text-brand-muted uppercase tracking-[0.5px] font-medium mt-[2px]">Languages</div>
            </div>
            <div className="hero-stat">
              <div className="font-serif text-[32px] text-brand-ink tracking-[-0.5px]">CHF 5M</div>
              <div className="text-xs text-brand-muted uppercase tracking-[0.5px] font-medium mt-[2px]">Seed Round</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
