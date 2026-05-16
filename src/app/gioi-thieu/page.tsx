import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Heart, Eye, Target, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Giới Thiệu",
  description: "Tìm hiểu về Prestige Dental — hành trình 15 năm kiến tạo những nụ cười hoàn hảo tại TP. Hồ Chí Minh.",
};

const IMG = {
  hero:     "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=1920&q=80&auto=format&fit=crop",
  doctor:   "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=800&q=80&auto=format&fit=crop",
  corner:   "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=400&q=80&auto=format&fit=crop",
  g1:       "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&q=80&auto=format&fit=crop",
  g2:       "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&q=80&auto=format&fit=crop",
  g3:       "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=800&q=80&auto=format&fit=crop",
  g4:       "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=800&q=80&auto=format&fit=crop",
  g5:       "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800&q=80&auto=format&fit=crop",
  g6:       "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80&auto=format&fit=crop",
};

const values = [
  {
    icon: <Heart size={24} className="text-[#C4A35A]" />,
    title: "Tận Tâm",
    desc: "Mỗi bệnh nhân là một cá nhân đặc biệt. Chúng tôi lắng nghe, thấu hiểu và đặt lợi ích của bạn lên hàng đầu trong từng quyết định điều trị.",
  },
  {
    icon: <Eye size={24} className="text-[#C4A35A]" />,
    title: "Tinh Tế",
    desc: "Nghệ thuật nha khoa thẩm mỹ đòi hỏi sự tinh tế trong từng chi tiết. Chúng tôi không chỉ điều trị — chúng tôi kiến tạo tác phẩm nghệ thuật.",
  },
  {
    icon: <Target size={24} className="text-[#C4A35A]" />,
    title: "Xuất Sắc",
    desc: "Không ngừng nâng cao kỹ năng và cập nhật công nghệ mới nhất. Tiêu chuẩn của chúng tôi là sự xuất sắc — không chấp nhận điều gì kém hơn.",
  },
  {
    icon: <CheckCircle2 size={24} className="text-[#C4A35A]" />,
    title: "Tin Cậy",
    desc: "Minh bạch trong tư vấn, trung thực trong điều trị và cam kết chịu trách nhiệm với kết quả. Uy tín là tài sản quý giá nhất của chúng tôi.",
  },
];

const milestones = [
  { year: "2009", title: "Thành Lập", desc: "Prestige Dental ra đời với sứ mệnh nâng tầm tiêu chuẩn nha khoa Việt Nam." },
  { year: "2013", title: "Mở Rộng", desc: "Khai trương cơ sở thứ hai tại Quận 3, mở rộng đội ngũ lên 20 bác sĩ chuyên khoa." },
  { year: "2017", title: "Công Nghệ Mới", desc: "Đầu tư hệ thống 3D Scan và Digital Smile Design — đầu tiên tại miền Nam." },
  { year: "2021", title: "Chứng Nhận Quốc Tế", desc: "Đạt chứng nhận ISO 9001:2015, khẳng định tiêu chuẩn quốc tế trong toàn bộ quy trình." },
  { year: "2024", title: "Dẫn Đầu Thị Trường", desc: "Top 5 nha khoa uy tín nhất TP. HCM theo bình chọn của tạp chí Forbes Vietnam." },
];

const achievements = [
  { number: "20.000+", label: "Bệnh nhân đã điều trị" },
  { number: "15+", label: "Năm kinh nghiệm" },
  { number: "50+", label: "Giải thưởng danh giá" },
  { number: "30+", label: "Bác sĩ chuyên khoa" },
];

