import Navbar from '../components/Navbar';
import Situation from '../components/Situation';
import Market from '../components/Market';
import Patents from '../components/Patents';
import Roadmap from '../components/Roadmap';
import Investors from '../components/Investors';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export const metadata = {
  title: 'Investors & Market Opportunity | Icebrkr',
  description: 'Investor deck, market analysis, patents, roadmap, and seed round opportunity.',
};

export default function InvestorsPage() {
  return (
    <main className="min-h-screen pt-[80px]">
      <Navbar />
      <Situation />
      <Market />
      <Patents />
      <Roadmap />
      <Investors />
      <Contact />
      <Footer />
    </main>
  );
}
