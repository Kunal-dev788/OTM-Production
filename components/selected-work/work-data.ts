export type WorkCardLayout = "wide" | "compact" | "standard";

export type WorkItem = {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  alt: string;
  layout: WorkCardLayout;
};

export const workItems: WorkItem[] = [
  {
    id: "automotive-campaign",
    title: "Automotive Campaign",
    subtitle: "Commercial Shoot & Digital Marketing",
    image: "/assets/shared/white-fortuner-indian-morning.png",
    alt: "White Fortuner SUV driving on an Indian road in the morning",
    layout: "wide",
  },
  {
    id: "product-visualization",
    title: "Product Visualization",
    subtitle: "Brand & Social Content",
    image: "/assets/selected-work/product-visualization-perfume.png",
    alt: "Amber perfume bottles staged in warm editorial light",
    layout: "compact",
  },
  {
    id: "real-estate-campaign",
    title: "Real Estate Campaign",
    subtitle: "Social Media & Lead Generation",
    image: "/assets/selected-work/real-estate-campaign.png",
    alt: "Bright contemporary living room prepared for a real-estate campaign",
    layout: "standard",
  },
  {
    id: "product-photography",
    title: "Product Photography",
    subtitle: "E-commerce & Social Content",
    image: "/assets/selected-work/product-photography-headphones.png",
    alt: "Premium black over-ear headphones on a studio pedestal",
    layout: "standard",
  },
  {
    id: "website-design",
    title: "Website Design",
    subtitle: "Brand Website & UI/UX",
    image: "/assets/selected-work/website-design-showcase.png",
    alt: "Responsive website design displayed across a laptop and smartphone",
    layout: "standard",
  },
  {
    id: "iec-campaign",
    title: "IEC Campaign",
    subtitle: "Awareness & Social Media",
    image: "/assets/selected-work/iec-campaign.png",
    alt: "Food and beauty products arranged for an integrated campaign",
    layout: "standard",
  },
];
