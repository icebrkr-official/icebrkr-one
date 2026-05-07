'use client';
import { useEffect, useRef, useState } from 'react';

/* ─────────────────────────────────────────────
   ALL DATA
───────────────────────────────────────────────*/
const modules = [
  {
    id: 'aipa', icon: '🧠', name: 'AIPA', subtitle: 'Personal AI Chief of Staff',
    color: '#0D47A1', colorB: '#1976D2', textColor: '#fff',
    desc: "AIPA is your proactive AI life manager — briefing you every morning, defending your deep work, managing routine communications, and prioritising what matters. Think of it as a Chief of Staff that never sleeps and never shares your data.",
    features: [
      { icon: '🔔', text: 'No-touch audio morning briefing: schedule, weather, child health status, PE days — under 90 seconds' },
      { icon: '🛡', text: 'Deep Work Guardian: carves and defends two 45–90min uninterrupted blocks daily, auto-declines low-priority meetings' },
      { icon: '✉️', text: 'Auto-responds to non-urgent messages with holding messages during focus blocks' },
      { icon: '📊', text: 'Proactively flags document expiry, approaching deadlines, and schedule conflicts' },
      { icon: '🎤', text: 'Full voice command — every action achievable without touching the screen' },
    ],
    tech: ['On-Device SLM', 'QLoRA Adapter', 'Voice APIs', 'Calendar Sync', 'UBTS Stage 1-3'],
    privacy: "AIPA processes all personal data on-device. Your calendar, messages, and priorities never reach any cloud server — not even icebrkr's. The UBTS adapter fine-tunes AIPA to your patterns without sending raw data anywhere.",
    privacyBg: '#EFF6FF', category: 'COMPASS MODULE',
  },
  {
    id: 'health', icon: '❤️', name: 'IB-Health', subtitle: 'Private Wellness Intelligence',
    color: '#1B5E20', colorB: '#388E3C', textColor: '#fff',
    desc: "Private health tracking that stays entirely on your device. IB-Health monitors wellness patterns, sleep quality, and family health data — giving meaningful insights without surrendering your most intimate information to any third-party health platform.",
    features: [
      { icon: '😴', text: "Sleep quality monitoring feeds into AIPA morning briefing (Leo had a restless night → adjusted tone)" },
      { icon: '👨‍👩‍👧', text: "Per-family-member health profiles — children's data has zero cloud exposure under any condition" },
      { icon: '📊', text: 'Mood and energy pattern tracking — Journal AI adapts prompts based on weekly health history' },
      { icon: '💊', text: 'Medication reminders with voice alerts and optional family notification (opt-in)' },
      { icon: '🆘', text: 'Emergency SOS card always visible — integrated with IB-Connect for rapid family alerts' },
    ],
    tech: ['On-Device Processing', 'HealthKit/Google Fit', 'Encrypted Local DB', 'Family Profiles', 'Zero Cloud Sync'],
    privacy: "Health data is the most sensitive category under EU AI Act and GDPR. IB-Health stores all records in an AES-256-GCM local vault. icebrkr has zero access. Data cannot be subpoenaed from our servers because it simply isn't there.",
    privacyBg: '#F0FDF4', category: 'COMPASS MODULE',
  },
  {
    id: 'connect', icon: '💬', name: 'IB-Connect', subtitle: 'Privacy-first Messaging',
    color: '#004D40', colorB: '#00796B', textColor: '#fff',
    desc: "End-to-end encrypted communications with AI intelligence layered on top — without any of that intelligence leaking back to a server. IB-Connect summarises missed group chats, translates in real-time, and bridges cultural gaps — all on-device.",
    features: [
      { icon: '📋', text: 'Group chat digest: 200 unread messages summarised in 10 seconds. Mentions always elevated to top.' },
      { icon: '🌍', text: 'Real-time translation via on-device OCR — 50+ languages, signs, menus, and speech. Works fully offline.' },
      { icon: '🤝', text: 'Cultural sensitivity hints during video calls: greeting customs, eye contact norms, hierarchy signals' },
      { icon: '🔇', text: 'Scam and fraud detection on all incoming calls and messages — proactive alert overlay' },
      { icon: '📞', text: 'Real-time voice call transcription for hearing-impaired users — subtitle-first mode' },
    ],
    tech: ['E2E Encryption', 'On-Device NLP', 'OCR Camera API', 'WebRTC', 'Offline Language Packs'],
    privacy: "IB-Connect uses zero-knowledge end-to-end encryption. Messages are encrypted on your device before transmission and decrypted only on the recipient's device. No message content ever touches icebrkr's infrastructure.",
    privacyBg: '#F0FDFA', category: 'COMPASS MODULE',
  },
  {
    id: 'journal', icon: '📔', name: 'Journal AI', subtitle: 'Adaptive Life Journal',
    color: '#4A148C', colorB: '#7B1FA2', textColor: '#fff',
    desc: "An AI-guided journal that adapts to your emotional patterns, never repeats the same prompt, and offers evidence-based micro-actions when you're overwhelmed. Everything you write is zero-knowledge encrypted — not readable by icebrkr or any third party.",
    features: [
      { icon: '❓', text: "Adaptive questions based on week's mood history — the prompt evolves with you, never repetitive" },
      { icon: '🧘', text: 'Lunchtime emotional reset: 3-minute guided check-in before afternoon meetings' },
      { icon: '🎯', text: 'If overwhelmed, offers specific micro-actions: "4-minute walk before 1pm meeting"' },
      { icon: '📈', text: 'Wellbeing score tracked over time — correlated with IB-Health data for holistic view' },
      { icon: '🎓', text: 'Student exam prep mode: AIPA generates personalised revision cards for any subject' },
    ],
    tech: ['On-Device Inference', 'Differential Privacy ε=0.1', 'Zero-Knowledge Vault', 'Mood ML', 'UBTS Adapter'],
    privacy: "Journal entries are encrypted with AES-256-GCM using a key derived from your biometric or PIN. Even if a device is seized, journal content cannot be read without the key. icebrkr has zero access under any legal scenario.",
    privacyBg: '#F5F3FF', category: 'COMPASS MODULE',
  },
  {
    id: 'vault', icon: '🔐', name: 'Private Vault', subtitle: 'Documents & Identity',
    color: '#B71C1C', colorB: '#D32F2F', textColor: '#fff',
    desc: "The panic button you never have to panic about. Private Vault stores every critical document — passports, medical certificates, insurance, children's records — tagged and searchable, retrievable in under 10 seconds with a one-tap time-limited share link.",
    features: [
      { icon: '🗂', text: 'Documents categorised with nested tags: Leo → Medical → Vaccination. Searchable by voice.' },
      { icon: '🔗', text: 'One-click time-limited share link — shares one document, never reveals vault contents' },
      { icon: '⏰', text: 'AIPA proactively alerts when documents expire: school insurance, passport, medical certificates' },
      { icon: '⚡', text: "Document retrieval in under 10 seconds — crèche nurse calls, you're ready in 5" },
      { icon: '🆔', text: 'Identity document safe storage with AES-256-GCM — biometric-keyed on supported devices' },
    ],
    tech: ['AES-256-GCM', 'PBKDF2 100K iterations', 'Biometric KeyStore', 'OCR Scan', 'Time-Limited URLs'],
    privacy: "Private Vault uses military-grade AES-256-GCM encryption keyed to your biometric. PBKDF2 with 100,000 iterations prevents brute-force attacks. Shared links auto-expire. Nothing is stored in icebrkr cloud.",
    privacyBg: '#FFF5F5', category: 'COMPASS MODULE',
  },
  {
    id: 'smarthome', icon: '🏠', name: 'Smart Home', subtitle: 'AI Home Intelligence',
    color: '#1A237E', colorB: '#3949AB', textColor: '#fff',
    desc: "A genuinely smart home powered by local AI — no vendor lock-in, no data harvested by appliance manufacturers, no cloud dependency. Smart Home integrates with existing devices while keeping all intelligence on your private network.",
    features: [
      { icon: '📡', text: 'Local processing only — no smart home data leaves your private network at any stage' },
      { icon: '🔌', text: 'No vendor lock-in: works with existing devices across ecosystems via local API bridges' },
      { icon: '🤖', text: 'AIPA integration: "AIPA, lock the house" — voice commands processed locally' },
      { icon: '⚡', text: 'Energy optimisation based on occupancy patterns and utility pricing — on-device ML' },
      { icon: '🎛', text: 'Privacy-first automation routines with no third-party cloud requirement' },
    ],
    tech: ['Local LAN Only', 'Matter Protocol', 'Zigbee/Z-Wave', 'MQTT Broker', 'AIPA Voice Integration'],
    privacy: "Smart Home processes all automation, presence detection, and energy data on your local network. Icebrkr has no access to your home's activity patterns — ever.",
    privacyBg: '#EFF6FF', category: 'COMPASS MODULE',
  },
  {
    id: 'fridge', icon: '🧊', name: 'Smart Fridge', subtitle: 'AI Nutrition & Inventory',
    color: '#006064', colorB: '#00838F', textColor: '#fff',
    desc: "The world's first zero-knowledge smart refrigerator system. Biometric recognition per family member triggers personalised LED allergen guidance. RFID containers track every item. 6 independent temperature zones. All encrypted on-device.",
    features: [
      { icon: '👤', text: 'Facial recognition per family member: Green (safe) · Yellow (dietary conflict) · Red (allergen) LED guidance' },
      { icon: '📦', text: 'RFID smart containers (ISO 15693, 50+ simultaneous reads): expiry, allergens, nutritional data' },
      { icon: '🌡', text: '6 independent temperature zones (−18°C to +6°C): produce, proteins, dairy, meals, beverages, freezer' },
      { icon: '🛒', text: 'Predictive expiry alerts + automatic shopping list management via AIPA integration' },
      { icon: '🔑', text: 'AES-256-GCM biometric-keyed vault: health and dietary data never leaves the device' },
    ],
    tech: ['ARM quad-core 1.5GHz', '13.56MHz RFID + UHF', '3D RGB-D Camera', 'AES-256-GCM', 'Homomorphic Biometric'],
    privacy: "Patent filed December 2025. Biometric data is stored using homomorphic encryption — the system can verify identity without ever decrypting the raw biometric. Zero cloud transmission of biometric data.",
    privacyBg: '#F0FDFA', category: 'FUTURE HARDWARE',
  },
  {
    id: 'closet', icon: '👔', name: 'Smart Closet', subtitle: 'AI Style & Wardrobe',
    color: '#E65100', colorB: '#F57C00', textColor: '#fff',
    desc: "An AI stylist that knows your actual wardrobe — weather, calendar, and body — without ever uploading your photos to a cloud server. AR virtual try-on, capsule wardrobe analysis, sustainable fashion scoring, and family bag automation.",
    features: [
      { icon: '🌤', text: 'Weather + calendar-aware outfit suggestions from your real wardrobe — specific items, not generic advice' },
      { icon: '📱', text: 'AR virtual try-on via device camera — rendered on-device, no image ever sent to a server' },
      { icon: '📦', text: 'RFID wardrobe inventory — tracks every item, cost-per-wear, and items unworn after 90 days' },
      { icon: '🎒', text: 'Family bag automation: crèche bag, PE kit, school supplies — reset every morning automatically' },
      { icon: '♻️', text: 'Sustainable fashion scoring: carbon footprint per outfit, longevity tracking, capsule wardrobe builder' },
    ],
    tech: ['RFID Tags', 'ARKit/ARCore', 'On-Device CV', 'Fashion ML', 'Calendar Sync'],
    privacy: "Photos for AR try-on are processed in real-time on-device and never stored or transmitted. Your wardrobe inventory and body data are encrypted locally. No fashion platform gets access to your style data.",
    privacyBg: '#FFF7ED', category: 'COMPASS MODULE',
  },
  {
    id: 'ibmap', icon: '📍', name: 'IB-Map', subtitle: 'Private Navigation',
    color: '#33691E', colorB: '#558B2F', textColor: '#fff',
    desc: "Navigation and discovery that doesn't track your location. IB-Map learns your routines, optimises your daily movements, handles airport intelligence, and works offline — all without surrendering your location history to any third party.",
    features: [
      { icon: '🗺', text: 'Route calculated on-device — no location history shared with third-party mapping services ever' },
      { icon: '✈️', text: 'Flight status auto-detected from email: gate changes, check-in reminders, departure alerts proactively pushed' },
      { icon: '🏙', text: 'Daily route optimised for school runs: crèche vs school opening times + live traffic + personal deadline' },
      { icon: '🌐', text: 'Destination + dates + preferences → full day-by-day travel itinerary, shareable without account' },
      { icon: '📶', text: 'Fully offline maps with downloadable packs — works without internet in Autonomous UBTS stage' },
    ],
    tech: ['On-Device GPS', 'Offline Map Tiles', 'OSRM Routing', 'Email Parser', 'UBTS Location Adapter'],
    privacy: "IB-Map processes routing and place data on-device using open map data cached locally. No route is ever transmitted to icebrkr or any mapping vendor. Location history stays entirely on your device.",
    privacyBg: '#F0FDF4', category: 'COMPASS MODULE',
  },
];

