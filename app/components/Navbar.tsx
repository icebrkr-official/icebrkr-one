"use client";
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { supabase } from '../../lib/supabaseClient';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleEarlyAccessSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');
    setSubmitStatus('idle');

    try {
      const { error } = await supabase
        .from('early_access')
        .insert([{ name, email }]);

      if (error) {
        if (error.code === '23505') { // Unique constraint violation (Postgres)
          setSubmitMessage('This email is already registered for early access.');
        } else {
          setSubmitMessage(error.message || 'An error occurred. Please try again.');
        }
        setSubmitStatus('error');
      } else {
        // Send welcome email (fire-and-forget)
        fetch('/api/send-early-access-email', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ name, email }),
        }).catch(() => {}); // silently ignore email errors

        setSubmitMessage('Success! You have been added to the early access list.');
        setSubmitStatus('success');
        setName('');
        setEmail('');
        setTimeout(() => setIsModalOpen(false), 3000);
      }
    } catch (err) {
      setSubmitMessage('An unexpected error occurred.');
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 border-b border-brand-border backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 md:px-8 h-[80px] flex items-center justify-between">
        <Link href="#home" className="flex items-center gap-2.5 text-brand-ink hover:text-brand-ink no-underline" onClick={closeMobileMenu}>
          <Image src="/navlogo.png" alt="icebrkr logo" width={240} height={200} className="w-auto h-12 md:h-[72px] object-contain" />
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
          <li><button onClick={() => setIsModalOpen(true)} className="bg-brand-dark text-white px-[20px] py-2 rounded-md font-semibold text-[13px] transition-colors duration-200 hover:bg-brand-dark2 ml-2 cursor-pointer border-none">Sign Up for Early Access</button></li>
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
        className={`lg:hidden fixed top-[80px] left-0 right-0 bg-white/95 backdrop-blur-md transition-all duration-300 flex flex-col overflow-y-auto shadow-xl ${
          isMobileMenuOpen ? 'max-h-[calc(100vh-80px)] opacity-100 border-b border-brand-border py-8 px-6' : 'max-h-0 opacity-0 pointer-events-none py-0 px-6'
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
          <li className="mt-2"><button onClick={() => { setIsModalOpen(true); closeMobileMenu(); }} className="bg-brand-dark text-white px-6 py-3 rounded-md font-semibold text-[16px] block text-center w-full cursor-pointer border-none">Sign Up for Early Access</button></li>
          <li className="mt-2"><Link href="#investors" className="bg-brand-dark text-white px-6 py-3 rounded-md font-semibold text-[16px] block text-center w-full" onClick={closeMobileMenu}>Invest Now</Link></li>
        </ul>
      </div>
    </nav>

      {/* Early Access Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <div className="bg-white rounded-xl p-8 max-w-md w-full mx-4 shadow-2xl relative">
            <button 
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 bg-transparent border-none cursor-pointer p-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <h2 className="text-2xl font-bold mb-2 text-brand-ink">Early Access</h2>
            <p className="text-brand-muted mb-6">Join the waitlist for exclusive early access to icebrkr.</p>
            
            <form onSubmit={handleEarlyAccessSubmit} className="flex flex-col gap-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-brand-ink mb-1">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-dark focus:border-transparent text-brand-ink"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-brand-ink mb-1">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-dark focus:border-transparent text-brand-ink"
                  placeholder="john@example.com"
                />
              </div>
              
              {submitMessage && (
                <div className={`p-3 rounded-md text-sm ${submitStatus === 'success' ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'}`}>
                  {submitMessage}
                </div>
              )}
              
              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full bg-brand-dark text-white py-2.5 rounded-md font-semibold transition-colors duration-200 hover:bg-brand-dark2 disabled:opacity-70 mt-2 border-none cursor-pointer flex justify-center items-center"
              >
                {isSubmitting ? 'Submitting...' : 'Sign Up Now'}
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
