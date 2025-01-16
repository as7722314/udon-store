import BreadcrumbsNav from "@/components/breadcrumbs/Breadcrumbs";
import NewsCard from "@/components/news/NewsCard";
import { newsData } from "@/constants/store";

export default function NewsPage() {
  return (
    <main className="container mx-auto px-4">
      <BreadcrumbsNav />
      <div className="max-w-4xl mx-auto">
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