"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Star, MapPin, CheckCircle } from "lucide-react";

export default function Hotels() {
  const hotelTypes = [
    {
      id: 1,
      title: "فنادق 3 نجوم",
      image: "/park-room-5stars.jpeg",
      stars: 3,
      description:
        "إقامة مريحة واقتصادية للمعتمرين مع خدمات أساسية وموقع مناسب.",
      features: [
        "غرف نظيفة ومريحة",
        "خدمة استقبال",
        "أسعار اقتصادية",
        "مواصلات للحرم",
      ],
    },
    {
      id: 2,
      title: "فنادق 5 نجوم",
      image: "/voco-reception-5stars.jpeg",
      stars: 5,
      description: "إقامة فاخرة وخدمات مميزة للباحثين عن أعلى مستويات الراحة.",
      features: [
        "غرف وأجنحة فاخرة",
        "مطاعم راقية",
        "خدمات متميزة",
        "راحة استثنائية",
      ],
    },
  ];

  const locations = [
    {
      id: 1,
      title: "شارع إبراهيم الخليل",
      description:
        "من أشهر المناطق القريبة من الحرم المكي وتتميز بسهولة الوصول وتوفر العديد من الفنادق والخدمات.",
    },
    {
      id: 2,
      title: "محبس الجن",
      description:
        "منطقة مميزة تضم العديد من الفنادق المناسبة للمعتمرين مع وسائل نقل مستمرة إلى الحرم.",
    },
  ];

  return (
    <section id="hotels" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-[#8B6B4A] font-semibold">الإقامة والفنادق</span>

          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-[#2F2A25]">
            خيارات الإقامة
          </h2>

          <p className="max-w-3xl mx-auto text-lg text-gray-600">
            نوفر خيارات إقامة متنوعة تناسب جميع الاحتياجات والميزانيات.
          </p>
        </motion.div>

        {/* Hotel Types */}
        <div className="grid lg:grid-cols-2 gap-8 mb-24">
          {hotelTypes.map((hotel, index) => (
            <motion.div
              key={hotel.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                delay: index * 0.2,
              }}
              className="bg-[#FAF7F3] rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all"
            >
              <div className="relative h-[300px]">
                <Image
                  src={hotel.image}
                  alt={hotel.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-8">
                <div className="flex gap-1 mb-4">
                  {[...Array(hotel.stars)].map((_, idx) => (
                    <Star
                      key={idx}
                      className="w-5 h-5 fill-[#D9B45B] text-[#D9B45B]"
                    />
                  ))}
                </div>

                <h3 className="text-3xl font-bold text-[#2F2A25] mb-4">
                  {hotel.title}
                </h3>

                <p className="text-gray-600 leading-7 mb-6">
                  {hotel.description}
                </p>

                <div className="space-y-3 mb-8">
                  {hotel.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-[#8B6B4A]" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                <a
                  href="https://wa.me/966563591198"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex px-6 py-3 rounded-full bg-[#8B6B4A] text-white font-bold hover:scale-105 transition-all"
                >
                  استفسر الآن
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Locations */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#2F2A25] mb-4">
              مواقع الإقامة
            </h2>

            <p className="text-gray-600">
              نوفر خيارات إقامة مميزة في أفضل المناطق القريبة من الحرم المكي.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {locations.map((location) => (
              <motion.div
                key={location.id}
                whileHover={{ y: -5 }}
                className="bg-[#FAF7F3] rounded-3xl p-8 shadow-lg border border-[#E8D8C8]"
              >
                <div className="w-14 h-14 rounded-2xl bg-[#8B6B4A]/10 flex items-center justify-center mb-6">
                  <MapPin className="w-7 h-7 text-[#8B6B4A]" />
                </div>

                <h3 className="text-2xl font-bold text-[#2F2A25] mb-4">
                  {location.title}
                </h3>

                <p className="text-gray-600 leading-8">
                  {location.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
