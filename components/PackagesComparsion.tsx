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

interface ComparisonRow {
  icon: React.ElementType;
  title: string;
  economy: string;
  vip: string;
}

const rows: ComparisonRow[] = [
  {
    icon: Bus,
    title: "الباص",
    economy:
      "باص سياحي حديث موديلات 2025 - 2026 - 2027، 4 صفوف، 49 مقعد",
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

export default function PackagesComparison(): JSX.Element {
  return (
    <section
      id="comparison"
      dir="rtl"
      className="relative overflow-hidden bg-[#F8F6F1] py-16 md:py-24"
    >
      {/* ================= BACKGROUND ================= */}

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute right-[-100px] top-[-100px] h-[350px] w-[350px] rounded-full bg-[#D4AF37]/[0.06] blur-[100px]" />

        <div className="absolute bottom-[-100px] left-[-100px] h-[350px] w-[350px] rounded-full bg-[#096B50]/[0.05] blur-[100px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-3 sm:px-5">
        {/* ================================================= */}
        {/* ===================== HEADER ==================== */}
        {/* ================================================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 35,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          className="mx-auto mb-10 max-w-3xl text-center md:mb-14"
        >
          <span className="inline-flex items-center gap-2 border border-[#D4AF37]/40 bg-[#D4AF37]/10 px-5 py-2 text-xs font-bold text-[#9C7A16] md:text-sm">
            <Crown size={16} />
            مقارنة الرحلات
          </span>

          <h2 className="mt-5 text-3xl font-black text-[#202126] md:text-4xl lg:text-5xl">
            اختر البرنامج المناسب لك
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-[#6F6F72] md:text-base md:leading-8">
            مقارنة واضحة بين الرحلة الاقتصادية ورحلة VIP لتختار الباقة التي
            تناسب احتياجاتك وميزانيتك.
          </p>
        </motion.div>

        {/* ================================================= */}
        {/* ===================== TABLE ===================== */}
        {/* ================================================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 35,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.15,
          }}
          className="overflow-x-auto border border-[#D4AF37]/20 bg-white shadow-[0_15px_50px_rgba(32,33,38,0.08)]"
        >
          <table className="w-full min-w-[700px] border-collapse text-sm md:text-base">
            {/* ================= TABLE HEADER ================= */}

            <thead>
              <tr className="bg-[#202126] text-white">
                <th className="w-[22%] p-4 text-right font-bold md:p-6">
                  المقارنة
                </th>

                {/* Economy */}

                <th className="w-[39%] p-4 text-center md:p-6">
                  <div className="flex flex-col items-center justify-center">
                    <div className="mb-2 flex h-10 w-10 items-center justify-center border border-[#35B894]/40 bg-[#096B50]/20">
                      <Wallet
                        size={20}
                        className="text-[#35B894]"
                      />
                    </div>

                    <span className="text-base font-black md:text-lg">
                      الباقة الاقتصادية
                    </span>

                    <span className="mt-1 text-xs font-normal text-[#A7A8AF]">
                      الراحة والسعر المناسب
                    </span>
                  </div>
                </th>

                {/* VIP */}

                <th className="w-[39%] border-r border-[#D4AF37]/20 p-4 text-center md:p-6">
                  <div className="flex flex-col items-center justify-center">
                    <div className="mb-2 flex h-10 w-10 items-center justify-center border border-[#D4AF37]/40 bg-[#D4AF37]/10">
                      <Crown
                        size={20}
                        className="text-[#D4AF37]"
                      />
                    </div>

                    <span className="text-base font-black md:text-lg">
                      باقة VIP
                    </span>

                    <span className="mt-1 text-xs font-normal text-[#D4AF37]">
                      راحة وفخامة إضافية
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
                    initial={{
                      opacity: 0,
                      y: 15,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      delay: index * 0.06,
                    }}
                    className={`transition-colors duration-300 hover:bg-[#FAF8F2] ${
                      index % 2 === 0
                        ? "bg-white"
                        : "bg-[#FCFBF8]"
                    }`}
                  >
                    {/* Category */}

                    <td className="border-b border-[#E9E3D7] p-3 md:p-6">
                      <div className="flex items-center gap-2 md:gap-3">
                        <div className="flex h-9 w-9 shrink-0 items-center justify-center border border-[#D4AF37]/30 bg-[#D4AF37]/10 md:h-11 md:w-11">
                          <Icon
                            size={18}
                            className="text-[#9C7A16]"
                          />
                        </div>

                        <span className="font-bold text-[#202126]">
                          {row.title}
                        </span>
                      </div>
                    </td>

                    {/* Economy */}

                    <td className="border-b border-[#E9E3D7] p-3 text-center leading-7 text-[#55565B] md:p-6 md:leading-8">
                      {row.economy}
                    </td>

                    {/* VIP */}

                    <td className="border-b border-r border-[#E9E3D7] p-3 text-center font-medium leading-7 text-[#333438] md:p-6 md:leading-8">
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
          initial={{
            opacity: 0,
            y: 35,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          className="mt-8 border border-[#D4AF37]/20 bg-white p-5 shadow-[0_10px_35px_rgba(32,33,38,0.06)] md:mt-10 md:p-8"
        >
          {/* Notes title */}

          <div className="mb-6 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center bg-[#096B50]/10">
              <ShieldCheck
                size={21}
                className="text-[#096B50]"
              />
            </div>

            <div>
              <h3 className="font-black text-[#202126]">
                ملاحظات مهمة
              </h3>

              <p className="mt-1 text-xs text-[#88898D]">
                معلومات مهمة قبل الحجز
              </p>
            </div>
          </div>

          {/* Notes Grid */}

          <div className="grid gap-4 md:grid-cols-2">
            {/* Note 1 */}

            <div className="flex gap-3 border border-[#E9E3D7] bg-[#FCFBF8] p-4">
              <CheckCircle2
                size={20}
                className="mt-0.5 shrink-0 text-[#096B50]"
              />

              <p className="text-sm leading-7 text-[#55565B]">
                الرحلات تشمل الذهاب والعودة حسب البرنامج المحدد.
              </p>
            </div>

            {/* Note 2 */}

            <div className="flex gap-3 border border-[#E9E3D7] bg-[#FCFBF8] p-4">
              <ShieldCheck
                size={20}
                className="mt-0.5 shrink-0 text-[#096B50]"
              />

              <p className="text-sm leading-7 text-[#55565B]">
                جميع الباصات مجهزة بأنظمة سلامة وراحة للمعتمرين.
              </p>
            </div>

            {/* Note 3 */}

            <div className="flex gap-3 border border-[#E9E3D7] bg-[#FCFBF8] p-4">
              <CheckCircle2
                size={20}
                className="mt-0.5 shrink-0 text-[#096B50]"
              />

              <p className="text-sm leading-7 text-[#55565B]">
                الباقات لا تشمل الوجبات.
              </p>
            </div>

            {/* Note 4 */}

            <div className="flex gap-3 border border-[#E9E3D7] bg-[#FCFBF8] p-4">
              <CheckCircle2
                size={20}
                className="mt-0.5 shrink-0 text-[#096B50]"
              />

              <p className="text-sm leading-7 text-[#55565B]">
                يمكن إضافة زيارة المدينة المنورة في الباقة الاقتصادية مقابل
                10 ريالات للمقعد ويتم السداد للسائق.
              </p>
            </div>
          </div>
        </motion.div>

        {/* ================================================= */}
        {/* ===================== BOTTOM ==================== */}
        {/* ================================================= */}

        <motion.div
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          viewport={{
            once: true,
          }}
          className="mt-8 text-center"
        >
          <p className="text-sm text-[#77787C]">
            جميع التفاصيل قابلة للتحديث حسب التوفر والبرنامج المختار.
          </p>
        </motion.div>
      </div>
    </section>
  );
}