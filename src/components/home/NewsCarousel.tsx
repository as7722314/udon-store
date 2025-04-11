"use client";

import { useRouter } from "next/navigation";
import { useState, useCallback, useEffect, ReactElement } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { newsData } from "@/constants/store";
import { NewsItem } from "@/types/store";
import NewsSlide from "./NewsSlide";

/**
 * 輪播相關常數配置
 */
const CAROUSEL_CONFIG = {
  MAX_NEWS_COUNT: 5,      // 最多顯示的新聞數量
  AUTO_PLAY_INTERVAL: 3000, // 自動播放間隔（毫秒）
};

/**
 * 組件樣式常數
 */
const STYLES = {
  container: "relative w-full max-w-6xl mx-auto h-[500px] overflow-hidden group carousel-container",
  slidesWrapper: "flex transition-transform duration-500 ease-out h-full",
  navButton: {
    base: "absolute top-1/2 -translate-y-1/2 bg-black/30 p-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/50",
    prev: "left-4",
    next: "right-4",
    icon: "w-6 h-6 text-white",
  },
  navDots: {
    container: "absolute -bottom-0 left-1/2 -translate-x-1/2 flex gap-3",
    dot: {
      base: "w-3 h-3 rounded-full transition-all duration-300",
      active: "bg-primary scale-100",
      inactive: "bg-white/50 scale-75 hover:scale-90",
    },
  },
};

/**
 * 新聞輪播組件
 */
export default function NewsCarousel(): ReactElement {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const router = useRouter();

  // 只取最新的新聞
  const recentNews: NewsItem[] = newsData.slice(0, CAROUSEL_CONFIG.MAX_NEWS_COUNT);
  /**
   * 切換到下一張幻燈片
   */
  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % recentNews.length);
  }, [recentNews.length]);

  /**
   * 切換到上一張幻燈片
   */
  const prevSlide = useCallback(() => {
    setCurrentIndex(
      (prev) => (prev - 1 + recentNews.length) % recentNews.length
    );
  }, [recentNews.length]);

  /**
   * 直接導航到指定幻燈片
   */
  const goToSlide = useCallback((index: number) => {
    setCurrentIndex(index);
  }, []);

  /**
   * 處理新聞項目點擊事件
   */
  const handleNewsClick = useCallback((newsId: number) => {
    router.push(`/news/${newsId}`);
  }, [router]);
  
  /**
   * 創建輪播定時器
   * @param callback 定時執行的回調函數
   * @returns 創建的定時器
   */
  const createCarouselTimer = useCallback((callback: () => void): NodeJS.Timeout => {
    return setInterval(callback, CAROUSEL_CONFIG.AUTO_PLAY_INTERVAL);
  }, []);

  /**
   * 自動輪播邏輯
   */
  useEffect(() => {
    let timer: NodeJS.Timeout | null = createCarouselTimer(nextSlide);    // 當用戶與輪播互動時（hover），暫停自動輪播
    const carousel = document.querySelector(".carousel-container");
    
    const pauseAutoplay = () => {
      if (timer) clearInterval(timer);
      timer = null;
    };
    
    const resumeAutoplay = () => {
      if (timer) clearInterval(timer);
      timer = createCarouselTimer(nextSlide);
    };

    /**
     * 添加事件監聽器，並返回移除函數
     * @param element 要添加事件的元素
     * @param events 事件與處理函數的映射
     * @returns 用於移除所有事件監聽器的清理函數
     */
    const setupEventListeners = (
      element: Element | null,
      events: Record<string, EventListener>
    ) => {
      if (!element) return () => {};
      
      // 添加所有事件監聽器
      Object.entries(events).forEach(([event, handler]) => {
        element.addEventListener(event, handler);
      });
      
      // 返回清理函數
      return () => {
        Object.entries(events).forEach(([event, handler]) => {
          element.removeEventListener(event, handler);
        });
      };
    };
    
    // 設置事件監聽器
    const removeListeners = setupEventListeners(carousel, {
      mouseenter: pauseAutoplay,
      mouseleave: resumeAutoplay
    });

    return () => {
      if (timer) clearInterval(timer);
      removeListeners();
    };
  }, [nextSlide, createCarouselTimer]);
  /**
   * 渲染輪播幻燈片
   */
  const renderSlides = () => (
    <div
      className={STYLES.slidesWrapper}
      style={{ transform: `translateX(-${currentIndex * 100}%)` }}
    >
      {recentNews.map((news, index) => (
        <NewsSlide
          key={news.id}
          title={news.title}
          date={news.date}
          imageUrl={news.imageUrl}
          isActive={index === currentIndex}
          onClick={() => handleNewsClick(news.id)}
        />
      ))}
    </div>
  );

  /**
   * 渲染導航按鈕
   */
  const renderNavigationButtons = () => (
    <>
      <button
        onClick={(e) => {
          e.stopPropagation();
          prevSlide();
        }}
        className={`${STYLES.navButton.base} ${STYLES.navButton.prev}`}
        aria-label="上一張"
      >
        <ChevronLeft className={STYLES.navButton.icon} />
      </button>
      <button
        onClick={(e) => {
          e.stopPropagation();
          nextSlide();
        }}
        className={`${STYLES.navButton.base} ${STYLES.navButton.next}`}
        aria-label="下一張"
      >
        <ChevronRight className={STYLES.navButton.icon} />
      </button>
    </>
  );

  /**
   * 渲染導航點
   */
  const renderNavigationDots = () => (
    <div className={STYLES.navDots.container}>
      {recentNews.map((_, index) => (
        <button
          key={index}
          onClick={(e) => {
            e.stopPropagation();
            goToSlide(index);
          }}
          className={`${STYLES.navDots.dot.base} ${
            index === currentIndex
              ? STYLES.navDots.dot.active
              : STYLES.navDots.dot.inactive
          }`}
          aria-label={`導航至第 ${index + 1} 張幻燈片`}
        />
      ))}
    </div>
  );

  return (
    <div className={STYLES.container}>
      {renderSlides()}
      {renderNavigationButtons()}
      {renderNavigationDots()}
    </div>
  );
}
