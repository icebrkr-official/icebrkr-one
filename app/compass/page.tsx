'use client';
import { useEffect, useRef, useState } from 'react';
import Navbar from '../components/Navbar';

/* ─────────────────────────────────────────────
   ALL DATA (mirrored 1-to-1 from the HTML file)
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
    id: 'fridge', icon: '🧊', name: 'Smart Fridge', subtitle: 'AI Nutrition & Inventory · Patent Filed Dec 2025',
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
    privacyBg: '#F0FDFA', category: 'FUTURE HARDWARE · PATENT PENDING',
  },
  {
    id: 'closet', icon: '👔', name: 'Smart Closet', subtitle: 'AI Style & Wardrobe Intelligence',
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
    privacyBg: '#FFF7ED', category: 'COMPASS MODULE · POST-LAUNCH',
  },
  {
    id: 'ibmap', icon: '📍', name: 'IB-Map', subtitle: 'Private Navigation & Places',
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
    privacyBg: '#F5F3FF', category: 'CORE ARCHITECTURE · PATENT PENDING',
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

const sideData: Record<string, Record<string, any>> = {
  stack: {
    mistral: { icon: '🤖', name: 'Mistral 7B', subtitle: 'Base SLM model', category: 'BASE MODEL', color: '#92400E', privacyBg: '#FEF3C7', desc: 'Mistral 7B is one of two foundation models powering icebrkr COMPASS. Running via llama.cpp with GGUF 4-bit quantisation, it enables efficient on-device inference with sub-2 second latency on modern mobile hardware.', features: [{ icon: '⚡', text: '15–30 tokens/sec on-device — fast enough for real-time AIPA responses' }, { icon: '📦', text: '~4.5GB total storage footprint for base model + adapters' }, { icon: '🔧', text: 'QLoRA fine-tuning support for persona and user adapters' }], tech: ['GGUF 4-bit', 'llama.cpp', 'QLoRA'], privacy: 'Mistral 7B runs entirely on-device. No API calls to Mistral AI servers during inference. icebrkr holds no commercial dependency on Mistral — the model weights are self-hosted.' },
    llama: { icon: '🦙', name: 'Llama 3.1 8B', subtitle: 'Multi-language model', category: 'BASE MODEL', color: '#5B21B6', privacyBg: '#EDE9FE', desc: "Meta's Llama 3.1 8B is icebrkr's second foundation model, particularly strong for multilingual tasks across the 25+ languages COMPASS supports at launch.", features: [{ icon: '🌍', text: 'Strong multilingual performance — 18 languages at go-live, 25+ by Q1 2027' }, { icon: '🔗', text: 'Used in GUIDED stage where cloud LLM assistance is still active' }, { icon: '💾', text: 'Persona LoRA adapters: r=16, alpha=32, ~200MB per persona pack' }], tech: ['LoRA r=16', 'HuggingFace', 'vLLM 0.2.7'], privacy: 'Model weights self-hosted on icebrkr Swiss infrastructure. Zero dependency on Meta infrastructure for inference at Autonomous stage.' },
    pytorch: { icon: '🔥', name: 'PyTorch 2.1', subtitle: 'Training pipeline', category: 'TRAINING FRAMEWORK', color: '#991B1B', privacyBg: '#FEE2E2', desc: "icebrkr uses PyTorch 2.1 with HuggingFace Transformers 4.35 for the UBTS adapter training pipeline — running on icebrkr's Swiss servers, not on any cloud training service.", features: [{ icon: '🏋️', text: 'Trains user adapters locally — ~30 minutes for a full QLoRA pass on 500 personalised examples' }, { icon: '📊', text: 'Differential privacy ε=0.1 applied during training for any aggregated signals' }, { icon: '🔄', text: 'OTA adapter updates pushed to device — encrypted in transit, verified on receipt' }], tech: ['PyTorch 2.1', 'Transformers 4.35', 'PEFT', 'BitsAndBytes'], privacy: 'Training happens on icebrkr Swiss servers, not user devices, but uses only anonymised behavioural signals — never raw conversation content.' },
    llamacpp: { icon: '⚡', name: 'llama.cpp', subtitle: 'On-device inference GGUF', category: 'ON-DEVICE INFERENCE', color: '#065F46', privacyBg: '#D1FAE5', desc: "llama.cpp enables efficient transformer inference on mobile CPUs and Apple Silicon — the core runtime that makes COMPASS's Autonomous stage possible without GPU or cloud.", features: [{ icon: '📱', text: 'GGUF 4-bit quantisation: ~4.5GB footprint, runs on iPhone 12+ and Pixel 6+' }, { icon: '⚡', text: '15–30 tokens/sec on modern mobile hardware — sufficient for all AIPA response types' }, { icon: '🔋', text: 'Optimised for battery: background inference pauses when battery below 20%' }], tech: ['GGUF Q4_K_M', 'Metal/CUDA/CPU', 'ARM NEON'], privacy: 'Zero network requirement in Autonomous stage. The entire inference graph runs in a sandboxed process on the device with no system-level logging of model inputs or outputs.' },
    lancedb: { icon: '🔍', name: 'LanceDB', subtitle: 'Vector DB · RAG retrieval', category: 'VECTOR DATABASE', color: '#1E40AF', privacyBg: '#DBEAFE', desc: "LanceDB provides on-device vector storage for icebrkr's RAG (retrieval-augmented generation) pipeline — enabling COMPASS modules to retrieve relevant personal context without querying a cloud vector service.", features: [{ icon: '📚', text: 'Semantic search over personal documents, journal entries, and health records — fully local' }, { icon: '⚡', text: 'Sub-50ms retrieval latency on-device — fast enough for real-time AIPA context injection' }, { icon: '🔐', text: 'All vectors stored in encrypted local database — AES-256-GCM at rest' }], tech: ['LanceDB', 'Apache Arrow', 'HNSW Index'], privacy: 'Vector embeddings of personal content are stored locally. The embeddings cannot be reverse-engineered to recreate original content by a third party.' },
    fastapi: { icon: '⚙️', name: 'FastAPI + Redis', subtitle: 'Backend API · Caching', category: 'BACKEND API', color: '#065F46', privacyBg: '#D1FAE5', desc: "icebrkr's Swiss-hosted API layer handles authenticated sync, OTA adapter delivery, and telemetry aggregation — all within the zero-knowledge boundary.", features: [{ icon: '🔒', text: 'All endpoints require device-level JWT authentication — no unauthenticated data access' }, { icon: '🔄', text: 'Redis caching layer for OTA adapter manifest — fast delivery of model updates' }, { icon: '📊', text: 'Aggregate telemetry only: usage counts, stage transitions — no personal content ever reaches API' }], tech: ['FastAPI', 'PostgreSQL', 'Redis', 'JWT', 'TLS 1.3'], privacy: 'The API layer sees only authentication tokens and adapter version IDs. No personal content, conversation history, or behavioural data is transmitted to the API.' },
    k3s: { icon: '☸️', name: 'K3s · Kubernetes', subtitle: 'Swiss server orchestration', category: 'ORCHESTRATION', color: '#5B21B6', privacyBg: '#EDE9FE', desc: "icebrkr's Swiss server infrastructure runs on K3s — a lightweight Kubernetes distribution — providing enterprise-grade orchestration without the cost or data sovereignty risks of managed cloud platforms.", features: [{ icon: '🔧', text: 'Self-hosted Swiss data centers — physically and legally within Swiss nLPD jurisdiction' }, { icon: '⚡', text: 'Zero-downtime deployments for model updates via rolling K3s upgrade strategy' }, { icon: '📊', text: 'VAIZ sprint governance platform monitors all service health in real-time' }], tech: ['K3s', 'Helm Charts', 'Traefik Ingress', 'MinIO', 'Grafana'], privacy: "Physical Swiss infrastructure means FISA warrants and US cloud provider terms of service do not apply. Data sovereignty is guaranteed by geography, not by policy." },
    vault: { icon: '🔒', name: 'HashiCorp Vault', subtitle: 'Secrets management', category: 'SECRETS MANAGEMENT', color: '#92400E', privacyBg: '#FEF3C7', desc: "HashiCorp Vault manages all cryptographic secrets on icebrkr's Swiss infrastructure — API keys, encryption key roots, TLS certificates, and service tokens — with full audit logging.", features: [{ icon: '🔑', text: 'Dynamic secret generation: database credentials expire after each use session' }, { icon: '📝', text: 'Full audit log of every secret access — tamper-evident, write-once storage' }, { icon: '🏛', text: 'HSM-backed key storage for root encryption keys — never exposed in software' }], tech: ['HashiCorp Vault', 'HSM', 'Dynamic Secrets', 'Audit Logging'], privacy: 'Vault ensures that encryption keys used to protect user data are themselves protected by hardware security modules. Even icebrkr engineers cannot extract root keys.' },
  },
  partner: {
    technomark: { icon: '⚙️', name: 'Technomark', subtitle: 'Technology delivery · 19 engineers', category: 'TECHNOLOGY DELIVERY PARTNER', color: '#065F46', privacyBg: '#F0FDF4', desc: "Technomark is icebrkr's contracted technology delivery partner — providing the 19-person SRM engineering cohort, sprint governance via VAIZ, and milestone-locked delivery contracts.", features: [{ icon: '👥', text: '19 SRM University engineers on active sprints as of April 2026' }, { icon: '📋', text: 'Milestone-locked contracts: Jan 2026 ✓ · Mar 2026 ✓ · May 2026 · Jun 2026 · Jul 2026' }, { icon: '🖥', text: 'VAIZ platform: real-time sprint governance, velocity tracking, incident management' }, { icon: '🔒', text: 'NDA and IP assignment in place — all code IP owned by icebrkr AG from first commit' }], tech: ['VAIZ', 'Gitea', 'Jira', 'CI/CD', 'Code Review'], privacy: 'Technomark engineers work in sandboxed environments with no access to production user data. All development happens against synthetic datasets.' },
    srm: { icon: '🎓', name: 'SRM University', subtitle: 'R&D cohort · 50K+ users', category: 'R&D COHORT · EARLY ADOPTERS', color: '#1E40AF', privacyBg: '#EFF6FF', desc: "SRM University (Chennai) provides icebrkr's 19-person R&D cohort and represents 50,000+ captive first users for the July 2026 go-live — making SRM both a technology partner and the most credible early adoption signal.", features: [{ icon: '👨‍💻', text: '19 active R&D engineers contributing to COMPASS module development' }, { icon: '👥', text: '50,000+ SRM students as first users at go-live — largest single cohort in pilot' }, { icon: '🌍', text: '18-language social campaign running 5 April – 9 July 2026 from SRM campus network' }, { icon: '📊', text: 'SRM cohort provides key UBTS training signals for the Student persona LoRA adapter' }], tech: ['Student Persona', '18-Language Campaign', 'UBTS Student Adapter'], privacy: 'SRM users onboard with full consent flow. Student data is subject to the same zero-knowledge architecture as all COMPASS users — no special access for the university.' },
  },
  compliance: {
    euaiact: { icon: '⚖️', name: 'EU AI Act', subtitle: 'Full enforcement Aug 2026', category: 'REGULATORY COMPLIANCE', color: '#5B21B6', privacyBg: '#EDE9FE', desc: 'The EU AI Act enters full enforcement August 2026. icebrkr is pre-compliant by architecture — requiring zero remediation. Competitors face €35M or 7% global revenue penalties if their cloud-first architectures cannot be rebuilt in time.', features: [{ icon: '📅', text: 'August 2026: Full enforcement. High-risk AI obligations apply to general-purpose AI systems.' }, { icon: '💶', text: 'Penalty: €35,000,000 or 7% of global annual revenue — whichever is higher' }, { icon: '✅', text: 'icebrkr: Zero-knowledge on-device architecture already satisfies transparency and data minimisation obligations' }, { icon: '❌', text: 'Competitors: OpenAI, Google Gemini, Meta AI are cloud-first — cannot become compliant by architecture change alone' }], tech: ['Article 13 Transparency', 'Data Minimisation', 'Risk Classification', 'Technical Documentation'], privacy: "icebrkr's architectural compliance means the EU AI Act is a competitive advantage, not a compliance burden. Every design decision was made with the Act in mind from day one." },
    nlpd: { icon: '🇨🇭', name: 'Swiss nLPD', subtitle: 'Live Sep 2023', category: 'SWISS FEDERAL LAW', color: '#065F46', privacyBg: '#F0FDF4', desc: "Switzerland's new Federal Act on Data Protection (nLPD) entered force September 2023. icebrkr is a Swiss entity with Swiss-hosted infrastructure — compliant by physical jurisdiction and architectural design.", features: [{ icon: '📍', text: 'Physical Swiss jurisdiction: data servers located in Switzerland under Swiss federal law' }, { icon: '🏛', text: 'Swiss entity: icebrkr AG incorporated in Geneva — full nLPD obligations and protections apply' }, { icon: '🔐', text: 'Privacy by design and default: mandatory under nLPD — icebrkr exceeds requirements' }, { icon: '📋', text: 'Data processing register maintained — all processing activities documented per nLPD Art. 12' }], tech: ['nLPD Art. 6', 'Privacy by Design', 'Data Register', 'DPO Appointed'], privacy: 'nLPD compliance is the strongest available in Europe for individual data protection. As a Swiss entity on Swiss infrastructure, icebrkr operates under the most privacy-protective legal framework globally.' },
    gdpr: { icon: '🇪🇺', name: 'GDPR', subtitle: 'Compliant by design', category: 'EU DATA PROTECTION', color: '#1E40AF', privacyBg: '#DBEAFE', desc: 'GDPR compliance is achieved through architecture — not through data processing agreements, consent banners, or legal disclaimers. Because no personal data reaches icebrkr servers, GDPR obligations are minimised by design.', features: [{ icon: '✅', text: 'Data minimisation (Art. 5): processed locally, only aggregated telemetry ever transmitted' }, { icon: '✅', text: 'Purpose limitation (Art. 5): data used only for stated purpose — no secondary AI training' }, { icon: '✅', text: 'Right to erasure (Art. 17): delete the app, delete all data — no server-side records to erase' }, { icon: '✅', text: 'Privacy by design (Art. 25): embedded in architecture from first line of code' }], tech: ['Art. 5 Minimisation', 'Art. 17 Erasure', 'Art. 25 Privacy by Design', 'Data Processor Agreements'], privacy: "GDPR's 'right to be forgotten' is trivially satisfied: user data was never centralised. Uninstalling the app achieves complete erasure without any server-side deletion request." },
    dpdpa: { icon: '🇮🇳', name: 'India DPDPA', subtitle: '2023 framework', category: 'INDIA DATA PROTECTION', color: '#92400E', privacyBg: '#FEF3C7', desc: "India's Digital Personal Data Protection Act 2023 establishes consent-based processing requirements. IB-Health also aligns with CDSCO SaMD (Software as Medical Device) requirements for health data.", features: [{ icon: '✅', text: 'Consent-first architecture: all data processing requires explicit user consent per DPDPA' }, { icon: '✅', text: 'Data localisation: India-based user data processed on-device — no cross-border transfer' }, { icon: '✅', text: 'CDSCO SaMD alignment: IB-Health designed for medical device software regulatory compliance' }, { icon: '🌍', text: '18 languages including Hindi, Tamil, Telugu, Bengali, Marathi for India market' }], tech: ['DPDPA Consent Framework', 'CDSCO SaMD', 'Data Localisation', '18 Regional Languages'], privacy: 'India represents a primary growth market. DPDPA compliance from day one enables institutional B2B sales to Indian enterprises and government entities.' },
    ukgdpr: { icon: '🇬🇧', name: 'UK GDPR', subtitle: 'DPA 2018 aligned', category: 'UK DATA PROTECTION', color: '#991B1B', privacyBg: '#FEE2E2', desc: "Post-Brexit, the UK maintains its own GDPR framework under the Data Protection Act 2018. icebrkr's architecture satisfies UK requirements independently of EU GDPR compliance.", features: [{ icon: '✅', text: 'ICO registration in preparation for UK market entry in Q2 2027' }, { icon: '✅', text: 'UK GDPR Articles mirror EU GDPR — same architecture satisfies both simultaneously' }, { icon: '✅', text: 'Data Protection Act 2018 special category data (health) requirements met by local processing' }, { icon: '🏛', text: 'UK Adequacy Decision with EU maintained — Swiss entity simplifies cross-border compliance' }], tech: ['ICO Registration', 'DPA 2018 Art. 9', 'UK Adequacy', 'Data Transfers'], privacy: "The UK's post-Brexit data protection framework is substantively equivalent to GDPR. icebrkr's architecture satisfies both simultaneously with zero additional engineering effort." },
    ccpa: { icon: '🇺🇸', name: 'CCPA / CPRA', subtitle: 'SOC2 prep', category: 'US PRIVACY LAW', color: '#065F46', privacyBg: '#D1FAE5', desc: "California Consumer Privacy Act (CCPA) and California Privacy Rights Act (CPRA) establish US privacy rights for California residents. icebrkr's architecture naturally satisfies most requirements.", features: [{ icon: '✅', text: "Right to know: full data transparency — user can see everything stored (it's on their device)" }, { icon: '✅', text: 'Right to delete: uninstall the app = complete deletion. No server-side data to request erasure of.' }, { icon: '✅', text: "Right to opt-out of sale: icebrkr business model does not involve selling user data — ever" }, { icon: '🔄', text: 'SOC 2 Type II audit in preparation for US enterprise B2B sales — expected Q3 2026' }], tech: ['CCPA Compliance', 'CPRA Requirements', 'SOC 2 Type II', 'No Data Sale'], privacy: "CCPA's 'Do Not Sell My Personal Information' requirement is trivially met — icebrkr's zero-knowledge architecture makes selling user data architecturally impossible." },
  },
  persona: {
    mother: { icon: '👩', name: 'Sophie · Working Mother', subtitle: '↓68 min/day · 7 modules', category: 'USER PERSONA', color: '#92400E', privacyBg: '#FEF3C7', desc: "34-year-old Marketing Director in Geneva. Emma (7) and Leo (2). Needs an AI that works as hard as she does — without selling her family's data to advertisers.", features: [{ icon: '⏱', text: '↓68 min/day saved across morning briefing, breakfast prep, and school run logistics' }, { icon: '🧠', text: '↓9 daily decisions eliminated: outfit selection, lunchbox contents, family bag checklist' }, { icon: '💼', text: '+8 productive hours/week recovered through AIPA deep work block defence' }, { icon: '📄', text: "Document retrieval in <10 seconds when crèche nurse calls for Leo's allergy certificate" }, { icon: '🗺', text: 'Optimised 3-stop morning route: crèche → school → office, accounting for opening times' }], tech: ['AIPA', 'Smart Closet', 'Smart Fridge', 'IB-Map', 'Journal AI', 'Private Vault', 'IB-Health'], privacy: "Sophie's children's health and location data has zero cloud exposure. All child data processed on-device only — no minor's information ever reaches any server." },
    genz: { icon: '🧑‍🎓', name: 'Kai · Gen Z Student', subtitle: '↓7 decisions/day', category: 'USER PERSONA', color: '#5B21B6', privacyBg: '#EDE9FE', desc: '21-year-old Business student in Geneva. Creator, job hunter, budget manager. Needs AI that works for him — not on him.', features: [{ icon: '📱', text: 'Group chat digest: 200 unread messages → 10-second summary. Mentions always elevated.' }, { icon: '👔', text: 'AR virtual try-on from existing wardrobe — celebrity outfit matching at 0 extra cost' }, { icon: '🚀', text: 'Job application tracker + role-specific interview prep (15 questions + STAR method coaching)' }, { icon: '💶', text: 'Multi-currency budget with PPP-adjusted pricing — subscription waste alerts after 60 days unused' }, { icon: '📚', text: 'AIPA generates personalised exam revision cards — FinTech, business, tech subjects' }], tech: ['AIPA', 'IB-Connect', 'Smart Closet', 'Journal AI', 'Private Vault'], privacy: "Kai's financial data, job applications, and academic records are processed on-device. No employer can access his salary expectations or job search history via COMPASS." },
    traveller: { icon: '✈️', name: 'Priya · World Traveller', subtitle: '52 countries · 25+ langs', category: 'USER PERSONA', color: '#065F46', privacyBg: '#D1FAE5', desc: "31-year-old UX Consultant. Digital nomad, 52 countries visited. Needs an AI that moves with her without tracking her.", features: [{ icon: '✈️', text: 'Airport intelligence: flight status, gate changes, check-in reminders — auto-detected from email' }, { icon: '🗺', text: 'Full day-by-day itinerary for any destination: activities matched to pace + opening hours' }, { icon: '🌍', text: 'Camera-based translation of signs, menus, conversations — 50+ languages, fully offline' }, { icon: '🤝', text: 'Cultural sensitivity hints during video calls: greeting customs, eye contact norms, hierarchy' }, { icon: '💼', text: 'Virtual packing list from wardrobe: destination + duration + activities → specific items' }], tech: ['IB-Map', 'AIPA', 'IB-Connect', 'Private Vault', 'Smart Closet', 'IB-Health'], privacy: "Priya's location history — 52 countries of movement data — is processed on-device and never transmitted. No government or employer can access her travel patterns through icebrkr." },
  },
};

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
   MODAL COMPONENT
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
      className="fixed inset-0 z-[200] flex items-center justify-center bg-black/55 backdrop-blur-sm"
      onClick={onClose}
      style={{ animation: 'fadeInOverlay .2s ease' }}
    >
      <div
        className="compass-modal bg-white rounded-2xl w-[92vw] max-w-[560px] max-h-[88vh] overflow-y-auto shadow-2xl relative"
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
   SIDE ITEM
───────────────────────────────────────────────*/
function SideItem({ icon, iconBg, name, sub, check, onClick }: {
  icon: string; iconBg: string; name: string; sub: string; check?: boolean; onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className="w-full flex items-center gap-2.5 px-3 py-2.5 rounded-lg mb-1.5 bg-white border border-slate-200 cursor-pointer transition-all duration-200 hover:border-slate-400 hover:shadow-sm hover:translate-x-0.5 text-left"
    >
      <div className="w-8 h-8 rounded-lg flex items-center justify-center text-base flex-shrink-0" style={{ background: iconBg }}>{icon}</div>
      <div className="min-w-0 flex-1">
        <div className="text-[12px] font-bold text-brand-ink leading-tight truncate">{name}</div>
        <div className="text-[10px] text-slate-500 mt-0.5 truncate">{sub}</div>
      </div>
      {check && <span className="text-[12px] text-green-600 flex-shrink-0">✓</span>}
    </button>
  );
}

