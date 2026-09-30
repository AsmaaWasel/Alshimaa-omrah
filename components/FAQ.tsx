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
import { useSitePreferences } from "./site-preferences";

type FAQItem = {
  id: number;
  question: string;
  answer: string;
  icon: React.ElementType;
};

const WHATSAPP = "https://wa.me/966563591198";

export default function FAQ(): JSX.Element {
  const { locale } = useSitePreferences();
  const isArabic = locale === "ar";

  const [openId, setOpenId] = useState<number | null>(null);

  const faqs: FAQItem[] = [
    {
      id: 1,
      question: isArabic
        ? "من أين تنطلق حملات قافلة الشيماء؟"
        : "Where do Al-Shaimaa Convoy trips depart from?",
      answer: isArabic
        ? "تنطلق رحلات العمرة من مدينة الرياض إلى مكة المكرمة عبر باصات سياحية حديثة مجهزة لتوفير الراحة والأمان طوال الطريق."
        : "Umrah trips depart from Riyadh to Makkah via modern tourist buses equipped to provide comfort and safety throughout the journey.",
      icon: MapPin,
    },
    {
      id: 2,
      question: isArabic
        ? "هل رحلات العمرة متاحة بشكل يومي؟"
        : "Are Umrah trips available daily?",
      answer: isArabic
        ? "نعم، نوفر رحلات عمرة اقتصادية بشكل شبه يومي من الرياض، بالإضافة إلى رحلات VIP المميزة يومي الاثنين والخميس."
        : "Yes, we offer economy Umrah trips almost daily from Riyadh, in addition to premium VIP trips every Monday and Thursday.",
      icon: CalendarDays,
    },
    {
      id: 3,
      question: isArabic
        ? "ما الفرق بين الرحلة الاقتصادية و VIP؟"
        : "What is the difference between Economy and VIP trips?",
      answer: isArabic
        ? "الرحلة الاقتصادية توفر باصات مريحة بسعة 49 مقعداً مع إقامة بفنادق 3 نجوم. أما VIP فتتميز بباص فاخر بعدد مقاعد أقل، وفنادق 4 و5 نجوم وخدمات أكثر راحة بالقرب من الحرم."
        : "The Economy trip offers comfortable buses with 49 seats and 3-star hotel accommodation. VIP features a luxury bus with fewer seats, 4 and 5-star hotels, and more comfortable services near the Haram.",
      icon: Crown,
    },
    {
      id: 4,
      question: isArabic
        ? "هل توفرون فنادق قريبة من الحرم؟"
        : "Do you provide hotels near the Haram?",
      answer: isArabic
        ? "نعم، نوفر خيارات سكن متنوعة في مكة تشمل فنادق اقتصادية وفنادق VIP قريبة من الحرم مع خدمات مميزة للمعتمرين."
        : "Yes, we provide various accommodation options in Makkah, including economy and VIP hotels near the Haram with distinguished services for pilgrims.",
      icon: Hotel,
    },
    {
      id: 5,
      question: isArabic
        ? "هل يوجد حجز للعائلات والأفراد؟"
        : "Is booking available for families and individuals?",
      answer: isArabic
        ? "نعم، نوفر خيارات مناسبة للأفراد والعائلات مع إمكانية توفير غرف خاصة للعائلات حسب التوفر."
        : "Yes, we offer options suitable for individuals and families, with the possibility of private rooms for families subject to availability.",
      icon: Users,
    },
    {
      id: 6,
      question: isArabic
        ? "كيف يمكنني حجز رحلة عمرة؟"
        : "How can I book an Umrah trip?",
      answer: isArabic
        ? "يمكنك إرسال طلب الحجز من خلال الموقع أو التواصل معنا عبر واتساب، وسيقوم فريق قافلة الشيماء بالتواصل معك لتأكيد الموعد والمقاعد والتفاصيل."
        : "You can submit a booking request through the website or contact us via WhatsApp, and the Al-Shaimaa Convoy team will reach out to confirm the date, seats, and details.",
      icon: MessageCircle,
    },
    {
      id: 7,
      question: isArabic
        ? "هل الباصات مجهزة ومريحة؟"
        : "Are the buses equipped and comfortable?",
      answer: isArabic
        ? "نعم، نستخدم باصات حديثة موديلات 2025 و2026 و2027 مجهزة بوسائل الراحة وأنظمة السلامة لتوفير رحلة مريحة للمعتمرين."
        : "Yes, we use modern buses from 2025, 2026, and 2027 models, equipped with comfort amenities and safety systems to provide a comfortable trip for pilgrims.",
      icon: Bus,
    },
    {
      id: 8,
      question: isArabic
        ? "هل يمكن حجز مقاعد في الباص فقط؟"
        : "Can I book bus seats only?",
      answer: isArabic
        ? "نعم، نوفر خيار حجز مقاعد فقط لمن يرغب بالسفر معنا بدون حجز فندق."
        : "Yes, we offer the option to book seats only for those who want to travel with us without booking a hotel.",
      icon: ShieldCheck,
    },
    {
      id: 9,
      question: isArabic
        ? "ما مدة برامج العمرة المتاحة؟"
        : "What are the available Umrah program durations?",
      answer: isArabic
        ? "نوفر برامج متنوعة حسب رغبة المعتمر تشمل برامج 3 أيام و4 أيام و5 أيام، ويمكن التنسيق على مدد أخرى حسب الطلب."
        : "We offer various programs according to the pilgrim's preference, including 3-day, 4-day, and 5-day programs. Other durations can be arranged upon request.",
      icon: Clock,
    },
  ];

  return (
    <section
      id="faq"
      dir={isArabic ? "rtl" : "ltr"}
      className="relative isolate overflow-hidden bg-background py-20 lg:py-28"
    >
      {/* ================================================= */}
      {/* ================= BACKGROUND ==================== */}
      {/* ================================================= */}
      <div className="absolute inset-0 -z-10 bg-[url('/haram.png')] bg-cover bg-center opacity-[0.04] dark:opacity-[0.06]" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-background via-background/95 to-accent/10" />
      <div className="islamic-pattern absolute inset-0 -z-10 opacity-30" />
      <div className="absolute -top-32 end-[-6rem] -z-10 size-[28rem] rounded-full bg-accent/15 blur-3xl" />
      <div className="absolute bottom-[-12rem] start-[-8rem] -z-10 size-[30rem] rounded-full bg-primary/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        {/* ================================================= */}
        {/* ===================== HEADER ==================== */}
        {/* ================================================= */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          {/* Badge */}
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-card/70 px-5 py-2 text-xs font-bold text-primary shadow-sm backdrop-blur md:text-sm">
            <MessageCircle size={16} />
            {isArabic ? "الأسئلة المتكررة" : "Frequently Asked Questions"}
          </span>

          {/* Title */}
          <h2 className="mt-6 font-serif text-3xl font-black text-foreground sm:text-4xl md:text-5xl">
            {isArabic ? "كل ما تريد معرفته" : "Everything You Need to Know"}
          </h2>

          {/* Description */}
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-8 text-muted-foreground md:text-lg">
            {isArabic
              ? "تعرف على أهم التفاصيل الخاصة برحلات العمرة، الباقات، السكن والحجز مع قافلة الشيماء."
              : "Learn about the key details of Umrah trips, packages, accommodation, and booking with Al-Shaimaa Convoy."}
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
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="h-fit"
              >
                <div
                  className={`overflow-hidden rounded-2xl border bg-card/75 shadow-sm backdrop-blur transition-all duration-300 ${
                    isOpen
                      ? "border-primary/50 shadow-lg shadow-primary/10"
                      : "border-border hover:border-accent/40 hover:shadow-lg"
                  }`}
                >
                  {/* Question */}
                  <button
                    type="button"
                    onClick={() => setOpenId(isOpen ? null : faq.id)}
                    aria-expanded={isOpen}
                    className={`flex w-full items-center gap-4 p-5 md:p-6 ${
                      isArabic ? "text-right" : "text-left"
                    }`}
                  >
                    {/* Icon */}
                    <div
                      className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl transition-all duration-300 ${
                        isOpen
                          ? "bg-accent text-accent-foreground"
                          : "bg-accent/10 text-accent"
                      }`}
                    >
                      <Icon size={20} />
                    </div>

                    {/* Question */}
                    <span className="flex-1 text-sm font-black leading-7 text-foreground md:text-base">
                      {faq.question}
                    </span>

                    {/* Arrow */}
                    <div
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg transition-colors ${
                        isOpen
                          ? "bg-primary/10 text-primary"
                          : "text-muted-foreground"
                      }`}
                    >
                      <motion.div
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <ChevronDown size={18} />
                      </motion.div>
                    </div>
                  </button>

                  {/* Answer */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="border-t border-border px-5 pb-6 pt-4 md:px-6">
                          <div
                            className={`border-primary ${
                              isArabic ? "border-r-2 pr-4" : "border-l-2 pl-4"
                            }`}
                          >
                            <p className="text-sm leading-8 text-muted-foreground md:text-base">
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
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex flex-col items-center gap-3 rounded-full border border-primary/25 bg-card/70 px-7 py-4 shadow-sm backdrop-blur sm:flex-row">
            <p className="text-sm text-muted-foreground">
              {isArabic ? "لم تجد إجابتك؟" : "Didn't find your answer?"}
            </p>

            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-bold text-primary transition-colors hover:text-accent"
            >
              <MessageCircle size={17} />
              {isArabic ? "تواصل معنا عبر واتساب" : "Contact us on WhatsApp"}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
