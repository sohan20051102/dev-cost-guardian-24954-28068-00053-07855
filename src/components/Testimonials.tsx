import { Card } from "@/components/ui/card";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "I replaced 6 DevOps tools with Devyntra.",
    author: "Raj",
    role: "SRE Lead @ TechNova"
  },
  {
    quote: "It's like ChatGPT for my pipelines.",
    author: "Nisha",
    role: "Cloud Engineer @ StartupX"
  },
  {
    quote: "Auto-billing saved me 20 hours a month.",
    author: "Marcus",
    role: "DevOps Engineer @ ScaleUp"
  }
];

export const Testimonials = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="p-6 md:p-8 border-border bg-card hover:border-primary/50 transition-all duration-300 hover:shadow-glow group"
            >
              <div className="mb-4">
                <Quote className="w-8 h-8 text-primary/50 group-hover:text-primary transition-colors" />
              </div>
              <p className="text-lg md:text-xl font-medium mb-4">
                "{testimonial.quote}"
              </p>
              <div className="border-t border-border pt-4">
                <p className="font-semibold">{testimonial.author}</p>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
              </div>
            </Card>
          ))}
        </div>

        {/* Logo Bar Placeholder */}
        <div className="mt-12 md:mt-16 text-center">
          <p className="text-sm text-muted-foreground mb-6">Integration Partners</p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-50">
            <div className="px-6 py-3 bg-muted rounded-lg text-sm font-semibold">AWS Partner</div>
            <div className="px-6 py-3 bg-muted rounded-lg text-sm font-semibold">OpenAI API</div>
            <div className="px-6 py-3 bg-muted rounded-lg text-sm font-semibold">Google Cloud</div>
          </div>
        </div>
      </div>
    </section>
  );
};
