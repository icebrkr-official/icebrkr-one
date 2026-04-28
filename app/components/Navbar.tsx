import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 border-b border-brand-border backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-8 h-[68px] flex items-center justify-between">
        <Link href="#home" className="flex items-center gap-2.5 text-brand-ink hover:text-brand-ink no-underline">
          <Image src="/navlogo.png" alt="icebrkr logo" width={240} height={80} className="w-auto h-12 md:h-[56px] object-contain" />
        </Link>
        
        <ul className="hidden md:flex items-center gap-9 list-none">
          <li><Link href="#product" className="text-[14px] font-medium text-brand-muted no-underline tracking-[0.2px] transition-colors duration-200 hover:text-brand-ink">Product</Link></li>
          <li><Link href="#technology" className="text-[14px] font-medium text-brand-muted no-underline tracking-[0.2px] transition-colors duration-200 hover:text-brand-ink">Technology</Link></li>
          <li><Link href="#market" className="text-[14px] font-medium text-brand-muted no-underline tracking-[0.2px] transition-colors duration-200 hover:text-brand-ink">Market</Link></li>
          <li><Link href="#team" className="text-[14px] font-medium text-brand-muted no-underline tracking-[0.2px] transition-colors duration-200 hover:text-brand-ink">Team</Link></li>
          <li><Link href="#investors" className="text-[14px] font-medium text-brand-muted no-underline tracking-[0.2px] transition-colors duration-200 hover:text-brand-ink">Investors</Link></li>
          <li><Link href="#contact" className="text-[14px] font-medium text-brand-muted no-underline tracking-[0.2px] transition-colors duration-200 hover:text-brand-ink">Contact</Link></li>
          <li><Link href="#investors" className="bg-brand-dark text-white px-[22px] py-2.5 rounded-md font-semibold text-[13px] transition-colors duration-200 hover:bg-brand-dark2">Invest Now</Link></li>
        </ul>
        
        <div className="md:hidden flex flex-col gap-1 cursor-pointer">
          <span className="block w-6 h-[2px] bg-brand-ink"></span>
          <span className="block w-6 h-[2px] bg-brand-ink"></span>
          <span className="block w-6 h-[2px] bg-brand-ink"></span>
        </div>
      </div>
    </nav>
  );
}
