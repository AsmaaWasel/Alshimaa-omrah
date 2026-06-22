"use client";

import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/966563591198?text=السلام%20عليكم%20أرغب%20في%20الاستفسار%20عن%20رحلات%20العمرة"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp"
      className="
        fixed
        bottom-6
        left-6
        z-[9999]
        w-16
        h-16
        rounded-full
        bg-[#25D366]
        flex
        items-center
        justify-center
        shadow-2xl
        hover:scale-110
        hover:shadow-green-500/50
        transition-all
        duration-300
        animate-bounce
      "
    >
      <FaWhatsapp className="text-white text-4xl" />
    </a>
  );
}
