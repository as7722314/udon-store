import BreadcrumbsNav from "@/components/breadcrumbs/Breadcrumbs";
import NewsCard from "@/components/news/NewsCard";
import { newsData } from "@/constants/store";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "最新消息 | 川杉食堂",
  description:
    "了解川杉食堂的最新動態、活動資訊和營業公告。時刻掌握我們的特別優惠、季節限定餐點和重要通知。",
  keywords: "川杉食堂, 最新消息, 活動資訊, 優惠活動, 營業公告, 高雄餐廳",
  openGraph: {
    title: "最新消息 | 川杉食堂",
    description:
      "了解川杉食堂的最新動態、活動資訊和營業公告。時刻掌握我們的特別優惠、季節限定餐點和重要通知。",
    siteName: "川杉食堂",
    locale: "zh_TW",
    type: "website",
  },
};

export default function NewsPage() {
  return (
    <main className="container mx-auto px-4">
      <BreadcrumbsNav />
      <div className="max-w-6xl mx-auto pt-2 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {newsData.map((news) => (
            <NewsCard
              key={news.id}
              id={news.id}
              title={news.title}
              date={news.date}
              content={news.content}
              imageUrl={news.imageUrl}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
