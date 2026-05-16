import type { Metadata } from "next";
import { Playfair_Display, Be_Vietnam_Pro } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const playfair = Playfair_Display({
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-heading",
  display: "swap",
});

const beVietnam = Be_Vietnam_Pro({
  subsets: ["latin", "vietnamese"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Prestige Dental — Nha Khoa Thẩm Mỹ Cao Cấp",
    template: "%s | Prestige Dental",
  },
  description:
    "Prestige Dental — nha khoa cao cấp tại TP. Hồ Chí Minh, mang đến nụ cười hoàn hảo với công nghệ hiện đại và đội ngũ chuyên gia hàng đầu.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className={`${playfair.variable} ${beVietnam.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
