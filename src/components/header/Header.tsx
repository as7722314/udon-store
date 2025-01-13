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
} from "@nextui-org/react";
import { Newspaper, Info, UtensilsCrossed, MapPin } from "lucide-react";
import NavLink from "./NavLink";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    { href: "/news", icon: Newspaper, label: "最新消息" },
    { href: "/foods", icon: UtensilsCrossed, label: "美味餐點" },
    { href: "/about", icon: Info, label: "關於我們" },
    { href: "/location", icon: MapPin, label: "店鋪位置" },
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
        <NavbarBrand>
          <Link
            href="/"
            className="font-serif p-2 text-2xl font-bold text-blanchedalmond hover:text-white transition-all duration-300"
          >
            烏龍麵
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
