export default function TrustBar() {
  return (
    <div className="border-y border-brand-border py-5 bg-brand-bg">
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex items-center justify-center gap-12 flex-wrap">
          <div className="text-xs font-semibold text-brand-muted uppercase tracking-[0.8px] flex items-center gap-2">
            <svg className="w-[18px] h-[18px] flex items-center justify-center" viewBox="0 0 18 18" fill="none"><path d="M9 1L2 4v5c0 4 3 7.5 7 8.5C13 16.5 16 13 16 9V4L9 1z" fill="#27AE60" opacity="0.2" stroke="#27AE60" strokeWidth="1.5"/></svg>
            Privacy by Architecture
          </div>
          <div className="text-xs font-semibold text-brand-muted uppercase tracking-[0.8px] flex items-center gap-2">
            <svg className="w-[18px] h-[18px] flex items-center justify-center" viewBox="0 0 18 18" fill="none"><circle cx="9" cy="9" r="7" stroke="#F5A623" strokeWidth="1.5"/><path d="M6 9l2 2 4-4" stroke="#F5A623" strokeWidth="1.5" strokeLinecap="round"/></svg>
            EU AI Act Compliant
          </div>
          <div className="text-xs font-semibold text-brand-muted uppercase tracking-[0.8px] flex items-center gap-2">
            <svg className="w-[18px] h-[18px] flex items-center justify-center" viewBox="0 0 18 18" fill="none"><rect x="2" y="2" width="14" height="14" rx="3" stroke="#E8302A" strokeWidth="1.5"/><path d="M6 9h6M9 6v6" stroke="#E8302A" strokeWidth="1.5" strokeLinecap="round"/></svg>
            Swiss Incorporated
          </div>
          <div className="text-xs font-semibold text-brand-muted uppercase tracking-[0.8px] flex items-center gap-2">
            <svg className="w-[18px] h-[18px] flex items-center justify-center" viewBox="0 0 18 18" fill="none"><path d="M9 2v14M2 9h14" stroke="#1C2B3A" strokeWidth="1.5" strokeLinecap="round" opacity="0.5"/></svg>
            nLPD + GDPR Certified
          </div>
          <div className="text-xs font-semibold text-brand-muted uppercase tracking-[0.8px] flex items-center gap-2">
            <svg className="w-[18px] h-[18px] flex items-center justify-center" viewBox="0 0 18 18" fill="none"><path d="M3 9l4 4 8-8" stroke="#27AE60" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            Patent-Pending UBTS
          </div>
        </div>
      </div>
    </div>
  );
}
