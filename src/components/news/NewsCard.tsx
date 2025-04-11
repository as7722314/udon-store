"use client";

import { Card, CardBody, Button } from "@heroui/react";
import { Calendar } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { generateSummary } from "@/utils/textUtils";
import { NewsItem } from "@/types/store";

/**
 * 樣式常數 - 集中管理所有樣式
 */
const STYLES = {
  card: "w-full",
  cardBody: "p-0 flex flex-col",
  imageContainer: "relative w-full h-[200px]",
  image: "object-cover",
  contentContainer: "p-4 bg-blanchedalmond flex-1",
  title: "text-xl font-serif font-bold text-primary mb-2",
  dateContainer: "flex items-center gap-2 text-sm mb-3",
  dateText: "text-secondary",
  summary: "text-gray-600 line-clamp-2",
  footer: "p-3 bg-blanchedalmond border-t border-primary/20 flex justify-end",
  readMoreButton: "primary" as const,
};

/**
 * NewsCard 組件的屬性定義
 * 使用專案中的 NewsItem 型別，但忽略 category 屬性
 */
type NewsCardProps = Omit<NewsItem, "category">;

/**
 * 新聞卡片組件
 * 顯示新聞的摘要資訊，點擊可查看詳情
 */
export default function NewsCard({
  id,
  title,
  date,
  content,
  imageUrl,
}: NewsCardProps) {
  const router = useRouter();
  const summary = generateSummary(content);
  /**
   * 導航到新聞詳情頁面
   */
  const navigateToDetail = () => router.push(`/news/${id}`);

  /**
   * 渲染新聞圖片
   */
  const renderNewsImage = () => (
    <div className={STYLES.imageContainer}>
      <Image src={imageUrl} alt={title} fill className={STYLES.image} />
    </div>
  );

  /**
   * 渲染發布日期
   */
  const renderDateInfo = () => (
    <div className={STYLES.dateContainer}>
      <Calendar className="w-4 h-4" />
      <span className={STYLES.dateText}>{date}</span>
    </div>
  );

  /**
   * 渲染新聞內容區域
   */
  const renderContent = () => (
    <div className={STYLES.contentContainer}>
      <h3 className={STYLES.title}>{title}</h3>
      {renderDateInfo()}
      <p className={STYLES.summary}>{summary}</p>
    </div>
  );

  /**
   * 渲染底部按鈕區域
   */
  const renderFooter = () => (
    <div className={STYLES.footer}>
      <Button
        color={STYLES.readMoreButton}
        variant="ghost"
        onPress={navigateToDetail}
      >
        閱讀更多
      </Button>
    </div>
  );

  return (
    <Card className={STYLES.card}>
      <CardBody className={STYLES.cardBody}>
        {renderNewsImage()}
        {renderContent()}
        {renderFooter()}
      </CardBody>
    </Card>
  );
}
