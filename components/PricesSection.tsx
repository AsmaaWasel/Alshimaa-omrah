"use client";

import { motion } from "framer-motion";
import {
  Hotel,
  Bus,
  CalendarDays,
  Users,
  MessageCircle,
  Sparkles,
} from "lucide-react";
import { JSX } from "react";
import { useSitePreferences } from "./site-preferences";

const WHATSAPP = "https://wa.me/966563591198";

interface PriceFeature {
  icon: React.ReactNode;
  title: string;
  text: string;
}

export default function PricesSection(): JSX.Element {
  const { locale } = useSitePreferences();
  const isArabic = locale === "ar";

  const priceFeatures: PriceFeature[] = [
    {
      icon: <Hotel size={24} />,
      title: isArabic ? "الفندق" : "Hotel",
      text: isArabic ? "٣ نجوم - ٤ نجوم - ٥ نجوم" : "3-star · 4-star · 5-star",
    },
    {
      icon: <Bus size={24} />,
      title: isArabic ? "وسيلة النقل" : "Transport",
      text: isArabic ? "باص اقتصادي أو VIP" : "Economy bus or VIP bus",
    },
    {
      icon: <CalendarDays size={24} />,
      title: isArabic ? "موعد السفر" : "Travel Date",
      text: isArabic ? "حسب الموسم" : "Depends on season",
    },
    {
      icon: <Users size={24} />,
      title: isArabic ? "عدد المسافرين" : "Travelers",
      text: isArabic ? "فردي أو عائلي" : "Individual or family",
    },
  ];

  return (
    <section
      id="prices"
      dir={isArabic ? "rtl" : "ltr"}
      className="relative isolate overflow-hidden bg-background py-20 lg:py-28"
    >
      {/* ================================================= */}
      {/* ================= BACKGROUND ==================== */}
      {/* ================================================= */}
      <div className="absolute inset-0 -z-10 bg-[url('/haram.png')] bg-cover bg-center opacity-[0.04] dark:opacity-[0.06]" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-background via-background/95 to-accent/10" />
      <div className="islamic-pattern absolute inset-0 -z-10 opacity-30" />
      <div className="absolute -top-32 end-[-6rem] -z-10 size-[28rem] rounded-full bg-accent/15 blur-3xl" />
      <div className="absolute bottom-[-12rem] start-[-8rem] -z-10 size-[30rem] rounded-full bg-primary/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        {/* ================================================= */}
        {/* ===================== HEADER ==================== */}
        {/* ================================================= */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-card/70 px-5 py-2 text-xs font-bold text-primary shadow-sm backdrop-blur md:text-sm">
            <Sparkles size={16} />
            {isArabic ? "الأسعار والعروض" : "Prices & Offers"}
          </span>

          <h2 className="mt-5 font-serif text-3xl font-black text-foreground sm:text-4xl md:text-5xl">
            {isArabic ? "احصل على أفضل عرض سعر" : "Get the Best Price Offer"}
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-8 text-muted-foreground md:text-lg">
            {isArabic
              ? "نقدم أسعارًا تنافسية تناسب جميع المعتمرين، ويتم تحديد السعر النهائي حسب تفاصيل الرحلة والخدمات التي تختارها."
              : "We offer competitive prices for all pilgrims, and the final price is determined by the trip details and the services you choose."}
          </p>
        </motion.div>

        {/* ================================================= */}
        {/* =================== FEATURES ==================== */}
        {/* ================================================= */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
        >
          {priceFeatures.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              whileHover={{ y: -7 }}
              className="group rounded-2xl border border-border bg-card/75 p-7 text-center shadow-sm backdrop-blur transition-all duration-300 hover:border-primary/40 hover:shadow-lg"
            >
              {/* Icon */}
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl border border-primary/20 bg-primary/10 text-primary transition-all duration-300 group-hover:bg-accent group-hover:text-accent-foreground">
                {item.icon}
              </div>

              {/* Title */}
              <h3 className="mt-5 font-serif text-base font-black text-foreground">
                {item.title}
              </h3>

              {/* Text */}
              <p className="mt-2 text-sm leading-7 text-muted-foreground">
                {item.text}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* ================================================= */}
        {/* ================= MAIN PRICE CARD =============== */}
        {/* ================================================= */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.35 }}
          className="relative mt-12 overflow-hidden rounded-[2rem] border border-primary/30 bg-foreground/[0.04] p-7 text-center shadow-xl backdrop-blur-xl md:p-12 dark:bg-foreground/5"
        >
          {/* Golden top line */}
          <div className="absolute end-0 start-0 top-0 h-[2px] bg-gradient-to-l from-transparent via-primary to-transparent" />

          {/* Decorative glow */}
          <div className="pointer-events-none absolute -top-32 end-[-6rem] h-[300px] w-[300px] rounded-full bg-primary/10 blur-[90px]" />
          <div className="pointer-events-none absolute bottom-[-9rem] start-[-6rem] h-[300px] w-[300px] rounded-full bg-accent/10 blur-[90px]" />

          <div className="relative">
            {/* Icon */}
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-primary/30 bg-primary/10 text-primary">
              <Sparkles size={29} />
            </div>

            {/* Title */}
            <h3 className="mt-6 font-serif text-2xl font-black text-foreground md:text-3xl lg:text-4xl">
              {isArabic
                ? "السعر يُحدد حسب تفاصيل رحلتك"
                : "Price is determined by your trip details"}
            </h3>

            {/* Gold line */}
            <div className="mx-auto mt-5 h-[2px] w-16 bg-primary" />

            {/* Description */}
            <p className="mx-auto mt-6 max-w-3xl text-sm leading-8 text-muted-foreground md:text-lg md:leading-9">
              {isArabic ? (
                <>
                  تختلف الأسعار باختلاف الفندق، وعدد الأيام، ونوع الباص، وعدد
                  المسافرين، وتاريخ الرحلة.
                  <br />
                  تواصل معنا الآن وسنرسل لك أفضل عرض مناسب لاحتياجاتك.
                </>
              ) : (
                <>
                  Prices vary depending on the hotel, number of days, bus type,
                  number of travelers, and travel date.
                  <br />
                  Contact us now and we&apos;ll send you the best offer for your
                  needs.
                </>
              )}
            </p>

            {/* CTA */}
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex min-h-14 items-center justify-center gap-2 rounded-full bg-primary px-8 text-sm font-black text-primary-foreground shadow-lg shadow-primary/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl md:px-10 md:text-base"
            >
              <MessageCircle size={20} />
              {isArabic
                ? "اطلب عرض السعر عبر واتساب"
                : "Request a quote on WhatsApp"}
            </a>

            {/* Small note */}
            <p className="mt-5 text-xs text-muted-foreground">
              {isArabic
                ? "الرد والاستفسارات متاحة عبر واتساب"
                : "Responses and inquiries available via WhatsApp"}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
