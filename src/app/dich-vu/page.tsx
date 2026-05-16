import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Clock, Star } from "lucide-react";

export const metadata: Metadata = {
  title: "Dịch Vụ",
  description: "Khám phá đầy đủ các dịch vụ nha khoa thẩm mỹ cao cấp tại Prestige Dental.",
};

const IMG = {
  hero:     "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=1920&q=80&auto=format&fit=crop&crop=top",
  tay:      "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=800&q=80&auto=format&fit=crop",
  implant:  "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800&q=80&auto=format&fit=crop",
  boc:      "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&q=80&auto=format&fit=crop",
  nieng:    "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=800&q=80&auto=format&fit=crop",
  nhachu:   "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&q=80&auto=format&fit=crop",
  nho:      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80&auto=format&fit=crop",
};

const services = [
  {
    id: "tay-trang",
    title: "Tẩy Trắng Răng",
    subtitle: "Zoom Whitening & Beyond",
    desc: "Công nghệ tẩy trắng Zoom Whitening thế hệ mới nhất, kết hợp ánh sáng LED kích hoạt gel tẩy trắng chuyên dụng. Kết quả nhanh chóng và bền lâu — răng sáng hơn đến 8 tông màu chỉ sau 60 phút.",
    img: IMG.tay,
    price: "Từ 3.500.000 đ",
    duration: "60 – 90 phút",
    features: [
      "Không đau, không ê buốt",
      "Kết quả ngay sau buổi đầu",
      "Bảo hành trắng 12 tháng",
      "Gel tẩy trắng mang về",
    ],
    rating: 4.9,
    reviews: 312,
  },
  {
    id: "implant",
    title: "Implant Nha Khoa",
    subtitle: "Straumann · Nobel Biocare",
    desc: "Phục hồi răng mất vĩnh viễn với implant titanium cao cấp nhập khẩu từ Thụy Sĩ và Mỹ. Quy trình được thực hiện bởi các bác sĩ đã đào tạo chuyên sâu về phẫu thuật implant tại châu Âu.",
    img: IMG.implant,
    price: "Từ 25.000.000 đ",
    duration: "3 – 6 tháng",
    features: [
      "Implant nhập khẩu Thụy Sĩ, Mỹ",
      "Bảo hành trọn đời implant",
      "CT-Scan chính xác 0.1mm",
      "Gây tê không đau hoàn toàn",
    ],
    rating: 4.9,
    reviews: 187,
  },
  {
    id: "boc-su",
    title: "Bọc Răng Sứ Thẩm Mỹ",
    subtitle: "Emax · Zirconia · Lumineers",
    desc: "Sứ thẩm mỹ cao cấp Emax và Zirconia với độ trong suốt tự nhiên, độ bền vượt trội. Sử dụng phần mềm DSD (Digital Smile Design) để mô phỏng kết quả trước khi thực hiện.",
    img: IMG.boc,
    price: "Từ 8.000.000 đ/răng",
    duration: "7 – 14 ngày",
    features: [
      "Sứ Emax & Zirconia cao cấp",
      "Mô phỏng nụ cười DSD trước",
      "Bảo hành 10 năm",
      "Màu sắc như răng thật",
    ],
    rating: 5.0,
    reviews: 268,
  },
  {
    id: "nieng-rang",
    title: "Niềng Răng Thẩm Mỹ",
    subtitle: "Invisalign · Clear Aligner",
    desc: "Niềng răng trong suốt Invisalign — giải pháp hoàn hảo cho người bận rộn và yêu cầu thẩm mỹ cao. Máng niềng tháo lắp, vô hình khi đeo, không ảnh hưởng đến sinh hoạt hàng ngày.",
    img: IMG.nieng,
    price: "Từ 45.000.000 đ",
    duration: "12 – 24 tháng",
    features: [
      "Invisalign chính hãng Mỹ",
      "Không kim loại, không đau",
      "Tháo ra khi ăn uống",
      "Theo dõi kết quả bằng app",
    ],
    rating: 4.8,
    reviews: 143,
  },
  {
    id: "nha-chu",
    title: "Điều Trị Nha Chu",
    subtitle: "Laser · Chuyên Sâu",
    desc: "Điều trị toàn diện các bệnh về nướu và xương ổ răng với công nghệ laser thế hệ mới. Không chảy máu, phục hồi nhanh, hiệu quả lâu dài — bảo vệ nền tảng sức khỏe răng miệng.",
    img: IMG.nhachu,
    price: "Từ 2.000.000 đ",
    duration: "1 – 3 buổi",
    features: [
      "Laser điều trị không đau",
      "Không cần phẫu thuật mổ hở",
      "Nướu hồng hào tự nhiên",
      "Hơi thở thơm thoáng",
    ],
    rating: 4.8,
    reviews: 94,
  },
  {
    id: "nho-rang",
    title: "Nhổ Răng Khôn",
    subtitle: "Phẫu Thuật Vô Cảm",
    desc: "Nhổ răng khôn mọc lệch, mọc ngầm với kỹ thuật phẫu thuật tối giản, giảm thiểu tối đa sang chấn. Bệnh nhân được gây tê hoàn toàn và theo dõi sau phẫu thuật chu đáo.",
    img: IMG.nho,
    price: "Từ 1.500.000 đ",
    duration: "30 – 60 phút",
    features: [
      "Gây tê không đau",
      "Kỹ thuật tối giản",
      "Lành thương nhanh",
      "Thuốc sau phẫu thuật miễn phí",
    ],
    rating: 4.9,
    reviews: 421,
  },
];

