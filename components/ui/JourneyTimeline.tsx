type JourneyItem = {
  title: string;
  description: string;
  badge: string;
};

const journeyItems: JourneyItem[] = [
  {
    title: "الرياض",
    description: "نقطة التجمع والانطلاق",
    badge: "انطلاق صباحي",
  },
  {
    title: "مكة المكرمة",
    description: "إقامة فندقية وأداء العمرة",
    badge: "3★ اقتصادية / 5★ VIP",
  },
  {
    title: "المدينة المنورة",
    description: "زيارة المسجد النبوي – ضمن VIP",
    badge: "اختياري",
  },
];

export default function JourneyTimeline() {
  return (
    <div
      className="
        relative
        w-full
        max-w-[520px]
        border
        border-[#69571c]
        bg-[#1b1c22]
        px-8
        py-10
        shadow-2xl
        lg:px-10
      "
      dir="rtl"
    >
      {/* Header */}
      <div className="mb-10 text-center">
        <span className="text-xs text-[#9d988d]">تفاصيل المسار</span>

        <h3 className="mt-1 text-xl font-bold text-[#e0b936]">مسار الرحلة</h3>
      </div>

      {/* Vertical Line */}
      <div
        className="
          absolute
          right-[38px]
          top-[105px]
          bottom-[60px]
          w-px
          bg-gradient-to-b
          from-[#d4af37]
          via-[#d4af37]/60
          to-[#d4af37]/20
        "
      />

      {/* Journey Items */}
      <div className="space-y-10">
        {journeyItems.map((item) => (
          <div key={item.title} className="relative flex items-start gap-6">
            {/* Circle */}
            <div
              className="
                relative
                z-10
                mt-1
                flex
                h-4
                w-4
                shrink-0
                items-center
                justify-center
                rounded-full
                border-2
                border-[#d4af37]
                bg-[#1b1c22]
              "
            >
              <div className="h-1.5 w-1.5 rounded-full bg-[#d4af37]" />
            </div>

            {/* Content */}
            <div className="flex-1 text-right">
              <h4 className="mb-2 text-xl font-bold text-white">
                {item.title}
              </h4>

              <p className="mb-3 text-sm leading-7 text-[#9d988d]">
                {item.description}
              </p>

              <span
                className="
                  inline-flex
                  rounded-full
                  border
                  border-[#276b5c]
                  bg-[#0e4138]
                  px-3
                  py-1.5
                  text-xs
                  text-[#6bd3b5]
                "
              >
                {item.badge}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Note */}
      <div className="mt-10 border-t border-[#34353b] pt-5 text-center">
        <p className="text-xs leading-6 text-[#77746c]">
          رحلة متكاملة من الرياض إلى مكة والمدينة
        </p>
      </div>
    </div>
  );
}
