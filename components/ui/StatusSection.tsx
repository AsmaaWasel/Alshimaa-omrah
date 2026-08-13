"use client";

import { Users, CalendarDays, Star, MessageCircle } from "lucide-react";

const stats = [
  {
    value: "+12,000",
    title: "معتمر وزائر رافقناهم",
    icon: Users,
  },
  {
    value: "يوميًا",
    title: "انطلاق الباقة الاقتصادية",
    icon: CalendarDays,
  },
  {
    value: "٣★ / ٥★",
    title: "درجات إقامة تناسب ميزانيتك",
    icon: Star,
  },
  {
    value: "24/7",
    title: "دعم واستفسارات واتساب",
    icon: MessageCircle,
  },
];

export default function StatsSection() {
  return (
    <section dir="rtl" className="w-full bg-[#faf8f5] py-10 md:py-14">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-4 px-4 md:grid-cols-4 md:gap-6 lg:px-8">
        {stats.map((stat, index) => {
          const Icon = stat.icon;

          return (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl border border-[#e9dfd5] bg-white p-5 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg md:p-7"
            >
              {/* Decorative circle */}
              <div className="absolute -right-8 -top-8 h-20 w-20 rounded-full bg-[#b8925a]/5 transition-transform duration-500 group-hover:scale-150" />

              {/* Icon */}
              <div className="relative mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#b8925a]/10 text-[#a77b42]">
                <Icon size={24} strokeWidth={1.8} />
              </div>

              {/* Value */}
              <div className="relative mb-2 text-2xl font-bold text-[#8b6738] md:text-3xl">
                {stat.value}
              </div>

              {/* Title */}
              <p className="relative text-sm font-medium leading-6 text-gray-600 md:text-base">
                {stat.title}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
