"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";

// ============ SVG ICONS ============
const SVG: Record<string, string> = {
  vinyl: '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="2.6"/><circle cx="12" cy="12" r=".6" fill="currentColor" stroke="none"/>',
  phone: '<path d="M15.5 14.5l2.3-1a1 1 0 0 1 1 .2l2 2a1 1 0 0 1 0 1.4l-1 1a2 2 0 0 1-2 .5A17 17 0 0 1 5 5a2 2 0 0 1 .5-2l1-1a1 1 0 0 1 1.4 0l2 2a1 1 0 0 1 .2 1l-1 2.3a1 1 0 0 0 .2 1l3.7 3.7a1 1 0 0 0 1 .2z"/>',
  tv: '<rect x="3" y="8" width="18" height="12" rx="1.6"/><path d="M8 8 12 4l4 4"/><circle cx="17.3" cy="14" r="1.1"/>',
  radio: '<rect x="3" y="9" width="18" height="10" rx="1.6"/><circle cx="8" cy="14" r="2.4"/><path d="M13.5 12.5h4M13.5 15.5h4M6 9 17 5"/>',
  cassette: '<rect x="3" y="6" width="18" height="12" rx="1.6"/><circle cx="9" cy="12" r="1.8"/><circle cx="15" cy="12" r="1.8"/><path d="M7 16.5h10"/>',
  floppy: '<path d="M5 4h11l3 3v13H5z"/><path d="M8 4v5h7V4M8 20v-6h8v6"/>',
  pad: '<rect x="3" y="8" width="18" height="8.5" rx="4.25"/><path d="M8 11v3M6.5 12.5h3"/><circle cx="15.5" cy="11.8" r="1"/><circle cx="17.8" cy="14" r="1"/>',
  disc: '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="2.6"/><path d="M12 3a9 9 0 0 1 6.4 2.6"/>',
  phone2: '<rect x="7" y="3" width="10" height="18" rx="2.4"/><path d="M10.5 18.5h3"/>',
  chat: '<path d="M20 14.5a2 2 0 0 1-2 2H9l-4 3.5V6a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2z"/><path d="M8.5 9.5h7M8.5 12.5h4"/>',
  play: '<circle cx="12" cy="12" r="9"/><path d="M10 8.5 16 12l-6 3.5z" fill="currentColor" stroke="none"/>',
  hash: '<path d="M9.5 4 7.5 20M16.5 4l-2 16M4.5 9.5h15.5M3.8 14.5h15.5"/>',
  deck: '<rect x="3" y="4" width="18" height="13" rx="1.6"/><path d="M9 21h6M12 17v4"/>',
  arch: '<rect x="3" y="4" width="6" height="6" rx="1"/><rect x="15" y="4" width="6" height="6" rx="1"/><rect x="9" y="14" width="6" height="6" rx="1"/><path d="M6 10v2a2 2 0 0 0 2 2h1M18 10v2a2 2 0 0 1-2 2h-1"/>',
  chip: '<rect x="6" y="6" width="12" height="12" rx="2"/><path d="M9 3v3M15 3v3M9 18v3M15 18v3M3 9h3M3 15h3M18 9h3M18 15h3"/>',
  flow: '<rect x="3" y="9" width="6" height="6" rx="1"/><rect x="15" y="9" width="6" height="6" rx="1"/><path d="M9 12h6M13 10l2 2-2 2"/>',
  grid: '<rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/>'
};

const renderIcon = (name: string, className = "w-6 h-6") => {
  const path = SVG[name];
  if (!path) return null;
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      dangerouslySetInnerHTML={{ __html: path }}
    />
  );
};

const ERA_ICONS: Record<string, string[]> = {
  analog: ["vinyl", "phone", "tv", "radio"],
  neon: ["cassette", "floppy", "pad", "disc"],
  feed: ["phone2", "chat", "play", "hash"]
};



// ============ MODULES ============
const MODULES = [
  ["AIPA Core", "🧭", "Your AI chief of staff — the one entry point"],
  ["IB Connect", "💬", "Gen-bridge messaging across every age"],
  ["IB Vault", "🔒", "Encrypted docs behind a consent gate"],
  ["IB Health", "❤️", "Private wellness that never leaves your phone"],
  ["IB Map", "🗺️", "Private navigation, no location selling"],
  ["IB Fridge", "🥗", "Nutrition AI from what's in your kitchen"],
  ["IB Closet", "👗", "AI style from your own wardrobe"],
  ["IB Home", "🏠", "Local AI for a smarter home"],
  ["IB Bud", "💰", "Money management & budgeting"],
  ["IB Career", "🎯", "Voice-first career guidance"],
  ["IB Skill", "🎓", "Learn skills from photos & videos"],
  ["IB Learn", "📚", "Your patient educational assistant"],
  ["IB Travel", "✈️", "Travel planning, start to finish"],
  ["IB Astro", "🔮", "Astrological insights, just for fun"],
  ["IB Art", "🎨", "A private creative studio"],
  ["Journal AI", "📓", "Private journaling that stays yours"],
  ["IB Pay", "💳", "Payments, on your terms"],
  ["IB Wallet", "👛", "One wallet, fully local"],
  ["IB Scan", "📸", "Scan & digitise anything"],
  ["IB Mandi", "🛒", "A fair local marketplace"],
  ["IB Dream", "🌙", "Make sense of your dreams"],
  ["IB Share", "🤝", "15% of revenue back to the community"]
];

