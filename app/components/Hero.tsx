"use client";

import Link from 'next/link';
import { useEffect, useState, useRef } from 'react';

export default function Hero() {
  const [angle, setAngle] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    const bearings = [0, 45, 90, 135, 180, 225, 270, 315];

    // Initial rotation
    const initBearing = bearings[Math.floor(Math.random() * bearings.length)] + (Math.random() - 0.5) * 20;
    setAngle(initBearing);

    // Rotate every 3-5s
    let current = initBearing;
    intervalRef.current = setInterval(() => {
      let next;
      do {
        next = bearings[Math.floor(Math.random() * bearings.length)] + (Math.random() - 0.5) * 20;
      } while (Math.abs(next - (current % 360)) < 30);
      // Always clockwise
      let delta = next - (current % 360);
      if (delta < 0) delta += 360;
      current = current + delta;
      setAngle(current);
    }, 3500 + Math.random() * 2000);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <section id="home" className="pt-40 pb-24 bg-white relative overflow-hidden min-h-[600px]">
      {/* Dark right panel background */}
      <div className="hidden md:block absolute top-0 right-0 w-[480px] h-full bg-brand-dark" style={{ clipPath: 'polygon(15% 0%, 100% 0%, 100% 100%, 0% 100%)' }}>
        <div className="absolute top-10 right-10 flex flex-col gap-2 z-10">
          <div className="h-1 rounded-[2px] bg-brand-red w-[120px]"></div>
          <div className="h-1 rounded-[2px] bg-brand-orange w-[90px]"></div>
          <div className="h-1 rounded-[2px] bg-brand-green w-[150px]"></div>
        </div>
      </div>

      {/* Levitating Compass — positioned OUTSIDE the clipped panel so it's always visible */}
      <div
        className="hidden md:flex absolute items-center justify-center z-20"
        style={{
          right: '80px',
          top: '50%',
          width: '360px',
          height: '360px',
          animation: 'levitate 6s ease-in-out infinite',
          transform: 'translateY(-50%)',
        }}
      >
        {/* Solid dark circular backdrop — ensures contrast on any background */}
        <div
          className="absolute rounded-full"
          style={{
            inset: '10px',
            background: 'radial-gradient(circle, #0F1923 0%, #0F1923 65%, rgba(15,25,35,0.85) 100%)',
            boxShadow: '0 25px 60px rgba(0,0,0,0.4), 0 0 80px rgba(232,48,42,0.08), 0 0 120px rgba(245,166,35,0.05)',
            border: '1px solid rgba(255,255,255,0.06)',
          }}
        />

        {/* Radial glow backdrop */}
        <div
          className="absolute inset-0 rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(232,48,42,0.15) 0%, rgba(245,166,35,0.08) 35%, transparent 65%)',
            filter: 'blur(25px)',
          }}
        />

        <svg width="300" height="300" viewBox="0 0 220 220" xmlns="http://www.w3.org/2000/svg" className="relative z-10">
          <defs>
            <filter id="northGlow">
              <feGaussianBlur stdDeviation="4" result="blur"/>
              <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
            </filter>
            <filter id="needleGlow">
              <feGaussianBlur stdDeviation="2" result="blur"/>
              <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
            </filter>
          </defs>

          {/* Outer rings — boosted */}
          <circle cx="110" cy="110" r="104" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="1"/>
          <circle cx="110" cy="110" r="98" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="0.5"/>

          {/* Degree band */}
          <circle cx="110" cy="110" r="87" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="14" strokeDasharray="2 3"/>

          {/* Cardinal dots — with glow on North */}
          <circle cx="110" cy="10" r="12" fill="#E8302A" opacity="0.2"/>
          <circle cx="110" cy="10" r="6" fill="#E8302A" filter="url(#northGlow)"/>
          <circle cx="210" cy="110" r="5" fill="#F5A623" opacity="0.9"/>
          <circle cx="210" cy="110" r="9" fill="#F5A623" opacity="0.15"/>
          <circle cx="110" cy="210" r="4.5" fill="#27AE60" opacity="0.85"/>
          <circle cx="110" cy="210" r="8" fill="#27AE60" opacity="0.12"/>
          <circle cx="10" cy="110" r="3.5" fill="rgba(255,255,255,0.35)"/>

          {/* Compass text arc label */}
          <path id="arcpath-hero" d="M 35 110 A 75 75 0 0 1 185 110" fill="none"/>
          <text fontFamily="DM Sans,sans-serif" fontSize="8.5" fontWeight="700" letterSpacing="3" fill="rgba(255,255,255,0.3)" textAnchor="middle">
            <textPath href="#arcpath-hero" startOffset="50%">COMPASS · icebrkr · ZERO KNOWLEDGE</textPath>
          </text>

          {/* Cardinal letters — brighter */}
          <text x="110" y="40" textAnchor="middle" fontFamily="DM Sans,sans-serif" fontSize="10" fontWeight="700" fill="rgba(255,255,255,0.7)" letterSpacing="1">N</text>
          <text x="195" y="114" textAnchor="middle" fontFamily="DM Sans,sans-serif" fontSize="10" fontWeight="700" fill="rgba(255,255,255,0.5)" letterSpacing="1">E</text>
          <text x="110" y="196" textAnchor="middle" fontFamily="DM Sans,sans-serif" fontSize="10" fontWeight="700" fill="rgba(255,255,255,0.5)" letterSpacing="1">S</text>
          <text x="25" y="114" textAnchor="middle" fontFamily="DM Sans,sans-serif" fontSize="10" fontWeight="700" fill="rgba(255,255,255,0.35)" letterSpacing="1">W</text>

          {/* NE/SE/SW/NW */}
          <text x="180" y="42" textAnchor="middle" fontFamily="DM Sans,sans-serif" fontSize="7.5" fill="rgba(255,255,255,0.22)">NE</text>
          <text x="180" y="184" textAnchor="middle" fontFamily="DM Sans,sans-serif" fontSize="7.5" fill="rgba(255,255,255,0.22)">SE</text>
          <text x="40" y="184" textAnchor="middle" fontFamily="DM Sans,sans-serif" fontSize="7.5" fill="rgba(255,255,255,0.22)">SW</text>
          <text x="40" y="42" textAnchor="middle" fontFamily="DM Sans,sans-serif" fontSize="7.5" fill="rgba(255,255,255,0.22)">NW</text>

          {/* Inner ring */}
          <circle cx="110" cy="110" r="62" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="1"/>

          {/* Compass rose */}
          <g opacity="0.15">
            <polygon points="110,52 115,106 110,116 105,106" fill="white"/>
            <polygon points="168,110 114,115 104,110 114,105" fill="white"/>
            <polygon points="110,168 105,114 110,104 115,114" fill="white"/>
            <polygon points="52,110 106,105 116,110 106,115" fill="white"/>
          </g>

          {/* Animated needle */}
          <g
            style={{
              transform: `rotate(${angle}deg)`,
              transformOrigin: '110px 110px',
              transition: 'transform 1.4s cubic-bezier(.25,.1,.08,1)',
            }}
          >
            <polygon points="110,38 115.5,106 110,114 104.5,106" fill="#E8302A" filter="url(#needleGlow)"/>
            <polygon points="110,38 112,76 110,80 108,76" fill="rgba(255,80,60,0.5)"/>
            <polygon points="110,182 115.5,114 110,106 104.5,114" fill="rgba(255,255,255,0.35)"/>
          </g>

          {/* Center pivot */}
          <circle cx="110" cy="110" r="9" fill="#1C2B3A" stroke="rgba(255,255,255,0.25)" strokeWidth="1.5"/>
          <circle cx="110" cy="110" r="4" fill="#F5A623"/>
          <circle cx="110" cy="110" r="1.8" fill="white" opacity="0.95"/>
        </svg>

        {/* "icebrkr · compass" label beneath */}
        <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 text-center">
          <span className="text-[9px] font-bold tracking-[3px] uppercase text-white/30">icebrkr · compass</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-8 relative z-10">
        <div className="max-w-[640px] animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-brand-accent-light border border-brand-border px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide text-brand-muted uppercase mb-7">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-green animate-pulse"></span>
            Live July 2026 · Created in Switzerland
          </div>
          
          <h1 className="font-serif text-[clamp(42px,5vw,64px)] leading-[1.1] text-brand-ink mb-6 tracking-[-1px]">
            The only <em className="italic text-brand-red not-italic font-serif">AI Life OS</em><br />
            your data never leaves.
          </h1>
          
          <p className="text-lg text-brand-muted leading-[1.7] mb-10 max-w-[520px]">
            icebrkr COMPASS delivers nine AI modules unified in one zero-knowledge intelligence layer — architecturally compliant with the EU AI Act before enforcement begins.
          </p>
          
          <div className="flex gap-4 flex-wrap mb-16">
            <Link href="#product" className="bg-brand-dark text-white px-8 py-3.5 rounded-md font-semibold text-[15px] transition-all duration-150 hover:bg-brand-dark2 hover:-translate-y-[1px] inline-block">
              Explore COMPASS
            </Link>
            <Link href="#investors" className="bg-transparent text-brand-ink px-8 py-3.5 rounded-md font-semibold text-[15px] border-[1.5px] border-brand-border transition-all duration-150 hover:border-brand-ink hover:-translate-y-[1px] inline-block">
              Investor Relations →
            </Link>
          </div>
          
          <div className="flex gap-12 flex-wrap">
            <div className="hero-stat">
              <div className="font-serif text-[32px] text-brand-ink tracking-[-0.5px]">9</div>
              <div className="text-xs text-brand-muted uppercase tracking-[0.5px] font-medium mt-[2px]">AI Modules</div>
            </div>
            <div className="hero-stat">
              <div className="font-serif text-[32px] text-brand-ink tracking-[-0.5px]">0</div>
              <div className="text-xs text-brand-muted uppercase tracking-[0.5px] font-medium mt-[2px]">Data Egress</div>
            </div>
            <div className="hero-stat">
              <div className="font-serif text-[32px] text-brand-ink tracking-[-0.5px]">25+</div>
              <div className="text-xs text-brand-muted uppercase tracking-[0.5px] font-medium mt-[2px]">Languages</div>
            </div>
            <div className="hero-stat">
              <div className="font-serif text-[32px] text-brand-ink tracking-[-0.5px]">CHF 5M</div>
              <div className="text-xs text-brand-muted uppercase tracking-[0.5px] font-medium mt-[2px]">Seed Round</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
