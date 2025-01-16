import BreadcrumbsNav from "@/components/breadcrumbs/Breadcrumbs";
import { newsData } from "@/constants/store";
import { Calendar } from "lucide-react";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Metadata } from "next";

export function generateStaticParams() {
  return newsData.map((news) => ({
    id: news.id.toString(),
  }));
}

type PageProps = {
  params: Promise<{ id: string }>;
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }>;
};

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { id } = await params;
  const news = newsData.find((n) => n.id === parseInt(id));

  if (!news) {
    return {
      title: "消息不存在",
      description: "找不到该消息内容",
    };
  }

  return {
    title: news.title,
    description: news.content.slice(0, 160), // 取前160个字符作为描述
    openGraph: {
      title: news.title,
      description: news.content.slice(0, 160),
      images: [
        {
          url: news.imageUrl,
          width: 1200,
          height: 630,
          alt: news.title,
        },
      ],
    },
  };
}

export default async function NewsDetailPage({ params }: PageProps) {
  const { id } = await params;
  const news = newsData.find((n) => n.id === parseInt(id));

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
