import Navbar from '../components/Navbar';
import Product from '../components/Product';
import Personas from '../components/Personas';
import Accessibility from '../components/Accessibility';
import Learn from '../components/Learn';
import Footer from '../components/Footer';

export const metadata = {
  title: 'Product & Modules | Icebrkr',
  description: 'Explore the Icebrkr product ecosystem — 16 modules, on-device AI, and user personas.',
};

export default function ProductPage() {
  return (
    <main className="min-h-screen pt-[80px]">
      <Navbar />
      <Product />
      <Personas />
      <Accessibility />
      <Learn />
      <Footer />
    </main>
  );
}
