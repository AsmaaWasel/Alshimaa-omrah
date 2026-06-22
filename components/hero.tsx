"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaInstagram, FaTiktok, FaFacebookF } from "react-icons/fa";

export default function Hero() {
  return (
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
            رحلات من الرياض الي مكة المكرمة , ورحلات من الرياض الي المدينة
            المنورة .{" "}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-wrap gap-4 mt-8"
          >
            <a
              href="https://wa.me/966563591198?text=السلام%20عليكم%20أرغب%20في%20حجز%20رحلة%20عمرة"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#D9B8A6] text-[#2F2A25] px-8 py-4 rounded-full font-bold shadow-xl hover:scale-105 transition-all duration-300"
            >
              احجز رحلتك الآن
            </a>

            <a
              href="https://wa.me/966563591198"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-white/40 backdrop-blur-md bg-white/10 text-white px-8 py-4 rounded-full font-bold hover:bg-white/20 transition-all duration-300"
            >
              تواصل عبر واتساب
            </a>
          </motion.div>
          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="hidden md:block"
          >
            <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6 text-accent">
                لماذا الشيماء؟
              </h3>

              <div className="space-y-4">
                <div>🚌 باصات حديثة ومريحة</div>
                <div>🏨 فنادق مختارة بعناية</div>
                <div>🕋 برامج عمرة منظمة</div>
                <div>📍 انطلاق مباشر من الرياض</div>
                <div>💬 متابعة وخدمة مستمرة</div>
              </div>
            </div>
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
            href="https://www.facebook.com/share/1BgfTwUvr2/"
            target="_blank"
            rel="noopener noreferrer"
            className="group w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center hover:bg-blue-600 hover:scale-110 transition-all duration-300 shadow-lg"
          >
            <FaFacebookF className="text-white text-2xl group-hover:scale-110 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
