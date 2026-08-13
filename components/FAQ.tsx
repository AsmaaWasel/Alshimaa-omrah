"use client";

import { JSX, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronDown,
  CalendarDays,
  Hotel,
  Users,
  MessageCircle,
  Bus,
  Crown,
  ShieldCheck,
  MapPin,
  Clock,
} from "lucide-react";

type FAQItem = {
  id: number;
  question: string;
  answer: string;
  icon: React.ElementType;
};

const faqs: FAQItem[] = [
  {
    id: 1,
    question: "من أين تنطلق رحلات قافلة الشيماء؟",
    answer:
      "تنطلق رحلات العمرة من مدينة الرياض إلى مكة المكرمة عبر باصات سياحية حديثة مجهزة لتوفير الراحة والأمان طوال الطريق.",
    icon: MapPin,
  },
  {
    id: 2,
    question: "هل رحلات العمرة متاحة بشكل يومي؟",
    answer:
      "نعم، نوفر رحلات عمرة اقتصادية بشكل شبه يومي من الرياض، بالإضافة إلى رحلات VIP المميزة يومي الاثنين والخميس.",
    icon: CalendarDays,
  },
  {
    id: 3,
    question: "ما الفرق بين الرحلة الاقتصادية و VIP؟",
    answer:
      "الرحلة الاقتصادية توفر باصات مريحة بسعة 49 مقعداً مع إقامة بفنادق 3 نجوم. أما VIP فتتميز بباص فاخر بعدد مقاعد أقل، وفنادق 4 و5 نجوم وخدمات أكثر راحة بالقرب من الحرم.",
    icon: Crown,
  },
  {
    id: 4,
    question: "هل توفرون فنادق قريبة من الحرم؟",
    answer:
      "نعم، نوفر خيارات سكن متنوعة في مكة تشمل فنادق اقتصادية وفنادق VIP قريبة من الحرم مع خدمات مميزة للمعتمرين.",
    icon: Hotel,
  },
  {
    id: 5,
    question: "هل يوجد حجز للعائلات والأفراد؟",
    answer:
      "نعم، نوفر خيارات مناسبة للأفراد والعائلات مع إمكانية توفير غرف خاصة للعائلات حسب التوفر.",
    icon: Users,
  },
  {
    id: 6,
    question: "كيف يمكنني حجز رحلة عمرة؟",
    answer:
      "يمكنك إرسال طلب الحجز من خلال الموقع أو التواصل معنا عبر واتساب، وسيقوم فريق قافلة الشيماء بالتواصل معك لتأكيد الموعد والمقاعد والتفاصيل.",
    icon: MessageCircle,
  },
  {
    id: 7,
    question: "هل الباصات مجهزة ومريحة؟",
    answer:
      "نعم، نستخدم باصات حديثة موديلات 2025 و2026 و2027 مجهزة بوسائل الراحة وأنظمة السلامة لتوفير رحلة مريحة للمعتمرين.",
    icon: Bus,
  },
  {
    id: 8,
    question: "هل يمكن حجز مقاعد في الباص فقط؟",
    answer: "نعم، نوفر خيار حجز مقاعد فقط لمن يرغب بالسفر معنا بدون حجز فندق.",
    icon: ShieldCheck,
  },
  {
    id: 9,
    question: "ما مدة برامج العمرة المتاحة؟",
    answer:
      "نوفر برامج متنوعة حسب رغبة المعتمر تشمل برامج 3 أيام و4 أيام و5 أيام، ويمكن التنسيق على مدد أخرى حسب الطلب.",
    icon: Clock,
  },
];

const WHATSAPP = "https://wa.me/966563591198";

