"use client";

import { Card, CardBody, CardHeader } from "@nextui-org/react";
import Image from "next/image";

interface FeatureCardProps {
  title: string;
  description: string;
  imageUrl: string;
}

export default function FeatureCard({
  title,
  description,
  imageUrl,
}: FeatureCardProps) {
  return (
    <Card className="w-full">
      <CardHeader className="p-0">
        <div className="relative w-full h-[200px]">
          <Image src={imageUrl} alt={title} fill className="object-cover" />
        </div>
      </CardHeader>
      <CardBody className="text-center bg-blanchedalmond">
        <h3 className="text-xl font-serif font-bold text-primary mb-2">
          {title}
        </h3>
        <p className="text-gray-600">{description}</p>
      </CardBody>
    </Card>
  );
}
