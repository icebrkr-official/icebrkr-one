import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-brand-dark pt-14 pb-7">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr_1fr] gap-12 pb-10 border-b border-white/10 mb-7">
          <div>
            <div className="flex items-center gap-2 mb-3.5">
              <div className="flex gap-[3px]">
                <span className="w-[7px] h-[7px] rounded-[1px] bg-brand-red"></span>
                <span className="w-[7px] h-[7px] rounded-[1px] bg-brand-orange"></span>
                <span className="w-[7px] h-[7px] rounded-[1px] bg-brand-green"></span>
              </div>
              <span className="text-[19px] font-bold text-white">icebrkr</span>
            </div>
            <div className="text-[13px] text-white/30 italic mb-2.5">
              Breaking the ice. Bridging the Gap.
            </div>
            <div className="text-[11px] text-white/20 leading-[1.7]">
              Created in Switzerland<br />
              Developed in Switzerland · India · Nepal<br />
              Privacy by architecture · Live July 2026<br />
              Swiss Entity · nLPD + GDPR + EU AI Act Compliant
            </div>
          </div>
          
          <div>
            <div className="text-[10px] font-bold uppercase tracking-[1px] text-white/40 mb-3.5">Product</div>
            <ul className="list-none flex flex-col gap-2">
              <li><Link href="#product" className="text-[13px] text-white/50 hover:text-white transition-colors">COMPASS Overview</Link></li>
              <li><Link href="#slm" className="text-[13px] text-white/50 hover:text-white transition-colors">SLM Technology</Link></li>
              <li><Link href="#future" className="text-[13px] text-white/50 hover:text-white transition-colors">Future Features</Link></li>
              <li><Link href="#genz" className="text-[13px] text-white/50 hover:text-white transition-colors">GenZ Persona</Link></li>
              <li><Link href="#traveller" className="text-[13px] text-white/50 hover:text-white transition-colors">Traveller Persona</Link></li>
              <li><Link href="#ib-challenged" className="text-[13px] text-white/50 hover:text-white transition-colors">IB Challenged</Link></li>
              <li><Link href="#learn" className="text-[13px] text-white/50 hover:text-white transition-colors">Learn</Link></li>
              <li><Link href="#patents" className="text-[13px] text-white/50 hover:text-white transition-colors">Patents & IP</Link></li>
            </ul>
          </div>
          
          <div>
            <div className="text-[10px] font-bold uppercase tracking-[1px] text-white/40 mb-3.5">Company</div>
            <ul className="list-none flex flex-col gap-2">
              <li><Link href="#situation" className="text-[13px] text-white/50 hover:text-white transition-colors">The Problem</Link></li>
              <li><Link href="#market" className="text-[13px] text-white/50 hover:text-white transition-colors">Market</Link></li>
              <li><Link href="#roadmap" className="text-[13px] text-white/50 hover:text-white transition-colors">Roadmap</Link></li>
              <li><Link href="#team" className="text-[13px] text-white/50 hover:text-white transition-colors">Team</Link></li>
              <li><Link href="#investors" className="text-[13px] text-white/50 hover:text-white transition-colors">Investors</Link></li>
              <li><Link href="#contact" className="text-[13px] text-white/50 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <div className="text-[10px] font-bold uppercase tracking-[1px] text-white/40 mb-3.5">Contact</div>
            <ul className="list-none flex flex-col gap-2">
              <li><a href="mailto:invest@icebrkr.one" className="text-[13px] text-white/50 hover:text-white transition-colors">invest@icebrkr.one</a></li>
              <li><a href="mailto:genz@icebrkr.one" className="text-[13px] text-white/50 hover:text-white transition-colors">genz@icebrkr.one</a></li>
              <li><Link href="#investors" className="text-[13px] text-white/50 hover:text-white transition-colors">Seed Round →</Link></li>
              <li><a href="https://app.icebrkr.one" target="_blank" rel="noopener noreferrer" className="text-[13px] text-white/50 hover:text-white transition-colors">App (Jul 2026)</a></li>
            </ul>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-[11px] text-white/40 text-center md:text-left leading-relaxed">
            © 2026 icebrkr. All rights reserved. Swiss entity incorporated. Patent-pending UBTS filed Dec 2025. Confidential.
          </div>
          <div className="flex gap-2 text-[16px]">
            <span>🇨🇭</span>
            <span>🇮🇳</span>
            <span>🇳🇵</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