// ============ GENERATION THEMES ============
const GEN: Record<string, any> = {
  analog: {
    id: "analog",
    era: "The Analog Years",
    name: "Boomers & before",
    yrs: "Silent + Boomers · pre-1965",
    pickTag: "Post-war optimism, vinyl, and the moon.",
    palette: ["#F3ECD9", "#E0A82E", "#6B7A3A", "#C5561F", "#7A4A2B"],
    events: ["Moon landing, 1969", "Woodstock & the Beatles", "Colour TV arrives at home"],
    fashion: "Bell-bottoms, tweed, mustard-&-avocado kitchens, chrome diners.",
    slang: '"Groovy." "Far out." "The bee\'s knees."',
    slangFont: "'Special Elite', monospace",
    colors: {
      bg: "#F3ECD9",
      bg2: "#EBE2CC",
      surface: "#F8F3E4",
      text: "#2B2622",
      dim: "#6E6355",
      border: "#D9CDB0",
      a1: "#C5561F",
      a2: "#E0A82E",
      a3: "#6B7A3A"
    },
    fonts: {
      display: "'DM Serif Display', serif",
      body: "'Lora', serif",
      accent: "'Special Elite', monospace"
    },
    disp: { track: "-0.5px", weight: "400" },
    glow: "none",
    texture: "radial-gradient(rgba(122,74,43,0.18) 1px, transparent 1.4px)",
    texSize: "11px 11px",
    texOpacity: "0.5",
    texBlend: "multiply",
    copy: {
      navCta: "Join the list",
      eyebrow: "A quieter kind of clever",
      heroTitle: "Your day,<br>all squared away.",
      heroSub:
        "AIPA is your proactive assistant — it lines up your day and keeps it in one tidy feed. No app-hopping, no fuss, and not one byte sold.",
      ctaP: "Sign me up →",
      ctaS: "Take a gander",
      greet: "Well, hello there 👋",
      feed: [
        ["📻", "Morning briefing", "now", "Leave in 12 minutes — roads are clear as a bell."],
        ["☎️", "Call reminder", "8 min", "Ring your granddaughter back — she left word at half past nine."],
        ["🗞", "Letter ready", "20 min", "Your reply to the Hendersons is typed up and ready to post."]
      ],
      modTitle: "One tidy toolbox",
      modSub: "Everything in one place — and it stays on your device.",
      deepTag: "The deeptech layer",
      deepTitle: "A model built just for you",
      finalTitle: "Ready to get squared away?",
      finalSub: "Join the list. Be first through the door.",
      artLabel: "For the record-player generation.",
      footTag: "Groovy tech that never sells you out."
    }
  },
  neon: {
    id: "neon",
    era: "The Neon Years",
    name: "Gen X & Millennials",
    yrs: "Gen X + Millennials · 1965–1996",
    pickTag: "MTV, dial-up, LAN parties, Y2K chrome.",
    palette: ["#FFFFFF", "#E8302A", "#0EA5E9", "#8B5CF6", "#10B981"],
    events: ["MTV launches, 1981", "The Web goes public, 1991", "Grunge, Tamagotchi, Y2K"],
    fashion: "Neon windbreakers, grunge flannel, frosted tips, holographic everything.",
    slang: '"Rad." "As if." "Da bomb."',
    slangFont: "'Orbitron', sans-serif",
    colors: {
      bg: "#F8FAFC",
      bg2: "#F1F5F9",
      surface: "#FFFFFF",
      text: "#0F172A",
      dim: "#475569",
      border: "#E2E8F0",
      a1: "#E8302A",
      a2: "#0EA5E9",
      a3: "#7C3AED"
    },
    fonts: {
      display: "'Orbitron', sans-serif",
      body: "'Space Grotesk', sans-serif",
      accent: "'Space Grotesk', sans-serif"
    },
    disp: { track: "-1px", weight: "800" },
    glow: "0 14px 40px -18px rgba(232,48,42,0.35)",
    texture:
      "radial-gradient(600px 300px at 10% 0%, rgba(124,58,237,0.12), transparent), radial-gradient(500px 300px at 100% 20%, rgba(14,165,233,0.12), transparent)",
    texSize: "auto",
    texOpacity: "1",
    texBlend: "normal",
    copy: {
      navCta: "Get on the list",
      eyebrow: "Powered by on-device AI",
      heroTitle: "Your whole day.<br>No app-hopping. As if.",
      heroSub:
        "AIPA lines up your day in one feed and actually gets you. Private by design, on-device, zero data theft. Totally.",
      ctaP: "Hook me up →",
      ctaS: "Peep the demo",
      greet: "Sup 🤙",
      feed: [
        ["⚡", "Leave now", "now", "Traffic's building on the 101 — bounce in 8 or you're toast."],
        ["💾", "Draft saved", "5 min", "Reply to Sarah's proposal is queued up. Da bomb."],
        ["🎧", "Mixtape ready", "12 min", "Focus playlist loaded for your 2pm grind session."]
      ],
      modTitle: "The whole stack. No filler.",
      modSub: "Every module, on-device. As if we'd upload your life.",
      deepTag: "The deeptech layer",
      deepTitle: "A model that knows you — not the cloud",
      finalTitle: "Ready to jack in?",
      finalSub: "Get on the list before it drops.",
      artLabel: "For the mixtape generation.",
      footTag: "All that — minus the data theft."
    }
  },
  feed: {
    id: "feed",
    era: "The Feed Years",
    name: "Gen Z & Alphas",
    yrs: "Gen Z + Alpha · 1997–now",
    pickTag: "TikTok, memes, AI, brainrot. it's giving future.",
    palette: ["#0B0B12", "#FF2E9A", "#21E6FF", "#8A5CFF", "#C9D2E3"],
    events: ["Smartphone-native from birth", "TikTok + the creator economy", "The AI boom, fr fr"],
    fashion: "gorpcore, cottagecore, 'that girl' neutrals, Y2K revival, hyperpop.",
    slang: '"rizz." "no cap." "it\'s giving."',
    slangFont: "'Bricolage Grotesque', sans-serif",
    colors: {
      bg: "#0B0B12",
      bg2: "#12121e",
      surface: "#181828",
      text: "#F2F3FB",
      dim: "#9aa0c4",
      border: "#2a2b45",
      a1: "#FF2E9A",
      a2: "#21E6FF",
      a3: "#8A5CFF"
    },
    fonts: {
      display: "'Bricolage Grotesque', sans-serif",
      body: "'Inter', sans-serif",
      accent: "'Space Grotesk', sans-serif"
    },
    disp: { track: "-1.5px", weight: "800" },
    glow: "0 0 30px -6px rgba(255,46,154,0.55)",
    texture:
      "repeating-linear-gradient(0deg, rgba(33,230,255,0.05) 0 1px, transparent 1px 3px), linear-gradient(90deg, rgba(138,92,255,0.05) 1px, transparent 1px)",
    texSize: "auto, 40px 40px",
    texOpacity: "1",
    texBlend: "screen",
    copy: {
      navCta: "lock in",
      eyebrow: "privacy-first · on-device",
      heroTitle: "your day, fr fr.<br>no app-switching. it just ate.",
      heroSub:
        "AIPA runs your whole day in one feed and it's lowkey bussin. privacy-first, on-device, we don't sell a single byte. no cap.",
      ctaP: "lock me in →",
      ctaS: "show me (it's giving)",
      greet: "hey bestie 👋",
      feed: [
        ["🚨", "leave now bestie", "now", "traffic's cooked on the 101. dip in 8 or you're late, no cap."],
        ["✨", "draft's ready", "5 min", "reply to sarah is done and it ate. just hit send."],
        ["🎧", "focus mode", "12 min", "study playlist queued for your 2pm lock-in. based."]
      ],
      modTitle: "the whole ecosystem. it's giving everything.",
      modSub: "every module runs on-device. we're not delulu about your privacy.",
      deepTag: "the deeptech layer",
      deepTitle: "a model of you. built different.",
      finalTitle: "ready to lock in?",
      finalSub: "join the list before it blows up.",
      artLabel: "for the group-chat generation.",
      footTag: "privacy-first AI that's actually bussin."
    }
  }
};

