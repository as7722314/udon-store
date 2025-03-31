import Link from "next/link";

export default function QuickLinks() {
  return (
    <div>
      <h3 className="text-2xl font-serif font-bold text-primary mb-4">
        網站導覽
      </h3>
      <div className="space-y-2">
        <div>
          <Link href="/news" className="hover:text-primary">
            最新消息
          </Link>
        </div>
        <div>
          <Link href="/foods" className="hover:text-primary">
            美味餐點
          </Link>
        </div>
        <div>
          <Link href="/about" className="hover:text-primary">
            關於我們
          </Link>
        </div>
      </div>
    </div>
  );
}
