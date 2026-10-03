import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import type { ServiceItem } from "./services-data";

type ServiceCardProps = {
  service: ServiceItem;
};

export function ServiceCard({ service }: ServiceCardProps) {
  const Icon = service.icon;

  return (
    <article className={`service-card service-card--${service.tone}`}>
      <Image
        src={service.image}
        alt={service.imageAlt}
        width={260}
        height={220}
        className="service-card__visual"
      />

      <div className="service-card__body">
        <div className="service-card__title-row">
          <Icon aria-hidden="true" className="service-card__title-icon" size={20} strokeWidth={2.5} />
          <h3>{service.title}</h3>
        </div>

        <ul className="service-card__list">
          {service.points.map((point) => (
            <li key={point}>
              <CheckCircle2 aria-hidden="true" size={14} strokeWidth={2.4} />
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
