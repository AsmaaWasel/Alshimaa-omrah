"use client";

import { motion } from "framer-motion";
import {
  Bus,
  Crown,
  ArrowLeft,
  Hotel,
  CalendarDays,
  Star,
} from "lucide-react";

const packages = [
  {
    title: "الباقة الاقتصادية",
    description: "نقل باص شامل ومكيف",
    icon: Bus,
    badge: "الأكثر حجزًا",
    href: "#economy-services",

    from: "الرياض",
    to: "مكة والمدينة",
    days: "يوميًا",
    daysText: "جميع الأيام",

    features: [
      "نقل باص شامل ومكيف",
      "إقامة في فندق 3 نجوم قريب من الحرم",
      "انطلاق يومي بمواعيد ثابتة",
    ],

    price: "350",
    priceText: "ريال للفرد",

    dateLabel: "انطلاق",
    dateValue: "يوميًا",
    dateSub: "جميع الأيام",

    button: "احجز هذه الباقة",
    featured: false,
  },

  {
    title: "باقة VIP",
    description: "نقل VIP خاص بمقاعد مريحة",
    icon: Crown,
    badge: "تجربة مميزة",
    href: "#vip-services",

    from: "الرياض",
    to: "مكة فقط",
    days: "الاثنين - الخميس",
    daysText: "مرتين أسبوعيًا",

    features: [
      "نقل VIP خاص بمقاعد مريحة",
      "إقامة في فندق 5 نجوم",
      "حجز مقاعد فقط لمن لديه سكن بمكة",
      "انطلاق كل اثنين وخميس",
    ],

    price: "650",
    priceText: "ريال للفرد",

    dateLabel: "انطلاق",
    dateValue: "اثنين، خميس",
    dateSub: "مرتين أسبوعيًا",

    button: "احجز هذه الباقة",
    featured: true,
  },

  {
    title: "حجز مقعد فقط بالباص",
    description: "احجز مقعدك في الباص فقط إذا كان لديك سكن خاص.",
    icon: Bus,
    badge: "مرونة أكبر",
    href: "#bus-services",

    from: "الرياض",
    to: "مكة والمدينة",
    days: "حسب الرحلة",
    daysText: "مرونة أكبر",

    features: [
      "حجز مقعد بالباص فقط",
      "مناسب لمن لديه سكن خاص في مكة أو المدينة",
      "رحلات ذهاب وعودة",
      "باصات حديثة ومقاعد مريحة",
    ],

    price: "حسب الرحلة",
    priceText: "",

    dateLabel: "الحجز",
    dateValue: "حسب الرحلة",
    dateSub: "تواصل معنا",

    button: "احجز مقعدك",
    featured: false,
  },
];

const highlights = [
  {
    icon: Bus,
    title: "باصات حديثة",
    text: "موديلات 2025 / 2026 / 2027 مجهزة بأحدث وسائل الراحة.",
  },
  {
    icon: Hotel,
    title: "فنادق مختارة",
    text: "إقامة في فنادق 3 و5 نجوم بالقرب من الحرم.",
  },
  {
    icon: CalendarDays,
    title: "رحلات منتظمة",
    text: "انطلاق يومي للحملات الاقتصادية وVIP يومي الاثنين والخميس.",
  },
  {
    icon: Star,
    title: "خدمة مميزة",
    text: "تنظيم احترافي ومتابعة طوال الرحلة حتى العودة للرياض.",
  },
];

