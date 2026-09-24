"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Bus,
  Hotel,
  CalendarDays,
  Clock,
  Users,
  Crown,
  CheckCircle2,
  XCircle,
  ArrowLeft,
  MessageCircle,
  Phone,
  ChevronLeft,
  ChevronRight,
  Building2,
  Bed,
  ShieldCheck,
  Armchair,
  Clock8,
  UsersRound,
  Calendar,
  Heart,
  Info,
} from "lucide-react";

const WHATSAPP_NUMBER = "966563591198";
const PHONE_NUMBER_DISPLAY = "0563591198";

const vipHotelImages = [
  "/voco/i-love-voco.jpeg",
  "/voco/reception-voco.jpeg",
  "/voco/room2.jpeg",
  "/voco/room3.jpeg",
  "/voco/room4.jpeg",
  "/melemum/melemum-gate.jpeg",
  "/melemum/melemum-gate2.jpeg",
  "/melemum/melemum-room.jpeg",
  "/melemum/melemum-room2.jpeg",
];

const vipBusImages = [
  "/vip-buses/bus1.jpeg",
  "/vip-buses/bus2.jpeg",
  "/vip-buses/bus3.jpeg",
  "/vip-buses/bus4.jpeg",
  "/vip-buses/bus5.jpeg",
];

function ImageGallery({
  images,
  title,
  badgeColor = "gold",
}: {
  images: string[];
  title: string;
  badgeColor?: string;
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const scrollToIndex = (index: number) => {
    if (containerRef.current) {
      const container = containerRef.current;
      const items = container.querySelectorAll(".gallery-item");

      if (items[index]) {
        items[index].scrollIntoView({
          behavior: "smooth",
          block: "nearest",
          inline: "center",
        });
      }
    }
  };

  const nextSlide = () => {
    const nextIndex = Math.min(currentIndex + 1, images.length - 1);
    setCurrentIndex(nextIndex);
    scrollToIndex(nextIndex);
  };

  const prevSlide = () => {
    const prevIndex = Math.max(currentIndex - 1, 0);
    setCurrentIndex(prevIndex);
    scrollToIndex(prevIndex);
  };

  const isAtStart = currentIndex === 0;
  const isAtEnd = currentIndex >= images.length - 1;

  return (
    <div className="relative">
      <div className="mb-3 block text-center text-[10px] font-medium text-slate-500 md:hidden">
        ← اسحب للتمرير →
      </div>

      <div
        ref={containerRef}
        className="scrollbar-hide flex snap-x snap-mandatory gap-3 overflow-x-auto scroll-smooth md:gap-4"
      >
        {images.map((src, index) => (
          <div
            key={src}
            className="gallery-item group relative h-56 w-[85vw] shrink-0 snap-center overflow-hidden rounded-2xl shadow-soft sm:h-64 sm:w-[45vw] md:h-72 md:w-[30vw] md:rounded-[1.75rem]"
          >
            <div
              className="h-full w-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
              style={{ backgroundImage: `url('${src}')` }}
            />

            <div className="absolute inset-0 bg-gradient-to-t from-night/50 via-transparent to-transparent" />

            <div className="absolute bottom-3 right-3 md:bottom-4 md:right-5">
              <span
                className={`rounded-full ${
                  badgeColor === "gold" ? "bg-gold/90" : "bg-amber-500/90"
                } px-2.5 py-1 text-[10px] font-semibold text-white backdrop-blur-md md:px-4 md:py-1.5 md:text-xs`}
              >
                {title}
              </span>
            </div>
          </div>
        ))}
      </div>

      <button
        type="button"
        onClick={prevSlide}
        disabled={isAtStart}
        className={`absolute left-1 top-1/2 -translate-y-1/2 rounded-full p-1.5 text-white backdrop-blur-md transition-all duration-300 hover:scale-110 md:left-2 md:p-2 ${
          isAtStart
            ? "cursor-not-allowed bg-night/30 opacity-50"
            : "bg-night/70 hover:bg-night/90"
        }`}
        aria-label="السابق"
      >
        <ChevronLeft size={18} className="md:h-5 md:w-5" />
      </button>

      <button
        type="button"
        onClick={nextSlide}
        disabled={isAtEnd}
        className={`absolute right-1 top-1/2 -translate-y-1/2 rounded-full p-1.5 text-white backdrop-blur-md transition-all duration-300 hover:scale-110 md:right-2 md:p-2 ${
          isAtEnd
            ? "cursor-not-allowed bg-night/30 opacity-50"
            : "bg-night/70 hover:bg-night/90"
        }`}
        aria-label="التالي"
      >
        <ChevronRight size={18} className="md:h-5 md:w-5" />
      </button>

      <div className="mt-4 flex flex-wrap justify-center gap-1.5 px-2 md:gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            type="button"
            onClick={() => {
              setCurrentIndex(index);
              scrollToIndex(index);
            }}
            className={`h-1.5 rounded-full transition-all duration-300 md:h-2 ${
              index === currentIndex
                ? "w-6 bg-amber-400 md:w-8"
                : "w-1.5 bg-amber-200/50 hover:bg-amber-300/70 md:w-2"
            }`}
            aria-label={`الصورة ${index + 1}`}
          />
        ))}
      </div>

      <div className="mt-2 text-center text-[10px] font-medium text-slate-500">
        {currentIndex + 1} / {images.length}
      </div>
    </div>
  );
}

