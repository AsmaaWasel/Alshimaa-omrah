import Hero from "@/components/hero";

import Hotels from "@/components/VipServices";
import Contact from "@/components/contact";
import EconomyServices from "@/components/EconomyServices";

export default function Page() {
  return (
    <main className="bg-background">
      <Hero />
      <Hotels />
      <EconomyServices />
      <Contact />
    </main>
  );
}
