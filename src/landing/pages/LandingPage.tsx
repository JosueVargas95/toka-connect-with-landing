import { CTASection } from "../sections/CTASection";
import { HeroSection } from "../sections/HeroSection";
import { PartnersSection } from "../sections/PartnersSection";
import { ProductCarouselSection } from "../sections/ProductCarouselSection";

export const LandingPage = () => {
  return (
    <main>
      <HeroSection />
      <ProductCarouselSection />
      <PartnersSection />
      <CTASection />
    </main>
  );
};
