import { MapPin, Phone } from "lucide-react";
import { storeInfo } from "@/constants/store";

export default function StoreInfo() {
  return (
    <div>
      <h3 className="text-2xl font-serif font-bold text-primary mb-4">
        烏龍麵本店
      </h3>
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <Phone className="w-5 h-5 text-primary" />
          <a href={`tel:${storeInfo.phone}`} className="hover:text-primary">
            {storeInfo.phone}
          </a>
        </div>
        <div className="flex items-center gap-2">
          <MapPin className="w-5 h-5 text-primary" />
          <a
            href={storeInfo.googleMapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary"
          >
            {storeInfo.address}
          </a>
        </div>
      </div>
    </div>
  );
} 