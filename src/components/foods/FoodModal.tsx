"use client";

import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
} from "@nextui-org/react";
import Image from "next/image";

interface Food {
  id: number;
  name: string;
  price: number;
  description: string;
  imageUrl: string;
}

interface FoodModalProps {
  isOpen: boolean;
  onClose: () => void;
  food: Food;
}

export default function FoodModal({ isOpen, onClose, food }: FoodModalProps) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} size="2xl">
      <ModalContent className="bg-blanchedalmond">
        <ModalHeader className="flex flex-col gap-1">
          <span className="text-2xl font-serif text-primary">{food.name}</span>
        </ModalHeader>
        <ModalBody>
          <div className="relative w-full h-[250px] mb-4">
            <Image
              src={food.imageUrl}
              alt={food.name}
              fill
              className="object-cover rounded-lg"
            />
          </div>
          <p className="text-gray-600 whitespace-pre-line mb-4">
            {food.description}
          </p>
          <div className="text-xl font-bold text-secondary">${food.price}</div>
        </ModalBody>
        <ModalFooter>
          <Button color="danger" variant="light" onPress={onClose}>
            關閉
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