export default function VipPackagePage() {
  const [step, setStep] = useState(1);
  const [selectedPackage] = useState("vip");

  const [accommodation, setAccommodation] = useState<"family" | "single">(
    "family",
  );

  const [roomType, setRoomType] = useState<"private" | "shared">("private");

  const [passengers, setPassengers] = useState(2);
  const [tripDuration, setTripDuration] = useState(3);
  const [date, setDate] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [notes, setNotes] = useState("");

  const vipFeatures = [
    {
      icon: Armchair,
      title: "مساحة شخصية أوسع",
      description:
        "ثلاثة صفوف فقط في الباص تعني مقاعد أعرض ومساحة أكبر للقدمين — وصول إلى مكة بكامل نشاطك.",
    },
    {
      icon: Hotel,
      title: "فنادق من الطراز الأول",
      description:
        "سكن في فنادق 4 و5 نجوم بخدمة راقية وموقع قريب، لتكون رحلتك عبادة وراحة معاً.",
    },
    {
      icon: UsersRound,
      title: "عدد ركاب محدود",
      description:
        "30 معتمراً فقط في كل رحلة — هدوء أكثر وتنظيم أسرع في الانطلاق والوصول.",
    },
    {
      icon: Calendar,
      title: "مواعيد ثابتة",
      description: "انطلاق منتظم كل اثنين وخميس يسهل عليك ترتيب إجازتك مسبقاً.",
    },
    {
      icon: Clock8,
      title: "مدة مثالية",
      description:
        "ثلاثة أيام مدروسة شاملة يومي الذهاب والعودة — عمرة كاملة دون إرهاق أو تعطيل طويل عن العمل.",
    },
    {
      icon: Heart,
      title: "عناية خاصة",
      description:
        "فريق قافلة الشيماء يرافق رحلات VIP باهتمام مضاعف من لحظة الحجز حتى عودتك إلى الرياض.",
    },
  ];

  const handleSubmit = () => {
    const message = `السلام عليكم، أرغب في حجز رحلة عمرة مع قافلة الشيماء - باقة VIP:

📋 تفاصيل الحجز:

• الباقة: VIP (فاخرة)

• نوع السكن: ${
      accommodation === "family"
        ? "عائلة (غرفة خاصة)"
        : `عزاب (${roomType === "private" ? "غرفة خاصة" : "غرفة مشتركة"})`
    }

• عدد المعتمرين: ${passengers}

• مدة الرحلة: ${tripDuration} أيام

• التاريخ المفضل: ${date || "لم يحدد"}

👤 بيانات العميل:

• الاسم: ${name || "لم يحدد"}

• الجوال: ${phone || "لم يحدد"}

• ملاحظات: ${notes || "لا يوجد"}`;

    const encodedMessage = encodeURIComponent(message);

    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`,
      "_blank",
    );
  };

  return (
    <div className="min-h-screen bg-ivory">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-amber-900 via-amber-800 to-amber-950 py-16 md:py-24">
        <div className="absolute inset-0 opacity-10">
          <div
            className="h-full w-full bg-cover bg-center"
            style={{
              backgroundImage: "url('/images/makkah-bg.jpg')",
            }}
          />
        </div>

        <div className="absolute inset-0 bg-gradient-to-t from-amber-950/90 via-amber-900/80 to-amber-800/60" />

        <div className="container relative z-10 pr-4 md:pr-8">
          <Link
            href="/"
            className="mb-8 inline-flex items-center gap-2 text-amber-200 transition-colors hover:text-amber-100"
          >
            <ArrowLeft size={18} />
            العودة للرئيسية
          </Link>

          <div className="max-w-3xl">
            <span className="mb-5 inline-flex items-center rounded-full bg-amber-500/30 px-4 py-1.5 text-xs font-semibold text-amber-100">
              <CalendarDays size={14} className="ml-1" />
              كل اثنين وخميس أسبوعياً
            </span>

            <h1 className="text-3xl font-extrabold leading-tight text-white md:text-4xl lg:text-5xl">
              باقة VIP — قافلة الشيماء
            </h1>

            <h2 className="mt-3 text-2xl font-bold text-amber-200 md:text-3xl">
              فخامة في كل تفصيلة
            </h2>

            <p className="mt-5 max-w-xl text-base leading-relaxed text-white md:text-lg">
              تنظّم قافلة الشيماء رحلات عمرة VIP من الرياض بباص فاخر بثلاثة صفوف
              و30 مقعداً فقط، وفندق 4 أو 5 نجوم قريب من الحرم — ثلاثة أيام كاملة
              من الراحة والتنظيم.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#booking"
                className="inline-flex items-center gap-2 rounded-full bg-amber-400 px-6 py-3 text-sm font-bold text-amber-950 transition-transform hover:scale-105"
              >
                احجز مقعد VIP
                <ChevronLeft size={18} />
              </a>

              <Link
                href="/economic"
                className="inline-flex items-center gap-2 rounded-full border border-amber-300/50 px-6 py-3 text-sm font-semibold text-amber-100 transition-colors hover:bg-amber-400/10"
              >
                الباقة الاقتصادية
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Breadcrumb */}
      <section className="border-b border-slate-200 bg-white py-4 md:py-5">
        <div className="container pr-4 md:pr-8">
          <div className="flex items-center gap-2 text-sm text-slate-600">
            <Link href="/" className="transition-colors hover:text-amber-700">
              الرئيسية
            </Link>

            <span className="text-slate-400">‹</span>

            <span className="font-semibold text-amber-700">
              باقة VIP — قافلة الشيماء
            </span>
          </div>
        </div>
      </section>

      {/* Summary */}
      <section className="py-14 md:py-20">
        <div className="container pr-4 md:pr-8">
          <h2 className="mb-10 text-center text-2xl font-extrabold text-slate-900 md:text-3xl">
            ملخص باقة VIP مع قافلة الشيماء
          </h2>

          <div className="grid items-stretch gap-5 md:grid-cols-2 md:gap-6 lg:grid-cols-4">
            {[
              {
                icon: Bus,
                title: "الباص",
                text: "3 صفوف فاخرة — 30 مقعداً فقط",
              },
              {
                icon: Hotel,
                title: "الفندق",
                text: "4 أو 5 نجوم — على مقربة من الحرم",
              },
              {
                icon: CalendarDays,
                title: "الانطلاق",
                text: "كل اثنين وخميس أسبوعياً",
              },
              {
                icon: Clock,
                title: "المدة",
                text: "3 أيام في مكة — شاملة الذهاب والعودة",
              },
            ].map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="flex flex-col rounded-2xl border border-amber-100 bg-white p-6 shadow-soft"
                >
                  <div className="mb-3 w-fit rounded-xl bg-amber-50 p-3 text-amber-700">
                    <Icon size={24} />
                  </div>

                  <h3 className="font-bold text-slate-900">{item.title}</h3>

                  <p className="mt-1.5 text-sm leading-relaxed text-slate-700">
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* VIP Features */}
      <section className="bg-white py-14 md:py-20">
        <div className="container pr-4 md:pr-8">
          <h2 className="mb-4 text-center text-2xl font-extrabold text-slate-900 md:text-3xl">
            تجربة VIP — لماذا يختار معتمرونا قافلة الشيماء؟
          </h2>

          <p className="mx-auto mb-12 max-w-2xl text-center leading-relaxed text-slate-700">
            مميزات حصرية تجعل رحلة العمرة مع باقة VIP استثنائية بكل المقاييس
          </p>

          <div className="grid items-stretch gap-6 md:grid-cols-2 lg:grid-cols-3">
            {vipFeatures.map((feature, index) => {
              const Icon = feature.icon;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                  }}
                  className="flex flex-col rounded-2xl border border-amber-100 bg-gradient-to-br from-white to-amber-50/30 p-6 shadow-soft transition-shadow hover:shadow-lg"
                >
                  <div className="mb-4 w-fit rounded-xl bg-amber-100 p-3 text-amber-700">
                    <Icon size={24} />
                  </div>

                  <h3 className="mb-2 text-lg font-bold text-slate-900">
                    {feature.title}
                  </h3>

                  <p className="text-sm leading-relaxed text-slate-700">
                    {feature.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Included */}
      <section className="py-14 md:py-20">
        <div className="container pr-4 md:pr-8">
          <div className="grid items-stretch gap-6 md:grid-cols-2 md:gap-8">
            <div className="flex flex-col rounded-2xl border border-amber-100 bg-white p-6 shadow-soft md:p-8">
              <div className="mb-6 flex items-center gap-3">
                <div className="rounded-full bg-emerald-100 p-2 text-emerald-700">
                  <CheckCircle2 size={24} />
                </div>

                <h2 className="text-2xl font-extrabold text-slate-900">
                  الباقة تشمل
                </h2>
              </div>

              <ul className="space-y-3.5 text-slate-700">
                <li className="flex items-start gap-3">
                  <CheckCircle2
                    size={20}
                    className="mt-0.5 shrink-0 text-emerald-600"
                  />
                  <span>النقل بباص VIP فاخر ذهاباً وعودة</span>
                </li>

                <li className="flex items-start gap-3">
                  <CheckCircle2
                    size={20}
                    className="mt-0.5 shrink-0 text-emerald-600"
                  />
                  <span>السكن في فندق 4 أو 5 نجوم</span>
                </li>

                <li className="flex items-start gap-3">
                  <CheckCircle2
                    size={20}
                    className="mt-0.5 shrink-0 text-emerald-600"
                  />
                  <span>غرف خاصة للعائلات ومشتركة للعزاب</span>
                </li>

                <li className="flex items-start gap-3">
                  <CheckCircle2
                    size={20}
                    className="mt-0.5 shrink-0 text-emerald-600"
                  />
                  <span>تنظيم ومتابعة كاملة طوال الرحلة</span>
                </li>
              </ul>
            </div>

            <div className="flex flex-col rounded-2xl border border-amber-100 bg-white p-6 shadow-soft md:p-8">
              <div className="mb-6 flex items-center gap-3">
                <div className="rounded-full bg-rose-100 p-2 text-rose-700">
                  <XCircle size={24} />
                </div>

                <h2 className="text-2xl font-extrabold text-slate-900">
                  الباقة لا تشمل
                </h2>
              </div>

              <ul className="space-y-3.5 text-slate-700">
                <li className="flex items-start gap-3">
                  <XCircle
                    size={20}
                    className="mt-0.5 shrink-0 text-rose-600"
                  />
                  <span>الوجبات — خيارات مطاعم راقية حول الفندق</span>
                </li>

                <li className="flex items-start gap-3">
                  <XCircle
                    size={20}
                    className="mt-0.5 shrink-0 text-rose-600"
                  />
                  <span>واي فاي داخل الباص</span>
                </li>

                <li className="flex items-start gap-3 rounded-xl bg-amber-50 p-3.5">
                  <Info size={20} className="mt-0.5 shrink-0 text-amber-600" />

                  <span className="text-sm leading-relaxed text-slate-700">
                    وجهة باقة VIP هي مكة المكرمة فقط. إن رغبت بزيارة المدينة
                    المنورة، اطلع على{" "}
                    <Link
                      href="/economic"
                      className="font-semibold text-amber-700 hover:underline"
                    >
                      الباقة الاقتصادية
                    </Link>{" "}
                    التي تتيح مسار مكة والمدينة.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Hotel Gallery */}
      <section className="bg-white py-14 md:py-20">
        <div className="container pr-4 md:pr-8">
          <h2 className="mb-4 text-center text-2xl font-extrabold text-slate-900 md:text-3xl">
            معرض الصور — فنادق باقة VIP
          </h2>

          <p className="mx-auto mb-10 max-w-2xl text-center leading-relaxed text-slate-700">
            فنادق 4 و5 نجوم بجوار الحرم — مستوى راقٍ يناسب رحلة عمرة استثنائية
            مع قافلة الشيماء
          </p>

          <ImageGallery
            images={vipHotelImages}
            title="فنادق باقة VIP"
            badgeColor="amber"
          />

          <div className="mt-8 text-center">
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-amber-500 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-amber-200 transition-transform hover:scale-105"
            >
              <MessageCircle size={16} />
              استفسر عبر واتساب
            </a>
          </div>
        </div>
      </section>

      {/* Bus Gallery */}
      <section className="py-14 md:py-20">
        <div className="container pr-4 md:pr-8">
          <h2 className="mb-4 text-center text-2xl font-extrabold text-slate-900 md:text-3xl">
            معرض الصور — باصات باقة VIP
          </h2>

          <p className="mx-auto mb-10 max-w-2xl text-center leading-relaxed text-slate-700">
            باصات فاخرة 3 صفوف بسعة 30 مقعداً فقط — خصوصية وراحة استثنائية
            لرحلتك
          </p>

          <ImageGallery
            images={vipBusImages}
            title="باصات باقة VIP"
            badgeColor="amber"
          />

          <div className="mt-8 text-center">
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-amber-500 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-amber-200 transition-transform hover:scale-105"
            >
              <MessageCircle size={16} />
              استفسر عبر واتساب
            </a>
          </div>
        </div>
      </section>

      {/* Booking */}
      <section id="booking" className="bg-white py-14 md:py-20">
        <div className="container pr-4 md:pr-8">
          <div className="mb-10 text-center">
            <div className="mb-4 inline-flex items-center rounded-full bg-amber-100 px-4 py-1.5 text-xs font-semibold text-amber-800">
              <Clock size={14} className="ml-1" />
              احجز في أقل من دقيقة
            </div>

            <h2 className="text-2xl font-extrabold text-slate-900 md:text-3xl">
              احجز مقعدك بخطوات بسيطة
            </h2>

            <p className="mx-auto mt-3 max-w-2xl leading-relaxed text-slate-700">
              اختر باقتك وحدد تفاصيل رحلتك، وسيتم تجهيز رسالة واتساب كاملة بكل
              التفاصيل — أرسلها وسيؤكد لك فريق قافلة الشيماء التوفر والسعر
              مباشرة.
            </p>
          </div>

          <div className="mx-auto mb-10 flex max-w-3xl flex-wrap items-center justify-center gap-x-6 gap-y-3 rounded-2xl bg-amber-50 p-5">
            <div className="flex items-center gap-2 text-sm text-slate-700">
              <ShieldCheck size={18} className="shrink-0 text-amber-600" />
              <span>بدون دفع إلكتروني مسبق — التأكيد عبر واتساب</span>
            </div>

            <div className="hidden h-6 w-px bg-slate-300 md:block" />

            <div className="flex items-center gap-2 text-sm text-slate-700">
              <Clock size={18} className="shrink-0 text-amber-600" />
              <span>رد سريع على مدار اليوم</span>
            </div>

            <div className="hidden h-6 w-px bg-slate-300 md:block" />

            <div className="flex items-center gap-2 text-sm text-slate-700">
              <Users size={18} className="shrink-0 text-amber-600" />
              <span>مقاعد للأفراد والعائلات والمجموعات</span>
            </div>
          </div>

          <div className="mb-3 flex items-center justify-center gap-2 md:gap-4">
            {[1, 2, 3, 4].map((s) => (
              <div key={s} className="flex items-center">
                <button
                  type="button"
                  onClick={() => setStep(s)}
                  className={`flex h-8 w-8 items-center justify-center rounded-full text-xs font-bold transition-all duration-300 md:h-10 md:w-10 md:text-sm ${
                    step >= s
                      ? "bg-amber-500 text-white shadow-lg shadow-amber-200"
                      : "border border-slate-300 bg-white text-slate-600"
                  }`}
                >
                  {s}
                </button>

                {s < 4 && (
                  <div
                    className={`h-0.5 w-6 transition-all duration-300 md:w-12 ${
                      step > s ? "bg-amber-400" : "bg-slate-200"
                    }`}
                  />
                )}
              </div>
            ))}
          </div>

          <div className="mb-10 flex justify-center gap-4 text-[10px] font-medium text-slate-700 md:gap-8 md:text-xs">
            <span>نوع الباقة</span>
            <span>تفاصيل الرحلة</span>
            <span>بياناتك</span>
            <span>التأكيد</span>
          </div>

          <div className="mx-auto max-w-3xl rounded-2xl border border-amber-100 bg-ivory p-6 shadow-soft md:p-8">
            <div className="space-y-6">
              {/* Package */}
              <div className="grid gap-3 md:grid-cols-3">
                <div
                  className={`rounded-xl border-2 p-4 text-center ${
                    selectedPackage === "economy"
                      ? "border-blue-500 bg-blue-50"
                      : "border-slate-200 bg-white"
                  }`}
                >
                  <Bus size={24} className="mx-auto text-blue-600" />

                  <p className="mt-1.5 text-xs font-bold text-slate-900">
                    اقتصادية
                  </p>

                  <p className="text-[10px] font-medium text-slate-600">
                    3 نجوم
                  </p>
                </div>

                <div
                  className={`rounded-xl border-2 p-4 text-center ${
                    selectedPackage === "vip"
                      ? "border-amber-500 bg-amber-50 shadow-lg shadow-amber-100"
                      : "border-slate-200 bg-white"
                  }`}
                >
                  <Crown size={24} className="mx-auto text-amber-600" />

                  <p className="mt-1.5 text-xs font-bold text-amber-800">VIP</p>

                  <p className="text-[10px] font-medium text-amber-700">
                    4-5 نجوم
                  </p>
                </div>

                <div
                  className={`rounded-xl border-2 p-4 text-center ${
                    selectedPackage === "bus-only"
                      ? "border-emerald-500 bg-emerald-50"
                      : "border-slate-200 bg-white"
                  }`}
                >
                  <Users size={24} className="mx-auto text-emerald-600" />

                  <p className="mt-1.5 text-xs font-bold text-slate-900">
                    باص فقط
                  </p>

                  <p className="text-[10px] font-medium text-slate-600">
                    بدون سكن
                  </p>
                </div>
              </div>

              {/* Accommodation */}
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-bold text-slate-900">
                    نوع السكن
                  </label>

                  <div className="grid grid-cols-2 gap-2">
                    <button
                      type="button"
                      onClick={() => setAccommodation("family")}
                      className={`rounded-xl border-2 p-3 text-center transition-all ${
                        accommodation === "family"
                          ? "border-amber-500 bg-amber-50"
                          : "border-slate-200 bg-white hover:border-amber-300"
                      }`}
                    >
                      <Building2 size={20} className="mx-auto text-amber-600" />

                      <span className="text-xs font-semibold text-slate-800">
                        عائلة
                      </span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setAccommodation("single")}
                      className={`rounded-xl border-2 p-3 text-center transition-all ${
                        accommodation === "single"
                          ? "border-amber-500 bg-amber-50"
                          : "border-slate-200 bg-white hover:border-amber-300"
                      }`}
                    >
                      <Bed size={20} className="mx-auto text-amber-600" />

                      <span className="text-xs font-semibold text-slate-800">
                        عزاب
                      </span>
                    </button>
                  </div>
                </div>

                {accommodation === "single" && (
                  <div>
                    <label className="mb-2 block text-sm font-bold text-slate-900">
                      نوع الغرفة
                    </label>

                    <div className="grid grid-cols-2 gap-2">
                      <button
                        type="button"
                        onClick={() => setRoomType("private")}
                        className={`rounded-xl border-2 p-3 text-center transition-all ${
                          roomType === "private"
                            ? "border-amber-500 bg-amber-50"
                            : "border-slate-200 bg-white hover:border-amber-300"
                        }`}
                      >
                        <span className="text-xs font-semibold text-slate-800">
                          غرفة خاصة
                        </span>
                      </button>

                      <button
                        type="button"
                        onClick={() => setRoomType("shared")}
                        className={`rounded-xl border-2 p-3 text-center transition-all ${
                          roomType === "shared"
                            ? "border-amber-500 bg-amber-50"
                            : "border-slate-200 bg-white hover:border-amber-300"
                        }`}
                      >
                        <span className="text-xs font-semibold text-slate-800">
                          غرفة مشتركة
                        </span>
                      </button>
                    </div>
                  </div>
                )}
              </div>

              {/* Passengers + Duration */}
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-bold text-slate-900">
                    عدد المعتمرين
                  </label>

                  <div className="flex items-center justify-between rounded-xl border-2 border-slate-200 bg-white p-2">
                    <button
                      type="button"
                      onClick={() => setPassengers(Math.max(1, passengers - 1))}
                      className="rounded-lg p-2 text-slate-700 transition hover:bg-slate-100"
                    >
                      −
                    </button>

                    <span className="text-xl font-bold text-slate-900">
                      {passengers}
                    </span>

                    <button
                      type="button"
                      onClick={() =>
                        setPassengers(Math.min(10, passengers + 1))
                      }
                      className="rounded-lg p-2 text-slate-700 transition hover:bg-slate-100"
                    >
                      +
                    </button>
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-bold text-slate-900">
                    مدة الرحلة (أيام)
                  </label>

                  <div className="flex items-center justify-between rounded-xl border-2 border-slate-200 bg-white p-2">
                    <button
                      type="button"
                      onClick={() =>
                        setTripDuration(Math.max(1, tripDuration - 1))
                      }
                      className="rounded-lg p-2 text-slate-700 transition hover:bg-slate-100"
                    >
                      −
                    </button>

                    <span className="text-xl font-bold text-slate-900">
                      {tripDuration}
                    </span>

                    <button
                      type="button"
                      onClick={() =>
                        setTripDuration(Math.min(30, tripDuration + 1))
                      }
                      className="rounded-lg p-2 text-slate-700 transition hover:bg-slate-100"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>

              {/* Date */}
              <div>
                <label className="mb-2 block text-sm font-bold text-slate-900">
                  التاريخ المفضل (اثنين أو خميس)
                </label>

                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full rounded-xl border-2 border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-amber-400"
                />
              </div>

              {/* Name */}
              <div>
                <label className="mb-2 block text-sm font-bold text-slate-900">
                  الاسم الكامل
                </label>

                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="مثال: عبدالله محمد"
                  className="w-full rounded-xl border-2 border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-amber-400"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="mb-2 block text-sm font-bold text-slate-900">
                  رقم الجوال
                </label>

                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="05xxxxxxxx"
                  className="w-full rounded-xl border-2 border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-amber-400"
                />
              </div>

              {/* Notes */}
              <div>
                <label className="mb-2 block text-sm font-bold text-slate-900">
                  ملاحظات إضافية (اختياري)
                </label>

                <textarea
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  rows={2}
                  placeholder="أي تفاصيل إضافية..."
                  className="w-full resize-none rounded-xl border-2 border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-amber-400"
                />
              </div>

              {/* Submit */}
              <button
                type="button"
                onClick={handleSubmit}
                className="w-full rounded-full bg-gradient-to-l from-amber-500 to-amber-600 py-3.5 text-sm font-bold text-white shadow-lg shadow-amber-200 transition-transform hover:scale-[1.02]"
              >
                <MessageCircle size={18} className="ml-2 inline" />
                أرسل الطلب وتواصل واتساب
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-l from-amber-500 to-amber-600 py-14 md:py-20">
        <div className="container pr-4 text-center md:pr-8">
          <div className="mx-auto max-w-2xl">
            <Crown size={48} className="mx-auto mb-5 text-white" />

            <h2 className="mb-4 text-2xl font-extrabold text-white md:text-3xl">
              ارتقِ بتجربة عمرتك مع قافلة الشيماء VIP
            </h2>

            <p className="mb-8 leading-relaxed text-white">
              مقاعد محدودة في كل رحلة — احجز مبكراً لضمان مقعدك يوم الاثنين أو
              الخميس القادم.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-bold text-amber-700 shadow-lg transition-transform hover:scale-105"
              >
                <MessageCircle size={18} />
                احجز عبر واتساب
              </a>

              <a
                href={`tel:+${WHATSAPP_NUMBER}`}
                className="inline-flex items-center gap-2 rounded-full border-2 border-white/70 px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-white/20"
              >
                <Phone size={18} />
                {PHONE_NUMBER_DISPLAY}
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
