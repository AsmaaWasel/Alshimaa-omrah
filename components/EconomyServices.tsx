"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

export default function EconomyServices() {
  const economyHotels = [
    {
      name: "فندق بارك رويال",
      description:
        "إقامة مريحة ومناسبة للمعتمرين مع خدمات متكاملة وأسعار مناسبة.",
      images: [
        "/park-royal/gate.jpeg",
        "/park-royal/room1.jpeg",
        "/park-royal/room2.jpeg",
        "/park-royal/room3.jpeg",
        "/park-royal/room4.jpeg",
        "/park-royal/room5.jpeg",
        "/park-royal/room6.jpeg",
        "/park-royal/bathroom.jpeg",
      ],
      video: "/park-royal/video.mp4",
      features: ["فندق 3 نجوم", "غرف مريحة", "خدمة مميزة", "موقع مناسب"],
    },

    {
      name: "فندق قصر رزق",
      description: "خيار اقتصادي مناسب يوفر إقامة مريحة وخدمات جيدة للمعتمرين.",
      images: [
        "/rezk/gate.jpeg",
        "/rezk/gate2.jpeg",
        "/rezk/room1.jpeg",
        "/rezk/room2.jpeg",
        "/rezk/room3.jpeg",
        "/rezk/room4.jpeg",
      ],
      features: ["فندق 3 نجوم", "أسعار مناسبة", "خدمة جيدة", "غرف مجهزة"],
    },
  ];

  const economyBusImages = [
    "/buses/1eb65052-d397-4f15-afa8-fefb428b7037.jpg",
    "/buses/bus2.jpeg",
    "/buses/bus3.jpeg",
    "/buses/bus4.jpeg",
  ];

  return (
    <section id="economy-services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-[#8B6B4A] font-semibold">
            الخدمات الاقتصادية
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-[#2F2A25]">
            فنادق 3 نجوم والباصات الاقتصادية
          </h2>

          <p className="max-w-3xl mx-auto text-gray-600 leading-8">
            خيارات مناسبة تجمع بين الراحة والسعر المناسب للمعتمرين والزوار.
          </p>
        </motion.div>

        {/* Hotels */}

        <div className="space-y-16">
          {economyHotels.map((hotel, index) => (
            <motion.div
              key={hotel.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-[#FAF7F3] rounded-[32px] shadow-xl overflow-hidden"
            >
              <div
                className={`grid lg:grid-cols-2 ${
                  index % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
                }`}
              >
                {/* Images */}

                <div className="grid grid-cols-2 gap-2 p-2">
                  {hotel.images.map((img, i) => (
                    <div key={i} className="relative h-[180px] md:h-[240px]">
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
                      <div key={idx} className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-[#8B6B4A]" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  {"video" in hotel && hotel.video ? (
                    <div className="overflow-hidden rounded-2xl">
                      <video controls className="w-full h-[250px] object-cover">
                        <source src={hotel.video} type="video/mp4" />
                      </video>
                    </div>
                  ) : (
                    <div className="bg-[#EFE7DE] rounded-2xl p-8 text-center">
                      <p className="text-[#8B6B4A] font-semibold">
                        معرض صور الفندق
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Economy Buses */}

        <div className="mt-28">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-[#8B6B4A] font-semibold">
              النقل الاقتصادي
            </span>

            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-[#2F2A25]">
              الباصات الاقتصادية
            </h2>

            <p className="max-w-3xl mx-auto text-gray-600 leading-8">
              رحلات يومية مريحة ومجهزة لنقل المعتمرين من الرياض إلى مكة.
            </p>
          </motion.div>

          {/* Images */}

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {economyBusImages.map((img, i) => (
              <div
                key={i}
                className="relative h-[260px] overflow-hidden rounded-3xl shadow-lg"
              >
                <Image
                  src={img}
                  alt={`Economy Bus ${i}`}
                  fill
                  className="object-cover hover:scale-110 transition duration-500"
                />
              </div>
            ))}
          </div>

          {/* Features */}

          <div className="grid md:grid-cols-4 gap-6">
            {["رحلات يومية", "مقاعد مريحة", "تكييف مركزي", "أسعار مناسبة"].map(
              (item) => (
                <div
                  key={item}
                  className="bg-[#FAF7F3] rounded-3xl p-6 shadow-lg text-center"
                >
                  <CheckCircle className="mx-auto mb-4 text-[#8B6B4A]" />
                  <p className="font-semibold text-[#2F2A25]">{item}</p>
                </div>
              ),
            )}
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
