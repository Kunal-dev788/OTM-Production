import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { BenefitCard } from "./benefit-card";
import { OutputCard } from "./output-card";
import { benefitItems, outputItems } from "./why-choose-us-data";

export function WhyChooseUsSection() {
  const leftOutputs = outputItems.slice(0, 3);
  const rightOutputs = outputItems.slice(3);

  return (
    <section className="why-choose-section" id="why-choose-us" aria-labelledby="why-choose-title">
      <div className="why-choose-shell">
        <div className="why-choose-heading">
          <div>
            <p className="why-choose-eyebrow">Why Choose Us</p>
            <h2 id="why-choose-title">
              Built for Impact, Campaigns
              <br />
              That Deliver Results.
            </h2>
          </div>
          <p>
            We combine creative expertise with a strategic approach to deliver visuals
            that not only look great, but drive brand outreach, engagement and growth.
          </p>
        </div>

        <div className="benefits-grid">
          {benefitItems.map((benefit) => (
            <BenefitCard key={benefit.id} benefit={benefit} />
          ))}
        </div>
      </div>

      <div className="why-choose-outputs">
        <div className="why-choose-outputs__shell">
          <div className="outputs-intro">
            <h2>
              One Core Idea,
              <br />
              Multiple Omnichannel Outputs.
            </h2>
            <p>
              Turn a single creative campaign into multiple high-performing assets
              across every platform.
            </p>
            <Link className="outputs-intro__link" href="/" data-scroll-target="process">
              <span>Learn How It Works</span>
              <ArrowRight aria-hidden="true" size={14} strokeWidth={2.5} />
            </Link>
          </div>

          <div className="photoshoot-card">
            <span>Single Photoshoot</span>
            <div className="photoshoot-card__image">
              <Image
                src="/assets/hero/amber-perfume.png"
                alt="Amber perfume bottle from a single product photoshoot"
                fill
                sizes="6rem"
              />
            </div>
            <small>01</small>
          </div>

          <div className="outputs-flow outputs-flow--left" aria-label="Left campaign outputs">
            {leftOutputs.map((output) => (
              <OutputCard key={output.id} output={output} />
            ))}
          </div>

          <div className="outputs-flow outputs-flow--right" aria-label="Right campaign outputs">
            {rightOutputs.map((output) => (
              <OutputCard key={output.id} output={output} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
