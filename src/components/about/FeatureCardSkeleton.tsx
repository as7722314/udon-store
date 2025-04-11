"use client";

import { Card, CardBody, CardHeader, Skeleton } from "@heroui/react";
import React from "react";

/**
 * 樣式常數 - 集中管理所有樣式
 */
const STYLES = {
  card: "w-full",
  header: "p-0",
  skeleton: {
    image: "rounded-lg w-full h-[200px]",
    title: "rounded-lg w-3/4 h-6 mx-auto mb-2",
    description: "rounded-lg w-full h-4"
  },
  body: "text-center bg-blanchedalmond"
};

/**
 * 特色卡片的骨架屏組件
 * 用於數據加載過程中顯示占位內容
 */
export default function FeatureCardSkeleton(): React.ReactElement {
  /**
   * 渲染骨架屏圖片區域
   */
  const renderImageSkeleton = (): React.ReactElement => (
    <CardHeader className={STYLES.header}>
      <Skeleton className={STYLES.skeleton.image} />
    </CardHeader>
  );

  /**
   * 渲染骨架屏內容區域
   */
  const renderContentSkeleton = (): React.ReactElement => (
    <CardBody className={STYLES.body}>
      <Skeleton className={STYLES.skeleton.title} />
      <Skeleton className={STYLES.skeleton.description} />
    </CardBody>
  );

  return (
    <Card className={STYLES.card}>
      {renderImageSkeleton()}
      {renderContentSkeleton()}
    </Card>
  );
}