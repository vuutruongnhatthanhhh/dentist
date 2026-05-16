"use client";

import Image from "next/image";
import { useState } from "react";
import { MapPin, Phone, Mail, Clock, CheckCircle2, ArrowRight } from "lucide-react";

const IMG = {
  hero:   "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=1920&q=80&auto=format&fit=crop",
  clinic: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&q=80&auto=format&fit=crop",
};

const contactInfo = [
  {
    icon: <MapPin size={20} className="text-[#C4A35A]" />,
    title: "Địa Chỉ",
    lines: ["123 Nguyễn Huệ, Phường Bến Nghé", "Quận 1, TP. Hồ Chí Minh"],
  },
  {
    icon: <Phone size={20} className="text-[#C4A35A]" />,
    title: "Điện Thoại",
    lines: ["(028) 3812 3456", "Hotline: 0901 234 567"],
  },
  {
    icon: <Mail size={20} className="text-[#C4A35A]" />,
    title: "Email",
    lines: ["hello@prestige-dental.vn", "info@prestige-dental.vn"],
  },
  {
    icon: <Clock size={20} className="text-[#C4A35A]" />,
    title: "Giờ Làm Việc",
    lines: ["Thứ 2 – Thứ 6: 8:00 – 20:00", "Thứ 7 – Chủ Nhật: 8:00 – 17:00"],
  },
];

