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
import { useSitePreferences } from "./site-preferences";

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
  const { locale } = useSitePreferences();
  const isArabic = locale === "ar";

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

    const message = isArabic
      ? `
طلب حجز عمرة جديد 🕋

الاسم: ${formData.name || "لم يحدد"}
الجوال: ${formData.phone || "لم يحدد"}
عدد المعتمرين: ${formData.pilgrims || "لم يحدد"}
عدد المقاعد في الباص: ${formData.seats || "لم يحدد"}
التاريخ المفضل: ${formData.date || "لم يحدد"}

ملاحظات:
${formData.notes || "لا توجد ملاحظات"}
`
      : `
New Umrah Booking Request 🕋

Name: ${formData.name || "Not specified"}
Phone: ${formData.phone || "Not specified"}
Number of Pilgrims: ${formData.pilgrims || "Not specified"}
Bus Seats: ${formData.seats || "Not specified"}
Preferred Date: ${formData.date || "Not specified"}

Notes:
${formData.notes || "No notes"}
`;

    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      message,
    )}`;

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  const infoFeatures = [
    {
      icon: Bus,
      title: isArabic ? "باصات حديثة" : "Modern Buses",
      text: isArabic
        ? "موديلات حديثة مجهزة بأعلى وسائل الراحة والسلامة للمعتمرين."
        : "Modern models equipped with the highest comfort and safety standards for pilgrims.",
    },
    {
      icon: BedDouble,
      title: isArabic ? "فنادق مميزة" : "Distinguished Hotels",
      text: isArabic
        ? "خيارات إقامة متنوعة تشمل الفنادق الاقتصادية وVIP."
        : "Diverse accommodation options including economy and VIP hotels.",
    },
    {
      icon: CalendarDays,
      title: isArabic ? "رحلات منتظمة" : "Regular Trips",
      text: isArabic
        ? "رحلات اقتصادية بشكل يومي وVIP يومي الاثنين والخميس."
        : "Daily economy trips and VIP trips every Monday and Thursday.",
    },
  ];

  return (
    <section
      id="booking"
      dir={isArabic ? "rtl" : "ltr"}
      className="relative isolate overflow-hidden bg-background py-20 lg:py-28"
    >
      {/* ================= BACKGROUND ================= */}
      <div className="absolute inset-0 -z-10 bg-[url('/haram.png')] bg-cover bg-center opacity-[0.04] dark:opacity-[0.06]" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-background via-background/95 to-accent/10" />
      <div className="islamic-pattern absolute inset-0 -z-10 opacity-30" />
      <div className="absolute -top-32 end-[-6rem] -z-10 size-[28rem] rounded-full bg-accent/15 blur-3xl" />
      <div className="absolute bottom-[-12rem] start-[-8rem] -z-10 size-[30rem] rounded-full bg-primary/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        {/* ================= HEADER ================= */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-14 max-w-3xl text-center md:mb-16"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-card/70 px-5 py-2 text-xs font-bold text-primary shadow-sm backdrop-blur md:text-sm">
            <CalendarDays size={16} />
            {isArabic ? "احجز الآن" : "Book Now"}
          </span>

          <h2 className="mt-6 font-serif text-3xl font-black text-foreground sm:text-4xl md:text-5xl">
            {isArabic ? "احجز رحلة العمر" : "Book the Journey of a Lifetime"}
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-8 text-muted-foreground md:text-lg">
            {isArabic
              ? "املأ البيانات التالية وسيتواصل معك فريق قافلة الشيماء لتأكيد الحجز والإجابة على جميع استفساراتك."
              : "Fill in the following details and the Al-Shaimaa convoy team will contact you to confirm the booking and answer all your inquiries."}
          </p>
        </motion.div>

        {/* ================= MAIN CONTENT ================= */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.7 }}
          className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-10"
        >
          {/* ================= INFO CARD ================= */}
          <div className="relative overflow-hidden rounded-[2rem] border border-primary/30 bg-foreground/[0.04] p-7 shadow-xl backdrop-blur-xl md:p-10 dark:bg-foreground/5">
            <div className="absolute end-0 start-0 top-0 h-[2px] bg-gradient-to-l from-transparent via-primary to-transparent" />

            <div className="pointer-events-none absolute -top-32 end-[-6rem] h-[280px] w-[280px] rounded-full bg-primary/10 blur-[90px]" />

            <div className="relative">
              <span className="text-sm font-bold text-primary">
                {isArabic ? "قافلة الشيماء" : "Al-Shaimaa Convoy"}
              </span>

              <h3 className="mt-4 font-serif text-2xl font-black text-foreground md:text-3xl">
                {isArabic ? "لماذا تحجز معنا؟" : "Why Book With Us?"}
              </h3>

              <div className="mt-5 h-[2px] w-14 bg-primary" />

              {/* Features */}
              <div className="mt-9 space-y-7">
                {infoFeatures.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.title} className="flex gap-4">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-primary/30 bg-primary/10 text-primary">
                        <Icon size={21} />
                      </div>
                      <div>
                        <h4 className="font-black text-foreground">
                          {item.title}
                        </h4>
                        <p className="mt-1 text-sm leading-7 text-muted-foreground">
                          {item.text}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Note */}
              <div className="mt-10 rounded-2xl border border-accent/30 bg-accent/10 p-5">
                <div className="flex gap-3">
                  <ShieldCheck
                    size={21}
                    className="mt-1 shrink-0 text-accent"
                  />
                  <p className="text-sm leading-7 text-foreground/85">
                    {isArabic
                      ? "بعد إرسال طلب الحجز سيتم التواصل معك مباشرة لتأكيد الموعد والمقاعد وإرسال جميع تفاصيل الرحلة."
                      : "After submitting your booking request, we will contact you directly to confirm the date, seats, and send all trip details."}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* ================= FORM ================= */}
          <form
            onSubmit={handleSubmit}
            className="rounded-[2rem] border border-border bg-card/75 p-6 shadow-xl backdrop-blur-xl md:p-9 lg:p-10"
          >
            <div className="mb-8">
              <h3 className="font-serif text-2xl font-black text-foreground">
                {isArabic ? "بيانات الحجز" : "Booking Details"}
              </h3>

              <p className="mt-2 text-sm text-muted-foreground">
                {isArabic
                  ? "جميع الخانات اختيارية، أدخل البيانات المتاحة لديك وسنتواصل معك عبر واتساب."
                  : "All fields are optional. Enter the details you have and we will contact you via WhatsApp."}
              </p>

              <div className="mt-4 h-[2px] w-12 bg-primary" />
            </div>

            {/* ================= ROW 1 ================= */}
            <div className="grid gap-5 md:grid-cols-2">
              {/* الاسم */}
              <div>
                <label
                  htmlFor="booking-name"
                  className="mb-2 block text-sm font-bold text-foreground"
                >
                  {isArabic ? "الاسم بالكامل" : "Full Name"}
                </label>

                <div className="relative">
                  <User
                    size={19}
                    className={`absolute top-1/2 -translate-y-1/2 text-muted-foreground ${
                      isArabic ? "right-4" : "left-4"
                    }`}
                  />

                  <input
                    id="booking-name"
                    type="text"
                    placeholder={
                      isArabic ? "اكتب اسمك بالكامل" : "Enter your full name"
                    }
                    value={formData.name}
                    onChange={(e) => handleChange("name", e.target.value)}
                    className={`w-full rounded-xl border border-border bg-muted/30 py-3.5 text-sm text-foreground outline-none transition placeholder:text-muted-foreground/70 focus:border-primary focus:ring-2 focus:ring-primary/10 ${
                      isArabic ? "pr-12 pl-4" : "pl-12 pr-4"
                    }`}
                  />
                </div>
              </div>

              {/* الجوال */}
              <div>
                <label
                  htmlFor="booking-phone"
                  className="mb-2 block text-sm font-bold text-foreground"
                >
                  {isArabic ? "رقم الجوال" : "Phone Number"}
                </label>

                <div className="relative">
                  <Phone
                    size={19}
                    className={`absolute top-1/2 -translate-y-1/2 text-muted-foreground ${
                      isArabic ? "right-4" : "left-4"
                    }`}
                  />

                  <input
                    id="booking-phone"
                    dir="ltr"
                    type="tel"
                    placeholder="+966 5xxxxxxxx"
                    value={formData.phone}
                    onChange={(e) => handleChange("phone", e.target.value)}
                    className={`w-full rounded-xl border border-border bg-muted/30 py-3.5 text-sm text-foreground outline-none transition placeholder:text-muted-foreground/70 focus:border-primary focus:ring-2 focus:ring-primary/10 ${
                      isArabic ? "pr-12 pl-4 text-right" : "pl-12 pr-4"
                    }`}
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
                  className="mb-2 block text-sm font-bold text-foreground"
                >
                  {isArabic ? "عدد المعتمرين" : "Number of Pilgrims"}
                </label>

                <div className="relative">
                  <Users
                    size={19}
                    className={`absolute top-1/2 -translate-y-1/2 text-muted-foreground ${
                      isArabic ? "right-4" : "left-4"
                    }`}
                  />

                  <input
                    id="booking-pilgrims"
                    min="1"
                    type="number"
                    placeholder={isArabic ? "عدد الأشخاص" : "Number of people"}
                    value={formData.pilgrims}
                    onChange={(e) => handleChange("pilgrims", e.target.value)}
                    className={`w-full rounded-xl border border-border bg-muted/30 py-3.5 text-sm text-foreground outline-none transition placeholder:text-muted-foreground/70 focus:border-primary focus:ring-2 focus:ring-primary/10 ${
                      isArabic ? "pr-12 pl-4" : "pl-12 pr-4"
                    }`}
                  />
                </div>
              </div>

              {/* المقاعد */}
              <div>
                <label
                  htmlFor="booking-seats"
                  className="mb-2 block text-sm font-bold text-foreground"
                >
                  {isArabic ? "عدد المقاعد في الباص" : "Bus Seats"}
                </label>

                <div className="relative">
                  <Bus
                    size={19}
                    className={`absolute top-1/2 -translate-y-1/2 text-muted-foreground ${
                      isArabic ? "right-4" : "left-4"
                    }`}
                  />

                  <input
                    id="booking-seats"
                    min="1"
                    type="number"
                    placeholder={isArabic ? "عدد المقاعد" : "Number of seats"}
                    value={formData.seats}
                    onChange={(e) => handleChange("seats", e.target.value)}
                    className={`w-full rounded-xl border border-border bg-muted/30 py-3.5 text-sm text-foreground outline-none transition placeholder:text-muted-foreground/70 focus:border-primary focus:ring-2 focus:ring-primary/10 ${
                      isArabic ? "pr-12 pl-4" : "pl-12 pr-4"
                    }`}
                  />
                </div>
              </div>
            </div>

            {/* ================= DATE ================= */}
            <div className="mt-5">
              <label
                htmlFor="booking-date"
                className="mb-2 block text-sm font-bold text-foreground"
              >
                {isArabic ? "التاريخ المفضل للرحلة" : "Preferred Travel Date"}
              </label>

              <div className="relative">
                <CalendarDays
                  size={19}
                  className={`absolute top-1/2 -translate-y-1/2 text-muted-foreground ${
                    isArabic ? "right-4" : "left-4"
                  }`}
                />

                <input
                  id="booking-date"
                  type="date"
                  value={formData.date}
                  onChange={(e) => handleChange("date", e.target.value)}
                  className={`w-full rounded-xl border border-border bg-muted/30 py-3.5 text-sm text-foreground outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/10 ${
                    isArabic ? "pr-12 pl-4" : "pl-12 pr-4"
                  }`}
                />
              </div>
            </div>

            {/* ================= NOTES ================= */}
            <div className="mt-5">
              <label
                htmlFor="booking-notes"
                className="mb-2 block text-sm font-bold text-foreground"
              >
                {isArabic ? "ملاحظات إضافية" : "Additional Notes"}
              </label>

              <textarea
                id="booking-notes"
                rows={5}
                placeholder={
                  isArabic
                    ? "اكتب أي تفاصيل أو طلبات إضافية..."
                    : "Write any details or additional requests..."
                }
                value={formData.notes}
                onChange={(e) => handleChange("notes", e.target.value)}
                className="w-full resize-none rounded-xl border border-border bg-muted/30 px-4 py-3.5 text-sm text-foreground outline-none transition placeholder:text-muted-foreground/70 focus:border-primary focus:ring-2 focus:ring-primary/10"
              />
            </div>

            {/* ================= SUBMIT ================= */}
            <button
              type="submit"
              className="mt-7 flex min-h-14 w-full items-center justify-center gap-2 rounded-full bg-primary px-6 text-base font-black text-primary-foreground shadow-lg shadow-primary/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl active:translate-y-0"
            >
              {isArabic ? "إرسال طلب الحجز" : "Submit Booking Request"}
              <Send size={19} />
            </button>

            <p className="mt-4 text-center text-xs text-muted-foreground">
              {isArabic
                ? "جميع البيانات اختيارية، وسيتم فتح واتساب لإرسال طلب الحجز إلى فريقنا."
                : "All fields are optional. WhatsApp will open to send your booking request to our team."}
            </p>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
