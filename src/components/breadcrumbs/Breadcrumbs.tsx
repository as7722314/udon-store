"use client";

import { Breadcrumbs, BreadcrumbItem } from "@heroui/react";
import { usePathname } from "next/navigation";
import { Home, Newspaper, UtensilsCrossed, Info, MapPin } from "lucide-react";
import { newsCategories, newsData } from "@/constants/store";

interface PathConfig {
  label: string;
  icon: React.ReactNode;
}

const pathMap: { [key: string]: PathConfig } = {
  news: {
    label: "最新消息",
    icon: <Newspaper className="w-5 h-5" />,
  },
  foods: {
    label: "美味餐點",
    icon: <UtensilsCrossed className="w-5 h-5" />,
  },
  about: {
    label: "關於我們",
    icon: <Info className="w-5 h-5" />,
  },
  location: {
    label: "店鋪位置",
    icon: <MapPin className="w-5 h-5" />,
  },
};

export default function BreadcrumbsNav() {
  const pathname = usePathname();
  const paths = pathname.split("/").filter(Boolean);

  // 處理新聞詳情頁的麵包屑
  const processedPaths = paths.map((path, index) => {
    if (
      index === paths.length - 1 &&
      paths[0] === "news" &&
      !isNaN(Number(path))
    ) {
      const newsItem = newsData.find((n) => n.id === parseInt(path));
      return {
        href: `/news/${path}`,
        label: newsCategories[newsItem?.category || "new"],
      };
    }
    return {
      href: `/${paths.slice(0, index + 1).join("/")}`,
      label: pathMap[path]?.label || path,
      icon: pathMap[path]?.icon,
    };
  });

  return (
    <Breadcrumbs
      className="max-w-6xl mx-auto py-2 px-4"
      itemClasses={{
        item: [
          "text-sm data-[current=true]:text-xl",
          "font-serif",
          "text-white data-[current=true]:text-primary data-[current=true]:font-bold",
        ].join(" "),
        separator: "text-white/40",
      }}
    >
      <BreadcrumbItem href="/" startContent={<Home className="w-4 h-4" />}>
        首頁
      </BreadcrumbItem>
      {processedPaths.map((path) => (
        <BreadcrumbItem
          key={path.href}
          href={path.href}
          startContent={path.icon}
        >
          {path.label}
        </BreadcrumbItem>
      ))}
    </Breadcrumbs>
  );
}