const ORDER = ["analog", "neon", "feed"];
const CUSP: Record<string, string> = {
  analog_neon: "Gen Jones",
  neon_feed: "Zillennial"
};

// ============ COLOR BLEND HELPERS ============
const h2r = (h: string) => {
  const hex = h.replace("#", "");
  return [
    parseInt(hex.slice(0, 2), 16),
    parseInt(hex.slice(2, 4), 16),
    parseInt(hex.slice(4, 6), 16)
  ];
};

const r2h = (a: number[]) => {
  return (
    "#" +
    a
      .map((x) => {
        const val = Math.max(0, Math.min(255, Math.round(x)));
        return val.toString(16).padStart(2, "0");
      })
      .join("")
  );
};

const mixHex = (a: string, b: string, t: number) => {
  const A = h2r(a);
  const B = h2r(b);
  return r2h([0, 1, 2].map((i) => A[i] + (B[i] - A[i]) * t));
};

const blendColors = (ca: any, cb: any, t: number) => {
  const o: any = {};
  for (const k in ca) {
    o[k] = mixHex(ca[k], cb[k], t);
  }
  return o;
};

// Picker column background gradients
const PBG: Record<string, string> = {
  analog: "linear-gradient(155deg, #F3ECD9 0%, #E9D8B6 55%, #DFC698 100%)",
  neon: "linear-gradient(160deg, #FFFFFF 0%, #F0F4FF 50%, #FFF0F5 100%)",
  feed: "radial-gradient(70% 55% at 88% 100%, rgba(33,230,255,0.30), transparent), radial-gradient(65% 55% at 8% 88%, rgba(255,46,154,0.32), transparent), radial-gradient(135% 120% at 22% -12%, #1d1338 0%, #0B0B12 62%)"
};

