import { ContactForm } from "./contact-form";

export function ContactSection() {
  return (
    <section className="contact-section" id="contact" aria-labelledby="contact-title">
      <div className="contact-shell">
        <div className="contact-card">
          <div className="contact-heading">
            <div>
              <p className="contact-eyebrow">Start a conversation</p>
              <h2 id="contact-title">Tell me what you&apos;re planning.</h2>
            </div>
            <p className="contact-response">
              <span aria-hidden="true" /> Reply within 1–2 days
            </p>
          </div>

          <ContactForm />
        </div>
      </div>
    </section>
  );
}