const archSegs = [
  {
    id: 'zerok', icon: '🛡', name: 'Zero-Knowledge Architecture',
    color: '#1A237E', colorB: '#283593', textColor: '#fff',
    a1: -90, a2: 0,
    desc: "The foundational principle: icebrkr has zero access to personal data at the infrastructure level. Not by policy — by architecture. Data cannot be extracted because it was never centralised.",
    features: [
      { icon: '🔐', text: 'AES-256-GCM encryption for all stored data — keyed to user biometric or PIN, not to icebrkr' },
      { icon: '🧬', text: 'Homomorphic encryption for biometric data — verification without decryption' },
      { icon: '🌐', text: 'TLS 1.3 + WPA3 for all network transmission — zero plaintext at any hop' },
      { icon: '🔑', text: 'PBKDF2 with 100,000 iterations for key derivation — brute-force resistant' },
      { icon: '📵', text: 'Differential privacy ε=0.1 for any aggregated telemetry — mathematically anonymised' },
    ],
    tech: ['AES-256-GCM', 'TLS 1.3', 'WPA3', 'PBKDF2', 'Homomorphic Encryption', 'Differential Privacy'],
    privacy: "Zero-knowledge is an architectural guarantee, not a policy claim. Even if icebrkr were subpoenaed, there is no decryptable user data to hand over — it doesn't exist on our infrastructure.",
    privacyBg: '#EFF6FF', category: 'CORE ARCHITECTURE',
  },
  {
    id: 'slm', icon: '⚡', name: 'On-Device SLM & UBTS',
    color: '#4A148C', colorB: '#6A1B9A', textColor: '#fff',
    a1: 0, a2: 90,
    desc: "UBTS (User Behaviour Training System) — Patent Pending, Dec 2025. The mechanism that enables personalised AI without raw data leaving the device. Three-stage evolution from cloud-assisted to fully autonomous.",
    features: [
      { icon: '🔄', text: 'Stage 1 GUIDED (1-3 months): 80% cloud LLM — $5.50/user/month. Builds adapter baseline.' },
      { icon: '⚡', text: 'Stage 2 HYBRID (3-6 months): SLM majority, LLM for edge cases — $2.50/user/month' },
      { icon: '🏆', text: 'Stage 3 AUTONOMOUS (6+ months): 100% on-device, fully offline, $1.00/user/month' },
      { icon: '🧩', text: 'QLoRA r=8 user adapters (50-100MB) + r=16 persona adapters (200MB) — update via OTA' },
      { icon: '📊', text: 'UBTS Independence Score: (slm_success×0.60 + slm_usage×0.20 + avg_quality×0.20)×100' },
    ],
    tech: ['Mistral 7B', 'Llama 3.1 8B', 'QLoRA r=8/16', 'llama.cpp GGUF 4-bit', 'PyTorch 2.1', 'vLLM 0.2.7'],
    privacy: "UBTS personalises the model using on-device behavioural signals only. Raw conversation content never leaves the device. Adapters are trained locally — the model learns your patterns without transmitting them.",
    privacyBg: '#F5F3FF', category: 'CORE ARCHITECTURE',
  },
  {
    id: 'cloud', icon: '🇨🇭', name: 'Swiss Cloud Infrastructure',
    color: '#006064', colorB: '#00838F', textColor: '#fff',
    a1: 90, a2: 180,
    desc: "100% icebrkr-owned Swiss servers. Not AWS. Not Google Cloud. Not Azure. Self-hosted infrastructure in Switzerland, compliant with nLPD by physical jurisdiction and architecture — not by data processing agreements.",
    features: [
      { icon: '🖥', text: 'K3s + Supabase + MinIO + HashiCorp Vault + Traefik — full self-hosted stack, zero third-party cloud' },
      { icon: '📍', text: 'Swiss jurisdiction: data physically located in Switzerland under nLPD and Swiss federal law' },
      { icon: '🔧', text: '19 SRM engineers + Technomark delivery — milestone-locked contracts via VAIZ governance' },
      { icon: '⚡', text: 'Sprint governance: Jan 2026 core ✓ · Mar 2026 health/journal ✓ · Jul 2026 public go-live' },
      { icon: '📊', text: 'Annual ops run-rate: CHF 820K/year · CHF 68,333/month — lean, owned infrastructure' },
    ],
    tech: ['K3s', 'Supabase', 'MinIO', 'HashiCorp Vault', 'Traefik', 'PostgreSQL', 'Redis'],
    privacy: "Physical Swiss jurisdiction means Swiss courts govern data access requests — not FISA or US cloud provider terms of service. icebrkr's Swiss entity means privacy law protections are sovereign.",
    privacyBg: '#F0FDFA', category: 'INFRASTRUCTURE',
  },
  {
    id: 'compliance', icon: '⚖️', name: 'Multi-Jurisdiction Compliance',
    color: '#1B5E20', colorB: '#2E7D32', textColor: '#fff',
    a1: 180, a2: 270,
    desc: "icebrkr is pre-compliant with EU AI Act before its August 2026 enforcement date — by architecture, not by remediation. Six jurisdictions covered from day one. Competitors cannot become compliant by policy change alone.",
    features: [
      { icon: '🇪🇺', text: 'EU AI Act (Aug 2026 full force): High-risk AI obligations, €35M or 7% revenue penalty for non-compliance' },
      { icon: '🇨🇭', text: 'Swiss nLPD (live Sep 2023): Architecture exceeds requirements — compliant by design' },
      { icon: '🇮🇳', text: 'India DPDPA 2023 + CDSCO SaMD: Covers IB-Health medical data requirements' },
      { icon: '🇬🇧', text: 'UK GDPR + DPA 2018: Post-Brexit independent compliance maintained' },
      { icon: '🇺🇸', text: 'US CCPA/CPRA + SOC2 in preparation: Consumer privacy rights fully supported' },
    ],
    tech: ['EU AI Act', 'Swiss nLPD', 'GDPR', 'India DPDPA', 'UK GDPR', 'CCPA/CPRA', 'SOC2 Prep'],
    privacy: "Compliance moat: US-cloud AI (OpenAI, Google, Meta) cannot become EU AI Act compliant by August 2026 without rebuilding core architecture. icebrkr is already inside the boundary. This is structural, not procedural.",
    privacyBg: '#F0FDF4', category: 'COMPLIANCE LAYER',
  },
];

