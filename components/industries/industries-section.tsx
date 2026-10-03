import { IndustryCard } from "./industry-card";
import { industryItems } from "./industries-data";

export function IndustriesSection() {
  return (
    <section className="industries-section" id="industries" aria-labelledby="industries-title">
      <div className="industries-shell">
        <div className="industries-heading">
          <div>
            <p className="industries-eyebrow">Our Industries</p>
            <h2 id="industries-title">Industries We Specialize In</h2>
          </div>
          <p>
            We work with brands across diverse industries, delivering visuals that make an
            impact.
          </p>
        </div>

        <div className="industries-grid">
          {industryItems.map((industry) => (
            <IndustryCard industry={industry} key={industry.id} />
          ))}
        </div>
      </div>
    </section>
  );
}
