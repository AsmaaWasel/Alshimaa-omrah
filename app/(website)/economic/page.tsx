"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  Bus,
  CalendarDays,
  Check,
  ChevronLeft,
  ChevronRight,
  Clock3,
  Hotel,
  MapPin,
  MessageCircle,
  Minus,
  Phone,
  Plus,
  Route,
  Users,
  X,
} from "lucide-react";

const WHATSAPP_NUMBER = "966563591198";
const PHONE_NUMBER_DISPLAY = "0563591198";

const hotelImages = [
  "/rezk/gate.jpeg",
  "/rezk/gate2.jpeg",
  "/rezk/room1.jpeg",
  "/rezk/room2.jpeg",
  "/rezk/room3.jpeg",
];

const busImages = [
  "/buses/bus2.jpeg",
  "/buses/bus3.jpeg",
  "/buses/bus4.jpeg",
  "/buses/1eb65052-d397-4f15-afa8-fefb428b7037.jpg",
];

function ImageGallery({ images, alt }: { images: string[]; alt: string }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const scrollToIndex = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative">
      <div
        ref={containerRef}
        className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-slate-100"
      >
        <img
          src={images[currentIndex]}
          alt={`${alt} ${currentIndex + 1}`}
          className="h-full w-full object-cover transition-all duration-500"
        />

        {images.length > 1 && (
          <>
            <button
              type="button"
              onClick={prevImage}
              aria-label="الصورة السابقة"
              className="absolute left-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/95 text-slate-900 shadow-md transition hover:bg-white"
            >
              <ChevronLeft size={20} />
            </button>

            <button
              type="button"
              onClick={nextImage}
              aria-label="الصورة التالية"
              className="absolute right-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/95 text-slate-900 shadow-md transition hover:bg-white"
            >
              <ChevronRight size={20} />
            </button>
          </>
        )}

        <div className="absolute bottom-3 right-3 rounded-full bg-black/70 px-3 py-1 text-xs font-semibold text-white">
          {currentIndex + 1} / {images.length}
        </div>
      </div>

      {images.length > 1 && (
        <div className="mt-3 flex items-center justify-between gap-3">
          <button
            type="button"
            onClick={prevImage}
            className="flex items-center gap-1 text-sm font-semibold text-slate-700 transition hover:text-slate-950"
          >
            <ArrowRight size={16} />
            السابقة
          </button>

          <div className="flex items-center gap-1.5">
            {images.map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => scrollToIndex(index)}
                aria-label={`انتقل للصورة ${index + 1}`}
                className={`h-2 rounded-full transition-all ${
                  index === currentIndex
                    ? "w-6 bg-amber-500"
                    : "w-2 bg-slate-300 hover:bg-slate-400"
                }`}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={nextImage}
            className="flex items-center gap-1 text-sm font-semibold text-slate-700 transition hover:text-slate-950"
          >
            التالية
            <ArrowLeft size={16} />
          </button>
        </div>
      )}

      <p className="mt-2 text-center text-xs font-medium text-slate-500">
        اسحب الصور أو استخدم الأسهم لمشاهدة المزيد
      </p>
    </div>
  );
}

