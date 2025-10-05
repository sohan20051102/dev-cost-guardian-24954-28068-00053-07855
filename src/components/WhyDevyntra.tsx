import { Zap, DollarSign, Bell, BarChart3, Lock } from "lucide-react";
import { Card } from "@/components/ui/card";

const benefits = [
  {
    icon: Zap,
    title: "Automated & Accurate",
    description: "No manual tracking of cloud/AI usage or bills. Everything is calculated automatically in real-time.",
  },
  {
    icon: BarChart3,
    title: "Centralized Dashboard",
    description: "One unified dashboard for all projects and workspaces. See everything at a glance.",
  },
  {
    icon: DollarSign,
    title: "Transparent Pricing",
    description: "Users see real-time usage, overages, and costs. No surprises at month-end.",
  },
  {
    icon: Lock,
    title: "Integrated Payments",
    description: "Stripe/Paddle handles payments and invoices automatically with secure processing.",
  },
  {
    icon: Bell,
    title: "Smart Alerts",
    description: "Users never get surprised by bills with proactive notifications and limit warnings.",
  },
];

export const WhyDevyntra = () => {
  return (
    <section className="py-24 relative bg-gradient-hero overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            Why Devyntra
            <br />
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Stands Out
            </span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Focus on your code and infrastructure. Devyntra handles tracking, billing, and invoicing automatically.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {benefits.map((benefit, index) => (
            <Card
              key={index}
              className="p-6 bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-glow hover:-translate-y-1 group animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s`, animationFillMode: 'backwards' }}
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <benefit.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">{benefit.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </Card>
          ))}
        </div>

        {/* Hook for DevOps/SREs */}
        <div className="text-center max-w-2xl mx-auto">
          <div className="p-8 rounded-2xl bg-gradient-card border border-primary/20">
            <p className="text-xl md:text-2xl font-semibold text-foreground">
              "Focus on your code and infrastructure. Devyntra handles tracking, billing, and invoicing automatically."
            </p>
            <p className="text-muted-foreground mt-4">— Built for DevOps & SRE Teams</p>
          </div>
        </div>
      </div>
    </section>
  );
};
