"use client";

import { JSX, useState } from "react";
import { motion } from "framer-motion";
import {
  User,
  Phone,
  Users,
  CalendarDays,
  BedDouble,
  Bus,
  Send,
  ShieldCheck,
} from "lucide-react";

type FormData = {
  name: string;
  phone: string;
  pilgrims: string;
  seats: string;
  date: string;
  notes: string;
};

const WHATSAPP_NUMBER = "966563591198";

export default function BookingSection(): JSX.Element {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    phone: "",
    pilgrims: "",
    seats: "",
    date: "",
    notes: "",
  });

  const handleChange = (field: keyof FormData, value: string): void => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    const message = `
طلب حجز عمرة جديد 🕋

الاسم: ${formData.name}

الجوال: ${formData.phone}

عدد المعتمرين: ${formData.pilgrims}

عدد المقاعد في الباص: ${formData.seats}

التاريخ المفضل: ${formData.date}

ملاحظات:
${formData.notes || "لا توجد ملاحظات"}
`;

    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      message,
    )}`;

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <section
      id="booking"
      dir="rtl"
      className="relative overflow-hidden bg-[#F8F6F1] py-20 md:py-28"
    >
      {/* ================================================= */}
      {/* ================= BACKGROUND ==================== */}
      {/* ================================================= */}

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute right-[-120px] top-[-100px] h-[400px] w-[400px] rounded-full bg-[#D4AF37]/[0.06] blur-[120px]" />

        <div className="absolute bottom-[-150px] left-[-120px] h-[400px] w-[400px] rounded-full bg-[#096B50]/[0.06] blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
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
          transition={{
            duration: 0.6,
          }}
          className="mx-auto mb-14 max-w-3xl text-center md:mb-16"
        >
          <span className="inline-flex items-center gap-2 border border-[#D4AF37]/40 bg-[#D4AF37]/10 px-5 py-2 text-xs font-bold text-[#9C7A16] md:text-sm">
            <CalendarDays size={16} />
            احجز الآن
          </span>

          <h2 className="mt-6 text-3xl font-black text-[#202126] sm:text-4xl md:text-5xl">
            احجز رحلة العمر
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-8 text-[#6F6F72] md:text-lg">
            املأ البيانات التالية وسيتواصل معك فريق قافلة الشيماء لتأكيد الحجز
            والإجابة على جميع استفساراتك.
          </p>
        </motion.div>

        {/* ================================================= */}
        {/* ================= MAIN CONTENT ================== */}
        {/* ================================================= */}

        <motion.div
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
            amount: 0.1,
          }}
          transition={{
            duration: 0.7,
          }}
          className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-10"
        >
          {/* ================================================= */}
          {/* ================= INFO CARD ===================== */}
          {/* ================================================= */}

          <div className="relative overflow-hidden bg-[#202126] p-7 text-white shadow-[0_20px_60px_rgba(32,33,38,0.14)] md:p-10">
            {/* Golden line */}

            <div className="absolute right-0 left-0 top-0 h-[2px] bg-gradient-to-l from-transparent via-[#D4AF37] to-transparent" />

            {/* Glow */}

            <div className="pointer-events-none absolute right-[-100px] top-[-100px] h-[280px] w-[280px] rounded-full bg-[#D4AF37]/10 blur-[90px]" />

            <div className="relative">
              <span className="text-sm font-bold text-[#D4AF37]">
                قافلة الشيماء
              </span>

              <h3 className="mt-4 text-2xl font-black md:text-3xl">
                لماذا تحجز معنا؟
              </h3>

              <div className="mt-5 h-[2px] w-14 bg-[#D4AF37]" />

              {/* Features */}

              <div className="mt-9 space-y-7">
                {/* Bus */}

                <div className="flex gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center border border-[#D4AF37]/30 bg-[#D4AF37]/10 text-[#D4AF37]">
                    <Bus size={21} />
                  </div>

                  <div>
                    <h4 className="font-black text-white">باصات حديثة</h4>

                    <p className="mt-1 text-sm leading-7 text-[#B8B8BD]">
                      موديلات حديثة مجهزة بأعلى وسائل الراحة والسلامة للمعتمرين.
                    </p>
                  </div>
                </div>

                {/* Hotel */}

                <div className="flex gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center border border-[#D4AF37]/30 bg-[#D4AF37]/10 text-[#D4AF37]">
                    <BedDouble size={21} />
                  </div>

                  <div>
                    <h4 className="font-black text-white">فنادق مميزة</h4>

                    <p className="mt-1 text-sm leading-7 text-[#B8B8BD]">
                      خيارات إقامة متنوعة تشمل الفنادق الاقتصادية وVIP.
                    </p>
                  </div>
                </div>

                {/* Calendar */}

                <div className="flex gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center border border-[#D4AF37]/30 bg-[#D4AF37]/10 text-[#D4AF37]">
                    <CalendarDays size={21} />
                  </div>

                  <div>
                    <h4 className="font-black text-white">رحلات منتظمة</h4>

                    <p className="mt-1 text-sm leading-7 text-[#B8B8BD]">
                      رحلات اقتصادية بشكل يومي وVIP يومي الاثنين والخميس.
                    </p>
                  </div>
                </div>
              </div>

              {/* Note */}

              <div className="mt-10 border border-[#096B50]/40 bg-[#096B50]/10 p-5">
                <div className="flex gap-3">
                  <ShieldCheck
                    size={21}
                    className="mt-1 shrink-0 text-[#31B894]"
                  />

                  <p className="text-sm leading-7 text-[#C9C9CD]">
                    بعد إرسال طلب الحجز سيتم التواصل معك مباشرة لتأكيد الموعد
                    والمقاعد وإرسال جميع تفاصيل الرحلة.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* ================================================= */}
          {/* ===================== FORM ====================== */}
          {/* ================================================= */}

          <form
            onSubmit={handleSubmit}
            className="border border-[#E4DFD5] bg-white p-6 shadow-[0_15px_50px_rgba(32,33,38,0.07)] md:p-9 lg:p-10"
          >
            <div className="mb-8">
              <h3 className="text-2xl font-black text-[#202126]">
                بيانات الحجز
              </h3>

              <p className="mt-2 text-sm text-[#77787D]">
                أدخل بياناتك وسنتواصل معك عبر واتساب.
              </p>

              <div className="mt-4 h-[2px] w-12 bg-[#D4AF37]" />
            </div>

            {/* ================= ROW 1 ================= */}

            <div className="grid gap-5 md:grid-cols-2">
              {/* الاسم */}

              <div>
                <label
                  htmlFor="booking-name"
                  className="mb-2 block text-sm font-bold text-[#202126]"
                >
                  الاسم بالكامل
                </label>

                <div className="relative">
                  <User
                    size={19}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-[#8A8A8E]"
                  />

                  <input
                    id="booking-name"
                    required
                    type="text"
                    placeholder="اكتب اسمك بالكامل"
                    value={formData.name}
                    onChange={(e) => handleChange("name", e.target.value)}
                    className="
                      w-full
                      border
                      border-[#E2DED6]
                      bg-[#FCFBF8]
                      py-3.5
                      pr-12
                      pl-4
                      text-sm
                      text-[#202126]
                      outline-none
                      transition
                      placeholder:text-[#A0A0A4]
                      focus:border-[#096B50]
                      focus:ring-2
                      focus:ring-[#096B50]/10
                    "
                  />
                </div>
              </div>

              {/* الجوال */}

              <div>
                <label
                  htmlFor="booking-phone"
                  className="mb-2 block text-sm font-bold text-[#202126]"
                >
                  رقم الجوال
                </label>

                <div className="relative">
                  <Phone
                    size={19}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-[#8A8A8E]"
                  />

                  <input
                    id="booking-phone"
                    required
                    dir="ltr"
                    type="tel"
                    placeholder="+966 5xxxxxxxx"
                    value={formData.phone}
                    onChange={(e) => handleChange("phone", e.target.value)}
                    className="
                      w-full
                      border
                      border-[#E2DED6]
                      bg-[#FCFBF8]
                      py-3.5
                      pr-12
                      pl-4
                      text-sm
                      text-[#202126]
                      outline-none
                      transition
                      placeholder:text-[#A0A0A4]
                      focus:border-[#096B50]
                      focus:ring-2
                      focus:ring-[#096B50]/10
                    "
                  />
                </div>
              </div>
            </div>

            {/* ================= ROW 2 ================= */}

            <div className="mt-5 grid gap-5 md:grid-cols-2">
              {/* عدد المعتمرين */}

              <div>
                <label
                  htmlFor="booking-pilgrims"
                  className="mb-2 block text-sm font-bold text-[#202126]"
                >
                  عدد المعتمرين
                </label>

                <div className="relative">
                  <Users
                    size={19}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-[#8A8A8E]"
                  />

                  <input
                    id="booking-pilgrims"
                    required
                    min="1"
                    type="number"
                    placeholder="عدد الأشخاص"
                    value={formData.pilgrims}
                    onChange={(e) => handleChange("pilgrims", e.target.value)}
                    className="
                      w-full
                      border
                      border-[#E2DED6]
                      bg-[#FCFBF8]
                      py-3.5
                      pr-12
                      pl-4
                      text-sm
                      text-[#202126]
                      outline-none
                      transition
                      focus:border-[#096B50]
                      focus:ring-2
                      focus:ring-[#096B50]/10
                    "
                  />
                </div>
              </div>

              {/* المقاعد */}

              <div>
                <label
                  htmlFor="booking-seats"
                  className="mb-2 block text-sm font-bold text-[#202126]"
                >
                  عدد المقاعد في الباص
                </label>

                <div className="relative">
                  <Bus
                    size={19}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-[#8A8A8E]"
                  />

                  <input
                    id="booking-seats"
                    required
                    min="1"
                    type="number"
                    placeholder="عدد المقاعد"
                    value={formData.seats}
                    onChange={(e) => handleChange("seats", e.target.value)}
                    className="
                      w-full
                      border
                      border-[#E2DED6]
                      bg-[#FCFBF8]
                      py-3.5
                      pr-12
                      pl-4
                      text-sm
                      text-[#202126]
                      outline-none
                      transition
                      focus:border-[#096B50]
                      focus:ring-2
                      focus:ring-[#096B50]/10
                    "
                  />
                </div>
              </div>
            </div>

            {/* ================= DATE ================= */}

            <div className="mt-5">
              <label
                htmlFor="booking-date"
                className="mb-2 block text-sm font-bold text-[#202126]"
              >
                التاريخ المفضل للرحلة
              </label>

              <div className="relative">
                <CalendarDays
                  size={19}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-[#8A8A8E]"
                />

                <input
                  id="booking-date"
                  required
                  type="date"
                  value={formData.date}
                  onChange={(e) => handleChange("date", e.target.value)}
                  className="
                    w-full
                    border
                    border-[#E2DED6]
                    bg-[#FCFBF8]
                    py-3.5
                    pr-12
                    pl-4
                    text-sm
                    text-[#202126]
                    outline-none
                    transition
                    focus:border-[#096B50]
                    focus:ring-2
                    focus:ring-[#096B50]/10
                  "
                />
              </div>
            </div>

            {/* ================= NOTES ================= */}

            <div className="mt-5">
              <label
                htmlFor="booking-notes"
                className="mb-2 block text-sm font-bold text-[#202126]"
              >
                ملاحظات إضافية
              </label>

              <textarea
                id="booking-notes"
                rows={5}
                placeholder="اكتب أي تفاصيل أو طلبات إضافية..."
                value={formData.notes}
                onChange={(e) => handleChange("notes", e.target.value)}
                className="
                  w-full
                  resize-none
                  border
                  border-[#E2DED6]
                  bg-[#FCFBF8]
                  px-4
                  py-3.5
                  text-sm
                  text-[#202126]
                  outline-none
                  transition
                  placeholder:text-[#A0A0A4]
                  focus:border-[#096B50]
                  focus:ring-2
                  focus:ring-[#096B50]/10
                "
              />
            </div>

            {/* ================= SUBMIT ================= */}

            <button
              type="submit"
              className="
                mt-7
                flex
                w-full
                items-center
                justify-center
                gap-2
                bg-[#096B50]
                px-6
                py-4
                text-base
                font-black
                text-white
                shadow-[0_10px_30px_rgba(9,107,80,0.16)]
                transition-all
                duration-300
                hover:-translate-y-0.5
                hover:bg-[#075B44]
                active:translate-y-0
              "
            >
              إرسال طلب الحجز
              <Send size={19} />
            </button>

            <p className="mt-4 text-center text-xs text-[#8A8A8E]">
              سيتم فتح واتساب لإرسال بيانات الحجز إلى فريقنا.
            </p>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
