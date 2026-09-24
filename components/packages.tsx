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

    dateLabel: "الانطلاق",
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

    dateLabel: "الانطلاق",
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

const whatsappNumber = "966563591198";

const getWhatsappLink = (title: string) => {
  const message = `السلام عليكم، أرغب في الاستفسار عن ${title}`;
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
};

export default function PackagesSection() {
  return (
    <section
      id="programs"
      dir="rtl"
      className="bg-[#101117] py-14 text-white sm:py-20"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mb-10 max-w-2xl text-center sm:mb-14"
        >
          <span className="inline-flex rounded-full border border-[#c9a227]/30 bg-[#c9a227]/10 px-4 py-1.5 text-xs font-semibold text-[#d8b63d]">
            حملات العمرة
          </span>

          <h2 className="mt-4 text-3xl font-black text-white sm:text-4xl md:text-5xl">
            تصفح الباقات
          </h2>

          <p className="mt-3 text-sm leading-7 text-[#aaaab0] sm:text-base">
            اختر الباقة المناسبة لك وتواصل معنا مباشرة للحجز والاستفسار.
          </p>
        </motion.div>

        {/* Packages */}
        <div className="mx-auto grid max-w-6xl gap-5 md:grid-cols-2 lg:grid-cols-3">
          {packages.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                className={`flex flex-col rounded-2xl border bg-[#191b25] p-5 transition-all duration-300 sm:p-6 ${
                  item.featured
                    ? "border-[#c9a227]/60 shadow-lg shadow-[#c9a227]/5"
                    : "border-[#30323b]"
                }`}
              >
                {/* Top */}
                <div className="flex items-start justify-between gap-4">
                  <div className="min-w-0">
                    <span
                      className={`inline-flex rounded-full border px-3 py-1 text-[11px] font-bold ${
                        item.featured
                          ? "border-[#c9a227]/40 bg-[#c9a227]/10 text-[#d8b63d]"
                          : "border-[#17866c]/40 bg-[#116b58]/10 text-[#31b894]"
                      }`}
                    >
                      {item.badge}
                    </span>

                    <h3 className="mt-4 text-xl font-black text-white sm:text-2xl">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-[#92939b]">
                      {item.description}
                    </p>
                  </div>

                  <div
                    className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border ${
                      item.featured
                        ? "border-[#c9a227]/40 bg-[#c9a227]/10 text-[#d8b63d]"
                        : "border-white/10 bg-white/5 text-[#ddd]"
                    }`}
                  >
                    <Icon size={21} />
                  </div>
                </div>

                {/* Price */}
                {/* <div className="mt-6 rounded-xl bg-[#111319] px-4 py-4">
                  <p className="text-xs text-[#85868e]">السعر</p>

                  <div className="mt-1 flex items-baseline gap-2">
                    <span className="text-2xl font-black text-[#d8b63d]">
                      {item.price}
                    </span>

                    {item.priceText && (
                      <span className="text-xs text-[#999aa2]">
                        {item.priceText}
                      </span>
                    )}
                  </div>
                </div> */}

                {/* Route */}
                <div className="mt-5 grid grid-cols-[1fr_auto_1fr] items-center rounded-xl border border-white/5 bg-white/[0.02] p-4">
                  <div>
                    <p className="text-[11px] text-[#777982]">من</p>
                    <p className="mt-1 text-sm font-bold text-white">
                      {item.from}
                    </p>
                  </div>

                  <ArrowLeft className="mx-3 text-[#c9a227]" size={18} />

                  <div className="text-left">
                    <p className="text-[11px] text-[#777982]">إلى</p>
                    <p className="mt-1 text-sm font-bold text-white">
                      {item.to}
                    </p>
                  </div>
                </div>

                {/* Schedule */}
                <div className="mt-4 flex items-center gap-3 rounded-xl border border-white/5 bg-white/[0.02] p-4">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#c9a227]/10 text-[#d8b63d]">
                    <CalendarDays size={17} />
                  </div>

                  <div>
                    <p className="text-[11px] text-[#777982]">
                      {item.dateLabel}
                    </p>

                    <p className="mt-0.5 text-sm font-bold text-white">
                      {item.dateValue}
                    </p>

                    <p className="text-[11px] text-[#777982]">{item.dateSub}</p>
                  </div>
                </div>

                {/* Features */}
                <div className="mt-5 space-y-3">
                  {item.features.map((feature) => (
                    <div
                      key={feature}
                      className="flex items-start gap-2.5 text-sm leading-6 text-[#d6d6da]"
                    >
                      <Check
                        size={16}
                        className="mt-1 shrink-0 text-[#c9a227]"
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
                    className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#d1a91f] px-4 py-3.5 text-sm font-black text-[#111217] transition hover:bg-[#e3bd35]"
                  >
                    {item.button}

                    <ArrowLeft size={17} />
                  </a>

                  {/* WhatsApp */}
                  <a
                    href={getWhatsappLink(item.title)}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`واتساب ${item.title}`}
                    className="flex w-full items-center justify-center gap-2 rounded-xl border border-[#25D366]/30 bg-[#25D366]/10 px-4 py-3 text-sm font-bold text-[#45df7d] transition hover:bg-[#25D366]/20"
                  >
                    <MessageCircle size={18} />
                    تواصل معنا عبر واتساب
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
          className="mt-14 sm:mt-20"
        >
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {highlights.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-2xl border border-[#2e3039] bg-[#181a22] p-5 text-center transition hover:border-[#c9a227]/40"
                >
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl border border-[#c9a227]/30 bg-[#c9a227]/10 text-[#d4ae32]">
                    <Icon size={22} />
                  </div>

                  <h4 className="mt-4 text-base font-bold text-white">
                    {item.title}
                  </h4>

                  <p className="mt-2 text-xs leading-6 text-[#8f9097]">
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
