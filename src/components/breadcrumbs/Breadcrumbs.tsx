"use client";

import { Breadcrumbs, BreadcrumbItem } from "@nextui-org/react";
import { usePathname } from "next/navigation";
import { Home, Newspaper, UtensilsCrossed, Info, MapPin } from "lucide-react";

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

  return (
    <Breadcrumbs
      className="py-2 px-4"
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
      {paths.map((path) => {
        const href = `/${path}`;
        const config = pathMap[path];
        return (
          <BreadcrumbItem key={href} href={href} startContent={config?.icon}>
            {config?.label || path}
          </BreadcrumbItem>
        );
      })}
    </Breadcrumbs>
  );
}
