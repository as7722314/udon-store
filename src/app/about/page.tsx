import BreadcrumbsNav from "@/components/breadcrumbs/Breadcrumbs";
import { aboutInfo } from "@/constants/store";
import FeatureCard from "@/components/about/FeatureCard";
import StoreInfoCard from "@/components/about/StoreInfoCard";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "關於川杉食堂 | 高雄日式烏龍麵專賣店",
  description:
    "川杉食堂創立於2020年，秉持著傳統日本烏龍麵的製作工藝，結合台灣在地食材，為顧客提供最道地的美味。位於高雄市新興區八德二路27號。",
  keywords: "川杉食堂, 日式料理, 烏龍麵, 高雄美食, 高雄餐廳",
  openGraph: {
    title: "關於川杉食堂 | 高雄日式烏龍麵專賣店",
    description:
      "川杉食堂創立於2020年，秉持著傳統日本烏龍麵的製作工藝，結合台灣在地食材，為顧客提供最道地的美味。",
    url: "https://kawasugi.com/about",
    siteName: "川杉食堂",
    locale: "zh_TW",
    type: "website",
  },
};

export default function AboutPage() {
  return (
    <main className="container mx-auto px-4">
      <BreadcrumbsNav />
      <div className="max-w-4xl mx-auto">
        <div className="bg-blanchedalmond backdrop-blur-md rounded-lg p-6 my-6">
          <h2 className="text-2xl font-serif font-bold text-primary mb-4">
            {aboutInfo.title}
          </h2>
          <p className="text-gray-700 whitespace-pre-line">
            {aboutInfo.description}
          </p>
        </div>

        {/* 使用店鋪資訊組件 */}
        <StoreInfoCard className="my-6" />

        {/* 特色卡片 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-6">
          {aboutInfo.features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </main>
  );
}
