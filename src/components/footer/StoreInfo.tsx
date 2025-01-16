import { MapPin, Phone } from "lucide-react";
import { siteConfig } from "@/constants/store";

export default function StoreInfo() {
  return (
    <div>
      <h3 className="text-2xl font-serif font-bold text-primary mb-4">
        {siteConfig.name}
      </h3>
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <Phone className="w-5 h-5 text-primary" />
          <a href={`tel:${siteConfig.phone}`} className="hover:text-primary">
            {siteConfig.phone}
          </a>
        </div>
        <div className="flex items-center gap-2">
          <MapPin className="w-5 h-5 text-primary" />
          <a
            href={siteConfig.googleMapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary"
          >
            {siteConfig.address}
          </a>
        </div>
      </div>
    </div>
  );
} 