"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle, Star, Bus, Wallet, ShieldCheck } from "lucide-react";
import { JSX } from "react";

interface EconomyHotel {
  name: string;
  description: string;
  images: string[];
  video?: string;
  features: string[];
}

const economyHotels: EconomyHotel[] = [
  {
    name: "فندق بارك رويال",
    description:
      "إقامة مريحة ومناسبة للمعتمرين مع خدمات متكاملة وأسعار مناسبة، لتوفير تجربة إقامة عملية ومريحة أثناء رحلة العمرة.",
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
    features: ["فندق ثلاث نجوم", "غرف مريحة", "خدمة مميزة", "موقع مناسب"],
  },
  {
    name: "فندق قصر رزق",
    description:
      "خيار اقتصادي مناسب يوفر إقامة مريحة وخدمات جيدة للمعتمرين، مع التركيز على توفير الراحة والقيمة المناسبة للميزانية.",
    images: [
      "/rezk/gate.jpeg",
      "/rezk/gate2.jpeg",
      "/rezk/room1.jpeg",
      "/rezk/room2.jpeg",
      "/rezk/room3.jpeg",
      "/rezk/room4.jpeg",
    ],
    features: ["فندق ثلاث نجوم", "أسعار مناسبة", "خدمة جيدة", "غرف مجهزة"],
  },
];

const economyBusImages: string[] = [
  "/buses/1eb65052-d397-4f15-afa8-fefb428b7037.jpg",
  "/buses/bus2.jpeg",
  "/buses/bus3.jpeg",
  "/buses/bus4.jpeg",
];

const economyBusFeatures: string[] = [
  "رحلات يومية",
  "مقاعد مريحة",
  "تكييف مركزي",
  "أسعار مناسبة",
];

