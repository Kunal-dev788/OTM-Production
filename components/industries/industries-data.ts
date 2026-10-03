import type { LucideIcon } from "lucide-react";
import {
  Building2,
  HeartPulse,
  House,
  Landmark,
  ShoppingBag,
  Store,
} from "lucide-react";

export type IndustryItem = {
  id: string;
  title: string;
  icon: LucideIcon;
  tone: "blue" | "cyan";
};

export const industryItems: IndustryItem[] = [
  {
    id: "retail-ecommerce",
    title: "Retail & E-commerce",
    icon: ShoppingBag,
    tone: "cyan",
  },
  {
    id: "political-government",
    title: "Political & Government",
    icon: Landmark,
    tone: "blue",
  },
  {
    id: "real-estate",
    title: "Real Estate",
    icon: House,
    tone: "blue",
  },
  {
    id: "healthcare-education",
    title: "Healthcare & Education",
    icon: HeartPulse,
    tone: "blue",
  },
  {
    id: "fmcg-consumer-brands",
    title: "FMCG & Consumer Brands",
    icon: Building2,
    tone: "cyan",
  },
  {
    id: "corporate-b2b",
    title: "Corporate & B2B",
    icon: Store,
    tone: "cyan",
  },
];
