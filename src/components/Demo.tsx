import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Terminal, CheckCircle2 } from "lucide-react";

export const Demo = () => {
  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              See It In <span className="bg-gradient-primary bg-clip-text text-transparent">Action</span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground">
              Watch how Devyntra transforms your workflow
            </p>
          </div>

          <Card className="p-8 md:p-12 bg-card border-border">
            <div className="space-y-6">
              {/* Step 1 */}
              <div className="flex items-start gap-4 animate-fade-in">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold">
                  1
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <Terminal className="w-5 h-5 text-primary" />
                    <span className="font-mono text-sm text-muted-foreground">AI Command</span>
                  </div>
                  <div className="bg-muted/50 rounded-lg p-4 font-mono text-sm">
                    "Deploy my Node.js app with Redis and PostgreSQL"
                  </div>
                </div>
              </div>

              {/* Arrow */}
              <div className="flex justify-center">
                <ArrowRight className="w-6 h-6 text-primary animate-pulse" />
              </div>

              {/* Step 2 */}
              <div className="flex items-start gap-4 animate-fade-in" style={{ animationDelay: '0.2s', animationFillMode: 'backwards' }}>
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold">
                  2
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <CheckCircle2 className="w-5 h-5 text-green-500" />
                    <span className="font-mono text-sm text-muted-foreground">Pipeline Building</span>
                  </div>
                  <div className="space-y-2">
                    <div className="bg-muted/50 rounded p-3 text-sm flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-500" />
                      <span>Docker configuration generated</span>
                    </div>
                    <div className="bg-muted/50 rounded p-3 text-sm flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-500" />
                      <span>CI/CD pipeline created</span>
                    </div>
                    <div className="bg-muted/50 rounded p-3 text-sm flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-500" />
                      <span>Infrastructure provisioned</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Arrow */}
              <div className="flex justify-center">
                <ArrowRight className="w-6 h-6 text-primary animate-pulse" />
              </div>

              {/* Step 3 */}
              <div className="flex items-start gap-4 animate-fade-in" style={{ animationDelay: '0.4s', animationFillMode: 'backwards' }}>
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold">
                  3
                </div>
                <div className="flex-1">
                  <div className="bg-gradient-primary rounded-lg p-6 text-white">
                    <div className="flex items-center gap-2 mb-2">
                      <CheckCircle2 className="w-6 h-6" />
                      <span className="font-semibold text-lg">Deployed Successfully!</span>
                    </div>
                    <p className="text-white/90 text-sm">Your app is live at: https://your-app.devyntra.io</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 text-center">
              <Button variant="hero" size="lg" className="group w-full sm:w-auto">
                <span className="truncate">Launch Your First Project in 30 Seconds</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform flex-shrink-0" />
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};
