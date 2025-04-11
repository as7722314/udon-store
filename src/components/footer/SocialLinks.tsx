import { ShoppingBag, Instagram, LucideIcon } from "lucide-react";
import { siteConfig } from "@/constants/store";
import type { SocialLinks } from "@/types/store";

type SocialMediaLink = {
  name: string;
  url: keyof SocialLinks;
  icon: LucideIcon;
};

const socialMediaLinks: SocialMediaLink[] = [
  {
    name: "外賣平台",
    url: "uber",
    icon: ShoppingBag,
  },
  {
    name: "Instagram",
    url: "instagram",
    icon: Instagram,
  },
];

export default function SocialLinks() {
  return (
    <div>
      <h3 className="text-2xl font-serif font-bold text-primary mb-4">
        社群媒體
      </h3>
      <div className="flex gap-4">
        {socialMediaLinks.map((link) => {
          const Icon = link.icon;
          return (
            <a
              key={link.name}
              href={siteConfig[link.url]}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.name}
              className="p-2 rounded-full bg-secondary text-white hover:bg-primary transition-colors"
            >
              <Icon className="w-6 h-6" />
            </a>
          );
        })}
      </div>
    </div>
  );
}