/* ─────────────────────────────────────────────
   TYPES
───────────────────────────────────────────────*/
type ModalData = {
  icon: string; name: string; subtitle?: string; category: string;
  color?: string; desc?: string; features?: { icon: string; text: string }[];
  tech?: string[]; privacy?: string; privacyBg?: string;
};

/* ─────────────────────────────────────────────
   HELPERS
───────────────────────────────────────────────*/
const toRad = (d: number) => (d * Math.PI) / 180;
const CX = 350, CY = 350;
const OR1 = 225, OR2 = 340;
const AR1 = 155, AR2 = 218;
const GAP = 1.2;

function arcPath(cx: number, cy: number, r1: number, r2: number, a1: number, a2: number) {
  const s = toRad(a1 + GAP / 2), e = toRad(a2 - GAP / 2);
  const la = a2 - a1 > 180 ? 1 : 0;
  const p = (r: number, a: number) => ({ x: +(cx + r * Math.cos(a)).toFixed(4), y: +(cy + r * Math.sin(a)).toFixed(4) });
  const [p1, p2, p3, p4] = [p(r1, s), p(r2, s), p(r2, e), p(r1, e)];
  return `M${p1.x} ${p1.y} L${p2.x} ${p2.y} A${r2} ${r2} 0 ${la} 1 ${p3.x} ${p3.y} L${p4.x} ${p4.y} A${r1} ${r1} 0 ${la} 0 ${p1.x} ${p1.y}Z`;
}

