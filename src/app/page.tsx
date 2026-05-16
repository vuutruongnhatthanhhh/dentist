import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Star, Shield, Award, Sparkles, ChevronRight } from "lucide-react";

// Ảnh Unsplash đã xác minh hợp lệ
const IMG = {
  hero: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=1920&q=80&auto=format&fit=crop",
  service1: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=800&q=80&auto=format&fit=crop",
  service2: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=800&q=80&auto=format&fit=crop",
  service3: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800&q=80&auto=format&fit=crop",
  whyUs: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&q=80&auto=format&fit=crop",
  cta: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=1920&q=80&auto=format&fit=crop&crop=face",
  avatar1: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&q=80&auto=format&fit=crop&crop=face",
  avatar2: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&q=80&auto=format&fit=crop&crop=face",
  avatar3: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&q=80&auto=format&fit=crop&crop=face",
};

const stats = [
  { number: "15+", label: "Năm Kinh Nghiệm" },
  { number: "20.000+", label: "Bệnh Nhân Tin Tưởng" },
  { number: "98%", label: "Khách Hàng Hài Lòng" },
  { number: "50+", label: "Giải Thưởng Uy Tín" },
];

const services = [
  {
    title: "Tẩy Trắng Răng",
    desc: "Công nghệ Zoom Whitening tiên tiến, giúp răng sáng hơn đến 8 tông màu chỉ trong một buổi điều trị.",
    img: IMG.service1,
  },
  {
    title: "Implant Nha Khoa",
    desc: "Phục hồi răng mất vĩnh viễn với implant titanium cao cấp, chân thật như răng thật của bạn.",
    img: IMG.service2,
  },
  {
    title: "Bọc Răng Sứ Thẩm Mỹ",
    desc: "Sứ cao cấp Emax & Zirconia, tái tạo hình dáng và màu sắc hoàn hảo cho nụ cười rạng rỡ.",
    img: IMG.service3,
  },
];

const whyUs = [
  {
    icon: <Shield size={28} className="text-[#C4A35A]" />,
    title: "Công Nghệ Đỉnh Cao",
    desc: "Trang bị hệ thống máy móc 3D Scan, Laser nha khoa và phần mềm mô phỏng nụ cười DSD.",
  },
  {
    icon: <Award size={28} className="text-[#C4A35A]" />,
    title: "Chuyên Gia Hàng Đầu",
    desc: "Đội ngũ bác sĩ được đào tạo tại Mỹ, Pháp và Hàn Quốc với hơn 15 năm kinh nghiệm.",
  },
  {
    icon: <Sparkles size={28} className="text-[#C4A35A]" />,
    title: "Không Gian Sang Trọng",
    desc: "Phòng khám thiết kế theo tiêu chuẩn quốc tế, mang lại trải nghiệm thư giãn và đẳng cấp.",
  },
  {
    icon: <CheckCircle2 size={28} className="text-[#C4A35A]" />,
    title: "Bảo Hành Toàn Diện",
    desc: "Cam kết bảo hành lên đến 10 năm cho implant và 5 năm cho răng sứ thẩm mỹ.",
  },
];

const testimonials = [
  {
    name: "Nguyễn Minh Châu",
    role: "Giám đốc Doanh nghiệp",
    content:
      "Tôi đã đến nhiều phòng khám nha khoa nhưng Prestige Dental là nơi duy nhất khiến tôi cảm thấy thực sự được chăm sóc. Kết quả tẩy trắng vượt ngoài mong đợi.",
    rating: 5,
    avatar: IMG.avatar1,
  },
  {
    name: "Trần Thu Hà",
    role: "Người mẫu thời trang",
    content:
      "Răng sứ thẩm mỹ của Prestige Dental đẹp đến mức không thể phân biệt với răng thật. Đây là khoản đầu tư tốt nhất tôi từng thực hiện cho bản thân.",
    rating: 5,
    avatar: IMG.avatar2,
  },
  {
    name: "Lê Hoàng Nam",
    role: "Kiến trúc sư",
    content:
      "Implant tại đây hoàn toàn thay đổi cuộc sống của tôi. Từ quy trình tư vấn đến hậu phẫu, tất cả đều chuyên nghiệp và chu đáo.",
    rating: 5,
    avatar: IMG.avatar3,
  },
];

