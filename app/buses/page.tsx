"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle, MapPin } from "lucide-react";

export default function BusesPage() {
  const buses = [
    {
      title: "الباصات الاقتصادية",
      image: ["/bus.png", "/bus2.jpg", "/bus3.jpeg", "/bus4.jpeg"],
      description:
        "باصات مريحة ومجهزة لنقل المعتمرين والزوار من الرياض إلى مكة المكرمة.",
      schedule: "كل يوم",
      features: [
        "مقاعد مريحة",
        "تكييف مركزي",
        "رحلات منتظمة",
        "سائقون محترفون",
      ],
    },

    {
      title: "باصات VIP",
      image: ["/bus1vip.jpg", "/bus2vip.jpg", "/bus3vip.jpg", "/bus4vip.jpg"],
      description: "رحلات VIP لمن يبحث عن تجربة سفر أكثر راحة وخصوصية.",
      schedule: "الإثنين والخميس",
      features: [
        "مقاعد واسعة وفاخرة",
        "راحة أعلى",
        "خدمة مميزة",
        "تجربة سفر استثنائية",
      ],
    },
  ];
  const videos = [
    {
      title: "رحلات الباصات الاقتصادية",
      video: "/video2.mp4",
    },
    {
      title: "تجهيزات باصات VIP",
      video: "/video1.mp4",
    },
    {
      title: "أجواء الرحلات",
      video: "/video3.mp4",
    },
  ];

  return (
    <main className="bg-[#FAF7F3] py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Hero */}

        <div className="text-center mb-20">
          <h1 className="text-5xl font-bold text-[#2F2A25] mb-6">
            باصات قافلة الشيماء{" "}
          </h1>

          <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-8">
            نوفر باصات اقتصادية و VIP لنقل المعتمرين من الرياض إلى مكة المكرمة
            مع توفير الراحة والأمان.
          </p>
        </div>

        {/* Location */}

        <div
          className="
bg-white
rounded-3xl
p-8
shadow-lg
mb-16
flex
items-center
justify-center
gap-4
"
        >
          <MapPin className="text-[#8B6B4A]" size={30} />

          <div>
            <h3 className="font-bold text-xl text-[#2F2A25]">مكان الانطلاق</h3>

            <p className="text-gray-600">حي البطحاء - الرياض</p>
          </div>
        </div>

        {/* Bus Cards */}

        <div className="space-y-16">
          {buses.map((bus, index) => (
            <motion.section
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="
bg-white
rounded-[35px]
overflow-hidden
shadow-xl
grid
lg:grid-cols-2
"
            >
              <div className="grid grid-cols-2 gap-2">
                {bus.image.map((img, i) => (
                  <div key={i} className="relative h-[220px]">
                    <Image
                      src={img}
                      alt={bus.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>

              <div className="p-10 text-right flex flex-col justify-center">
                <h2 className="text-4xl font-bold text-[#2F2A25] mb-5">
                  {bus.title}
                </h2>

                <p className="text-gray-600 leading-8 mb-6">
                  {bus.description}
                </p>

                <div className="mb-6">
                  <span
                    className="
inline-block
bg-[#EFE7DE]
text-[#8B6B4A]
px-5
py-2
rounded-full
font-semibold
"
                  >
                    {bus.schedule}
                  </span>
                </div>

                <div className="space-y-3">
                  {bus.features.map((item, i) => (
                    <div
                      key={i}
                      className="flex justify-end gap-3 items-center"
                    >
                      <span>{item}</span>

                      <CheckCircle className="text-[#8B6B4A]" size={20} />
                    </div>
                  ))}
                </div>

                <a
                  href="https://wa.me/966563591198"
                  target="_blank"
                  className="
mt-8
bg-[#8B6B4A]
text-white
rounded-full
px-8
py-4
w-fit
self-end
font-bold
"
                >
                  احجز الآن
                </a>
              </div>
            </motion.section>
          ))}
        </div>

        {/* Videos Section */}

        <section className="mt-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2
              className="
      text-4xl
      font-bold
      text-[#2F2A25]
      mb-4
    "
            >
              شاهد رحلاتنا عن قرب
            </h2>

            <p
              className="
      text-gray-600
      text-lg
    "
            >
              تعرف على الباصات وتجهيزاتها وأجواء الرحلات من خلال الفيديوهات.
            </p>
          </motion.div>

          <div
            className="
    grid
    md:grid-cols-2
    lg:grid-cols-3
    gap-8
  "
          >
            {videos.map((item, index) => (
              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  y: 40,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  delay: index * 0.2,
                }}
                className="
            bg-white
            rounded-[30px]
            overflow-hidden
            shadow-xl
          "
              >
                <div
                  className="
            relative
            aspect-video
            bg-black
          "
                >
                  <video
                    controls
                    className="
                w-full
                h-full
                object-cover
              "
                  >
                    <source src={item.video} type="video/mp4" />
                    المتصفح لا يدعم تشغيل الفيديو
                  </video>
                </div>

                <div className="p-6 text-right">
                  <h3
                    className="
              text-xl
              font-bold
              text-[#2F2A25]
            "
                  >
                    {item.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
