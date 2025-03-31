import BreadcrumbsNav from "@/components/breadcrumbs/Breadcrumbs";
import { aboutInfo, storeInfo, businessHours } from "@/constants/store";
import { MapPin, Instagram, ShoppingBag } from "lucide-react";
import GoogleMapEmbed from "@/components/about/GoogleMapEmbed";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "關於川杉食堂 | 高雄日式烏龍麵專賣店",
  description:
    "川杉食堂創立於2020年，秉持著傳統日本烏龍麵的製作工藝，結合台灣在地食材，為顧客提供最道地的美味。位於高雄市新興區八德二路27號。",
  keywords: "川杉食堂, 日式料理, 烏龍麵, 高雄美食, 高雄餐廳",
  openGraph: {
    title: "關於川杉食堂 | 高雄日式烏龍麵專賣店",
    description:
      "川杉食堂創立於2020年，秉持著傳統日本烏龍麵的製作工藝，結合台灣在地食材，為顧客提供最道地的美味。",
    siteName: "川杉食堂",
    locale: "zh_TW",
    type: "website",
  },
};

export default function AboutPage() {
  return (
    <main className="container mx-auto px-4">
      <BreadcrumbsNav />
      <div className="max-w-4xl mx-auto">
        <div className="bg-blanchedalmond backdrop-blur-md rounded-lg p-6 my-6">
          <h2 className="text-2xl font-serif font-bold text-primary">
            {aboutInfo.title}
          </h2>
        </div>

        {/* 商店信息卡片 */}
        <div className="bg-blanchedalmond backdrop-blur-md rounded-lg p-6 my-6">
          <h2 className="text-2xl font-serif font-bold text-primary mb-4">
            店鋪資訊
          </h2>

          <div className="flex flex-col sm:flex-row gap-6">
            <div className="w-full sm:w-1/2 rounded-lg overflow-hidden">
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
                  className="hover:text-primary"
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
                  className="hover:text-primary"
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
                  className="hover:text-primary"
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
      </div>
    </main>
  );
}
