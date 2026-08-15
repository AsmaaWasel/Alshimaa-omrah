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

export default function PackagesComparison(): JSX.Element {
  return (
    <section
      id="comparison"
      dir="rtl"
      className="relative overflow-hidden bg-[#F8F6F1] py-10 sm:py-16 md:py-24"
    >
      {/* ================= BACKGROUND ================= */}

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute right-[-100px] top-[-100px] h-[350px] w-[350px] rounded-full bg-[#D4AF37]/[0.06] blur-[100px]" />

        <div className="absolute bottom-[-100px] left-[-100px] h-[350px] w-[350px] rounded-full bg-[#096B50]/[0.05] blur-[100px]" />
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-2 sm:px-5">
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
          className="mx-auto mb-7 max-w-3xl text-center sm:mb-10 md:mb-14"
        >
          <span className="inline-flex items-center gap-1.5 border border-[#D4AF37]/40 bg-[#D4AF37]/10 px-3 py-1.5 text-[10px] font-bold text-[#9C7A16] sm:gap-2 sm:px-5 sm:py-2 sm:text-xs md:text-sm">
            <Crown size={13} className="sm:h-4 sm:w-4" />
            مقارنة الرحلات
          </span>

          <h2 className="mt-4 text-2xl font-black text-[#202126] sm:mt-5 sm:text-3xl md:text-4xl lg:text-5xl">
            اختر البرنامج المناسب لك
          </h2>

          <p className="mx-auto mt-3 max-w-2xl px-2 text-xs leading-6 text-[#6F6F72] sm:mt-4 sm:text-sm sm:leading-7 md:text-base md:leading-8">
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
          className="w-full overflow-hidden border border-[#D4AF37]/20 bg-white shadow-[0_15px_50px_rgba(32,33,38,0.08)]"
        >
          <table className="w-full table-fixed border-collapse text-[10px] sm:text-sm md:text-base">
            {/* ================= TABLE HEADER ================= */}

            <thead>
              <tr className="bg-[#202126] text-white">
                {/* Comparison */}
                <th className="w-[20%] p-1.5 text-right font-bold sm:p-4 md:p-6">
                  <span className="text-[9px] sm:text-sm md:text-base">
                    المقارنة
                  </span>
                </th>

                {/* Economy */}

                <th className="w-[40%] p-1.5 text-center sm:p-4 md:p-6">
                  <div className="flex flex-col items-center justify-center">
                    <div className="mb-1 flex h-7 w-7 items-center justify-center border border-[#35B894]/40 bg-[#096B50]/20 sm:mb-2 sm:h-10 sm:w-10">
                      <Wallet
                        size={13}
                        className="text-[#35B894] sm:h-5 sm:w-5"
                      />
                    </div>

                    <span className="text-[10px] font-black leading-tight sm:text-base md:text-lg">
                      الباقة الاقتصادية
                    </span>

                    <span className="mt-0.5 text-[7px] font-normal leading-tight text-[#A7A8AF] sm:mt-1 sm:text-xs">
                      الراحة والسعر المناسب
                    </span>
                  </div>
                </th>

                {/* VIP */}

                <th className="w-[40%] border-r border-[#D4AF37]/20 p-1.5 text-center sm:p-4 md:p-6">
                  <div className="flex flex-col items-center justify-center">
                    <div className="mb-1 flex h-7 w-7 items-center justify-center border border-[#D4AF37]/40 bg-[#D4AF37]/10 sm:mb-2 sm:h-10 sm:w-10">
                      <Crown
                        size={13}
                        className="text-[#D4AF37] sm:h-5 sm:w-5"
                      />
                    </div>

                    <span className="text-[10px] font-black leading-tight sm:text-base md:text-lg">
                      باقة VIP
                    </span>

                    <span className="mt-0.5 text-[7px] font-normal leading-tight text-[#D4AF37] sm:mt-1 sm:text-xs">
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
                      index % 2 === 0 ? "bg-white" : "bg-[#FCFBF8]"
                    }`}
                  >
                    {/* ================= CATEGORY ================= */}

                    <td className="border-b border-[#E9E3D7] p-1.5 sm:p-3 md:p-6">
                      <div className="flex flex-col items-center justify-center gap-1 sm:flex-row sm:gap-2 md:gap-3">
                        <div className="flex h-6 w-6 shrink-0 items-center justify-center border border-[#D4AF37]/30 bg-[#D4AF37]/10 sm:h-9 sm:w-9 md:h-11 md:w-11">
                          <Icon
                            size={12}
                            className="text-[#9C7A16] sm:h-[18px] sm:w-[18px]"
                          />
                        </div>

                        <span className="text-center text-[8px] font-bold leading-tight text-[#202126] sm:text-sm md:text-base">
                          {row.title}
                        </span>
                      </div>
                    </td>

                    {/* ================= ECONOMY ================= */}

                    <td className="border-b border-[#E9E3D7] p-1.5 text-center text-[8px] leading-[1.45] text-[#55565B] break-words sm:p-3 sm:text-xs sm:leading-6 md:p-6 md:text-base md:leading-8">
                      {row.economy}
                    </td>

                    {/* ================= VIP ================= */}

                    <td className="border-b border-r border-[#E9E3D7] p-1.5 text-center text-[8px] font-medium leading-[1.45] text-[#333438] break-words sm:p-3 sm:text-xs sm:leading-6 md:p-6 md:text-base md:leading-8">
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
          className="mt-6 border border-[#D4AF37]/20 bg-white p-3 shadow-[0_10px_35px_rgba(32,33,38,0.06)] sm:mt-8 sm:p-5 md:mt-10 md:p-8"
        >
          {/* Notes title */}

          <div className="mb-4 flex items-center gap-2 sm:mb-6 sm:gap-3">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center bg-[#096B50]/10 sm:h-10 sm:w-10">
              <ShieldCheck
                size={17}
                className="text-[#096B50] sm:h-[21px] sm:w-[21px]"
              />
            </div>

            <div>
              <h3 className="text-sm font-black text-[#202126] sm:text-base">
                ملاحظات مهمة
              </h3>

              <p className="mt-0.5 text-[9px] text-[#88898D] sm:mt-1 sm:text-xs">
                معلومات مهمة قبل الحجز
              </p>
            </div>
          </div>

          {/* Notes Grid */}

          <div className="grid gap-2.5 sm:gap-4 md:grid-cols-2">
            {/* Note 1 */}

            <div className="flex gap-2 border border-[#E9E3D7] bg-[#FCFBF8] p-2.5 sm:gap-3 sm:p-4">
              <CheckCircle2
                size={16}
                className="mt-0.5 shrink-0 text-[#096B50] sm:h-5 sm:w-5"
              />

              <p className="text-[10px] leading-5 text-[#55565B] sm:text-sm sm:leading-7">
                الرحلات تشمل الذهاب والعودة حسب البرنامج المحدد.
              </p>
            </div>

            {/* Note 2 */}

            <div className="flex gap-2 border border-[#E9E3D7] bg-[#FCFBF8] p-2.5 sm:gap-3 sm:p-4">
              <ShieldCheck
                size={16}
                className="mt-0.5 shrink-0 text-[#096B50] sm:h-5 sm:w-5"
              />

              <p className="text-[10px] leading-5 text-[#55565B] sm:text-sm sm:leading-7">
                جميع الباصات مجهزة بأنظمة سلامة وراحة للمعتمرين.
              </p>
            </div>

            {/* Note 3 */}

            <div className="flex gap-2 border border-[#E9E3D7] bg-[#FCFBF8] p-2.5 sm:gap-3 sm:p-4">
              <CheckCircle2
                size={16}
                className="mt-0.5 shrink-0 text-[#096B50] sm:h-5 sm:w-5"
              />

              <p className="text-[10px] leading-5 text-[#55565B] sm:text-sm sm:leading-7">
                الباقات لا تشمل الوجبات.
              </p>
            </div>

            {/* Note 4 */}

            <div className="flex gap-2 border border-[#E9E3D7] bg-[#FCFBF8] p-2.5 sm:gap-3 sm:p-4">
              <CheckCircle2
                size={16}
                className="mt-0.5 shrink-0 text-[#096B50] sm:h-5 sm:w-5"
              />

              <p className="text-[10px] leading-5 text-[#55565B] sm:text-sm sm:leading-7">
                يمكن إضافة زيارة المدينة المنورة في الباقة الاقتصادية مقابل 10
                ريالات للمقعد ويتم السداد للسائق.
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
          className="mt-6 text-center sm:mt-8"
        >
          <p className="text-[10px] text-[#77787C] sm:text-sm">
            جميع التفاصيل قابلة للتحديث حسب التوفر والبرنامج المختار.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