export default function PackagesSection() {
  return (
    <section
      id="programs"
      dir="rtl"
      className="relative overflow-hidden bg-[#101117] py-16 text-white sm:py-20 md:py-24"
    >
      {/* ================= BACKGROUND ================= */}

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute right-[15%] top-0 h-[500px] w-[500px] rounded-full bg-[#c9a227]/5 blur-[120px]" />

        <div className="absolute bottom-0 left-[10%] h-[400px] w-[400px] rounded-full bg-[#c9a227]/5 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-3 sm:px-5 md:px-6">
        {/* ================= HEADER ================= */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mb-10 max-w-3xl text-center sm:mb-14 md:mb-16"
        >
          <span className="inline-flex rounded-full border border-[#c9a227]/40 bg-[#c9a227]/10 px-4 py-1.5 text-xs font-semibold text-[#d8b63d] sm:px-5 sm:py-2 sm:text-sm">
            حملات العمرة
          </span>

          <h2 className="mt-5 text-3xl font-black text-white sm:text-4xl md:mt-6 md:text-5xl">
            تصفح الباقات
          </h2>

          <p className="mt-4 px-2 text-sm leading-7 text-[#aaaab0] sm:text-base sm:leading-8 md:mt-5 md:text-lg">
            باقتان واضحتان — الفرق بينهما في درجة الراحة ومواعيد الانطلاق، لا
            في جودة الخدمة.
          </p>
        </motion.div>

        {/* ================= PACKAGES ================= */}

        <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-2 lg:gap-8">
          {packages.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.article
                key={item.title}
                initial={{
                  opacity: 0,
                  y: 45,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.15,
                }}
                viewport={{
                  once: true,
                  amount: 0.2,
                }}
                whileHover={{
                  y: -6,
                }}
                className={`group relative min-h-[540px] overflow-hidden border bg-[#191b25] transition-all duration-500 ${
                  item.featured
                    ? "border-[#c9a227]/60 shadow-[0_20px_70px_rgba(201,162,39,0.10)]"
                    : "border-[#343642]"
                }`}
              >
                {/* ================= TICKET NOTCHES ================= */}

                {/* Top notch */}
                <div className="absolute -top-[14px] left-[20%] z-20 h-7 w-7 rounded-full bg-[#101117]" />

                {/* Bottom notch */}
                <div className="absolute -bottom-[14px] left-[20%] z-20 h-7 w-7 rounded-full bg-[#101117]" />

                {/* Vertical dotted line */}
                <div className="absolute bottom-0 left-[20%] top-0 border-l border-dashed border-[#c9a227]/40" />

                {/* ================= DATE SIDE ================= */}

                <div className="absolute bottom-0 left-0 top-0 flex w-[20%] flex-col items-center justify-center px-1 text-center sm:px-2 md:px-3">
                  <span className="mb-3 rotate-[-90deg] whitespace-nowrap text-[9px] text-[#8e8e95] sm:mb-4 sm:text-xs">
                    مواعيد الانطلاق
                  </span>

                  <div className="mt-6 sm:mt-8">
                    <p className="text-[9px] font-medium text-[#9999a1] sm:text-sm">
                      {item.dateLabel}
                    </p>

                    <h4 className="mt-1 text-[10px] font-black text-white sm:mt-2 sm:text-base md:text-lg">
                      {item.dateValue}
                    </h4>

                    <p className="mt-1 text-[8px] text-[#777780] sm:mt-2 sm:text-xs">
                      {item.dateSub}
                    </p>
                  </div>
                </div>

                {/* ================= MAIN CONTENT ================= */}

                <div className="mr-[20%] flex min-h-[540px] flex-col px-2 py-7 sm:px-4 sm:py-9 md:px-8">
                  {/* Badge */}

                  <div className="flex justify-start">
                    <span
                      className={`rounded-full border px-2.5 py-1.5 text-[9px] font-bold sm:px-4 sm:py-2 sm:text-xs ${
                        item.featured
                          ? "border-[#c9a227]/50 bg-[#c9a227]/10 text-[#d6b33b]"
                          : "border-[#17866c]/50 bg-[#116b58]/10 text-[#31b894]"
                      }`}
                    >
                      {item.badge}
                    </span>
                  </div>

                  {/* Title */}

                  <div className="mt-4 flex items-center justify-between gap-2 sm:mt-6 sm:gap-4">
                    <div className="min-w-0">
                      <h3 className="text-base font-black leading-tight text-white sm:text-2xl md:text-3xl">
                        {item.title}
                      </h3>
                    </div>

                    <div
                      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border sm:h-12 sm:w-12 ${
                        item.featured
                          ? "border-[#c9a227]/50 bg-[#c9a227]/10 text-[#d6b33b]"
                          : "border-[#777]/30 bg-white/5 text-[#ddd]"
                      }`}
                    >
                      <Icon size={17} className="sm:h-[22px] sm:w-[22px]" />
                    </div>
                  </div>

                  {/* Route */}

                  <div className="mt-6 grid grid-cols-[1fr_auto_1fr] items-center gap-1.5 sm:mt-8 sm:gap-3">
                    <div className="min-w-0">
                      <p className="text-[10px] text-[#9c9ca3] sm:text-sm">
                        من
                      </p>

                      <h4 className="mt-1 truncate text-xs font-bold text-white sm:mt-2 sm:text-base md:text-lg">
                        {item.from}
                      </h4>
                    </div>

                    <div className="text-base text-[#d5ad27] sm:text-xl">
                      ←
                    </div>

                    <div className="min-w-0">
                      <p className="text-[10px] text-[#9c9ca3] sm:text-sm">
                        إلى
                      </p>

                      <h4 className="mt-1 text-xs font-bold text-white sm:mt-2 sm:text-base md:text-lg">
                        {item.to}
                      </h4>
                    </div>
                  </div>

                  {/* Features */}

                  <div className="mt-6 space-y-3 sm:mt-8 sm:space-y-4">
                    {item.features.map((feature) => (
                      <div
                        key={feature}
                        className="flex items-start gap-2 text-[10px] leading-5 text-[#dddde2] sm:gap-3 sm:text-sm sm:leading-6 md:text-base"
                      >
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[#d4ad32]" />

                        <span className="min-w-0">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Spacer */}

                  <div className="flex-1" />

                  {/* Button */}

                  <motion.a
                    href={item.href}
                    whileHover={{
                      scale: 1.02,
                    }}
                    whileTap={{
                      scale: 0.98,
                    }}
                    className="mt-6 flex w-full items-center justify-center gap-1.5 bg-[#d1a91f] px-3 py-3 text-[10px] font-black text-[#111217] transition-all duration-300 hover:bg-[#e3bd35] sm:mt-7 sm:gap-2 sm:px-5 sm:py-4 sm:text-sm"
                  >
                    {item.button}

                    <ArrowLeft
                      size={15}
                      className="transition-transform duration-300 group-hover:-translate-x-1 sm:h-[18px] sm:w-[18px]"
                    />
                  </motion.a>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* ================= HIGHLIGHTS ================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          className="mt-16 sm:mt-20 md:mt-24"
        >
          <div className="grid gap-4 sm:gap-5 md:grid-cols-2 lg:grid-cols-4">
            {highlights.map((item) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  whileHover={{
                    y: -6,
                  }}
                  className="border border-[#2e3039] bg-[#181a22] p-5 text-center transition-all duration-300 hover:border-[#c9a227]/40 sm:p-7"
                >
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-[#c9a227]/30 bg-[#c9a227]/10 sm:h-14 sm:w-14">
                    <Icon
                      size={22}
                      className="text-[#d4ae32] sm:h-[25px] sm:w-[25px]"
                    />
                  </div>

                  <h4 className="mt-4 text-base font-bold text-white sm:mt-5 sm:text-lg">
                    {item.title}
                  </h4>

                  <p className="mt-2 text-xs leading-6 text-[#8f9097] sm:mt-3 sm:text-sm sm:leading-7">
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