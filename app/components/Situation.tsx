export default function Situation() {
  return (
    <section id="situation" className="py-16 md:py-24 bg-brand-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        {/* Main Banner Quote */}
        <div className="mb-12 md:mb-16 border-l-4 border-brand-orange pl-5 sm:pl-8 py-2">
          <p className="font-serif text-[clamp(20px,3.2vw,36px)] leading-[1.3] text-white/95 italic">
            &ldquo;AI assistants exploded. Trust didn&apos;t. Every mainstream AI monetises user data — icebrkr is built so it can&apos;t.&rdquo;
          </p>
        </div>

        {/* 3 Core Points from Image 1 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {/* 1. The Problem */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-7 sm:p-9 flex flex-col justify-between hover:bg-white/[0.07] transition-all">
            <div>
              <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center mb-6 text-brand-orange">
                <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2a10 10 0 0 0-7.38 16.75" />
                  <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                  <path d="M12 17v4" />
                  <path d="M8 21h8" />
                  <circle cx="12" cy="7" r="1.5" fill="currentColor" />
                </svg>
              </div>
              <h3 className="font-serif text-2xl font-bold text-white mb-3">The Problem</h3>
              <p className="text-[14px] text-white/70 leading-[1.7]">
                People and enterprises can&apos;t trust AI with their real lives. Incumbents (OpenAI, Google, Meta) monetise through data — privacy cannibalises their model.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-white/10 text-[12px] font-semibold text-brand-orange uppercase tracking-[1px]">
              Data Monetisation Trap
            </div>
          </div>

          {/* 2. The Solution */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-7 sm:p-9 flex flex-col justify-between hover:bg-white/[0.07] transition-all">
            <div>
              <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center mb-6 text-brand-green">
                <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              </div>
              <h3 className="font-serif text-2xl font-bold text-white mb-3">The Solution</h3>
              <p className="text-[14px] text-white/70 leading-[1.7]">
                <strong className="text-white font-semibold">icebrkr AIPA</strong> — a modular AI personal assistant with zero-knowledge architecture. Data processed on-device (SLM) or in encrypted infrastructure. User data never trains our models.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-white/10 text-[12px] font-semibold text-brand-green uppercase tracking-[1px]">
              Zero-Knowledge Architecture
            </div>
          </div>

          {/* 3. Why Now */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-7 sm:p-9 flex flex-col justify-between hover:bg-white/[0.07] transition-all">
            <div>
              <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center mb-6 text-brand-red">
                <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 3v18" />
                  <path d="M3 7h18" />
                  <path d="M6 12l-3 5h6l-3-5z" />
                  <path d="M18 12l-3 5h6l-3-5z" />
                </svg>
              </div>
              <h3 className="font-serif text-2xl font-bold text-white mb-3">Why Now</h3>
              <p className="text-[14px] text-white/70 leading-[1.7]">
                EU AI Act, GDPR, Swiss nLPD and India&apos;s DPDP Act 2023 are forcing compliance demand for privacy-preserving AI. We&apos;re built ahead of that curve.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-white/10 text-[12px] font-semibold text-brand-red uppercase tracking-[1px]">
              Global Regulatory Wave
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
