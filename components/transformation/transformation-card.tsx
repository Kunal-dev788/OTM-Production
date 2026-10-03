"use client";

import Image from "next/image";
import { Plus } from "lucide-react";
import { useState } from "react";
import type { TransformationItem } from "./transformation-data";

type TransformationCardProps = {
  item: TransformationItem;
};

export function TransformationCard({ item }: TransformationCardProps) {
  const [position, setPosition] = useState(50);

  return (
    <article className="transformation-card">
      <div className="transformation-card__stage">
        <Image
          src={item.afterImage}
          alt={item.afterAlt}
          fill
          sizes="(max-width: 560px) 100vw, (max-width: 850px) 50vw, 33vw"
          className="transformation-card__image"
        />

        <div
          className="transformation-card__before"
          style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
          aria-hidden="true"
        >
          <Image
            src={item.beforeImage}
            alt=""
            fill
            sizes="(max-width: 560px) 100vw, (max-width: 850px) 50vw, 33vw"
            className="transformation-card__image"
          />
        </div>

        <input
          type="range"
          min="0"
          max="100"
          step="1"
          value={position}
          aria-label={`Compare ${item.beforeLabel} and ${item.afterLabel}`}
          aria-valuetext={`${position}% before image visible`}
          onChange={(event) => setPosition(Number(event.target.value))}
          className="transformation-card__range"
        />

        <span
          className="transformation-card__handle"
          style={{ left: `clamp(1rem, ${position}%, calc(100% - 1rem))` }}
          aria-hidden="true"
        >
          <Plus size={15} strokeWidth={2.4} />
        </span>

        <span className="transformation-card__label transformation-card__label--before">
          {item.beforeLabel}
        </span>
        <span className="transformation-card__label transformation-card__label--after">
          {item.afterLabel}
        </span>
      </div>
    </article>
  );
}
