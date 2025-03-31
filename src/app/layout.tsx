import { Providers } from "./providers";
import Header from "@/components/header/Header";
import "./styles/globals.css";
import Footer from "@/components/footer/Footer";
import { siteConfig } from "@/constants/store";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: "川杉食堂, 日式料理, 烏龍麵, 高雄美食, 高雄餐廳",
  authors: [{ name: "川杉食堂" }],
  creator: "川杉食堂",
  publisher: "川杉食堂",
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  openGraph: {
    type: "website",
    locale: "zh_TW",
    siteName: siteConfig.name,
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-TW">
      <body
        suppressHydrationWarning
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)), url("/background.jpg")`,
        }}
        className="min-h-screen flex flex-col"
      >
        <Providers>
          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
