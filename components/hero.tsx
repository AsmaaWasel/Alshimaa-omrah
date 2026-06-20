'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden bg-background">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/haram.png"
          alt="الحرم الشريف"
          fill
          className="object-cover"
          quality={100}
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-32">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-white"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-5xl md:text-6xl font-bold mb-6 leading-tight text-white drop-shadow-lg"
            >
              حقق حلمك في أداء <span className="text-accent">العمرة</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg md:text-xl mb-8 text-white leading-relaxed drop-shadow-md"
            >
              رحلة عمرة مريحة وآمنة من الرياض مع خدمات فندقية فاخرة وباصات حديثة وتنظيم احترافي يضمن تجربة روحانية لا تُنسى
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex gap-4 flex-wrap"
            >
              <a
                href="https://wa.me/966563591198?text=أريد%20حجز%20عمرة"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-accent text-foreground px-8 py-3 rounded-full font-bold hover:bg-accent/90 transition-all transform hover:scale-105 shadow-lg"
              >
                احجز الآن
              </a>
              <button className="border-2 border-white text-white px-8 py-3 rounded-full font-bold hover:bg-white/10 transition-all">
                تعرف أكثر
              </button>
            </motion.div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="hidden md:grid grid-cols-2 gap-6"
          >
            {[
              { number: '500+', label: 'عميل راضي' },
              { number: '15+', label: 'سنة خبرة' },
              { number: '50+', label: 'فندق متميز' },
              { number: '24/7', label: 'دعم فني' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 + index * 0.1 }}
                className="bg-white/10 backdrop-blur border border-white/20 rounded-2xl p-6 text-white text-center"
              >
                <div className="text-3xl font-bold text-accent mb-2">{stat.number}</div>
                <div className="text-sm text-gray-100">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-2 bg-white rounded-full mt-2"></div>
        </div>
      </motion.div>
    </section>
  );
}
