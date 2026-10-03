import type { LucideIcon } from "lucide-react";
import {
  BriefcaseBusiness,
  Camera,
  ClipboardCheck,
  FlaskConical,
  PackageCheck,
} from "lucide-react";

export type ProcessItem = {
  id: string;
  number: string;
  title: string;
  description: string;
  icon: LucideIcon;
  tone: "blue" | "coral" | "cyan" | "violet" | "orange";
};

export const processItems: ProcessItem[] = [
  {
    id: "discover",
    number: "01",
    title: "Discover",
    description: "Understand your goals, brand and audience.",
    icon: ClipboardCheck,
    tone: "blue",
  },
  {
    id: "plan",
    number: "02",
    title: "Plan",
    description: "Create a tailored strategy and creative direction.",
    icon: BriefcaseBusiness,
    tone: "coral",
  },
  {
    id: "create",
    number: "03",
    title: "Create",
    description: "Bring ideas to life with our expert team.",
    icon: Camera,
    tone: "cyan",
  },
  {
    id: "refine",
    number: "04",
    title: "Refine",
    description: "Review, feedback and fine-tune to perfection.",
    icon: FlaskConical,
    tone: "blue",
  },
  {
    id: "deliver",
    number: "05",
    title: "Deliver",
    description: "Final assets, ready to make an impact.",
    icon: PackageCheck,
    tone: "orange",
  },
];
