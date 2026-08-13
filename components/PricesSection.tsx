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

const WHATSAPP = "https://wa.me/966563591198";

interface PriceFeature {
  icon: React.ReactNode;
  title: string;
  text: string;
}

const priceFeatures: PriceFeature[] = [
  {
    icon: <Hotel size={24} />,
    title: "الفندق",
    text: "٣ نجوم - ٤ نجوم - ٥ نجوم",
  },
  {
    icon: <Bus size={24} />,
    title: "وسيلة النقل",
    text: "باص اقتصادي أو VIP",
  },
  {
    icon: <CalendarDays size={24} />,
    title: "موعد السفر",
    text: "حسب الموسم",
  },
  {
    icon: <Users size={24} />,
    title: "عدد المسافرين",
    text: "فردي أو عائلي",
  },
];

export default function PricesSection(): JSX.Element {
  return (
    <section
      id="prices"
      dir="rtl"
      className="relative overflow-hidden bg-[#F8F6F1] py-20 md:py-24"
    >
      {/* ================================================= */}
      {/* ================= BACKGROUND ==================== */}
      {/* ================================================= */}

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute right-[-100px] top-[-100px] h-[350px] w-[350px] rounded-full bg-[#D4AF37]/[0.06] blur-[110px]" />

        <div className="absolute bottom-[-100px] left-[-100px] h-[350px] w-[350px] rounded-full bg-[#096B50]/[0.06] blur-[110px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        {/* ================================================= */}
        {/* ===================== HEADER ==================== */}
        {/* ================================================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.6,
          }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="inline-flex items-center gap-2 border border-[#D4AF37]/40 bg-[#D4AF37]/10 px-5 py-2 text-xs font-bold text-[#9C7A16] md:text-sm">
            <Sparkles size={16} />
            الأسعار والعروض
          </span>

          <h2 className="mt-5 text-3xl font-black text-[#202126] sm:text-4xl md:text-5xl">
            احصل على أفضل عرض سعر
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-8 text-[#6F6F72] md:text-lg">
            نقدم أسعارًا تنافسية تناسب جميع المعتمرين، ويتم تحديد السعر النهائي
            حسب تفاصيل الرحلة والخدمات التي تختارها.
          </p>
        </motion.div>

        {/* ================================================= */}
        {/* =================== FEATURES ==================== */}
        {/* ================================================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            delay: 0.2,
          }}
          className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
        >
          {priceFeatures.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: index * 0.08,
              }}
              whileHover={{
                y: -7,
              }}
              className="group border border-[#E5DFD3] bg-white p-7 text-center shadow-[0_8px_30px_rgba(32,33,38,0.05)] transition-all duration-300 hover:border-[#D4AF37]/40 hover:shadow-[0_15px_40px_rgba(32,33,38,0.09)]"
            >
              {/* Icon */}

              <div className="mx-auto flex h-14 w-14 items-center justify-center border border-[#D4AF37]/30 bg-[#D4AF37]/10 text-[#9C7A16] transition-all duration-300 group-hover:bg-[#096B50] group-hover:text-white">
                {item.icon}
              </div>

              {/* Title */}

              <h3 className="mt-5 font-black text-[#202126]">{item.title}</h3>

              {/* Text */}

              <p className="mt-2 text-sm leading-7 text-[#6F6F72]">
                {item.text}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* ================================================= */}
        {/* ================= MAIN PRICE CARD =============== */}
        {/* ================================================= */}

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
          transition={{
            delay: 0.35,
          }}
          className="relative mt-12 overflow-hidden border border-[#D4AF37]/30 bg-[#202126] p-7 text-center shadow-[0_20px_60px_rgba(32,33,38,0.15)] md:p-12"
        >
          {/* Golden top line */}

          <div className="absolute left-0 right-0 top-0 h-[2px] bg-gradient-to-l from-transparent via-[#D4AF37] to-transparent" />

          {/* Decorative glow */}

          <div className="pointer-events-none absolute right-[-100px] top-[-120px] h-[300px] w-[300px] rounded-full bg-[#D4AF37]/10 blur-[90px]" />

          <div className="pointer-events-none absolute bottom-[-150px] left-[-100px] h-[300px] w-[300px] rounded-full bg-[#096B50]/10 blur-[90px]" />

          <div className="relative">
            {/* Icon */}

            <div className="mx-auto flex h-16 w-16 items-center justify-center border border-[#D4AF37]/40 bg-[#D4AF37]/10 text-[#D4AF37]">
              <Sparkles size={29} />
            </div>

            {/* Title */}

            <h3 className="mt-6 text-2xl font-black text-white md:text-3xl lg:text-4xl">
              السعر يُحدد حسب تفاصيل رحلتك
            </h3>

            {/* Gold line */}

            <div className="mx-auto mt-5 h-[2px] w-16 bg-[#D4AF37]" />

            {/* Description */}

            <p className="mx-auto mt-6 max-w-3xl text-sm leading-8 text-[#B5B5BA] md:text-lg md:leading-9">
              تختلف الأسعار باختلاف الفندق، وعدد الأيام، ونوع الباص، وعدد
              المسافرين، وتاريخ الرحلة.
              <br />
              تواصل معنا الآن وسنرسل لك أفضل عرض مناسب لاحتياجاتك.
            </p>

            {/* CTA */}

            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center justify-center gap-2 bg-[#096B50] px-8 py-4 text-sm font-black text-white shadow-[0_10px_30px_rgba(9,107,80,0.2)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#075B44] md:px-10 md:text-base"
            >
              <MessageCircle size={20} />
              اطلب عرض السعر عبر واتساب
            </a>

            {/* Small note */}

            <p className="mt-5 text-xs text-[#77787D]">
              الرد والاستفسارات متاحة عبر واتساب
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
