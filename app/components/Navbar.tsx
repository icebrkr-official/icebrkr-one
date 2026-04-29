"use client";
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 border-b border-brand-border backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 md:px-8 h-[68px] flex items-center justify-between">
        <Link href="#home" className="flex items-center gap-2.5 text-brand-ink hover:text-brand-ink no-underline" onClick={closeMobileMenu}>
          <Image src="/navlogo.png" alt="icebrkr logo" width={240} height={80} className="w-auto h-10 md:h-[56px] object-contain" />
        </Link>
        
        <ul className="hidden lg:flex items-center gap-6 list-none">
          <li><Link href="#product" className="text-[13px] font-medium text-brand-muted no-underline tracking-[0.2px] transition-colors duration-200 hover:text-brand-ink">Product</Link></li>
          <li><Link href="#slm" className="text-[13px] font-medium text-brand-muted no-underline tracking-[0.2px] transition-colors duration-200 hover:text-brand-ink">SLM</Link></li>
          <li><Link href="#future" className="text-[13px] font-medium text-brand-muted no-underline tracking-[0.2px] transition-colors duration-200 hover:text-brand-ink">Future</Link></li>
          <li><Link href="#persona" className="text-[13px] font-medium text-brand-muted no-underline tracking-[0.2px] transition-colors duration-200 hover:text-brand-ink">Personas</Link></li>
          <li><Link href="#ib-challenged" className="text-[13px] font-medium text-brand-muted no-underline tracking-[0.2px] transition-colors duration-200 hover:text-brand-ink">Accessibility</Link></li>
          <li><Link href="#learn" className="text-[13px] font-medium text-brand-muted no-underline tracking-[0.2px] transition-colors duration-200 hover:text-brand-ink">Learn</Link></li>
          <li><Link href="#patents" className="text-[13px] font-medium text-brand-muted no-underline tracking-[0.2px] transition-colors duration-200 hover:text-brand-ink">Patents</Link></li>
          <li className="w-[1px] h-3.5 bg-brand-border mx-1"></li>
          <li><Link href="#market" className="text-[13px] font-medium text-brand-muted no-underline tracking-[0.2px] transition-colors duration-200 hover:text-brand-ink">Market</Link></li>
          <li><Link href="#team" className="text-[13px] font-medium text-brand-muted no-underline tracking-[0.2px] transition-colors duration-200 hover:text-brand-ink">Team</Link></li>
          <li><Link href="#investors" className="bg-brand-dark text-white px-[20px] py-2 rounded-md font-semibold text-[13px] transition-colors duration-200 hover:bg-brand-dark2 ml-2">Invest Now</Link></li>
        </ul>
        
        <button 
          className="lg:hidden flex flex-col gap-1.5 cursor-pointer relative z-[60] p-2 bg-transparent border-none outline-none" 
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          <span className={`block w-6 h-[2px] bg-brand-ink transition-transform duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-[8px]' : ''}`}></span>
          <span className={`block w-6 h-[2px] bg-brand-ink transition-opacity duration-300 ${isMobileMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
          <span className={`block w-6 h-[2px] bg-brand-ink transition-transform duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-[8px]' : ''}`}></span>
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <div 
        className={`lg:hidden fixed top-[68px] left-0 right-0 bg-white/95 backdrop-blur-md transition-all duration-300 flex flex-col overflow-y-auto shadow-xl ${
          isMobileMenuOpen ? 'max-h-[calc(100vh-68px)] opacity-100 border-b border-brand-border py-8 px-6' : 'max-h-0 opacity-0 pointer-events-none py-0 px-6'
        }`}
      >
        <ul className="flex flex-col gap-5 list-none m-0 p-0 pb-6">
          <li><Link href="#product" className="text-[18px] font-bold text-brand-ink no-underline block" onClick={closeMobileMenu}>Product</Link></li>
          <li><Link href="#slm" className="text-[18px] font-bold text-brand-ink no-underline block" onClick={closeMobileMenu}>SLM</Link></li>
          <li><Link href="#future" className="text-[18px] font-bold text-brand-ink no-underline block" onClick={closeMobileMenu}>Future</Link></li>
          <li><Link href="#persona" className="text-[18px] font-bold text-brand-ink no-underline block" onClick={closeMobileMenu}>Personas</Link></li>
          <li><Link href="#ib-challenged" className="text-[18px] font-bold text-brand-ink no-underline block" onClick={closeMobileMenu}>Accessibility</Link></li>
          <li><Link href="#learn" className="text-[18px] font-bold text-brand-ink no-underline block" onClick={closeMobileMenu}>Learn</Link></li>
          <li><Link href="#patents" className="text-[18px] font-bold text-brand-ink no-underline block" onClick={closeMobileMenu}>Patents</Link></li>
          <li className="w-full h-[1px] bg-brand-border my-1"></li>
          <li><Link href="#market" className="text-[18px] font-bold text-brand-ink no-underline block" onClick={closeMobileMenu}>Market</Link></li>
          <li><Link href="#team" className="text-[18px] font-bold text-brand-ink no-underline block" onClick={closeMobileMenu}>Team</Link></li>
          <li className="mt-2"><Link href="#investors" className="bg-brand-dark text-white px-6 py-3 rounded-md font-semibold text-[16px] block text-center w-full" onClick={closeMobileMenu}>Invest Now</Link></li>
        </ul>
      </div>
    </nav>
  );
}
