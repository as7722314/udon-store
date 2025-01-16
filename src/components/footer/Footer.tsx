"use client";

import { useMemo } from "react";
import StoreInfo from "./StoreInfo";
import QuickLinks from "./QuickLinks";
import SocialLinks from "./SocialLinks";

export default function Footer() {
  const currentYear = useMemo(() => new Date().getFullYear(), []);

  return (
    <footer className="bg-blanchedalmond/95 backdrop-blur-sm mt-16">
      <div className="container mx-auto px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:justify-items-center md:justify-items-start">
          <StoreInfo />
          <QuickLinks />
          <SocialLinks />
        </div>

        <div className="mt-8 pt-4 border-t border-primary/20 text-center text-sm text-gray-600">
          © {currentYear} 烏龍麵本店. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
