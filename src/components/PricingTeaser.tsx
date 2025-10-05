import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check, ArrowRight } from "lucide-react";

const plans = [
  {
    name: "Starter",
    description: "For indie developers",
    price: "$29",
    features: [
      "Up to 5 projects",
      "Basic CI/CD automation",
      "Community support",
      "1GB storage"
    ]
  },
  {
    name: "Pro",
    description: "For small teams",
    price: "$99",
    popular: true,
    features: [
      "Unlimited projects",
      "Advanced AI features",
      "Priority support",
      "Auto billing integration",
      "10GB storage"
    ]
  },
  {
    name: "Enterprise",
    description: "Scales infinitely",
    price: "Custom",
    features: [
      "Everything in Pro",
      "Dedicated support",
      "Custom integrations",
      "SLA guarantee",
      "Unlimited storage"
    ]
  }
];

export const PricingTeaser = () => {
  return (
    <section className="py-16 md:py-24 bg-muted/30 overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Simple, <span className="bg-gradient-primary bg-clip-text text-transparent">Transparent Pricing</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Get started for free, scale as you grow
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`p-6 md:p-8 border-border bg-card transition-all duration-300 hover:shadow-glow relative ${
                plan.popular ? "border-primary/50 shadow-glow md:scale-105" : ""
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-primary text-white px-4 py-1 rounded-full text-sm font-semibold">
                  Most Popular
                </div>
              )}
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-muted-foreground text-sm mb-4">{plan.description}</p>
                <div className="mb-2">
                  <span className="text-4xl md:text-5xl font-bold">{plan.price}</span>
                  {plan.price !== "Custom" && <span className="text-muted-foreground">/mo</span>}
                </div>
              </div>

              <ul className="space-y-3 mb-6">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                variant={plan.popular ? "hero" : "outline"}
                className="w-full group"
                size="lg"
              >
                Get Started
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Card>
          ))}
        </div>

        <div className="mt-8 text-center">
          <p className="text-muted-foreground">
            <span className="font-semibold text-primary">Free for First Month</span> — No credit card required
          </p>
        </div>
      </div>
    </section>
  );
};
