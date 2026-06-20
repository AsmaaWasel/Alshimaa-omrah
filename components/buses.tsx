"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { MapPin, Users, Wind, Wifi } from "lucide-react";

export default function Buses() {
  const buses = [
    {
      id: 1,
      name: "الفئة الاقتصادية",
      price: "ابتداءً من 0 ريال",
      image: "/bus.png",
      features: [
        { icon: Users, text: "40 مقعد مريح" },
        { icon: Wind, text: "تكييف قوي" },
        { icon: MapPin, text: "تتبع حي GPS" },
        { icon: Wifi, text: "واي فاي مجاني" },
      ],
    },
    {
      id: 2,
      name: "الفئة الفاخرة",
      price: "ابتداءً من 0 ريال",
      image: "/bus.png",
      features: [
        { icon: Users, text: "32 مقعد فاخر" },
        { icon: Wind, text: "ثلج مركزي" },
        { icon: MapPin, text: "خدمة شاملة" },
        { icon: Wifi, text: "سينما داخلية" },
      ],
    },
    {
      id: 3,
      name: "الفئة الرئاسية",
      price: "ابتداءً من 0 ريال",
      image: "/bus.png",
      features: [
        { icon: Users, text: "20 مقعد ذهبي" },
        { icon: Wind, text: "نظام تهوية ذكي" },
        { icon: MapPin, text: "سائق و مرشد" },
        { icon: Wifi, text: "وجبات خفيفة" },
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <section id="buses" className="py-20 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            خدمات <span className="text-primary">النقل</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            نختار أفضل الباصات الحديثة والآمنة لضمان رحلة مريحة وآمنة
          </p>
        </motion.div>

        {/* Buses Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          {buses.map((bus) => (
            <motion.div
              key={bus.id}
              variants={itemVariants}
              className="bg-background rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden bg-gradient-to-br from-accent/20 to-primary/20">
                <Image
                  src={bus.image}
                  alt={bus.name}
                  fill
                  className="object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  {bus.name}
                </h3>
                <p className="text-primary font-bold text-lg mb-6">
                  {bus.price}
                </p>

                {/* Features */}
                <div className="space-y-3 mb-6">
                  {bus.features.map((feature, idx) => {
                    const Icon = feature.icon;
                    return (
                      <div key={idx} className="flex items-center gap-3">
                        <Icon className="w-5 h-5 text-accent flex-shrink-0" />
                        <span className="text-foreground text-sm">
                          {feature.text}
                        </span>
                      </div>
                    );
                  })}
                </div>

                {/* CTA Button */}
                <a
                  href={`https://wa.me/966563591198?text=أريد%20حجز%20باص%20من%20فئة%20${bus.name}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-primary text-primary-foreground py-3 rounded-lg hover:bg-primary/90 transition-all font-bold text-center block"
                >
                  اختر هذا الخيار
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
