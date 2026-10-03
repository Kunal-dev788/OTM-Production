import type { IndustryItem } from "./industries-data";

type IndustryCardProps = {
  industry: IndustryItem;
};

export function IndustryCard({ industry }: IndustryCardProps) {
  const Icon = industry.icon;

  return (
    <article className={`industry-card industry-card--${industry.tone}`}>
      <Icon aria-hidden="true" className="industry-card__icon" size={25} strokeWidth={1.9} />
      <h3>{industry.title}</h3>
    </article>
  );
}
