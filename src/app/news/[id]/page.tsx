import BreadcrumbsNav from "@/components/breadcrumbs/Breadcrumbs";
import { newsData } from "@/constants/store";
import { Calendar } from "lucide-react";
import Image from "next/image";
import { notFound } from "next/navigation";

export default async function NewsDetailPage({
  params,
}: {
  params: { id: string };
}) {
  await new Promise((resolve) => setTimeout(resolve, 100));

  const news = newsData.find((n) => n.id === parseInt(params.id));

  if (!news) {
    notFound();
  }

  return (
    <main className="container mx-auto px-4">
      <BreadcrumbsNav />
      <div className="max-w-4xl mx-auto">
        <div className="bg-blanchedalmond backdrop-blur-md rounded-lg overflow-hidden">
          <div className="relative w-full h-[300px]">
            <Image
              src={news.imageUrl}
              alt={news.title}
              fill
              className="object-cover"
            />
          </div>
          <div className="p-6">
            <h1 className="text-2xl font-serif font-bold text-primary mb-4">
              {news.title}
            </h1>
            <div className="flex items-center gap-2 mb-6">
              <Calendar className="w-5 h-5" />
              <span className="text-secondary">{news.date}</span>
            </div>
            <p className="text-gray-700 whitespace-pre-line">{news.content}</p>
          </div>
        </div>
      </div>
    </main>
  );
}
