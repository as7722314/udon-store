"use client";

import { Card } from "@heroui/react";
import Image from "next/image";
import { useState } from "react";
import FoodModal from "./FoodModal";
import { Food } from "@/types/store";

/**
 * 樣式常數 - 集中管理所有樣式
 */
const STYLES = {
  card: "relative group cursor-pointer",
  imageContainer: "relative w-full h-[200px]",
  image: "object-cover",
  overlay:
    "absolute inset-0 bg-black/50 flex items-center justify-center transition-opacity",
  moreButton:
    "text-white text-lg font-bold px-4 py-2 rounded-full bg-primary/80",
  infoContainer: "p-4 bg-blanchedalmond w-full",
  infoWrapper: "flex justify-between items-center",
  title: "text-xl font-serif font-bold text-primary",
  price: "text-secondary font-bold",
};

/**
 * FoodCard 組件的屬性定義
 * 繼承 Food 型別的所有屬性
 */
type FoodCardProps = Food;

/**
 * 食品卡片組件
 * 顯示食品的基本信息，點擊後可查看詳情
 */
export default function FoodCard({
  id,
  name,
  price,
  description,
  imageUrl,
}: FoodCardProps) {
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  /**
   * 處理模態視窗的開啟和關閉
   */
  const handleModalToggle = (isOpen: boolean) => setIsModalOpen(isOpen);

  /**
   * 渲染食品圖片與懸停效果
   */
  const renderFoodImage = () => (
    <div className={STYLES.imageContainer}>
      <Image src={imageUrl} alt={name} fill className={STYLES.image} />
      {isHovered && (
        <div className={STYLES.overlay}>
          <span className={STYLES.moreButton}>more</span>
        </div>
      )}
    </div>
  );

  /**
   * 渲染食品卡片底部資訊
   */
  const renderFoodInfo = () => (
    <div className={STYLES.infoContainer}>
      <div className={STYLES.infoWrapper}>
        <h3 className={STYLES.title}>{name}</h3>
        <span className={STYLES.price}>${price}</span>
      </div>
    </div>
  );

  return (
    <>
      <Card
        isPressable
        className={STYLES.card}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onPress={() => handleModalToggle(true)}
      >
        {renderFoodImage()}
        {renderFoodInfo()}
      </Card>

      <FoodModal
        isOpen={isModalOpen}
        onClose={() => handleModalToggle(false)}
        food={{ id, name, price, description, imageUrl }}
      />
    </>
  );
}
