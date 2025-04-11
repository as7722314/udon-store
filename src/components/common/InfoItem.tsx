import { ReactNode } from "react";

interface InfoItemProps {
  icon: ReactNode;
  href?: string;
  text: string;
  external?: boolean;
}

export default function InfoItem({
  icon,
  href,
  text,
  external = false,
}: InfoItemProps) {
  const content = (
    <div className="flex items-center gap-2">
      {icon}
      <span
        className={`${
          href ? "hover:text-primary" : ""
        } font-semibold text-secondary transition-colors`}
      >
        {text}
      </span>
    </div>
  );

  if (href) {
    return (
      <a
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        className="block"
      >
        {content}
      </a>
    );
  }

  return content;
}
