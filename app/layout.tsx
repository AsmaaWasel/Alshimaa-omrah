import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import { Cairo, Amiri } from "next/font/google";

const cairo = Cairo({ subsets: ["arabic", "latin"], variable: "--font-arabic" });
const amiri = Amiri({ subsets: ["arabic", "latin"], weight: ["400", "700"], variable: "--font-calligraphy" });

export const metadata: Metadata = {
  title: "قافلة الشيماء | رحلة مكة والعمرة",
  description: "رحلات عمرة وإقامة مميزة من الرياض إلى مكة والمدينة.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        <Script id="google-tag-manager" strategy="beforeInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-TMS76KV6');`}
        </Script>
      </head>
      <body className={`${cairo.variable} ${amiri.variable}`}>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-TMS76KV6"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {children}
      </body>
    </html>
  );
}
