import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { PainPoints } from "@/components/PainPoints";
import { DevyntraMagic } from "@/components/DevyntraMagic";
import { Demo } from "@/components/Demo";
import { FeatureHighlights } from "@/components/FeatureHighlights";
import { Differentiation } from "@/components/Differentiation";

import { PricingTeaser } from "@/components/PricingTeaser";

import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <PainPoints />
      <DevyntraMagic />
      <Demo />
      <FeatureHighlights />
      <Differentiation />
      
      <PricingTeaser />
      <FinalCTA />
      <Footer />
      
    </div>
  );
};

export default Index;
