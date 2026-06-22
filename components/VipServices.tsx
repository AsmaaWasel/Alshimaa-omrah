
"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

export default function PremiumServices() {
  const hotels = [
    {
      name: "فندق فوكو ",
      description:
        "إقامة فاخرة وخدمات راقية في موقع مميز لتوفير أقصى درجات الراحة للمعتمرين والزوار.",
      images: [
        "/voco/i-love-voco.jpeg",
        "/voco/voco-gate.jpeg",
        "/voco/room2.jpeg",
        "/voco/room3.jpeg",
        "/voco/room4.jpeg",
        "/voco/reception-voco.jpeg",

      ],
      video: "/voco/voco-video.mp4",
      features: [
        "فندق خمس نجوم",
        "غرف فاخرة",
        "خدمات متكاملة",
        "راحة واستجمام",
      ],
    },
    {
      name: "فندق ميلينيوم ",
      description:
        "تجربة إقامة مميزة تجمع بين الفخامة والراحة مع خدمات عالية الجودة لضيوف الرحمن.",
      images: [
        "/melemum/melemum-gate.jpeg",
        "/melemum/melemum-gate2.jpeg",
        "/melemum/melemum-room.jpeg",
        "/melemum/melemum-room2.jpeg",
        "/melemum/melemum-room3.jpeg",
        "/melemum/melemum-room4.jpeg",
        
      ],
      video: "/melemum/video.mp4",
      features: [
        "فندق خمس نجوم",
        "خدمة متميزة",
        "غرف حديثة",
        "مرافق متكاملة",
      ],
    },
  ];

  const vipBusImages = [
    "/vip-buses/bus1.jpeg",
    "/vip-buses/bus2.jpeg",
    "/vip-buses/bus3.jpeg",
    "/vip-buses/bus4.jpeg",
    "/vip-buses/bus5.jpeg",
  ];

  const vipBusVideos = [
  "/vip-buses/video1.mp4",
  "/vip-buses/video3.mp4",
];

  return (
    <section id="vip-services" className="py-24 bg-[#FAF7F3]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Hotels Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-[#8B6B4A] font-semibold">
            الإقامة الفاخرة
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-[#2F2A25]">
            فنادق الخمس نجوم
          </h2>

          <p className="max-w-3xl mx-auto text-gray-600 leading-8">
            نوفر لضيوفنا إقامة مميزة في فنادق مختارة بعناية لضمان الراحة
            والخصوصية أثناء رحلة العمرة.
          </p>
        </motion.div>

        {/* Hotels */}
        <div className="space-y-16">
          {hotels.map((hotel, index) => (
            <motion.div
              key={hotel.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-[32px] shadow-xl overflow-hidden"
            >
              <div
                className={`grid lg:grid-cols-2 ${
                  index % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
                }`}
              >
                {/* Images */}
                <div className="grid grid-cols-2 gap-2 p-2">
                  {hotel.images.map((img, i) => (
                    <div
                      key={i}
                      className="relative h-[180px] md:h-[240px]"
                    >
                      <Image
                        src={img}
                        alt={hotel.name}
                        fill
                        className="object-cover rounded-xl"
                      />
                    </div>
                  ))}
                </div>

                {/* Content */}
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <h3 className="text-3xl font-bold text-[#2F2A25] mb-4">
                    {hotel.name}
                  </h3>

                  <p className="text-gray-600 leading-8 mb-8">
                    {hotel.description}
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 mb-8">
                    {hotel.features.map((feature, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-3"
                      >
                        <CheckCircle className="w-5 h-5 text-[#8B6B4A]" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="overflow-hidden rounded-2xl">
                    <video
                      controls
                      className="w-full h-[250px] object-cover"
                    >
                      <source
                        src={hotel.video}
                        type="video/mp4"
                      />
                    </video>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* VIP Buses */}
        <div className="mt-28">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-[#8B6B4A] font-semibold">
              النقل المميز
            </span>

            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-[#2F2A25]">
              باصات VIP
            </h2>

            <p className="max-w-3xl mx-auto text-gray-600 leading-8">
              باصات مجهزة بأعلى مستويات الراحة لتوفير تجربة سفر مميزة
              للمعتمرين والزوار.
            </p>
          </motion.div>

          {/* Images */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {vipBusImages.map((img, i) => (
              <div
                key={i}
                className="relative h-[260px] overflow-hidden rounded-3xl shadow-lg"
              >
                <Image
                  src={img}
                  alt={`VIP Bus ${i}`}
                  fill
                  className="object-cover hover:scale-110 transition duration-500"
                />
              </div>
            ))}
          </div>

          {/* Videos */}
          {/* Videos */}

<div className="mb-12">
  <h3 className="text-2xl font-bold text-[#2F2A25] mb-6 text-center">
    فيديوهات الباصات
  </h3>

  <div className="grid md:grid-cols-2 gap-8">
    {vipBusVideos.map((video, index) => (
      <motion.div
        key={index}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.2 }}
        className="bg-white rounded-3xl overflow-hidden shadow-xl"
      >
        <video
          controls
          className="w-full h-[350px] object-cover"
        >
          <source src={video} type="video/mp4" />
          المتصفح لا يدعم تشغيل الفيديو
        </video>
      </motion.div>
    ))}
  </div>
</div>

          {/* Features */}
          <div className="grid md:grid-cols-4 gap-6">
            {[
              "مقاعد واسعة",
              "راحة استثنائية",
              "تكييف مركزي",
              "خدمة مميزة",
            ].map((item) => (
              <div
                key={item}
                className="bg-white rounded-3xl p-6 shadow-lg text-center"
              >
                <CheckCircle className="mx-auto mb-4 text-[#8B6B4A]" />
                <p className="font-semibold text-[#2F2A25]">
                  {item}
                </p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-14">
            <a
              href="https://wa.me/966563591198"
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex
                items-center
                justify-center
                px-10
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
      </div>
    </section>
  );
}

