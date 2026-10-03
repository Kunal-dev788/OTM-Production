import type { BenefitItem } from "./why-choose-us-data";

type BenefitCardProps = {
  benefit: BenefitItem;
};

export function BenefitCard({ benefit }: BenefitCardProps) {
  const Icon = benefit.icon;

  return (
    <article className={`benefit-card benefit-card--${benefit.tone}`}>
      <span className="benefit-card__icon" aria-hidden="true">
        <Icon />
      </span>
      <div className="benefit-card__copy">
        <h3>{benefit.title}</h3>
        <p>{benefit.description}</p>
      </div>
    </article>
  );
}
