import type { IconType } from "react-icons";
import { FaBolt, FaChartSimple, FaEye, FaUsers } from "react-icons/fa6";

export type BenefitItem = {
  id: string;
  title: string;
  description: string;
  icon: IconType;
  tone: "coral" | "blue" | "lavender" | "cyan";
};

export type OutputItem = {
  id: string;
  title: string;
  description: string;
  image: string;
  alt: string;
};

export const benefitItems: BenefitItem[] = [
  {
    id: "strategic-campaign-support",
    title: "Strategic Campaign Support",
    description: "From concept to execution with clear goals.",
    icon: FaBolt,
    tone: "coral",
  },
  {
    id: "social-ready-content",
    title: "Social-Ready Content",
    description: "Reels, posts, and creatives built for engagement.",
    icon: FaEye,
    tone: "blue",
  },
  {
    id: "fast-turnaround",
    title: "Fast Turnaround",
    description: "High-quality delivery without the long wait.",
    icon: FaChartSimple,
    tone: "lavender",
  },
  {
    id: "end-to-end-delivery",
    title: "End-to-End Delivery",
    description: "From strategy and content to publishing and reporting.",
    icon: FaUsers,
    tone: "cyan",
  },
];

export const outputItems: OutputItem[] = [
  {
    id: "instagram-reels",
    title: "Instagram Reels",
    description: "Short form video",
    image: "/assets/hero/behind-the-scenes-reel.png",
    alt: "Behind-the-scenes creative production still",
  },
  {
    id: "social-media-posts",
    title: "Social Media Posts",
    description: "For all platforms",
    image: "/assets/selected-work/product-photography-headphones.png",
    alt: "Premium black headphones prepared for product photography",
  },
  {
    id: "website-banner",
    title: "Website Banner",
    description: "& Landing Page",
    image: "/assets/hero/website-design-preview.png",
    alt: "Creative studio website displayed on a laptop",
  },
  {
    id: "iec-campaign-collateral",
    title: "IEC Campaign Collateral",
    description: "Posters, Print & Digital",
    image: "/assets/selected-work/iec-campaign.png",
    alt: "Food and beauty products arranged for an integrated campaign",
  },
  {
    id: "digital-ads",
    title: "Digital Ads",
    description: "For Google, Meta & More",
    image: "/assets/selected-work/website-design-showcase.png",
    alt: "Responsive website design shown across a laptop and smartphone",
  },
  {
    id: "shop-promotions",
    title: "Shop Promotions",
    description: "In-store creatives & Reels",
    image: "/assets/selected-work/product-visualization-perfume.png",
    alt: "Perfume products styled for a promotional campaign",
  },
];
