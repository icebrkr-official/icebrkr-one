export default function Contact() {
  return (
    <section id="contact" className="py-16 md:py-24 bg-brand-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="animate-fade-in">
          <span className="inline-block text-[11px] font-bold uppercase tracking-[1.5px] text-brand-red mb-4">Get In Touch</span>
          <h2 className="font-serif text-[clamp(28px,4vw,48px)] leading-[1.15] tracking-[-0.5px] mb-5 text-brand-ink">Three doors. One mission.</h2>
          <p className="text-[15px] sm:text-[17px] text-brand-muted leading-[1.7] max-w-[560px]">Whether you are evaluating investment opportunities, joining our GenZ community, or have general enquiries — reach us directly.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10 md:mt-14">
          {/* 1. Investor Relations */}
          <div className="bg-white border border-brand-border rounded-2xl p-6 sm:p-8 relative overflow-hidden transition-all duration-200 hover:-translate-y-1 hover:shadow-lg animate-fade-in flex flex-col justify-between">
            <div className="absolute top-0 left-0 right-0 h-1 bg-brand-orange"></div>
            <div>
              <div className="text-[11px] font-bold tracking-[1.5px] uppercase text-brand-orange mb-3">Investor Relations</div>
              <div className="font-bold text-[18px] sm:text-[20px] text-brand-ink mb-3">Seed Round · Due Diligence · Term Sheets</div>
              <div className="text-[13px] sm:text-[14px] text-brand-muted leading-[1.6] mb-6">
                For investment enquiries, information requests, due diligence documentation, and term sheet conversations. Preferred ticket ₹25L–50L.
              </div>
            </div>
            <a href="mailto:invest@icebrkr.one" className="inline-flex items-center gap-2 font-bold text-[14px] text-brand-ink hover:text-brand-orange transition-colors">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M2 4l6 5 6-5M2 4h12v8H2V4z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round"/></svg>
              invest@icebrkr.one
            </a>
          </div>
          
          {/* 2. GenZ & Community */}
          <div className="bg-white border border-brand-border rounded-2xl p-6 sm:p-8 relative overflow-hidden transition-all duration-200 hover:-translate-y-1 hover:shadow-lg animate-fade-in flex flex-col justify-between">
            <div className="absolute top-0 left-0 right-0 h-1 bg-brand-green"></div>
            <div>
              <div className="text-[11px] font-bold tracking-[1.5px] uppercase text-brand-green mb-3">GenZ & Community</div>
              <div className="font-bold text-[18px] sm:text-[20px] text-brand-ink mb-3">Early Access · Partnerships · Campus Outreach</div>
              <div className="text-[13px] sm:text-[14px] text-brand-muted leading-[1.6] mb-6">
                For early access sign-ups, campus ambassador programmes, university partnerships, influencer collaborations, and GenZ community building. Be part of the 96-day launch.
              </div>
            </div>
            <a href="mailto:social@icebrkr.one" className="inline-flex items-center gap-2 font-bold text-[14px] text-brand-ink hover:text-brand-green transition-colors">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M2 4l6 5 6-5M2 4h12v8H2V4z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round"/></svg>
              social@icebrkr.one
            </a>
          </div>

          {/* 3. General Enquiries */}
          <div className="bg-white border border-brand-border rounded-2xl p-6 sm:p-8 relative overflow-hidden transition-all duration-200 hover:-translate-y-1 hover:shadow-lg animate-fade-in flex flex-col justify-between">
            <div className="absolute top-0 left-0 right-0 h-1 bg-brand-red"></div>
            <div>
              <div className="text-[11px] font-bold tracking-[1.5px] uppercase text-brand-red mb-3">General Enquiries</div>
              <div className="font-bold text-[18px] sm:text-[20px] text-brand-ink mb-3">General Queries · Media · Info</div>
              <div className="text-[13px] sm:text-[14px] text-brand-muted leading-[1.6] mb-6">
                For general company questions, media inquiries, press kits, technology questions, or general correspondence with our team.
              </div>
            </div>
            <a href="mailto:info@icebrkr.one" className="inline-flex items-center gap-2 font-bold text-[14px] text-brand-ink hover:text-brand-red transition-colors">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M2 4l6 5 6-5M2 4h12v8H2V4z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round"/></svg>
              info@icebrkr.one
            </a>
          </div>
        </div>
        
        <div className="mt-8 sm:mt-12 p-6 sm:p-9 bg-white border border-brand-border rounded-[10px] flex justify-between items-center flex-wrap gap-6 animate-fade-in">
          <div>
            <div className="font-bold text-[16px] sm:text-[18px] text-brand-ink mb-1">Breaking the ice. Bridging the Gap.</div>
            <div className="text-[13px] sm:text-[14px] text-brand-muted">Created in India</div>
          </div>
          <div className="flex gap-3 shrink-0 w-full sm:w-auto">
            <a href="mailto:invest@icebrkr.one" className="bg-brand-dark text-white px-6 sm:px-8 py-3.5 rounded-md font-semibold text-[14px] sm:text-[15px] transition-all duration-150 hover:bg-brand-dark2 hover:-translate-y-[1px] inline-flex items-center justify-center flex-1 sm:flex-none no-underline">Invest</a>
            <a href="mailto:social@icebrkr.one" className="bg-transparent text-brand-ink px-6 sm:px-8 py-3.5 rounded-md font-semibold text-[14px] sm:text-[15px] border-[1.5px] border-brand-border transition-all duration-150 hover:border-brand-ink hover:-translate-y-[1px] inline-flex items-center justify-center flex-1 sm:flex-none no-underline">Join Early</a>
          </div>
        </div>
      </div>
    </section>
  );
}
