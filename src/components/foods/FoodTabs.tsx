"use client";

import { Tabs, Tab } from "@heroui/react";
import FoodCard from "./FoodCard";
import { foodData } from "@/constants/store";

export default function FoodTabs() {
  return (
    <div className="max-w-6xl mx-auto pt-2 px-4">
      <Tabs
        aria-label="食物分類"
        color="primary"
        variant="solid"
        classNames={{
          tabList: "bg-blanchedalmond p-0 items-center",
          cursor: "bg-primary",
          tab: "text-white h-10",
          tabContent: "group-data-[selected=true]:text-white",
        }}
      >
        {Object.entries(foodData).map(([category, foods]) => (
          <Tab key={category} title={category}>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
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
          </Tab>
        ))}
      </Tabs>
    </div>
  );
} 