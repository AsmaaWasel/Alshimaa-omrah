"use client";

import { motion } from "framer-motion";
import {
  Bus,
  Crown,
  ArrowLeft,
  Hotel,
  CalendarDays,
  Star,
  Ticket,
} from "lucide-react";

const packages = [
  {
    title: "الباقة الاقتصادية",
    description:
      "رحلات عمرة يومية من الرياض إلى مكة المكرمة والمدينة المنورة بأفضل الأسعار.",
    icon: Bus,
    image: "/buses/bus2.jpeg",
    badge: "الأكثر حجزًا",
    href: "#economy-services",
    button: "استعرض الباقة",
    features: [
      "رحلات يومية",
      "فندق 3 نجوم",
      "باص سياحي حديث",
      "3 / 4 / 5 أيام",
    ],
  },
  {
    title: "باقة VIP",
    description: "رحلتان أسبوعيًا (الاثنين والخميس) بإقامة فاخرة وخدمات راقية.",
    icon: Crown,
    image: "/vip-buses/bus2.jpeg",
    badge: "VIP",
    href: "#vip-services",
    featured: true,
    button: "استعرض باقة VIP",
    features: ["الاثنين والخميس", "فنادق 5 نجوم", "باص VIP", "قريب من الحرم"],
  },
  {
    title: "حجز مقعد بالباص",
    description: "احجز مقعدك فقط إذا كان لديك سكن خاص في مكة أو المدينة.",
    icon: Ticket,
    image: "/bus.jpg",
    badge: "مرونة أكبر",
    href: "#bus-services",
    button: "احجز مقعدك",
    features: ["ذهاب وعودة", "اتجاه واحد", "باصات حديثة", "مقاعد مريحة"],
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
    title: "رحلات يومية",
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
      className="relative overflow-hidden py-24 bg-[#fbf9f5]"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(201,164,77,0.08),transparent_60%)]" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-flex rounded-full bg-[#c8a44d]/10 text-[#b58d31] px-5 py-2 font-semibold">
            حملات العمرة
          </span>

          <h2 className="mt-6 text-5xl font-black text-[#2F2A25]">
            تصفح الباقات
          </h2>

          <p className="mt-5 text-lg text-[#6b6b6b] leading-8">
            اختر الباقة المناسبة لك واستمتع برحلة عمرة متكاملة تشمل النقل،
            السكن، والتنظيم بأعلى مستويات الجودة.
          </p>
        </motion.div>

        {/* Cards */}

        <div className="grid lg:grid-cols-3 gap-8">
          {packages.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className={`group overflow-hidden rounded-[32px] bg-white shadow-xl border transition-all duration-500 ${
                  item.featured
                    ? "border-[#c8a44d] shadow-[0_15px_60px_rgba(200,164,77,.25)]"
                    : "border-[#ece7dc]"
                }`}
              >
                {/* Image */}

                <div
                  className="relative h-56 bg-cover bg-center"
                  style={{
                    backgroundImage: `url(${item.image})`,
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/10" />

                  <span className="absolute top-5 left-5 rounded-full bg-[#c8a44d] text-[#2F2A25] px-4 py-1 text-sm font-bold">
                    {item.badge}
                  </span>

                  <div className="absolute bottom-5 right-5 flex items-center gap-3 text-white">
                    <div className="w-14 h-14 rounded-2xl bg-white/20 backdrop-blur flex items-center justify-center">
                      <Icon size={28} />
                    </div>

                    <div>
                      <h3 className="font-bold text-2xl">{item.title}</h3>
                    </div>
                  </div>
                </div>

                {/* Content */}

                <div className="p-8">
                  <p className="text-[#666] leading-8">{item.description}</p>

                  <div className="mt-8 grid gap-3">
                    {item.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-3">
                        <div className="w-2.5 h-2.5 rounded-full bg-[#c8a44d]" />

                        <span className="text-[#444]">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <a
                    href={item.href}
                    className="mt-10 inline-flex w-full justify-center items-center gap-2 rounded-full bg-[#2F2A25] text-white py-4 font-bold transition hover:bg-[#c8a44d] hover:text-[#2F2A25]"
                  >
                    {item.button}

                    <ArrowLeft
                      size={18}
                      className="transition group-hover:-translate-x-1"
                    />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Why Us */}

        <div className="mt-24">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((item) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="rounded-3xl bg-white border border-[#ece7dc] p-8 text-center shadow-lg hover:-translate-y-2 transition"
                >
                  <div className="mx-auto w-16 h-16 rounded-2xl bg-[#c8a44d]/10 flex items-center justify-center mb-5">
                    <Icon size={30} className="text-[#c8a44d]" />
                  </div>

                  <h4 className="font-bold text-xl text-[#2F2A25]">
                    {item.title}
                  </h4>

                  <p className="mt-3 text-[#666] leading-7">{item.text}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
