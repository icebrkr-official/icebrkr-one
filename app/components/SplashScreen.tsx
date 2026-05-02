"use client";

import { useEffect, useState } from "react";

let audioCtx: AudioContext | null = null;

const playTick = () => {
  if (typeof window === 'undefined') return;
  
  try {
    if (!audioCtx) {
      const AudioContextClass =
        window.AudioContext ||
        ("webkitAudioContext" in window
          ? (window as Window & typeof globalThis & { webkitAudioContext?: typeof AudioContext }).webkitAudioContext
          : undefined);

      if (AudioContextClass) {
        audioCtx = new AudioContextClass();
      }
    }
    
    if (!audioCtx) return;
    
    if (audioCtx.state === 'suspended') {
      audioCtx.resume().catch(() => {});
    }
    
    const o = audioCtx.createOscillator();
    const g = audioCtx.createGain();
    o.connect(g);
    g.connect(audioCtx.destination);
    o.type = 'square';
    o.frequency.setValueAtTime(880, audioCtx.currentTime);
    o.frequency.exponentialRampToValueAtTime(440, audioCtx.currentTime + 0.03);
    g.gain.setValueAtTime(0.04, audioCtx.currentTime);
    g.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.04);
    o.start();
    o.stop(audioCtx.currentTime + 0.05);
  } catch {
    // Ignore autoplay errors gracefully
  }
};

