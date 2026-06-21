"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { Bus } from "lucide-react";

export default function Buses() {
  return (
    <section id="buses" className="py-24 bg-[#FAF7F3]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-14"
        >
          <span className="text-[#8B6B4A] font-semibold">وسائل النقل</span>

          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-[#2F2A25]">
            باصات قافلة الروضة
          </h2>

          <p className="max-w-3xl mx-auto text-lg text-gray-600 leading-relaxed">
            نوفر لكم باصات اقتصادية و VIP مجهزة بالكامل لنقل المعتمرين من الرياض
            إلى مكة المكرمة بأعلى مستويات الراحة والأمان.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Economy */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-[30px] overflow-hidden shadow-xl"
          >
            <div className="relative h-[280px]">
              <Image
                src="/bus.png"
                alt="الباصات الاقتصادية"
                fill
                className="object-cover"
              />
            </div>

            <div className="p-8 text-right">
              <h3 className="text-3xl font-bold text-[#2F2A25] mb-4">
                الباصات الاقتصادية
              </h3>

              <p className="text-gray-600 leading-8 mb-6">
                باصات مريحة ومجهزة للرحلات اليومية من الرياض إلى مكة المكرمة.
              </p>

              <div className="flex items-center gap-2 text-[#8B6B4A]">
                <Bus size={22} />
                <span>رحلات يومية</span>
              </div>
            </div>
          </motion.div>

          {/* VIP */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-[#f8efe7] to-[#efe0d3] rounded-[30px] overflow-hidden shadow-xl"
          >
            <div className="relative h-[280px]">
              <Image
                src="/bus1vip.jpg"
                alt="باصات VIP"
                fill
                className="object-cover"
              />
            </div>

            <div className="p-8 text-right">
              <h3 className="text-3xl font-bold text-[#2F2A25] mb-4">
                باصات VIP
              </h3>

              <p className="text-gray-600 leading-8 mb-6">
                تجربة سفر مميزة بمستوى أعلى من الراحة والخصوصية.
              </p>

              <div className="flex items-center gap-2 text-[#8B6B4A]">
                <Bus size={22} />
                <span>الإثنين والخميس</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Button */}
        <div className="flex justify-center mt-14">
          <Link
            href="/buses"
            className="
              px-10
              py-4
              rounded-full
              bg-[#8B6B4A]
              text-white
              font-bold
              shadow-lg
              hover:scale-105
              transition-all
            "
          >
            عرض جميع الباصات
          </Link>
        </div>
      </div>
    </section>
  );
}