const serviceOptions = [
  "Tẩy Trắng Răng",
  "Implant Nha Khoa",
  "Bọc Răng Sứ Thẩm Mỹ",
  "Niềng Răng Invisalign",
  "Điều Trị Nha Chu",
  "Nhổ Răng Khôn",
  "Khám Tổng Quát",
  "Khác",
];

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", phone: "", email: "", service: "", message: "", time: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      {/* ── HERO ── */}
      <section className="relative h-[60vh] min-h-[480px] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image src={IMG.hero} alt="Liên hệ Prestige Dental" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-[#0C1B33]/80" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-20 w-full">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-8 bg-[#C4A35A]" />
            <span className="text-[#C4A35A] font-body text-xs tracking-[0.3em] uppercase">
              Kết Nối Với Chúng Tôi
            </span>
          </div>
          <h1 className="font-heading text-5xl lg:text-6xl text-white mb-4">Liên Hệ</h1>
          <p className="font-body text-white/60 text-lg max-w-xl">
            Đặt lịch tư vấn miễn phí hoặc gửi câu hỏi — chúng tôi luôn sẵn sàng lắng nghe.
          </p>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">

            {/* Left: Info */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-px w-8 bg-[#C4A35A]" />
                <span className="text-[#C4A35A] font-body text-xs tracking-[0.3em] uppercase">Thông Tin</span>
              </div>
              <h2 className="font-heading text-3xl lg:text-4xl text-[#0C1B33] mb-6">
                Chúng Tôi Ở Đây Để Giúp Bạn
              </h2>
              <p className="font-body text-[#6B7280] leading-relaxed mb-10">
                Hãy liên hệ để được tư vấn miễn phí. Đội ngũ bác sĩ chuyên khoa của chúng tôi luôn sẵn sàng đồng hành cùng bạn trên hành trình chinh phục nụ cười hoàn hảo.
              </p>

              <div className="space-y-8 mb-10">
                {contactInfo.map((info, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-10 h-10 bg-[#F7F3EC] rounded-sm flex items-center justify-center shrink-0">
                      {info.icon}
                    </div>
                    <div>
                      <div className="font-body text-xs text-[#C4A35A] uppercase tracking-wider mb-1">
                        {info.title}
                      </div>
                      {info.lines.map((line, j) => (
                        <div key={j} className="font-body text-[#2C2C2C] text-sm">{line}</div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div className="relative h-44 overflow-hidden">
                <Image src={IMG.clinic} alt="Prestige Dental" fill className="object-cover" />
                <div className="absolute inset-0 bg-[#0C1B33]/30" />
                <div className="absolute bottom-4 left-4 text-white font-heading text-lg">
                  Prestige Dental — Quận 1
                </div>
              </div>
            </div>

            {/* Right: Form */}
            <div className="lg:col-span-3">
              {submitted ? (
                <div className="h-full flex flex-col items-center justify-center text-center py-20 border border-[#EDE8DF]">
                  <div className="w-16 h-16 gold-gradient rounded-full flex items-center justify-center mb-6">
                    <CheckCircle2 size={32} className="text-white" />
                  </div>
                  <h3 className="font-heading text-3xl text-[#0C1B33] mb-4">Cảm ơn bạn!</h3>
                  <p className="font-body text-[#6B7280] max-w-sm leading-relaxed mb-8">
                    Chúng tôi đã nhận được thông tin của bạn. Đội ngũ tư vấn sẽ liên hệ lại trong vòng 30 phút.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="font-body text-sm text-[#C4A35A] hover:text-[#A88840] transition-colors underline underline-offset-4"
                  >
                    Gửi yêu cầu khác
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block font-body text-xs text-[#C4A35A] uppercase tracking-wider mb-2">
                        Họ &amp; Tên *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        placeholder="Nguyễn Văn A"
                        className="w-full border border-[#EDE8DF] px-4 py-3.5 font-body text-sm text-[#2C2C2C] placeholder:text-[#6B7280]/50 focus:outline-none focus:border-[#C4A35A] transition-colors bg-white"
                      />
                    </div>
                    <div>
                      <label className="block font-body text-xs text-[#C4A35A] uppercase tracking-wider mb-2">
                        Số Điện Thoại *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        required
                        placeholder="0901 234 567"
                        className="w-full border border-[#EDE8DF] px-4 py-3.5 font-body text-sm text-[#2C2C2C] placeholder:text-[#6B7280]/50 focus:outline-none focus:border-[#C4A35A] transition-colors bg-white"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block font-body text-xs text-[#C4A35A] uppercase tracking-wider mb-2">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="example@email.com"
                      className="w-full border border-[#EDE8DF] px-4 py-3.5 font-body text-sm text-[#2C2C2C] placeholder:text-[#6B7280]/50 focus:outline-none focus:border-[#C4A35A] transition-colors bg-white"
                    />
                  </div>

                  <div>
                    <label className="block font-body text-xs text-[#C4A35A] uppercase tracking-wider mb-2">
                      Dịch Vụ Quan Tâm
                    </label>
                    <select
                      name="service"
                      value={form.service}
                      onChange={handleChange}
                      className="w-full border border-[#EDE8DF] px-4 py-3.5 font-body text-sm text-[#2C2C2C] focus:outline-none focus:border-[#C4A35A] transition-colors bg-white appearance-none cursor-pointer"
                    >
                      <option value="">— Chọn dịch vụ —</option>
                      {serviceOptions.map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block font-body text-xs text-[#C4A35A] uppercase tracking-wider mb-2">
                      Thời Gian Mong Muốn
                    </label>
                    <input
                      type="text"
                      name="time"
                      value={form.time}
                      onChange={handleChange}
                      placeholder="VD: Thứ 3, 14:00 – 16:00"
                      className="w-full border border-[#EDE8DF] px-4 py-3.5 font-body text-sm text-[#2C2C2C] placeholder:text-[#6B7280]/50 focus:outline-none focus:border-[#C4A35A] transition-colors bg-white"
                    />
                  </div>

                  <div>
                    <label className="block font-body text-xs text-[#C4A35A] uppercase tracking-wider mb-2">
                      Tin Nhắn
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows={4}
                      placeholder="Mô tả tình trạng răng hoặc mong muốn của bạn..."
                      className="w-full border border-[#EDE8DF] px-4 py-3.5 font-body text-sm text-[#2C2C2C] placeholder:text-[#6B7280]/50 focus:outline-none focus:border-[#C4A35A] transition-colors bg-white resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full gold-gradient text-white font-body font-medium tracking-wider py-4 hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
                  >
                    Gửi Yêu Cầu Đặt Lịch
                    <ArrowRight size={16} />
                  </button>

                  <p className="font-body text-xs text-[#6B7280] text-center">
                    Chúng tôi sẽ phản hồi trong vòng 30 phút trong giờ làm việc.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── MAP ── */}
      <section className="bg-[#F7F3EC] py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-8 bg-[#C4A35A]" />
              <span className="text-[#C4A35A] font-body text-xs tracking-[0.3em] uppercase">
                Tìm Đường Đến Chúng Tôi
              </span>
              <div className="h-px w-8 bg-[#C4A35A]" />
            </div>
            <h2 className="font-heading text-4xl text-[#0C1B33]">Vị Trí Phòng Khám</h2>
          </div>

          <div className="relative h-[480px] overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.4867!2d106.7009!3d10.7769!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f4670702e31%3A0xa5777fb3a6e7e2b4!2sNguy%E1%BB%85n%20Hu%E1%BB%87%2C%20B%E1%BA%BFn%20Ngh%C3%A9%2C%20Qu%E1%BA%ADn%201%2C%20Th%C3%A0nh%20ph%E1%BB%91%20H%E1%BB%93%20Ch%C3%AD%20Minh!5e0!3m2!1svi!2svn!4v1700000000000!5m2!1svi!2svn"
              className="w-full h-full border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Prestige Dental Location"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            {[
              { label: "Xe Buýt", desc: "Tuyến 01, 03, 19, 36 — Trạm Nguyễn Huệ" },
              { label: "Bãi Đỗ Xe", desc: "Bãi đỗ xe 100 chỗ ngay trong tòa nhà" },
              { label: "Taxi / Grab", desc: "Đặt xe đến 123 Nguyễn Huệ, Quận 1" },
            ].map((item, i) => (
              <div key={i} className="bg-white p-6 border-l-2 border-[#C4A35A]">
                <div className="font-body text-xs text-[#C4A35A] uppercase tracking-wider mb-2">{item.label}</div>
                <p className="font-body text-sm text-[#6B7280]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── EMERGENCY ── */}
      <section className="bg-[#0C1B33] py-16">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl text-white mb-3">Cần Hỗ Trợ Khẩn Cấp?</h2>
          <p className="font-body text-white/60 mb-6">Đường dây hỗ trợ 24/7 — chúng tôi luôn ở đây cho bạn.</p>
          <a
            href="tel:0901234567"
            className="inline-flex items-center gap-3 gold-gradient text-white font-body font-medium tracking-wider text-lg px-10 py-4 hover:opacity-90 transition-opacity"
          >
            <Phone size={20} />
            Gọi Ngay: 0901 234 567
          </a>
        </div>
      </section>
    </>
  );
}
