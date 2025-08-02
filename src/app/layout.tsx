import type { Metadata } from "next";
import { Noto_Sans_JP, Shippori_Mincho } from "next/font/google";
import "./globals.css";
import ClientBody from "./ClientBody";
import Header from "./components/Header";
import FloatingMenu from "./components/FloatingMenu";
import FloatingCTA from "./components/FloatingCTA";
import Link from "next/link";
import Image from "next/image";

import nextConfig from "../../next.config.mjs";

const BASE_PATH = nextConfig.basePath || "";

const notoSansJP = Noto_Sans_JP({
  weight: ["400", "500", "700", "900"],
  variable: "--font-noto-sans-jp",
  subsets: ["latin"],
});

const notoSerif = Shippori_Mincho({
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-noto-serif",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "くすりの桃太郎 | オンライン診療・処方薬配送サービス",
  description: "くすりの桃太郎は、AGA治療、ピル処方、ED治療、花粉症、ニキビ治療など幅広い診療をオンラインで提供。医師による診察から処方薬の配送まで、安心・便利なオンライン医療サービスです。",
  keywords: "オンライン診療, 処方薬配送, AGA治療, ピル処方, ED治療, 花粉症, ニキビ治療, ダイエット漢方, くすりの桃太郎",
  icons: {
    icon: "https://momotaro-jp.com/images/logo_m.png",
    shortcut: "https://momotaro-jp.com/images/logo_m.png",
    apple: "https://momotaro-jp.com/images/logo_m.png",
  },
  openGraph: {
    title: "くすりの桃太郎 | オンライン診療・処方薬配送サービス",
    description: "くすりの桃太郎は、AGA治療、ピル処方、ED治療、花粉症、ニキビ治療など幅広い診療をオンラインで提供。医師による診察から処方薬の配送まで、安心・便利なオンライン医療サービスです。",
    type: "website",
    locale: "ja_JP",
    images: [
      {
        url: "https://momotaro-jp.com/images/ogp.png",
        width: 1200,
        height: 630,
        alt: "くすりの桃太郎 - オンライン診療・処方薬配送サービス",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "くすりの桃太郎 | オンライン診療・処方薬配送サービス",
    description: "くすりの桃太郎は、AGA治療、ピル処方、ED治療、花粉症、ニキビ治療など幅広い診療をオンラインで提供。医師による診察から処方薬の配送まで、安心・便利なオンライン医療サービスです。",
    images: ["https://momotaro-jp.com/images/ogp.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={`${notoSansJP.variable} ${notoSerif.variable} overflow-x-hidden`}>
      <head>
      </head>
      <body suppressHydrationWarning className="antialiased">
        <ClientBody>
          {/* 全ページ共通のフローティング要素 */}
          <FloatingMenu />
          <FloatingCTA />
          
          <div className="min-h-screen bg-white">
            <main>{children}</main>
            
            {/* Footer - 全ページ共通 */}
            <footer className="bg-gray-900 text-white py-20">
              <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
                  <div>
                    <Image
                      src={`${BASE_PATH}/images/logo_white.png`}
                      alt="くすりの桃太郎"
                      width={120}
                      height={40}
                      className="mb-6 w-[200px] h-auto mx-auto md:mx-0"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold mb-4">診療メニュー</h4>
                    <ul className="space-y-2 text-sm">
                      <li><Link href="#" className="hover:text-blue-400">男性AGA</Link></li>
                      <li><Link href="#" className="hover:text-blue-400">ピル処方</Link></li>
                      <li><Link href="#" className="hover:text-blue-400">ED治療</Link></li>
                      <li><Link href="#" className="hover:text-blue-400">こころのお悩み</Link></li>
                      <li><Link href="#" className="hover:text-blue-400">女性AGA</Link></li>
                      <li><Link href="#" className="hover:text-blue-400">眠りのお悩み</Link></li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold mb-4">サービス</h4>
                    <ul className="space-y-2 text-sm">
                      <li><Link href="#" className="hover:text-blue-400">花粉症</Link></li>
                      <li><Link href="#" className="hover:text-blue-400">ニキビ治療</Link></li>
                      <li><Link href="#" className="hover:text-blue-400">ダイエット漢方</Link></li>
                      <li><Link href="#" className="hover:text-blue-400">高脂血症</Link></li>
                      <li><Link href="#" className="hover:text-blue-400">汗のお悩み</Link></li>
                      <li><Link href="#" className="hover:text-blue-400">まつ毛美容液</Link></li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold mb-4">企業情報</h4>
                    <ul className="space-y-2 text-sm">
                      <li><Link href="#" className="hover:text-blue-400">運営会社</Link></li>
                      <li><Link href="#" className="hover:text-blue-400">特定商取引法に基づく表示</Link></li>
                      <li><Link href="#" className="hover:text-blue-400">利用規約</Link></li>
                      <li><Link href="#" className="hover:text-blue-400">プライバシーポリシー</Link></li>
                      <li><Link href="#" className="hover:text-blue-400">お知らせ</Link></li>
                      <li><Link href="#" className="hover:text-blue-400">お問い合わせ</Link></li>
                    </ul>
                  </div>
                </div>
                <div className="border-t border-gray-700 pt-8 text-center text-sm text-gray-400">
                  <p>&copy; 2025 くすりの桃太郎. All rights reserved.</p>
                </div>
              </div>
            </footer>
          </div>
        </ClientBody>
      </body>
    </html>
  );
}
