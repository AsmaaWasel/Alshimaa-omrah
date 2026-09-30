"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, Moon, Sun, X } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { useSitePreferences } from "./site-preferences";


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { locale, isDark, toggleLocale, toggleTheme } = useSitePreferences();
  const isArabic = locale === "ar";
  const links = isArabic
    ? [
        { label: "الرئيسية", href: "/" },
        { label: "عروض VIP", href: "/vip" },
        { label: "العروض الاقتصادية", href: "/economic" },
        { label: "الباصات", href: "/buses" },
        { label: "تواصل معنا", href: "/contact" },
      ]
    : [
        { label: "Home", href: "/" },
        { label: "VIP Offers", href: "/vip" },
        { label: "Economy", href: "/economic" },
        { label: "Buses", href: "/buses" },
        { label: "Contact", href: "/contact" },
      ];
  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/85 backdrop-blur-xl">
      <div className="mx-auto flex h-[82px] max-w-7xl items-center justify-between gap-6 px-6 lg:px-10">
        <Link
          href="/"
          className="flex items-center gap-3"
          onClick={() => setIsOpen(false)}
        >
          <div className="relative size-12 overflow-hidden rounded-full border-2 border-primary bg-card p-0.5">
            <Image
              src="/logo.jpg"
              alt="قافلة الشيماء"
              fill
              className="rounded-full object-cover"
            />
          </div>
          <div className="hidden sm:block">
            <p className="font-serif text-xl font-bold text-primary">
              قافلة الشيماء
            </p>
            <p className="text-xs text-muted-foreground">
              {isArabic
                ? "لخدمات المعتمرين والزوار"
                : "Umrah & visitor services"}
            </p>
          </div>
        </Link>
        <nav className="hidden items-center gap-7 lg:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-semibold text-muted-foreground transition hover:text-primary"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <button
            onClick={toggleLocale}
            className="rounded-full border border-border px-3 py-2 text-xs font-bold text-muted-foreground transition hover:border-primary hover:text-primary"
          >
            {isArabic ? "EN" : "عربي"}
          </button>
          <button
            aria-label={isDark ? "Light mode" : "Dark mode"}
            onClick={toggleTheme}
            className="rounded-full border border-border p-2 text-primary transition hover:bg-primary hover:text-primary-foreground"
          >
            {isDark ? <Sun className="size-4" /> : <Moon className="size-4" />}
          </button>
          <a
            href="https://wa.me/966563591198"
            target="_blank"
            rel="noreferrer"
            className="hidden items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-bold text-primary-foreground shadow-sm transition hover:-translate-y-0.5 lg:flex"
          >
            <FaWhatsapp />
            {isArabic ? "احجز عبر واتساب" : "Book on WhatsApp"}
          </a>
          <button
            type="button"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            onClick={() => setIsOpen(!isOpen)}
            className="rounded-full border border-border p-2 text-primary lg:hidden"
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>
      {isOpen && (
        <nav className="flex flex-col gap-1 border-t border-border bg-background px-6 py-4 lg:hidden">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="rounded-xl px-4 py-3 font-semibold text-muted-foreground hover:bg-muted hover:text-primary"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
