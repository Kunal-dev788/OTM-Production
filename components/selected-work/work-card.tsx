import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import type { WorkItem } from "./work-data";

type WorkCardProps = {
  item: WorkItem;
};

export function WorkCard({ item }: WorkCardProps) {
  return (
    <article className={`work-card work-card--${item.layout}`}>
      <Image
        src={item.image}
        alt={item.alt}
        fill
        sizes="(max-width: 560px) 100vw, (max-width: 850px) 50vw, 40vw"
        className="work-card__image"
      />
      <div className="work-card__shade" aria-hidden="true" />
      <div className="work-card__content">
        <div>
          <h3>{item.title}</h3>
          <p>{item.subtitle}</p>
        </div>
        <span className="work-card__arrow" aria-hidden="true">
          <ArrowUpRight size={15} strokeWidth={2.5} />
        </span>
      </div>
    </article>
  );
}
