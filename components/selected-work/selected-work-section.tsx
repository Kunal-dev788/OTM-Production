import { WorkCard } from "./work-card";
import { workItems } from "./work-data";

export function SelectedWorkSection() {
  return (
    <section className="selected-work-section" id="work" aria-labelledby="selected-work-title">
      <div className="selected-work-shell">
        <div className="selected-work-heading">
          <p className="selected-work-eyebrow">Our Portfolio</p>
          <h2 id="selected-work-title">Selected Work</h2>
          <p>
            A glimpse of the brands we&apos;ve helped bring to life through powerful
            visuals and storytelling.
          </p>
        </div>

        <div className="selected-work-grid">
          {workItems.map((item) => (
            <WorkCard item={item} key={item.id} />
          ))}
        </div>
      </div>
    </section>
  );
}
