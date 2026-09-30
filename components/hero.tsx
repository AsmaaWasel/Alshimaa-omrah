"use client";

import { motion } from "framer-motion";
import { CalendarDays, MessageCircle, Moon, Sun, Sparkles } from "lucide-react";
import { useSitePreferences } from "./site-preferences";


export default function Hero() {
  const { locale, isDark, toggleTheme } = useSitePreferences();
  const isArabic = locale === "ar";
  const scrollToBooking = () =>
    document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="hero"
      dir={isArabic ? "rtl" : "ltr"}
      className="relative isolate overflow-hidden bg-background"
    >
      <div className="absolute inset-0 -z-10 bg-[url('/haram.png')] bg-cover bg-center opacity-[0.08] dark:opacity-[0.13]" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-background via-background/90 to-accent/15" />
      <div className="islamic-pattern absolute inset-0 -z-10 opacity-40" />
      <div className="absolute -top-32 end-[-6rem] -z-10 size-[28rem] rounded-full bg-accent/20 blur-3xl" />
      <div className="absolute bottom-[-12rem] start-[-8rem] -z-10 size-[30rem] rounded-full bg-primary/15 blur-3xl" />

      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 lg:grid-cols-[1.08fr_.92fr] lg:px-10 lg:py-28">
        <div className="text-start">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-7 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-card/70 px-4 py-2 text-sm font-semibold text-primary shadow-sm backdrop-blur"
          >
            <Sparkles className="size-4" />{" "}
            {isArabic
              ? "رحلة إيمانية بلمسة من العناية"
              : "A spiritual journey, thoughtfully cared for"}
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <p className="font-serif text-7xl leading-none text-primary sm:text-8xl">
              مكة
            </p>
            <p className="mt-3 font-serif text-2xl text-foreground/70">
              {isArabic ? "فندق · ضيافة · عمرة" : "Hotel · Hospitality · Umrah"}
            </p>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-8 max-w-2xl text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-6xl"
          >
            {isArabic
              ? "رحلتك إلى بيت الله تبدأ براحة وطمأنينة"
              : "Your journey to the House of Allah begins with comfort"}
          </motion.h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-muted-foreground">
            {isArabic
              ? "نرتب لك تفاصيل العمرة من الرياض إلى مكة والمدينة، مع إقامة مميزة ونقل آمن وخدمة ترافقك في كل خطوة."
              : "We arrange every detail from Riyadh to Makkah and Madinah, with beautiful stays, safe transport, and care at every step."}
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <button
              onClick={scrollToBooking}
              className="inline-flex min-h-14 items-center gap-2 rounded-full bg-primary px-7 font-bold text-primary-foreground shadow-lg shadow-primary/20 transition hover:-translate-y-1 hover:shadow-xl"
            >
              <CalendarDays className="size-5" />{" "}
              {isArabic ? "احجز رحلتك" : "Book your journey"}
            </button>
            <a
              href="https://wa.me/966563591198"
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-14 items-center gap-2 rounded-full border border-primary/25 bg-card/70 px-7 font-bold text-foreground transition hover:-translate-y-1 hover:border-primary"
            >
              <MessageCircle className="size-5" />{" "}
              {isArabic ? "تحدث معنا" : "Talk to us"}
            </a>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative mx-auto w-full max-w-md"
        >
          <div className="absolute inset-5 rounded-[2rem] bg-primary/20 blur-2xl" />
          <div className="relative overflow-hidden rounded-[2rem] border border-white/60 bg-card/75 p-3 shadow-2xl backdrop-blur-xl dark:border-white/10">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem] bg-muted">
              <img
                src="/haram.png"
                alt={isArabic ? "المسجد الحرام" : "The Grand Mosque in Makkah"}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="flex items-center justify-between px-4 py-5">
              <div>
                <p className="font-serif text-2xl text-primary">
                  {isArabic ? "أهلاً بك في مكة" : "Welcome to Makkah"}
                </p>
                <p className="mt-1 text-sm text-muted-foreground">
                  {isArabic
                    ? "نعتني بالرحلة، وتعيش الأثر"
                    : "We care for the journey, you live the moment"}
                </p>
              </div>
              <button
                aria-label={
                  isDark ? "Switch to light mode" : "Switch to dark mode"
                }
                onClick={toggleTheme}
                className="rounded-full border border-border bg-background p-3 text-primary transition hover:bg-primary hover:text-primary-foreground"
              >
                {isDark ? (
                  <Sun className="size-5" />
                ) : (
                  <Moon className="size-5" />
                )}
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
