import { Zap } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border py-12 md:py-12 bg-card/30">
      <div className="container mx-auto px-6 md:px-6">
        <div className="flex flex-wrap gap-6 md:grid md:grid-cols-4 md:gap-8 mb-8 md:mb-8">
          {/* Brand */}
          <div className="space-y-4 md:space-y-4 w-full md:w-auto md:col-span-1">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-primary flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className="text-lg font-bold">Devyntra</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Effortless cloud and AI usage tracking for DevOps teams.
            </p>
          </div>

          {/* Product */}
          <div className="space-y-4 md:space-y-4 flex-1 min-w-[150px]">
            <h4 className="font-semibold">Product</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#features" className="hover:text-foreground transition-smooth">
                  Features
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-foreground transition-smooth">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-smooth">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-smooth">
                  API
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4 md:space-y-4 flex-1 min-w-[150px]">
            <h4 className="font-semibold">Company</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#about" className="hover:text-foreground transition-smooth">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-smooth">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-smooth">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-smooth">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-4 md:space-y-4 flex-1 min-w-[150px]">
            <h4 className="font-semibold">Legal</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-foreground transition-smooth">
                  Privacy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-smooth">
                  Terms
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-smooth">
                  Security
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-smooth">
                  Compliance
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 md:pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4 md:gap-4 text-center md:text-left">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Devyntra. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-smooth">
              Twitter
            </a>
            <a href="#" className="hover:text-foreground transition-smooth">
              GitHub
            </a>
            <a href="#" className="hover:text-foreground transition-smooth">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
