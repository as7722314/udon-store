"use client";

import React from "react";
import { Tabs, Tab } from "@heroui/react";
import FoodCard from "./FoodCard";
import { foodData } from "@/constants/store";
import { Food } from "@/types/store";

/**
 * 樣式常數 - 集中管理所有樣式
 */
const STYLES = {
  container: "max-w-6xl mx-auto pt-2 px-4",
  foodGrid: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6",
  tabClassNames: {
    tabList: "bg-blanchedalmond p-0 items-center",
    cursor: "bg-primary",
    tab: "text-white h-10",
    tabContent: "group-data-[selected=true]:text-white",
  },
};

/**
 * FoodTabs 組件 - 顯示食品分類和項目的頁籤式介面
 */
export default function FoodTabs(): React.ReactElement {
  /**
   * 渲染特定分類的食品卡片列表
   * @param foods - 食品項目陣列
   * @returns 卡片網格元素
   */
  const renderFoodCards = (foods: Food[]): React.ReactElement => (
    <div className={STYLES.foodGrid}>
      {foods.map((food) => (
        <FoodCard
          key={food.id}
          id={food.id}
          name={food.name}
          price={food.price}
          description={food.description}
          imageUrl={food.imageUrl}
        />
      ))}
    </div>
  );

  /**
   * 渲染分類標籤頁
   * @returns 標籤頁元素陣列
   */
  const renderCategoryTabs = (): React.ReactElement[] => 
    Object.entries(foodData).map(([category, foods]) => (
      <Tab key={category} title={category}>
        {renderFoodCards(foods)}
      </Tab>
    ));

  return (
    <div className={STYLES.container}>
      <Tabs
        aria-label="食物分類"
        color="primary"
        variant="solid"
        classNames={STYLES.tabClassNames}
      >
        {renderCategoryTabs()}
      </Tabs>
    </div>
  );
}