import { ArrowRight } from "lucide-react";
import type { ProcessItem } from "./process-data";

type ProcessCardProps = {
  item: ProcessItem;
};

export function ProcessCard({ item }: ProcessCardProps) {
  const Icon = item.icon;

  return (
    <article className={`process-card process-card--${item.tone}`}>
      <div className="process-card__topline">
        <span className="process-card__number">{item.number}</span>
        <ArrowRight aria-hidden="true" size={15} strokeWidth={2.8} />
      </div>

      <div className="process-card__content">
        <span className="process-card__icon" aria-hidden="true">
          <Icon size={17} strokeWidth={2.3} />
        </span>
        <div>
          <h3>{item.title}</h3>
          <p>{item.description}</p>
        </div>
      </div>
    </article>
  );
}
