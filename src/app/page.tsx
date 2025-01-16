import NewsCarousel from "@/components/home/NewsCarousel";
import { siteConfig } from "@/constants/store";

export default function Home() {
  return (
    <main className="container mx-auto px-4">
      <div className="flex flex-col items-center justify-center my-6 p-6">
        <div className="w-full">
          <NewsCarousel />
        </div>
      </div>
    </main>
  );
}
