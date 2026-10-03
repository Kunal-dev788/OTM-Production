import { FaLayerGroup, FaStar, FaUsers } from "react-icons/fa6";
import {
  SiAdidas,
  SiBmw,
  SiBose,
  SiNike,
  SiSamsung,
  SiSony,
  SiZara,
} from "react-icons/si";
import type { IconType } from "react-icons";

type Brand = {
  label: string;
  icon?: IconType;
};

const brands: Brand[] = [
  { label: "Nike", icon: SiNike },
  { label: "Bose", icon: SiBose },
  { label: "Zara", icon: SiZara },
  { label: "Samsung", icon: SiSamsung },
  { label: "Canon" },
  { label: "BMW", icon: SiBmw },
  { label: "TOM FORD" },
  { label: "Adidas", icon: SiAdidas },
  { label: "Sony", icon: SiSony },
];

const achievements = [
  {
    value: "100+",
    label: "Projects Completed",
    detail: "Across brands, campaigns, websites & more",
    icon: FaStar,
    tone: "coral",
  },
  {
    value: "50+",
    label: "Happy Clients",
    detail: "From startups to established brands",
    icon: FaUsers,
    tone: "blue",
  },
  {
    value: "8",
    label: "Studio Services",
    detail: "End-to-end creative production",
    icon: FaLayerGroup,
    tone: "green",
  },
] as const;

function BrandListing() {
  const renderBrands = (isDuplicate = false) =>
    brands.map(({ label, icon: BrandIcon }) => (
      <span
        aria-hidden={isDuplicate}
        className={`brand-logo brand-logo--${label.toLowerCase().replaceAll(" ", "-")}`}
        key={`${label}-${isDuplicate ? "duplicate" : "primary"}`}
      >
        {BrandIcon ? <BrandIcon aria-label={isDuplicate ? undefined : label} /> : label}
      </span>
    ));

  return (
    <div className="brand-listing">
      <p className="brand-listing__label">Trusted by brands</p>
      <div className="brand-listing__viewport" aria-label="Selected client brands">
        <div className="brand-listing__track">
          <div className="brand-listing__group">{renderBrands()}</div>
          <div className="brand-listing__group" aria-hidden="true">
            {renderBrands(true)}
          </div>
        </div>
      </div>
    </div>
  );
}

function AchievementOverview() {
  return (
    <div className="achievement-overview" aria-label="On Time Media achievements">
      {achievements.map(({ value, label, detail, icon: AchievementIcon, tone }) => (
        <article className={`achievement-card achievement-card--${tone}`} key={label}>
          <span className="achievement-card__icon" aria-hidden="true">
            <AchievementIcon size={22} aria-hidden="true" />
          </span>
          <span className="achievement-card__copy">
            <strong>{value}</strong>
            <span>{label}</span>
            <small>{detail}</small>
          </span>
        </article>
      ))}
    </div>
  );
}

export function HeroProof() {
  return (
    <section className="hero-proof" aria-label="Trusted brands and achievements">
      <div className="hero-proof__shell">
        <BrandListing />
        <AchievementOverview />
      </div>
    </section>
  );
}
