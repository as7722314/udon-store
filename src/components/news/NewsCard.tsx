"use client";

import { Card, CardBody, Button } from "@heroui/react";
import { Calendar } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { generateSummary } from "@/utils/textUtils";

interface NewsCardProps {
  id: number;
  title: string;
  date: string;
  content: string;
  imageUrl: string;
}

export default function NewsCard({
  id,
  title,
  date,
  content,
  imageUrl,
}: NewsCardProps) {
  const router = useRouter();
  const summary = generateSummary(content);

  return (
    <Card className="w-full">
      <CardBody className="p-0 flex flex-col">
        <div className="relative w-full h-[200px]">
          <Image src={imageUrl} alt={title} fill className="object-cover" />
        </div>
        <div className="p-4 bg-blanchedalmond flex-1">
          <h3 className="text-xl font-serif font-bold text-primary mb-2">
            {title}
          </h3>
          <div className="flex items-center gap-2 text-sm mb-3">
            <Calendar className="w-4 h-4" />
            <span className="text-secondary">{date}</span>
          </div>
          <p className="text-gray-600 line-clamp-2">{summary}</p>
        </div>
        <div className="p-3 bg-blanchedalmond border-t border-primary/20 flex justify-end">
          <Button
            color="primary"
            variant="ghost"
            onPress={() => router.push(`/news/${id}`)}
          >
            閱讀更多
          </Button>
        </div>
      </CardBody>
    </Card>
  );
}
