import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustBar from './components/TrustBar';

export default function Home() {
  return (
    <main className="h-screen w-full overflow-hidden flex flex-col justify-between bg-white relative">
      <Navbar />
      <div className="flex-1 pt-[80px] flex items-center justify-center overflow-hidden">
        <Hero />
      </div>
      <TrustBar />
    </main>
  );
}
