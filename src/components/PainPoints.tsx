import { Card } from "@/components/ui/card";
import { FileCode, Clock, DollarSign, TrendingUp } from "lucide-react";

const painPoints = [
  {
    icon: FileCode,
    title: "Tired of endless YAML configs?",
    description: "Hours wasted debugging syntax errors in configuration files"
  },
  {
    icon: Clock,
    title: "Debugging CI/CD pipelines at 2 AM?",
    description: "Production breaks at the worst possible times"
  },
  {
    icon: DollarSign,
    title: "Manual billing chaos?",
    description: "Tracking cloud costs and generating invoices manually"
  },
  {
    icon: TrendingUp,
    title: "Cloud costs spiraling out of control?",
    description: "Surprise bills with no clear insight into usage patterns"
  }
];

export const PainPoints = () => {
  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Been there. <span className="text-muted-foreground">Hated it.</span>{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">Fixed it.</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            We understand your pain. Here's what keeps DevOps teams up at night.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
          {painPoints.map((pain, index) => {
            const Icon = pain.icon;
            return (
              <Card
                key={index}
                className="p-6 md:p-8 border-border bg-card hover:border-primary/50 transition-all duration-300 hover:shadow-glow group"
              >
                <div className="flex gap-4 items-start">
                  <div className="p-3 rounded-lg bg-destructive/10 text-destructive group-hover:bg-destructive/20 transition-colors">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg md:text-xl font-semibold mb-2">{pain.title}</h3>
                    <p className="text-muted-foreground">{pain.description}</p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
