"use client";

import BreadcrumbsNav from "@/components/breadcrumbs/Breadcrumbs";
import FoodTabs from "@/components/foods/FoodTabs";

export default function FoodsPage() {
  return (
    <main className="container mx-auto px-4">
      <BreadcrumbsNav />
      <FoodTabs />
    </main>
  );
}
