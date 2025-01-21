"use client";

import { Card } from "@heroui/react";
import Image from "next/image";
import { useState } from "react";
import FoodModal from "./FoodModal";

interface FoodCardProps {
  id: number;
  name: string;
  price: number;
  description: string;
  imageUrl: string;
}

export default function FoodCard({
  id,
  name,
  price,
  description,
  imageUrl,
}: FoodCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Card
        isPressable
        className="relative group cursor-pointer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onPress={() => setIsModalOpen(true)}
      >
        <div className="relative w-full h-[200px]">
          <Image src={imageUrl} alt={name} fill className="object-cover" />
          {isHovered && (
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center transition-opacity">
              <span className="text-white text-lg font-bold px-4 py-2 rounded-full bg-primary/80">
                more
              </span>
            </div>
          )}
        </div>
        <div className="p-4 bg-blanchedalmond w-full">
          <div className="flex justify-between items-center">
            <h3 className="text-xl font-serif font-bold text-primary">
              {name}
            </h3>
            <span className="text-secondary font-bold">${price}</span>
          </div>
        </div>
      </Card>

      <FoodModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        food={{ id, name, price, description, imageUrl }}
      />
    </>
  );
}
