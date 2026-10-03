import { FaStar } from "react-icons/fa6";
import type { TestimonialItem } from "./testimonials-data";

type TestimonialCardProps = {
  testimonial: TestimonialItem;
};

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <article className="testimonial-card">
      <div className="testimonial-card__main">
        <span
          className="testimonial-card__avatar"
          role="img"
          aria-label={testimonial.avatarAlt}
          style={{ backgroundImage: `url(${testimonial.avatar})` }}
        />
        <p>{testimonial.quote}</p>
      </div>

      <div className="testimonial-card__footer">
        <div className="testimonial-card__author">
          <h3>{testimonial.name}</h3>
          <p>{testimonial.role}</p>
        </div>
        <div className="testimonial-card__rating" aria-label="5 out of 5 stars">
          {Array.from({ length: 5 }, (_, index) => (
            <FaStar aria-hidden="true" key={index} />
          ))}
        </div>
      </div>
    </article>
  );
}
