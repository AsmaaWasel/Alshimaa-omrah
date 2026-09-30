"use client";

import { motion } from "framer-motion";
import { MessageCircle, Phone, Clock, MapPin } from "lucide-react";
import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa";
import { useSitePreferences } from "./site-preferences";

type ContactMethod = {
  icon: React.ElementType;
  title: string;
  description: string;
  contact: string;
  link: string;
};

export default function Contact() {
  const { locale } = useSitePreferences();
  const isArabic = locale === "ar";

  const contactMethods: ContactMethod[] = [
    {
      icon: MessageCircle,
      title: isArabic ? "واتساب" : "WhatsApp",
      description: isArabic ? "تواصل معنا فوراً" : "Contact us instantly",
      contact: "966563591198",
      link: "https://wa.me/966563591198",
    },
    {
      icon: Phone,
      title: isArabic ? "الهاتف" : "Phone",
      description: isArabic ? "اتصل بنا مباشرة" : "Call us directly",
      contact: "+966 56 359 1198",
      link: "tel:+966563591198",
    },
    {
      icon: Clock,
      title: isArabic ? "ساعات العمل" : "Working Hours",
      description: isArabic ? "نحن متواجدون دائماً" : "Always available",
      contact: "24/7",
      link: "#",
    },
    {
      icon: MapPin,
      title: isArabic ? "الموقع" : "Location",
      description: isArabic ? "الرياض - السعودية" : "Riyadh - Saudi Arabia",
      contact: isArabic ? "حي البطحاء" : "Al-Batha District",
      link: "#",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section
      id="contact"
      dir={isArabic ? "rtl" : "ltr"}
      className="relative isolate overflow-hidden bg-background py-20 lg:py-28"
    >
      {/* ================= BACKGROUND ================= */}
      <div className="absolute inset-0 -z-10 bg-[url('/haram.png')] bg-cover bg-center opacity-[0.04] dark:opacity-[0.06]" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-background via-background/95 to-accent/10" />
      <div className="islamic-pattern absolute inset-0 -z-10 opacity-30" />
      <div className="absolute -top-32 end-[-6rem] -z-10 size-[28rem] rounded-full bg-accent/15 blur-3xl" />
      <div className="absolute bottom-[-12rem] start-[-8rem] -z-10 size-[30rem] rounded-full bg-primary/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        {/* ================= HEADER ================= */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-card/70 px-5 py-2 text-sm font-bold text-primary shadow-sm backdrop-blur">
            <MessageCircle size={16} />
            {isArabic ? "تواصل معنا" : "Get in Touch"}
          </span>

          <h2 className="mt-6 font-serif text-4xl font-black text-foreground md:text-5xl lg:text-6xl">
            {isArabic ? (
              <>
                تواصل <span className="text-primary">معنا</span>
              </>
            ) : (
              <>
                Contact <span className="text-primary">Us</span>
              </>
            )}
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-muted-foreground md:text-lg">
            {isArabic
              ? "فريق قافلة الشيماء جاهز لمساعدتك والإجابة على جميع استفساراتك وتنسيق رحلة العمرة المناسبة لك."
              : "Al-Shaimaa Convoy team is ready to help you, answer all your inquiries, and arrange the Umrah trip that suits you."}
          </p>
        </motion.div>

        {/* ================= CONTACT METHODS ================= */}

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
        >
          {contactMethods.map((method, index) => {
            const Icon = method.icon;

            return (
              <motion.a
                key={index}
                href={method.link}
                target={method.link.startsWith("http") ? "_blank" : undefined}
                rel={
                  method.link.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                variants={itemVariants}
                whileHover={{ y: -6 }}
                className="group rounded-2xl border border-border bg-card/75 p-7 shadow-sm backdrop-blur transition-all duration-300 hover:border-primary/40 hover:shadow-lg"
              >
                {/* Icon */}
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl border border-primary/20 bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                  <Icon className="h-7 w-7" />
                </div>

                <h3 className="mb-2 font-serif text-lg font-black text-foreground">
                  {method.title}
                </h3>

                <p className="mb-3 text-sm text-muted-foreground">
                  {method.description}
                </p>

                <p
                  dir={
                    method.contact.startsWith("+") || method.contact === "24/7"
                      ? "ltr"
                      : undefined
                  }
                  className="font-bold text-primary"
                >
                  {method.contact}
                </p>
              </motion.a>
            );
          })}
        </motion.div>

        {/* ================= MAP ================= */}

        {/* ================= CTA ================= */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-[2rem] border border-primary/30 bg-foreground/[0.04] p-8 text-center shadow-xl backdrop-blur-xl md:p-14 dark:bg-foreground/5"
        >
          {/* Gold glow */}
          <div className="pointer-events-none absolute end-1/2 top-0 h-40 w-40 translate-x-1/2 rounded-full bg-primary/10 blur-[80px]" />

          <div className="relative">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-primary/30 bg-primary/10">
              <MessageCircle className="h-8 w-8 text-primary" />
            </div>

            <h3 className="mt-6 font-serif text-3xl font-black text-foreground md:text-4xl">
              {isArabic
                ? "هل تريد بدء رحلتك الآن؟"
                : "Ready to Start Your Journey?"}
            </h3>

            <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-muted-foreground md:text-lg">
              {isArabic
                ? "لا تتردد في التواصل معنا، وسيساعدك فريقنا في اختيار الباقة والفندق وموعد الرحلة المناسب لك."
                : "Don't hesitate to contact us. Our team will help you choose the right package, hotel, and travel date."}
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                href={
                  isArabic
                    ? "https://wa.me/966563591198?text=السلام%20عليكم%20أريد%20الاستفسار%20عن%20حجز%20عمرة"
                    : "https://wa.me/966563591198?text=Hello%2C%20I%27d%20like%20to%20inquire%20about%20an%20Umrah%20booking"
                }
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-14 items-center justify-center gap-2 rounded-full bg-primary px-8 font-bold text-primary-foreground shadow-lg shadow-primary/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <MessageCircle className="h-5 w-5" />
                {isArabic ? "احجز عبر الواتساب" : "Book via WhatsApp"}
              </a>

              <a
                href="tel:+966563591198"
                className="inline-flex min-h-14 items-center justify-center gap-2 rounded-full border border-primary/40 bg-card/70 px-8 font-bold text-primary backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:bg-primary hover:text-primary-foreground"
              >
                <Phone className="h-5 w-5" />
                {isArabic ? "اتصل بنا" : "Call Us"}
              </a>
            </div>

            {/* ================= SOCIAL ================= */}

            <h4 className="mt-12 font-serif text-xl font-black text-foreground">
              {isArabic
                ? "تابعنا على منصات التواصل"
                : "Follow Us on Social Media"}
            </h4>

            <div className="mt-6 flex items-center justify-center gap-4">
              {/* Instagram */}
              <a
                href="https://www.instagram.com/qafila_alsyhmaa_likedemati_mut"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-14 w-14 items-center justify-center rounded-2xl border border-border bg-card/75 text-primary shadow-sm backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:bg-primary hover:text-primary-foreground"
              >
                <FaInstagram className="h-6 w-6" />
              </a>

              {/* TikTok */}
              <a
                href="https://www.tiktok.com/@alshimaa_makah?_r=1&_t=ZS-97L5QAYAryS"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
                className="flex h-14 w-14 items-center justify-center rounded-2xl border border-border bg-card/75 text-primary shadow-sm backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:bg-primary hover:text-primary-foreground"
              >
                <FaTiktok className="h-6 w-6" />
              </a>

              {/* Facebook */}
              <a
                href="https://www.facebook.com/share/1BgfTwUvr2/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex h-14 w-14 items-center justify-center rounded-2xl border border-border bg-card/75 text-primary shadow-sm backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:bg-primary hover:text-primary-foreground"
              >
                <FaFacebookF className="h-6 w-6" />
              </a>
            </div>

            <p className="mt-5 text-sm text-muted-foreground">
              {isArabic
                ? "تابعوا قافلة الشيماء على منصات التواصل الاجتماعي"
                : "Follow Al-Shaimaa Convoy on social media"}
            </p>
          </div>
        </motion.div>

        {/* ================= FOOTER INFO ================= */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-12 border-t border-border pt-8 text-center text-sm text-muted-foreground"
        >
          <p>
            {isArabic
              ? "© 2026 الشيماء لخدمات العمرة والزوار. جميع الحقوق محفوظة."
              : "© 2026 Al-Shaimaa for Umrah & Visitor Services. All rights reserved."}
          </p>

          <p className="mt-2">
            {isArabic ? "رقم الجوال:" : "Phone:"}{" "}
            <span dir="ltr" className="inline-block font-semibold text-primary">
              +966 56 359 1198
            </span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
