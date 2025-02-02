import { Facebook, Instagram } from "lucide-react";
import { storeInfo } from "@/constants/store";

export default function SocialLinks() {
  return (
    <div>
      <h3 className="text-2xl font-serif font-bold text-primary mb-4">
        社群媒體
      </h3>
      <div className="flex gap-4">
        <a
          href={storeInfo.facebook}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-full bg-primary text-white hover:bg-secondary transition-colors"
        >
          <Facebook className="w-6 h-6" />
        </a>
        <a
          href={storeInfo.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-full bg-primary text-white hover:bg-secondary transition-colors"
        >
          <Instagram className="w-6 h-6" />
        </a>
      </div>
    </div>
  );
} 