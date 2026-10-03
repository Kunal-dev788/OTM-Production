import { ProcessCard } from "./process-card";
import { processItems } from "./process-data";

export function ProcessSection() {
  return (
    <section className="process-section" id="process" aria-labelledby="process-title">
      <div className="process-shell">
        <div className="process-heading">
          <p className="process-eyebrow">Our Process</p>
          <h2 id="process-title">How We Work</h2>
          <p>A simple, transparent process to bring your ideas to life.</p>
        </div>

        <div className="process-grid">
          {processItems.map((item) => (
            <ProcessCard item={item} key={item.id} />
          ))}
        </div>
      </div>
    </section>
  );
}