export default function AboutPage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="relative h-[60vh] min-h-[480px] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image src={IMG.hero} alt="Prestige Dental" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-[#0C1B33]/75" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-20 w-full">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-8 bg-[#C4A35A]" />
            <span className="text-[#C4A35A] font-body text-xs tracking-[0.3em] uppercase">
              Câu Chuyện Của Chúng Tôi
            </span>
          </div>
          <h1 className="font-heading text-5xl lg:text-6xl text-white mb-4">Giới Thiệu</h1>
          <p className="font-body text-white/60 text-lg max-w-xl">
            Hành trình 15 năm kiến tạo những nụ cười hoàn hảo và thay đổi cuộc sống.
          </p>
        </div>
      </section>

      {/* ── STORY ── */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Images */}
            <div className="relative">
              <div className="relative h-[520px] overflow-hidden">
                <Image src={IMG.doctor} alt="Bác sĩ Prestige Dental" fill className="object-cover" />
              </div>
              <div className="absolute -top-6 -right-6 w-48 h-48 overflow-hidden border-4 border-white shadow-xl">
                <Image src={IMG.corner} alt="Phòng khám hiện đại" fill className="object-cover" />
              </div>
            </div>

            {/* Text */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="h-px w-8 bg-[#C4A35A]" />
                <span className="text-[#C4A35A] font-body text-xs tracking-[0.3em] uppercase">
                  Câu Chuyện Của Chúng Tôi
                </span>
              </div>
              <h2 className="font-heading text-4xl lg:text-5xl text-[#0C1B33] mb-6 leading-tight">
                Được Thành Lập Từ{" "}
                <em className="not-italic text-[#C4A35A]">Đam Mê</em>
              </h2>
              <p className="font-body text-[#6B7280] leading-relaxed mb-5">
                Năm 2009, Prestige Dental được thành lập với một niềm tin đơn giản nhưng sâu sắc: mọi người đều xứng đáng có một nụ cười tự tin và đẹp đẽ. Khởi đầu từ một phòng khám nhỏ tại Quận 1, chúng tôi đã không ngừng phát triển để trở thành một trong những nha khoa thẩm mỹ hàng đầu TP. Hồ Chí Minh.
              </p>
              <p className="font-body text-[#6B7280] leading-relaxed mb-5">
                Với triết lý đặt bệnh nhân làm trung tâm, chúng tôi kết hợp giữa công nghệ tiên tiến nhất thế giới và sự chăm sóc cá nhân hóa sâu sắc. Mỗi ca điều trị là một cam kết — không chỉ về kết quả thẩm mỹ, mà còn về sức khỏe lâu dài và trải nghiệm thoải mái của bạn.
              </p>
              <p className="font-body text-[#6B7280] leading-relaxed mb-10">
                Hơn 20.000 nụ cười đã được kiến tạo tại đây. Mỗi nụ cười là một câu chuyện, một sự thay đổi, và là niềm tự hào lớn nhất của chúng tôi.
              </p>

              <div className="grid grid-cols-2 gap-6 pt-8 border-t border-[#EDE8DF]">
                {achievements.map((a, i) => (
                  <div key={i}>
                    <div className="font-heading text-3xl text-[#C4A35A]">{a.number}</div>
                    <div className="font-body text-sm text-[#6B7280] mt-1">{a.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── MISSION ── */}
      <section className="bg-[#0C1B33] py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-8 bg-[#C4A35A]" />
            <span className="text-[#C4A35A] font-body text-xs tracking-[0.3em] uppercase">
              Tầm Nhìn & Sứ Mệnh
            </span>
            <div className="h-px w-8 bg-[#C4A35A]" />
          </div>
          <h2 className="font-heading text-4xl lg:text-5xl text-white mb-8">Sứ Mệnh Của Chúng Tôi</h2>
          <p className="font-heading italic text-white/70 text-xl lg:text-2xl max-w-3xl mx-auto leading-relaxed">
            &ldquo;Kiến tạo những nụ cười hoàn hảo không chỉ là công việc của chúng tôi — đó là sứ mệnh, là nghệ thuật, và là trái tim của mọi điều chúng tôi làm.&rdquo;
          </p>
        </div>
      </section>

      {/* ── VALUES ── */}
      <section className="bg-[#F7F3EC] py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-8 bg-[#C4A35A]" />
              <span className="text-[#C4A35A] font-body text-xs tracking-[0.3em] uppercase">
                Giá Trị Cốt Lõi
              </span>
              <div className="h-px w-8 bg-[#C4A35A]" />
            </div>
            <h2 className="font-heading text-4xl lg:text-5xl text-[#0C1B33]">
              Những Điều Chúng Tôi Tin
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((v, i) => (
              <div key={i} className="bg-white p-8 text-center group hover:shadow-lg transition-shadow">
                <div className="w-14 h-14 bg-[#F7F3EC] rounded-full flex items-center justify-center mx-auto mb-5 group-hover:bg-[#0C1B33] transition-colors duration-300">
                  {v.icon}
                </div>
                <h3 className="font-heading text-xl text-[#0C1B33] mb-3">{v.title}</h3>
                <p className="font-body text-[#6B7280] text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MILESTONES ── */}
      <section className="bg-white py-24">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-8 bg-[#C4A35A]" />
              <span className="text-[#C4A35A] font-body text-xs tracking-[0.3em] uppercase">
                Hành Trình Phát Triển
              </span>
              <div className="h-px w-8 bg-[#C4A35A]" />
            </div>
            <h2 className="font-heading text-4xl lg:text-5xl text-[#0C1B33]">
              Các Cột Mốc Quan Trọng
            </h2>
          </div>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-6 lg:left-1/2 top-0 bottom-0 w-px bg-[#EDE8DF]" />

            <div className="space-y-10">
              {milestones.map((m, i) => (
                <div key={i} className={`relative flex gap-10 lg:gap-0 ${i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"}`}>
                  {/* Dot */}
                  <div className="absolute left-6 lg:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-[#C4A35A] border-4 border-white shadow z-10 mt-1" />

                  {/* Content */}
                  <div className={`pl-16 lg:pl-0 w-full lg:w-1/2 ${i % 2 === 0 ? "lg:pr-16 lg:text-right" : "lg:pl-16"}`}>
                    <div className="font-heading text-4xl text-[#C4A35A]/25 mb-1 leading-none">{m.year}</div>
                    <h3 className="font-heading text-2xl text-[#0C1B33] mb-2">{m.title}</h3>
                    <p className="font-body text-[#6B7280] text-sm leading-relaxed">{m.desc}</p>
                  </div>

                  {/* Spacer for opposite side */}
                  <div className="hidden lg:block w-1/2" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── GALLERY ── */}
      <section className="bg-[#F7F3EC] py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-8 bg-[#C4A35A]" />
              <span className="text-[#C4A35A] font-body text-xs tracking-[0.3em] uppercase">
                Không Gian Phòng Khám
              </span>
              <div className="h-px w-8 bg-[#C4A35A]" />
            </div>
            <h2 className="font-heading text-4xl lg:text-5xl text-[#0C1B33]">
              Môi Trường Sang Trọng
            </h2>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
            {[IMG.g1, IMG.g2, IMG.g3, IMG.g4, IMG.g5, IMG.g6].map((src, i) => (
              <div
                key={i}
                className={`relative overflow-hidden ${
                  i === 0 ? "col-span-2 lg:col-span-1 h-[300px] lg:h-[420px]" : "h-[200px]"
                }`}
              >
                <Image
                  src={src}
                  alt={`Phòng khám ${i + 1}`}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-[#0C1B33] py-20">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="font-heading text-4xl text-white mb-4">Hãy Đến Và Trải Nghiệm</h2>
          <p className="font-body text-white/60 mb-8 text-lg">
            Đặt lịch tư vấn miễn phí để được gặp gỡ đội ngũ chuyên gia của chúng tôi.
          </p>
          <Link
            href="/lien-he"
            className="inline-flex items-center gap-2 gold-gradient text-white font-body font-medium tracking-wider px-10 py-4 hover:opacity-90 transition-opacity"
          >
            Đặt Lịch Ngay <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
