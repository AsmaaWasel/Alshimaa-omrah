import Navbar from '@/components/navbar';
import Hero from '@/components/hero';
import Buses from '@/components/buses';
import Hotels from '@/components/hotels';
import Contact from '@/components/contact';

export default function Page() {
  return (
    <main className="bg-background">
      <Navbar />
      <Hero />
      <Buses />
      <Hotels />
      <Contact />
    </main>
  );
}
