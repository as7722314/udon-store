"use client";

import React from "react";

/**
 * Google 地圖嵌入配置常數
 */
const MAP_CONFIG = {
  // 川杉食堂的地圖嵌入網址
  EMBED_URL:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3682.4767024662788!2d120.29792847530227!3d22.636008479446613!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346e05006111bb8b%3A0x95d229b9484e23f5!2z5bed5p2J6aOf5aCC!5e0!3m2!1szh-TW!2stw!4v1743434133169!5m2!1szh-TW!2stw",
  REFERRER_POLICY: "no-referrer-when-downgrade" as const,
  LOADING: "lazy" as const,
};

/**
 * 樣式常數
 */
const STYLES = {
  container: "w-full h-full",
  iframe: {
    width: "100%",
    height: "100%",
    border: 0,
  },
};

/**
 * Google 地圖嵌入組件的屬性介面
 */
interface GoogleMapEmbedProps {
  /** 自定義 CSS 類名 */
  className?: string;
  /** 自定義地圖標題 (提升無障礙性) */
  title?: string;
}

/**
 * Google 地圖嵌入組件
 *
 * 用於顯示店鋪位置的谷歌地圖
 *
 * @param props - 組件屬性
 * @returns React元素
 */
const GoogleMapEmbed: React.FC<GoogleMapEmbedProps> = ({
  className = "",
  title = "川杉食堂地圖位置",
}) => {
  return (
    <div className={`${STYLES.container} ${className}`}>
      <iframe
        src={MAP_CONFIG.EMBED_URL}
        width={STYLES.iframe.width}
        height={STYLES.iframe.height}
        style={{ border: STYLES.iframe.border }}
        allowFullScreen
        loading={MAP_CONFIG.LOADING}
        referrerPolicy={MAP_CONFIG.REFERRER_POLICY}
        title={title}
        aria-label={title}
      />
    </div>
  );
};

export default GoogleMapEmbed;
