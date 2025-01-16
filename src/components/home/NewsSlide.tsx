"use client";

import Image from "next/image";

interface NewsSlideProps {
  title: string;
  date: string;
  imageUrl: string;
  isActive: boolean;
  onClick: () => void;
}

export default function NewsSlide({
  title,
  date,
  imageUrl,
  isActive,
  onClick,
}: NewsSlideProps) {
  return (
    <div
      className="min-w-full h-full relative cursor-pointer"
      onClick={onClick}
    >
      <div className="absolute inset-4">
        <div
          className={`w-full h-full relative rounded-xl overflow-hidden transition-all duration-500 ${
            isActive ? "scale-100" : "scale-90"
          }`}
        >
          <Image
            src={imageUrl}
            alt={title}
            fill
            priority
            className={`object-cover transition-all duration-500 ${
              isActive ? "blur-0" : "blur-sm brightness-50"
            }`}
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div
              className={`text-center transition-all duration-500 ${
                isActive ? "scale-100 opacity-100" : "scale-90 opacity-50"
              }`}
            >
              <div className="bg-blanchedalmond/50 backdrop-blur-sm rounded-lg p-4 mx-4 shadow-lg">
                <h3 className="text-4xl font-serif font-bold text-primary mb-4">
                  {title}
                </h3>
                <p className="text-secondary text-lg">{date}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