export default function FAQ(): JSX.Element {
  const [openId, setOpenId] = useState<number | null>(null);

  return (
    <section
      id="faq"
      dir="rtl"
      className="relative overflow-hidden bg-[#F8F6F1] py-20 md:py-28"
    >
      {/* ================================================= */}
      {/* ================= BACKGROUND ==================== */}
      {/* ================================================= */}

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute right-[-120px] top-[-100px] h-[350px] w-[350px] rounded-full bg-[#D4AF37]/[0.055] blur-[110px]" />

        <div className="absolute bottom-[-120px] left-[-100px] h-[350px] w-[350px] rounded-full bg-[#096B50]/[0.055] blur-[110px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        {/* ================================================= */}
        {/* ===================== HEADER ==================== */}
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
            duration: 0.6,
          }}
          className="mx-auto max-w-3xl text-center"
        >
          {/* Badge */}

          <span className="inline-flex items-center gap-2 border border-[#D4AF37]/40 bg-[#D4AF37]/10 px-5 py-2 text-xs font-bold text-[#9C7A16] md:text-sm">
            <MessageCircle size={16} />
            أسئلة المعتمرين
          </span>

          {/* Title */}

          <h2 className="mt-6 text-3xl font-black leading-relaxed text-[#202126] sm:text-4xl md:text-5xl">
            الأسئلة <span className="text-[#096B50]">الشائعة</span>
          </h2>

          {/* Description */}

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-8 text-[#6F6F72] md:text-lg">
            تعرف على أهم التفاصيل الخاصة برحلات العمرة، الباقات، السكن والحجز مع
            قافلة الشيماء.
          </p>
        </motion.div>

        {/* ================================================= */}
        {/* ======================= FAQ ===================== */}
        {/* ================================================= */}

        <div className="mx-auto mt-12 grid max-w-6xl gap-5 md:grid-cols-2">
          {faqs.map((faq, index) => {
            const isOpen = openId === faq.id;
            const Icon = faq.icon;

            return (
              <motion.div
                key={faq.id}
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
                  amount: 0.1,
                }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.05,
                }}
                className="h-fit"
              >
                <div
                  className={`overflow-hidden border bg-white transition-all duration-300 ${
                    isOpen
                      ? "border-[#D4AF37]/60 shadow-[0_12px_35px_rgba(212,175,55,0.10)]"
                      : "border-[#E4E0D7] shadow-[0_6px_25px_rgba(32,33,38,0.04)] hover:border-[#096B50]/30 hover:shadow-[0_10px_30px_rgba(32,33,38,0.07)]"
                  }`}
                >
                  {/* Question */}

                  <button
                    type="button"
                    onClick={() => setOpenId(isOpen ? null : faq.id)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center gap-4 p-5 text-right md:p-6"
                  >
                    {/* Icon */}

                    <div
                      className={`flex h-11 w-11 shrink-0 items-center justify-center transition-all duration-300 ${
                        isOpen
                          ? "bg-[#096B50] text-white"
                          : "bg-[#096B50]/[0.07] text-[#096B50]"
                      }`}
                    >
                      <Icon size={20} />
                    </div>

                    {/* Question */}

                    <span className="flex-1 text-sm font-black leading-7 text-[#202126] md:text-base">
                      {faq.question}
                    </span>

                    {/* Arrow */}

                    <div
                      className={`flex h-8 w-8 shrink-0 items-center justify-center transition-colors ${
                        isOpen
                          ? "bg-[#D4AF37]/10 text-[#9C7A16]"
                          : "text-[#77787D]"
                      }`}
                    >
                      <motion.div
                        animate={{
                          rotate: isOpen ? 180 : 0,
                        }}
                        transition={{
                          duration: 0.3,
                        }}
                      >
                        <ChevronDown size={18} />
                      </motion.div>
                    </div>
                  </button>

                  {/* Answer */}

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{
                          height: 0,
                          opacity: 0,
                        }}
                        animate={{
                          height: "auto",
                          opacity: 1,
                        }}
                        exit={{
                          height: 0,
                          opacity: 0,
                        }}
                        transition={{
                          duration: 0.3,
                        }}
                        className="overflow-hidden"
                      >
                        <div className="border-t border-[#EDE9E0] px-5 pb-6 pt-4 md:px-6">
                          <div className="border-r-2 border-[#D4AF37] pr-4">
                            <p className="text-sm leading-8 text-[#6F6F72] md:text-base">
                              {faq.answer}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* ================================================= */}
        {/* ===================== CTA ======================= */}
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
          className="mt-12 text-center"
        >
          <div className="inline-flex flex-col items-center gap-3 border border-[#D4AF37]/25 bg-white px-7 py-5 shadow-[0_8px_30px_rgba(32,33,38,0.05)] sm:flex-row">
            <p className="text-sm text-[#77787D]">لم تجد إجابتك؟</p>

            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-bold text-[#096B50] transition-colors hover:text-[#D4AF37]"
            >
              <MessageCircle size={17} />
              تواصل معنا عبر واتساب
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
