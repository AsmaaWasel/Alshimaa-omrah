"use client";

import { FaPhoneAlt } from "react-icons/fa";

export default function CallButton() {
  return (
    <a
      href="tel:+966563591198"
      aria-label="اتصل بنا"
      className="
        fixed
        bottom-24
        left-6
        z-[9999]
        w-16
        h-16
        rounded-full
        bg-[#C9A227]
        flex
        items-center
        justify-center
        shadow-2xl
        hover:scale-110
        hover:shadow-yellow-500/50
        transition-all
        duration-300
        animate-bounce
      "
    >
      <FaPhoneAlt className="text-white text-3xl" />
    </a>
  );
}
