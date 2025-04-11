import Link from "next/link";

// 定義連結資料陣列，便於後續維護和擴展
const quickLinks = [
  { href: "/news", label: "最新消息" },
  { href: "/foods", label: "美味餐點" },
  { href: "/about", label: "關於我們" },
];

// 提取重複使用的樣式類別
const LINK_CLASS = "hover:text-primary font-semibold text-secondary transition-colors";

export default function QuickLinks() {
  return (
    <div>
      <h3 className="text-2xl font-serif font-bold text-primary mb-4">
        網站導覽
      </h3>
      <div className="space-y-2">
        {quickLinks.map((link) => (
          <div key={link.href}>
            <Link href={link.href} className={LINK_CLASS}>
              {link.label}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
