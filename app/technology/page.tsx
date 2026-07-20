import Navbar from '../components/Navbar';
import Technology from '../components/Technology';
import SLM from '../components/SLM';
import Future from '../components/Future';
import Footer from '../components/Footer';

export const metadata = {
  title: 'Technology & SLM Architecture | Icebrkr',
  description: 'Deeptech privacy architecture, Small Language Models (SLM), and autonomous AI proactivity.',
};

export default function TechnologyPage() {
  return (
    <main className="min-h-screen pt-[80px]">
      <Navbar />
      <Technology />
      <SLM />
      <Future />
      <Footer />
    </main>
  );
}
