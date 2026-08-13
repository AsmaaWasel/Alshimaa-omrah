"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const navLinks = [
  { label: "الرئيسية", href: "/" },
  { label: "عروض VIP", href: "/vip" },
  { label: "العروض الاقتصادية", href: "/economic" },
  { label: "الباصات", href: "/buses" },
  { label: "تواصل معنا", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header
      dir="rtl"
      className="sticky top-0 z-50 border-b border-[#514719] bg-[#202126]/95 backdrop-blur-md"
    >
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <div className="flex h-[90px] items-center justify-between">
          {/* ================= Logo ================= */}
          <Link
            href="/"
            className="flex shrink-0 items-center gap-3"
            onClick={() => setIsOpen(false)}
          >
            <div
              className="
      relative
      h-[60px]
      w-[60px]
      shrink-0
      overflow-hidden
      rounded-full
      border-2
      border-[#D4AF37]
      bg-[#202126]
      p-[3px]
      shadow-[0_0_12px_rgba(212,175,55,0.25)]
    "
            >
              <div className="relative h-full w-full overflow-hidden rounded-full">
                <Image
                  src="/logo.jpg"
                  alt="قافلة الشيماء"
                  fill
                  priority
                  className="object-cover"
                />
              </div>
            </div>

            <div className="hidden sm:block">
              <h1 className="text-[24px] font-bold tracking-wide text-white">
                قافلة الشيماء
              </h1>

              <p className="mt-1 text-[13px] text-[#DED8CA]">
                لخدمات المعتمرين والزوار
              </p>
            </div>
          </Link>

          {/* ================= Desktop Navigation ================= */}
          <nav className="hidden items-center gap-10 lg:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="
                  relative
                  py-2
                  text-[18px]
                  font-semibold
                  text-[#DED8CA]
                  transition-colors
                  duration-300
                  hover:text-[#D4AF37]

                  after:absolute
                  after:right-0
                  after:bottom-0
                  after:h-[2px]
                  after:w-0
                  after:bg-[#D4AF37]
                  after:transition-all
                  after:duration-300

                  hover:after:w-full
                "
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* ================= WhatsApp Desktop ================= */}
          <a
            href="https://wa.me/966563591198"
            target="_blank"
            rel="noopener noreferrer"
            className="
              hidden
              w-[220px]
              items-center
              justify-center
              gap-3
              bg-[#096B50]
              px-8
              py-4
              text-[17px]
              font-bold
              text-white
              transition-all
              duration-300
              hover:-translate-y-0.5
              hover:bg-[#075B44]
              lg:flex
            "
          >
            <FaWhatsapp size={25} />

            <span>احجز عبر واتساب</span>
          </a>

          {/* ================= Mobile Menu Button ================= */}
          <button
            type="button"
            aria-label={isOpen ? "إغلاق القائمة" : "فتح القائمة"}
            onClick={() => setIsOpen(!isOpen)}
            className="
              flex
              items-center
              justify-center
              p-2
              text-[#DED8CA]
              transition-colors
              hover:text-[#D4AF37]
              lg:hidden
            "
          >
            {isOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
          </button>
        </div>

        {/* ================= Mobile Navigation ================= */}
        {isOpen && (
          <div
            className="
              border-t
              border-[#514719]
              bg-[#202126]
              lg:hidden
            "
          >
            <nav className="flex flex-col py-4">
              {/* Mobile Links */}
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="
                    border-b
                    border-[#514719]/40
                    px-3
                    py-4
                    text-[18px]
                    font-semibold
                    text-[#DED8CA]
                    transition-colors
                    hover:bg-[#292A2F]
                    hover:text-[#D4AF37]
                  "
                >
                  {link.label}
                </Link>
              ))}

              {/* ================= Mobile WhatsApp ================= */}
              <a
                href="https://wa.me/966563591198"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="
                  mt-4
                  flex
                  w-full
                  items-center
                  justify-center
                  gap-3
                  bg-[#096B50]
                  px-6
                  py-4
                  text-[17px]
                  font-bold
                  text-white
                  transition-all
                  hover:bg-[#075B44]
                "
              >
                <FaWhatsapp size={25} />

                <span>احجز عبر واتساب</span>
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
