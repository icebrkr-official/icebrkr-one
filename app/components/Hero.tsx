"use client";

import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Hero() {
  // Prototype Interactive Screen States
  const [activeScreen, setActiveScreen] = useState<0 | 1 | 2 | 3>(0);
  
  // Login Form States (Screen 0)
  const [emailText, setEmailText] = useState("");
  const [passwordText, setPasswordText] = useState("");
  const [isSigningIn, setIsSigningIn] = useState(false);
  const [showCheck, setShowCheck] = useState(false);

  // Virtual Cursor States
  const [cursorPos, setCursorPos] = useState({ x: 140, y: 320 });
  const [cursorVisible, setCursorVisible] = useState(false);
  const [cursorClicking, setCursorClicking] = useState(false);
  const [activeField, setActiveField] = useState<'none' | 'email' | 'password' | 'button' | 'cmd-btn' | 'priorities-btn' | 'back-btn'>('none');

  // Parallax Rotation State
  const [rotation, setRotation] = useState({ x: 0, y: 0 });

  useEffect(() => {
    let isMounted = true;
    
    const runAnimationLoop = async () => {
      while (isMounted) {
        // ================== SCREEN 0: LOGIN ==================
        if (!isMounted) break;
        setActiveScreen(0);
        setEmailText("");
        setPasswordText("");
        setIsSigningIn(false);
        setShowCheck(false);
        setCursorVisible(false);
        setCursorClicking(false);
        setActiveField('none');
        setCursorPos({ x: 140, y: 320 });
        await new Promise(r => setTimeout(r, 1500));
        if (!isMounted) break;

        // Move cursor to Email input
        setCursorVisible(true);
        setCursorPos({ x: 140, y: 190 });
        await new Promise(r => setTimeout(r, 1000));
        if (!isMounted) break;

        // Click email field
        setCursorClicking(true);
        setActiveField('email');
        await new Promise(r => setTimeout(r, 200));
        setCursorClicking(false);
        if (!isMounted) break;

        // Type email
        const email = "hello@icebrkr.one";
        for (let i = 1; i <= email.length; i++) {
          if (!isMounted) break;
          setEmailText(email.substring(0, i));
          await new Promise(r => setTimeout(r, 80));
        }
        await new Promise(r => setTimeout(r, 600));
        if (!isMounted) break;

        // Move cursor to Password input
        setActiveField('none');
        setCursorPos({ x: 140, y: 250 });
        await new Promise(r => setTimeout(r, 1000));
        if (!isMounted) break;

        // Click password field
        setCursorClicking(true);
        setActiveField('password');
        await new Promise(r => setTimeout(r, 200));
        setCursorClicking(false);
        if (!isMounted) break;

        // Type password (bullets)
        const pass = "••••••••";
        for (let i = 1; i <= pass.length; i++) {
          if (!isMounted) break;
          setPasswordText(pass.substring(0, i));
          await new Promise(r => setTimeout(r, 100));
        }
        await new Promise(r => setTimeout(r, 600));
        if (!isMounted) break;

        // Move cursor to Sign In button
        setActiveField('none');
        setCursorPos({ x: 140, y: 440 });
        await new Promise(r => setTimeout(r, 1000));
        if (!isMounted) break;

        // Click Sign In button
        setCursorClicking(true);
        setActiveField('button');
        await new Promise(r => setTimeout(r, 250));
        setCursorClicking(false);
        setIsSigningIn(true);
        if (!isMounted) break;

        // Simulated connection delay
        await new Promise(r => setTimeout(r, 2200));
        if (!isMounted) break;

        // Success transition
        setIsSigningIn(false);
        setShowCheck(true);
        setCursorVisible(false);
        await new Promise(r => setTimeout(r, 2000));
        if (!isMounted) break;

        // ================== SCREEN 1: HOME PRESENCE ==================
        setActiveScreen(1);
        setShowCheck(false); // reset login state
        setActiveField('none');
        setCursorPos({ x: 140, y: 320 });
        await new Promise(r => setTimeout(r, 2500));
        if (!isMounted) break;
        
        // Show cursor & move to Command Center button
        setCursorVisible(true);
        setCursorPos({ x: 140, y: 405 }); 
        await new Promise(r => setTimeout(r, 1200));
        if (!isMounted) break;
        
        // Click Command Center button
        setCursorClicking(true);
        setActiveField('cmd-btn');
        await new Promise(r => setTimeout(r, 200));
        setCursorClicking(false);
        await new Promise(r => setTimeout(r, 300));
        if (!isMounted) break;
        
        // ================== SCREEN 2: COMMAND CENTER ==================
        setActiveScreen(2);
        setCursorVisible(false);
        setActiveField('none');
        setCursorPos({ x: 140, y: 320 });
        await new Promise(r => setTimeout(r, 2500));
        if (!isMounted) break;
        
        // Show cursor & move to Priorities banner
        setCursorVisible(true);
        setCursorPos({ x: 140, y: 220 }); 
        await new Promise(r => setTimeout(r, 1200));
        if (!isMounted) break;
        
        // Click Priorities banner
        setCursorClicking(true);
        setActiveField('priorities-btn');
        await new Promise(r => setTimeout(r, 200));
        setCursorClicking(false);
        await new Promise(r => setTimeout(r, 300));
        if (!isMounted) break;
        
        // ================== SCREEN 3: PRIORITIES ==================
        setActiveScreen(3);
        setCursorVisible(false);
        setActiveField('none');
        setCursorPos({ x: 140, y: 320 });
        await new Promise(r => setTimeout(r, 2800));
        if (!isMounted) break;
        
        // Show cursor & move to Back button
        setCursorVisible(true);
        setCursorPos({ x: 26, y: 55 }); 
        await new Promise(r => setTimeout(r, 1200));
        if (!isMounted) break;
        
        // Click Back button
        setCursorClicking(true);
        setActiveField('back-btn');
        await new Promise(r => setTimeout(r, 200));
        setCursorClicking(false);
        await new Promise(r => setTimeout(r, 300));
        if (!isMounted) break;

        // ================== BACK TO SCREEN 1: HOME PRESENCE ==================
        setActiveScreen(1);
        setCursorVisible(false);
        setActiveField('none');
        await new Promise(r => setTimeout(r, 3200));
      }
    };

    runAnimationLoop();
    
    return () => {
      isMounted = false;
    };
  }, []);

  // Parallax Event Handlers
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    // Rotation range: max 10 degrees
    const rotateX = -(y / (rect.height / 2)) * 10;
    const rotateY = (x / (rect.width / 2)) * 10;
    setRotation({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setRotation({ x: 0, y: 0 });
  };

  return (
    <section id="home" className="pt-32 pb-24 md:pt-40 md:pb-32 bg-white relative overflow-hidden min-h-[600px] flex items-center">
      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Heading, Subtitle, Buttons */}
          <div className="lg:col-span-6 flex flex-col items-start text-left animate-fade-in">
            {/* Launching Soon & Ratings */}
            <div className="flex items-center gap-4 flex-wrap mb-8">
              {/* Launching Soon Pill */}
              <div className="border border-brand-ink rounded-full px-5 py-1.5 text-xs font-semibold text-brand-ink tracking-wide">
                Launching Soon
              </div>
              
              {/* Ratings */}
              <div className="flex items-center gap-1">
                {[...Array(4)].map((_, i) => (
                  <svg key={i} className="w-4.5 h-4.5 text-brand-ink fill-current" viewBox="0 0 24 24">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                ))}
                {/* 5th empty star */}
                <svg className="w-4.5 h-4.5 text-gray-300 fill-current" viewBox="0 0 24 24">
                  <path d="M22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.64-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.37L12 6.1l1.7 4.04 4.38.37-3.32 2.88 1 4.28L12 15.4z" />
                </svg>
              </div>
              
              {/* Divider and text */}
              <span className="text-gray-300 text-sm">|</span>
              <span className="text-xs font-bold text-brand-ink tracking-wide">3000+ Ratings</span>
            </div>
            
            {/* Main Headline */}
            <h1 className="text-[clamp(36px,5vw,56px)] font-bold tracking-tight leading-[1.15] text-brand-ink mb-6 font-sans">
              <span className="text-[#E8302A]">Stop</span> switching apps.<br />
              <span className="text-[#27AE60]">Start</span> living your day.
            </h1>
            
            {/* Subtitle */}
            <p className="text-base md:text-lg text-brand-muted leading-relaxed mb-8 max-w-[500px]">
              ICEBRKR organizes everything across your apps and shows you only what matters - <span className="font-semibold text-brand-ink">ranked by priority</span>
            </p>
            
            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <button 
                onClick={() => { window.dispatchEvent(new Event('openEarlyAccess')); }}
                className="bg-brand-dark hover:bg-brand-dark2 text-white px-8 py-3.5 rounded-full font-semibold text-[15px] transition-all duration-200 hover:-translate-y-[0.5px] cursor-pointer shadow-md hover:shadow-lg inline-flex items-center justify-center border-none"
              >
                Get Early Access
              </button>
              <Link 
                href="/how-it-works"
                className="bg-transparent hover:bg-gray-50 text-brand-ink px-8 py-3.5 rounded-full font-semibold text-[15px] border border-brand-ink transition-all duration-200 hover:-translate-y-[0.5px] inline-flex items-center justify-center"
              >
                See How It Works
              </Link>
            </div>
          </div>
          
          {/* Right Column: Phone Mockup & Glass Badges */}
          <div className="lg:col-span-6 relative flex justify-center items-center h-[580px] lg:h-[650px] animate-fade-in overflow-visible">
            
            {/* Glowing Gradient Multi-Ring Orbits Background */}
            <div className="absolute inset-0 -z-10 flex items-center justify-center pointer-events-none overflow-visible select-none">
              {/* Radar waves (from behind) */}
              <div className="absolute w-[260px] h-[260px] rounded-full border border-gray-100/70 animate-radar-wave" />
              <div className="absolute w-[260px] h-[260px] rounded-full border border-gray-100/70 animate-radar-wave" style={{ animationDelay: '3s' }} />

              {/* Ring 1: Inner Glowing Semi-Circle (Clockwise) */}
              <svg className="w-[300px] h-[300px] absolute opacity-30 animate-[spin_25s_linear_infinite]" viewBox="0 0 200 200" fill="none">
                <defs>
                  <linearGradient id="arc-gradient-1" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#E8302A" />
                    <stop offset="35%" stopColor="#F5A623" />
                    <stop offset="70%" stopColor="#27AE60" />
                    <stop offset="100%" stopColor="#A78BFA" />
                  </linearGradient>
                  <filter id="glow-blur-1" x="-20%" y="-20%" width="140%" height="140%">
                    <feGaussianBlur stdDeviation="6" result="blur" />
                    <feMerge>
                      <feMergeNode in="blur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>
                <path d="M 20,100 A 80,80 0 0,1 180,100" stroke="url(#arc-gradient-1)" strokeWidth="4" strokeLinecap="round" filter="url(#glow-blur-1)" />
                <circle cx="100" cy="100" r="68" stroke="url(#arc-gradient-1)" strokeWidth="1" strokeDasharray="3 6" className="opacity-30" />
              </svg>

              {/* Ring 2: Middle Glowing Semi-Circle (Counter-Clockwise) */}
              <svg className="w-[360px] h-[360px] absolute opacity-35 animate-[spin_35s_linear_infinite_reverse]" viewBox="0 0 200 200" fill="none">
                <defs>
                  <linearGradient id="arc-gradient-2" x1="100%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#F5A623" />
                    <stop offset="40%" stopColor="#27AE60" />
                    <stop offset="75%" stopColor="#A78BFA" />
                    <stop offset="100%" stopColor="#E8302A" />
                  </linearGradient>
                  <filter id="glow-blur-2" x="-20%" y="-20%" width="140%" height="140%">
                    <feGaussianBlur stdDeviation="8" result="blur" />
                    <feMerge>
                      <feMergeNode in="blur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>
                <path d="M 15,100 A 85,85 0 0,1 185,100" stroke="url(#arc-gradient-2)" strokeWidth="5" strokeLinecap="round" filter="url(#glow-blur-2)" />
                <circle cx="100" cy="100" r="76" stroke="url(#arc-gradient-2)" strokeWidth="1.2" strokeDasharray="4 8" className="opacity-40" />
              </svg>

              {/* Ring 3: Outer Glowing Semi-Circle (Clockwise, Slow) */}
              <svg className="w-[420px] h-[420px] absolute opacity-25 animate-[spin_55s_linear_infinite]" viewBox="0 0 200 200" fill="none">
                <defs>
                  <linearGradient id="arc-gradient-3" x1="0%" y1="100%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#27AE60" />
                    <stop offset="30%" stopColor="#A78BFA" />
                    <stop offset="65%" stopColor="#E8302A" />
                    <stop offset="100%" stopColor="#F5A623" />
                  </linearGradient>
                  <filter id="glow-blur-3" x="-20%" y="-20%" width="140%" height="140%">
                    <feGaussianBlur stdDeviation="10" result="blur" />
                    <feMerge>
                      <feMergeNode in="blur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>
                <path d="M 10,100 A 90,90 0 0,1 190,100" stroke="url(#arc-gradient-3)" strokeWidth="3" strokeLinecap="round" filter="url(#glow-blur-3)" />
                <circle cx="100" cy="100" r="92" stroke="#E5E7EB" strokeWidth="1" strokeDasharray="5 10" className="opacity-30" />
              </svg>
            </div>
            
            {/* iPhone Tilt/Parallax Wrapper */}
            <div 
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{
                transform: `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
                transition: 'transform 0.15s ease-out',
                transformStyle: 'preserve-3d',
              }}
              className={`w-[280px] h-[550px] border-[10px] border-brand-dark rounded-[44px] shadow-2xl relative overflow-hidden flex flex-col z-10 select-none cursor-pointer transition-colors duration-500 ${activeScreen === 0 ? 'bg-white' : 'bg-[#0C1017]'}`}
            >
              {/* Dynamic Island */}
              <div className="absolute top-3.5 left-1/2 -translate-x-1/2 w-24 h-5.5 bg-black rounded-full z-30 flex items-center justify-between px-3">
                <div className="w-1.5 h-1.5 rounded-full bg-gray-900/50 ml-auto" />
              </div>
              
              {/* iOS Status Bar */}
              <div className={`h-10 pt-3 px-5 flex justify-between items-center text-[10px] font-semibold z-20 transition-colors duration-500 ${activeScreen === 0 ? 'text-black' : 'text-white'}`}>
                <span>9:22</span>
                <div className="flex items-center gap-1.5">
                  {/* Signal Strength */}
                  <svg className={`w-3 h-3 fill-current transition-colors duration-500 ${activeScreen === 0 ? 'text-black' : 'text-white'}`} viewBox="0 0 24 24">
                    <path d="M2 22h20V2z" />
                  </svg>
                  {/* Wifi */}
                  <svg className={`w-3.5 h-3.5 fill-current transition-colors duration-500 ${activeScreen === 0 ? 'text-black' : 'text-white'}`} viewBox="0 0 24 24">
                    <path d="M12 21l-12-18c6-6 18-6 24 0z" />
                  </svg>
                  {/* Battery */}
                  <div className={`w-5 h-2.5 border rounded-sm p-0.5 flex items-center transition-colors duration-500 ${activeScreen === 0 ? 'border-black' : 'border-white'}`}>
                    <div className={`h-full w-full rounded-2xs transition-colors duration-500 ${activeScreen === 0 ? 'bg-black' : 'bg-white'}`} />
                  </div>
                </div>
              </div>
              
              {/* Screen Content Wrapper */}
              <div className={`px-4 pt-10 pb-5 flex flex-col justify-between flex-1 relative transition-colors duration-500 ${activeScreen === 0 ? 'bg-white text-[#1A1A1A]' : 'bg-[#0C1017] text-white'}`}>
                
                {/* ----------------- SCREEN 0: Login Form Mockup ----------------- */}
                {activeScreen === 0 && (
                  <div className="px-2 pt-2 flex flex-col justify-between flex-1 relative animate-fade-in text-left">
                    <div className="flex flex-col">
                      {/* Brand Logo text */}
                      <h2 className="text-3xl font-extrabold text-center tracking-tight text-brand-ink mb-12 font-sans">
                        icebrkr
                      </h2>
                      
                      {/* Form Container */}
                      <div className="flex flex-col gap-3">
                        {/* Email Input Mockup */}
                        <div className={`w-full h-11 border rounded-xl px-3.5 flex items-center gap-3 bg-gray-50/20 transition-all duration-300 ${activeField === 'email' ? 'border-brand-dark ring-1 ring-brand-dark' : 'border-gray-200'}`}>
                          <svg className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                          <span className={`text-xs font-medium transition-colors duration-300 ${emailText ? 'text-brand-ink font-semibold' : 'text-gray-400'}`}>
                            {emailText || "Email address"}
                          </span>
                        </div>
                        
                        {/* Password Input Mockup */}
                        <div className={`w-full h-11 border rounded-xl px-3.5 flex items-center justify-between bg-gray-50/20 transition-all duration-300 ${activeField === 'password' ? 'border-brand-dark ring-1 ring-brand-dark' : 'border-gray-200'}`}>
                          <div className="flex items-center gap-3">
                            <svg className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                            </svg>
                            <span className={`text-xs font-medium transition-colors duration-300 ${passwordText ? 'text-brand-ink font-semibold' : 'text-gray-400'}`}>
                              {passwordText || "Password"}
                            </span>
                          </div>
                          <svg className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                          </svg>
                        </div>
                        
                        {/* Forgot Password Link */}
                        <span className="self-end text-[10px] text-gray-400 font-medium cursor-pointer hover:underline">
                          Forgot password?
                        </span>
                      </div>
                    </div>
                    
                    {/* Sign In Button Mockup */}
                    <div className={`w-full h-11 text-white rounded-full font-semibold text-xs flex items-center justify-center gap-2 cursor-pointer mt-auto transition-all duration-300 ${isSigningIn || showCheck ? 'bg-emerald-600' : 'bg-[#1C2B3A] hover:bg-[#0F1923]'} ${activeField === 'button' && !isSigningIn && !showCheck ? 'scale-[0.97]' : ''}`}>
                      {isSigningIn ? (
                        <div className="flex items-center gap-2">
                          <svg className="animate-spin h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                          </svg>
                          <span>Connecting...</span>
                        </div>
                      ) : showCheck ? (
                        <div className="flex items-center gap-1.5">
                          <svg className="w-4 h-4 stroke-white fill-none" strokeWidth="3" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                          <span>Success!</span>
                        </div>
                      ) : (
                        <>
                          <span>Sign In</span>
                          <svg className="w-3 h-3 stroke-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                          </svg>
                        </>
                      )}
                    </div>
                  </div>
                )}

                {/* ----------------- SCREEN 1: Home Presence ----------------- */}
                {activeScreen === 1 && (
                  <div className="flex-1 flex flex-col justify-between animate-fade-in">
                    {/* Header */}
                    <div>
                      <div className="flex items-center gap-1 text-white/50 text-[8px] uppercase font-bold tracking-wider mb-2">
                        <svg className="w-3 h-3 stroke-current" fill="none" viewBox="0 0 24 24" strokeWidth="3">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                        </svg>
                        <span>AIPA · Mobile</span>
                      </div>
                      
                      <div className="text-left mt-1">
                        <h3 className="text-lg font-bold text-white tracking-tight leading-tight">
                          Good morning, <span className="text-[#A78BFA]">Ben</span>.
                        </h3>
                        <p className="text-[9px] text-white/60 mt-1 leading-normal max-w-[190px]">
                          2 things worth a glance. Everything else, I have handled.
                        </p>
                      </div>
                    </div>
                    
                    {/* Pulsing AI Orb */}
                    <div className="flex-1 flex flex-col items-center justify-center my-4">
                      <div className="w-32 h-32 rounded-full bg-gradient-to-tr from-purple-950/50 via-indigo-950/60 to-slate-900 border border-indigo-500/30 shadow-[0_0_35px_rgba(99,102,241,0.2)] flex items-center justify-center relative animate-pulse">
                        {/* Decorative inner rings */}
                        <div className="absolute inset-2.5 rounded-full border border-indigo-400/15" />
                        <div className="absolute inset-5 rounded-full border border-indigo-400/5" />
                        
                        {/* Glowing Central Priority Dots */}
                        <div className="flex gap-2 items-center justify-center z-10">
                          <span className="w-2 h-2 rounded-full bg-[#E8302A] shadow-[0_0_8px_#E8302A]" />
                          <span className="w-2 h-2 rounded-full bg-[#F5A623] shadow-[0_0_8px_#F5A623]" />
                          <span className="w-2 h-2 rounded-full bg-[#27AE60] shadow-[0_0_8px_#27AE60]" />
                        </div>
                      </div>
                      
                      <span className="text-[8px] font-black text-white/40 tracking-[2px] uppercase mt-4 block text-center">
                        TAP TO GLANCE · HOLD TO TALK
                      </span>
                    </div>
                    
                    {/* Bottom Actions */}
                    <div>
                      <div className={`w-full py-2.5 border rounded-full text-center text-[9px] font-extrabold tracking-wider text-white transition-all duration-300 ${activeField === 'cmd-btn' ? 'bg-white/15 border-white scale-[0.97]' : 'border-white/15 bg-white/5'}`}>
                        ⊞ Command Center
                      </div>
                      <span className="text-[7.5px] text-white/40 mt-1.5 block text-center">
                        Tap to see everything · hold to talk or sign
                      </span>
                      
                      <div className="bg-emerald-950/40 border border-emerald-500/20 rounded-full px-3 py-1 mt-2.5 flex items-center gap-1.5 justify-center w-fit mx-auto">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#27AE60] animate-pulse" />
                        <span className="text-[#27AE60] text-[7.5px] font-bold uppercase tracking-wider">
                          you are in command · autopilot
                        </span>
                      </div>
                    </div>
                  </div>
                )}

                {/* ----------------- SCREEN 2: Command Center ----------------- */}
                {activeScreen === 2 && (
                  <div className="flex-1 flex flex-col justify-between animate-fade-in text-left">
                    <div>
                      {/* Custom Header */}
                      <div className="flex items-center justify-between text-white border-b border-white/5 pb-2 mb-3">
                        <div className="flex items-center gap-1.5">
                          <svg className="w-3 h-3 stroke-white/40" fill="none" viewBox="0 0 24 24" strokeWidth="3">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                          </svg>
                          <div>
                            <h4 className="text-[10px] font-black tracking-wider uppercase text-white/90">AIPA · Command Center</h4>
                            <span className="text-[7px] text-white/40 block">chief of staff · omnipresent</span>
                          </div>
                        </div>
                      </div>
                      
                      {/* Module Index Card */}
                      <div className="bg-white/5 border border-white/10 rounded-xl p-2.5 flex items-center justify-between mb-3">
                        <div className="flex items-center gap-2">
                          <span className="text-base">🧠</span>
                          <div>
                            <span className="text-[9px] font-bold text-white block">AIPA brain · 13 modules</span>
                            <span className="text-[7px] text-white/50 block">tap to see the live network</span>
                          </div>
                        </div>
                        <span className="text-white/40 text-[9px]">↗</span>
                      </div>
                      
                      {/* Stats Grid */}
                      <div className="grid grid-cols-4 gap-2 mb-3 text-center">
                        <div className="bg-white/5 border border-white/10 rounded-lg py-1.5">
                          <span className="text-xs font-bold text-white block">12</span>
                          <span className="text-[6px] text-white/40 uppercase tracking-wide">modules</span>
                        </div>
                        <div className="bg-white/5 border border-white/5 rounded-lg py-1.5">
                          <span className="text-xs font-bold text-white block">44</span>
                          <span className="text-[6px] text-white/40 uppercase tracking-wide">actions</span>
                        </div>
                        <div className="bg-white/5 border border-white/5 rounded-lg py-1.5">
                          <span className="text-xs font-bold text-white block">6</span>
                          <span className="text-[6px] text-white/40 uppercase tracking-wide">threads</span>
                        </div>
                        <div className="bg-white/5 border border-white/5 rounded-lg py-1.5">
                          <span className="text-xs font-bold text-emerald-400 block">✓</span>
                          <span className="text-[6px] text-white/40 uppercase tracking-wide">local</span>
                        </div>
                      </div>
                      
                      {/* Urgency priorities banner */}
                      <div className={`border rounded-lg p-2.5 flex items-center justify-between transition-all duration-300 ${activeField === 'priorities-btn' ? 'bg-[#F5A623] text-brand-dark border-transparent scale-[0.97]' : 'bg-[#F5A623]/15 text-[#F5A623] border-[#F5A623]/25 hover:bg-[#F5A623]/20'}`}>
                        <span className="text-[8px] font-extrabold uppercase tracking-wide">
                          🟠 Open Priorities — ranked by urgency
                        </span>
                        <span className="text-[9px] font-bold">→</span>
                      </div>
                    </div>
                    
                    {/* Proactive Events List */}
                    <div className="flex-1 flex flex-col gap-2 mt-4 overflow-hidden justify-end">
                      <span className="text-[7.5px] font-black text-white/35 uppercase tracking-wider block">PROACTIVE · HAPPENING NOW</span>
                      
                      <div className="bg-white/5 border border-white/5 rounded-lg p-2">
                        <div className="flex items-start gap-2">
                          <span className="text-[9px] mt-0.5">📞</span>
                          <div>
                            <span className="text-[8.5px] text-white font-semibold block leading-tight">
                              Heard &apos;get away&apos; on call — proposed dates that fit IB Bud
                            </span>
                            <span className="text-[6px] text-white/40 block mt-0.5">Travel · just now</span>
                          </div>
                        </div>
                      </div>

                      <div className="bg-white/5 border border-white/5 rounded-lg p-2">
                        <div className="flex items-start gap-2">
                          <span className="text-[9px] mt-0.5">✈️</span>
                          <div>
                            <span className="text-[8.5px] text-white font-semibold block leading-tight">
                              Goa mentioned in 3 chats — drafted 4-night itinerary
                            </span>
                            <span className="text-[6px] text-white/40 block mt-0.5">Travel · just now</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* ----------------- SCREEN 3: Priorities ----------------- */}
                {activeScreen === 3 && (
                  <div className="flex-1 flex flex-col justify-between animate-fade-in text-left">
                    <div>
                      {/* Header with animated back button */}
                      <div className="flex items-center gap-1.5 text-white border-b border-white/5 pb-2 mb-3">
                        <svg className={`w-3.5 h-3.5 stroke-white/50 cursor-pointer transition-transform ${activeField === 'back-btn' ? 'scale-90 text-white' : ''}`} fill="none" viewBox="0 0 24 24" strokeWidth="3">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                        </svg>
                        <div>
                          <h4 className="text-[10px] font-black tracking-wider uppercase text-white/90">AIPA · Triage</h4>
                          <span className="text-[7px] text-white/40 block">Priorities</span>
                        </div>
                      </div>
                      
                      {/* Explainer */}
                      <p className="text-[8px] text-white/60 mb-2 leading-relaxed">
                        I&apos;m tracking 3 people across 4 modules. <span className="text-red-400 font-bold">Red = needs you.</span>
                      </p>
                      
                      {/* Switch layout tabs */}
                      <div className="grid grid-cols-2 gap-1 bg-white/5 p-0.5 rounded-md mb-3 text-center">
                        <span className="text-[7.5px] font-bold text-white bg-white/10 py-1 rounded-sm">By subject</span>
                        <span className="text-[7.5px] font-semibold text-white/50 py-1">By priority</span>
                      </div>
                    </div>
                    
                    {/* Triage List items */}
                    <div className="flex-1 flex flex-col gap-2 overflow-hidden justify-end">
                      {/* Red item */}
                      <div className="bg-white/5 border border-white/5 rounded-lg p-2 relative overflow-hidden flex items-start gap-2">
                        <div className="absolute top-0 left-0 bottom-0 w-[3px] bg-[#E8302A]" />
                        <span className="text-[9px] mt-0.5 ml-1">👥</span>
                        <div className="flex-1">
                          <span className="text-[8px] font-bold text-white block leading-tight">Confirm Dad&apos;s weekend swap</span>
                          <span className="text-[6.5px] text-white/40 block mt-0.5">shared calendar · reply by today</span>
                          <span className="text-[6px] text-[#A78BFA] font-bold uppercase tracking-wider block mt-1">IB Connect</span>
                        </div>
                      </div>
                      
                      {/* Orange item */}
                      <div className="bg-white/5 border border-white/5 rounded-lg p-2 relative overflow-hidden flex items-start gap-2">
                        <div className="absolute top-0 left-0 bottom-0 w-[3px] bg-[#F5A623]" />
                        <span className="text-[9px] mt-0.5 ml-1">👥</span>
                        <div className="flex-1">
                          <span className="text-[8px] font-bold text-white block leading-tight">Mon school pickup — Mum, 15:30</span>
                          <span className="text-[6.5px] text-white/40 block mt-0.5">who-picks rota · reminder set</span>
                          <span className="text-[6px] text-[#A78BFA] font-bold uppercase tracking-wider block mt-1">IB Connect</span>
                        </div>
                      </div>

                      {/* Green item */}
                      <div className="bg-white/5 border border-white/5 rounded-lg p-2 relative overflow-hidden flex items-start gap-2">
                        <div className="absolute top-0 left-0 bottom-0 w-[3px] bg-[#27AE60]" />
                        <span className="text-[9px] mt-0.5 ml-1">👥</span>
                        <div className="flex-1">
                          <span className="text-[8px] font-bold text-white block leading-tight">This weekend: with Dad</span>
                          <span className="text-[6.5px] text-white/40 block mt-0.5">settled · both calendars synced</span>
                          <span className="text-[6px] text-[#A78BFA] font-bold uppercase tracking-wider block mt-1">IB Connect</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Touch Pointer Overlay Inside Phone Mockup */}
                {cursorVisible && (
                  <div 
                    className="absolute pointer-events-none z-40 transition-all duration-700 ease-in-out flex items-center justify-center"
                    style={{
                      left: `${cursorPos.x}px`,
                      top: `${cursorPos.y}px`,
                      transform: 'translate(-50%, -50%)',
                    }}
                  >
                    {/* Ripple Click ring */}
                    <span className={`absolute rounded-full transition-all duration-300 ${cursorClicking ? 'scale-[2.5] opacity-0' : 'scale-0 opacity-100'} ${activeScreen === 0 ? 'bg-brand-dark/15 border-brand-dark/25' : 'bg-white/20 border-white/35'}`} style={{ width: '28px', height: '28px' }} />
                    
                    {/* Inner cursor dot */}
                    <div className={`w-5 h-5 rounded-full shadow-lg flex items-center justify-center transition-all duration-200 ${cursorClicking ? 'scale-90' : 'scale-100'} ${activeScreen === 0 ? 'bg-brand-dark/35 border-2 border-white' : 'bg-white/30 border-2 border-white'}`}>
                      <div className={`w-1.5 h-1.5 rounded-full ${activeScreen === 0 ? 'bg-brand-dark' : 'bg-white'}`} />
                    </div>
                  </div>
                )}
              </div>
            </div>
            
            {/* FLOATING GLASSMORPHIC BADGES */}
            
            {/* Urgent Badge (Top-Left) */}
            <div className="absolute top-[18%] left-[calc(50%-150px)] md:left-[calc(50%-220px)] z-20 animate-float-urgent bg-[#E8302A]/10 backdrop-blur-md border border-white/30 rounded-[20px] p-1.5 flex items-center justify-center shadow-[0_8px_32px_0_rgba(232,48,42,0.15)] cursor-pointer transition-all duration-300 badge-jelly">
              <div className="flex items-center gap-2 border border-white/40 bg-white/35 backdrop-blur-sm rounded-full py-1.5 px-4">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E8302A] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#E8302A]"></span>
                </span>
                <span className="text-[#E8302A] font-semibold text-sm">Urgent</span>
              </div>
            </div>
            
            {/* On Track Badge (Middle-Right) */}
            <div className="absolute top-[46%] right-[calc(50%-150px)] md:right-[calc(50%-220px)] z-20 animate-float-ontrack bg-[#27AE60]/10 backdrop-blur-md border border-white/30 rounded-[20px] p-1.5 flex items-center justify-center shadow-[0_8px_32px_0_rgba(39,174,96,0.15)] cursor-pointer transition-all duration-300 badge-jelly">
              <div className="flex items-center gap-2 border border-white/40 bg-white/35 backdrop-blur-sm rounded-full py-1.5 px-4">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#27AE60] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#27AE60]"></span>
                </span>
                <span className="text-[#27AE60] font-semibold text-sm">On Track</span>
              </div>
            </div>
            
            {/* Important Badge (Bottom-Left) */}
            <div className="absolute bottom-[20%] left-[calc(50%-150px)] md:left-[calc(50%-220px)] z-20 animate-float-important bg-[#F5A623]/10 backdrop-blur-md border border-white/30 rounded-[20px] p-1.5 flex items-center justify-center shadow-[0_8px_32px_0_rgba(245,166,35,0.15)] cursor-pointer transition-all duration-300 badge-jelly">
              <div className="flex items-center gap-2 border border-white/40 bg-white/35 backdrop-blur-sm rounded-full py-1.5 px-4">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#F5A623] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#F5A623]"></span>
                </span>
                <span className="text-[#F5A623] font-semibold text-sm">Important</span>
              </div>
            </div>
            
          </div>
          
        </div>
      </div>
    </section>
  );
}
