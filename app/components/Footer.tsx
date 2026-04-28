import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-brand-border pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8 mb-16">
          <div className="md:col-span-4">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="flex flex-col gap-0.5">
                <div className="flex gap-1 mb-[1px]">
                  <span className="w-[7px] h-[7px] rounded-[1px] bg-brand-red"></span>
                  <span className="w-[7px] h-[7px] rounded-[1px] bg-brand-orange"></span>
                  <span className="w-[7px] h-[7px] rounded-[1px] bg-brand-green"></span>
                </div>
              </div>
              <span className="text-[22px] font-bold tracking-[-0.5px] text-brand-ink">icebrkr</span>
            </div>
            <div className="text-[14px] font-bold text-brand-ink mb-4">Breaking the ice. Bridging the Gap.</div>
            <div className="text-[13px] text-brand-muted leading-[1.7]">
              Created in Switzerland<br />
              Developed in Switzerland · India · Nepal<br />
              Privacy by architecture · Live July 2026<br />
              Swiss Entity · nLPD + GDPR + EU AI Act Compliant
            </div>
          </div>
          
          <div className="md:col-span-2 md:col-start-7">
            <div className="text-[11px] font-bold uppercase tracking-[1px] text-brand-muted mb-5">Product</div>
            <ul className="list-none flex flex-col gap-3">
              <li><Link href="#product" className="text-[14px] text-brand-ink hover:text-brand-orange transition-colors">COMPASS Overview</Link></li>
              <li><Link href="#product" className="text-[14px] text-brand-ink hover:text-brand-orange transition-colors">AIPA</Link></li>
              <li><Link href="#product" className="text-[14px] text-brand-ink hover:text-brand-orange transition-colors">IB-Health</Link></li>
              <li><Link href="#product" className="text-[14px] text-brand-ink hover:text-brand-orange transition-colors">Private Vault</Link></li>
              <li><Link href="#technology" className="text-[14px] text-brand-ink hover:text-brand-orange transition-colors">Architecture</Link></li>
            </ul>
          </div>
          
          <div className="md:col-span-2">
            <div className="text-[11px] font-bold uppercase tracking-[1px] text-brand-muted mb-5">Company</div>
            <ul className="list-none flex flex-col gap-3">
              <li><Link href="#team" className="text-[14px] text-brand-ink hover:text-brand-orange transition-colors">Team</Link></li>
              <li><Link href="#market" className="text-[14px] text-brand-ink hover:text-brand-orange transition-colors">Market</Link></li>
              <li><Link href="#roadmap" className="text-[14px] text-brand-ink hover:text-brand-orange transition-colors">Roadmap</Link></li>
              <li><Link href="#investors" className="text-[14px] text-brand-ink hover:text-brand-orange transition-colors">Investors</Link></li>
              <li><Link href="#contact" className="text-[14px] text-brand-ink hover:text-brand-orange transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div className="md:col-span-2">
            <div className="text-[11px] font-bold uppercase tracking-[1px] text-brand-muted mb-5">Contact</div>
            <ul className="list-none flex flex-col gap-3">
              <li><a href="mailto:invest@icebrkr.one" className="text-[14px] text-brand-ink hover:text-brand-orange transition-colors">invest@icebrkr.one</a></li>
              <li><a href="mailto:genz@icebrkr.one" className="text-[14px] text-brand-ink hover:text-brand-orange transition-colors">genz@icebrkr.one</a></li>
              <li><Link href="#investors" className="text-[14px] text-brand-ink hover:text-brand-orange transition-colors">Seed Round →</Link></li>
              <li><a href="https://app.icebrkr.one" target="_blank" rel="noopener noreferrer" className="text-[14px] text-brand-ink hover:text-brand-orange transition-colors">App (Jul 2026)</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-brand-border flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-[12px] text-brand-muted text-center md:text-left">
            © 2026 icebrkr. All rights reserved. Swiss entity incorporated. Patent-pending UBTS architecture filed Dec 2025. Confidential — for intended recipients only.
          </div>
          <div className="flex gap-4 text-[12px] text-brand-muted">
            <span>🇨🇭 Switzerland</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
