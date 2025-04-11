import React from "react";
import { siteConfig, businessHours } from "@/constants/store";
import { MapPin, Instagram, ShoppingBag, LucideIcon } from "lucide-react";
import GoogleMapEmbed from "./GoogleMapEmbed";
import { BusinessHoursType } from "@/types/store";

/**
 * 樣式常數 - 集中管理所有樣式
 */
const STYLES = {
  container: "bg-blanchedalmond backdrop-blur-md rounded-lg p-6",
  title: "text-2xl font-serif font-bold text-primary mb-4",
  layout: "flex flex-col sm:flex-row gap-6",
  mapContainer: "w-full sm:w-1/2 h-[250px] rounded-lg overflow-hidden",
  infoContainer: "flex-1 space-y-4",
  contactItem: "flex items-center gap-3",
  contactIcon: "w-5 h-5 text-primary",
  contactLink: "hover:text-primary text-secondary transition-colors font-semibold",
  hoursSection: "mt-4 pt-4 border-t border-primary",
  hoursTitle: "font-bold text-primary mb-2",
  hoursContainer: "space-y-1 text-gray-700",
  weekdayLabel: "font-bold text-primary",
};

/**
 * 聯絡項目的類型定義
 */
interface ContactItemType {
  icon: LucideIcon;
  label: string;
  href: string;
}

/**
 * 店鋪資訊卡片的屬性介面
 */
interface StoreInfoCardProps {
  /** 自定義CSS類名 */
  className?: string;
  /** 是否顯示標題 */
  showTitle?: boolean;
}

/**
 * 店鋪資訊卡片組件
 */
export default function StoreInfoCard({
  className = "",
  showTitle = true,
}: StoreInfoCardProps): React.ReactElement {  /**
   * 聯絡方式項目配置
   */
  const contactItems: ContactItemType[] = [
    {
      icon: MapPin,
      label: siteConfig.address,
      href: siteConfig.googleMapUrl
    },
    {
      icon: Instagram,
      label: 'Instagram',
      href: siteConfig.instagram || '#'
    },
    {
      icon: ShoppingBag,
      label: 'Uber Eats',
      href: siteConfig.uber || '#'
    }
  ];

  /**
   * 營業時間的顯示配置
   */
  const weekdayLabels: Record<keyof BusinessHoursType, string> = {
    monday: '星期一',
    tuesday: '星期二',
    wednesday: '星期三',
    thursday: '星期四',
    friday: '星期五',
    saturday: '星期六',
    sunday: '星期日'
  };

  /**
   * 渲染標題
   */
  const renderTitle = (): React.ReactNode => {
    if (!showTitle) return null;
    return <h2 className={STYLES.title}>店鋪資訊</h2>;
  };

  /**
   * 渲染地圖
   */
  const renderMap = (): React.ReactElement => (
    <div className={STYLES.mapContainer}>
      <GoogleMapEmbed />
    </div>
  );

  /**
   * 渲染單個聯絡方式項目
   */
  const renderContactItem = ({ icon: Icon, label, href }: ContactItemType): React.ReactElement => (
    <div className={STYLES.contactItem} key={label}>
      <Icon className={STYLES.contactIcon} />
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={STYLES.contactLink}
      >
        {label}
      </a>
    </div>
  );

  /**
   * 渲染營業時間
   */
  const renderBusinessHours = (): React.ReactElement => (
    <div className={STYLES.hoursSection}>
      <h3 className={STYLES.hoursTitle}>營業時間</h3>
      <div className={STYLES.hoursContainer}>
        {(Object.keys(businessHours) as Array<keyof BusinessHoursType>).map(day => (
          <p key={day}>
            <span className={STYLES.weekdayLabel}>{weekdayLabels[day]}:</span>{' '}
            {businessHours[day]}
          </p>
        ))}
      </div>
    </div>
  );

  return (
    <div className={`${STYLES.container} ${className}`}>
      {renderTitle()}

      <div className={STYLES.layout}>
        {renderMap()}

        <div className={STYLES.infoContainer}>
          {/* 聯絡資訊 */}
          {contactItems.map(renderContactItem)}
          
          {/* 營業時間 */}
          {renderBusinessHours()}
        </div>
      </div>
    </div>
  );
}
