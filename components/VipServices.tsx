"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle, Crown, Star, Bus } from "lucide-react";
import { useSitePreferences } from "./site-preferences";

export default function PremiumServices() {
  const { locale } = useSitePreferences();
  const isArabic = locale === "ar";

  const hotels = [
    {
      name: isArabic ? "فندق فوكو" : "Voco Hotel",
      description: isArabic
        ? "خدمة VIP فاخرة مع فندق مميز بالقرب من المسجد الحرام، بالإضافة إلى خدمة نقل مجانية على مدار 24 ساعة لتوفير الراحة التامة."
        : "Luxury VIP service with a distinguished hotel near the Grand Mosque, plus free 24-hour transport for complete comfort.",
      images: [
        "/voco/i-love-voco.jpeg",
        "/voco/voco-gate.jpeg",
        "/voco/room2.jpeg",
        "/voco/room3.jpeg",
        "/voco/room4.jpeg",
        "/voco/reception-voco.jpeg",
      ],
      video: "/voco/voco2.mp4",
      features: isArabic
        ? [
            "فندق خمس نجوم",
            "غرف فاخرة",
            "مطاعم وبوفيه ومقاهي",
            "مواقف سيارات متاحة",
          ]
        : [
            "5-Star Hotel",
            "Luxury Rooms",
            "Restaurants, Buffet & Cafes",
            "Parking Available",
          ],
    },
    {
      name: isArabic ? "فندق ميلينيوم" : "Millennium Hotel",
      description: isArabic
        ? "تجربة إقامة مميزة تجمع بين الفخامة والراحة مع خدمات عالية الجودة لضيوف الرحمن."
        : "A distinguished stay combining luxury and comfort with high-quality services for pilgrims.",
      images: [
        "/melemum/melemum-gate.jpeg",
        "/melemum/melemum-gate2.jpeg",
        "/melemum/melemum-room.jpeg",
        "/melemum/melemum-room2.jpeg",
        "/melemum/melemum-room3.jpeg",
        "/melemum/melemum-room4.jpeg",
      ],
      video: "/melemum/video.mp4",
      features: isArabic
        ? ["فندق خمس نجوم", "خدمة متميزة", "غرف حديثة", "مرافق متكاملة"]
        : [
            "5-Star Hotel",
            "Premium Service",
            "Modern Rooms",
            "Full Facilities",
          ],
    },
    {
      name: isArabic ? "فندق هوليداي إن" : "Holiday Inn Hotel",
      description: isArabic
        ? "فندق نظيف ومرتب بتصنيف خمس نجوم في حي العزيزية الشمالية، يتميز بوجود مسبح وبوفيه مفتوح، مع خدمات راقية تناسب ضيوف الرحمن الباحثين عن الراحة والهدوء."
        : "A clean, well-organized 5-star hotel in North Al-Aziziyah, featuring a pool and open buffet, with elegant services for pilgrims seeking comfort and tranquility.",
      images: [
        "/holiday-in/photo1.jpeg",
        "/holiday-in/photo2.jpeg",
        "/holiday-in/photo3.jpeg",
        "/holiday-in/photo4.jpeg",
        "/holiday-in/photo5.jpeg",
        "/holiday-in/photo6.jpeg",
      ],
      video: "/holiday-in/video1.mp4",
      features: isArabic
        ? ["فندق خمس نجوم", "حي العزيزية الشمالية", "مسبح", "بوفيه مفتوح"]
        : ["5-Star Hotel", "North Al-Aziziyah", "Swimming Pool", "Open Buffet"],
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

  const vipBusFeatures = isArabic
    ? ["مقاعد واسعة", "راحة استثنائية", "تكييف مركزي", "خدمة مميزة"]
    : [
        "Spacious Seats",
        "Exceptional Comfort",
        "Central A/C",
        "Premium Service",
      ];

  return (
    <section
      id="vip-services"
      dir={isArabic ? "rtl" : "ltr"}
      className="relative isolate overflow-hidden bg-background py-20 lg:py-28"
    >
      {/* ================= BACKGROUND ================= */}
      <div className="absolute inset-0 -z-10 bg-[url('/haram.png')] bg-cover bg-center opacity-[0.04] dark:opacity-[0.06]" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-background via-background/95 to-accent/10" />
      <div className="islamic-pattern absolute inset-0 -z-10 opacity-30" />
      <div className="absolute -top-32 end-[-6rem] -z-10 size-[28rem] rounded-full bg-accent/15 blur-3xl" />
      <div className="absolute bottom-[-12rem] start-[-8rem] -z-10 size-[30rem] rounded-full bg-primary/10 blur-3xl" />

      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* ================================================= */}
        {/* ================= HOTELS HEADER ================= */}
        {/* ================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-card/70 px-5 py-2 text-sm font-bold text-primary shadow-sm backdrop-blur md:text-base">
            <Crown size={16} />
            {isArabic ? "اقامة فاخرة" : "Luxury Stay"}
          </span>

          <h2 className="mt-6 text-4xl font-black text-foreground md:text-5xl lg:text-6xl">
            {isArabic ? "فنادق خمس نجوم" : "5-Star Hotels"}
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-lg leading-9 text-muted-foreground md:text-xl">
            {isArabic
              ? "نوفر لضيوفنا إقامة مميزة في فنادق مختارة بعناية لضمان الراحة والخصوصية أثناء رحلة العمرة."
              : "We provide our guests with distinguished stays in carefully selected hotels to ensure comfort and privacy during the Umrah journey."}
          </p>
        </motion.div>

        {/* ================================================= */}
        {/* ===================== HOTELS ==================== */}
        {/* ================================================= */}
        <div className="space-y-10 md:space-y-14">
          {hotels.map((hotel, index) => (
            <motion.div
              key={hotel.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true, amount: 0.15 }}
              className={`group relative overflow-hidden rounded-[2rem] border bg-card/75 shadow-xl backdrop-blur-xl transition-all duration-300 ${
                index === 0
                  ? "border-primary/40 shadow-primary/10"
                  : "border-border hover:border-primary/30"
              }`}
            >
              {/* Golden top line */}
              <div className="absolute end-0 start-0 top-0 h-[2px] bg-gradient-to-l from-transparent via-primary to-transparent opacity-50" />

              <div
                className={`grid lg:grid-cols-2 ${
                  index % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
                }`}
              >
                {/* ================= IMAGES ================= */}
                <div className="grid grid-cols-2 gap-2 bg-muted/30 p-3">
                  {hotel.images.map((img, i) => (
                    <motion.div
                      key={i}
                      whileHover={{ scale: 1.02 }}
                      className="group/image relative h-[170px] overflow-hidden rounded-xl md:h-[220px]"
                    >
                      <Image
                        src={img}
                        alt={`${hotel.name} - ${i + 1}`}
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
                    <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-xs font-bold text-primary md:text-sm">
                      <Star size={15} className="fill-primary" />
                      {isArabic ? "فندق خمس نجوم" : "5-Star Hotel"}
                    </span>
                  </div>

                  <h3 className="font-serif text-3xl font-black text-foreground md:text-4xl">
                    {hotel.name}
                  </h3>

                  <div className="mt-4 h-[2px] w-16 bg-primary" />

                  <p className="mt-6 text-base leading-8 text-muted-foreground md:text-lg">
                    {hotel.description}
                  </p>

                  {/* Features */}
                  <div className="mt-8 grid gap-4 sm:grid-cols-2">
                    {hotel.features.map((feature, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-3 text-base text-foreground/90"
                      >
                        <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-primary/20 bg-primary/10">
                          <CheckCircle size={15} className="text-primary" />
                        </div>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Video */}
                  <div className="mt-9 overflow-hidden rounded-2xl border border-border bg-muted/30 shadow-lg">
                    <video
                      controls
                      preload="metadata"
                      className="h-[230px] w-full object-cover md:h-[260px]"
                    >
                      <source src={hotel.video} type="video/mp4" />
                      {isArabic
                        ? "المتصفح لا يدعم تشغيل الفيديو"
                        : "Your browser does not support video playback"}
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
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto mb-16 max-w-3xl text-center"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-5 py-2 text-sm font-bold text-accent md:text-base">
              <Bus size={17} />
              {isArabic ? "نقل فاخر" : "Premium Transport"}
            </span>

            <h2 className="mt-6 text-4xl font-black text-foreground md:text-5xl lg:text-6xl">
              {isArabic ? "باصات VIP" : "VIP Buses"}
            </h2>

            <p className="mx-auto mt-5 max-w-3xl text-lg leading-9 text-muted-foreground md:text-xl">
              {isArabic
                ? "باصات مجهزة بأعلى مستويات الراحة لتوفير تجربة سفر مميزة للمعتمرين والزوار."
                : "Buses equipped with the highest levels of comfort to provide a distinguished travel experience for pilgrims and visitors."}
            </p>
          </motion.div>

          {/* ================================================= */}
          {/* ================= VIP BUS IMAGES ================= */}
          {/* ================================================= */}
          <div className="mb-14 grid gap-5 md:grid-cols-3">
            {vipBusImages.map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -6 }}
                className="group relative h-[250px] overflow-hidden rounded-2xl border border-border bg-card shadow-lg md:h-[280px]"
              >
                <Image
                  src={img}
                  alt={`VIP Bus ${i + 1}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-70" />
                <div className="absolute bottom-4 end-4 flex h-9 w-9 items-center justify-center rounded-full border border-primary/50 bg-background/80 text-sm font-bold text-primary backdrop-blur">
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
              <span className="text-sm font-bold text-primary">
                {isArabic ? "شاهد التجربة" : "Watch the Experience"}
              </span>
              <h3 className="mt-2 text-2xl font-black text-foreground md:text-3xl">
                {isArabic ? "فيديوهات الباصات" : "Bus Videos"}
              </h3>
            </div>

            <div className="grid gap-7 md:grid-cols-2">
              {vipBusVideos.map((video, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 }}
                  className="overflow-hidden rounded-2xl border border-border bg-card p-2 shadow-xl"
                >
                  <video
                    controls
                    preload="metadata"
                    className="h-[300px] w-full rounded-xl object-cover md:h-[350px]"
                  >
                    <source src={video} type="video/mp4" />
                    {isArabic
                      ? "المتصفح لا يدعم تشغيل الفيديو"
                      : "Your browser does not support video playback"}
                  </video>
                </motion.div>
              ))}
            </div>
          </div>

          {/* ================================================= */}
          {/* ================= VIP FEATURES ================== */}
          {/* ================================================= */}
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {vipBusFeatures.map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -6 }}
                className="rounded-2xl border border-border bg-card/75 p-7 text-center shadow-sm backdrop-blur transition-all duration-300 hover:border-primary/40 hover:shadow-lg"
              >
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-primary/20 bg-primary/10">
                  <CheckCircle size={26} className="text-primary" />
                </div>
                <p className="mt-5 text-base font-bold text-foreground md:text-lg">
                  {item}
                </p>
              </motion.div>
            ))}
          </div>

          {/* ================================================= */}
          {/* ===================== CTA ======================= */}
          {/* ================================================= */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <p className="mb-5 text-base text-muted-foreground md:text-lg">
              {isArabic
                ? "جاهز لرحلة أكثر راحة وخصوصية؟"
                : "Ready for a more comfortable and private journey?"}
            </p>

            <a
              href="https://wa.me/966563591198"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-14 items-center justify-center gap-2 rounded-full bg-primary px-10 text-base font-black text-primary-foreground shadow-lg shadow-primary/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              {isArabic ? "احجز الآن" : "Book Now"}
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