/* ─────────────────────────────────────────────
   MAIN COMPASS PAGE
───────────────────────────────────────────────*/
export default function CompassPage() {
  const [modal, setModal] = useState<ModalData | null>(null);
  const [activeTab, setActiveTab] = useState<'tech' | 'compliance' | 'personas'>('tech');
  const svgRef = useRef<SVGSVGElement>(null);

  const openModal = (data: ModalData) => setModal(data);
  const closeModal = () => setModal(null);
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
    <>
      <Navbar />

      <div className="compass-page min-h-screen" style={{ background: '#F0F4F8', fontFamily: "'DM Sans', sans-serif" }}>
        <div className="compass-page-header" style={{ background: '#0F1923', padding: '18px 40px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', position: 'relative', overflow: 'hidden', marginTop: '80px' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: 'linear-gradient(90deg,#E8302A,#F5A623,#27AE60)' }} />
        <div className="flex items-center gap-2.5">
          <div className="flex gap-1">
            <span style={{ width: 8, height: 8, borderRadius: 1.5, background: '#E8302A', display: 'block' }} />
            <span style={{ width: 8, height: 8, borderRadius: 1.5, background: '#F5A623', display: 'block' }} />
            <span style={{ width: 8, height: 8, borderRadius: 1.5, background: '#27AE60', display: 'block' }} />
          </div>
          <div>
            <div style={{ fontSize: 22, fontWeight: 700, color: '#fff', letterSpacing: -.3 }}>icebrkr</div>
            <div style={{ fontSize: 9, fontWeight: 700, letterSpacing: 3, textTransform: 'uppercase', color: 'rgba(255,255,255,.3)' }}>COMPASS · AI Life OS</div>
          </div>
        </div>
        <div className="text-center hidden sm:block">
          <h1 style={{ fontFamily: "'DM Serif Display', serif", fontSize: 22, color: '#fff', letterSpacing: -.3 }}>Interactive Architecture Map</h1>
          <p style={{ fontSize: 11, color: 'rgba(255,255,255,.4)', marginTop: 2 }}>Click any segment to explore modules, security layers, and features</p>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 6, background: 'rgba(245,166,35,.15)', border: '1px solid rgba(245,166,35,.3)', padding: '7px 16px', borderRadius: 100, fontSize: 11, fontWeight: 700, color: '#F5A623', letterSpacing: .5 }}>
          <span className="compass-pulse-dot" style={{ width: 6, height: 6, borderRadius: '50%', background: '#27AE60', display: 'inline-block' }} />
          Live July 2026
        </div>
      </div>
      <div className="compass-top-badges" style={{ background: '#0F1923', borderBottom: '1px solid rgba(255,255,255,.06)', padding: '12px 40px', alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap', gap: 10 }}>
        {[
          ['🛡', 'Zero-Knowledge Architecture'], ['📱', 'On-Device AI Inference'],
          ['✅', 'EU AI Act Compliant'], ['🇨🇭', 'Swiss Infrastructure'],
          ['📋', 'Patent-Pending UBTS'], ['🌍', '25+ Languages'],
          ['🔐', 'AES-256-GCM Encryption'], ['9', 'Integrated Modules'],
        ].map(([icon, label]) => (
          <div key={label} style={{ display: 'flex', alignItems: 'center', gap: 6, background: 'rgba(255,255,255,.04)', border: '1px solid rgba(255,255,255,.1)', padding: '6px 14px', borderRadius: 100, fontSize: 11, fontWeight: 600, color: 'rgba(255,255,255,.7)' }}>
            <span style={{ fontSize: 13 }}>{icon}</span>{label}
          </div>
        ))}
      </div>
      <div className="compass-main-layout">
        <div className="compass-side-panel compass-side-left">
          <div className="compass-side-title">Technology Stack</div>
          {Object.entries(sideData.stack).map(([key, d]) => (
            <SideItem key={key} icon={d.icon} iconBg={d.privacyBg} name={d.name} sub={d.subtitle} onClick={() => openModal(d)} />
          ))}
          <div className="mt-5">
            <div className="compass-side-title">Delivery Partners</div>
            {Object.entries(sideData.partner).map(([key, d]) => (
              <SideItem key={key} icon={d.icon} iconBg={d.privacyBg} name={d.name} sub={d.subtitle} check onClick={() => openModal(d)} />
            ))}
          </div>
        </div>
        <div className="compass-wheel-area">
          <div className="compass-wheel-container">
            <svg ref={svgRef} viewBox="0 0 700 700" xmlns="http://www.w3.org/2000/svg" className="compass-wheel-svg" style={{ filter: 'drop-shadow(0 8px 32px rgba(0,0,0,0.18))' }}>
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
              <rect x="318" y="290" width="10" height="10" rx="2" fill="#E8302A" />
              <rect x="333" y="290" width="10" height="10" rx="2" fill="#F5A623" />
              <rect x="348" y="290" width="10" height="10" rx="2" fill="#27AE60" />
              <text x="350" y="326" textAnchor="middle" fontFamily="DM Sans,sans-serif" fontSize="14" fontWeight="800" fill="#1A1A1A" letterSpacing="-.2">icebrkr</text>
              <text x="350" y="350" textAnchor="middle" fontFamily="DM Serif Display,serif" fontSize="30" fontWeight="400" fill="#0F1923" letterSpacing="-1">COMPASS</text>
              <text x="350" y="372" textAnchor="middle" fontFamily="DM Sans,sans-serif" fontSize="9" fontWeight="700" fill="#94A3B8" letterSpacing="2.5">AI LIFE OPERATING SYSTEM</text>
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
          <div className="compass-legend">
            {modules.map(m => (
              <button key={m.id} onClick={() => openModal(m)} className="compass-legend-item" style={{ '--legend-color': m.color } as React.CSSProperties}>
                <span className="compass-legend-dot" style={{ background: m.color }} />
                {m.icon} {m.name}
              </button>
            ))}
          </div>
          <div className="compass-mobile-tabs">
            {(['tech', 'compliance', 'personas'] as const).map(tab => (
              <button key={tab} onClick={() => setActiveTab(tab)} className={`compass-tab-btn ${activeTab === tab ? 'active' : ''}`}>
                {tab === 'tech' ? '⚙️ Tech Stack' : tab === 'compliance' ? '⚖️ Compliance' : '👥 Personas'}
              </button>
            ))}
          </div>
          <div className="compass-mobile-panel">
            {activeTab === 'tech' && (
              <div>
                <div className="compass-side-title" style={{ marginBottom: 12 }}>Technology Stack</div>
                {Object.entries(sideData.stack).map(([key, d]) => (
                  <SideItem key={key} icon={d.icon} iconBg={d.privacyBg} name={d.name} sub={d.subtitle} onClick={() => openModal(d)} />
                ))}
                <div className="compass-side-title" style={{ marginBottom: 12, marginTop: 20 }}>Delivery Partners</div>
                {Object.entries(sideData.partner).map(([key, d]) => (
                  <SideItem key={key} icon={d.icon} iconBg={d.privacyBg} name={d.name} sub={d.subtitle} check onClick={() => openModal(d)} />
                ))}
              </div>
            )}
            {activeTab === 'compliance' && (
              <div>
                <div className="compass-side-title" style={{ marginBottom: 12 }}>Compliance Coverage</div>
                {Object.entries(sideData.compliance).map(([key, d]) => (
                  <SideItem key={key} icon={d.icon} iconBg={d.privacyBg} name={d.name} sub={d.subtitle} check onClick={() => openModal(d)} />
                ))}
              </div>
            )}
            {activeTab === 'personas' && (
              <div>
                <div className="compass-side-title" style={{ marginBottom: 12 }}>User Personas</div>
                {Object.entries(sideData.persona).map(([key, d]) => (
                  <SideItem key={key} icon={d.icon} iconBg={d.privacyBg} name={d.name} sub={d.subtitle} onClick={() => openModal(d)} />
                ))}
              </div>
            )}
          </div>
        </div>
        <div className="compass-side-panel compass-side-right">
          <div className="compass-side-title">Compliance Coverage</div>
          {Object.entries(sideData.compliance).map(([key, d]) => (
            <SideItem key={key} icon={d.icon} iconBg={d.privacyBg} name={d.name} sub={d.subtitle} check onClick={() => openModal(d)} />
          ))}
          <div className="mt-5">
            <div className="compass-side-title">User Personas</div>
            {Object.entries(sideData.persona).map(([key, d]) => (
              <SideItem key={key} icon={d.icon} iconBg={d.privacyBg} name={d.name} sub={d.subtitle} onClick={() => openModal(d)} />
            ))}
          </div>
        </div>
      </div>
      <div style={{ background: '#0F1923', padding: '18px 40px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap', gap: 28 }}>
        {[
          { label: 'Responsible AI', color: '#27AE60' }, { label: 'Zero Egress', color: '#F5A623' },
          { label: 'AES-256-GCM Encryption', color: '#E8302A' }, { label: 'On-Device Inference', color: '#94A3B8' },
          { label: 'No Anthropic · No Google · No OpenAI', color: '#64B5F6' }, { label: 'Patent-Pending UBTS', color: '#AB47BC' },
          { label: 'Swiss Incorporated', color: '#F5A623' }, { label: 'Privacy by Design', color: '#27AE60' },
        ].map(p => (
          <div key={p.label} style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 11, fontWeight: 600, color: 'rgba(255,255,255,.5)', textTransform: 'uppercase', letterSpacing: 1 }}>
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: p.color, display: 'inline-block', opacity: .8 }} />
            {p.label}
          </div>
        ))}
      </div>
      {modal && <Modal data={modal} onClose={closeModal} />}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700;800&family=DM+Serif+Display:ital@0;1&display=swap');
        @keyframes mslide { from { opacity: 0; transform: scale(.92) translateY(20px); } to { opacity: 1; transform: none; } }
        @keyframes fadeInOverlay { from { opacity: 0; } to { opacity: 1; } }
        @keyframes hpulse { 0%,100% { opacity: 1; } 50% { opacity: .3; } }
        @keyframes compassFadeIn { from { opacity: 0; transform: translateY(16px); } to { opacity: 1; transform: translateY(0); } }
        .compass-page { animation: compassFadeIn .5s ease both; }
        .compass-pulse-dot { animation: hpulse 2s infinite; }
        .compass-main-layout { display: grid; grid-template-columns: 240px 1fr 240px; gap: 0; padding: 28px 24px; max-width: 1400px; margin: 0 auto; align-items: start; }
        .compass-side-panel { padding-top: 20px; }
        .compass-side-title { font-size: 10px; font-weight: 700; text-transform: uppercase; letter-spacing: 1.5px; color: #666; margin-bottom: 14px; padding-bottom: 8px; border-bottom: 2px solid #e0e0e0; }
        .compass-wheel-area { display: flex; flex-direction: column; align-items: center; }
        .compass-wheel-container { position: relative; width: 700px; height: 700px; }
        .compass-wheel-svg { width: 700px; height: 700px; overflow: visible; }
        .compass-seg { transition: transform .25s cubic-bezier(.22,.1,.07,1), filter .25s; transform-origin: 350px 350px; }
        .compass-seg-group:hover .compass-seg { transform: scale(1.045); filter: brightness(1.12) drop-shadow(0 4px 16px rgba(0,0,0,.3)); }
        .compass-arch-seg { transition: transform .25s, filter .25s; transform-origin: 350px 350px; }
        .compass-arch-group:hover .compass-arch-seg { transform: scale(1.03); filter: brightness(1.1); }
        .compass-legend { display: flex; flex-wrap: wrap; gap: 8px; justify-content: center; margin-top: 20px; max-width: 700px; }
        .compass-legend-item { display: flex; align-items: center; gap: 5px; font-size: 11px; font-weight: 600; color: #475569; cursor: pointer; padding: 5px 10px; border-radius: 6px; transition: background .15s; background: transparent; border: none; font-family: 'DM Sans', sans-serif; }
        .compass-legend-item:hover { background: rgba(0,0,0,.05); }
        .compass-legend-dot { width: 10px; height: 10px; border-radius: 2px; flex-shrink: 0; }
        .compass-top-badges { display: flex; }
        .compass-mobile-tabs { display: none; }
        .compass-mobile-panel { display: none; }
        .compass-modal::-webkit-scrollbar { width: 5px; }
        .compass-modal::-webkit-scrollbar-track { background: #F8FAFC; }
        .compass-modal::-webkit-scrollbar-thumb { background: #CBD5E1; border-radius: 3px; }
        @media (max-width: 1200px) { .compass-main-layout { grid-template-columns: 200px 1fr 200px; padding: 20px 12px; } .compass-wheel-container, .compass-wheel-svg { width: 580px; height: 580px; } }
        @media (max-width: 960px) { .compass-top-badges { display: none !important; } .compass-main-layout { grid-template-columns: 1fr; padding: 16px; } .compass-side-left, .compass-side-right { display: none; } .compass-wheel-container, .compass-wheel-svg { width: min(90vw, 540px); height: min(90vw, 540px); } .compass-mobile-tabs { display: flex; gap: 8px; flex-wrap: wrap; justify-content: center; margin-top: 24px; width: 100%; max-width: 540px; } .compass-tab-btn { padding: 8px 16px; border-radius: 100px; font-size: 12px; font-weight: 700; border: 1.5px solid #E2E8F0; background: #fff; color: #475569; cursor: pointer; transition: all .2s; font-family: 'DM Sans', sans-serif; } .compass-tab-btn.active { background: #0F1923; color: #fff; border-color: #0F1923; } .compass-mobile-panel { display: block; width: 100%; max-width: 540px; margin-top: 16px; background: #fff; border-radius: 12px; padding: 16px; border: 1px solid #E8ECF0; } }
        @media (max-width: 480px) { .compass-page-header { padding: 14px 16px !important; flex-wrap: wrap; gap: 10px; } .compass-wheel-container, .compass-wheel-svg { width: min(88vw, 380px); height: min(88vw, 380px); } .compass-legend { gap: 6px; } .compass-legend-item { font-size: 10px; padding: 4px 8px; } }
      `}</style>
      </div>
    </>
  );
}