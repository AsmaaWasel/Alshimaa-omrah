"use client";

import { useEffect, useState } from "react";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function BookingModal({ isOpen, onClose }: BookingModalProps) {
  const [step, setStep] = useState(1);

  const [formData, setFormData] = useState({
    name: "",
    tripType: "",
    tripDays: "",
    departureDate: "",
    returnDate: "",
    notes: "",
  });

  useEffect(() => {
    if (formData.departureDate && formData.tripDays) {
      const start = new Date(formData.departureDate);

      start.setDate(start.getDate() + Number(formData.tripDays));

      setFormData((prev) => ({
        ...prev,
        returnDate: start.toISOString().split("T")[0],
      }));
    }
  }, [formData.departureDate, formData.tripDays]);

  const handleSubmit = () => {
    const tripTypeText =
      formData.tripType === "makkah"
        ? "مكة فقط"
        : formData.tripType === "makkah_madinah"
          ? "مكة والمدينة"
          : "المدينة فقط";

    const message = `
الاسم: ${formData.name}

نوع الرحلة: ${tripTypeText}

عدد الأيام: ${formData.tripDays}

تاريخ الانطلاق: ${formData.departureDate}

تاريخ العودة: ${formData.returnDate}

ملاحظات:
${formData.notes}
`;

    window.open(
      `https://wa.me/966563591198?text=${encodeURIComponent(message)}`,
      "_blank",
    );

    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[999] bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl w-full max-w-xl p-8 relative">
        <button onClick={onClose} className="absolute left-5 top-5 text-2xl">
          ✕
        </button>

        <h2 className="text-3xl font-bold text-center mb-8">حجز رحلة عمرة</h2>

        <div className="flex justify-center gap-2 mb-8">
          {[1, 2, 3, 4].map((item) => (
            <div
              key={item}
              className={`h-2 w-16 rounded-full ${
                item <= step ? "bg-[#D9B8A6]" : "bg-gray-200"
              }`}
            />
          ))}
        </div>

        {step === 1 && (
          <div className="space-y-4">
            <label className="block font-semibold">الاسم بالكامل</label>

            <input
              type="text"
              value={formData.name}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  name: e.target.value,
                })
              }
              className="w-full border rounded-xl p-4"
              placeholder="أدخل الاسم"
            />

            <button
              onClick={() => setStep(2)}
              className="w-full bg-[#D9B8A6] py-4 rounded-xl font-bold"
            >
              التالي
            </button>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-4">
            <label className="font-semibold block">نوع الرحلة</label>

            <select
              value={formData.tripType}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  tripType: e.target.value,
                })
              }
              className="w-full border rounded-xl p-4"
            >
              <option value="">اختر نوع الرحلة</option>

              <option value="makkah">مكة فقط</option>

              <option value="makkah_madinah">مكة والمدينة</option>

              <option value="madinah">المدينة فقط</option>
            </select>

            <div className="flex gap-3">
              <button
                onClick={() => setStep(1)}
                className="flex-1 border py-3 rounded-xl"
              >
                السابق
              </button>

              <button
                onClick={() => setStep(3)}
                className="flex-1 bg-[#D9B8A6] py-3 rounded-xl"
              >
                التالي
              </button>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="space-y-4">
            <label className="font-semibold">عدد أيام الرحلة</label>

            <input
              type="number"
              min="1"
              value={formData.tripDays}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  tripDays: e.target.value,
                })
              }
              className="w-full border rounded-xl p-4"
            />

            <label className="font-semibold block">تاريخ الانطلاق</label>

            <input
              type="date"
              value={formData.departureDate}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  departureDate: e.target.value,
                })
              }
              className="w-full border rounded-xl p-4"
            />

            <div className="flex gap-3">
              <button
                onClick={() => setStep(2)}
                className="flex-1 border py-3 rounded-xl"
              >
                السابق
              </button>

              <button
                onClick={() => setStep(4)}
                className="flex-1 bg-[#D9B8A6] py-3 rounded-xl"
              >
                التالي
              </button>
            </div>
          </div>
        )}

        {step === 4 && (
          <div className="space-y-4">
            <label className="font-semibold block">تاريخ العودة</label>

            <input
              value={formData.returnDate}
              readOnly
              className="w-full border rounded-xl p-4 bg-gray-100"
            />

            <label className="font-semibold block">ملاحظات أو تعليقات</label>

            <textarea
              rows={5}
              value={formData.notes}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  notes: e.target.value,
                })
              }
              className="w-full border rounded-xl p-4"
            />

            <div className="flex gap-3">
              <button
                onClick={() => setStep(3)}
                className="flex-1 border py-3 rounded-xl"
              >
                السابق
              </button>

              <button
                onClick={handleSubmit}
                className="flex-1 bg-green-600 text-white py-3 rounded-xl"
              >
                إرسال الحجز
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
