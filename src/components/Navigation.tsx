import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Zap } from "lucide-react";

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-4 md:px-8">
      <div
        className={`mx-auto transition-all duration-500 ease-in-out ${
          isScrolled
            ? "bg-card/80 backdrop-blur-xl border border-border shadow-elevated mt-4 rounded-2xl max-w-4xl"
            : "max-w-full bg-transparent border border-transparent"
        }`}
      >
        <div className={`transition-all duration-500 ease-in-out ${isScrolled ? 'px-4 md:px-6' : 'container px-6 mx-auto'}`}>
          <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-gradient-primary flex items-center justify-center">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold">Devyntra</span>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-muted-foreground hover:text-foreground transition-smooth">
              Features
            </a>
            <a href="#pricing" className="text-muted-foreground hover:text-foreground transition-smooth">
              Pricing
            </a>
            <a href="#about" className="text-muted-foreground hover:text-foreground transition-smooth">
              About
            </a>
          </div>

          {/* CTA Button */}
          <div className="flex items-center">
            <Button variant="hero" size="sm">
              Get Started
            </Button>
          </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
