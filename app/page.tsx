import Link from 'next/link';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustBar from './components/TrustBar';
import Product from './components/Product';
import Team from './components/Team';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { ArrowRight, Cpu, Layers, Users, TrendingUp, Sparkles } from 'lucide-react';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <TrustBar />

      {/* Main Feature Highlights */}
      <Product />

      {/* Explore Route Navigation Cards */}
      <section className="py-20 bg-brand-bg/60 border-y border-brand-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-red/10 text-brand-red text-[11px] font-bold uppercase tracking-[1.5px] mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Explore Icebrkr</span>
            </div>
            <h2 className="font-serif text-[clamp(28px,3.5vw,42px)] text-brand-ink leading-[1.2]">
              Navigate the Ecosystem
            </h2>
            <p className="text-[16px] text-brand-muted mt-3">
              Discover our architecture, product modules, team, and investor opportunities across dedicated sections.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Product Card */}
            <Link
              href="/product"
              className="group bg-white p-7 rounded-2xl border border-brand-border/80 hover:border-brand-red/40 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <Layers className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-[18px] text-brand-ink mb-2 group-hover:text-brand-red transition-colors">
                  Product & Modules
                </h3>
                <p className="text-[14px] text-brand-muted leading-relaxed">
                  16 privacy-first modules, GenZ personas, accessibility features, and IB Learn ecosystem.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-brand-border/50 flex items-center text-[13px] font-bold text-brand-ink group-hover:text-brand-red">
                Explore Modules <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

            {/* Technology Card */}
            <Link
              href="/technology"
              className="group bg-white p-7 rounded-2xl border border-brand-border/80 hover:border-brand-red/40 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <Cpu className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-[18px] text-brand-ink mb-2 group-hover:text-brand-red transition-colors">
                  SLM Technology
                </h3>
                <p className="text-[14px] text-brand-muted leading-relaxed">
                  Deeptech on-device Small Language Models, zero-cloud data leak, & autonomous AI proactivity.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-brand-border/50 flex items-center text-[13px] font-bold text-brand-ink group-hover:text-brand-red">
                Explore Tech <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

            {/* Team Card */}
            <Link
              href="/team"
              className="group bg-white p-7 rounded-2xl border border-brand-border/80 hover:border-brand-red/40 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <Users className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-[18px] text-brand-ink mb-2 group-hover:text-brand-red transition-colors">
                  Meet the Team
                </h3>
                <p className="text-[14px] text-brand-muted leading-relaxed">
                  40+ builders, engineers, and specialists across Switzerland and India creating the AI OS.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-brand-border/50 flex items-center text-[13px] font-bold text-brand-ink group-hover:text-brand-red">
                Meet the Builders <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

            {/* Investors Card */}
            <Link
              href="/investors"
              className="group bg-white p-7 rounded-2xl border border-brand-border/80 hover:border-brand-red/40 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-[18px] text-brand-ink mb-2 group-hover:text-brand-red transition-colors">
                  Investors & IP
                </h3>
                <p className="text-[14px] text-brand-muted leading-relaxed">
                  Patent architecture, market opportunity, launch roadmap, and seed round participation.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-brand-border/50 flex items-center text-[13px] font-bold text-brand-ink group-hover:text-brand-red">
                View Investor Deck <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Team Preview Section */}
      <Team />

      {/* Contact Section */}
      <Contact />

      <Footer />
    </main>
  );
}
