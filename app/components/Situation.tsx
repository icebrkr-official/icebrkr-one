export default function Situation() {
  return (
    <section id="situation" className="py-16 md:py-24 bg-brand-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-12 items-start">
          <div className="animate-fade-in">
            <span className="inline-block text-[11px] font-bold uppercase tracking-[1.5px] text-brand-orange mb-4">The Problem</span>
            <h2 className="font-serif text-[clamp(28px,4vw,48px)] leading-[1.15] tracking-[-0.5px] mb-5 text-white">Every AI platform monetises your data</h2>
            <p className="text-[15px] sm:text-[17px] text-white/60 leading-[1.7] max-w-[560px]">Personal AI adoption is accelerating globally — but every dominant platform is built on monetising user data as its core business model.</p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8 sm:mt-12">
              <div className="bg-white/5 border border-white/10 p-5 sm:p-7 rounded-[10px]">
                <div className="font-serif text-3xl sm:text-4xl text-white tracking-[-1px] mb-1.5">5B+</div>
                <div className="text-[13px] text-white/50 leading-[1.5]">People using AI-powered apps weekly in 2026</div>
              </div>
              <div className="bg-white/5 border border-white/10 p-5 sm:p-7 rounded-[10px]">
                <div className="font-serif text-3xl sm:text-4xl text-white tracking-[-1px] mb-1.5">94%</div>
                <div className="text-[13px] text-white/50 leading-[1.5]">of leading AI apps share data with third parties</div>
              </div>
              <div className="bg-white/5 border border-white/10 p-5 sm:p-7 rounded-[10px]">
                <div className="font-serif text-3xl sm:text-4xl text-white tracking-[-1px] mb-1.5">$180B</div>
                <div className="text-[13px] text-white/50 leading-[1.5]">Annual global revenue from AI-driven personal data</div>
              </div>
              <div className="bg-white/5 border border-white/10 p-5 sm:p-7 rounded-[10px]">
                <div className="font-serif text-3xl sm:text-4xl text-white tracking-[-1px] mb-1.5">Aug 2026</div>
                <div className="text-[13px] text-white/50 leading-[1.5]">EU AI Act full enforcement — €35M or 7% global revenue penalty</div>
              </div>
            </div>
          </div>
          
          <div className="animate-fade-in">
            <div className="flex flex-col gap-4 sm:gap-5 mt-4 sm:mt-6">
              <div className="p-4 sm:p-5 bg-white/5 border-l-4 border-brand-red rounded-r-lg">
                <div className="font-semibold text-[14px] text-white mb-1">OpenAI / ChatGPT</div>
                <div className="text-[13px] text-white/50 leading-[1.5]">Trains on conversations. Sells enterprise access. Data stays on US servers — non-compliant by design.</div>
              </div>
              <div className="p-4 sm:p-5 bg-white/5 border-l-4 border-brand-red rounded-r-lg">
                <div className="font-semibold text-[14px] text-white mb-1">Google Gemini</div>
                <div className="text-[13px] text-white/50 leading-[1.5]">Feeds ad targeting. Cross-referenced with search, maps, email, YouTube.</div>
              </div>
              <div className="p-4 sm:p-5 bg-white/5 border-l-4 border-brand-red rounded-r-lg">
                <div className="font-semibold text-[14px] text-white mb-1">Meta AI</div>
                <div className="text-[13px] text-white/50 leading-[1.5]">Explicit policy: user interactions inform ad models across Facebook & Instagram.</div>
              </div>
            </div>
            
            <div className="mt-8 sm:mt-12 grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-0 relative sm:before:content-[''] sm:before:absolute sm:before:top-[22px] sm:before:left-[12%] sm:before:right-[12%] sm:before:h-[2px] sm:before:bg-white/15">
              <div className="text-center relative pt-12">
                <div className="absolute top-[14px] left-1/2 -translate-x-1/2 w-[18px] h-[18px] rounded-full border-2 border-brand-green bg-brand-green"></div>
                <div className="text-[11px] font-bold text-brand-orange tracking-[0.5px] mb-1.5">Sep 2023</div>
                <div className="text-[12px] text-white/65 leading-[1.4]">Swiss nLPD Live</div>
              </div>
              <div className="text-center relative pt-12">
                <div className="absolute top-[14px] left-1/2 -translate-x-1/2 w-[18px] h-[18px] rounded-full border-2 border-brand-green bg-brand-green"></div>
                <div className="text-[11px] font-bold text-brand-orange tracking-[0.5px] mb-1.5">Feb 2025</div>
                <div className="text-[12px] text-white/65 leading-[1.4]">EU AI Act Phase 1</div>
              </div>
              <div className="text-center relative pt-12">
                <div className="absolute top-[14px] left-1/2 -translate-x-1/2 w-[18px] h-[18px] rounded-full border-2 border-white/30 bg-brand-dark"></div>
                <div className="text-[11px] font-bold text-brand-orange tracking-[0.5px] mb-1.5">Aug 2026</div>
                <div className="text-[12px] text-white/65 leading-[1.4]">Full Enforcement</div>
              </div>
              <div className="text-center relative pt-12">
                <div className="absolute top-[14px] left-1/2 -translate-x-1/2 w-[18px] h-[18px] rounded-full border-2 border-white/30 bg-brand-dark"></div>
                <div className="text-[11px] font-bold text-brand-orange tracking-[0.5px] mb-1.5">Jan 2027</div>
                <div className="text-[12px] text-white/65 leading-[1.4]">First Penalties</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
