"use client";

import { Breadcrumbs, BreadcrumbItem } from "@heroui/react";
import { usePathname } from "next/navigation";
import {
  Home,
  Newspaper,
  UtensilsCrossed,
  Info,
  MapPin,
} from "lucide-react";
import { newsData } from "@/constants/store";
import { newsCategories, NewsCategory } from "@/types/store";
import { ReactElement, ReactNode } from "react";

/**
 * 樣式常數
 */
const STYLES = {
  container: "max-w-6xl mx-auto py-2 px-4",
  item: [
    "text-sm data-[current=true]:text-xl",
    "font-serif",
    "text-white data-[current=true]:text-primary data-[current=true]:font-bold",
  ].join(" "),
  separator: "text-white/40",
  icon: {
    home: "w-4 h-4",
    path: "w-5 h-5",
  },
};

/**
 * 路徑配置接口
 */
interface PathConfig {
  label: string;
  icon: ReactNode;
}

/**
 * 處理後的路徑信息接口
 */
interface ProcessedPath {
  href: string;
  label: string;
  icon?: ReactNode;
}

/**
 * 路徑映射配置
 */
const pathMap: Record<string, PathConfig> = {
  news: {
    label: "最新消息",
    icon: <Newspaper className={STYLES.icon.path} />,
  },
  foods: {
    label: "美味餐點",
    icon: <UtensilsCrossed className={STYLES.icon.path} />,
  },
  about: {
    label: "關於我們",
    icon: <Info className={STYLES.icon.path} />,
  },
  location: {
    label: "店鋪位置",
    icon: <MapPin className={STYLES.icon.path} />,
  },
};

/**
 * 麵包屑導航組件
 */
export default function BreadcrumbsNav(): ReactElement {
  const pathname = usePathname();
  const paths = pathname.split("/").filter(Boolean);

  /**
   * 檢查是否為新聞詳情頁面
   */
  const isNewsDetail = (pathSegment: string, index: number): boolean => {
    return (
      index === paths.length - 1 &&
      paths[0] === "news" &&
      !isNaN(Number(pathSegment))
    );
  };

  /**
   * 從 ID 獲取新聞分類
   */
  const getNewsCategoryFromId = (newsId: string): string => {
    const id = parseInt(newsId);
    const newsItem = newsData.find((n) => n.id === id);
    const category = newsItem?.category || "new";
    return newsCategories[category as NewsCategory];
  };

  /**
   * 為標準頁面生成路徑配置
   */
  const generateStandardPath = (
    pathSegment: string,
    index: number
  ): ProcessedPath => {
    const href = `/${paths.slice(0, index + 1).join("/")}`;
    return {
      href,
      label: pathMap[pathSegment]?.label || pathSegment,
      icon: pathMap[pathSegment]?.icon,
    };
  };

  // 處理所有路徑段，包括新聞詳情頁的特殊處理
  const processedPaths: ProcessedPath[] = paths.map((path, index) => {
    if (isNewsDetail(path, index)) {
      return {
        href: `/news/${path}`,
        label: getNewsCategoryFromId(path),
      };
    }
    return generateStandardPath(path, index);
  });
  /**
   * 渲染首頁麵包屑項目
   */
  const renderHomeItem = (): ReactElement => (
    <BreadcrumbItem
      href="/"
      startContent={<Home className={STYLES.icon.home} />}
    >
      首頁
    </BreadcrumbItem>
  );

  /**
   * 渲染路徑麵包屑項目
   */
  const renderPathItems = (): ReactElement[] => {
    return processedPaths.map((path) => (
      <BreadcrumbItem key={path.href} href={path.href} startContent={path.icon}>
        {path.label}
      </BreadcrumbItem>
    ));
  };

  return (
    <Breadcrumbs
      className={STYLES.container}
      itemClasses={{
        item: STYLES.item,
        separator: STYLES.separator,
      }}
    >
      {renderHomeItem()}
      {renderPathItems()}
    </Breadcrumbs>
  );
}