const process = [
  {
    step: "01",
    title: "Tư Vấn & Khám Tổng Quát",
    desc: "Bác sĩ lắng nghe mong muốn, kiểm tra tình trạng răng miệng và chụp X-quang/CT-Scan nếu cần.",
  },
  {
    step: "02",
    title: "Lập Kế Hoạch Điều Trị",
    desc: "Xây dựng phác đồ cá nhân hóa, mô phỏng kết quả với phần mềm DSD và báo giá minh bạch.",
  },
  {
    step: "03",
    title: "Thực Hiện Điều Trị",
    desc: "Tiến hành điều trị theo kế hoạch với công nghệ hiện đại và sự chăm sóc tận tâm.",
  },
  {
    step: "04",
    title: "Theo Dõi & Bảo Hành",
    desc: "Tái khám định kỳ, hỗ trợ 24/7 qua hotline và thực hiện cam kết bảo hành đầy đủ.",
  },
];

const faqs = [
  {
    q: "Chi phí tư vấn ban đầu là bao nhiêu?",
    a: "Buổi tư vấn và khám tổng quát ban đầu hoàn toàn miễn phí. Chúng tôi sẽ chụp X-quang, đánh giá tình trạng và lập kế hoạch điều trị chi tiết mà không tính phí.",
  },
  {
    q: "Các dịch vụ có được bảo hành không?",
    a: "Có. Tất cả dịch vụ đều có chính sách bảo hành rõ ràng: implant bảo hành trọn đời, răng sứ bảo hành 5–10 năm, tẩy trắng bảo hành 12 tháng.",
  },
  {
    q: "Tôi có thể trả góp không?",
    a: "Có. Chúng tôi hỗ trợ trả góp 0% lãi suất qua các ngân hàng đối tác như Techcombank, VPBank. Kỳ hạn lên đến 24 tháng.",
  },
  {
    q: "Điều trị có đau không?",
    a: "Chúng tôi sử dụng thuốc tê hiện đại và kỹ thuật gây tê không đau. Đội ngũ bác sĩ luôn đảm bảo bệnh nhân hoàn toàn thoải mái trong suốt quá trình điều trị.",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="relative h-[60vh] min-h-[480px] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image src={IMG.hero} alt="Dịch vụ Prestige Dental" fill className="object-cover object-top" priority />
          <div className="absolute inset-0 bg-[#0C1B33]/80" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-20 w-full">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-8 bg-[#C4A35A]" />
            <span className="text-[#C4A35A] font-body text-xs tracking-[0.3em] uppercase">
              Danh Mục Dịch Vụ
            </span>
          </div>
          <h1 className="font-heading text-5xl lg:text-6xl text-white mb-4">Dịch Vụ</h1>
          <p className="font-body text-white/60 text-lg max-w-xl">
            Giải pháp nha khoa toàn diện — từ thẩm mỹ đến phục hồi, tất cả ở tiêu chuẩn cao nhất.
          </p>
        </div>
      </section>

      {/* ── SERVICES LIST ── */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="space-y-24">
            {services.map((svc, i) => (
              <div
                key={svc.id}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center ${
                  i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
                }`}
              >
                {/* Image */}
                <div className="relative h-[420px] overflow-hidden">
                  <Image
                    src={svc.img}
                    alt={svc.title}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4 bg-[#0C1B33]/80 backdrop-blur-sm px-4 py-2">
                    <div className="flex items-center gap-1.5">
                      <Star size={12} className="text-[#C4A35A] fill-[#C4A35A]" />
                      <span className="text-white text-sm font-body font-medium">{svc.rating}</span>
                      <span className="text-white/50 text-xs font-body">({svc.reviews} đánh giá)</span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div>
                  <div className="text-[#C4A35A] font-body text-xs tracking-[0.25em] uppercase mb-2">
                    {svc.subtitle}
                  </div>
                  <h2 className="font-heading text-3xl lg:text-4xl text-[#0C1B33] mb-4">{svc.title}</h2>
                  <p className="font-body text-[#6B7280] leading-relaxed mb-6">{svc.desc}</p>

                  <ul className="space-y-3 mb-8">
                    {svc.features.map((f, j) => (
                      <li key={j} className="flex items-center gap-3">
                        <CheckCircle2 size={16} className="text-[#C4A35A] shrink-0" />
                        <span className="font-body text-sm text-[#2C2C2C]">{f}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex items-center gap-6 py-6 border-t border-b border-[#EDE8DF] mb-8">
                    <div>
                      <div className="text-[#C4A35A] font-body text-xs uppercase tracking-wider mb-1">Chi phí</div>
                      <div className="font-heading text-xl text-[#0C1B33]">{svc.price}</div>
                    </div>
                    <div className="w-px h-10 bg-[#EDE8DF]" />
                    <div className="flex items-center gap-2">
                      <Clock size={16} className="text-[#C4A35A]" />
                      <div>
                        <div className="text-[#C4A35A] font-body text-xs uppercase tracking-wider mb-1">Thời gian</div>
                        <div className="font-body text-sm text-[#2C2C2C]">{svc.duration}</div>
                      </div>
                    </div>
                  </div>

                  <Link
                    href="/lien-he"
                    className="inline-flex items-center gap-2 gold-gradient text-white font-body font-medium tracking-wider px-8 py-3.5 hover:opacity-90 transition-opacity"
                  >
                    Đặt Lịch Tư Vấn <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section className="bg-[#0C1B33] py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-8 bg-[#C4A35A]" />
              <span className="text-[#C4A35A] font-body text-xs tracking-[0.3em] uppercase">Quy Trình</span>
              <div className="h-px w-8 bg-[#C4A35A]" />
            </div>
            <h2 className="font-heading text-4xl lg:text-5xl text-white">
              Trải Nghiệm Điều Trị Tại Prestige
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((p, i) => (
              <div key={i} className="relative">
                {i < process.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full h-px bg-[#C4A35A]/20" />
                )}
                <div className="font-heading text-5xl text-[#C4A35A]/20 mb-4">{p.step}</div>
                <h3 className="font-heading text-xl text-white mb-3">{p.title}</h3>
                <p className="font-body text-white/50 text-sm leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="bg-[#F7F3EC] py-24">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-8 bg-[#C4A35A]" />
              <span className="text-[#C4A35A] font-body text-xs tracking-[0.3em] uppercase">
                Câu Hỏi Thường Gặp
              </span>
              <div className="h-px w-8 bg-[#C4A35A]" />
            </div>
            <h2 className="font-heading text-4xl text-[#0C1B33]">FAQ</h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white p-6 border-l-2 border-[#C4A35A]">
                <h4 className="font-heading text-lg text-[#0C1B33] mb-3">{faq.q}</h4>
                <p className="font-body text-[#6B7280] text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-[#0C1B33] py-20">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="font-heading text-4xl text-white mb-4">
            Không Biết Nên Chọn Dịch Vụ Nào?
          </h2>
          <p className="font-body text-white/60 mb-8 text-lg">
            Đặt lịch tư vấn miễn phí — bác sĩ sẽ giúp bạn chọn phác đồ phù hợp nhất.
          </p>
          <Link
            href="/lien-he"
            className="inline-flex items-center gap-2 gold-gradient text-white font-body font-medium tracking-wider px-10 py-4 hover:opacity-90 transition-opacity"
          >
            Tư Vấn Miễn Phí <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
