import BreadcrumbsNav from "@/components/breadcrumbs/Breadcrumbs";
import StoreCard from "@/components/location/StoreCard";
import { storeInfo } from "@/constants/store";

export default function LocationPage() {
  return (
    <main className="container mx-auto px-4">
      <BreadcrumbsNav />
      <div className="min-h-[calc(100vh-200px)] flex items-center justify-center">
        <div className="w-full max-w-4xl">
          <StoreCard storeInfo={storeInfo} />
        </div>
      </div>
    </main>
  );
}
