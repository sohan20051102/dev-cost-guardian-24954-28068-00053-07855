import { Card } from "@/components/ui/card";
import { Sparkles, Wrench, Rocket, Receipt } from "lucide-react";

const features = [
  {
    icon: Sparkles,
    title: "AI-Powered Automation",
    description: "Tell Devyntra what you want — it sets up CI/CD, generates Docker, deploys, and manages infra. No YAML, no headaches.",
    color: "text-blue-500"
  },
  {
    icon: Wrench,
    title: "Smart Fix Engine",
    description: "Detects code and pipeline errors, auto-fixes or suggests optimal solutions.",
    color: "text-green-500"
  },
  {
    icon: Rocket,
    title: "One-Click Deploy",
    description: "Deploy your app instantly with auto-scaling, monitoring, and rollback.",
    color: "text-purple-500"
  },
  {
    icon: Receipt,
    title: "Auto Billing",
    description: "Tracks your AWS/GCP/API usage, calculates cost, generates invoices, and even charges automatically.",
    color: "text-orange-500"
  }
];

export const DevyntraMagic = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            The <span className="bg-gradient-primary bg-clip-text text-transparent">Devyntra Magic</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            What Devyntra does differently and better
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card
                key={index}
                className="p-6 md:p-8 border-border bg-card hover:border-primary/50 transition-all duration-300 hover:shadow-glow hover:scale-105 group"
              >
                <div className="mb-4">
                  <div className={`inline-flex p-3 rounded-lg bg-primary/10 ${feature.color} group-hover:scale-110 transition-transform`}>
                    <Icon className="w-8 h-8" />
                  </div>
                </div>
                <h3 className="text-xl md:text-2xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </Card>
            );
          })}
        </div>

        {/* Comparison Section */}
        <div className="mt-16 md:mt-24 max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-6 md:p-8 bg-destructive/5 border-destructive/20">
              <h3 className="text-xl font-semibold mb-4 text-destructive">Without Devyntra</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-destructive mt-1">✗</span>
                  <span>Manual YAML configuration</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-destructive mt-1">✗</span>
                  <span>Hours debugging pipelines</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-destructive mt-1">✗</span>
                  <span>Complex deployment processes</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-destructive mt-1">✗</span>
                  <span>Manual billing tracking</span>
                </li>
              </ul>
            </Card>

            <Card className="p-6 md:p-8 bg-primary/5 border-primary/20">
              <h3 className="text-xl font-semibold mb-4 text-primary">With Devyntra</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>AI generates everything</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Auto-fixes errors instantly</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>One-click deployment</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Automated billing & invoices</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
