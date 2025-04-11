"use client";

import { Card, CardBody, CardHeader } from "@heroui/react";
import Image from "next/image";
import { FeatureItem } from "@/types/store";
import React from "react";

/**
 * 樣式常數 - 集中管理所有樣式
 */
const STYLES = {
  card: "w-full",
  header: "p-0",
  imageContainer: "relative w-full h-[200px]",
  image: "object-cover",
  body: "text-center bg-blanchedalmond",
  title: "text-xl font-serif font-bold text-primary mb-2",
  description: "text-gray-600 text-sm"
};

/**
 * 特色卡片組件屬性
 */
type FeatureCardProps = FeatureItem;

/**
 * 特色卡片組件
 * 顯示特色的標題、描述和圖片
 */
export default function FeatureCard({
  title,
  description,
  imageUrl,
}: FeatureCardProps): React.ReactElement {
  /**
   * 渲染卡片圖片區域
   */
  const renderImage = (): React.ReactElement => (
    <CardHeader className={STYLES.header}>
      <div className={STYLES.imageContainer}>
        <Image src={imageUrl} alt={title} fill className={STYLES.image} />
      </div>
    </CardHeader>
  );

  /**
   * 渲染卡片內容區域
   */
  const renderContent = (): React.ReactElement => (
    <CardBody className={STYLES.body}>
      <h3 className={STYLES.title}>
        {title}
      </h3>
      <p className={STYLES.description}>{description}</p>
    </CardBody>
  );

  return (
    <Card className={STYLES.card}>
      {renderImage()}
      {renderContent()}
    </Card>
  );
}
