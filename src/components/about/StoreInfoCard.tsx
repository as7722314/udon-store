import { storeInfo, businessHours } from "@/constants/store";
import { MapPin, Instagram, ShoppingBag } from "lucide-react";
import GoogleMapEmbed from "./GoogleMapEmbed";

interface StoreInfoCardProps {
  className?: string;
  showTitle?: boolean;
}

export default function StoreInfoCard({
  className = "",
  showTitle = true,
}: StoreInfoCardProps) {
  return (
    <div
      className={`bg-blanchedalmond backdrop-blur-md rounded-lg p-6 ${className}`}
    >
      {showTitle && (
        <h2 className="text-2xl font-serif font-bold text-primary mb-4">
          店鋪資訊
        </h2>
      )}

      <div className="flex flex-col sm:flex-row gap-6">
        <div className="w-full sm:w-1/2 h-[250px] rounded-lg overflow-hidden">
          <GoogleMapEmbed />
        </div>

        <div className="flex-1 space-y-4">
          {/* 地址信息 */}
          <div className="flex items-center gap-3">
            <MapPin className="w-5 h-5 text-primary" />
            <a
              href={storeInfo.googleMapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary text-secondary transition-colors font-semibold"
            >
              {storeInfo.address}
            </a>
          </div>

          {/* 社交媒体链接 */}
          <div className="flex items-center gap-3">
            <Instagram className="w-5 h-5 text-primary" />
            <a
              href={storeInfo.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary text-secondary transition-colors font-semibold"
            >
              Instagram
            </a>
          </div>

          {/* Uber链接 */}
          <div className="flex items-center gap-3">
            <ShoppingBag className="w-5 h-5 text-primary" />
            <a
              href={storeInfo.uber}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary text-secondary transition-colors font-semibold"
            >
              Uber Eats
            </a>
          </div>

          {/* 营业时间 */}
          <div className="mt-4 pt-4 border-t border-primary">
            <h3 className="font-bold text-primary mb-2">營業時間</h3>
            <div className="space-y-1 text-gray-700">
              <p>
                <span className="font-bold text-primary">星期一:</span>{" "}
                {businessHours.monday}
              </p>
              <p>
                <span className="font-bold text-primary">星期二:</span>{" "}
                {businessHours.tuesday}
              </p>
              <p>
                <span className="font-bold text-primary">星期三:</span>{" "}
                {businessHours.wednesday}
              </p>
              <p>
                <span className="font-bold text-primary">星期四:</span>{" "}
                {businessHours.thursday}
              </p>
              <p>
                <span className="font-bold text-primary">星期五:</span>{" "}
                {businessHours.friday}
              </p>
              <p>
                <span className="font-bold text-primary">星期六:</span>{" "}
                {businessHours.saturday}
              </p>
              <p>
                <span className="font-bold text-primary">星期日:</span>{" "}
                {businessHours.sunday}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
