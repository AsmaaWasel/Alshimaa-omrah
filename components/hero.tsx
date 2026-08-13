"use client";

import { motion } from "framer-motion";
import {
  FaInstagram,
  FaTiktok,
  FaFacebookF,
  FaSnapchatGhost,
} from "react-icons/fa";
import { CalendarDays, MessageCircle } from "lucide-react";
import JourneyTimeline from "./ui/JourneyTimeline";

export default function Hero() {
  const scrollToBooking = () => {
    const element = document.getElementById("booking");

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-[#101117]"
      dir="rtl"
    >
      {/* ================= Background Decorations ================= */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute right-[-180px] top-[-180px] h-[450px] w-[450px] rounded-full bg-[#d4af37]/5 blur-3xl" />

        <div className="absolute bottom-[-200px] left-[-150px] h-[400px] w-[400px] rounded-full bg-[#0e4138]/20 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-[1200px] px-6 py-20 lg:py-24">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-16">
          {/* =====================================================
              Right Side - Main Content
          ====================================================== */}
          <div className="order-1 text-right">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-7 inline-flex items-center gap-3 rounded-full border border-[#66551b] bg-[#101117] px-5 py-2"
            >
              <span className="h-2 w-2 rounded-full bg-[#e0b936]" />

              <span className="text-sm font-medium text-[#e0b936]">
                قافلة الشيماء · خدمات المعتمرين والزوار
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="
                max-w-[700px]
                text-4xl
                font-extrabold
                leading-[1.4]
                text-[#f5f1e7]
                sm:text-5xl
                lg:text-[54px]
              "
            >
              <span className="text-[#e1bb3f]">رحلتك إلى بيت الله الحرام</span>

              <br />

              <span>تبدأ من الرياض</span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="
                mt-7
                max-w-[680px]
                text-base
                leading-8
                text-[#ded9cf]
                sm:text-lg
                sm:leading-9
              "
            >
              حملات عمرة من الرياض إلى مكة المكرمة والمدينة المنورة يوميًا
              للحملات الاقتصادية، ويومي{" "}
              <span className="font-bold text-[#e1bb3f]">الاثنين والخميس</span>{" "}
              لحملات <span className="font-bold text-[#e1bb3f]">VIP</span>
              .
              <br />
              نوفر رحلات متكاملة تشمل النقل بباصات حديثة ومريحة، والإقامة في
              فنادق 3 و5 نجوم، مع الذهاب والعودة من وإلى الرياض.
            </motion.p>

            {/* ================= Buttons ================= */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.45 }}
              className="mt-9 flex flex-wrap items-center justify-start gap-4"
            >
              {/* Primary */}
              <button
                onClick={scrollToBooking}
                className="
                  flex
                  min-h-[62px]
                  items-center
                  justify-center
                  gap-3
                  bg-[#d4af37]
                  px-8
                  font-bold
                  text-[#111217]
                  transition
                  hover:bg-[#e2c34f]
                "
              >
                <span>احجز رحلتك الآن</span>

                <CalendarDays size={19} />
              </button>

              {/* WhatsApp */}
              <a
                href="https://wa.me/966563591198"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  flex
                  min-h-[62px]
                  items-center
                  justify-center
                  gap-3
                  border
                  border-[#5e5c62]
                  px-8
                  font-bold
                  text-white
                  transition
                  hover:border-[#d4af37]
                  hover:text-[#d4af37]
                "
              >
                <span>تحدث معنا مباشرة</span>

                <MessageCircle size={19} />
              </a>
            </motion.div>

            {/* ================= Features ================= */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.55 }}
              className="
                mt-8
                flex
                flex-wrap
                justify-start
                gap-x-6
                gap-y-3
                text-sm
                text-[#9d988d]
              "
            >
              <span className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#d4af37]" />
                حجز آمن ومؤكد
              </span>

              <span className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#d4af37]" />
                دعم عبر واتساب 24 ساعة
              </span>

              <span className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#d4af37]" />
                مواعيد انطلاق ثابتة
              </span>
            </motion.div>

            {/* ================= Stats ================= */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.65 }}
              className="
                mt-10
                grid
                grid-cols-2
                gap-3
                sm:grid-cols-4
              "
            >
              {[
                { number: "+15", label: "سنة خبرة" },
                { number: "+50,000", label: "معتمر ومعتمرة" },
                { number: "4.9", label: "تقييم العملاء" },
                { number: "100٪", label: "رحلات مضمونة" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="
                    border
                    border-[#35363d]
                    bg-[#18191f]
                    px-3
                    py-4
                    text-center
                  "
                >
                  <div className="text-xl font-bold text-[#e0b936] sm:text-2xl">
                    {stat.number}
                  </div>

                  <div className="mt-1 text-xs text-[#9d988d] sm:text-sm">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>

            {/* ================= Social Media ================= */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.75 }}
              className="mt-8"
            >
              <p className="mb-4 text-sm font-medium text-[#9d988d]">
                تابعنا على منصات التواصل
              </p>

              <div className="flex items-center justify-start gap-3">
                {/* Facebook */}
                <a
                  href="https://www.facebook.com/share/1BgfTwUvr2/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="
                    flex
                    h-11
                    w-11
                    items-center
                    justify-center
                    border
                    border-[#3a3b42]
                    bg-[#18191f]
                    text-white
                    transition
                    hover:border-[#d4af37]
                    hover:text-[#d4af37]
                  "
                >
                  <FaFacebookF size={18} />
                </a>

                {/* Instagram */}
                <a
                  href="https://www.instagram.com/qafila_alsyhmaa_likedemati_mut"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="
                    flex
                    h-11
                    w-11
                    items-center
                    justify-center
                    border
                    border-[#3a3b42]
                    bg-[#18191f]
                    text-white
                    transition
                    hover:border-[#d4af37]
                    hover:text-[#d4af37]
                  "
                >
                  <FaInstagram size={19} />
                </a>

                {/* TikTok */}
                <a
                  href="https://www.tiktok.com/@alshimaa_makah"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="TikTok"
                  className="
                    flex
                    h-11
                    w-11
                    items-center
                    justify-center
                    border
                    border-[#3a3b42]
                    bg-[#18191f]
                    text-white
                    transition
                    hover:border-[#d4af37]
                    hover:text-[#d4af37]
                  "
                >
                  <FaTiktok size={18} />
                </a>

                {/* Snapchat */}
                <a
                  href="https://www.snapchat.com/@eidalgzar"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Snapchat"
                  className="
                    flex
                    h-11
                    w-11
                    items-center
                    justify-center
                    border
                    border-[#3a3b42]
                    bg-[#18191f]
                    text-white
                    transition
                    hover:border-[#d4af37]
                    hover:text-[#d4af37]
                  "
                >
                  <FaSnapchatGhost size={19} />
                </a>
              </div>
            </motion.div>
          </div>

          {/* =====================================================
              Left Side - Journey
          ====================================================== */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="order-2 flex justify-center lg:justify-start"
          >
            <JourneyTimeline />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
