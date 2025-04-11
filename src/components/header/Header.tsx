"use client";

import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
} from "@heroui/react";
import { Newspaper, Info, UtensilsCrossed } from "lucide-react";
import { LucideIcon } from "lucide-react";
import Image from "next/image";
import NavLink from "./NavLink";
import { siteConfig } from "@/constants/store";

// 定義選單項目型別
interface MenuItem {
  href: string;
  icon: LucideIcon;
  label: string;
}

// 將選單項目提取為常數
const NAVIGATION_ITEMS: MenuItem[] = [
  { href: "/news", icon: Newspaper, label: "最新消息" },
  { href: "/foods", icon: UtensilsCrossed, label: "美味餐點" },
  { href: "/about", icon: Info, label: "關於我們" },
];

// 樣式常數
const STYLES = {
  navbar: "bg-primary",
  mobileToggle: "sm:hidden text-white",
  brand: "flex items-center gap-2",
  logo: "rounded-full me-2",
  logoText: "font-serif p-2 text-2xl font-bold text-blanchedalmond",
  desktopMenu: "hidden sm:flex gap-8",
  mobileMenu: "bg-primary/90 backdrop-blur-md flex flex-col gap-4 items-center pt-10",
};

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  // 渲染桌面版導航項目
  const renderDesktopMenuItems = () => (
    <NavbarContent className={STYLES.desktopMenu} justify="end">
      {NAVIGATION_ITEMS.map((item) => (
        <NavbarItem key={item.href}>
          <NavLink href={item.href} icon={item.icon}>
            {item.label}
          </NavLink>
        </NavbarItem>
      ))}
    </NavbarContent>
  );

  // 渲染行動版導航項目
  const renderMobileMenuItems = () => (
    <NavbarMenu className={STYLES.mobileMenu}>
      {NAVIGATION_ITEMS.map((item) => (
        <NavbarMenuItem key={item.href}>
          <NavLink href={item.href} icon={item.icon}>
            {item.label}
          </NavLink>
        </NavbarMenuItem>
      ))}
    </NavbarMenu>
  );

  // 渲染品牌區域
  const renderBrand = () => (
    <NavbarBrand className={STYLES.brand}>
      <Link href="/" className={STYLES.logoText}>
        <Image
          className={STYLES.logo}
          src="/logo/ka_wa_su_gi.svg"
          alt="川杉食堂"
          width={50}
          height={50}
        />
        {siteConfig.name}
      </Link>
    </NavbarBrand>
  );

  return (
    <Navbar
      maxWidth="full"
      className={STYLES.navbar}
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "關閉選單" : "開啟選單"}
          className={STYLES.mobileToggle}
        />
        {renderBrand()}
      </NavbarContent>

      {renderDesktopMenuItems()}
      {renderMobileMenuItems()}
    </Navbar>
  );
};

export default Header;
