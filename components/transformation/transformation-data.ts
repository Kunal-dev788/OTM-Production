export type TransformationItem = {
  id: string;
  beforeImage: string;
  beforeAlt: string;
  beforeLabel: string;
  afterImage: string;
  afterAlt: string;
  afterLabel: string;
};

export const transformationItems: TransformationItem[] = [
  {
    id: "automotive-render",
    beforeImage: "/assets/transformation/before-fortuner-model.png",
    beforeAlt: "Grayscale wireframe model of a Fortuner-style SUV",
    beforeLabel: "Before (3D Model)",
    afterImage: "/assets/shared/white-fortuner-indian-morning.png",
    afterAlt: "White Fortuner SUV on an Indian road in morning light",
    afterLabel: "After (Final Render)",
  },
  {
    id: "product-visualization",
    beforeImage: "/assets/transformation/before-perfume-concept.png",
    beforeAlt: "Grayscale concept model of a square perfume bottle",
    beforeLabel: "Before (Concept)",
    afterImage: "/assets/hero/amber-perfume.png",
    afterAlt: "Amber perfume bottle in a finished product photograph",
    afterLabel: "After (Final Photo)",
  },
  {
    id: "real-estate-render",
    beforeImage: "/assets/transformation/before-interior-model.png",
    beforeAlt: "Grayscale architectural model of a contemporary living room",
    beforeLabel: "Before (3D Model)",
    afterImage: "/assets/selected-work/real-estate-campaign.png",
    afterAlt: "Bright contemporary living room in a finished real-estate photograph",
    afterLabel: "After (Final Render)",
  },
];
