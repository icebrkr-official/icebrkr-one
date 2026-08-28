import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustBar from './components/TrustBar';
import Product from './components/Product';
import Personas from './components/Personas';
import Accessibility from './components/Accessibility';
import Learn from './components/Learn';
import Technology from './components/Technology';
import SLM from './components/SLM';
import Future from './components/Future';
import Situation from './components/Situation';
import Market from './components/Market';
import Patents from './components/Patents';
import Roadmap from './components/Roadmap';
import Investors from './components/Investors';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function Home() {
  return (
    <>
      <main className="min-h-dvh w-full bg-white relative">
        <Navbar />
        <div className="pt-20">
          <Hero />
        </div>
        <TrustBar />
        <Situation />
        <Product />
        <Personas />
        <Accessibility />
        <Learn />
        <Technology />
        <SLM />
        <Future />
        <Market />
        <Patents />
        <Roadmap />
        <Investors />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
