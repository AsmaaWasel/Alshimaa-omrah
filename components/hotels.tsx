"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Star, MapPin, Wifi, Utensils, Waves } from "lucide-react";

export default function Hotels() {
  const hotels = [
    {
      id: 1,
      name: "فندق مكة",
      rating: 4.8,
      distance: "500 متر من الكعبة",
      price: "من 0 ريال/الليلة",
      image: "/hotel.png",
      amenities: ["واي فاي مجاني", "مطعم ٥ نجوم", "نظافة عالية"],
    },
    {
      id: 2,
      name: "فندق مكة",
      rating: 4.9,
      distance: "800 متر من الكعبة",
      price: "من 0 ريال/الليلة",
      image: "/hotel.png",
      amenities: ["واي فاي سريع", "مطعم فاخر", "خدمة ٢٤/٧"],
    },
    {
      id: 3,
      name: "فندق مكة",
      rating: 5.0,
      distance: "1 كم من الكعبة",
      price: "من 0 ريال/الليلة",
      image: "/hotel.png",
      amenities: ["كونسيرج خاص", "مطعم شيف عالمي", "سبا فاخر"],
    },
    {
      id: 4,
      name: "فندق المدينة",
      rating: 4.7,
      distance: "في المدينة المنورة",
      price: "من 0 ريال/الليلة",
      image: "/hotel.png",
      amenities: ["قريب من المسجد", "مطعم عربي", "حديقة هادئة"],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="hotels" className="py-20 bg-background">
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
            الفنادق <span className="text-primary">المختارة</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            نختار لك أفضل الفنادق الفاخرة القريبة من الحرم والمسجد النبوي
          </p>
        </motion.div>

        {/* Hotels Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {hotels.map((hotel) => (
            <motion.div
              key={hotel.id}
              variants={itemVariants}
              className="group bg-secondary rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden bg-gradient-to-br from-accent/20 to-primary/20">
                <Image
                  src={hotel.image}
                  alt={hotel.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-3 right-3 bg-accent text-foreground px-3 py-1 rounded-full text-sm font-bold flex items-center gap-1">
                  <Star className="w-4 h-4 fill-current" />
                  {hotel.rating}
                </div>
              </div>

              {/* Content */}
              <div className="p-4">
                <h3 className="text-xl font-bold text-foreground mb-1">
                  {hotel.name}
                </h3>
                <div className="flex items-center gap-2 text-muted-foreground text-sm mb-3">
                  <MapPin className="w-4 h-4" />
                  {hotel.distance}
                </div>

                <p className="text-primary font-bold mb-4">{hotel.price}</p>

                {/* Amenities */}
                <div className="space-y-2 mb-4">
                  {hotel.amenities.map((amenity, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2 text-sm text-foreground"
                    >
                      <div className="w-2 h-2 bg-accent rounded-full"></div>
                      {amenity}
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <a
                  href={`https://wa.me/966563591198?text=أريد%20حجز%20فندق%20${hotel.name}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-primary text-primary-foreground py-2 rounded-lg hover:bg-primary/90 transition-all font-bold text-center block text-sm"
                >
                  احجز الآن
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* More Hotels Placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-lg text-muted-foreground mb-4">
            لدينا عقود مع أكثر من 50 فندق فاخر
          </p>
          <a
            href="https://wa.me/966563591198?text=أريد%20معرفة%20المزيد%20عن%20الفنادق"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block border-2 border-primary text-primary px-8 py-3 rounded-full hover:bg-primary hover:text-primary-foreground transition-all font-bold"
          >
            عرض جميع الفنادق
          </a>
        </motion.div>
      </div>
    </section>
  );
}
