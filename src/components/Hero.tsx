import { Button } from "@/components/ui/button";
import { ArrowRight, Activity, Zap, DollarSign } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

export const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-hero">
        <img
          src={heroBg}
          alt=""
          className="w-full h-full object-cover opacity-20 mix-blend-lighten"
        />
      </div>
      
      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(217_25%_15%_/_0.1)_1px,transparent_1px),linear-gradient(to_bottom,hsl(217_25%_15%_/_0.1)_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      {/* Content */}
      <div className="relative container mx-auto px-4 md:px-6 py-12 md:py-6">
        <div className="max-w-4xl mx-auto text-center space-y-8 md:space-y-6">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 md:px-4 py-1.5 md:py-2 rounded-full bg-secondary/50 border border-border backdrop-blur-sm animate-fade-in">
            <Zap className="w-3 h-3 md:w-4 md:h-4 text-primary" />
            <span className="text-xs md:text-sm text-muted-foreground">Built for DevOps Teams</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-snug sm:leading-tight animate-fade-in" style={{ animationDelay: '0.1s', animationFillMode: 'backwards' }}>
            Your AI DevOps Engineer —{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Always On.
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-base sm:text-lg md:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in leading-relaxed" style={{ animationDelay: '0.2s', animationFillMode: 'backwards' }}>
            Devyntra automates your entire DevOps workflow — from analyzing code, generating pipelines, fixing errors, deploying to cloud, scaling apps, and managing billing — all in one click.
            <br className="hidden sm:block" />
            <span className="font-semibold">No YAML. No configs. No hassle.</span>
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-4 pt-4 md:pt-2 animate-fade-in" style={{ animationDelay: '0.3s', animationFillMode: 'backwards' }}>
            <Button variant="hero" size="default" className="group w-auto px-6">
              Start Free Trial
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 pt-6 md:pt-10 max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '0.4s', animationFillMode: 'backwards' }}>
            <div className="space-y-2 md:space-y-1 group cursor-default transition-transform hover:scale-105">
              <div className="flex items-center justify-center gap-2">
                <Activity className="w-4 h-4 md:w-5 md:h-5 text-primary transition-transform group-hover:scale-110" />
                <span className="text-xl md:text-2xl lg:text-3xl font-bold">99.9%</span>
              </div>
              <p className="text-xs md:text-sm text-muted-foreground">Uptime Guaranteed</p>
            </div>
            <div className="space-y-2 md:space-y-1 group cursor-default transition-transform hover:scale-105">
              <div className="flex items-center justify-center gap-2">
                <Zap className="w-4 h-4 md:w-5 md:h-5 text-primary transition-transform group-hover:scale-110" />
                <span className="text-xl md:text-2xl lg:text-3xl font-bold">Real-time</span>
              </div>
              <p className="text-xs md:text-sm text-muted-foreground">Usage Tracking</p>
            </div>
            <div className="space-y-2 md:space-y-1 group cursor-default transition-transform hover:scale-105">
              <div className="flex items-center justify-center gap-2">
                <DollarSign className="w-4 h-4 md:w-5 md:h-5 text-primary transition-transform group-hover:scale-110" />
                <span className="text-xl md:text-2xl lg:text-3xl font-bold">Auto</span>
              </div>
              <p className="text-xs md:text-sm text-muted-foreground">Invoice Generation</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};