export default function EconomyPackagePage() {
  const [passengers, setPassengers] = useState(1);
  const [duration, setDuration] = useState(3);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    date: "",
    notes: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const message = `
السلام عليكم، أرغب في حجز باقة العمرة الاقتصادية.

الاسم: ${formData.name}

رقم الجوال: ${formData.phone}

عدد الأشخاص: ${passengers}

مدة الرحلة: ${duration} أيام

تاريخ الرحلة: ${formData.date || "لم يتم التحديد"}

${formData.notes ? `ملاحظات: ${formData.notes}` : ""}
    `.trim();

    const encodedMessage = encodeURIComponent(message);

    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`,
      "_blank",
    );
  };

  return (
    <main dir="rtl" className="min-h-screen bg-amber-50">
      {/* Hero */}
      <section className="relative overflow-hidden bg-slate-900">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/makkah-bg.jpg')",
          }}
        />

        <div className="absolute inset-0 bg-slate-950/75" />

        <div className="relative mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-12">
          <Link
            href="/"
            className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-amber-300 transition hover:text-amber-200"
          >
            <ArrowRight size={17} />
            العودة للرئيسية
          </Link>

          <div className="max-w-3xl">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-amber-400/40 bg-amber-400/10 px-4 py-2 text-sm font-semibold text-amber-200">
              <CalendarDays size={17} />
              باقة العمرة الاقتصادية
            </div>

            <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
              رحلة عمرة
              <span className="block text-amber-300">بأسعار اقتصادية</span>
            </h1>

            <p className="mt-6 max-w-2xl text-base font-medium leading-8 text-white/95 sm:text-lg">
              رحلة متكاملة للعمرة تشمل النقل والإقامة والخدمات الأساسية، بتكلفة
              مناسبة مع الحفاظ على جودة الخدمة وراحة المعتمر.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-amber-500 px-6 py-3.5 font-bold text-slate-950 transition hover:bg-amber-400"
              >
                <MessageCircle size={19} />
                احجز عبر واتساب
              </a>

              <a
                href={`tel:+${WHATSAPP_NUMBER}`}
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/50 bg-white/10 px-6 py-3.5 font-bold text-white transition hover:bg-white/20"
              >
                <Phone size={18} />
                {PHONE_NUMBER_DISPLAY}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Summary */}
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-5 py-8 sm:px-8 lg:px-12">
          <div className="mb-8 flex flex-wrap items-center gap-2 text-sm">
            <Link
              href="/"
              className="font-semibold text-slate-600 transition hover:text-slate-950"
            >
              الرئيسية
            </Link>

            <ChevronLeft size={15} className="text-slate-400" />

            <span className="font-bold text-amber-700">الباقة الاقتصادية</span>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-amber-100 text-amber-700">
                <Route size={22} />
              </div>

              <h3 className="text-lg font-bold text-slate-950">رحلة متكاملة</h3>

              <p className="mt-2 text-sm font-medium leading-7 text-slate-700">
                تنظيم الرحلة من الانطلاق وحتى العودة مع توفير وسائل النقل
                والإقامة.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-amber-100 text-amber-700">
                <Hotel size={22} />
              </div>

              <h3 className="text-lg font-bold text-slate-950">إقامة مريحة</h3>

              <p className="mt-2 text-sm font-medium leading-7 text-slate-700">
                خيارات إقامة مناسبة تساعدك على الاستمتاع برحلة العمرة بكل راحة.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-amber-100 text-amber-700">
                <Bus size={22} />
              </div>

              <h3 className="text-lg font-bold text-slate-950">نقل مريح</h3>

              <p className="mt-2 text-sm font-medium leading-7 text-slate-700">
                توفير حافلات للنقل بين المدن والمواقع المحددة ضمن البرنامج.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Route */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-12">
        <div className="mb-10">
          <span className="text-sm font-bold text-amber-700">مسار الرحلة</span>

          <h2 className="mt-2 text-3xl font-bold text-slate-950 sm:text-4xl">
            خط سير الرحلة
          </h2>

          <p className="mt-3 max-w-2xl text-base font-medium leading-8 text-slate-700">
            برنامج مرتب يوضح مراحل الرحلة والتنقل بين المدن خلال فترة العمرة.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
            <div className="mb-5 flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-amber-100 text-amber-700">
                <MapPin size={21} />
              </div>

              <div>
                <h3 className="font-bold text-slate-950">الرياض</h3>
                <p className="text-sm font-medium text-slate-600">
                  نقطة الانطلاق
                </p>
              </div>
            </div>

            <div className="mr-5 border-r-2 border-dashed border-amber-200 pr-6">
              <p className="text-sm font-medium leading-8 text-slate-700">
                التجمع والانطلاق من الرياض حسب الموعد المحدد للحجز.
              </p>

              <p className="mt-3 text-sm font-medium leading-7 text-slate-600">
                يتم تحديد موقع التجمع وموعد التحرك عند تأكيد الحجز.
              </p>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
            <div className="mb-5 flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-amber-100 text-amber-700">
                <MapPin size={21} />
              </div>

              <div>
                <h3 className="font-bold text-slate-950">مكة المكرمة</h3>

                <p className="text-sm font-medium text-slate-600">
                  الوجهة الرئيسية
                </p>
              </div>
            </div>

            <div className="mr-5 border-r-2 border-dashed border-amber-200 pr-6">
              <p className="text-sm font-medium leading-8 text-slate-700">
                الوصول إلى مكة المكرمة والإقامة وأداء مناسك العمرة.
              </p>

              <p className="mt-3 text-sm font-medium leading-7 text-slate-600">
                يمكن أن يشمل البرنامج زيارة المدينة المنورة حسب الباقة والمدة
                المختارة.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Accommodation */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-12">
          <div className="mb-10">
            <span className="text-sm font-bold text-amber-700">الإقامة</span>

            <h2 className="mt-2 text-3xl font-bold text-slate-950 sm:text-4xl">
              إقامة مناسبة لرحلتك
            </h2>

            <p className="mt-3 max-w-2xl text-base font-medium leading-8 text-slate-700">
              نوفر خيارات إقامة مناسبة للباقة الاقتصادية، مع الاهتمام براحة
              المعتمرين واحتياجاتهم الأساسية.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-7">
              <div className="mb-5 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-100 text-amber-700">
                  <Hotel size={23} />
                </div>

                <div>
                  <h3 className="font-bold text-slate-950">فندق الإقامة</h3>

                  <p className="text-sm font-medium text-slate-600">
                    خيارات اقتصادية مناسبة
                  </p>
                </div>
              </div>

              <p className="text-sm font-medium leading-8 text-slate-700">
                يتم توفير الفندق وفق المتاح وقت الحجز، مع مراعاة مستوى الخدمة
                والموقع المناسب ضمن البرنامج.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-7">
              <div className="mb-5 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-100 text-amber-700">
                  <Clock3 size={23} />
                </div>

                <div>
                  <h3 className="font-bold text-slate-950">مدة الإقامة</h3>

                  <p className="text-sm font-medium text-slate-600">
                    حسب المدة المختارة
                  </p>
                </div>
              </div>

              <p className="text-sm font-medium leading-8 text-slate-700">
                يمكنك اختيار مدة الرحلة المناسبة لك عند تعبئة نموذج الحجز.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Included / Excluded */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-12">
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-7">
            <h3 className="mb-6 flex items-center gap-3 text-xl font-bold text-slate-950">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                <Check size={20} />
              </span>
              الباقة تشمل
            </h3>

            <ul className="space-y-4">
              {[
                "النقل بالحافلات حسب البرنامج",
                "الإقامة حسب الحجز",
                "تنظيم الرحلة",
                "المساعدة والتنسيق خلال الرحلة",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-sm font-medium leading-7 text-slate-700"
                >
                  <Check size={18} className="mt-1 shrink-0 text-emerald-700" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-rose-200 bg-rose-50 p-7">
            <h3 className="mb-6 flex items-center gap-3 text-xl font-bold text-slate-950">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-rose-100 text-rose-700">
                <X size={20} />
              </span>
              لا تشمل
            </h3>

            <ul className="space-y-4">
              {[
                "المصاريف الشخصية",
                "الخدمات الإضافية غير المذكورة في البرنامج",
                "أي خدمات خارج تفاصيل الحجز",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-sm font-medium leading-7 text-slate-700"
                >
                  <X size={18} className="mt-1 shrink-0 text-rose-700" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Hotels */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-12">
          <div className="mb-10">
            <span className="text-sm font-bold text-amber-700">الفنادق</span>

            <h2 className="mt-2 text-3xl font-bold text-slate-950 sm:text-4xl">
              صور الإقامة
            </h2>

            <p className="mt-3 max-w-2xl text-base font-medium leading-8 text-slate-700">
              شاهد بعض الصور التوضيحية لمرافق وغرف الإقامة.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr] lg:items-center">
            <ImageGallery images={hotelImages} alt="صور الفندق" />

            <div>
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-amber-100 text-amber-700">
                <Hotel size={24} />
              </div>

              <h3 className="text-2xl font-bold text-slate-950">إقامة مريحة</h3>

              <p className="mt-4 font-medium leading-8 text-slate-700">
                يتم اختيار أماكن الإقامة وفق تفاصيل الباقة والحجوزات المتاحة وقت
                تأكيد الرحلة.
              </p>

              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-5 py-3 font-bold text-white transition hover:bg-emerald-700"
              >
                <MessageCircle size={18} />
                استفسر عن الفندق
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Buses */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-12">
        <div className="mb-10">
          <span className="text-sm font-bold text-amber-700">النقل</span>

          <h2 className="mt-2 text-3xl font-bold text-slate-950 sm:text-4xl">
            حافلات الرحلة
          </h2>

          <p className="mt-3 max-w-2xl text-base font-medium leading-8 text-slate-700">
            وسائل نقل مخصصة للرحلات بين المدن والمواقع المحددة في البرنامج.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr] lg:items-center">
          <ImageGallery images={busImages} alt="صور الحافلات" />

          <div>
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-amber-100 text-amber-700">
              <Bus size={24} />
            </div>

            <h3 className="text-2xl font-bold text-slate-950">
              نقل مريح ومنظم
            </h3>

            <p className="mt-4 font-medium leading-8 text-slate-700">
              يتم تنظيم مواعيد التحرك والتجمع بما يتناسب مع تفاصيل الرحلة، مع
              توفير وسيلة نقل مناسبة للمجموعة.
            </p>

            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-5 py-3 font-bold text-white transition hover:bg-emerald-700"
            >
              <MessageCircle size={18} />
              استفسر عن النقل
            </a>
          </div>
        </div>
      </section>

      {/* Booking */}
      <section className="bg-white">
        <div className="mx-auto max-w-4xl px-5 py-16 sm:px-8 lg:px-12">
          <div className="mb-10 text-center">
            <span className="text-sm font-bold text-amber-700">الحجز</span>

            <h2 className="mt-2 text-3xl font-bold text-slate-950 sm:text-4xl">
              احجز رحلتك الآن
            </h2>

            <p className="mx-auto mt-3 max-w-2xl text-base font-medium leading-8 text-slate-700">
              املأ البيانات التالية وسنتواصل معك عبر واتساب لتأكيد التفاصيل.
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm sm:p-8"
          >
            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-bold text-slate-950"
                >
                  الاسم
                </label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="اكتب اسمك"
                  className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 font-medium text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20"
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="mb-2 block text-sm font-bold text-slate-950"
                >
                  رقم الجوال
                </label>

                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  placeholder="05xxxxxxxx"
                  className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 font-medium text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20"
                />
              </div>

              <div>
                <label
                  htmlFor="date"
                  className="mb-2 block text-sm font-bold text-slate-950"
                >
                  تاريخ الرحلة
                </label>

                <input
                  id="date"
                  name="date"
                  type="date"
                  value={formData.date}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 font-medium text-slate-950 outline-none transition focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-bold text-slate-950">
                  عدد الأشخاص
                </label>

                <div className="flex items-center justify-between rounded-xl border border-slate-300 bg-white p-2">
                  <button
                    type="button"
                    onClick={() =>
                      setPassengers((prev) => Math.max(1, prev - 1))
                    }
                    className="flex h-10 w-10 items-center justify-center rounded-lg text-slate-800 transition hover:bg-slate-100"
                    aria-label="تقليل عدد الأشخاص"
                  >
                    <Minus size={18} />
                  </button>

                  <div className="flex items-center gap-2 font-bold text-slate-950">
                    <Users size={18} className="text-amber-700" />
                    {passengers}
                  </div>

                  <button
                    type="button"
                    onClick={() => setPassengers((prev) => prev + 1)}
                    className="flex h-10 w-10 items-center justify-center rounded-lg text-slate-800 transition hover:bg-slate-100"
                    aria-label="زيادة عدد الأشخاص"
                  >
                    <Plus size={18} />
                  </button>
                </div>
              </div>
            </div>

            <div className="mt-6">
              <label className="mb-2 block text-sm font-bold text-slate-950">
                مدة الرحلة
              </label>

              <div className="grid grid-cols-3 gap-3">
                {[3, 5, 7].map((days) => (
                  <button
                    key={days}
                    type="button"
                    onClick={() => setDuration(days)}
                    className={`rounded-xl border px-4 py-3 text-sm font-bold transition ${
                      duration === days
                        ? "border-amber-500 bg-amber-500 text-slate-950"
                        : "border-slate-300 bg-white text-slate-800 hover:border-amber-400 hover:bg-amber-50"
                    }`}
                  >
                    {days} أيام
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-6">
              <label
                htmlFor="notes"
                className="mb-2 block text-sm font-bold text-slate-950"
              >
                ملاحظات
              </label>

              <textarea
                id="notes"
                name="notes"
                value={formData.notes}
                onChange={handleChange}
                rows={4}
                placeholder="أي تفاصيل أو ملاحظات إضافية..."
                className="w-full resize-none rounded-xl border border-slate-300 bg-white px-4 py-3 font-medium text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20"
              />
            </div>

            <button
              type="submit"
              className="mt-7 flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-600 px-6 py-4 font-bold text-white transition hover:bg-emerald-700"
            >
              <MessageCircle size={20} />
              إرسال طلب الحجز عبر واتساب
            </button>
          </form>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-amber-500">
        <div className="mx-auto max-w-7xl px-5 py-14 text-center sm:px-8 lg:px-12">
          <h2 className="text-3xl font-bold text-slate-950 sm:text-4xl">
            جاهز لرحلة العمرة؟
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-base font-medium leading-8 text-slate-950">
            تواصل معنا الآن لمعرفة تفاصيل الرحلة والأسعار المتاحة والحجز.
          </p>

          <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-slate-950 px-7 py-3.5 font-bold text-white transition hover:bg-slate-800"
            >
              <MessageCircle size={19} />
              تواصل عبر واتساب
            </a>

            <a
              href={`tel:+${WHATSAPP_NUMBER}`}
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-900/40 bg-white/30 px-7 py-3.5 font-bold text-slate-950 transition hover:bg-white/40"
            >
              <Phone size={19} />
              {PHONE_NUMBER_DISPLAY}
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
