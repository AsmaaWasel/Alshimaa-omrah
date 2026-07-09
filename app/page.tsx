import Hero from "@/components/hero";

import Hotels from "@/components/VipServices";
import Contact from "@/components/contact";
import EconomyServices from "@/components/EconomyServices";
import Packages from "@/components/packages";
import Booking from "@/components/Booking";

export default function Page() {
  return (
    <main className="bg-background">
      <Hero />
      <Packages />
      <Hotels />
      <EconomyServices />
      <Booking />
      <Contact />
    </main>
  );
}
