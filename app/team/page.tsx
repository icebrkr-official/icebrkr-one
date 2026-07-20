import Navbar from '../components/Navbar';
import Team from '../components/Team';
import Footer from '../components/Footer';

export const metadata = {
  title: 'Team & Leadership | Icebrkr',
  description: 'Meet the 40+ member team, founders, and engineers building Icebrkr, the AI Operating System.',
};

export default function TeamPage() {
  return (
    <main className="min-h-screen pt-[80px]">
      <Navbar />
      <Team />
      <Footer />
    </main>
  );
}
