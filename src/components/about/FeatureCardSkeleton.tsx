"use client";

import { Card, CardBody, CardHeader, Skeleton } from "@heroui/react";

export default function FeatureCardSkeleton() {
  return (
    <Card className="w-full">
      <CardHeader className="p-0">
        <Skeleton className="rounded-lg w-full h-[200px]" />
      </CardHeader>
      <CardBody className="text-center bg-blanchedalmond">
        <Skeleton className="rounded-lg w-3/4 h-6 mx-auto mb-2" />
        <Skeleton className="rounded-lg w-full h-4" />
      </CardBody>
    </Card>
  );
} 