export default function HowItWorks() {
  const [activeScreen, setActiveScreen] = useState<"picker" | "site">("picker");
  const [activeThemeId, setActiveThemeId] = useState<string>("analog");
  const [currentTheme, setCurrentTheme] = useState<any>(GEN.analog);
  const [pickerTab, setPickerTab] = useState<string>("neon");

  // Mix states
  const [showMixModal, setShowMixModal] = useState(false);
  const [mixAId, setMixAId] = useState("analog");
  const [mixBId, setMixBId] = useState("neon");
  const [mixRange, setMixRange] = useState(50);

  // Toast states
  const [showToast, setShowToast] = useState(false);
  const [toastText, setToastText] = useState("");
  const toastTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Early Access & Hamburger menu states
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleEarlyAccessSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage("");
    setSubmitStatus("idle");

    try {
      const response = await fetch("/api/early-access", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email }),
      });

      const data = await response.json();

      if (!response.ok) {
        if (data.error === "duplicate_email") {
          setSubmitMessage("This email is already registered for early access.");
        } else {
          setSubmitMessage(data.message || "An error occurred. Please try again.");
        }
        setSubmitStatus("error");
      } else {
        fetch("/api/send-early-access-email", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ name, email }),
        }).catch(() => {});

        setSubmitMessage("Success! You have been added to the early access list.");
        setSubmitStatus("success");
        setName("");
        setEmail("");
        setTimeout(() => setIsModalOpen(false), 3000);
      }
    } catch (err) {
      setSubmitMessage("An unexpected error occurred.");
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const triggerToast = (msg: string) => {
    setToastText(msg);
    setShowToast(true);
    if (toastTimeoutRef.current) clearTimeout(toastTimeoutRef.current);
    toastTimeoutRef.current = setTimeout(() => {
      setShowToast(false);
    }, 2600);
  };

  const handleEnterEra = (id: string) => {
    const selected = GEN[id];
    setActiveThemeId(id);
    setCurrentTheme(selected);
    setActiveScreen("site");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleOpenMix = (aid: string, bid: string) => {
    setMixAId(aid);
    setMixBId(bid);
    setMixRange(50);
    setShowMixModal(true);
  };

  // Blended values computation for preview card in Modal
  const mixA = GEN[mixAId];
  const mixB = GEN[mixBId];
  const t = mixRange / 100;
  const blendedColors = blendColors(mixA.colors, mixB.colors, t);
  const dominantTheme = t < 0.5 ? mixA : mixB;
  const cuspKey = `${mixAId}_${mixBId}`;
  const cuspName = CUSP[cuspKey] || "Custom Blend";

  const handleEnterMix = () => {
    const finalColors = blendColors(mixA.colors, mixB.colors, t);
    const finalTheme = {
      id: "mix",
      era: `${Math.round((1 - t) * 100)}% ${mixA.name} / ${Math.round(t * 100)}% ${mixB.name}`,
      name: cuspName,
      yrs: `${mixA.name} + ${mixB.name} blend`,
      colors: finalColors,
      fonts: dominantTheme.fonts,
      slang: dominantTheme.slang,
      slangFont: dominantTheme.slangFont,
      disp: dominantTheme.disp,
      glow: dominantTheme.glow === "none" ? "none" : dominantTheme.glow,
      texture: dominantTheme.texture,
      texSize: dominantTheme.texSize,
      texOpacity: dominantTheme.texOpacity,
      texBlend: dominantTheme.texBlend,
      copy: {
        ...dominantTheme.copy,
        eyebrow: `blended vibe · ${cuspName}`
      }
    };
    setCurrentTheme(finalTheme);
    setActiveThemeId("mix");
    setShowMixModal(false);
    setActiveScreen("site");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const backToPicker = () => {
    setActiveScreen("picker");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen relative overflow-hidden bg-[#0c0d12] text-white">
      {/* Load dynamic fonts */}
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=Lora:ital,wght@0,400;0,600;1,400&family=Special+Elite&family=Orbitron:wght@500;700;900&family=Space+Grotesk:wght@400;500;700&family=Press+Start+2P&family=Bricolage+Grotesque:opsz,wght@12..96,600;12..96,800&family=Inter:wght@400;500;700&family=Bungee&display=swap"
      />

      {/* Scoped CSS classes helper based on dynamic custom variable tokens */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
          .font-display-custom { font-family: var(--fdisplay), sans-serif; }
          .font-body-custom { font-family: var(--fbody), sans-serif; }
          .font-accent-custom { font-family: var(--faccent), sans-serif; }
          .font-slang-custom { font-family: var(--fslang), monospace; }
        `
        }}
      />

      {/* ================= SCREEN 1: THE INTERACTIVE ERA PICKER ================= */}
      <div
        className={`fixed inset-0 z-40 bg-[#07080c] text-white flex flex-col justify-between p-6 md:p-10 transition-all duration-700 ease-in-out overflow-y-auto ${
          activeScreen === "site" ? "opacity-0 pointer-events-none scale-[0.98]" : "opacity-100 scale-100"
        }`}
      >
        {/* Top Header Bar */}
        <div className="flex items-center justify-between gap-4 max-w-7xl mx-auto w-full z-30">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 text-white text-xs sm:text-sm font-semibold backdrop-blur-md transition-all duration-200 hover:-translate-y-[1px] shadow-lg no-underline"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M10 13L5 8L10 3" />
            </svg>
            <span>Back to Home</span>
          </Link>

          <div className="flex items-center gap-3">
            <button
              onClick={() => handleOpenMix("neon", "feed")}
              className="px-4.5 py-2.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 text-xs sm:text-sm font-semibold text-white transition-all cursor-pointer backdrop-blur-md"
            >
              + Mix Eras (Cusp Blend)
            </button>
          </div>
        </div>

        {/* Center Stage: Title + Era Selector Grid Cards */}
        <div className="max-w-6xl mx-auto w-full my-auto py-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-[11px] font-bold tracking-[2px] uppercase text-[#E8302A] block mb-2 font-mono">
              Generational Personalisation
            </span>
            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white font-sans">
              Choose Your Generation
            </h1>
            <p className="text-sm md:text-base text-gray-400 mt-3 leading-relaxed">
              icebrkr adapts its UI, copy, and AI personality to match the world you grew up in.
            </p>
          </div>

          {/* 3 Era Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
            {ORDER.map((gid) => {
              const g = GEN[gid];
              const c = g.colors;
              const isSelected = pickerTab === gid;

              return (
                <div
                  key={gid}
                  onClick={() => {
                    setPickerTab(gid);
                    handleEnterEra(gid);
                  }}
                  className={`group relative rounded-3xl p-7 flex flex-col justify-between border cursor-pointer transition-all duration-300 hover:scale-[1.02] shadow-xl ${
                    isSelected
                      ? "border-white/40 ring-2 ring-white/30"
                      : "border-white/10 hover:border-white/25"
                  }`}
                  style={{
                    background: PBG[gid]
                  }}
                >
                  <div className="relative z-10" style={{ color: c.text }}>
                    <div
                      className="text-[11px] font-bold tracking-[2px] uppercase mb-2"
                      style={{ color: c.a1, fontFamily: g.fonts.accent }}
                    >
                      {g.era}
                    </div>
                    <h3
                      className="text-2xl md:text-3xl font-extrabold tracking-tight mb-1"
                      style={{ fontFamily: g.fonts.display }}
                    >
                      {g.name}
                    </h3>
                    <div className="text-xs font-semibold opacity-75 mb-4">{g.yrs}</div>
                    <p className="text-xs md:text-sm leading-relaxed opacity-90 mb-6 font-medium">
                      {g.pickTag}
                    </p>

                    {/* Color Swatches */}
                    <div className="flex gap-1.5 mb-6">
                      {g.palette.map((col: string, sIdx: number) => (
                        <span
                          key={sIdx}
                          className="w-5 h-5 rounded-full border border-black/10 shadow-sm"
                          style={{ backgroundColor: col }}
                        />
                      ))}
                    </div>

                    {/* Era Icons */}
                    <div className="flex gap-2.5 mb-6" style={{ color: c.a1 }}>
                      {(ERA_ICONS[gid] || []).map((ic) => (
                        <span key={ic} className="opacity-90">
                          {renderIcon(ic, "w-5 h-5")}
                        </span>
                      ))}
                    </div>
                  </div>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleEnterEra(gid);
                    }}
                    className="relative z-10 w-full py-3.5 px-5 rounded-2xl font-bold text-xs sm:text-sm text-white transition-all cursor-pointer shadow-lg hover:scale-[1.02] border-none mt-4 text-center flex items-center justify-center gap-2"
                    style={{
                      backgroundColor: c.a1
                    }}
                  >
                    <span>Enter {g.name}</span>
                    <span>→</span>
                  </button>
                </div>
              );
            })}
          </div>
        </div>

        {/* Footer info */}
        <div className="max-w-7xl mx-auto w-full text-center text-xs text-gray-500 font-medium py-2">
          Click any era to experience the tailored AI Life OS interface.
        </div>
      </div>

      {/* ================= MIX BLEND MODAL ================= */}
      {showMixModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md animate-fade-in">
          <div className="bg-[#12141d] border border-[#2a2e40] rounded-[22px] p-6 sm:p-8 max-w-lg w-full font-sans text-[#f4f4f6] shadow-2xl relative">
            <h3 className="text-xl sm:text-2xl font-extrabold tracking-tight text-white">
              On the cusp? Meet the {cuspName}.
            </h3>
            <p className="text-xs sm:text-sm text-[#9aa0b4] mt-2 mb-6">
              Slide to blend {mixA.name} and {mixB.name}. The whole site adapts to your custom mix.
            </p>

            {/* Mixed preview box */}
            <div
              className="p-5 sm:p-6 rounded-xl border mb-6 flex flex-col gap-2 transition-all duration-150"
              style={{
                backgroundColor: blendedColors.surface,
                color: blendedColors.text,
                borderColor: blendedColors.border
              }}
            >
              <div
                className="text-[10px] font-bold tracking-[1.5px] uppercase"
                style={{ color: blendedColors.a1 }}
              >
                {Math.round((1 - t) * 100)}% {mixA.name} · {Math.round(t * 100)}% {mixB.name}
              </div>
              <div
                className="text-xl sm:text-2xl font-extrabold tracking-tight leading-snug"
                style={{ fontFamily: dominantTheme.fonts.display }}
                dangerouslySetInnerHTML={{ __html: dominantTheme.copy.heroTitle }}
              />
              <div
                className="text-xs sm:text-sm font-medium italic opacity-90 mt-2"
                style={{ fontFamily: dominantTheme.slangFont }}
              >
                {dominantTheme.slang}
              </div>
            </div>

            {/* Ratio label row */}
            <div className="flex justify-between text-[11px] font-bold text-[#9aa0b4] mb-3 px-1">
              <span>{mixA.name} ({Math.round((1 - t) * 100)}%)</span>
              <span>{mixB.name} ({Math.round(t * 100)}%)</span>
            </div>

            {/* Range slider */}
            <div className="relative mb-8 px-1">
              <input
                type="range"
                min="0"
                max="100"
                value={mixRange}
                onChange={(e) => setMixRange(Number(e.target.value))}
                className="w-full h-2 rounded-lg bg-[#2a2e40] appearance-none cursor-pointer outline-none accent-white"
              />
            </div>

            {/* Actions */}
            <div className="flex gap-4">
              <button
                onClick={() => setShowMixModal(false)}
                className="flex-1 py-3 px-4 rounded-xl border border-[#2a2e40] bg-transparent text-[#c7cbdb] font-bold text-sm hover:bg-white/5 hover:text-white transition-all cursor-pointer text-center"
              >
                Back
              </button>
              <button
                onClick={handleEnterMix}
                className="flex-1 py-3 px-4 rounded-xl bg-white text-black font-bold text-sm hover:bg-gray-150 transition-all cursor-pointer text-center"
              >
                Enter this mix →
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ================= SCREEN 2: THE MORPHED SITE VIEW ================= */}
      {activeScreen === "site" && (
        <div
          className="relative min-h-screen flex flex-col z-10 transition-opacity duration-700 ease-in-out"
          style={{
            backgroundColor: currentTheme.colors.bg,
            color: currentTheme.colors.text,
            fontFamily: currentTheme.fonts.body,
            // Custom styling tokens mapped to CSS custom properties
            "--bg": currentTheme.colors.bg,
            "--bg2": currentTheme.colors.bg2,
            "--surface": currentTheme.colors.surface,
            "--text": currentTheme.colors.text,
            "--dim": currentTheme.colors.dim,
            "--border": currentTheme.colors.border,
            "--a1": currentTheme.colors.a1,
            "--a2": currentTheme.colors.a2,
            "--a3": currentTheme.colors.a3,
            "--fdisplay": currentTheme.fonts.display,
            "--fbody": currentTheme.fonts.body,
            "--faccent": currentTheme.fonts.accent,
            "--fslang": currentTheme.slangFont,
            "--disp-track": currentTheme.disp.track,
            "--disp-weight": currentTheme.disp.weight,
            "--glow": currentTheme.glow
          } as React.CSSProperties}
        >
          {/* Theme background scanlines/noise/radial texture overlay */}
          <div
            className="absolute inset-0 pointer-events-none z-[1]"
            style={{
              backgroundImage: currentTheme.texture,
              backgroundSize: currentTheme.texSize || "auto",
              opacity: currentTheme.texOpacity || "1",
              mixBlendMode: (currentTheme.texBlend || "normal") as any
            }}
          />

          {/* Sticky Navbar */}
          <nav className="sticky top-0 z-20 bg-[color-mix(in_srgb,var(--bg)_82%,transparent)] backdrop-blur-md border-b border-[var(--border)] relative z-[10] h-16">
            <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
              {/* Logo */}
              <Link href="/" className="flex items-center no-underline flex-shrink-0">
                <Image
                  src="/navlogo.png"
                  alt="icebrkr logo"
                  width={240}
                  height={60}
                  className={`h-[46px] lg:h-[60px] w-auto object-contain transition-all duration-350 ${
                    activeThemeId === "feed" ||
                    (activeThemeId === "mix" && dominantTheme.id === "feed")
                      ? "invert brightness-200"
                      : ""
                  }`}
                  priority
                />
              </Link>

              {/* Desktop Nav */}
              <div className="hidden md:flex items-center gap-3">
                <button
                  onClick={backToPicker}
                  className="px-3.5 py-2 text-xs md:text-sm font-semibold rounded-lg bg-[var(--surface)] border border-[var(--border)] text-[var(--dim)] hover:-translate-y-[1px] transition-transform cursor-pointer"
                >
                  ↺ change era
                </button>
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="px-4.5 py-2 text-xs md:text-sm font-bold rounded-lg bg-[var(--a1)] text-white hover:-translate-y-[1px] transition-transform cursor-pointer shadow-[var(--glow)] border-none"
                >
                  {currentTheme.copy.navCta}
                </button>
              </div>

              {/* Hamburger Menu Icon (Mobile) */}
              <button
                className="md:hidden flex flex-col gap-1.5 cursor-pointer relative z-[60] p-2 bg-transparent border-none outline-none"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle mobile menu"
              >
                <span className={`block w-6 h-[2px] transition-transform duration-300`} style={{ backgroundColor: "var(--text)", transform: isMobileMenuOpen ? "rotate(45deg) translateY(8px)" : "none" }} />
                <span className={`block w-6 h-[2px] transition-opacity duration-300 ${isMobileMenuOpen ? "opacity-0" : "opacity-100"}`} style={{ backgroundColor: "var(--text)" }} />
                <span className={`block w-6 h-[2px] transition-transform duration-300`} style={{ backgroundColor: "var(--text)", transform: isMobileMenuOpen ? "rotate(-45deg) translateY(-8px)" : "none" }} />
              </button>
            </div>

            {/* Mobile Menu Dropdown */}
            <div
              className={`md:hidden absolute top-16 left-0 right-0 border-b border-[var(--border)] bg-[var(--bg)] backdrop-blur-md transition-all duration-300 flex flex-col overflow-hidden shadow-xl z-20 ${
                isMobileMenuOpen
                  ? "max-h-[220px] opacity-100 p-6 gap-4"
                  : "max-h-0 opacity-0 pointer-events-none p-0"
              }`}
            >
              <button
                onClick={() => {
                  backToPicker();
                  setIsMobileMenuOpen(false);
                }}
                className="w-full py-3 text-center font-semibold rounded-xl bg-[var(--surface)] border border-[var(--border)] text-[var(--dim)] hover:-translate-y-[1px] transition-transform cursor-pointer"
              >
                ↺ change era
              </button>
              <button
                onClick={() => {
                  setIsModalOpen(true);
                  setIsMobileMenuOpen(false);
                }}
                className="w-full py-3.5 text-center font-bold rounded-xl bg-[var(--a1)] text-white hover:-translate-y-[1px] transition-transform cursor-pointer shadow-[var(--glow)] border-none"
              >
                {currentTheme.copy.navCta}
              </button>
            </div>
          </nav>

          {/* Hero Section */}
          <header className="relative py-16 lg:py-24 overflow-hidden z-[2]">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              {/* Left text column */}
              <div className="lg:col-span-7 flex flex-col items-start text-left">
                <span className="inline-flex items-center gap-2 px-3 py-1.5 text-xs font-semibold rounded-full bg-[var(--surface)] border border-[var(--border)] text-[var(--dim)] font-accent-custom mb-6">
                  <span className="flex gap-1.5">
                    <i className="w-2 h-2 rounded-full bg-[var(--a1)] block"></i>
                    <i className="w-2 h-2 rounded-full bg-[var(--a2)] block"></i>
                    <i className="w-2 h-2 rounded-full bg-[var(--a3)] block"></i>
                  </span>
                  {currentTheme.copy.eyebrow}
                </span>

                <h1
                  className="text-4xl md:text-5xl lg:text-6.5xl font-display-custom tracking-tight leading-[1.03] mb-6"
                  style={{
                    fontWeight: "var(--disp-weight)",
                    letterSpacing: "var(--disp-track)"
                  }}
                  dangerouslySetInnerHTML={{ __html: currentTheme.copy.heroTitle }}
                />

                <p className="text-base md:text-lg text-[var(--dim)] font-body-custom leading-relaxed max-w-xl mb-8">
                  {currentTheme.copy.heroSub}
                </p>

                <div className="flex flex-wrap gap-4 mb-10">
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="px-6 py-3.5 text-sm font-bold rounded-xl bg-[var(--a1)] text-white hover:-translate-y-[2px] transition-all cursor-pointer shadow-[var(--glow)] border-none"
                  >
                    {currentTheme.copy.ctaP}
                  </button>
                  <a
                    href="#modules"
                    className="px-6 py-3.5 text-sm font-bold rounded-xl bg-transparent border border-[var(--border)] text-[var(--text)] hover:-translate-y-[2px] hover:bg-[var(--surface)] transition-all flex items-center justify-center text-center"
                  >
                    {currentTheme.copy.ctaS}
                  </a>
                </div>

                {/* Hero Artifacts Icons & label */}
                <div className="flex items-center gap-3 mt-4 flex-wrap">
                  <div className="flex gap-2" style={{ color: "var(--a1)" }}>
                    {currentTheme.id === "mix" ? (
                      <>
                        {(ERA_ICONS[mixAId] || []).slice(0, 2).map((ic) => (
                          <span key={ic} className="opacity-90">
                            {renderIcon(ic, "w-6 h-6")}
                          </span>
                        ))}
                        {(ERA_ICONS[mixBId] || []).slice(0, 2).map((ic) => (
                          <span key={ic} className="opacity-90">
                            {renderIcon(ic, "w-6 h-6")}
                          </span>
                        ))}
                      </>
                    ) : (
                      (ERA_ICONS[currentTheme.id] || []).map((ic) => (
                        <span key={ic} className="opacity-90">
                          {renderIcon(ic, "w-6 h-6")}
                        </span>
                      ))
                    )}
                  </div>
                  <span className="text-xs font-semibold text-[var(--dim)] font-accent-custom">
                    {currentTheme.copy.artLabel}
                  </span>
                </div>
              </div>

              {/* Right phone mockup column */}
              <div className="lg:col-span-5 flex justify-center items-center relative">
                {/* Simulated Radar Wave Circles */}
                <div className="absolute w-[360px] h-[360px] rounded-full border border-[var(--border)] opacity-30 animate-ping -z-10 pointer-events-none" />

                <div
                  className="w-[290px] md:w-[305px] bg-[var(--surface)] border border-[var(--border)] rounded-[36px] p-3.5 transition-all duration-300 hover:scale-[1.01]"
                  style={{ boxShadow: currentTheme.glow === "none" ? "0 40px 80px -30px rgba(0,0,0,0.6)" : `0 40px 80px -30px rgba(0,0,0,0.6), ${currentTheme.glow}` }}
                >
                  <div className="bg-[var(--bg2)] rounded-[26px] p-4 h-[510px] overflow-hidden flex flex-col gap-3">
                    {/* Phone screen status bar */}
                    <div className="flex justify-between items-center text-[10px] text-[var(--dim)] font-semibold px-1">
                      <span>Fri · 9:41</span>
                      <span className="flex gap-1">
                        <i className="w-1.5 h-1.5 rounded-full bg-[var(--a1)] block"></i>
                        <i className="w-1.5 h-1.5 rounded-full bg-[var(--a2)] block"></i>
                        <i className="w-1.5 h-1.5 rounded-full bg-[var(--a3)] block"></i>
                      </span>
                    </div>

                    <div className="text-lg font-bold font-display-custom mt-1 px-1">
                      {currentTheme.copy.greet}
                    </div>

                    {/* Virtual screen feed notifications */}
                    <div className="flex flex-col gap-3 overflow-y-auto pr-0.5 custom-scrollbar flex-1">
                      {currentTheme.copy.feed.map((it: any, fIdx: number) => {
                        const acc = ["var(--a1)", "var(--a2)", "var(--a3)"];
                        return (
                          <div
                            key={fIdx}
                            className="bg-[var(--surface)] border border-[var(--border)] rounded-xl p-3.5 border-l-4 transition-all duration-200 hover:translate-x-1"
                            style={{ borderLeftColor: acc[fIdx % 3] }}
                          >
                            <div className="flex items-center justify-between text-[11.5px] font-bold text-[var(--text)] mb-1">
                              <span className="flex items-center gap-1.5">
                                <span>{it[0]}</span>
                                <span>{it[1]}</span>
                              </span>
                              <span className="text-[10px] font-medium text-[var(--dim)]">{it[2]}</span>
                            </div>
                            <div className="text-[11.5px] text-[var(--dim)] leading-relaxed font-body-custom">
                              {it[3]}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </header>

          {/* Modules Section */}
          <section id="modules" className="py-20 border-t border-[var(--border)] bg-[var(--bg2)] z-[2]">
            <div className="max-w-7xl mx-auto px-6">
              <span className="text-xs font-bold tracking-[1.5px] uppercase text-[var(--a1)] font-accent-custom">
                The COMPASS ecosystem
              </span>
              <h2 className="text-3xl md:text-4.5xl font-display-custom tracking-tight leading-[1.08] mt-2 mb-3">
                {currentTheme.copy.modTitle}
              </h2>
              <p className="text-sm md:text-base text-[var(--dim)] font-body-custom max-w-2xl mb-12">
                {currentTheme.copy.modSub}
              </p>

              {/* Modules Grid */}
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {MODULES.map((m, mIdx) => {
                  const acc = ["var(--a1)", "var(--a2)", "var(--a3)"];
                  const activeAcc = acc[mIdx % 3];
                  return (
                    <div
                      key={mIdx}
                      className="p-5 rounded-2xl bg-[var(--surface)] border border-[var(--border)] transition-all duration-300 hover:-translate-y-1 cursor-default group"
                      style={
                        {
                          "--hover-shadow": `0 18px 40px -22px ${activeAcc}`
                        } as React.CSSProperties
                      }
                      // Workaround to apply the dynamic colored box shadow on hover
                      onMouseEnter={(e) => {
                        e.currentTarget.style.boxShadow = `0 18px 40px -22px ${activeAcc}`;
                        e.currentTarget.style.borderColor = activeAcc;
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.boxShadow = "none";
                        e.currentTarget.style.borderColor = "var(--border)";
                      }}
                    >
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center text-lg mb-4"
                        style={{
                          backgroundColor: `color-mix(in srgb, ${activeAcc} 16%, transparent)`,
                          color: activeAcc
                        }}
                      >
                        {m[1]}
                      </div>
                      <h4 className="font-accent-custom font-bold text-sm text-[var(--text)] tracking-tight">
                        {m[0]}
                      </h4>
                      <p className="text-[11px] md:text-xs text-[var(--dim)] mt-1.5 leading-relaxed">
                        {m[2]}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* Deeptech Section */}
          <section className="py-20 border-t border-[var(--border)] bg-[var(--bg)] z-[2]">
            <div className="max-w-7xl mx-auto px-6">
              <span className="text-xs font-bold tracking-[1.5px] uppercase text-[var(--a3)] font-accent-custom">
                {currentTheme.copy.deepTag}
              </span>
              <h2 className="text-3xl md:text-4.5xl font-display-custom tracking-tight leading-[1.08] mt-2 mb-4">
                {currentTheme.copy.deepTitle}
              </h2>
              <p className="text-sm md:text-base text-[var(--dim)] font-body-custom max-w-2xl leading-relaxed">
                We don't compete on foundation models — we build a model of you. On-device, owned by one.
              </p>

              {/* Science cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
                <div className="p-6 md:p-8 rounded-2xl bg-[var(--surface)] border border-[var(--border)]">
                  <div className="text-xs font-bold tracking-[1.5px] uppercase text-[var(--a3)] font-accent-custom">
                    The model
                  </div>
                  <div className="text-4xl md:text-5xl font-extrabold font-display-custom text-[var(--a1)] my-4 tracking-tighter">
                    &lt;20ms
                  </div>
                  <p className="text-xs md:text-sm text-[var(--dim)] leading-relaxed">
                    An on-device personal model per user, learning only from your consented signals. Zero raw-data egress.
                  </p>
                </div>
                <div className="p-6 md:p-8 rounded-2xl bg-[var(--surface)] border border-[var(--border)]">
                  <div className="text-xs font-bold tracking-[1.5px] uppercase text-[var(--a3)] font-accent-custom">
                    The moat
                  </div>
                  <div className="text-4xl md:text-5xl font-extrabold font-display-custom text-[var(--a1)] my-4 tracking-tighter">
                    Week 3
                  </div>
                  <p className="text-xs md:text-sm text-[var(--dim)] leading-relaxed">
                    Day one it's a newborn. By week three it knows you. The moat is the months of you that can't be copied.
                  </p>
                </div>
                <div className="p-6 md:p-8 rounded-2xl bg-[var(--surface)] border border-[var(--border)]">
                  <div className="text-xs font-bold tracking-[1.5px] uppercase text-[var(--a3)] font-accent-custom">
                    The science
                  </div>
                  <div className="text-4xl md:text-5xl font-extrabold font-display-custom text-[var(--a1)] my-4 tracking-tighter">
                    n = 1
                  </div>
                  <p className="text-xs md:text-sm text-[var(--dim)] leading-relaxed">
                    A dataset of exactly one. Not personalisation — per-user model science. Impossible to clone.
                  </p>
                </div>
              </div>

              {/* Trust labels badges row */}
              <div className="flex flex-wrap gap-3 mt-10">
                {[
                  "Zero-knowledge — data stays on device",
                  "Swiss-hosted · region-pinned",
                  "EU AI Act · GDPR · nLPD ready",
                  "Works offline · 40+ languages"
                ].map((txt) => (
                  <span
                    key={txt}
                    className="px-4 py-2 text-xs md:text-sm font-semibold rounded-full bg-[var(--surface)] border border-[var(--border)] text-[var(--text)] font-accent-custom flex items-center gap-1.5"
                  >
                    <b className="text-[var(--a3)] font-extrabold">✓</b> {txt}
                  </span>
                ))}
              </div>
            </div>
          </section>



          {/* Final CTA */}
          <section className="py-20 md:py-24 text-center bg-[var(--bg2)] border-t border-[var(--border)] z-[2]">
            <div className="max-w-4xl mx-auto px-6 flex flex-col items-center">
              <h2
                className="text-3xl md:text-5xl font-display-custom tracking-tight mb-4"
                style={{
                  fontWeight: "var(--disp-weight)",
                  letterSpacing: "var(--disp-track)"
                }}
                dangerouslySetInnerHTML={{ __html: currentTheme.copy.finalTitle }}
              />
              <p className="text-base md:text-lg text-[var(--dim)] font-body-custom mb-8 max-w-xl">
                {currentTheme.copy.finalSub}
              </p>
              <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="w-full sm:w-auto px-6 py-3.5 text-sm font-bold rounded-xl bg-[var(--a1)] text-white hover:-translate-y-[2px] transition-all cursor-pointer shadow-[var(--glow)] border-none"
                >
                  {currentTheme.copy.ctaP}
                </button>
                <button
                  onClick={backToPicker}
                  className="w-full sm:w-auto px-6 py-3.5 text-sm font-bold rounded-xl bg-transparent border border-[var(--border)] text-[var(--text)] hover:-translate-y-[2px] hover:bg-[var(--surface)] transition-all cursor-pointer"
                >
                  Pick a different era
                </button>
              </div>
            </div>
          </section>

          {/* Footer */}
          <footer className="py-12 border-t border-[var(--border)] bg-[var(--bg)] z-[2] relative">
            <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
              <div>
                <div className="logo flex items-center gap-2.5 font-display-custom font-extrabold text-xl mb-3">
                  <span className="flex gap-1">
                    <i className="w-3 h-3 rounded bg-[var(--a1)] block"></i>
                    <i className="w-3 h-3 rounded bg-[var(--a2)] block"></i>
                    <i className="w-3 h-3 rounded bg-[var(--a3)] block"></i>
                  </span>
                  icebrkr
                </div>
                <p className="text-xs md:text-sm text-[var(--dim)] font-body-custom max-w-sm leading-relaxed">
                  {currentTheme.copy.footTag}
                </p>
              </div>
              <div className="contact flex flex-col gap-2 text-xs md:text-sm font-semibold font-accent-custom text-[var(--text)]">
                <a
                  href="mailto:info@icebrkr.one"
                  className="flex items-center gap-2 hover:opacity-80 transition-opacity"
                >
                  <span className="text-[var(--a3)]">✉</span> info@icebrkr.one
                </a>
                <a
                  href="https://www.icebrkr.one"
                  className="flex items-center gap-2 hover:opacity-80 transition-opacity"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="text-[var(--a3)]">🌐</span> www.icebrkr.one
                </a>
              </div>
            </div>
          </footer>
        </div>
      )}

      {/* Early Access Modal */}
      {isModalOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-fade-in"
          style={{
            "--bg": currentTheme.colors.bg,
            "--bg2": currentTheme.colors.bg2,
            "--surface": currentTheme.colors.surface,
            "--text": currentTheme.colors.text,
            "--dim": currentTheme.colors.dim,
            "--border": currentTheme.colors.border,
            "--a1": currentTheme.colors.a1,
            "--a2": currentTheme.colors.a2,
            "--a3": currentTheme.colors.a3,
            "--fdisplay": currentTheme.fonts.display,
            "--fbody": currentTheme.fonts.body,
            "--faccent": currentTheme.fonts.accent,
            "--glow": currentTheme.glow,
          } as React.CSSProperties}
        >
          <div className="relative max-w-md w-full mx-4 rounded-xl p-[5px] overflow-hidden shadow-2xl bg-[var(--surface)] border border-[var(--border)] font-body-custom">
            
            {/* Spinning gradient border effect for Neon/Feed/Blended eras */}
            {currentTheme.id !== "analog" && (
              <div 
                className="absolute inset-[-150%] animate-[spin_3s_linear_infinite] -z-10" 
                style={{
                  background: `conic-gradient(from 0deg, var(--a1), var(--a2), var(--a3), var(--surface), var(--a1))`
                }}
              />
            )}

            <div className="bg-[var(--surface)] rounded-[10px] p-6 sm:p-8 relative z-10 text-[var(--text)]">
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-4 right-4 text-[var(--dim)] hover:text-[var(--text)] bg-transparent border-none cursor-pointer p-2 z-20"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <h2 className="text-2xl font-bold mb-2 font-display-custom tracking-tight text-[var(--text)]">
                Early Access
              </h2>
              <p className="text-[var(--dim)] mb-6 text-xs sm:text-sm font-medium">
                Join the waitlist for exclusive early access to icebrkr.
              </p>

              <form onSubmit={handleEarlyAccessSubmit} className="flex flex-col gap-4">
                <div>
                  <label htmlFor="name" className="block text-xs font-semibold uppercase tracking-wider text-[var(--dim)] font-accent-custom mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-2 border border-[var(--border)] bg-[var(--bg2)] text-[var(--text)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--a1)] focus:border-transparent text-sm font-medium animate-none"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wider text-[var(--dim)] font-accent-custom mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-2 border border-[var(--border)] bg-[var(--bg2)] text-[var(--text)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--a1)] focus:border-transparent text-sm font-medium animate-none"
                    placeholder="john@example.com"
                  />
                </div>

                {submitMessage && (
                  <div className={`p-3 rounded-lg text-xs font-semibold ${
                    submitStatus === "success" 
                      ? "bg-green-500/10 text-green-500 border border-green-500/20" 
                      : "bg-red-500/10 text-red-500 border border-red-500/20"
                  }`}>
                    {submitMessage}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 rounded-lg bg-[var(--a1)] text-white font-bold text-sm hover:translate-y-[-1px] transition-all cursor-pointer shadow-[var(--glow)] border-none disabled:opacity-75"
                >
                  {isSubmitting ? "Submitting..." : "Sign Up Now"}
                </button>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* Floating Toast Notification */}
      <div
        className={`fixed bottom-6 left-1/2 -translate-x-1/2 p-3.5 px-6 rounded-xl border font-accent-custom font-semibold text-sm shadow-2xl transition-all duration-300 z-50 flex items-center gap-2`}
        style={{
          backgroundColor: currentTheme.colors.surface,
          color: currentTheme.colors.text,
          borderColor: currentTheme.colors.border,
          transform: showToast ? "translate(-50%, 0)" : "translate(-50%, 30px)",
          opacity: showToast ? 1 : 0,
          pointerEvents: showToast ? "auto" : "none"
        }}
      >
        <span className="text-[var(--a3)]">✓</span> {toastText}
      </div>
    </div>
  );
}
