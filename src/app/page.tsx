import NewsCarousel from "@/components/home/NewsCarousel";
import { Metadata } from "next";
import { siteConfig } from "@/constants/store";

export const metadata: Metadata = {
  title: `${siteConfig.name} | 高雄日式烏龍麵專賣店`,
  description:
    "川杉食堂提供正宗日式烏龍麵與各式精緻餐點，使用新鮮食材與傳統手藝，帶給您最道地的日本風味體驗。",
  keywords: "川杉食堂, 日式料理, 烏龍麵, 高雄美食, 高雄餐廳, 日本料理",
  openGraph: {
    title: `${siteConfig.name} | 高雄日式烏龍麵專賣店`,
    description:
      "川杉食堂提供正宗日式烏龍麵與各式精緻餐點，使用新鮮食材與傳統手藝，帶給您最道地的日本風味體驗。",
    siteName: siteConfig.name,
    locale: "zh_TW",
    type: "website",
  },
};

export default function Home() {
  return (
    <main className="container mx-auto px-4">
      <div className="flex flex-col items-center justify-center my-6 p-6">
        <div className="w-full">
          <NewsCarousel />
        </div>
      </div>
    </main>
  );
}
