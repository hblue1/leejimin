import type { Metadata, Viewport } from "next";
import { Nanum_Gothic, Noto_Sans_KR, Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-roboto",
  display: "swap",
});

const nanum = Nanum_Gothic({
  weight: ["400", "700", "800"],
  subsets: ["latin"],
  variable: "--font-nanum",
  display: "swap",
});

const notoSansKr = Noto_Sans_KR({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-noto",
  display: "swap",
});

/** OG 이미지 등 절대 URL 기준 (basePath 는 Next 가 뒤에 붙인다) */
const SITE_ORIGIN = process.env.SITE_ORIGIN ?? "https://hblue1.github.io";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_ORIGIN),
  title: "Portfolio | Lee Ji Min",
  description: "Lee Ji Min — Design & Publishing Portfolio",
  // 이미지는 src/app/opengraph-image.jpg (파일 규칙으로 자동 연결)
  openGraph: {
    type: "website",
    siteName: "Lee Ji Min Portfolio",
    title: "Portfolio | Lee Ji Min",
    description: "Lee Ji Min — Design & Publishing Portfolio",
    locale: "ko_KR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfolio | Lee Ji Min",
    description: "Lee Ji Min — Design & Publishing Portfolio",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="ko"
      className={`${roboto.variable} ${nanum.variable} ${notoSansKr.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
