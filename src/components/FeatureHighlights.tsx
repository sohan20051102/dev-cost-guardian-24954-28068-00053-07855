import { Card } from "@/components/ui/card";
import { Settings, Cloud, DollarSign, Rocket } from "lucide-react";

const features = [
  {
    icon: Settings,
    title: "AI-Powered CI/CD",
    description: "Auto-generates pipelines, fixes errors, and optimizes builds"
  },
  {
    icon: Cloud,
    title: "Cloud & API Tracking",
    description: "Monitors AWS/GCP/Azure and API usage in real-time"
  },
  {
    icon: DollarSign,
    title: "Smart Billing Engine",
    description: "Auto-invoices, calculates overages, and integrates with Stripe"
  },
  {
    icon: Rocket,
    title: "One-Click Deploy",
    description: "Instant setup of environment, dependencies, and scaling"
  }
];

export const FeatureHighlights = () => {
  return (
    <section id="features" className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            MVP <span className="bg-gradient-primary bg-clip-text text-transparent">Feature Highlights</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need to ship faster
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card
                key={index}
                className="p-6 md:p-8 border-border bg-card hover:border-primary/50 transition-all duration-300 hover:shadow-glow group cursor-default"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="p-4 rounded-full bg-primary/10 text-primary mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
