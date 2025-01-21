"use client";

import { Card, CardBody, Skeleton } from "@heroui/react";

export default function StoreCardSkeleton() {
  return (
    <Card className="w-full">
      <CardBody className="p-0 flex flex-col sm:flex-row">
        <div className="relative w-full sm:w-1/2 h-[300px]">
          <Skeleton className="rounded-lg w-full h-full" />
        </div>
        <div className="flex-1 p-6 flex flex-col gap-4">
          <Skeleton className="rounded-lg w-3/5 h-8" />
          <div className="space-y-3">
            {[...Array(5)].map((_, index) => (
              <div key={index} className="flex items-center gap-3">
                <Skeleton className="rounded-lg w-5 h-5" />
                <Skeleton className="rounded-lg w-32 h-6" />
              </div>
            ))}
          </div>
        </div>
      </CardBody>
    </Card>
  );
} 