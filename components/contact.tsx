"use client";

import { motion } from "framer-motion";
import { MessageCircle, Phone, Clock, MapPin } from "lucide-react";
import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa";

type ContactMethod = {
  icon: React.ElementType;
  title: string;
  description: string;
  contact: string;
  link: string;
};

export default function Contact() {
  const contactMethods: ContactMethod[] = [
    {
      icon: MessageCircle,
      title: "واتساب",
      description: "تواصل معنا فوراً",
      contact: "966563591198",
      link: "https://wa.me/966563591198",
    },
    {
      icon: Phone,
      title: "الهاتف",
      description: "اتصل بنا مباشرة",
      contact: "+966 56 359 1198",
      link: "tel:+966563591198",
    },
    {
      icon: Clock,
      title: "ساعات العمل",
      description: "نحن متواجدون دائماً",
      contact: "24/7",
      link: "#",
    },
    {
      icon: MapPin,
      title: "الموقع",
      description: "الرياض - السعودية",
      contact: "حي البطحاء",
      link: "#",
    },
  ];

  const containerVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section
      id="contact"
      dir="rtl"
      className="relative overflow-hidden bg-[#101117] py-20 text-white md:py-28"
    >
      {/* ================= BACKGROUND ================= */}

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute right-[5%] top-0 h-[450px] w-[450px] rounded-full bg-[#D4AF37]/5 blur-[130px]" />

        <div className="absolute bottom-[5%] left-[5%] h-[400px] w-[400px] rounded-full bg-[#096B50]/10 blur-[130px]" />

        <div className="absolute left-[45%] top-[40%] h-[300px] w-[300px] rounded-full bg-[#D4AF37]/[0.025] blur-[100px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* ================= HEADER ================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
          }}
          viewport={{
            once: true,
          }}
          className="mb-16 text-center"
        >
          <span className="inline-flex items-center gap-2 border border-[#D4AF37]/40 bg-[#D4AF37]/10 px-5 py-2 text-sm font-bold text-[#D4AF37]">
            <MessageCircle size={16} />
            تواصل معنا
          </span>

          <h2 className="mt-6 text-4xl font-black text-white md:text-5xl lg:text-6xl">
            تواصل <span className="text-[#D4AF37]">معنا</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-[#aaaab0] md:text-lg">
            فريق قافلة الشيماء جاهز لمساعدتك والإجابة على جميع استفساراتك وتنسيق
            رحلة العمرة المناسبة لك.
          </p>
        </motion.div>

        {/* ================= CONTACT METHODS ================= */}

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
          }}
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
                whileHover={{
                  y: -6,
                }}
                className="
                  group
                  border
                  border-[#30323c]
                  bg-[#191b25]
                  p-7
                  shadow-lg
                  transition-all
                  duration-300
                  hover:border-[#D4AF37]/50
                  hover:shadow-[0_15px_40px_rgba(212,175,55,0.08)]
                "
              >
                {/* Icon */}

                <div
                  className="
                    mb-5
                    flex
                    h-14
                    w-14
                    items-center
                    justify-center
                    border
                    border-[#D4AF37]/30
                    bg-[#D4AF37]/10
                    text-[#D4AF37]
                    transition-all
                    duration-300
                    group-hover:bg-[#D4AF37]
                    group-hover:text-[#101117]
                  "
                >
                  <Icon className="h-7 w-7" />
                </div>

                <h3 className="mb-2 text-lg font-black text-white">
                  {method.title}
                </h3>

                <p className="mb-3 text-sm text-[#999aa1]">
                  {method.description}
                </p>

                <p
                  dir={method.title === "الهاتف" ? "ltr" : undefined}
                  className="font-bold text-[#D4AF37]"
                >
                  {method.contact}
                </p>
              </motion.a>
            );
          })}
        </motion.div>

        {/* ================= MAP ================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
          }}
          viewport={{
            once: true,
          }}
          className="mb-14 overflow-hidden border border-[#30323c] bg-[#191b25] shadow-xl"
        >
          {/* Map Header */}

          <div className="flex items-center gap-4 border-b border-[#30323c] p-6 md:p-7">
            <div
              className="
                flex
                h-12
                w-12
                shrink-0
                items-center
                justify-center
                border
                border-[#D4AF37]/30
                bg-[#D4AF37]/10
              "
            >
              <MapPin className="h-6 w-6 text-[#D4AF37]" />
            </div>

            <div>
              <h3 className="text-lg font-black text-white md:text-xl">
                موقعنا على الخريطة
              </h3>

              <p className="mt-1 text-sm text-[#999aa1]">
                حي البطحاء، الرياض، المملكة العربية السعودية
              </p>
            </div>
          </div>

          {/* Map */}

          <div className="h-[350px] w-full md:h-[450px]">
            <iframe
              title="موقع قافلة الشيماء - حي البطحاء، الرياض"
              src="https://www.google.com/maps?q=%D8%AD%D9%8A%20%D8%A7%D9%84%D8%A8%D8%B7%D8%AD%D8%A7%D8%8C%20%D8%A7%D9%84%D8%B1%D9%8A%D8%A7%D8%B6%D8%8C%20%D8%A7%D9%84%D9%85%D9%85%D9%84%D9%83%D8%A9%20%D8%A7%D9%84%D8%B9%D8%B1%D8%A8%D9%8A%D8%A9%20%D8%A7%D9%84%D8%B3%D8%B9%D9%88%D8%AF%D9%8A%D8%A9&output=embed"
              width="100%"
              height="100%"
              style={{
                border: 0,
                filter: "grayscale(0.7)",
              }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </motion.div>

        {/* ================= CTA ================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
          }}
          viewport={{
            once: true,
          }}
          className="
            relative
            overflow-hidden
            border
            border-[#D4AF37]/30
            bg-gradient-to-l
            from-[#191b25]
            to-[#202126]
            p-8
            text-center
            md:p-14
          "
        >
          {/* Gold glow */}

          <div className="pointer-events-none absolute right-1/2 top-0 h-40 w-40 translate-x-1/2 rounded-full bg-[#D4AF37]/10 blur-[80px]" />

          <div className="relative">
            <div
              className="
                mx-auto
                flex
                h-16
                w-16
                items-center
                justify-center
                border
                border-[#D4AF37]/40
                bg-[#D4AF37]/10
              "
            >
              <MessageCircle className="h-8 w-8 text-[#D4AF37]" />
            </div>

            <h3 className="mt-6 text-3xl font-black text-white md:text-4xl">
              هل تريد بدء رحلتك الآن؟
            </h3>

            <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-[#aaaab0] md:text-lg">
              لا تتردد في التواصل معنا، وسيساعدك فريقنا في اختيار الباقة والفندق
              وموعد الرحلة المناسب لك.
            </p>

            {/* Buttons */}

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                href="https://wa.me/966563591198?text=السلام%20عليكم%20أريد%20الاستفسار%20عن%20حجز%20عمرة"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-flex
                  items-center
                  justify-center
                  gap-2
                  bg-[#096B50]
                  px-8
                  py-4
                  font-bold
                  text-white
                  shadow-lg
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:bg-[#075B44]
                "
              >
                <MessageCircle className="h-5 w-5" />
                احجز عبر الواتساب
              </a>

              <a
                href="tel:+966563591198"
                className="
                  inline-flex
                  items-center
                  justify-center
                  gap-2
                  border
                  border-[#D4AF37]
                  px-8
                  py-4
                  font-bold
                  text-[#D4AF37]
                  transition-all
                  duration-300
                  hover:bg-[#D4AF37]
                  hover:text-[#101117]
                "
              >
                <Phone className="h-5 w-5" />
                اتصل بنا
              </a>
            </div>

            {/* ================= SOCIAL ================= */}

            <h4 className="mt-12 text-xl font-black text-white">
              تابعنا على منصات التواصل
            </h4>

            <div className="mt-6 flex items-center justify-center gap-4">
              {/* Instagram */}

              <a
                href="https://www.instagram.com/qafila_alsyhmaa_likedemati_mut"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="
                  flex
                  h-14
                  w-14
                  items-center
                  justify-center
                  border
                  border-[#30323c]
                  bg-[#191b25]
                  text-[#D4AF37]
                  shadow-lg
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-[#D4AF37]
                  hover:bg-[#D4AF37]
                  hover:text-[#101117]
                "
              >
                <FaInstagram className="h-6 w-6" />
              </a>

              {/* TikTok */}

              <a
                href="https://www.tiktok.com/@alshimaa_makah?_r=1&_t=ZS-97L5QAYAryS"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
                className="
                  flex
                  h-14
                  w-14
                  items-center
                  justify-center
                  border
                  border-[#30323c]
                  bg-[#191b25]
                  text-[#D4AF37]
                  shadow-lg
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-[#D4AF37]
                  hover:bg-[#D4AF37]
                  hover:text-[#101117]
                "
              >
                <FaTiktok className="h-6 w-6" />
              </a>

              {/* Facebook */}

              <a
                href="https://www.facebook.com/share/1BgfTwUvr2/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="
                  flex
                  h-14
                  w-14
                  items-center
                  justify-center
                  border
                  border-[#30323c]
                  bg-[#191b25]
                  text-[#D4AF37]
                  shadow-lg
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-[#D4AF37]
                  hover:bg-[#D4AF37]
                  hover:text-[#101117]
                "
              >
                <FaFacebookF className="h-6 w-6" />
              </a>
            </div>

            <p className="mt-5 text-sm text-[#999aa1]">
              تابعوا قافلة الشيماء على منصات التواصل الاجتماعي
            </p>
          </div>
        </motion.div>

        {/* ================= FOOTER INFO ================= */}

        <motion.div
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          transition={{
            duration: 0.8,
            delay: 0.2,
          }}
          viewport={{
            once: true,
          }}
          className="
            mt-12
            border-t
            border-[#30323c]
            pt-8
            text-center
            text-sm
            text-[#777981]
          "
        >
          <p>© 2026 الشيماء لخدمات العمرة والزوار. جميع الحقوق محفوظة.</p>

          <p className="mt-2">
            رقم الجوال:{" "}
            <span
              dir="ltr"
              className="inline-block font-semibold text-[#D4AF37]"
            >
              +966 56 359 1198
            </span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
