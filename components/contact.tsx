"use client";

import { motion } from "framer-motion";

import { MessageCircle, Phone, Clock, MapPin } from "lucide-react";

import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa";

export default function Contact() {
  const contactMethods = [
    {
      icon: MessageCircle,
      title: "واتساب",
      description: "تواصل معنا فوراً",
      contact: "966563591198",
      link: "https://wa.me/966563591198",
    },
    {
      icon: Phone,
      title: "الهاتف",
      description: "اتصل بنا مباشرة",
      contact: "+966 56 359 1198",
      link: "tel:+966563591198",
    },
    {
      icon: Clock,
      title: "ساعات العمل",
      description: "نحن متواجدون دائماً",
      contact: "24/7",
      link: "#",
    },
    {
      icon: MapPin,
      title: "الموقع",
      description: "الرياض - السعودية",
      contact: "حي البطحاء",
      link: "#",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="contact" className="py-20 bg-secondary">
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
            تواصل <span className="text-primary">معنا</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            فريقنا المتخصص جاهز لمساعدتك في كل خطوة من خطوات رحلتك
          </p>
        </motion.div>

        {/* Contact Methods */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
        >
          {contactMethods.map((method, index) => {
            const Icon = method.icon;
            return (
              <motion.a
                key={index}
                href={method.link}
                target={method.link.startsWith("http") ? "_blank" : undefined}
                rel={
                  method.link.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                variants={itemVariants}
                className="bg-background rounded-2xl p-6 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-2 group"
              >
                <div className="bg-accent/20 w-16 h-16 rounded-full flex items-center justify-center mb-4 group-hover:bg-accent/30 transition-colors">
                  <Icon className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-1">
                  {method.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-2">
                  {method.description}
                </p>
                <p
                  dir={method.title === "الهاتف" ? "ltr" : undefined}
                  className="text-primary font-bold inline-block"
                >
                  {method.contact}
                </p>
              </motion.a>
            );
          })}
        </motion.div>

        {/* Map Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="bg-background rounded-2xl shadow-md overflow-hidden">
            <div className="p-6 pb-4 flex items-center gap-3">
              <div className="bg-accent/20 w-12 h-12 rounded-full flex items-center justify-center">
                <MapPin className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-foreground">
                  موقعنا على الخريطة
                </h3>
                <p className="text-sm text-muted-foreground">
                  حي البطحاء، الرياض، المملكة العربية السعودية
                </p>
              </div>
            </div>
            <div className="w-full h-[400px]">
              <iframe
                title="موقع الشيماء لخدمات العمرة والزوار - حي البطحاء، الرياض"
                src="https://www.google.com/maps?q=%D8%AD%D9%8A%20%D8%A7%D9%84%D8%A8%D8%B7%D8%AD%D8%A7%D8%8C%20%D8%A7%D9%84%D8%B1%D9%8A%D8%A7%D8%B6%D8%8C%20%D8%A7%D9%84%D9%85%D9%85%D9%84%D9%83%D8%A9%20%D8%A7%D9%84%D8%B9%D8%B1%D8%A8%D9%8A%D8%A9%20%D8%A7%D9%84%D8%B3%D8%B9%D9%88%D8%AF%D9%8A%D8%A9&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-3xl p-12 text-center"
        >
          <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            هل تريد بدء رحلتك الآن؟
          </h3>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            لا تتردد في التواصل معنا. سنقدم لك أفضل الخدمات والأسعار المنافسة
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a
              href="https://wa.me/966563591198?text=السلام%20عليكم%20أريد%20الاستفسار%20عن%20حجز%20عمرة"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-primary-foreground px-8 py-4 rounded-full font-bold hover:bg-primary/90 transition-all transform hover:scale-105 shadow-lg flex items-center gap-2"
            >
              <MessageCircle className="w-5 h-5" />
              احجز عبر الواتساب
            </a>
            <a
              href="tel:+966563591198"
              className="border-2 border-primary text-primary px-8 py-4 rounded-full font-bold hover:bg-primary hover:text-primary-foreground transition-all"
            >
              <Phone className="w-5 h-5 inline mr-2" />
              اتصل بنا
            </a>
          </div>
          <h4 className="text-xl font-bold text-[#2F2A25] mt-10 mb-5">
            تابعنا على منصات التواصل
          </h4>
          <div className="mt-8 flex justify-center items-center gap-5">
            {/* Instagram */}
            <a
              href="https://www.instagram.com/qafila_alsyhmaa_likedemati_mut"
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 rounded-full bg-white shadow-lg flex items-center justify-center hover:scale-110 transition-all duration-300"
            >
              <FaInstagram className="w-7 h-7 text-[#C58A2A]" />
            </a>

            {/* TikTok */}
            <a
              href="https://www.tiktok.com/@alshimaa_makah?_r=1&_t=ZS-97L5QAYAryS"
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 rounded-full bg-white shadow-lg flex items-center justify-center hover:scale-110 transition-all duration-300"
            >
              <FaTiktok className="w-6 h-6 text-[#C58A2A]" />
            </a>

            {/* Facebook */}
            <a
              href="https://www.facebook.com/share/1BgfTwUvr2/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 rounded-full bg-white shadow-lg flex items-center justify-center hover:scale-110 transition-all duration-300"
            >
              <FaFacebookF className="w-6 h-6 text-[#C58A2A]" />
            </a>
          </div>

          <p className="mt-4 text-center text-sm text-muted-foreground">
            تابعوا قافلة الشيماء على منصات التواصل الاجتماعي
          </p>
        </motion.div>

        {/* Footer Info */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-12 pt-8 border-t border-border text-center text-muted-foreground"
        >
          <p>© 2026 الشيماء لخدمات العمرة والزوار. جميع الحقوق محفوظة.</p>
          <p className="mt-2">
            رقم الجوال:{" "}
            <span dir="ltr" className="inline-block">
              +966 56 359 1198
            </span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
