"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";
import { useRef } from "react";
import { TestimonialCard } from "./testimonial-card";
import { testimonialItems } from "./testimonials-data";

export function TestimonialsSection() {
  const viewportRef = useRef<HTMLDivElement>(null);

  const scrollTestimonials = (direction: "previous" | "next") => {
    const viewport = viewportRef.current;
    const firstCard = viewport?.querySelector<HTMLElement>(".testimonial-card");

    if (!viewport || !firstCard) {
      return;
    }

    const track = firstCard.parentElement;
    const gap = track ? Number.parseFloat(getComputedStyle(track).columnGap) || 0 : 0;
    const step = firstCard.offsetWidth + gap;
    const maxScrollLeft = viewport.scrollWidth - viewport.clientWidth;
    const isAtStart = viewport.scrollLeft <= 1;
    const isAtEnd = viewport.scrollLeft >= maxScrollLeft - 1;

    if (direction === "previous" && isAtStart) {
      viewport.scrollTo({ left: maxScrollLeft, behavior: "auto" });
    }

    if (direction === "next" && isAtEnd) {
      viewport.scrollTo({ left: 0, behavior: "auto" });
    }

    requestAnimationFrame(() => {
      viewport.scrollBy({
        behavior: "smooth",
        left: direction === "next" ? step : -step,
      });
    });
  };

  return (
    <section className="testimonials-section" id="testimonials" aria-labelledby="testimonials-title">
      <div className="testimonials-shell">
        <div className="testimonials-heading">
          <div>
            <p className="testimonials-eyebrow">Testimonials</p>
            <h2 id="testimonials-title">What Our Clients Say</h2>
          </div>

          <div className="testimonials-controls" aria-label="Testimonial controls">
            <button
              type="button"
              aria-label="Previous testimonials"
              onClick={() => scrollTestimonials("previous")}
            >
              <ArrowLeft aria-hidden="true" size={15} strokeWidth={2.7} />
            </button>
            <button
              type="button"
              aria-label="Next testimonials"
              onClick={() => scrollTestimonials("next")}
            >
              <ArrowRight aria-hidden="true" size={15} strokeWidth={2.7} />
            </button>
          </div>
        </div>

        <div className="testimonials-viewport" data-native-scroll ref={viewportRef}>
          <div className="testimonials-track">
            {[...testimonialItems, ...testimonialItems].map((testimonial, index) => (
              <TestimonialCard key={`${testimonial.id}-${index}`} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
