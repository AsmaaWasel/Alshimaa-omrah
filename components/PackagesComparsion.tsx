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
} from "lucide-react";

const rows = [
  {
    icon: Bus,
    title: "الباص",
    economy: "باص سياحي حديث موديلات 2025 - 2026 - 2027، 4 صفوف، 49 مقعد",
    vip: "باص VIP فاخر، 3 صفوف فقط، 30 مقعد لمزيد من الراحة",
  },
  {
    icon: Hotel,
    title: "الفندق",
    economy: "فندق 3 نجوم مع إمكانية اختيار مستوى أعلى حسب الطلب",
    vip: "فنادق 4 و 5 نجوم بخدمات VIP",
  },
  {
    icon: MapPin,
    title: "الوجهة",
    economy: "مكة المكرمة + إمكانية إضافة المدينة المنورة",
    vip: "مكة المكرمة فقط",
  },
  {
    icon: Clock3,
    title: "مدة البرنامج",
    economy: "3 أيام / 4 أيام / 5 أيام أو حسب الطلب",
    vip: "3 أيام",
  },
  {
    icon: BedDouble,
    title: "السكن",
    economy: "غرف مشتركة للأفراد أو غرف خاصة للعائلات",
    vip: "غرف خاصة أو حسب التوفر",
  },
  {
    icon: Users,
    title: "الخدمة",
    economy: "خيار اقتصادي مناسب للأفراد والعائلات",
    vip: "خدمة راقية وراحة إضافية طوال الرحلة",
  },
];

export default function PackagesComparison() {
  return (
    <section className="bg-[#faf9f6] py-12 md:py-20" id="comparison">
      <div className="mx-auto max-w-7xl px-3 md:px-5">
        {/* العنوان */}

        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          className="mb-8 md:mb-14 text-center"
        >
          <span className="inline-block rounded-full bg-gold/10 px-4 py-2 text-xs md:text-sm font-semibold text-gold-dark">
            مقارنة الرحلات
          </span>

          <h2 className="mt-4 text-xl md:text-3xl lg:text-5xl font-extrabold text-night">
            اختر البرنامج المناسب لك
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-xs md:text-base text-night/70">
            مقارنة بين الرحلة الاقتصادية ورحلة VIP من قافلة الشيماء لخدمات
            المعتمرين والزوار.
          </p>
        </motion.div>

        {/* الجدول */}

        <div className="overflow-x-auto rounded-xl md:rounded-3xl border border-gold/20 bg-white shadow-xl">
          <table className="w-full border-collapse text-xs md:text-base">
            <thead>
              <tr className="bg-gradient-to-l from-gold to-gold-dark text-night">
                <th className="p-2 md:p-6 text-right font-bold">المقارنة</th>

                <th className="p-2 md:p-6 text-center font-bold">الاقتصادية</th>

                <th className="p-2 md:p-6 text-center font-bold">VIP</th>
              </tr>
            </thead>

            <tbody>
              {rows.map((row, index) => (
                <tr
                  key={row.title}
                  className={index % 2 === 0 ? "bg-white" : "bg-[#fcfbf8]"}
                >
                  <td className="border-b border-gold/10 p-2 md:p-6">
                    <div className="flex items-center gap-2 md:gap-3 font-semibold text-night">
                      <div className="rounded-lg bg-gold/15 p-1.5 md:p-2">
                        <row.icon size={18} className="text-gold-dark" />
                      </div>

                      <span>{row.title}</span>
                    </div>
                  </td>

                  <td className="border-b border-gold/10 p-2 md:p-6 text-center text-night/80 leading-relaxed">
                    {row.economy}
                  </td>

                  <td className="border-b border-gold/10 p-2 md:p-6 text-center font-medium text-night leading-relaxed">
                    {row.vip}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* الملاحظات */}

        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          className="mt-8 rounded-xl md:rounded-3xl border border-gold/20 bg-gradient-to-l from-[#fffdf7] to-[#fff8e8] p-4 md:p-8 shadow-lg"
        >
          <div className="grid gap-4 md:grid-cols-2">
            <div className="flex gap-3">
              <CheckCircle2 className="text-green-600 shrink-0" />

              <p className="text-sm text-night/80">
                الرحلات تشمل الذهاب والعودة حسب البرنامج المحدد.
              </p>
            </div>

            <div className="flex gap-3">
              <ShieldCheck className="text-green-600 shrink-0" />

              <p className="text-sm text-night/80">
                جميع الباصات مجهزة بأنظمة سلامة وراحة للمعتمرين.
              </p>
            </div>

            <div className="flex gap-3">
              <CheckCircle2 className="text-green-600 shrink-0" />

              <p className="text-sm text-night/80">الباقات لا تشمل الوجبات.</p>
            </div>

            <div className="flex gap-3">
              <CheckCircle2 className="text-green-600 shrink-0" />

              <p className="text-sm text-night/80">
                يمكن إضافة زيارة المدينة المنورة في الباقة الاقتصادية مقابل 10
                ريالات للمقعد ويتم السداد للسائق.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
