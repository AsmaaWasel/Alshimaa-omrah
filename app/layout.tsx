import Navbar from "@/components/navbar";
import WhatsAppButton from "@/components/WhatsAppButton";
import "./globals.css";
//commit
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl">
      <body>
        <Navbar />
        <main>{children}</main>

        <WhatsAppButton />
      </body>
    </html>
  );
}
