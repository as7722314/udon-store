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
import Image from "next/image";
import NavLink from "./NavLink";
import { siteConfig } from "@/constants/store";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    { href: "/news", icon: Newspaper, label: "最新消息" },
    { href: "/foods", icon: UtensilsCrossed, label: "美味餐點" },
    { href: "/about", icon: Info, label: "關於我們" },
  ];

  return (
    <Navbar
      maxWidth="full"
      className="bg-primary"
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "關閉選單" : "開啟選單"}
          className="sm:hidden text-white"
        />
        <NavbarBrand className="flex items-center gap-2">
          <Image
            src="/logo/ka_wa_su_gi.svg"
            alt="川杉食堂"
            width={50}
            height={50}
          />
          <Link
            href="/"
            className="font-serif p-2 text-2xl font-bold text-blanchedalmond hover:bg-blanchedalmond hover:text-primary transition-all duration-300"
          >
            {siteConfig.name}
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-8" justify="end">
        {menuItems.map((item) => (
          <NavbarItem key={item.href}>
            <NavLink href={item.href} icon={item.icon}>
              {item.label}
            </NavLink>
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarMenu className="bg-primary/90 backdrop-blur-md flex flex-col gap-4 items-center pt-10">
        {menuItems.map((item) => (
          <NavbarMenuItem key={item.href}>
            <NavLink href={item.href} icon={item.icon}>
              {item.label}
            </NavLink>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
};

export default Header;
