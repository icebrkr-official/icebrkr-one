import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustBar from './components/TrustBar';
import Product from './components/Product';
import Technology from './components/Technology';
import SLM from './components/SLM';
import Future from './components/Future';
import Personas from './components/Personas';
import Accessibility from './components/Accessibility';
import Learn from './components/Learn';
import Patents from './components/Patents';
import Situation from './components/Situation';
import Market from './components/Market';
import Roadmap from './components/Roadmap';
import Team from './components/Team';
import Investors from './components/Investors';
import Contact from './components/Contact';
import Footer from './components/Footer';
import SplashScreen from './components/SplashScreen';

export default function Home() {
  return (
    <main>
      <SplashScreen />
      <Navbar />
      <Hero />
      <TrustBar />
      <Product />
      <Technology />
      <SLM />
      <Future />
      <Personas />
      <Accessibility />
      <Learn />
      <Patents />
      <Situation />
      <Market />
      <Roadmap />
      <Team />
      <Investors />
      <Contact />
      <Footer />
    </main>
  );
}