export default function EconomyServices(): JSX.Element {
  return (
    <section
      id="economy-services"
      dir="rtl"
      className="relative overflow-hidden bg-[#101117] py-24 text-white"
    >
      {/* ================================================= */}
      {/* ================= BACKGROUND ==================== */}
      {/* ================================================= */}

      <div className="pointer-events-none absolute inset-0">
        {/* Green glow */}
        <div className="absolute right-[5%] top-0 h-[500px] w-[500px] rounded-full bg-[#096B50]/10 blur-[140px]" />

        {/* Gold glow */}
        <div className="absolute bottom-[15%] left-[5%] h-[450px] w-[450px] rounded-full bg-[#D4AF37]/5 blur-[130px]" />

        {/* Center glow */}
        <div className="absolute left-[45%] top-[35%] h-[300px] w-[300px] rounded-full bg-[#096B50]/5 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6">
        {/* ================================================= */}
        {/* ===================== HEADER ==================== */}
        {/* ================================================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <span className="inline-flex items-center gap-2 border border-[#096B50]/60 bg-[#096B50]/10 px-5 py-2 text-sm font-bold text-[#35B894] md:text-base">
            <Wallet size={17} />
            الباقة الاقتصادية
          </span>

          <h2 className="mt-6 text-4xl font-black text-white md:text-5xl lg:text-6xl">
            إقامة مريحة بأسعار مناسبة
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-lg leading-9 text-[#aaaab0] md:text-xl">
            اختر من بين فنادقنا الاقتصادية وباصاتنا المجهزة لتستمتع برحلة عمرة
            مريحة تجمع بين الجودة والسعر المناسب.
          </p>
        </motion.div>

        {/* ================================================= */}
        {/* ====================== HOTELS =================== */}
        {/* ================================================= */}

        <div className="space-y-10 md:space-y-14">
          {economyHotels.map((hotel, index) => (
            <motion.div
              key={hotel.name}
              initial={{
                opacity: 0,
                y: 40,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              viewport={{
                once: true,
                amount: 0.15,
              }}
              className="group relative overflow-hidden border border-[#30323c] bg-[#191b25] shadow-xl"
            >
              {/* Top line */}

              <div className="absolute left-0 right-0 top-0 h-[2px] bg-gradient-to-l from-transparent via-[#D4AF37] to-transparent opacity-70" />

              <div
                className={`grid lg:grid-cols-2 ${
                  index % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
                }`}
              >
                {/* ================================================= */}
                {/* ====================== IMAGES ==================== */}
                {/* ================================================= */}

                <div className="grid grid-cols-2 gap-2 bg-[#111218] p-2">
                  {hotel.images.map((img, i) => (
                    <motion.div
                      key={img}
                      whileHover={{
                        scale: 1.02,
                      }}
                      className="group/image relative h-[170px] overflow-hidden md:h-[220px]"
                    >
                      <Image
                        src={img}
                        alt={`${hotel.name} - صورة ${i + 1}`}
                        fill
                        sizes="(max-width: 768px) 50vw, 25vw"
                        className="object-cover transition duration-700 group-hover/image:scale-110"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 transition duration-500 group-hover/image:opacity-100" />
                    </motion.div>
                  ))}
                </div>

                {/* ================================================= */}
                {/* ====================== CONTENT =================== */}
                {/* ================================================= */}

                <div className="flex flex-col justify-center p-7 md:p-10 lg:p-12">
                  {/* Hotel badge */}

                  <div className="mb-5 flex">
                    <span className="inline-flex items-center gap-2 border border-[#096B50]/50 bg-[#096B50]/10 px-4 py-2 text-xs font-bold text-[#35B894] md:text-sm">
                      <Star size={15} className="fill-[#35B894]" />
                      إقامة اقتصادية
                    </span>
                  </div>

                  {/* Hotel name */}

                  <h3 className="text-3xl font-black text-white md:text-4xl">
                    {hotel.name}
                  </h3>

                  {/* Gold line */}

                  <div className="mt-4 h-[2px] w-16 bg-[#D4AF37]" />

                  {/* Description */}

                  <p className="mt-6 text-base leading-8 text-[#a7a8af] md:text-lg">
                    {hotel.description}
                  </p>

                  {/* Features */}

                  <div className="mt-8 grid gap-4 sm:grid-cols-2">
                    {hotel.features.map((feature) => (
                      <div
                        key={feature}
                        className="flex items-center gap-3 text-base text-[#dedee2]"
                      >
                        <div className="flex h-7 w-7 shrink-0 items-center justify-center border border-[#096B50]/40 bg-[#096B50]/10">
                          <CheckCircle size={15} className="text-[#35B894]" />
                        </div>

                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Video */}

                  {hotel.video ? (
                    <div className="mt-9 overflow-hidden border border-[#30323c] bg-[#111218] p-1 shadow-lg">
                      <video
                        controls
                        preload="metadata"
                        className="h-[230px] w-full object-cover md:h-[260px]"
                      >
                        <source src={hotel.video} type="video/mp4" />
                        المتصفح لا يدعم تشغيل الفيديو
                      </video>
                    </div>
                  ) : (
                    <div className="mt-9 flex h-[120px] items-center justify-center border border-[#30323c] bg-[#111218]">
                      <div className="flex items-center gap-2 text-[#35B894]">
                        <ShieldCheck size={20} />
                        <span className="font-bold">معرض صور الفندق</span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ================================================= */}
        {/* ================= ECONOMY BUSES ================= */}
        {/* ================================================= */}

        <div className="mt-28">
          {/* Header */}

          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            className="mx-auto mb-16 max-w-3xl text-center"
          >
            <span className="inline-flex items-center gap-2 border border-[#D4AF37]/40 bg-[#D4AF37]/10 px-5 py-2 text-sm font-bold text-[#D4AF37] md:text-base">
              <Bus size={17} />
              النقل الاقتصادي
            </span>

            <h2 className="mt-6 text-4xl font-black text-white md:text-5xl lg:text-6xl">
              الباصات الاقتصادية
            </h2>

            <p className="mx-auto mt-5 max-w-3xl text-lg leading-9 text-[#aaaab0] md:text-xl">
              رحلات يومية مريحة ومجهزة لنقل المعتمرين والزوار من الرياض إلى مكة
              والمدينة.
            </p>
          </motion.div>

          {/* ================================================= */}
          {/* ================= BUS IMAGES ==================== */}
          {/* ================================================= */}

          <div className="mb-14 grid gap-5 md:grid-cols-3">
            {economyBusImages.map((img, i) => (
              <motion.div
                key={img}
                initial={{
                  opacity: 0,
                  y: 30,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: i * 0.1,
                }}
                viewport={{
                  once: true,
                }}
                whileHover={{
                  y: -6,
                }}
                className="group relative h-[250px] overflow-hidden border border-[#30323c] bg-[#191b25] shadow-lg md:h-[280px]"
              >
                <Image
                  src={img}
                  alt={`الباص الاقتصادي ${i + 1}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition duration-700 group-hover:scale-110"
                />

                {/* Overlay */}

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-70" />

                {/* Number */}

                <div className="absolute bottom-4 right-4 flex h-9 w-9 items-center justify-center border border-[#D4AF37]/50 bg-[#101117]/90 text-sm font-bold text-[#D4AF37] backdrop-blur">
                  {i + 1}
                </div>
              </motion.div>
            ))}
          </div>

          {/* ================================================= */}
          {/* ================= BUS FEATURES ================== */}
          {/* ================================================= */}

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {economyBusFeatures.map((item, index) => (
              <motion.div
                key={item}
                initial={{
                  opacity: 0,
                  y: 25,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  delay: index * 0.1,
                }}
                whileHover={{
                  y: -6,
                }}
                className="border border-[#30323c] bg-[#191b25] p-7 text-center transition-all duration-300 hover:border-[#096B50]/60 hover:shadow-[0_15px_40px_rgba(9,107,80,0.12)]"
              >
                <div className="mx-auto flex h-14 w-14 items-center justify-center border border-[#096B50]/40 bg-[#096B50]/10">
                  <CheckCircle size={26} className="text-[#35B894]" />
                </div>

                <p className="mt-5 text-base font-bold text-white md:text-lg">
                  {item}
                </p>
              </motion.div>
            ))}
          </div>

          {/* ================================================= */}
          {/* ======================== CTA ==================== */}
          {/* ================================================= */}

          <motion.div
            initial={{
              opacity: 0,
              y: 25,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            className="mt-16 text-center"
          >
            <p className="mb-5 text-base text-[#999aa1] md:text-lg">
              ابحث عن رحلة عمرة مريحة بسعر مناسب
            </p>

            <a
              href="https://wa.me/966563591198"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#096B50] px-10 py-4 text-base font-black text-white shadow-[0_10px_35px_rgba(9,107,80,0.18)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#075B44]"
            >
              احجز الآن عبر واتساب
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