function segMid(cx: number, cy: number, r: number, a1: number, a2: number) {
  const a = toRad((a1 + a2) / 2);
  return { x: +(cx + r * Math.cos(a)).toFixed(4), y: +(cy + r * Math.sin(a)).toFixed(4), a: (a1 + a2) / 2 };
}

/* ─────────────────────────────────────────────
   MODAL COMPONENT (Inner)
───────────────────────────────────────────────*/
function Modal({ data, onClose }: { data: ModalData | null; onClose: () => void }) {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [onClose]);

  if (!data) return null;

  const accent = data.color || '#E8302A';

  return (
    <div
      className="absolute inset-0 z-[200] flex items-center justify-center bg-black/60 backdrop-blur-sm rounded-2xl overflow-hidden"
      onClick={onClose}
      style={{ animation: 'fadeInOverlay .2s ease' }}
    >
      <div
        className="compass-modal bg-white rounded-2xl w-[92%] max-w-[560px] max-h-[90%] overflow-y-auto shadow-2xl relative"
        onClick={e => e.stopPropagation()}
        style={{ animation: 'mslide .3s cubic-bezier(.22,.1,.07,1)' }}
      >
        <div className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl" style={{ background: accent }} />
        <div className="px-7 pt-8 pb-5 relative" style={{ background: `linear-gradient(135deg, ${accent}10 0%, transparent 60%)` }}>
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-base border-none cursor-pointer transition-colors"
          >✕</button>
          <div className="text-4xl mb-2">{data.icon}</div>
          <div className="text-[10px] font-bold uppercase tracking-[1.5px] mb-1" style={{ color: accent }}>{data.category}</div>
          <div className="font-serif text-[26px] tracking-tight leading-tight text-brand-ink">{data.name}</div>
          {data.subtitle && <div className="text-[13px] text-slate-500 mt-1">{data.subtitle}</div>}
        </div>
        <div className="px-7 pb-7">
          {data.desc && <p className="text-[14px] text-slate-700 leading-relaxed mb-4">{data.desc}</p>}
          {data.features && data.features.length > 0 && (
            <>
              <div className="text-[10px] font-bold uppercase tracking-[1.2px] text-slate-400 mb-3 pt-4 border-t border-slate-100">Key Features</div>
              <ul className="flex flex-col gap-2 list-none p-0 m-0">
                {data.features.map((f, i) => (
                  <li key={i} className="flex gap-3 text-[13px] text-slate-800 leading-relaxed">
                    <span className="w-6 h-6 rounded-md flex items-center justify-center text-[11px] flex-shrink-0 mt-0.5" style={{ background: `${accent}20`, color: accent }}>{f.icon}</span>
                    <span>{f.text}</span>
                  </li>
                ))}
              </ul>
            </>
          )}
          {data.tech && data.tech.length > 0 && (
            <>
              <div className="text-[10px] font-bold uppercase tracking-[1.2px] text-slate-400 mb-3 mt-5 pt-4 border-t border-slate-100">Tech Stack</div>
              <div className="flex flex-wrap gap-2">
                {data.tech.map((t, i) => (
                  <span key={i} className="px-3 py-1 rounded-full text-[11px] font-semibold bg-slate-100 text-slate-600 border border-slate-200">{t}</span>
                ))}
              </div>
            </>
          )}
          {data.privacy && (
            <div className="rounded-xl p-4 mt-5 flex gap-3" style={{ background: data.privacyBg || '#F0FDF4' }}>
              <span className="text-xl flex-shrink-0">🛡</span>
              <p className="text-[12px] text-slate-700 leading-relaxed">
                <strong className="text-slate-900">Privacy guarantee: </strong>{data.privacy}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   MAIN POPUP COMPONENT
───────────────────────────────────────────────*/
export default function CompassPopup({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [modal, setModal] = useState<ModalData | null>(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      setModal(null);
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape' && !modal) onClose(); };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [onClose, modal]);

  if (!isOpen) return null;

  const openModal = (data: ModalData) => setModal(data);
  const closeInnerModal = () => setModal(null);

  const segStep = 360 / modules.length;
  const segPaths = modules.map((m, i) => {
    const a1 = -90 + i * segStep, a2 = a1 + segStep;
    const mid = segMid(CX, CY, (OR1 + OR2) / 2, a1, a2);
    return { ...m, a1, a2, mid, path: arcPath(CX, CY, OR1, OR2, a1, a2) };
  });

  const archPaths = archSegs.map(a => ({
    ...a,
    path: arcPath(CX, CY, AR1, AR2, a.a1, a.a2),
    mid: segMid(CX, CY, (AR1 + AR2) / 2, a.a1, a.a2),
  }));

  return (
    <div 
      className="fixed inset-0 z-[150] overflow-y-auto overflow-x-hidden bg-[#0F1923]/90 backdrop-blur-md" 
      onClick={onClose} 
      style={{ animation: 'fadeInOverlay .3s ease forwards' }}
    >
      <div className="min-h-screen w-full flex items-center justify-center p-4 py-12">
        <div 
          className="relative flex flex-col items-center w-full max-w-[800px]" 
          onClick={e => e.stopPropagation()} 
          style={{ animation: 'compassPopupSlide .4s cubic-bezier(.22,.1,.07,1) forwards' }}
        >
          <button 
            onClick={onClose} 
            className="absolute -top-10 right-2 z-[160] w-10 h-10 bg-white/10 hover:bg-white/20 text-white rounded-full flex items-center justify-center cursor-pointer border-none transition-colors"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6L6 18M6 6l12 12"/></svg>
          </button>

          <div className="compass-wheel-container w-full max-w-[700px] aspect-square relative">
          <svg viewBox="0 0 700 700" xmlns="http://www.w3.org/2000/svg" className="w-full h-full overflow-visible" style={{ filter: 'drop-shadow(0 12px 40px rgba(0,0,0,0.3))' }}>
            <defs>
              {segPaths.map(m => (
                <linearGradient key={m.id} id={`grad_${m.id}`} x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor={m.color} />
                  <stop offset="100%" stopColor={m.colorB} />
                </linearGradient>
              ))}
              {archPaths.map(a => (
                <linearGradient key={a.id} id={`agrad_${a.id}`} x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor={a.color} />
                  <stop offset="100%" stopColor={a.colorB} />
                </linearGradient>
              ))}
              <filter id="centerShadow"><feDropShadow dx="0" dy="2" stdDeviation="8" floodColor="rgba(0,0,0,0.12)" /></filter>
            </defs>
            {segPaths.map(m => {
              const mid = m.mid, rot = mid.a + 90;
              const nameWords = m.name.split(' '), hasTwoLines = nameWords.length > 1;
              const iconY = hasTwoLines ? -24 : -20, name1Y = hasTwoLines ? -8 : -2, name2Y = hasTwoLines ? 5 : undefined, subY = hasTwoLines ? 18 : 12;
              const shortSub = m.subtitle.length > 22 ? m.subtitle.slice(0, 20) + '…' : m.subtitle;
              return (
                <g key={m.id} className="compass-seg-group" onClick={() => openModal(m)} style={{ cursor: 'pointer' }}>
                  <path d={m.path} fill={`url(#grad_${m.id})`} className="compass-seg" style={{ transformOrigin: '350px 350px' }} />
                  <g transform={`translate(${mid.x},${mid.y}) rotate(${rot})`} style={{ pointerEvents: 'none' }}>
                    <text x="0" y={iconY} textAnchor="middle" dominantBaseline="middle" fontSize="18">{m.icon}</text>
                    {hasTwoLines ? (
                      <>
                        <text x="0" y={name1Y} textAnchor="middle" dominantBaseline="middle" fontFamily="DM Sans,sans-serif" fontSize="11" fontWeight="800" fill={m.textColor}>{nameWords[0]}</text>
                        <text x="0" y={name2Y} textAnchor="middle" dominantBaseline="middle" fontFamily="DM Sans,sans-serif" fontSize="11" fontWeight="800" fill={m.textColor}>{nameWords.slice(1).join(' ')}</text>
                      </>
                    ) : (
                      <text x="0" y={name1Y} textAnchor="middle" dominantBaseline="middle" fontFamily="DM Sans,sans-serif" fontSize="11" fontWeight="800" fill={m.textColor}>{m.name}</text>
                    )}
                    <text x="0" y={subY} textAnchor="middle" dominantBaseline="middle" fontFamily="DM Sans,sans-serif" fontSize="7" fontWeight="500" fill="rgba(255,255,255,0.65)">{shortSub}</text>
                  </g>
                </g>
              );
            })}
            {archPaths.map(a => {
              const mid = a.mid, rot = mid.a + 90;
              const nameLines = a.name.replace(' & ', ' &\n').split('\n'), hasTwoLines = nameLines.length > 1;
              const iconY = hasTwoLines ? -14 : -12, name1Y = hasTwoLines ? -2 : 4, name2Y = hasTwoLines ? 10 : undefined;
              return (
                <g key={a.id} className="compass-arch-group" onClick={() => openModal(a)} style={{ cursor: 'pointer' }}>
                  <path d={a.path} fill={`url(#agrad_${a.id})`} className="compass-arch-seg" style={{ transformOrigin: '350px 350px' }} />
                  <g transform={`translate(${mid.x},${mid.y}) rotate(${rot})`} style={{ pointerEvents: 'none' }}>
                    <text x="0" y={iconY} textAnchor="middle" dominantBaseline="middle" fontSize="13">{a.icon}</text>
                    {hasTwoLines ? (
                      <>
                        <text x="0" y={name1Y} textAnchor="middle" dominantBaseline="middle" fontFamily="DM Sans,sans-serif" fontSize="7.5" fontWeight="700" fill="rgba(255,255,255,0.9)">{nameLines[0]}</text>
                        <text x="0" y={name2Y} textAnchor="middle" dominantBaseline="middle" fontFamily="DM Sans,sans-serif" fontSize="7.5" fontWeight="700" fill="rgba(255,255,255,0.9)">{nameLines[1]}</text>
                      </>
                    ) : (
                      <text x="0" y={name1Y} textAnchor="middle" dominantBaseline="middle" fontFamily="DM Sans,sans-serif" fontSize="7.5" fontWeight="700" fill="rgba(255,255,255,0.9)">{a.name}</text>
                    )}
                  </g>
                </g>
              );
            })}
            <circle cx="350" cy="350" r="142" fill="white" filter="url(#centerShadow)" />
            <circle cx="350" cy="350" r="140" fill="white" />
            <circle cx="350" cy="350" r="140" fill="none" stroke="#E2E8F0" strokeWidth="1.5" />
            <foreignObject x="200" y="278" width="300" height="64">
              <div className="flex items-center justify-center h-full">
                <img src="/maillogo.webp" alt="icebrkr logo" style={{ height: '56px', width: 'auto', objectFit: 'contain' }} />
              </div>
            </foreignObject>
            <text x="350" y="354" textAnchor="middle" fontFamily="DM Serif Display,serif" fontSize="26" fontWeight="400" fill="#0F1923" letterSpacing="-1">COMPASS</text>
            <text x="350" y="374" textAnchor="middle" fontFamily="DM Sans,sans-serif" fontSize="9" fontWeight="700" fill="#94A3B8" letterSpacing="2.5">AI LIFE OPERATING SYSTEM</text>
            <line x1="270" y1="384" x2="430" y2="384" stroke="#E2E8F0" strokeWidth="1" />
            <text x="290" y="402" textAnchor="middle" fontFamily="DM Sans,sans-serif" fontSize="18" fontWeight="800" fill="#0F1923">9</text>
            <text x="290" y="416" textAnchor="middle" fontFamily="DM Sans,sans-serif" fontSize="9" fill="#94A3B8" fontWeight="600">MODULES</text>
            <text x="350" y="402" textAnchor="middle" fontFamily="DM Sans,sans-serif" fontSize="18" fontWeight="800" fill="#E8302A">0</text>
            <text x="350" y="416" textAnchor="middle" fontFamily="DM Sans,sans-serif" fontSize="9" fill="#94A3B8" fontWeight="600">EGRESS</text>
            <text x="410" y="402" textAnchor="middle" fontFamily="DM Sans,sans-serif" fontSize="18" fontWeight="800" fill="#0F1923">25+</text>
            <text x="410" y="416" textAnchor="middle" fontFamily="DM Sans,sans-serif" fontSize="9" fill="#94A3B8" fontWeight="600">LANGUAGES</text>
            <rect x="260" y="430" width="180" height="24" rx="12" fill="#F0FDF4" stroke="#BBF7D0" strokeWidth="1" />
            <circle cx="276" cy="442" r="4" fill="#27AE60" />
            <text x="356" y="446" textAnchor="middle" fontFamily="DM Sans,sans-serif" fontSize="9" fontWeight="700" fill="#166534" letterSpacing=".5">PRIVACY BY ARCHITECTURE</text>
          </svg>
        </div>

        <div className="compass-legend mt-8 md:mt-0 flex flex-wrap gap-2 justify-center max-w-[700px]">
          {modules.map(m => (
            <button key={m.id} onClick={() => openModal(m)} className="compass-legend-item" style={{ '--legend-color': m.color } as React.CSSProperties}>
              <span className="compass-legend-dot" style={{ background: m.color }} />
              {m.icon} {m.name}
            </button>
          ))}
        </div>

        {modal && <Modal data={modal} onClose={closeInnerModal} />}
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700;800&family=DM+Serif+Display:ital@0;1&display=swap');
        @keyframes mslide { from { opacity: 0; transform: scale(.92) translateY(20px); } to { opacity: 1; transform: none; } }
        @keyframes fadeInOverlay { from { opacity: 0; } to { opacity: 1; } }
        @keyframes compassPopupSlide { from { opacity: 0; transform: scale(.95) translateY(10px); } to { opacity: 1; transform: none; } }
        .compass-seg { transition: transform .25s cubic-bezier(.22,.1,.07,1), filter .25s; transform-origin: 350px 350px; }
        .compass-seg-group:hover .compass-seg { transform: scale(1.045); filter: brightness(1.12) drop-shadow(0 4px 16px rgba(0,0,0,.3)); }
        .compass-arch-seg { transition: transform .25s, filter .25s; transform-origin: 350px 350px; }
        .compass-arch-group:hover .compass-arch-seg { transform: scale(1.03); filter: brightness(1.1); }
        .compass-legend-item { display: flex; align-items: center; gap: 5px; font-size: 11px; font-weight: 600; color: rgba(255,255,255,0.8); cursor: pointer; padding: 6px 12px; border-radius: 6px; transition: background .15s; background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1); font-family: 'DM Sans', sans-serif; }
        .compass-legend-item:hover { background: rgba(255,255,255,0.15); color: #fff; border-color: rgba(255,255,255,0.2); }
        .compass-legend-dot { width: 10px; height: 10px; border-radius: 2px; flex-shrink: 0; }
        .compass-modal::-webkit-scrollbar { width: 5px; }
        .compass-modal::-webkit-scrollbar-track { background: #F8FAFC; }
        .compass-modal::-webkit-scrollbar-thumb { background: #CBD5E1; border-radius: 3px; }
      `}</style>
    </div>
  );
}
