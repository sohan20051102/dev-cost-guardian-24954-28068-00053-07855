import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "$29",
    description: "Perfect for small teams and side projects",
    features: [
      "2 vCPU included",
      "4GB RAM included",
      "1,000 AI tokens/month",
      "Email support",
      "Basic analytics",
      "Monthly invoicing",
    ],
    highlight: false,
  },
  {
    name: "Pro",
    price: "$99",
    description: "Built for growing DevOps teams",
    features: [
      "8 vCPU included",
      "16GB RAM included",
      "10,000 AI tokens/month",
      "Priority support",
      "Advanced analytics",
      "Custom alerts",
      "Slack integration",
      "Multi-workspace",
    ],
    highlight: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "Unlimited scale for large organizations",
    features: [
      "Unlimited resources",
      "Unlimited AI tokens",
      "Dedicated support",
      "Custom integrations",
      "SSO & SAML",
      "SLA guarantee",
      "Priority onboarding",
      "Volume discounts",
    ],
    highlight: false,
  },
];

export const Pricing = () => {
  return (
    <section id="pricing" className="py-24 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            Simple, Transparent
            <br />
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Pricing
            </span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Choose the plan that fits your needs. Pay only for what you use with automatic overage calculations.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="flex md:grid md:grid-cols-3 gap-8 max-w-6xl mx-auto overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`p-8 bg-gradient-card border-border transition-all duration-300 hover:shadow-elevated hover:-translate-y-2 animate-fade-in min-w-[300px] md:min-w-0 snap-center ${
                plan.highlight
                  ? "border-primary shadow-glow scale-105 md:scale-110"
                  : "hover:border-primary/50"
              }`}
              style={{ animationDelay: `${index * 0.15}s`, animationFillMode: 'backwards' }}
            >
              <div className="space-y-6">
                {/* Plan Header */}
                <div className="space-y-2">
                  {plan.highlight && (
                    <div className="inline-flex px-3 py-1 rounded-full bg-primary/10 border border-primary/20">
                      <span className="text-xs font-medium text-primary">Most Popular</span>
                    </div>
                  )}
                  <h3 className="text-2xl font-bold">{plan.name}</h3>
                  <p className="text-muted-foreground text-sm">{plan.description}</p>
                </div>

                {/* Price */}
                <div className="space-y-1">
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    {plan.price !== "Custom" && (
                      <span className="text-muted-foreground">/month</span>
                    )}
                  </div>
                  {plan.price !== "Custom" && (
                    <p className="text-xs text-muted-foreground">+ overages at standard rates</p>
                  )}
                </div>

                {/* Features */}
                <ul className="space-y-3">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <Button
                  variant={plan.highlight ? "hero" : "outline"}
                  className="w-full"
                  size="lg"
                >
                  {plan.price === "Custom" ? "Contact Sales" : "Get Started"}
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Overage Pricing Info */}
        <div className="mt-16 max-w-3xl mx-auto">
          <Card className="p-6 bg-secondary/30 border-border">
            <h4 className="font-semibold mb-3">Overage Pricing</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div>
                <span className="text-muted-foreground">CPU:</span>
                <span className="ml-2 font-medium">$0.05/CPU-hour</span>
              </div>
              <div>
                <span className="text-muted-foreground">RAM:</span>
                <span className="ml-2 font-medium">$0.01/GB-hour</span>
              </div>
              <div>
                <span className="text-muted-foreground">AI Tokens:</span>
                <span className="ml-2 font-medium">$0.002/token</span>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};
