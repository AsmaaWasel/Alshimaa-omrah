"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle, Crown, Star, Bus } from "lucide-react";

export default function PremiumServices() {
  const hotels = [
    {
      name: "فندق فوكو",
      description:
        "خدمات VIP راقية مع إقامة في فندق مميز قريب من الحرم، بالإضافة إلى خدمة نقل مجانية على مدار 24 ساعة من وإلى الحرم لتوفير أقصى درجات الراحة للمعتمرين والزوار.",
      images: [
        "/voco/i-love-voco.jpeg",
        "/voco/voco-gate.jpeg",
        "/voco/room2.jpeg",
        "/voco/room3.jpeg",
        "/voco/room4.jpeg",
        "/voco/reception-voco.jpeg",
      ],
      video: "/voco/voco2.mp4",
      features: [
        "فندق خمس نجوم",
        "غرف فاخرة",
        "مطاعم وبوفيه وكافيهات",
        "مواقف سيارات",
      ],
    },

    {
      name: "فندق ميلينيوم",
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
      features: ["فندق خمس نجوم", "خدمة متميزة", "غرف حديثة", "مرافق متكاملة"],
    },

    {
      name: "فندق هوليداي إن",
      description:
        "فندق نظيف ومرتب بتصنيف خمس نجوم في حي العزيزية الشمالية، يتميز بوجود مسبح وبوفيه مفتوح، مع خدمات راقية تناسب ضيوف الرحمن الباحثين عن الراحة والهدوء.",
      images: [
        "/holiday-in/photo1.jpeg",
        "/holiday-in/photo2.jpeg",
        "/holiday-in/photo3.jpeg",
        "/holiday-in/photo4.jpeg",
        "/holiday-in/photo5.jpeg",
        "/holiday-in/photo6.jpeg",
      ],
      video: "/holiday-in/video1.mp4",
      features: [
        "فندق خمس نجوم",
        "حي العزيزية الشمالية",
        "مسبح",
        "بوفيه مفتوح",
      ],
    },
  ];

  const vipBusImages = [
    "/vip-buses/bus1.jpeg",
    "/vip-buses/bus6.jpeg",
    "/vip-buses/bus3.jpeg",
    "/vip-buses/bus4.jpeg",
    "/vip-buses/bus5.jpeg",
  ];

  const vipBusVideos = ["/vip-buses/video1.mp4", "/vip-buses/video2.mp4"];

  return (
    <section
      id="vip-services"
      dir="rtl"
      className="relative overflow-hidden bg-[#101117] py-24 text-white"
    >
      {/* ================= BACKGROUND ================= */}

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute right-[10%] top-0 h-[500px] w-[500px] rounded-full bg-[#c9a227]/5 blur-[130px]" />

        <div className="absolute bottom-[10%] left-[5%] h-[450px] w-[450px] rounded-full bg-[#17866c]/5 blur-[130px]" />

        <div className="absolute left-[45%] top-[35%] h-[350px] w-[350px] rounded-full bg-[#c9a227]/[0.025] blur-[100px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6">
        {/* ================================================= */}
        {/* ================= HOTELS HEADER ================= */}
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
          <span className="inline-flex items-center gap-2 rounded-full border border-[#c9a227]/40 bg-[#c9a227]/10 px-5 py-2 text-sm font-bold text-[#d8b63d] md:text-base">
            <Crown size={16} />
            الإقامة الفاخرة
          </span>

          <h2 className="mt-6 text-4xl font-black text-white md:text-5xl lg:text-6xl">
            فنادق الخمس نجوم
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-lg leading-9 text-[#aaaab0] md:text-xl">
            نوفر لضيوفنا إقامة مميزة في فنادق مختارة بعناية لضمان الراحة
            والخصوصية أثناء رحلة العمرة.
          </p>
        </motion.div>

        {/* ================================================= */}
        {/* ===================== HOTELS ==================== */}
        {/* ================================================= */}

        <div className="space-y-10 md:space-y-14">
          {hotels.map((hotel, index) => (
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
              className={`group relative overflow-hidden border bg-[#191b25] ${
                index === 0
                  ? "border-[#c9a227]/50 shadow-[0_20px_70px_rgba(201,162,39,0.08)]"
                  : "border-[#30323c]"
              }`}
            >
              {/* Golden top line */}

              <div className="absolute right-0 left-0 top-0 h-[2px] bg-gradient-to-l from-transparent via-[#c9a227] to-transparent opacity-50" />

              <div
                className={`grid lg:grid-cols-2 ${
                  index % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
                }`}
              >
                {/* ================= IMAGES ================= */}

                <div className="grid grid-cols-2 gap-2 bg-[#111218] p-2">
                  {hotel.images.map((img, i) => (
                    <motion.div
                      key={i}
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

                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 transition duration-500 group-hover/image:opacity-100" />
                    </motion.div>
                  ))}
                </div>

                {/* ================= CONTENT ================= */}

                <div className="flex flex-col justify-center p-7 md:p-10 lg:p-12">
                  {/* Hotel badge */}

                  <div className="mb-5 flex">
                    <span className="inline-flex items-center gap-2 rounded-full border border-[#c9a227]/40 bg-[#c9a227]/10 px-4 py-2 text-xs font-bold text-[#d7b53a] md:text-sm">
                      <Star size={15} className="fill-[#d7b53a]" />
                      فندق خمس نجوم
                    </span>
                  </div>

                  <h3 className="text-3xl font-black text-white md:text-4xl">
                    {hotel.name}
                  </h3>

                  <div className="mt-4 h-[2px] w-16 bg-[#c9a227]" />

                  <p className="mt-6 text-base leading-8 text-[#a7a8af] md:text-lg">
                    {hotel.description}
                  </p>

                  {/* Features */}

                  <div className="mt-8 grid gap-4 sm:grid-cols-2">
                    {hotel.features.map((feature, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-3 text-base text-[#dedee2]"
                      >
                        <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-[#c9a227]/30 bg-[#c9a227]/10">
                          <CheckCircle size={15} className="text-[#d4ad32]" />
                        </div>

                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Video */}

                  <div className="mt-9 overflow-hidden border border-[#30323c] bg-[#111218] shadow-lg">
                    <video
                      controls
                      preload="metadata"
                      className="h-[230px] w-full object-cover md:h-[260px]"
                    >
                      <source src={hotel.video} type="video/mp4" />
                      المتصفح لا يدعم تشغيل الفيديو
                    </video>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ================================================= */}
        {/* ================= VIP BUSES HEADER ============== */}
        {/* ================================================= */}

        <div className="mt-28">
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
            <span className="inline-flex items-center gap-2 rounded-full border border-[#17866c]/50 bg-[#17866c]/10 px-5 py-2 text-sm font-bold text-[#31b894] md:text-base">
              <Bus size={17} />
              النقل المميز
            </span>

            <h2 className="mt-6 text-4xl font-black text-white md:text-5xl lg:text-6xl">
              باصات VIP
            </h2>

            <p className="mx-auto mt-5 max-w-3xl text-lg leading-9 text-[#aaaab0] md:text-xl">
              باصات مجهزة بأعلى مستويات الراحة لتوفير تجربة سفر مميزة للمعتمرين
              والزوار.
            </p>
          </motion.div>

          {/* ================================================= */}
          {/* ================= VIP BUS IMAGES ================= */}
          {/* ================================================= */}

          <div className="mb-14 grid gap-5 md:grid-cols-3">
            {vipBusImages.map((img, i) => (
              <motion.div
                key={i}
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
                  alt={`باص VIP ${i + 1}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition duration-700 group-hover:scale-110"
                />

                {/* Overlay */}

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-70" />

                {/* Number */}

                <div className="absolute bottom-4 right-4 flex h-9 w-9 items-center justify-center rounded-full border border-[#c9a227]/50 bg-[#101117]/80 text-sm font-bold text-[#e0bd3e] backdrop-blur">
                  {i + 1}
                </div>
              </motion.div>
            ))}
          </div>

          {/* ================================================= */}
          {/* ================= VIP BUS VIDEOS ================= */}
          {/* ================================================= */}

          <div className="mb-14">
            <div className="mb-8 text-center">
              <span className="text-sm font-bold text-[#c9a227]">
                شاهد التجربة
              </span>

              <h3 className="mt-2 text-2xl font-black text-white md:text-3xl">
                فيديوهات الباصات
              </h3>
            </div>

            <div className="grid gap-7 md:grid-cols-2">
              {vipBusVideos.map((video, index) => (
                <motion.div
                  key={index}
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
                  transition={{
                    delay: index * 0.15,
                  }}
                  className="overflow-hidden border border-[#30323c] bg-[#191b25] p-2 shadow-xl"
                >
                  <video
                    controls
                    preload="metadata"
                    className="h-[300px] w-full object-cover md:h-[350px]"
                  >
                    <source src={video} type="video/mp4" />
                    المتصفح لا يدعم تشغيل الفيديو
                  </video>
                </motion.div>
              ))}
            </div>
          </div>

          {/* ================================================= */}
          {/* ================= VIP FEATURES ================== */}
          {/* ================================================= */}

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {["مقاعد واسعة", "راحة استثنائية", "تكييف مركزي", "خدمة مميزة"].map(
              (item, index) => (
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
                  className="border border-[#30323c] bg-[#191b25] p-7 text-center transition-all duration-300 hover:border-[#c9a227]/50 hover:shadow-[0_15px_40px_rgba(201,162,39,0.08)]"
                >
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-[#c9a227]/30 bg-[#c9a227]/10">
                    <CheckCircle size={26} className="text-[#d4ae32]" />
                  </div>

                  <p className="mt-5 text-base font-bold text-white md:text-lg">
                    {item}
                  </p>
                </motion.div>
              ),
            )}
          </div>

          {/* ================================================= */}
          {/* ===================== CTA ======================= */}
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
              جاهز لرحلة أكثر راحة وخصوصية؟
            </p>

            <a
              href="https://wa.me/966563591198"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#d1a91f] px-10 py-4 text-base font-black text-[#111217] shadow-[0_10px_35px_rgba(201,162,39,0.18)] transition-all duration-300 hover:scale-105 hover:bg-[#e3bd35]"
            >
              احجز الآن
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
