"use client";

import { motion } from "framer-motion";
import { Bus, Crown, ArrowLeft, Hotel, CalendarDays, Star } from "lucide-react";

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
    to: "مكة  فقط",
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
      className="relative overflow-hidden bg-[#101117] py-24 text-white"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute right-[15%] top-0 h-[500px] w-[500px] rounded-full bg-[#c9a227]/5 blur-[120px]" />

        <div className="absolute bottom-0 left-[10%] h-[400px] w-[400px] rounded-full bg-[#c9a227]/5 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        {/* ================= HEADER ================= */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <span className="inline-flex rounded-full border border-[#c9a227]/40 bg-[#c9a227]/10 px-5 py-2 text-sm font-semibold text-[#d8b63d]">
            حملات العمرة
          </span>

          <h2 className="mt-6 text-4xl font-black text-white md:text-5xl">
            تصفح الباقات
          </h2>

          <p className="mt-5 text-base leading-8 text-[#aaaab0] md:text-lg">
            باقتان واضحتان — الفرق بينهما في درجة الراحة ومواعيد الانطلاق، لا في
            جودة الخدمة.
          </p>
        </motion.div>

        {/* ================= PACKAGES ================= */}

        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-2">
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
                <div className="absolute -top-[14px] left-[25%] z-20 h-7 w-7 rounded-full bg-[#101117]" />

                {/* Bottom notch */}
                <div className="absolute -bottom-[14px] left-[25%] z-20 h-7 w-7 rounded-full bg-[#101117]" />

                {/* Vertical dotted line */}
                <div className="absolute bottom-0 left-[25%] top-0 border-l border-dashed border-[#c9a227]/40" />

                {/* ================= DATE SIDE ================= */}

                <div className="absolute bottom-0 left-0 top-0 flex w-[25%] flex-col items-center justify-center px-3 text-center">
                  <span className="mb-4 rotate-[-90deg] whitespace-nowrap text-xs text-[#8e8e95]">
                    مواعيد الانطلاق
                  </span>

                  <div className="mt-8">
                    <p className="text-sm font-medium text-[#9999a1]">
                      {item.dateLabel}
                    </p>

                    <h4 className="mt-2 text-base font-black text-white md:text-lg">
                      {item.dateValue}
                    </h4>

                    <p className="mt-2 text-xs text-[#777780]">
                      {item.dateSub}
                    </p>
                  </div>
                </div>

                {/* ================= MAIN CONTENT ================= */}

                <div className="mr-[25%] flex min-h-[540px] flex-col px-6 py-9 md:px-10">
                  {/* Badge */}

                  <div className="flex justify-start">
                    <span
                      className={`rounded-full border px-4 py-2 text-xs font-bold ${
                        item.featured
                          ? "border-[#c9a227]/50 bg-[#c9a227]/10 text-[#d6b33b]"
                          : "border-[#17866c]/50 bg-[#116b58]/10 text-[#31b894]"
                      }`}
                    >
                      {item.badge}
                    </span>
                  </div>

                  {/* Title */}

                  <div className="mt-6 flex items-center justify-between gap-4">
                    <div>
                      <h3 className="text-2xl font-black text-white md:text-3xl">
                        {item.title}
                      </h3>
                    </div>

                    <div
                      className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full border ${
                        item.featured
                          ? "border-[#c9a227]/50 bg-[#c9a227]/10 text-[#d6b33b]"
                          : "border-[#777]/30 bg-white/5 text-[#ddd]"
                      }`}
                    >
                      <Icon size={22} />
                    </div>
                  </div>

                  {/* Route */}

                  <div className="mt-8 grid grid-cols-[1fr_auto_1fr] items-center gap-3">
                    <div>
                      <p className="text-sm text-[#9c9ca3]">من</p>

                      <h4 className="mt-2 text-base font-bold text-white md:text-lg">
                        {item.from}
                      </h4>
                    </div>

                    <div className="text-xl text-[#d5ad27]">←</div>

                    <div>
                      <p className="text-sm text-[#9c9ca3]">إلى</p>

                      <h4 className="mt-2 text-base font-bold text-white md:text-lg">
                        {item.to}
                      </h4>
                    </div>
                  </div>

                  {/* Features */}

                  <div className="mt-8 space-y-4">
                    {item.features.map((feature) => (
                      <div
                        key={feature}
                        className="flex items-start gap-3 text-sm leading-6 text-[#dddde2] md:text-base"
                      >
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[#d4ad32]" />

                        <span>{feature}</span>
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
                    className="mt-7 flex w-full items-center justify-center gap-2 bg-[#d1a91f] px-5 py-4 text-sm font-black text-[#111217] transition-all duration-300 hover:bg-[#e3bd35]"
                  >
                    {item.button}

                    <ArrowLeft
                      size={18}
                      className="transition-transform duration-300 group-hover:-translate-x-1"
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
          className="mt-24"
        >
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {highlights.map((item) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  whileHover={{
                    y: -6,
                  }}
                  className="border border-[#2e3039] bg-[#181a22] p-7 text-center transition-all duration-300 hover:border-[#c9a227]/40"
                >
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-[#c9a227]/30 bg-[#c9a227]/10">
                    <Icon size={25} className="text-[#d4ae32]" />
                  </div>

                  <h4 className="mt-5 text-lg font-bold text-white">
                    {item.title}
                  </h4>

                  <p className="mt-3 text-sm leading-7 text-[#8f9097]">
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
