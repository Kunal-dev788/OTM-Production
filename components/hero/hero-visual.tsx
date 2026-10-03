import Image from "next/image";
import { ArrowUpRight, Play, Sparkles } from "lucide-react";

export function HeroVisual() {
  return (
    <div
      className="hero-visual"
      id="showreel"
      aria-label="Selected On Time Media campaign work"
    >
      <div className="hero-visual__glow hero-visual__glow--blue" />
      <div className="hero-visual__glow hero-visual__glow--peach" />

      <div className="hero-pill hero-pill--campaign">
        <Sparkles size={12} strokeWidth={2.6} aria-hidden="true" />
        <span>CGI &amp; 3D</span>
      </div>

      <article className="hero-card hero-card--main">
        <Image
          src="/assets/shared/white-fortuner-indian-morning.png"
          alt="White Fortuner SUV driving on an Indian road in the morning"
          fill
          priority
          sizes="(max-width: 760px) 60vw, 36vw"
          className="hero-card__image"
        />
      </article>

      <article className="hero-card hero-card--phone">
        <Image
          src="/assets/hero/behind-the-scenes-reel.png"
          alt="Behind-the-scenes creative production still"
          fill
          sizes="(max-width: 760px) 14vw, 8vw"
          className="hero-card__image"
        />
        <span className="hero-card__play" aria-hidden="true">
          <Play size={12} fill="currentColor" strokeWidth={2.4} />
        </span>
      </article>

      <article className="hero-card hero-card--product">
        <Image
          src="/assets/hero/amber-perfume.png"
          alt="Amber perfume bottle product photograph"
          fill
          sizes="(max-width: 760px) 18vw, 10vw"
          className="hero-card__image"
        />
      </article>

      <article className="hero-card hero-card--website">
        <Image
          src="/assets/hero/website-design-preview.png"
          alt="Responsive creative studio website displayed on a laptop"
          fill
          sizes="(max-width: 760px) 32vw, 18vw"
          className="hero-card__image"
        />
        <div className="hero-card__label">
          <span>Website Design</span>
          <ArrowUpRight size={11} strokeWidth={2.6} aria-hidden="true" />
        </div>
      </article>

      <div className="hero-pill hero-pill--engagement">
        <strong>+284%</strong>
        <span>Brand Engagement</span>
      </div>

      <div className="hero-pill hero-pill--product-shoot">
        <span className="hero-pill__dot" aria-hidden="true" />
        <span>Product Shoot</span>
      </div>
    </div>
  );
}
