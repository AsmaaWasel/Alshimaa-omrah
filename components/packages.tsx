"use client";

import { motion } from "framer-motion";
import {
  Bus,
  Crown,
  ArrowLeft,
  Hotel,
  CalendarDays,
  Star,
  Check,
  MessageCircle,
} from "lucide-react";
import { useSitePreferences } from "./site-preferences";

const whatsappNumber = "966563591198";

export default function PackagesSection() {
  const { locale } = useSitePreferences();
  const isArabic = locale === "ar";

  const packages = [
    {
      title: isArabic ? "الباقة الاقتصادية" : "Economy Package",
      description: isArabic
        ? "نقل باص شامل ومكيف"
        : "All-inclusive air-conditioned bus transport",
      icon: Bus,
      badge: isArabic ? "الأكثر حجزًا" : "Most Booked",
      href: "#economy-services",

      from: isArabic ? "الرياض" : "Riyadh",
      to: isArabic ? "مكة والمدينة" : "Makkah & Madinah",
      days: isArabic ? "يوميًا" : "Daily",
      daysText: isArabic ? "جميع الأيام" : "All days",

      features: isArabic
        ? [
            "نقل باص شامل ومكيف",
            "إقامة في فندق 3 نجوم قريب من الحرم",
            "انطلاق يومي بمواعيد ثابتة",
          ]
        : [
            "All-inclusive air-conditioned bus",
            "3-star hotel near the Haram",
            "Daily departure at fixed times",
          ],

      price: "350",
      priceText: isArabic ? "ريال للفرد" : "SAR per person",

      dateLabel: isArabic ? "الانطلاق" : "Departure",
      dateValue: isArabic ? "يوميًا" : "Daily",
      dateSub: isArabic ? "جميع الأيام" : "All days",

      button: isArabic ? "احجز هذه الباقة" : "Book this package",
      featured: false,
    },
    {
      title: isArabic ? "باقة VIP" : "VIP Package",
      description: isArabic
        ? "نقل VIP خاص بمقاعد مريحة"
        : "Private VIP transport with comfortable seats",
      icon: Crown,
      badge: isArabic ? "تجربة مميزة" : "Premium Experience",
      href: "#vip-services",

      from: isArabic ? "الرياض" : "Riyadh",
      to: isArabic ? "مكة فقط" : "Makkah only",
      days: isArabic ? "الاثنين - الخميس" : "Mon - Thu",
      daysText: isArabic ? "مرتين أسبوعيًا" : "Twice weekly",

      features: isArabic
        ? [
            "نقل VIP خاص بمقاعد مريحة",
            "إقامة في فندق 5 نجوم",
            "حجز مقاعد فقط لمن لديه سكن بمكة",
            "انطلاق كل اثنين وخميس",
          ]
        : [
            "Private VIP transport with comfortable seats",
            "5-star hotel accommodation",
            "Seat-only booking for those with Makkah residence",
            "Departure every Monday and Thursday",
          ],

      price: "650",
      priceText: isArabic ? "ريال للفرد" : "SAR per person",

      dateLabel: isArabic ? "الانطلاق" : "Departure",
      dateValue: isArabic ? "اثنين، خميس" : "Mon, Thu",
      dateSub: isArabic ? "مرتين أسبوعيًا" : "Twice weekly",

      button: isArabic ? "احجز هذه الباقة" : "Book this package",
      featured: true,
    },
    {
      title: isArabic ? "حجز مقعد فقط بالباص" : "Bus Seat Only",
      description: isArabic
        ? "احجز مقعدك في الباص فقط إذا كان لديك سكن خاص."
        : "Book your bus seat only if you have private accommodation.",
      icon: Bus,
      badge: isArabic ? "مرونة أكبر" : "More Flexibility",
      href: "#bus-services",

      from: isArabic ? "الرياض" : "Riyadh",
      to: isArabic ? "مكة والمدينة" : "Makkah & Madinah",
      days: isArabic ? "حسب الرحلة" : "Per trip",
      daysText: isArabic ? "مرونة أكبر" : "More flexibility",

      features: isArabic
        ? [
            "حجز مقعد بالباص فقط",
            "مناسب لمن لديه سكن خاص في مكة أو المدينة",
            "رحلات ذهاب وعودة",
            "باصات حديثة ومقاعد مريحة",
          ]
        : [
            "Bus seat booking only",
            "Ideal for those with private accommodation in Makkah or Madinah",
            "Round-trip journeys",
            "Modern buses with comfortable seats",
          ],

      price: isArabic ? "حسب الرحلة" : "Per trip",
      priceText: "",

      dateLabel: isArabic ? "الحجز" : "Booking",
      dateValue: isArabic ? "حسب الرحلة" : "Per trip",
      dateSub: isArabic ? "تواصل معنا" : "Contact us",

      button: isArabic ? "احجز مقعدك" : "Book your seat",
      featured: false,
    },
  ];

  const highlights = [
    {
      icon: Bus,
      title: isArabic ? "باصات حديثة" : "Modern Buses",
      text: isArabic
        ? "موديلات 2025 / 2026 / 2027 مجهزة بأحدث وسائل الراحة."
        : "2025 / 2026 / 2027 models equipped with the latest amenities.",
    },
    {
      icon: Hotel,
      title: isArabic ? "فنادق مختارة" : "Selected Hotels",
      text: isArabic
        ? "إقامة في فنادق 3 و5 نجوم بالقرب من الحرم."
        : "Stay in 3 and 5-star hotels near the Haram.",
    },
    {
      icon: CalendarDays,
      title: isArabic ? "رحلات منتظمة" : "Regular Trips",
      text: isArabic
        ? "انطلاق يومي للحملات الاقتصادية وVIP يومي الاثنين والخميس."
        : "Daily departures for economy and VIP on Mondays and Thursdays.",
    },
    {
      icon: Star,
      title: isArabic ? "خدمة مميزة" : "Premium Service",
      text: isArabic
        ? "تنظيم احترافي ومتابعة طوال الرحلة حتى العودة للرياض."
        : "Professional organization and follow-up throughout the trip until returning to Riyadh.",
    },
  ];

  const getWhatsappLink = (title: string) => {
    const message = isArabic
      ? `السلام عليكم، أرغب في الاستفسار عن ${title}`
      : `Hello, I would like to inquire about ${title}`;
    return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
  };

  return (
    <section
      id="programs"
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

      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mb-12 max-w-2xl text-center sm:mb-16"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-card/70 px-4 py-1.5 text-xs font-bold text-primary shadow-sm backdrop-blur sm:text-sm">
            {isArabic ? "باقات العمرة" : "Umrah Packages"}
          </span>

          <h2 className="mt-5 font-serif text-3xl font-black text-foreground sm:text-4xl md:text-5xl">
            {isArabic ? "استكشف الباقات" : "Explore Packages"}
          </h2>

          <p className="mt-4 text-sm leading-7 text-muted-foreground sm:text-base">
            {isArabic
              ? "اختر الباقة المناسبة لك وتواصل معنا مباشرة للحجز والاستفسار."
              : "Choose the package that suits you and contact us directly for booking and inquiries."}
          </p>
        </motion.div>

        {/* Packages */}
        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2 lg:grid-cols-3">
          {packages.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`flex flex-col rounded-[2rem] border bg-card/75 p-6 shadow-lg backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 sm:p-7 ${
                  item.featured
                    ? "border-primary/50 shadow-primary/10"
                    : "border-border hover:border-primary/30"
                }`}
              >
                {/* Top */}
                <div className="flex items-start justify-between gap-4">
                  <div className="min-w-0">
                    <span
                      className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 text-[11px] font-bold ${
                        item.featured
                          ? "border-primary/30 bg-primary/10 text-primary"
                          : "border-accent/30 bg-accent/10 text-accent"
                      }`}
                    >
                      {item.badge}
                    </span>

                    <h3 className="mt-4 font-serif text-xl font-black text-foreground sm:text-2xl">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-muted-foreground">
                      {item.description}
                    </p>
                  </div>

                  <div
                    className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border ${
                      item.featured
                        ? "border-primary/30 bg-primary/10 text-primary"
                        : "border-accent/30 bg-accent/10 text-accent"
                    }`}
                  >
                    <Icon size={21} />
                  </div>
                </div>

                {/* Route */}
                <div className="mt-5 grid grid-cols-[1fr_auto_1fr] items-center rounded-2xl border border-border bg-muted/30 p-4">
                  <div>
                    <p className="text-[11px] text-muted-foreground">
                      {isArabic ? "من" : "From"}
                    </p>
                    <p className="mt-1 text-sm font-bold text-foreground">
                      {item.from}
                    </p>
                  </div>

                  <ArrowLeft
                    className={`mx-3 ${
                      item.featured ? "text-primary" : "text-accent"
                    } ${isArabic ? "" : "rotate-180"}`}
                    size={18}
                  />

                  <div className="text-start">
                    <p className="text-[11px] text-muted-foreground">
                      {isArabic ? "إلى" : "To"}
                    </p>
                    <p className="mt-1 text-sm font-bold text-foreground">
                      {item.to}
                    </p>
                  </div>
                </div>

                {/* Schedule */}
                <div className="mt-4 flex items-center gap-3 rounded-2xl border border-border bg-muted/30 p-4">
                  <div
                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ${
                      item.featured
                        ? "bg-primary/10 text-primary"
                        : "bg-accent/10 text-accent"
                    }`}
                  >
                    <CalendarDays size={17} />
                  </div>

                  <div>
                    <p className="text-[11px] text-muted-foreground">
                      {item.dateLabel}
                    </p>
                    <p className="mt-0.5 text-sm font-bold text-foreground">
                      {item.dateValue}
                    </p>
                    <p className="text-[11px] text-muted-foreground">
                      {item.dateSub}
                    </p>
                  </div>
                </div>

                {/* Features */}
                <div className="mt-5 space-y-3">
                  {item.features.map((feature) => (
                    <div
                      key={feature}
                      className="flex items-start gap-2.5 text-sm leading-6 text-foreground/90"
                    >
                      <Check
                        size={16}
                        className={`mt-1 shrink-0 ${
                          item.featured ? "text-primary" : "text-accent"
                        }`}
                      />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="flex-1" />

                {/* Booking */}
                <div className="mt-6 space-y-3">
                  <a
                    href={item.href}
                    className="flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-primary px-4 text-sm font-black text-primary-foreground shadow-lg shadow-primary/20 transition hover:-translate-y-0.5 hover:shadow-xl"
                  >
                    {item.button}
                    <ArrowLeft
                      size={17}
                      className={isArabic ? "" : "rotate-180"}
                    />
                  </a>

                  {/* WhatsApp */}
                  <a
                    href={getWhatsappLink(item.title)}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`WhatsApp ${item.title}`}
                    className="flex min-h-12 w-full items-center justify-center gap-2 rounded-full border border-[#25D366]/30 bg-[#25D366]/10 px-4 text-sm font-bold text-[#25D366] transition hover:bg-[#25D366]/20"
                  >
                    <MessageCircle size={18} />
                    {isArabic
                      ? "تواصل معنا عبر واتساب"
                      : "Contact us on WhatsApp"}
                  </a>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 sm:mt-20"
        >
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {highlights.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -6 }}
                  className="rounded-2xl border border-border bg-card/75 p-6 text-center shadow-sm backdrop-blur transition-all duration-300 hover:border-primary/40 hover:shadow-lg"
                >
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl border border-primary/20 bg-primary/10 text-primary">
                    <Icon size={22} />
                  </div>

                  <h4 className="mt-4 font-serif text-base font-bold text-foreground">
                    {item.title}
                  </h4>

                  <p className="mt-2 text-xs leading-6 text-muted-foreground">
                    {item.text}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
