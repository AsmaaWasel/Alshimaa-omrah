'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: 'الرئيسة', href: '#hero' },
    { label: 'الباصات', href: '#buses' },
    { label: 'الفنادق', href: '#hotels' },
    { label: 'تواصل معنا', href: '#contact' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="#" className="flex items-center gap-3 group">
            <div className="relative w-12 h-12 overflow-hidden">
              <Image
                src="/logo.png"
                alt="الشيماء"
                fill
                className="object-contain"
              />
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl font-bold text-primary">الشيماء</h1>
              <p className="text-xs text-muted-foreground">خدمات العمرة والزوار</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                {link.label}
              </Link>
            ))}
            <a
              href="https://wa.me/966563591198"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-primary-foreground px-6 py-2 rounded-full hover:bg-primary/90 transition-all transform hover:scale-105 font-medium"
            >
              واتساب
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 hover:bg-secondary rounded-lg transition-colors"
          >
            {isOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 border-t border-border">
            <div className="flex flex-col gap-3 py-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-foreground hover:text-primary transition-colors px-3 py-2 font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <a
                href="https://wa.me/966563591198"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary text-primary-foreground px-4 py-2 rounded-full hover:bg-primary/90 transition-all font-medium text-center"
              >
                واتساب
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
