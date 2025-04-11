import { MapPin, Phone, Clock, Mail, Instagram } from "lucide-react";
import { siteConfig } from "@/constants/store";
import InfoItem from "@/components/common/InfoItem";

export default function StoreInfo() {
  return (
    <div>
      <h3 className="text-2xl font-serif font-bold text-primary mb-4">
        {siteConfig.name}
      </h3>
      <div className="space-y-3">
        <InfoItem
          icon={<MapPin className="w-5 h-5 text-primary" />}
          href={siteConfig.googleMapUrl}
          text={siteConfig.address}
          external
        />
        <InfoItem
          icon={<Phone className="w-5 h-5 text-primary" />}
          href={`tel:${siteConfig.phone}`}
          text={siteConfig.phone}
        />
        <InfoItem
          icon={<Clock className="w-5 h-5 text-primary" />}
          text={siteConfig.openHours}
        />
        {siteConfig.email && (
          <InfoItem
            icon={<Mail className="w-5 h-5 text-primary" />}
            href={`mailto:${siteConfig.email}`}
            text={siteConfig.email}
          />
        )}
        {siteConfig.instagram && (
          <InfoItem
            icon={<Instagram className="w-5 h-5 text-primary" />}
            href={siteConfig.instagram}
            text="Instagram"
            external
          />
        )}
      </div>
    </div>
  );
}
