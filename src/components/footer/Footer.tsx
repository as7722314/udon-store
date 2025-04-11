"use client";

import { useMemo } from "react";
import StoreInfo from "./StoreInfo";
import QuickLinks from "./QuickLinks";
import SocialLinks from "./SocialLinks";
import CopyrightSection from "./CopyrightSection";

// 將常數抽出，便於集中管理
const FOOTER_STYLES = {
  container: "bg-blanchedalmond/95 backdrop-blur-sm mt-16",
  inner: "container mx-auto px-8 py-8",
  grid: "grid grid-cols-1 md:grid-cols-3 gap-8 lg:justify-items-center md:justify-items-start"
};

export default function Footer() {
  // 使用 useMemo 避免不必要的重複計算
  const currentYear = useMemo(() => new Date().getFullYear(), []);

  return (
    <footer className={FOOTER_STYLES.container} role="contentinfo">
      <div className={FOOTER_STYLES.inner}>
        <div className={FOOTER_STYLES.grid}>
          <StoreInfo />
          <QuickLinks />
          <SocialLinks />
        </div>

        <CopyrightSection year={currentYear} />
      </div>
    </footer>
  );
}
