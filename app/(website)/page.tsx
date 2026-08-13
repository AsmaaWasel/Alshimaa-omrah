import Hero from "@/components/hero";

import Hotels from "@/components/VipServices";
import Contact from "@/components/contact";
import EconomyServices from "@/components/EconomyServices";
import Packages from "@/components/packages";
import Booking from "@/components/Booking";
import FAQ from "@/components/FAQ";
import PackagesComparison from "@/components/PackagesComparsion";
import PricesSection from "@/components/PricesSection";
import StatsSection from "@/components/ui/StatusSection";

export default function Page() {
  return (
    <main className="bg-background">
      <Hero />
      <StatsSection />
      <Hotels />

      <EconomyServices />
      <Packages />
      <PackagesComparison />
      <PricesSection />
      <FAQ />
      <Booking />
      <Contact />
    </main>
  );
}
