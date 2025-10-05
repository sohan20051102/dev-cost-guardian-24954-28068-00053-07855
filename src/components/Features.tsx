import { Server, Brain, Receipt, Bell, Shield, Gauge } from "lucide-react";
import { Card } from "@/components/ui/card";

const features = [
  {
    icon: Server,
    title: "Cloud Resource Tracking",
    description: "Automatically monitor CPU, RAM, and storage usage across AWS, GCP, and Azure with real-time updates.",
  },
  {
    icon: Brain,
    title: "AI Usage Analytics",
    description: "Track OpenAI tokens, ML API calls, and model usage with detailed breakdowns and cost projections.",
  },
  {
    icon: Receipt,
    title: "Instant Invoicing",
    description: "Generate professional invoices automatically at month-end with detailed usage reports and payment links.",
  },
  {
    icon: Bell,
    title: "Smart Alerts",
    description: "Get notified via email, Slack, or SMS when approaching plan limits or detecting anomalies.",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "SOC 2 compliant with end-to-end encryption, SSO support, and granular access controls.",
  },
  {
    icon: Gauge,
    title: "Performance Insights",
    description: "Deep analytics on resource efficiency, cost optimization opportunities, and usage patterns.",
  },
];

export const Features = () => {
  return (
    <section id="features" className="py-24 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            Everything You Need
            <br />
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              In One Platform
            </span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Stop juggling multiple tools. Devyntra consolidates cloud and AI usage tracking,
            billing, and invoicing into a single, powerful dashboard.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="p-6 bg-gradient-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-glow hover:-translate-y-1 group animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s`, animationFillMode: 'backwards' }}
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-all group-hover:scale-110">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