export default function HomePage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="relative min-h-screen flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src={IMG.hero}
            alt="Prestige Dental Clinic"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0C1B33]/92 via-[#0C1B33]/70 to-[#0C1B33]/20" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-24 pb-20">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-12 bg-[#C4A35A]" />
              <span className="text-[#C4A35A] font-body text-xs tracking-[0.3em] uppercase">
                Nha Khoa Thẩm Mỹ Cao Cấp
              </span>
            </div>

            <h1 className="font-heading text-5xl lg:text-7xl text-white leading-[1.1] mb-6">
              Nụ Cười{" "}
              <em className="not-italic text-[#C4A35A]">Hoàn Hảo</em>
              <br />
              Bắt Đầu Từ Đây
            </h1>

            <p className="font-body text-white/70 text-lg leading-relaxed mb-10 max-w-xl">
              Prestige Dental — nơi công nghệ tiên tiến và bàn tay nghệ nhân kết hợp để kiến tạo nụ cười đẹp nhất của bạn. Trải nghiệm chăm sóc nha khoa đẳng cấp quốc tế.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/lien-he"
                className="inline-flex items-center justify-center gap-2 gold-gradient text-white font-body font-medium tracking-wider px-8 py-4 hover:opacity-90 transition-opacity"
              >
                Đặt Lịch Tư Vấn
                <ArrowRight size={16} />
              </Link>
              <Link
                href="/dich-vu"
                className="inline-flex items-center justify-center gap-2 border border-white/30 text-white font-body font-medium tracking-wider px-8 py-4 hover:border-[#C4A35A] hover:text-[#C4A35A] transition-colors"
              >
                Khám Phá Dịch Vụ
                <ChevronRight size={16} />
              </Link>
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10">
          <div className="w-px h-12 bg-gradient-to-b from-[#C4A35A] to-transparent animate-pulse" />
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="bg-[#0C1B33] py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
            {stats.map((stat, i) => (
              <div key={i} className="text-center">
                <div className="font-heading text-4xl lg:text-5xl text-[#C4A35A] mb-2">
                  {stat.number}
                </div>
                <div className="font-body text-white/50 text-sm tracking-wider uppercase">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES PREVIEW ── */}
      <section className="bg-[#F7F3EC] py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-8 bg-[#C4A35A]" />
              <span className="text-[#C4A35A] font-body text-xs tracking-[0.3em] uppercase">Dịch Vụ</span>
              <div className="h-px w-8 bg-[#C4A35A]" />
            </div>
            <h2 className="font-heading text-4xl lg:text-5xl text-[#0C1B33] mb-4">
              Dịch Vụ Nổi Bật
            </h2>
            <p className="font-body text-[#6B7280] max-w-xl mx-auto leading-relaxed">
              Chúng tôi cung cấp đầy đủ các dịch vụ nha khoa thẩm mỹ, từ chăm sóc cơ bản đến điều trị phục hồi chuyên sâu.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((svc, i) => (
              <div key={i} className="group bg-white overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-500">
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={svc.img}
                    alt={svc.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0C1B33]/50 to-transparent" />
                </div>
                <div className="p-8">
                  <h3 className="font-heading text-xl text-[#0C1B33] mb-3">{svc.title}</h3>
                  <p className="font-body text-[#6B7280] text-sm leading-relaxed mb-6">{svc.desc}</p>
                  <Link
                    href="/dich-vu"
                    className="inline-flex items-center gap-2 text-[#C4A35A] font-body text-sm font-medium hover:gap-3 transition-all"
                  >
                    Tìm hiểu thêm <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/dich-vu"
              className="inline-flex items-center gap-2 border-2 border-[#0C1B33] text-[#0C1B33] font-body font-medium tracking-wider px-8 py-4 hover:bg-[#0C1B33] hover:text-white transition-colors"
            >
              Xem Tất Cả Dịch Vụ <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── WHY US ── */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="h-px w-8 bg-[#C4A35A]" />
                <span className="text-[#C4A35A] font-body text-xs tracking-[0.3em] uppercase">
                  Tại Sao Chọn Chúng Tôi
                </span>
              </div>
              <h2 className="font-heading text-4xl lg:text-5xl text-[#0C1B33] leading-tight mb-6">
                Tiêu Chuẩn{" "}
                <em className="not-italic text-[#C4A35A]">Vượt Trội</em>
                <br />
                Trong Từng Điều Trị
              </h2>
              <p className="font-body text-[#6B7280] leading-relaxed mb-10">
                Với hơn 15 năm kinh nghiệm, Prestige Dental tự hào là địa chỉ tin cậy của hàng nghìn khách hàng yêu cầu cao tại TP. Hồ Chí Minh.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {whyUs.map((item, i) => (
                  <div key={i} className="flex flex-col gap-3">
                    <div className="w-12 h-12 bg-[#F7F3EC] rounded-sm flex items-center justify-center">
                      {item.icon}
                    </div>
                    <h4 className="font-heading text-[#0C1B33] text-lg">{item.title}</h4>
                    <p className="font-body text-[#6B7280] text-sm leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative h-[600px]">
              <div className="absolute inset-0 overflow-hidden">
                <Image
                  src={IMG.whyUs}
                  alt="Phòng khám Prestige Dental"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-[#0C1B33] text-white p-6 shadow-2xl">
                <div className="font-heading text-3xl text-[#C4A35A] mb-1">ISO 9001</div>
                <div className="font-body text-xs text-white/60 tracking-wider uppercase">
                  Chứng nhận Quốc tế
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="bg-[#0C1B33] py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-8 bg-[#C4A35A]" />
              <span className="text-[#C4A35A] font-body text-xs tracking-[0.3em] uppercase">
                Khách Hàng Nói Gì
              </span>
              <div className="h-px w-8 bg-[#C4A35A]" />
            </div>
            <h2 className="font-heading text-4xl lg:text-5xl text-white">Câu Chuyện Thành Công</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-[#162847] p-8 relative">
                <div className="flex gap-1 mb-6">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} size={14} className="text-[#C4A35A] fill-[#C4A35A]" />
                  ))}
                </div>
                <p className="font-heading italic text-white/80 text-lg leading-relaxed mb-8">
                  &ldquo;{t.content}&rdquo;
                </p>
                <div className="flex items-center gap-4">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden shrink-0">
                    <Image src={t.avatar} alt={t.name} fill className="object-cover" />
                  </div>
                  <div>
                    <div className="font-body font-semibold text-white text-sm">{t.name}</div>
                    <div className="font-body text-[#C4A35A] text-xs">{t.role}</div>
                  </div>
                </div>
                <div className="absolute top-6 right-8 font-heading text-6xl text-[#C4A35A]/10 leading-none select-none">
                  &ldquo;
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={IMG.cta}
            alt="Nụ cười đẹp"
            fill
            className="object-cover object-top"
          />
          <div className="absolute inset-0 bg-[#0C1B33]/80" />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-8 bg-[#C4A35A]" />
            <span className="text-[#C4A35A] font-body text-xs tracking-[0.3em] uppercase">
              Bắt Đầu Hành Trình
            </span>
            <div className="h-px w-8 bg-[#C4A35A]" />
          </div>
          <h2 className="font-heading text-4xl lg:text-6xl text-white mb-6">
            Sẵn Sàng Để Có<br />
            <em className="not-italic text-[#C4A35A]">Nụ Cười Đẹp Nhất?</em>
          </h2>
          <p className="font-body text-white/70 text-lg mb-10 leading-relaxed">
            Đặt lịch tư vấn miễn phí ngay hôm nay. Bác sĩ của chúng tôi sẽ lắng nghe và đề xuất phác đồ điều trị phù hợp nhất cho bạn.
          </p>
          <Link
            href="/lien-he"
            className="inline-flex items-center gap-3 gold-gradient text-white font-body font-medium tracking-wider text-lg px-10 py-5 hover:opacity-90 transition-opacity"
          >
            Đặt Lịch Tư Vấn Miễn Phí
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </>
  );
}
