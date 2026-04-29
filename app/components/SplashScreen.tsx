"use client";

import { useEffect, useState } from "react";

// Maintain a single audio context
let audioCtx: any = null;

const playTick = () => {
  if (typeof window === 'undefined') return;
  
  try {
    if (!audioCtx) {
      const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
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
  } catch (e) {
    // Ignore autoplay errors gracefully
  }
};

export default function SplashScreen() {
  const [loading, setLoading] = useState(true);
  const [fade, setFade] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [angle, setAngle] = useState(0);
  const [loadingText, setLoadingText] = useState("");

  const fullText = "Set your own Course with...";

  useEffect(() => {
    setMounted(true);
    
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
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-brand-white transition-all duration-700 ease-in-out ${
        fade ? "opacity-0 pointer-events-none -translate-y-full" : "opacity-100 translate-y-0"
      }`}
    >
      <div className="flex flex-col items-center">
        {/* Animated Compass */}
        <div 
          className={`mb-6 transition-all duration-700 ease-out ${mounted ? "opacity-100 scale-100" : "opacity-0 scale-90"}`}
        >
          <svg width="180" height="180" viewBox="0 0 220 220" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <filter id="glow1">
                <feGaussianBlur stdDeviation="3" result="blur"/>
                <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
              </filter>
            </defs>
            {/* Outer ring */}
            <circle cx="110" cy="110" r="104" fill="none" stroke="#0F1923" strokeWidth="1" opacity="0.8"/>
            <circle cx="110" cy="110" r="98" fill="none" stroke="#0F1923" strokeWidth="0.5" opacity="0.5"/>
            {/* Degree arcs */}
            <circle cx="110" cy="110" r="86" fill="none" stroke="#0F1923" strokeWidth="12" strokeDasharray="3 3" strokeDashoffset="0" opacity="0.4"/>
            {/* Cardinal direction dots */}
            <circle cx="110" cy="14" r="5" fill="#E8302A"/>
            <text x="110" y="38" textAnchor="middle" fontFamily="DM Sans,sans-serif" fontSize="9" fontWeight="700" fill="#0F1923" letterSpacing="1">N</text>
            <circle cx="206" cy="110" r="4" fill="#F5A623" opacity="0.9"/>
            <text x="192" y="114" textAnchor="middle" fontFamily="DM Sans,sans-serif" fontSize="9" fontWeight="700" fill="#0F1923" opacity="0.8" letterSpacing="1">E</text>
            <circle cx="110" cy="206" r="3.5" fill="#27AE60" opacity="0.8"/>
            <text x="110" y="192" textAnchor="middle" fontFamily="DM Sans,sans-serif" fontSize="9" fontWeight="700" fill="#0F1923" opacity="0.8" letterSpacing="1">S</text>
            <circle cx="14" cy="110" r="3" fill="#0F1923" opacity="0.6"/>
            <text x="28" y="114" textAnchor="middle" fontFamily="DM Sans,sans-serif" fontSize="9" fontWeight="700" fill="#0F1923" opacity="0.8" letterSpacing="1">W</text>
            {/* Inter-cardinal */}
            <circle cx="184" cy="36" r="2" fill="#0F1923" opacity="0.4"/>
            <circle cx="184" cy="184" r="2" fill="#0F1923" opacity="0.4"/>
            <circle cx="36" cy="184" r="2" fill="#0F1923" opacity="0.4"/>
            <circle cx="36" cy="36" r="2" fill="#0F1923" opacity="0.4"/>
            {/* Inner ring */}
            <circle cx="110" cy="110" r="64" fill="none" stroke="#0F1923" strokeWidth="1" opacity="0.4"/>
            {/* Compass rose */}
            <g opacity="0.2">
              <polygon points="110,54 116,104 110,114 104,104" fill="#0F1923"/>
              <polygon points="166,110 116,116 106,110 116,104" fill="#0F1923"/>
              <polygon points="110,166 104,116 110,106 116,116" fill="#0F1923"/>
              <polygon points="54,110 104,104 114,110 104,116" fill="#0F1923"/>
            </g>
            {/* Animated Needle */}
            <g 
              style={{ 
                transform: `rotate(${angle}deg)`, 
                transformOrigin: '110px 110px', 
                transition: 'transform 1.2s cubic-bezier(.25,.1,.08,1)' 
              }}
            >
              <polygon points="110,42 114.5,108 110,114 105.5,108" fill="#E8302A"/>
              <polygon points="110,178 114.5,112 110,106 105.5,112" fill="#1C2B3A"/>
              <line x1="110" y1="42" x2="110" y2="108" stroke="rgba(255,255,255,0.6)" strokeWidth="0.5"/>
            </g>
            {/* Center pivot */}
            <circle cx="110" cy="110" r="8" fill="#1C2B3A" stroke="#0F1923" strokeWidth="1.5"/>
            <circle cx="110" cy="110" r="3.5" fill="#F5A623"/>
            <circle cx="110" cy="110" r="1.5" fill="white" opacity="0.8"/>
          </svg>
        </div>
        
        {/* Loading Text */}
        <div className="text-brand-dark/40 text-sm font-medium tracking-[2px] uppercase flex items-center justify-center h-5 mb-4">
          {loadingText}
          {loadingText.length === fullText.length && (
            <span className="inline-block w-[2px] h-[13px] bg-brand-orange ml-[2px] animate-pulse"></span>
          )}
        </div>
        <div className="relative overflow-hidden">
          <span className="block text-[42px] font-bold tracking-[-1px] text-brand-dark animate-[slideUp_0.8s_ease-out_forwards]">
            icebrkr
          </span>
        </div>
        
        <div className="h-[2px] w-0 bg-gradient-to-r from-brand-red via-brand-orange to-brand-green mt-4 animate-[expandLine_1.5s_ease-out_forwards_0.5s]"></div>
      </div>
      
    </div>
  );
}
