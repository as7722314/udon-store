"use client";

import { Card, CardBody } from "@heroui/react";
import { Phone, Smartphone, Facebook, Instagram, MapPin } from "lucide-react";
import Image from "next/image";

interface StoreInfo {
  name: string;
  phone: string;
  mobile: string;
  facebook: string;
  instagram: string;
  address: string;
  googleMapUrl: string;
}

interface StoreCardProps {
  storeInfo: StoreInfo;
}

export default function StoreCard({ storeInfo }: StoreCardProps) {
  return (
    <Card className="w-full">
      <CardBody className="p-0 flex flex-col sm:flex-row bg-blanchedalmond">
        <div className="relative w-full sm:w-1/2 h-[300px]">
          <Image
            src="/fake/fake-store.jpg"
            alt={storeInfo.name}
            fill
            priority
            className="object-cover"
          />
        </div>
        <div className="flex-1 p-6 flex flex-col gap-4">
          <h2 className="text-2xl font-serif font-bold text-primary">
            {storeInfo.name}
          </h2>
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-primary" />
              <a href={`tel:${storeInfo.phone}`} className="hover:text-primary">
                {storeInfo.phone}
              </a>
            </div>
            <div className="flex items-center gap-3">
              <Smartphone className="w-5 h-5 text-primary" />
              <a
                href={`tel:${storeInfo.mobile}`}
                className="hover:text-primary"
              >
                {storeInfo.mobile}
              </a>
            </div>
            <div className="flex items-center gap-3">
              <Facebook className="w-5 h-5 text-primary" />
              <a
                href={storeInfo.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary"
              >
                Facebook
              </a>
            </div>
            <div className="flex items-center gap-3">
              <Instagram className="w-5 h-5 text-primary" />
              <a
                href={storeInfo.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary"
              >
                Instagram
              </a>
            </div>
            <div className="flex items-center gap-3 pt-4 border-t border-primary">
              <MapPin className="w-5 h-5 text-primary" />
              <a
                href={storeInfo.googleMapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary"
              >
                {storeInfo.address}
              </a>
            </div>
          </div>
        </div>
      </CardBody>
    </Card>
  );
}
