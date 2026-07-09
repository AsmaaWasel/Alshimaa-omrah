"use client";

import { useState } from "react";
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

export default function FAQ() {
  const [openId, setOpenId] = useState<number | null>(null);

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
      answer:
        "نعم، نوفر خيار حجز مقاعد فقط لمن يرغب بالسفر معنا بدون حجز فندق.",
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

  return (
    <section id="faq" className="relative overflow-hidden bg-ivory py-28">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="divider-ornament inline-block text-xs font-bold tracking-[0.2em] text-gold-dark">
            أسئلة المعتمرين
          </p>

          <h2 className="mt-6 text-3xl font-extrabold leading-relaxed text-night sm:text-4xl">
            الأسئلة <span className="text-gold-dark">الشائعة</span>
          </h2>

          <p className="mt-4 leading-8 text-ink/60">
            تعرف على كل التفاصيل الخاصة برحلات العمرة، الباقات، السكن والحجز مع
            قافلة الشيماء.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-12 grid gap-4 md:grid-cols-2"
        >
          {faqs.map((faq, index) => {
            const isOpen = openId === faq.id;
            const Icon = faq.icon;

            return (
              <motion.div
                key={faq.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.05,
                }}
              >
                <div
                  className={`rounded-2xl border-2 bg-white/80 transition-all duration-300 backdrop-blur-sm ${
                    isOpen
                      ? "border-gold shadow-lg shadow-gold/10"
                      : "border-ink/10 hover:border-ink/20"
                  }`}
                >
                  <button
                    onClick={() => setOpenId(isOpen ? null : faq.id)}
                    className="flex w-full items-center gap-4 p-5 text-right"
                  >
                    <div
                      className={`shrink-0 rounded-xl p-2.5 ${
                        isOpen
                          ? "bg-gold text-white"
                          : "bg-ink/5 text-gold-dark"
                      }`}
                    >
                      <Icon size={20} />
                    </div>

                    <span className="flex-1 text-base font-bold text-night">
                      {faq.question}
                    </span>

                    <motion.div
                      animate={{
                        rotate: isOpen ? 180 : 0,
                      }}
                      transition={{
                        duration: 0.3,
                      }}
                    >
                      <ChevronDown size={20} />
                    </motion.div>
                  </button>

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
                        <div className="border-t border-ink/5 px-5 pb-5 pt-3">
                          <p className="leading-relaxed text-ink/70">
                            {faq.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
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
          className="mt-12 text-center"
        >
          <div className="inline-block rounded-full bg-gold/10 px-8 py-4">
            <p className="text-sm text-ink/60">
              لم تجد إجابتك؟{" "}
              <a
                href="https://wa.me/966563591198"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 font-bold text-gold-dark hover:underline"
              >
                <MessageCircle size={16} />
                تواصل معنا عبر واتساب
              </a>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
