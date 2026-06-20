"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

export default function Buses() {
  const busCategories = [
    {
      id: 1,
      title: "الباصات الاقتصادية",
      description:
        "باصات حديثة ومريحة مجهزة لنقل المعتمرين والزوار من الرياض إلى مكة المكرمة والمدينة المنورة بأعلى معايير الأمان والراحة.",
      images: ["/bus.png", "/bus2.jpg", "/bus3.jpeg", "/bus4.jpeg"],
      features: [
        "مقاعد مريحة",
        "تكييف مركزي",
        "رحلات منتظمة",
        "سائقون محترفون",
      ],
      whatsappText: "أرغب بالحجز في الباصات الاقتصادية",
      vip: false,
    },
    {
      id: 2,
      title: "باصات VIP",
      description:
        "رحلات فاخرة للباحثين عن أعلى مستويات الراحة مع خدمات مميزة وتجربة سفر استثنائية.",
      images: ["/bus1vip.jpg", "/bus2vip.jpg", "/bus3vip.jpg", "/bus4vip.jpg"],
      features: [
        "مقاعد واسعة وفاخرة",
        "خدمات ضيافة",
        "رحلات خاصة",
        "راحة استثنائية",
      ],
      whatsappText: "أرغب بالحجز في باصات VIP",
      vip: true,
    },
  ];

  return (
    <section id="buses" className="py-24 bg-[#FAF7F3]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-primary font-semibold">وسائل النقل</span>

          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-[#2F2A25]">
            أسطول النقل الخاص بنا
          </h2>

          <p className="max-w-3xl mx-auto text-lg text-gray-600 leading-relaxed">
            نوفر باصات حديثة ومجهزة بالكامل لنقل المعتمرين والزوار من الرياض إلى
            مكة المكرمة والمدينة المنورة مع الاهتمام بأدق تفاصيل الراحة والأمان.
          </p>
        </motion.div>

        <div className="space-y-16">
          {busCategories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`
                overflow-hidden rounded-[32px]
                shadow-xl
                ${
                  category.vip
                    ? "bg-gradient-to-br from-[#f8efe7] to-[#efe0d3]"
                    : "bg-white"
                }
              `}
            >
              <div
                className={`
                  grid
                  lg:grid-cols-2
                  gap-0
                `}
              >
                {/* Slider */}
                <div className="relative h-[300px] lg:h-[500px]">
                  <Swiper
                    modules={[Autoplay, Pagination]}
                    pagination={{ clickable: true }}
                    autoplay={{
                      delay: 3000,
                      disableOnInteraction: false,
                    }}
                    loop
                    className="h-full"
                  >
                    {category.images.map((image, idx) => (
                      <SwiperSlide key={idx}>
                        <div className="relative h-[300px] lg:h-[500px]">
                          <Image
                            src={image}
                            alt={category.title}
                            fill
                            className="object-cover"
                          />
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>

                {/* Content */}
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div
                    className={`
                      inline-flex
                      w-fit
                      px-4
                      py-2
                      rounded-full
                      mb-6
                      text-sm
                      font-semibold
                      ${
                        category.vip
                          ? "bg-[#8B6B4A] text-white"
                          : "bg-[#EFE7DE] text-[#8B6B4A]"
                      }
                    `}
                  >
                    {category.vip ? "الاختيار المميز" : "الاختيار الاقتصادي"}
                  </div>

                  <h3 className="text-3xl md:text-4xl font-bold text-[#2F2A25] mb-6">
                    {category.title}
                  </h3>

                  <p className="text-gray-600 leading-8 mb-8">
                    {category.description}
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 mb-10">
                    {category.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-[#8B6B4A]" />
                        <span className="text-[#2F2A25]">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <a
                    href={`https://wa.me/966563591198?text=${encodeURIComponent(
                      category.whatsappText,
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      inline-flex
                      items-center
                      justify-center
                      w-fit
                      px-8
                      py-4
                      rounded-full
                      bg-[#8B6B4A]
                      text-white
                      font-bold
                      hover:scale-105
                      transition-all
                      duration-300
                      shadow-lg
                    "
                  >
                    احجز الآن
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
