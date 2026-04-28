import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustBar from './components/TrustBar';
import Situation from './components/Situation';
import Product from './components/Product';
import Technology from './components/Technology';
import Market from './components/Market';
import Roadmap from './components/Roadmap';
import Team from './components/Team';
import Investors from './components/Investors';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <TrustBar />
      <Situation />
      <Product />
      <Technology />
      <Market />
      <Roadmap />
      <Team />
      <Investors />
      <Contact />
      <Footer />
    </main>
  );
}
