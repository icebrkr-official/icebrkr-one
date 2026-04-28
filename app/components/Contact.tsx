export default function Contact() {
  return (
    <section id="contact" className="py-[100px] bg-brand-bg">
      <div className="max-w-7xl mx-auto px-8">
        <div className="animate-fade-in">
          <span className="inline-block text-[11px] font-bold uppercase tracking-[1.5px] text-brand-red mb-4">Get In Touch</span>
          <h2 className="font-serif text-[clamp(32px,4vw,48px)] leading-[1.15] tracking-[-0.5px] mb-5 text-brand-ink">Two doors. One mission.</h2>
          <p className="text-[17px] text-brand-muted leading-[1.7] max-w-[560px]">Whether you are an investor evaluating the opportunity or a GenZ user ready to break the ice — reach us directly.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-14">
          <div className="bg-white border border-brand-border rounded-xl p-10 relative overflow-hidden transition-all duration-200 hover:-translate-y-1 hover:shadow-lg animate-fade-in">
            <div className="absolute top-0 left-0 right-0 h-1 bg-brand-orange"></div>
            <div className="text-[11px] font-bold tracking-[1.5px] uppercase text-brand-orange mb-3">Investor Relations</div>
            <div className="font-bold text-[22px] text-brand-ink mb-4">Seed Round · Due Diligence · Term Sheets</div>
            <div className="text-[15px] text-brand-muted leading-[1.6] mb-8">For investment enquiries, information requests, due diligence documentation, and term sheet conversations. Minimum ticket CHF 100,000. Close before 1 July 2026.</div>
            <a href="mailto:invest@icebrkr.one" className="inline-flex items-center gap-2 font-bold text-[15px] text-brand-ink hover:text-brand-orange transition-colors">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M2 4l6 5 6-5M2 4h12v8H2V4z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round"/></svg>
              invest@icebrkr.one
            </a>
          </div>
          
          <div className="bg-white border border-brand-border rounded-xl p-10 relative overflow-hidden transition-all duration-200 hover:-translate-y-1 hover:shadow-lg animate-fade-in">
            <div className="absolute top-0 left-0 right-0 h-1 bg-brand-green"></div>
            <div className="text-[11px] font-bold tracking-[1.5px] uppercase text-brand-green mb-3">GenZ & Community</div>
            <div className="font-bold text-[22px] text-brand-ink mb-4">Early Access · Partnerships · Campus Outreach</div>
            <div className="text-[15px] text-brand-muted leading-[1.6] mb-8">For early access sign-ups, campus ambassador programmes, university partnerships, influencer collaborations, and GenZ community building. Be part of the 96-day launch.</div>
            <a href="mailto:genz@icebrkr.one" className="inline-flex items-center gap-2 font-bold text-[15px] text-brand-ink hover:text-brand-green transition-colors">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M2 4l6 5 6-5M2 4h12v8H2V4z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round"/></svg>
              genz@icebrkr.one
            </a>
          </div>
        </div>
        
        <div className="mt-12 p-9 bg-white border border-brand-border rounded-[10px] flex justify-between items-center flex-wrap gap-6 animate-fade-in">
          <div>
            <div className="font-bold text-[18px] text-brand-ink mb-1">Breaking the ice. Bridging the Gap.</div>
            <div className="text-[14px] text-brand-muted">Created in Switzerland · Developed in Switzerland, India & Nepal · Live July 2026</div>
          </div>
          <div className="flex gap-3 shrink-0">
            <a href="mailto:invest@icebrkr.one" className="bg-brand-dark text-white px-8 py-3.5 rounded-md font-semibold text-[15px] transition-all duration-150 hover:bg-brand-dark2 hover:-translate-y-[1px] inline-block">Invest</a>
            <a href="mailto:genz@icebrkr.one" className="bg-transparent text-brand-ink px-8 py-3.5 rounded-md font-semibold text-[15px] border-[1.5px] border-brand-border transition-all duration-150 hover:border-brand-ink hover:-translate-y-[1px] inline-block">Join Early</a>
          </div>
        </div>
      </div>
    </section>
  );
}
