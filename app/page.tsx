import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustBar from './components/TrustBar';

export default function Home() {
  return (
    <main className="min-h-screen min-h-dvh lg:h-screen w-full overflow-y-auto lg:overflow-hidden flex flex-col justify-between bg-white relative">
      <Navbar />
      <div className="flex-1 pt-[80px] flex items-center justify-center lg:overflow-hidden py-4 lg:py-0">
        <Hero />
      </div>
      <TrustBar />
    </main>
  );
}
