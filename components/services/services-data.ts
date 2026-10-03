import type { LucideIcon } from "lucide-react";
import { Megaphone, Monitor, Video } from "lucide-react";

export type ServiceCardTone = "coral" | "lavender" | "mint";

export type ServiceItem = {
  id: string;
  title: string;
  icon: LucideIcon;
  image: string;
  imageAlt: string;
  points: string[];
  tone: ServiceCardTone;
};

export const serviceItems: ServiceItem[] = [
  {
    id: "brand-outreach",
    title: "Brand Outreach & Campaigns",
    icon: Megaphone,
    image: "/assets/services/brand-outreach-megaphone.png",
    imageAlt: "Coral and white megaphone with campaign papers",
    points: [
      "IEC Activities",
      "Social Media Management",
      "Political PR",
      "Digital Marketing",
    ],
    tone: "coral",
  },
  {
    id: "digital-design",
    title: "Digital & Design",
    icon: Monitor,
    image: "/assets/services/digital-design-laptop.png",
    imageAlt: "Laptop and tablet showing a blue creative website design",
    points: [
      "Website Designing",
      "Graphic Designing",
      "Landing Pages / UI Support",
      "Brand Creatives",
    ],
    tone: "lavender",
  },
  {
    id: "production-shoots",
    title: "Production & Shoots",
    icon: Video,
    image: "/assets/services/production-camera.png",
    imageAlt: "Professional black camera with a large lens",
    points: [
      "Commercial Shoots",
      "Product / Brand Photography",
      "Reels & Shop Promotions",
      "Video Editing / Post Production",
    ],
    tone: "mint",
  },
];
