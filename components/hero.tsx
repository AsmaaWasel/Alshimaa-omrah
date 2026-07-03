"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaInstagram, FaTiktok, FaFacebookF } from "react-icons/fa";
import { useState } from "react";
import BookingModal from "./BookingModal";

export default function Hero() {
  const [openBooking, setOpenBooking] = useState(false);

  const scrollToPrograms = () => {
    const element = document.getElementById("programs");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
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
                رحلات من الرياض الي مكة المكرمة , ورحلات من الرياض الي المدينة
                المنورة .{" "}
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
                  تصفح البرامج
                </button>
                <button
                  onClick={() => setOpenBooking(true)}
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

          {/* Quick Links Cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-16"
          >
            <a
              href="#hero"
              className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 p-7 hover:border-white/30 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-white/5"
            >
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-4 group-hover:bg-white/10 transition-all duration-300">
                  <span className="text-2xl group-hover:scale-110 transition-transform duration-300">
                    🏠
                  </span>
                </div>
                <h3 className="text-white font-semibold text-base tracking-wide">
                  الرئيسية
                </h3>
                <p className="text-white/50 text-sm mt-1.5 font-light leading-relaxed">
                  تعرف على خدماتنا
                </p>
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-white/0 via-white/0 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </a>

            <a
              href="#vip-services"
              className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 p-7 hover:border-white/30 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-white/5"
            >
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-4 group-hover:bg-white/10 transition-all duration-300">
                  <span className="text-2xl group-hover:scale-110 transition-transform duration-300">
                    ⭐
                  </span>
                </div>
                <h3 className="text-white font-semibold text-base tracking-wide">
                  عروض VIP
                </h3>
                <p className="text-white/50 text-sm mt-1.5 font-light leading-relaxed">
                  فنادق وباصات مميزة
                </p>
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-white/0 via-white/0 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </a>

            <a
              href="#economy-services"
              className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 p-7 hover:border-white/30 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-white/5"
            >
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-4 group-hover:bg-white/10 transition-all duration-300">
                  <span className="text-2xl group-hover:scale-110 transition-transform duration-300">
                    💰
                  </span>
                </div>
                <h3 className="text-white font-semibold text-base tracking-wide">
                  العروض الاقتصادية
                </h3>
                <p className="text-white/50 text-sm mt-1.5 font-light leading-relaxed">
                  أفضل الأسعار للمعتمرين
                </p>
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-white/0 via-white/0 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </a>

            <a
              href="#contact"
              className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 p-7 hover:border-white/30 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-white/5"
            >
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-4 group-hover:bg-white/10 transition-all duration-300">
                  <span className="text-2xl group-hover:scale-110 transition-transform duration-300">
                    📞
                  </span>
                </div>
                <h3 className="text-white font-semibold text-base tracking-wide">
                  تواصل معنا
                </h3>
                <p className="text-white/50 text-sm mt-1.5 font-light leading-relaxed">
                  للحجز والاستفسارات
                </p>
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-white/0 via-white/0 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </a>
          </motion.div>

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
        <BookingModal
          isOpen={openBooking}
          onClose={() => setOpenBooking(false)}
        />
      </section>

      {/* Programs Section */}
      <section
        id="programs"
        className="py-20 px-4 bg-gradient-to-b from-[#2f241d] to-[#1a1410]"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              برامجنا المميزة
            </h2>
            <p className="text-white/70 text-lg max-w-2xl mx-auto">
              اختر البرنامج المناسب لك واستمتع برحلة روحانية متكاملة
            </p>
            <div className="w-24 h-1 bg-accent mx-auto mt-4 rounded-full" />
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Program 1 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:border-accent/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-accent/10 flex flex-col"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full blur-3xl group-hover:bg-accent/10 transition-all duration-500" />
              <div className="relative z-10 flex flex-col h-full">
                <div className="text-5xl mb-4">🕋</div>
                <h3 className="text-2xl font-bold text-white mb-3">
                  برنامج 3 أيام
                </h3>
                <div className="space-y-3 text-white/80 flex-grow">
                  <p className="flex items-center gap-2">
                    <span className="text-accent">•</span> مكة والمدينة
                  </p>
                  <p className="flex items-center gap-2">
                    <span className="text-accent">•</span> مكة فقط
                  </p>
                </div>
                <a
                  href="https://wa.me/966563591198?text=أرغب%20في%20الحجز%20في%20برنامج%203%20أيام"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 w-full bg-accent text-[#2F2A25] px-6 py-3 rounded-full font-bold hover:scale-105 transition-all duration-300 shadow-lg text-center block"
                >
                  احجز الآن
                </a>
              </div>
            </motion.div>

            {/* Program 2 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:border-accent/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-accent/10 flex flex-col"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full blur-3xl group-hover:bg-accent/10 transition-all duration-500" />
              <div className="relative z-10 flex flex-col h-full">
                <div className="text-5xl mb-4">⭐</div>
                <h3 className="text-2xl font-bold text-white mb-3">
                  برنامج 4 أيام
                </h3>
                <div className="space-y-3 text-white/80 flex-grow">
                  <p className="flex items-center gap-2">
                    <span className="text-accent">•</span> مكة والمدينة
                  </p>
                  <p className="flex items-center gap-2">
                    <span className="text-accent">•</span> مكة فقط
                  </p>
                </div>
                <a
                  href="https://wa.me/966563591198?text=أرغب%20في%20الحجز%20في%20برنامج%204%20أيام"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 w-full bg-accent text-[#2F2A25] px-6 py-3 rounded-full font-bold hover:scale-105 transition-all duration-300 shadow-lg text-center block"
                >
                  احجز الآن
                </a>
              </div>
            </motion.div>

            {/* Program 3 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:border-accent/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-accent/10 flex flex-col"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full blur-3xl group-hover:bg-accent/10 transition-all duration-500" />
              <div className="relative z-10 flex flex-col h-full">
                <div className="text-5xl mb-4">👑</div>
                <h3 className="text-2xl font-bold text-white mb-3">
                  برنامج 5 أيام
                </h3>
                <div className="space-y-3 text-white/80 flex-grow">
                  <p className="flex items-center gap-2">
                    <span className="text-accent">•</span> مكة والمدينة
                  </p>
                  <p className="flex items-center gap-2">
                    <span className="text-accent">•</span> مكة فقط
                  </p>
                </div>
                <a
                  href="https://wa.me/966563591198?text=أرغب%20في%20الحجز%20في%20برنامج%205%20أيام"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 w-full bg-accent text-[#2F2A25] px-6 py-3 rounded-full font-bold hover:scale-105 transition-all duration-300 shadow-lg text-center block"
                >
                  احجز الآن
                </a>
              </div>
            </motion.div>
          </div>

          {/* VIP Program Highlight */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-10 bg-gradient-to-r from-accent/20 to-accent/5 border border-accent/30 rounded-3xl p-8 text-center"
          >
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="text-right">
                <div className="flex items-center gap-3 justify-center md:justify-start">
                  <span className="text-3xl">✨</span>
                  <h3 className="text-2xl font-bold text-white">برنامج VIP</h3>
                </div>
                <p className="text-white/70 mt-2">
                  رحلتين أسبوعياً فقط - الاثنين والخميس
                </p>
              </div>
              <a
                href="https://wa.me/966563591198?text=أرغب%20في%20الحجز%20في%20برنامج%20VIP"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-accent text-[#2F2A25] px-8 py-3 rounded-full font-bold hover:scale-105 transition-all duration-300 shadow-xl whitespace-nowrap"
              >
                احجز الآن
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
