import { ServiceCard } from "./service-card";
import { serviceItems } from "./services-data";

export function ServicesSection() {
  return (
    <section className="services-section" id="services" aria-labelledby="services-title">
      <div className="services-shell">
        <div className="services-heading">
          <p className="services-eyebrow">Our Services</p>
          <h2 id="services-title">What We Do</h2>
          <p>
            A complete range of creative services to elevate your brand and bring your
            vision to life.
          </p>
        </div>

        <div className="services-grid">
          {serviceItems.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}
