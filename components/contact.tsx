"use client";

import { motion } from "framer-motion";
import { MessageCircle, Phone, Mail, MapPin, Clock } from "lucide-react";

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
                <p className="text-primary font-bold">{method.contact}</p>
              </motion.a>
            );
          })}
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
          <p className="mt-2">رقم الجوال: +966 56 359 1198</p>
        </motion.div>
      </div>
    </section>
  );
}
