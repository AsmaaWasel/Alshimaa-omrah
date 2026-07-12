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

const WHATSAPP = "https://wa.me/966563591198";

export default function PricesSection() {
  return (
    <section className="bg-ivory py-20">
      <div className="container mx-auto px-4">
        {/* العنوان */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="divider-ornament inline-block text-xs font-bold tracking-[0.25em] text-gold-dark">
            الأسعار
          </p>

          <h2 className="mt-4 text-3xl font-extrabold text-night sm:text-5xl">
            احصل على أفضل عرض سعر
          </h2>

          <p className="mt-4 text-lg leading-8 text-ink/70">
            نقدم أسعارًا تنافسية تناسب جميع المعتمرين، ويتم تحديد السعر النهائي
            حسب تفاصيل الرحلة والخدمات المختارة.
          </p>
        </motion.div>

        {/* المميزات */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4"
        >
          {[
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
              text: "فردي أو عائلي  ",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-3xl bg-white p-7 text-center shadow-soft transition-all hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-gold/15 text-gold-dark">
                {item.icon}
              </div>

              <h3 className="font-bold text-night">{item.title}</h3>

              <p className="mt-2 text-sm leading-7 text-ink/70">{item.text}</p>
            </div>
          ))}
        </motion.div>

        {/* الكارت الرئيسي */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-12 overflow-hidden rounded-3xl bg-gradient-to-l from-gold-dark to-gold p-10 text-center text-night shadow-xl"
        >
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-white/20">
            <Sparkles size={30} />
          </div>

          <h3 className="mt-5 text-3xl font-extrabold">
            السعر يُحدد حسب تفاصيل رحلتك
          </h3>

          <p className="mx-auto mt-4 max-w-3xl text-lg leading-8">
            تختلف الأسعار باختلاف الفندق، وعدد الأيام، ونوع الباص، وعدد
            المسافرين، وتاريخ الرحلة.
            <br />
            تواصل معنا الآن وسنرسل لك أفضل عرض مناسب خلال دقائق.
          </p>

          <a
            href={WHATSAPP}
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 font-bold text-night transition hover:scale-105"
          >
            <MessageCircle size={20} />
            اطلب عرض السعر عبر واتساب
          </a>
        </motion.div>
      </div>
    </section>
  );
}
