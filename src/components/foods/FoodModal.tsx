"use client";

import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
} from "@heroui/react";
import Image from "next/image";

// 使用專案中已定義的型別
import { Food } from "@/types/store";

/**
 * 樣式常數 - 集中管理所有樣式
 */
const STYLES = {
  container: "bg-blanchedalmond",
  header: "flex flex-col gap-1",
  title: "text-2xl font-serif text-primary",
  imageContainer: "relative w-full h-[250px] mb-4",
  image: "object-cover rounded-lg",
  description: "text-gray-600 whitespace-pre-line mb-4",
  price: "text-xl font-bold text-secondary",
  closeButton: "danger" as const,
};

/**
 * 食品詳情模態窗口的属性定義
 */
interface FoodModalProps {
  isOpen: boolean;
  onClose: () => void;
  food: Food;
}

/**
 * 食品詳情模態窗口
 * 顯示食品的詳細信息，包括圖片、描述和價格
 */
export default function FoodModal({ isOpen, onClose, food }: FoodModalProps) {
  /**
   * 渲染食品詳情內容
   */
  const renderFoodDetails = () => (
    <>
      <div className={STYLES.imageContainer}>
        <Image
          src={food.imageUrl}
          alt={food.name}
          fill
          className={STYLES.image}
        />
      </div>
      <p className={STYLES.description}>{food.description}</p>
      <div className={STYLES.price}>${food.price}</div>
    </>
  );

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="2xl">
      <ModalContent className={STYLES.container}>
        <ModalHeader className={STYLES.header}>
          <span className={STYLES.title}>{food.name}</span>
        </ModalHeader>
        <ModalBody>
          {renderFoodDetails()}
        </ModalBody>
        <ModalFooter>
          <Button color={STYLES.closeButton} variant="light" onPress={onClose}>
            關閉
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
