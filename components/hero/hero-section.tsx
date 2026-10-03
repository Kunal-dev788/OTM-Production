import { ArrowRight, CirclePlay } from "lucide-react";
import Link from "next/link";
import { HeroVisual } from "./hero-visual";

const avatarSources = [
  "https://i.pravatar.cc/80?img=12",
  "https://i.pravatar.cc/80?img=32",
  "https://i.pravatar.cc/80?img=47",
  "https://i.pravatar.cc/80?img=49",
] as const;

function HeroActions() {
  return (
    <div className="hero-actions">
      <Link className="hero-primary-action" href="/" data-scroll-target="contact">
        <span>Start a Project</span>
        <ArrowRight size={16} strokeWidth={2.5} aria-hidden="true" />
      </Link>
      <Link className="hero-secondary-action" href="/" data-scroll-target="showreel">
        <CirclePlay size={17} strokeWidth={2.2} aria-hidden="true" />
        <span>Watch Showreel</span>
      </Link>
    </div>
  );
}

function HeroTrustNote() {
  return (
    <div className="hero-trust-note">
      <div className="hero-trust-note__avatars" aria-hidden="true">
        {avatarSources.map((source, index) => (
          <span
            className="hero-trust-note__avatar"
            key={source}
            style={{ backgroundImage: `url(${source})`, zIndex: avatarSources.length - index }}
          />
        ))}
      </div>
      <span>
        Trusted by <strong>50+ brands</strong> across multiple industries
      </span>
    </div>
  );
}

export function HeroSection() {
  return (
    <section className="hero-section" aria-labelledby="hero-title">
      <div className="hero-shell">
        <div className="hero-copy">
          <p className="hero-eyebrow">Creative production studio</p>
          <h1 className="hero-title" id="hero-title">
            <span>We create visuals</span>
            <span>that help brands</span>
            <span>
              <strong>stand</strong> <em>out.</em>
            </span>
          </h1>
          <p className="hero-description">
            From creative production and social media to websites, digital marketing,
            graphic design, IEC campaigns, and commercial shoots — we turn your ideas
            into powerful visual stories.
          </p>
          <HeroActions />
          <HeroTrustNote />
        </div>

        <HeroVisual />
      </div>
    </section>
  );
}
