"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone } from "lucide-react";
import clsx from "clsx";

const navLinks = [
  { href: "/", label: "Trang Chủ" },
  { href: "/gioi-thieu", label: "Giới Thiệu" },
  { href: "/dich-vu", label: "Dịch Vụ" },
  { href: "/lien-he", label: "Liên Hệ" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const isTransparent = isHome && !scrolled;

  return (
    <header
      className={clsx(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isTransparent
          ? "bg-transparent"
          : "bg-[#0C1B33]/95 backdrop-blur-md shadow-lg shadow-black/20"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-full gold-gradient flex items-center justify-center flex-shrink-0">
              <span className="text-white font-heading font-bold text-lg">P</span>
            </div>
            <div className="leading-tight">
              <div className="text-white font-heading font-semibold text-lg tracking-wide group-hover:text-[#C4A35A] transition-colors">
                Prestige
              </div>
              <div className="text-[#C4A35A] text-[10px] tracking-[0.25em] uppercase font-body font-light">
                Dental Clinic
              </div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={clsx(
                  "relative font-body text-sm tracking-wider uppercase transition-colors duration-300 py-1",
                  "after:absolute after:bottom-0 after:left-0 after:h-px after:bg-[#C4A35A] after:transition-all after:duration-300",
                  pathname === link.href
                    ? "text-[#C4A35A] after:w-full"
                    : "text-white/80 hover:text-white after:w-0 hover:after:w-full"
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="tel:02838123456"
              className="flex items-center gap-2 text-[#C4A35A] font-body text-sm hover:text-[#D4B870] transition-colors"
            >
              <Phone size={14} />
              <span>(028) 3812 3456</span>
            </a>
            <Link
              href="/lien-he"
              className="gold-gradient text-white text-sm font-body font-medium tracking-wider px-6 py-2.5 rounded-sm hover:opacity-90 transition-opacity"
            >
              Đặt Lịch
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white p-2 hover:text-[#C4A35A] transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={clsx(
          "md:hidden bg-[#0C1B33] border-t border-white/10 overflow-hidden transition-all duration-300",
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="px-6 py-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={clsx(
                "font-body text-sm tracking-wider uppercase py-2 border-b border-white/10 transition-colors",
                pathname === link.href ? "text-[#C4A35A]" : "text-white/80 hover:text-white"
              )}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/lien-he"
            className="gold-gradient text-white text-sm font-body font-medium tracking-wider px-6 py-3 rounded-sm text-center mt-2"
          >
            Đặt Lịch Ngay
          </Link>
        </div>
      </div>
    </header>
  );
}
