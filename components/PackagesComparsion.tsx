"use client";

import { motion } from "framer-motion";
import {
  Bus,
  Hotel,
  MapPin,
  Clock3,
  BedDouble,
  CheckCircle2,
  ShieldCheck,
  Users,
  Crown,
  Wallet,
} from "lucide-react";
import { JSX } from "react";
import { useSitePreferences } from "./site-preferences";

interface ComparisonRow {
  icon: React.ElementType;
  title: string;
  economy: string;
  vip: string;
}

export default function PackagesComparison(): JSX.Element {
  const { locale } = useSitePreferences();
  const isArabic = locale === "ar";

  const rows: ComparisonRow[] = [
    {
      icon: Bus,
      title: isArabic ? "الباص" : "Bus",
      economy: isArabic
        ? "باص سياحي حديث موديلات 2025 - 2026 - 2027، 4 صفوف، 49 مقعد"
        : "Modern tourist bus 2025-2027, 4 rows, 49 seats",
      vip: isArabic
        ? "باص VIP فاخر، 3 صفوف فقط، 30 مقعد لمزيد من الراحة"
        : "Luxury VIP bus, only 3 rows, 30 seats for extra comfort",
    },
    {
      icon: Hotel,
      title: isArabic ? "الفندق" : "Hotel",
      economy: isArabic
        ? "فندق 3 نجوم مع إمكانية اختيار مستوى أعلى حسب الطلب"
        : "3-star hotel with upgrade option upon request",
      vip: isArabic
        ? "فنادق 4 و 5 نجوم بخدمات VIP"
        : "4 and 5-star hotels with VIP services",
    },
    {
      icon: MapPin,
      title: isArabic ? "الوجهة" : "Destination",
      economy: isArabic
        ? "مكة المكرمة + إمكانية إضافة المدينة المنورة"
        : "Makkah + optional Madinah add-on",
      vip: isArabic ? "مكة المكرمة فقط" : "Makkah only",
    },
    {
      icon: Clock3,
      title: isArabic ? "مدة البرنامج" : "Duration",
      economy: isArabic
        ? "3 أيام / 4 أيام / 5 أيام أو حسب الطلب"
        : "3 / 4 / 5 days or on request",
      vip: isArabic ? "3 أيام" : "3 days",
    },
    {
      icon: BedDouble,
      title: isArabic ? "السكن" : "Accommodation",
      economy: isArabic
        ? "غرف مشتركة للأفراد أو غرف خاصة للعائلات"
        : "Shared rooms for individuals or private rooms for families",
      vip: isArabic
        ? "غرف خاصة أو حسب التوفر"
        : "Private rooms or subject to availability",
    },
    {
      icon: Users,
      title: isArabic ? "الخدمة" : "Service",
      economy: isArabic
        ? "خيار اقتصادي مناسب للأفراد والعائلات"
        : "Economy option suitable for individuals and families",
      vip: isArabic
        ? "خدمة راقية وراحة إضافية طوال الرحلة"
        : "Premium service and extra comfort throughout the trip",
    },
  ];

  const notes = isArabic
    ? [
        "الرحلات تشمل الذهاب والعودة حسب البرنامج المحدد.",
        "جميع الباصات مجهزة بأنظمة سلامة وراحة للمعتمرين.",
        "الباقات لا تشمل الوجبات.",
        "يمكن إضافة زيارة المدينة المنورة في الباقة الاقتصادية مقابل 10 ريالات للمقعد ويتم السداد للسائق.",
      ]
    : [
        "Trips include round-trip according to the selected program.",
        "All buses are equipped with safety and comfort systems for pilgrims.",
        "Packages do not include meals.",
        "Madinah visit can be added to the economy package for 10 SAR per seat, paid to the driver.",
      ];

  return (
    <section
      id="comparison"
      dir={isArabic ? "rtl" : "ltr"}
      className="relative isolate overflow-hidden bg-background py-20 lg:py-28"
    >
      {/* ================= BACKGROUND ================= */}
      <div className="absolute inset-0 -z-10 bg-[url('/haram.png')] bg-cover bg-center opacity-[0.04] dark:opacity-[0.06]" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-background via-background/95 to-accent/10" />
      <div className="islamic-pattern absolute inset-0 -z-10 opacity-30" />
      <div className="absolute -top-32 end-[-6rem] -z-10 size-[28rem] rounded-full bg-accent/15 blur-3xl" />
      <div className="absolute bottom-[-12rem] start-[-8rem] -z-10 size-[30rem] rounded-full bg-primary/10 blur-3xl" />

      <div className="relative mx-auto w-full max-w-7xl px-6 lg:px-10">
        {/* ================================================= */}
        {/* ===================== HEADER ==================== */}
        {/* ================================================= */}

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mb-12 max-w-3xl text-center sm:mb-14"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-card/70 px-5 py-2 text-xs font-bold text-primary shadow-sm backdrop-blur sm:text-sm">
            <Crown size={15} />
            {isArabic ? "مقارنة الرحلات" : "Trip Comparison"}
          </span>

          <h2 className="mt-5 font-serif text-3xl font-black text-foreground sm:text-4xl md:text-5xl">
            {isArabic ? "اختر البرنامج المناسب لك" : "Choose the Right Program"}
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-muted-foreground sm:text-base sm:leading-8">
            {isArabic
              ? "مقارنة واضحة بين الرحلة الاقتصادية ورحلة VIP لتختار الباقة التي تناسب احتياجاتك وميزانيتك."
              : "A clear comparison between Economy and VIP trips to help you choose the package that fits your needs and budget."}
          </p>
        </motion.div>

        {/* ================================================= */}
        {/* ===================== TABLE ===================== */}
        {/* ================================================= */}

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          className="w-full overflow-hidden rounded-[2rem] border border-border bg-card/75 shadow-xl backdrop-blur-xl"
        >
          <table className="w-full table-fixed border-collapse text-[11px] sm:text-sm md:text-base">
            {/* ================= TABLE HEADER ================= */}

            <thead>
              <tr className="bg-foreground/[0.04] text-foreground dark:bg-foreground/5">
                {/* Comparison */}
                <th className="w-[22%] p-3 text-start font-bold sm:p-5 md:p-6">
                  <span className="text-[10px] sm:text-sm md:text-base">
                    {isArabic ? "المقارنة" : "Comparison"}
                  </span>
                </th>

                {/* Economy */}
                <th className="w-[39%] p-3 text-center sm:p-5 md:p-6">
                  <div className="flex flex-col items-center justify-center gap-1">
                    <div className="mb-1 flex h-9 w-9 items-center justify-center rounded-xl border border-accent/30 bg-accent/10 sm:h-11 sm:w-11">
                      <Wallet size={16} className="text-accent sm:h-5 sm:w-5" />
                    </div>
                    <span className="text-xs font-black leading-tight sm:text-base md:text-lg">
                      {isArabic ? "الباقة الاقتصادية" : "Economy Package"}
                    </span>
                    <span className="mt-0.5 text-[9px] font-normal leading-tight text-muted-foreground sm:text-xs">
                      {isArabic
                        ? "الراحة والسعر المناسب"
                        : "Comfort at a fair price"}
                    </span>
                  </div>
                </th>

                {/* VIP */}
                <th className="w-[39%] border-s border-border p-3 text-center sm:p-5 md:p-6">
                  <div className="flex flex-col items-center justify-center gap-1">
                    <div className="mb-1 flex h-9 w-9 items-center justify-center rounded-xl border border-primary/30 bg-primary/10 sm:h-11 sm:w-11">
                      <Crown size={16} className="text-primary sm:h-5 sm:w-5" />
                    </div>
                    <span className="text-xs font-black leading-tight sm:text-base md:text-lg">
                      {isArabic ? "باقة VIP" : "VIP Package"}
                    </span>
                    <span className="mt-0.5 text-[9px] font-normal leading-tight text-primary sm:text-xs">
                      {isArabic
                        ? "راحة وفخامة إضافية"
                        : "Extra comfort and luxury"}
                    </span>
                  </div>
                </th>
              </tr>
            </thead>

            {/* ================= TABLE BODY ================= */}

            <tbody>
              {rows.map((row, index) => {
                const Icon = row.icon;

                return (
                  <motion.tr
                    key={row.title}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.06 }}
                    className={`transition-colors duration-300 hover:bg-primary/[0.04] ${
                      index % 2 === 0 ? "bg-transparent" : "bg-muted/20"
                    }`}
                  >
                    {/* ================= CATEGORY ================= */}

                    <td className="border-b border-border p-3 sm:p-5 md:p-6">
                      <div className="flex flex-col items-center justify-center gap-2 text-center sm:flex-row sm:gap-3 sm:text-start">
                        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-primary/20 bg-primary/10 sm:h-10 sm:w-10 md:h-11 md:w-11">
                          <Icon
                            size={16}
                            className="text-primary sm:h-[18px] sm:w-[18px]"
                          />
                        </div>
                        <span className="text-[11px] font-bold leading-tight text-foreground sm:text-sm md:text-base">
                          {row.title}
                        </span>
                      </div>
                    </td>

                    {/* ================= ECONOMY ================= */}

                    <td className="border-b border-border p-3 text-center text-[11px] leading-6 text-foreground/80 break-words sm:p-5 sm:text-xs sm:leading-7 md:p-6 md:text-base md:leading-8">
                      {row.economy}
                    </td>

                    {/* ================= VIP ================= */}

                    <td className="border-b border-s border-border p-3 text-center text-[11px] font-medium leading-6 text-foreground break-words sm:p-5 sm:text-xs sm:leading-7 md:p-6 md:text-base md:leading-8">
                      {row.vip}
                    </td>
                  </motion.tr>
                );
              })}
            </tbody>
          </table>
        </motion.div>

        {/* ================================================= */}
        {/* ===================== NOTES ===================== */}
        {/* ================================================= */}

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-8 rounded-[2rem] border border-border bg-card/75 p-6 shadow-lg backdrop-blur-xl sm:p-8"
        >
          {/* Notes title */}
          <div className="mb-5 flex items-center gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent/10">
              <ShieldCheck size={20} className="text-accent" />
            </div>
            <div>
              <h3 className="font-serif text-base font-black text-foreground sm:text-lg">
                {isArabic ? "ملاحظات مهمة" : "Important Notes"}
              </h3>
              <p className="mt-0.5 text-xs text-muted-foreground">
                {isArabic
                  ? "معلومات مهمة قبل الحجز"
                  : "Important information before booking"}
              </p>
            </div>
          </div>

          {/* Notes Grid */}
          <div className="grid gap-4 md:grid-cols-2">
            {notes.map((note, index) => (
              <div
                key={index}
                className="flex gap-3 rounded-2xl border border-border bg-muted/30 p-4"
              >
                <CheckCircle2
                  size={18}
                  className="mt-0.5 shrink-0 text-accent"
                />
                <p className="text-xs leading-6 text-foreground/85 sm:text-sm sm:leading-7">
                  {note}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* ================================================= */}
        {/* ===================== BOTTOM ==================== */}
        {/* ================================================= */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-8 text-center"
        >
          <p className="text-xs text-muted-foreground sm:text-sm">
            {isArabic
              ? "جميع التفاصيل قابلة للتحديث حسب التوفر والبرنامج المختار."
              : "All details are subject to update based on availability and the selected program."}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
