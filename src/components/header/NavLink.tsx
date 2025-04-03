"use client";

import { Link } from "@heroui/react";
import { LucideIcon } from "lucide-react";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  icon: LucideIcon;
}

const NavLink: React.FC<NavLinkProps> = ({ href, children, icon: Icon }) => {
  return (
    <Link
      href={href}
      className="font-serif font-bold text-white flex items-center gap-2 p-2 rounded hover:bg-blanchedalmond hover:text-primary transition-all duration-300"
    >
      <Icon size={20} />
      {children}
    </Link>
  );
};

export default NavLink;
