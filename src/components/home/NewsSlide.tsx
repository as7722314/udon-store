"use client";

import Image from "next/image";
import React from "react";

/**
 * 樣式常數 - 集中管理所有樣式
 */
const STYLES = {
  container: "min-w-full h-full relative cursor-pointer",
  outerWrapper: "absolute inset-4",
  slideWrapper: "w-full h-full relative rounded-xl overflow-hidden transition-all duration-500",
  image: "object-cover transition-all duration-500",
  contentContainer: "absolute inset-0 flex items-center justify-center",
  content: "text-center transition-all duration-500",
  contentBox: "bg-blanchedalmond/50 backdrop-blur-sm rounded-lg p-4 mx-4 shadow-lg",
  title: "text-4xl font-serif font-bold text-primary mb-4",
  date: "text-secondary text-lg",
  
  // 狀態樣式
  active: {
    slide: "scale-100",
    image: "blur-0",
    content: "scale-100 opacity-100"
  },
  inactive: {
    slide: "scale-90",
    image: "blur-sm brightness-50",
    content: "scale-90 opacity-50"
  }
};

/**
 * NewsSlide 組件的屬性定義
 */
interface NewsSlideProps {
  title: string;
  date: string;
  imageUrl: string;
  isActive: boolean;
  onClick: () => void;
}

/**
 * 根據活動狀態獲取樣式類名
 * @param baseClassName 基礎類名
 * @param activeClass 活動狀態類名
 * @param inactiveClass 非活動狀態類名
 * @param isActive 是否活動狀態
 */
function getConditionalClass(
  baseClassName: string, 
  activeClass: string, 
  inactiveClass: string, 
  isActive: boolean
): string {
  return `${baseClassName} ${isActive ? activeClass : inactiveClass}`;
}

/**
 * 新聞輪播單張幻燈片組件
 */
export default function NewsSlide({
  title,
  date,
  imageUrl,
  isActive,
  onClick,
}: NewsSlideProps): React.ReactElement {
  /**
   * 渲染新聞圖片
   */
  const renderNewsImage = (): React.ReactElement => (
    <Image
      src={imageUrl}
      alt={title}
      fill
      priority
      className={getConditionalClass(
        STYLES.image,
        STYLES.active.image,
        STYLES.inactive.image,
        isActive
      )}
    />
  );
  
  /**
   * 渲染新聞內容
   */
  const renderNewsContent = (): React.ReactElement => (
    <div
      className={getConditionalClass(
        STYLES.content,
        STYLES.active.content,
        STYLES.inactive.content,
        isActive
      )}
    >
      <div className={STYLES.contentBox}>
        <h3 className={STYLES.title}>{title}</h3>
        <p className={STYLES.date}>{date}</p>
      </div>
    </div>
  );

  return (
    <div
      className={STYLES.container}
      onClick={onClick}
    >
      <div className={STYLES.outerWrapper}>
        <div
          className={getConditionalClass(
            STYLES.slideWrapper,
            STYLES.active.slide,
            STYLES.inactive.slide,
            isActive
          )}
        >
          {renderNewsImage()}
          <div className={STYLES.contentContainer}>
            {renderNewsContent()}
          </div>
        </div>
      </div>
    </div>
  );
}
