"use client";

import { useRouter } from "next/navigation";
import { useState, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { newsData } from "@/constants/store";
import NewsSlide from "./NewsSlide";

export default function NewsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const router = useRouter();

  // 只取最新的5則新聞
  const recentNews = newsData.slice(0, 5);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % recentNews.length);
  }, [recentNews.length]);

  const prevSlide = useCallback(() => {
    setCurrentIndex(
      (prev) => (prev - 1 + recentNews.length) % recentNews.length
    );
  }, [recentNews.length]);

  return (
    <div className="relative w-full max-w-6xl mx-auto h-[500px] overflow-hidden group">
      <div
        className="flex transition-transform duration-500 ease-out h-full"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {recentNews.map((news, index) => (
          <NewsSlide
            key={news.id}
            title={news.title}
            date={news.date}
            imageUrl={news.imageUrl}
            isActive={index === currentIndex}
            onClick={() => router.push(`/news/${news.id}`)}
          />
        ))}
      </div>

      {/* 導航按鈕 */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/30 p-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/50"
      >
        <ChevronLeft className="w-6 h-6 text-white" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/30 p-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/50"
      >
        <ChevronRight className="w-6 h-6 text-white" />
      </button>

      {/* 導航點 */}
      <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 flex gap-3">
        {recentNews.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? "bg-primary scale-100"
                : "bg-white/50 scale-75 hover:scale-90"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
