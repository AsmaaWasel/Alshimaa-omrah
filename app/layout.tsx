import type { Metadata } from "next";
import Navbar from "@/components/navbar";
import WhatsAppButton from "@/components/WhatsAppButton";
import "./globals.css";

// الميتا تاج المحدثة بناءً على طلبك
export const metadata: Metadata = {
  title: "قافلة الشيماء لخدمات المعتمرين والزوار - حملات عمرة من الرياض",
  description:
    "حملات يومياً من الرياض إلى مكة المكرمة وإلى المدينة المنورة بباصات حديثة - باقات تشمل حجز الباص والفندق مناسبة للعزاب والعوائل - للحجز تواصل عبر الواتساب: 0563591198",
  keywords: [
    "عمرة من الرياض",
    "قافلة الشيماء",
    "حملات عمرة الرياض",
    "حجز باصات مكة",
    "فنادق مكة والمدينة",
    "خدمات المعتمرين",
    "رحلات عمرة يومية",
  ],
  authors: [{ name: "قافلة الشيماء" }],
  metadataBase: new URL("https://al-shimaa-travel.com"), // استبدليه برابط موقعك الفعلي عند الرفع

  // تهيئة الـ Preview عند مشاركة اللينك على الواتساب وفيسبوك
  openGraph: {
    title: "قافلة الشيماء لخدمات المعتمرين والزوار - حملات عمرة من الرياض",
    description:
      "حملات يومياً من الرياض إلى مكة المكرمة وإلى المدينة المنورة بباصات حديثة - باقات تشمل حجز الباص والفندق مناسبة للعزاب والعوائل - للحجز تواصل عبر الواتساب: 0563591198",
    url: "https://al-shimaa-travel.com", // استبدليه برابط موقعك الفعلي
    siteName: "قافلة الشيماء",
    images: [
      {
        url: "/og-image.png", // الصورة التي قمنا بتصميمها وموجودة في فولدر public
        width: 1200,
        height: 630,
        alt: "قافلة الشيماء - حملات عمرة من الرياض",
      },
    ],
    locale: "ar_SA",
    type: "website",
  },

  // تهيئة الـ Preview لمنصة X (تويتر)
  twitter: {
    card: "summary_large_image",
    title: "قافلة الشيماء لخدمات المعتمرين والزوار - حملات عمرة من الرياض",
    description:
      "حملات يومياً من الرياض إلى مكة والمدينة بباصات حديثة وفنادق متميزة للعزاب والعوائل. واتساب: 0563591198",
    images: ["/og-image.jpg"],
  },
};

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
