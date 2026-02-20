import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Process from '@/components/Process';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col selection:bg-(--color-bium-green)/30 selection:text-white">
      <Header />
      <div className="flex-1">
        <Hero />
        <Features />
        <Process />
      </div>
      <Footer />
    </main>
  );
}
