// app/layout.tsx

import Navbar from "@/components/navbar";
import "./globals.css";

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
      </body>
    </html>
  );
}
