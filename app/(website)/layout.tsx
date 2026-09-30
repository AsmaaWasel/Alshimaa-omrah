import Navbar from "@/components/navbar";
import WhatsAppButton from "@/components/WhatsAppButton";
import CallButton from "@/components/CallButton";
import { SitePreferences } from "@/components/site-preferences";

export default function WebsiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SitePreferences>
      <Navbar />

      <main>{children}</main>

      <CallButton />
      <WhatsAppButton />
    </SitePreferences>
  );
}
