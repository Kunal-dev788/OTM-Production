import { Clock3, ExternalLink, Mail, MapPin, Phone } from "lucide-react";
import { footerContact, footerSocialLinks } from "./footer-data";
import { FooterBrandColumn } from "./footer-brand-column";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-footer__shell">
        <div className="footer-location-layout">
          <FooterBrandColumn />

          <div className="footer-location">
            <div className="footer-location__details">
              <p className="footer-eyebrow">Get in touch</p>
              <h2>Let&apos;s create something impactful.</h2>

            <div className="footer-contact-list">
              <a href={`tel:${footerContact.phone.replaceAll(" ", "")}`}>
                <Phone aria-hidden="true" size={19} strokeWidth={2.2} />
                <span>{footerContact.phone}</span>
              </a>
              <a href={`mailto:${footerContact.email}`}>
                <Mail aria-hidden="true" size={19} strokeWidth={2.2} />
                <span>{footerContact.email}</span>
              </a>
              <span>
                <MapPin aria-hidden="true" size={19} strokeWidth={2.2} />
                <span>{footerContact.address}</span>
              </span>
              <span>
                <Clock3 aria-hidden="true" size={19} strokeWidth={2.2} />
                <span>{footerContact.hours}</span>
              </span>
            </div>

            <div className="footer-location__socials">
              <p>Follow Us</p>
              <div>
                {footerSocialLinks.map(({ label, href, icon: SocialIcon }) => (
                    <a href={href} aria-label={label} key={label} target="_blank" rel="noreferrer">
                    <SocialIcon aria-hidden="true" size={16} />
                  </a>
                ))}
              </div>
            </div>
            </div>

            <div className="footer-map">
              <iframe
                title="On Time Media location in Sehore, Madhya Pradesh"
                src="https://www.google.com/maps?q=Sehore%2C%20Madhya%20Pradesh&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <a
                className="footer-map__link"
                href="https://www.google.com/maps/search/?api=1&query=Sehore%2C%20Madhya%20Pradesh"
                target="_blank"
                rel="noreferrer"
              >
                Open in Maps
                <ExternalLink aria-hidden="true" size={14} strokeWidth={2.3} />
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-credit">
            Developed by{" "}
            {/* <a href="https://www.kunalrathoredev.in/" target="_blank" rel="noreferrer">
              OTM Team
            </a> */}
          </p>
          <div className="footer-legal-links">
            <a href="/privacy">Privacy Policy</a>
            <span aria-hidden="true">|</span>
            <a href="/terms">Terms &amp; Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
