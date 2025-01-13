import BreadcrumbsNav from "@/components/breadcrumbs/Breadcrumbs";
import FeatureCard from "@/components/about/FeatureCard";
import { aboutInfo } from "@/constants/store";

export default function AboutPage() {
  return (
    <main className="container mx-auto px-4">
      <BreadcrumbsNav />
      <div className="max-w-4xl mx-auto">
        <div className="bg-blanchedalmond backdrop-blur-md rounded-lg p-6 mb-12">
          <h2 className="text-2xl font-serif font-bold text-primary mb-4">
            {aboutInfo.title}
          </h2>
          <p className="text-gray-700 whitespace-pre-line">
            {aboutInfo.description}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {aboutInfo.features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </main>
  );
}
