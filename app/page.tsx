import { SiteNavigation } from "@/components/navigation/site-navigation";
import { HeroSection } from "@/components/hero/hero-section";
import { HeroProof } from "@/components/hero/hero-proof";
import { SelectedWorkSection } from "@/components/selected-work/selected-work-section";
import { ServicesSection } from "@/components/services/services-section";
import { WhyChooseUsSection } from "@/components/why-choose-us/why-choose-us-section";
import { TransformationSection } from "@/components/transformation/transformation-section";
import { ProcessSection } from "@/components/process/process-section";
import { IndustriesSection } from "@/components/industries/industries-section";
import { TestimonialsSection } from "@/components/testimonials/testimonials-section";
import { ContactSection } from "@/components/contact/contact-section";
import { SiteFooter } from "@/components/footer/site-footer";

export default function Home() {
  return (
    <>
      <SiteNavigation />
      <main id="home" className="home-page">
        <HeroSection />
        <HeroProof />
        <SelectedWorkSection />
        <ServicesSection />
        <WhyChooseUsSection />
        <TransformationSection />
        <ProcessSection />
        <IndustriesSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </>
  );
}