export default function SplashScreen() {
  const [loading, setLoading] = useState(true);
  const [fade, setFade] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [angle, setAngle] = useState(45);
  const [loadingText, setLoadingText] = useState("");

  const fullText = "Set your own Course with";

  useEffect(() => {
    // Initialize random angle on client mount
    setMounted(true);
    const bearings = [45, 90, 135, 180, 225, 270, 315];
    setAngle(bearings[Math.floor(Math.random() * bearings.length)] + (Math.random() - 0.5) * 20);

    // Rotate the needle shortly after mount
    const angleTimer = setTimeout(() => {
      const bearings = [45, 90, 135, 180, 225, 270, 315];
      const randomBearing = bearings[Math.floor(Math.random() * bearings.length)] + (Math.random() - 0.5) * 20;
      setAngle(randomBearing);
      playTick();
    }, 150);

    // Typing effect
    let charIndex = 0;
    const typeInterval = setInterval(() => {
      if (charIndex < fullText.length) {
        setLoadingText(fullText.substring(0, charIndex + 1));
        playTick();
        charIndex++;
      } else {
        clearInterval(typeInterval);
      }
    }, 60);

    // Start fading out after 4.5 seconds
    const fadeTimer = setTimeout(() => {
      setFade(true);
    }, 3500);

    // Remove from DOM after fade animation completes (5.2 seconds total)
    const removeTimer = setTimeout(() => {
      setLoading(false);
    }, 4200);

    return () => {
      clearTimeout(angleTimer);
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
      clearInterval(typeInterval);
    };
  }, []);

  if (!loading) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center overflow-hidden bg-brand-dark transition-all duration-700 ease-in-out ${
        fade ? "opacity-0 pointer-events-none -translate-y-full" : "opacity-100 translate-y-0"
      }`}
    >
      <div className="flex flex-col items-center">
        <div 
          className={`relative mb-8 transition-all duration-700 ease-out ${mounted ? "opacity-100 scale-100" : "opacity-0 scale-90"}`}
        >
          <div
            className="absolute inset-[6%] rounded-full"
            style={{
              background: "#0F1923",
              boxShadow: "0 24px 60px rgba(0,0,0,0.28)",
              border: "1px solid rgba(255,255,255,0.06)",
            }}
          />

          <svg
            width="340"
            height="340"
            viewBox="0 0 220 220"
            xmlns="http://www.w3.org/2000/svg"
            className="relative z-10 h-[280px] w-[280px] md:h-[340px] md:w-[340px]"
          >
            <defs>
              <filter id="glow1">
                <feGaussianBlur stdDeviation="4" result="blur"/>
                <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
              </filter>
              <filter id="splashNeedleGlow">
                <feGaussianBlur stdDeviation="2" result="blur"/>
                <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
              </filter>
            </defs>

            <circle cx="110" cy="110" r="104" fill="none" stroke="rgba(255,255,255,0.16)" strokeWidth="1"/>
            <circle cx="110" cy="110" r="98" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="0.5"/>
            <circle cx="110" cy="110" r="87" fill="none" stroke="rgba(255,255,255,0.07)" strokeWidth="14" strokeDasharray="2 3"/>

            <circle cx="110" cy="10" r="12" fill="#E8302A" opacity="0.2"/>
            <circle cx="110" cy="10" r="6" fill="#E8302A" filter="url(#glow1)"/>
            <circle cx="210" cy="110" r="5" fill="#F5A623" opacity="0.9"/>
            <circle cx="210" cy="110" r="9" fill="#F5A623" opacity="0.15"/>
            <circle cx="110" cy="210" r="4.5" fill="#27AE60" opacity="0.85"/>
            <circle cx="110" cy="210" r="8" fill="#27AE60" opacity="0.12"/>
            <circle cx="10" cy="110" r="3.5" fill="rgba(255,255,255,0.35)"/>

            <path id="arcpath-splash" d="M 28 110 A 82 82 0 0 1 192 110" fill="none"/>
            <text fontFamily="DM Sans,sans-serif" fontSize="7" fontWeight="700" letterSpacing="2.2" fill="rgba(255,255,255,0.72)" textAnchor="middle">
              <textPath href="#arcpath-splash" startOffset="50%">Set your own Course with icebrkr</textPath>
            </text>

            <text x="110" y="46" textAnchor="middle" fontFamily="DM Sans,sans-serif" fontSize="10" fontWeight="700" fill="rgba(255,255,255,0.78)" letterSpacing="1">N</text>
            <text x="195" y="114" textAnchor="middle" fontFamily="DM Sans,sans-serif" fontSize="10" fontWeight="700" fill="rgba(255,255,255,0.5)" letterSpacing="1">E</text>
            <text x="110" y="196" textAnchor="middle" fontFamily="DM Sans,sans-serif" fontSize="10" fontWeight="700" fill="rgba(255,255,255,0.5)" letterSpacing="1">S</text>
            <text x="25" y="114" textAnchor="middle" fontFamily="DM Sans,sans-serif" fontSize="10" fontWeight="700" fill="rgba(255,255,255,0.35)" letterSpacing="1">W</text>

            <text x="180" y="42" textAnchor="middle" fontFamily="DM Sans,sans-serif" fontSize="7.5" fill="rgba(255,255,255,0.22)">NE</text>
            <text x="180" y="184" textAnchor="middle" fontFamily="DM Sans,sans-serif" fontSize="7.5" fill="rgba(255,255,255,0.22)">SE</text>
            <text x="40" y="184" textAnchor="middle" fontFamily="DM Sans,sans-serif" fontSize="7.5" fill="rgba(255,255,255,0.22)">SW</text>
            <text x="40" y="42" textAnchor="middle" fontFamily="DM Sans,sans-serif" fontSize="7.5" fill="rgba(255,255,255,0.22)">NW</text>

            <circle cx="110" cy="110" r="62" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="1"/>

            <g opacity="0.15">
              <polygon points="110,52 115,106 110,116 105,106" fill="white"/>
              <polygon points="168,110 114,115 104,110 114,105" fill="white"/>
              <polygon points="110,168 105,114 110,104 115,114" fill="white"/>
              <polygon points="52,110 106,105 116,110 106,115" fill="white"/>
            </g>

            <g 
              style={{ 
                transform: `rotate(${angle}deg)`, 
                transformOrigin: '110px 110px', 
                transition: 'transform 1.2s cubic-bezier(.25,.1,.08,1)' 
              }}
            >
              <polygon points="110,38 115.5,106 110,114 104.5,106" fill="#E8302A" filter="url(#splashNeedleGlow)"/>
              <polygon points="110,38 112,76 110,80 108,76" fill="rgba(255,80,60,0.5)"/>
              <polygon points="110,182 115.5,114 110,106 104.5,114" fill="rgba(255,255,255,0.35)"/>
            </g>

            <circle cx="110" cy="110" r="9" fill="#1C2B3A" stroke="rgba(255,255,255,0.25)" strokeWidth="1.5"/>
            <circle cx="110" cy="110" r="4" fill="#F5A623"/>
            <circle cx="110" cy="110" r="1.8" fill="white" opacity="0.95"/>
          </svg>
        </div>
        
        <div className="text-white text-sm font-medium tracking-[2px] uppercase flex items-center justify-center h-5 mb-4">
          {loadingText}
          {loadingText.length === fullText.length && (
            <span className="inline-block w-[2px] h-[13px] bg-brand-orange ml-[2px] animate-pulse"></span>
          )}
        </div>
        <div className="relative overflow-hidden">
          <span className="block text-[42px] font-bold tracking-[-1px] text-white animate-[slideUp_0.8s_ease-out_forwards]">
            icebrkr
          </span>
        </div>
        
        <div className="h-[2px] w-0 bg-gradient-to-r from-brand-red via-brand-orange to-brand-green mt-4 animate-[expandLine_1.5s_ease-out_forwards_0.5s]"></div>
      </div>
      
    </div>
  );
}
