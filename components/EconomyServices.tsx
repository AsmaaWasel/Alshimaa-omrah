"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle, Star, Bus, Wallet, ShieldCheck } from "lucide-react";
import { JSX } from "react";
import { useSitePreferences } from "./site-preferences";

interface EconomyHotel {
  name: string;
  description: string;
  images: string[];
  video?: string;
  features: string[];
}

export default function EconomyServices(): JSX.Element {
  const { locale } = useSitePreferences();
  const isArabic = locale === "ar";

  const economyHotels: EconomyHotel[] = [
    {
      name: "فندق بارك رويال",
      description: isArabic
        ? "إقامة مريحة ومناسبة للمعتمرين مع خدمات متكاملة وأسعار مناسبة، لتوفير تجربة إقامة عملية ومريحة أثناء رحلة العمرة."
        : "Comfortable accommodation suited for pilgrims with full services and fair prices, providing a practical and relaxing stay during Umrah.",
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
      features: isArabic
        ? ["فندق ثلاث نجوم", "غرف مريحة", "خدمة مميزة", "موقع مناسب"]
        : [
            "3-Star Hotel",
            "Comfortable Rooms",
            "Excellent Service",
            "Convenient Location",
          ],
    },
    {
      name: isArabic ? "فندق قصر رزق" : "Qasr Rezk Hotel",
      description: isArabic
        ? "خيار اقتصادي مناسب يوفر إقامة مريحة وخدمات جيدة للمعتمرين، مع التركيز على توفير الراحة والقيمة المناسبة للميزانية."
        : "An affordable option offering comfortable accommodation and good services for pilgrims, focusing on comfort and value for budget.",
      images: [
        "/rezk/gate.jpeg",
        "/rezk/gate2.jpeg",
        "/rezk/room1.jpeg",
        "/rezk/room2.jpeg",
        "/rezk/room3.jpeg",
        "/rezk/room4.jpeg",
      ],
      features: isArabic
        ? ["فندق ثلاث نجوم", "أسعار مناسبة", "خدمة جيدة", "غرف مجهزة"]
        : [
            "3-Star Hotel",
            "Affordable Prices",
            "Good Service",
            "Equipped Rooms",
          ],
    },
  ];

  const economyBusImages: string[] = [
    "/buses/1eb65052-d397-4f15-afa8-fefb428b7037.jpg",
    "/buses/bus2.jpeg",
    "/buses/bus3.jpeg",
    "/buses/bus4.jpeg",
  ];

  const economyBusFeatures: string[] = isArabic
    ? ["رحلات يومية", "مقاعد مريحة", "تكييف مركزي", "أسعار مناسبة"]
    : ["Daily Trips", "Comfortable Seats", "Central A/C", "Affordable Prices"];

  return (
    <section
      id="economy-services"
      dir={isArabic ? "rtl" : "ltr"}
      className="relative isolate overflow-hidden bg-background py-20 lg:py-28"
    >
      {/* ================================================= */}
      {/* ================= BACKGROUND ==================== */}
      {/* ================================================= */}
      <div className="absolute inset-0 -z-10 bg-[url('/haram.png')] bg-cover bg-center opacity-[0.04] dark:opacity-[0.06]" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-background via-background/95 to-accent/10" />
      <div className="islamic-pattern absolute inset-0 -z-10 opacity-30" />
      <div className="absolute -top-32 end-[-6rem] -z-10 size-[28rem] rounded-full bg-accent/15 blur-3xl" />
      <div className="absolute bottom-[-12rem] start-[-8rem] -z-10 size-[30rem] rounded-full bg-primary/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        {/* ================================================= */}
        {/* ===================== HEADER ==================== */}
        {/* ================================================= */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-5 py-2 text-sm font-bold text-accent shadow-sm backdrop-blur md:text-base">
            <Wallet size={17} />
            {isArabic ? "الباقة الاقتصادية" : "Economy Package"}
          </span>

          <h2 className="mt-6 text-4xl font-black text-foreground md:text-5xl lg:text-6xl">
            {isArabic
              ? "إقامة مريحة بأسعار مناسبة"
              : "Comfortable stays at fair prices"}
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-lg leading-9 text-muted-foreground md:text-xl">
            {isArabic
              ? "اختر من بين فنادقنا الاقتصادية وباصاتنا المجهزة لتستمتع برحلة عمرة مريحة تجمع بين الجودة والسعر المناسب."
              : "Choose from our economy hotels and equipped buses for a comfortable Umrah journey combining quality and fair pricing."}
          </p>
        </motion.div>

        {/* ================================================= */}
        {/* ====================== HOTELS =================== */}
        {/* ================================================= */}

        <div className="space-y-10 md:space-y-14">
          {economyHotels.map((hotel, index) => (
            <motion.div
              key={hotel.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true, amount: 0.15 }}
              className="group relative overflow-hidden rounded-[2rem] border border-border bg-card/75 shadow-xl backdrop-blur-xl transition-all duration-300 hover:border-accent/40"
            >
              {/* Top line */}
              <div className="absolute end-0 start-0 top-0 h-[2px] bg-gradient-to-l from-transparent via-accent to-transparent opacity-60" />

              <div
                className={`grid lg:grid-cols-2 ${
                  index % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
                }`}
              >
                {/* ================================================= */}
                {/* ====================== IMAGES ==================== */}
                {/* ================================================= */}

                <div className="grid grid-cols-2 gap-2 bg-muted/30 p-3">
                  {hotel.images.map((img, i) => (
                    <motion.div
                      key={img}
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
                    <span className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-2 text-xs font-bold text-accent md:text-sm">
                      <Star size={15} className="fill-accent" />
                      {isArabic ? "إقامة اقتصادية" : "Economy Stay"}
                    </span>
                  </div>

                  {/* Hotel name */}
                  <h3 className="font-serif text-3xl font-black text-foreground md:text-4xl">
                    {hotel.name}
                  </h3>

                  {/* Accent line */}
                  <div className="mt-4 h-[2px] w-16 bg-accent" />

                  {/* Description */}
                  <p className="mt-6 text-base leading-8 text-muted-foreground md:text-lg">
                    {hotel.description}
                  </p>

                  {/* Features */}
                  <div className="mt-8 grid gap-4 sm:grid-cols-2">
                    {hotel.features.map((feature) => (
                      <div
                        key={feature}
                        className="flex items-center gap-3 text-base text-foreground/90"
                      >
                        <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-accent/30 bg-accent/10">
                          <CheckCircle size={15} className="text-accent" />
                        </div>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Video */}
                  {hotel.video ? (
                    <div className="mt-9 overflow-hidden rounded-2xl border border-border bg-muted/30 p-1 shadow-lg">
                      <video
                        controls
                        preload="metadata"
                        className="h-[230px] w-full rounded-xl object-cover md:h-[260px]"
                      >
                        <source src={hotel.video} type="video/mp4" />
                        {isArabic
                          ? "المتصفح لا يدعم تشغيل الفيديو"
                          : "Your browser does not support video playback"}
                      </video>
                    </div>
                  ) : (
                    <div className="mt-9 flex h-[120px] items-center justify-center rounded-2xl border border-border bg-muted/30">
                      <div className="flex items-center gap-2 text-accent">
                        <ShieldCheck size={20} />
                        <span className="font-bold">
                          {isArabic ? "معرض صور الفندق" : "Hotel Photo Gallery"}
                        </span>
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
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto mb-16 max-w-3xl text-center"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-5 py-2 text-sm font-bold text-primary md:text-base">
              <Bus size={17} />
              {isArabic ? "النقل الاقتصادي" : "Economy Transport"}
            </span>

            <h2 className="mt-6 text-4xl font-black text-foreground md:text-5xl lg:text-6xl">
              {isArabic ? "الباصات الاقتصادية" : "Economy Buses"}
            </h2>

            <p className="mx-auto mt-5 max-w-3xl text-lg leading-9 text-muted-foreground md:text-xl">
              {isArabic
                ? "رحلات يومية مريحة ومجهزة لنقل المعتمرين والزوار من الرياض إلى مكة والمدينة."
                : "Comfortable, fully equipped daily trips transporting pilgrims and visitors from Riyadh to Makkah and Madinah."}
            </p>
          </motion.div>

          {/* ================================================= */}
          {/* ================= BUS IMAGES ==================== */}
          {/* ================================================= */}

          <div className="mb-14 grid gap-5 md:grid-cols-3">
            {economyBusImages.map((img, i) => (
              <motion.div
                key={img}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -6 }}
                className="group relative h-[250px] overflow-hidden rounded-2xl border border-border bg-card shadow-lg md:h-[280px]"
              >
                <Image
                  src={img}
                  alt={`${isArabic ? "الباص الاقتصادي" : "Economy Bus"} ${i + 1}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition duration-700 group-hover:scale-110"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-70" />

                {/* Number */}
                <div className="absolute bottom-4 end-4 flex h-9 w-9 items-center justify-center rounded-full border border-primary/50 bg-background/80 text-sm font-bold text-primary backdrop-blur">
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
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -6 }}
                className="rounded-2xl border border-border bg-card/75 p-7 text-center shadow-sm backdrop-blur transition-all duration-300 hover:border-accent/40 hover:shadow-lg"
              >
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-accent/30 bg-accent/10">
                  <CheckCircle size={26} className="text-accent" />
                </div>

                <p className="mt-5 text-base font-bold text-foreground md:text-lg">
                  {item}
                </p>
              </motion.div>
            ))}
          </div>

          {/* ================================================= */}
          {/* ======================== CTA ==================== */}
          {/* ================================================= */}

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <p className="mb-5 text-base text-muted-foreground md:text-lg">
              {isArabic
                ? "ابحث عن رحلة عمرة مريحة بسعر مناسب"
                : "Looking for a comfortable Umrah trip at a fair price?"}
            </p>

            <a
              href="https://wa.me/966563591198"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-14 items-center justify-center gap-2 rounded-full bg-primary px-10 text-base font-black text-primary-foreground shadow-lg shadow-primary/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              {isArabic ? "احجز الآن عبر واتساب" : "Book Now via WhatsApp"}
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
