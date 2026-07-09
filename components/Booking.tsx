"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  User,
  Phone,
  Users,
  CalendarDays,
  BedDouble,
  Bus,
  Send,
} from "lucide-react";

export default function BookingSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    pilgrims: "",
    seats: "",
    date: "",
    notes: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const message = `
طلب حجز عمرة جديد 🕋

الاسم: ${formData.name}

الجوال: ${formData.phone}

عدد المعتمرين: ${formData.pilgrims}

عدد المقاعد في الباص: ${formData.seats}

التاريخ المفضل: ${formData.date}

ملاحظات:
${formData.notes}
`;

    const whatsappUrl = `https://wa.me/966563591198?text=${encodeURIComponent(
      message,
    )}`;

    window.open(whatsappUrl, "_blank");
  };

  return (
    <section
      id="booking"
      className="relative py-24 bg-gradient-to-b from-[#fbf9f5] to-white overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(200,164,77,.08),transparent_60%)]" />

      <div className="relative max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-flex rounded-full bg-[#c8a44d]/10 px-5 py-2 font-semibold text-[#c8a44d]">
            احجز الآن
          </span>

          <h2 className="mt-6 text-5xl font-black text-[#2F2A25]">
            احجز رحلة العمر
          </h2>

          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto leading-8">
            املأ البيانات التالية وسيتواصل معك فريق قافلة الشيماء لتأكيد الحجز
            والإجابة على جميع استفساراتك.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid lg:grid-cols-2 gap-12"
        >
          {/* معلومات */}
          <div className="bg-[#2F2A25] rounded-[32px] p-10 text-white">
            <h3 className="text-3xl font-bold mb-8">لماذا تحجز معنا؟</h3>

            <div className="space-y-6">
              <div className="flex gap-4">
                <Bus className="text-[#c8a44d]" />
                <div>
                  <h4 className="font-bold">باصات حديثة</h4>
                  <p className="text-white/70 mt-1">
                    موديلات حديثة مجهزة بأعلى وسائل الراحة.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <BedDouble className="text-[#c8a44d]" />

                <div>
                  <h4 className="font-bold">فنادق مميزة</h4>

                  <p className="text-white/70 mt-1">
                    إقامة بفنادق 3 و5 نجوم بالقرب من الحرم.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <CalendarDays className="text-[#c8a44d]" />

                <div>
                  <h4 className="font-bold">رحلات منتظمة</h4>

                  <p className="text-white/70 mt-1">
                    رحلات اقتصادية يوميًا وVIP يومي الاثنين والخميس.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-10 rounded-2xl bg-white/10 p-6">
              <p className="leading-8 text-white/80">
                بعد إرسال الطلب سيتم التواصل معك مباشرة لتأكيد الحجز وإرسال جميع
                التفاصيل الخاصة بالرحلة.
              </p>
            </div>
          </div>

          {/* الفورم */}

          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-[32px] shadow-xl border border-[#ece7dc] p-10"
          >
            <div className="grid md:grid-cols-2 gap-6">
              {/* الاسم */}
              <div>
                <label className="font-semibold mb-2 block">الاسم</label>

                <div className="relative">
                  <User
                    className="absolute right-4 top-4 text-gray-400"
                    size={20}
                  />

                  <input
                    required
                    type="text"
                    placeholder="الاسم بالكامل"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        name: e.target.value,
                      })
                    }
                    className="w-full rounded-xl border border-gray-200 pr-12 px-4 py-4 outline-none focus:border-[#c8a44d]"
                  />
                </div>
              </div>

              {/* الجوال */}
              <div>
                <label className="font-semibold mb-2 block">الجوال</label>

                <div className="relative">
                  <Phone
                    className="absolute right-4 top-4 text-gray-400"
                    size={20}
                  />

                  <input
                    required
                    dir="ltr"
                    type="tel"
                    placeholder="+966 5xxxxxxxx"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        phone: e.target.value,
                      })
                    }
                    className="w-full rounded-xl border border-gray-200 pr-12 px-4 py-4 outline-none focus:border-[#c8a44d]"
                  />
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mt-6">
              {/* عدد المعتمرين */}
              <div>
                <label className="font-semibold mb-2 block">
                  عدد المعتمرين
                </label>

                <div className="relative">
                  <Users
                    className="absolute right-4 top-4 text-gray-400"
                    size={20}
                  />

                  <input
                    required
                    type="number"
                    placeholder="عدد الأشخاص"
                    value={formData.pilgrims}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        pilgrims: e.target.value,
                      })
                    }
                    className="w-full rounded-xl border border-gray-200 pr-12 px-4 py-4 outline-none focus:border-[#c8a44d]"
                  />
                </div>
              </div>

              {/* المقاعد */}
              <div>
                <label className="font-semibold mb-2 block">
                  عدد المقاعد في الباص
                </label>

                <div className="relative">
                  <Bus
                    className="absolute right-4 top-4 text-gray-400"
                    size={20}
                  />

                  <input
                    required
                    type="number"
                    placeholder="عدد المقاعد"
                    value={formData.seats}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        seats: e.target.value,
                      })
                    }
                    className="w-full rounded-xl border border-gray-200 pr-12 px-4 py-4 outline-none focus:border-[#c8a44d]"
                  />
                </div>
              </div>
            </div>

            {/* التاريخ */}
            <div className="mt-6">
              <label className="font-semibold mb-2 block">التاريخ المفضل</label>

              <input
                required
                type="date"
                value={formData.date}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    date: e.target.value,
                  })
                }
                className="w-full rounded-xl border border-gray-200 px-4 py-4 outline-none focus:border-[#c8a44d]"
              />
            </div>

            {/* ملاحظات */}
            <div className="mt-6">
              <label className="font-semibold mb-2 block">ملاحظات</label>

              <textarea
                rows={5}
                placeholder="اكتب أي تفاصيل إضافية..."
                value={formData.notes}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    notes: e.target.value,
                  })
                }
                className="w-full rounded-xl border border-gray-200 px-4 py-4 outline-none focus:border-[#c8a44d]"
              />
            </div>

            <button
              type="submit"
              className="mt-8 w-full rounded-full bg-[#c8a44d] py-4 text-lg font-bold text-[#2F2A25] hover:scale-[1.02] transition flex items-center justify-center gap-2"
            >
              إرسال طلب الحجز
              <Send size={18} />
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
