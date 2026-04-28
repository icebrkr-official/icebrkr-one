"use client";

import { useEffect, useState } from "react";

export default function SplashScreen() {
  const [loading, setLoading] = useState(true);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    // Start fading out after 2 seconds
    const fadeTimer = setTimeout(() => {
      setFade(true);
    }, 2000);

    // Remove from DOM after fade animation completes (2.5 seconds total)
    const removeTimer = setTimeout(() => {
      setLoading(false);
    }, 2600);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  if (!loading) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-brand-dark transition-all duration-700 ease-in-out ${
        fade ? "opacity-0 pointer-events-none -translate-y-full" : "opacity-100 translate-y-0"
      }`}
    >
      <div className="flex flex-col items-center">
        {/* Animated Dots */}
        <div className="flex gap-3 mb-6">
          <span className="w-3.5 h-3.5 rounded-sm bg-brand-red animate-bounce" style={{ animationDelay: "0ms", animationDuration: "1s" }}></span>
          <span className="w-3.5 h-3.5 rounded-sm bg-brand-orange animate-bounce" style={{ animationDelay: "150ms", animationDuration: "1s" }}></span>
          <span className="w-3.5 h-3.5 rounded-sm bg-brand-green animate-bounce" style={{ animationDelay: "300ms", animationDuration: "1s" }}></span>
        </div>
        
        {/* Brand Name */}
        <div className="relative overflow-hidden">
          <span className="block text-[42px] font-bold tracking-[-1px] text-white animate-[slideUp_0.8s_ease-out_forwards]">
            icebrkr
          </span>
        </div>
        
        <div className="h-[2px] w-0 bg-gradient-to-r from-brand-red via-brand-orange to-brand-green mt-4 animate-[expandLine_1.5s_ease-out_forwards_0.5s]"></div>
      </div>
      
      <div className="absolute bottom-12 text-white/40 text-sm font-medium tracking-[2px] uppercase animate-pulse">
        Initializing COMPASS...
      </div>
    </div>
  );
}
