import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { TransformationCard } from "./transformation-card";
import { transformationItems } from "./transformation-data";

export function TransformationSection() {
  return (
    <section className="transformation-section" id="transformation" aria-labelledby="transformation-title">
      <div className="transformation-shell">
        <div className="transformation-heading">
          <div>
            <p className="transformation-eyebrow">Transformation</p>
            <h2 id="transformation-title">
              From Campaign Idea to Real-World <span>Impact.</span>
            </h2>
          </div>
          <p>
            From initial concepts and 3D models to stunning final visuals ready for your
            campaign.
          </p>
          <Link className="transformation-link" href="/" data-scroll-target="work">
            <span>View More</span>
            <ArrowRight aria-hidden="true" size={14} strokeWidth={2.5} />
          </Link>
        </div>

        <div className="transformation-grid">
          {transformationItems.map((item) => (
            <TransformationCard item={item} key={item.id} />
          ))}
        </div>
      </div>
    </section>
  );
}
