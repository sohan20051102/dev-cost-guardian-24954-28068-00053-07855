import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

export const FinalCTA = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-hero relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(217_25%_15%_/_0.1)_1px,transparent_1px),linear-gradient(to_bottom,hsl(217_25%_15%_/_0.1)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      
      <div className="container mx-auto px-4 md:px-6 relative max-w-7xl">
        <div className="max-w-3xl mx-auto text-center space-y-6 md:space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium">Transform Your DevOps Workflow</span>
          </div>

          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight">
            DevOps shouldn't be a{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">nightmare</span>
            .<br />
            Let Devyntra handle it.
          </h2>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Join hundreds of DevOps teams who've already said goodbye to manual configurations,
            endless debugging, and billing chaos.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button variant="hero" size="lg" className="group w-full sm:w-auto">
              Start Building
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          <div className="pt-8 text-sm text-muted-foreground">
            No credit card required • Set up in 60 seconds • Cancel anytime
          </div>
        </div>
      </div>
    </section>
  );
};
