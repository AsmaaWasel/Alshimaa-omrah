"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  FaInstagram,
  FaTiktok,
  FaFacebookF,
  FaSnapchatGhost,
} from "react-icons/fa";

export default function Hero() {
  const scrollToPrograms = () => {
    const element = document.getElementById("programs");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

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
    <>
      <section
        id="hero"
        className="relative min-h-screen flex items-center overflow-hidden bg-background"
      >
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/haram.png"
            alt="الحرم الشريف"
            fill
            className="object-cover"
            quality={100}
          />

          <div className="absolute inset-0 bg-gradient-to-r from-[#2f241d]/80 via-[#2f241d]/50 to-transparent" />

          <div className="absolute inset-0 bg-black/20" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-32">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Text Content */}
            <div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-white drop-shadow-lg"
              >
                قافلة الشيماء
                <span className="block text-accent mt-2 text-3xl md:text-4xl">
                  لخدمات المعتمرين والزوار
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-lg md:text-2xl mb-8 text-white/95 leading-relaxed max-w-2xl"
              >
                حملات عمرة من الرياض إلى مكة المكرمة والمدينة المنورة يوميًا
                للحملات الاقتصادية، ويومي{" "}
                <span className="font-bold text-accent">الاثنين والخميس</span>{" "}
                لحملات
                <span className="font-bold text-accent"> VIP</span>. نوفر رحلات
                متكاملة تشمل النقل بباصات حديثة ومريحة، والإقامة في فنادق 3 و5
                نجوم، مع الذهاب والعودة من وإلى الرياض.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="flex flex-wrap gap-4 mt-8"
              >
                <button
                  onClick={scrollToPrograms}
                  className="border border-white/40 backdrop-blur-md bg-white/10 text-white px-8 py-4 rounded-full font-bold hover:bg-white/20 transition-all duration-300"
                >
                  تصفح الباقات
                </button>
                <button
                  onClick={scrollToBooking}
                  className="bg-[#D9B8A6] text-[#2F2A25] px-8 py-4 rounded-full font-bold shadow-xl hover:scale-105 transition-all duration-300"
                >
                  احجز رحلتك الآن
                </button>
                <a
                  href="https://wa.me/966563591198"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-white/40 backdrop-blur-md bg-white/10 text-white px-8 py-4 rounded-full font-bold hover:bg-white/20 transition-all duration-300"
                >
                  تواصل عبر واتساب
                </a>
              </motion.div>
            </div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="hidden md:flex flex-col gap-5"
            >
              {[
                { number: "+15", label: "سنة خبرة" },
                { number: "+50,000", label: "معتمر ومعتمرة" },
                { number: "4.9", label: "تقييم العملاء" },
                { number: "٪100", label: "رحلات مضمونة" },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 + i * 0.15 }}
                  className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl px-6 py-4 shadow-xl flex items-center gap-4 self-end w-fit"
                >
                  <span className="text-3xl md:text-4xl font-bold text-accent">
                    {stat.number}
                  </span>
                  <span className="text-white/90 font-medium text-sm md:text-base">
                    {stat.label}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <p className="text-white/80 text-sm font-medium mt-8 mb-3">
            تابعنا على منصات التواصل
          </p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex items-center gap-4 mt-8"
          >
            <a
              href="https://www.facebook.com/share/1BgfTwUvr2/"
              target="_blank"
              rel="noopener noreferrer"
              className="group w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center hover:bg-blue-600 hover:scale-110 transition-all duration-300 shadow-lg"
            >
              <FaFacebookF className="text-white text-2xl group-hover:scale-110 transition-transform" />
            </a>
            <a
              href="https://www.instagram.com/qafila_alsyhmaa_likedemati_mut"
              target="_blank"
              rel="noopener noreferrer"
              className="group w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center hover:bg-gradient-to-br hover:from-pink-500 hover:to-orange-400 hover:scale-110 transition-all duration-300 shadow-lg"
            >
              <FaInstagram className="text-white text-2xl group-hover:scale-110 transition-transform" />
            </a>

            <a
              href="https://www.tiktok.com/@alshimaa_makah?_r=1&_t=ZS-97L5QAYAryS"
              target="_blank"
              rel="noopener noreferrer"
              className="group w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center hover:bg-black hover:scale-110 transition-all duration-300 shadow-lg"
            >
              <FaTiktok className="text-white text-2xl group-hover:scale-110 transition-transform" />
            </a>

            <a
              href="https://www.snapchat.com/@eidalgzar?share_id=3xutvJmu2p4&locale=ar-AE"
              target="_blank"
              rel="noopener noreferrer"
              className="group w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center hover:bg-yellow-400 hover:scale-110 transition-all duration-300 shadow-lg"
            >
              <FaSnapchatGhost className="text-white text-2xl group-hover:scale-110 transition-transform" />
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
}
