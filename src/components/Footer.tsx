import Link from "next/link";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0C1B33] text-white">
      {/* Top divider */}
      <div className="h-px gold-gradient" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full gold-gradient flex items-center justify-center flex-shrink-0">
                <span className="text-white font-heading font-bold text-lg">P</span>
              </div>
              <div>
                <div className="font-heading font-semibold text-lg">Prestige Dental</div>
                <div className="text-[#C4A35A] text-[10px] tracking-[0.2em] uppercase font-body">
                  Clinic
                </div>
              </div>
            </div>
            <p className="text-white/60 font-body text-sm leading-relaxed mb-6">
              Nha khoa thẩm mỹ cao cấp — nơi công nghệ tiên tiến gặp gỡ nghệ thuật kiến tạo nụ cười hoàn hảo.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="#"
                aria-label="Facebook"
                className="w-9 h-9 border border-white/20 rounded-full flex items-center justify-center hover:border-[#C4A35A] hover:text-[#C4A35A] transition-colors font-bold text-sm"
              >
                f
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="w-9 h-9 border border-white/20 rounded-full flex items-center justify-center hover:border-[#C4A35A] hover:text-[#C4A35A] transition-colors text-xs"
              >
                ig
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-heading text-[#C4A35A] text-sm tracking-widest uppercase mb-6">
              Điều Hướng
            </h4>
            <ul className="space-y-3">
              {[
                { href: "/", label: "Trang Chủ" },
                { href: "/gioi-thieu", label: "Giới Thiệu" },
                { href: "/dich-vu", label: "Dịch Vụ" },
                { href: "/lien-he", label: "Liên Hệ" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/60 hover:text-[#C4A35A] font-body text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading text-[#C4A35A] text-sm tracking-widest uppercase mb-6">
              Dịch Vụ
            </h4>
            <ul className="space-y-3">
              {[
                "Tẩy Trắng Răng",
                "Bọc Răng Sứ",
                "Implant Nha Khoa",
                "Niềng Răng Thẩm Mỹ",
                "Điều Trị Nha Chu",
                "Nhổ Răng Khôn",
              ].map((service) => (
                <li key={service}>
                  <Link
                    href="/dich-vu"
                    className="text-white/60 hover:text-[#C4A35A] font-body text-sm transition-colors"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading text-[#C4A35A] text-sm tracking-widest uppercase mb-6">
              Liên Hệ
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={15} className="text-[#C4A35A] flex-shrink-0 mt-0.5" />
                <span className="text-white/60 font-body text-sm leading-relaxed">
                  123 Nguyễn Huệ, Quận 1<br />TP. Hồ Chí Minh
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={15} className="text-[#C4A35A] flex-shrink-0" />
                <a href="tel:02838123456" className="text-white/60 hover:text-[#C4A35A] font-body text-sm transition-colors">
                  (028) 3812 3456
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={15} className="text-[#C4A35A] flex-shrink-0" />
                <a href="mailto:hello@prestige-dental.vn" className="text-white/60 hover:text-[#C4A35A] font-body text-sm transition-colors">
                  hello@prestige-dental.vn
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock size={15} className="text-[#C4A35A] flex-shrink-0 mt-0.5" />
                <div className="text-white/60 font-body text-sm leading-relaxed">
                  <div>Thứ 2 – Thứ 6: 8:00 – 20:00</div>
                  <div>Thứ 7 – CN: 8:00 – 17:00</div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/40 font-body text-xs">
            © 2025 Prestige Dental. Bảo lưu mọi quyền.
          </p>
          <p className="text-white/40 font-body text-xs">
            Thiết kế với sự tinh tế & đam mê
          </p>
        </div>
      </div>
    </footer>
  );
}
