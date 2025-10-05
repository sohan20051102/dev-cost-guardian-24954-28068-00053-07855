import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MessageCircle, X, Send } from "lucide-react";

export const AIChat = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Chat Bubble */}
      {!isOpen && (
        <div className="fixed bottom-6 right-6 z-50 animate-fade-in hidden md:block">
          <Button
            onClick={() => setIsOpen(true)}
            variant="hero"
            size="lg"
            className="rounded-full shadow-glow h-14 w-14 p-0"
          >
            <MessageCircle className="w-6 h-6" />
          </Button>
          <div className="absolute -top-12 right-0 bg-card border border-border rounded-lg px-4 py-2 shadow-lg whitespace-nowrap animate-fade-in">
            <p className="text-sm">Ask Devyntra to set up your first pipeline 👋</p>
            <div className="absolute bottom-0 right-4 transform translate-y-1/2 rotate-45 w-2 h-2 bg-card border-r border-b border-border"></div>
          </div>
        </div>
      )}

      {/* Chat Window */}
      {isOpen && (
        <Card className="fixed bottom-6 right-6 z-50 w-80 md:w-96 shadow-glow animate-scale-in hidden md:block">
          <div className="bg-gradient-primary text-white p-4 rounded-t-lg flex items-center justify-between">
            <div className="flex items-center gap-2">
              <MessageCircle className="w-5 h-5" />
              <span className="font-semibold">Devyntra AI Assistant</span>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(false)}
              className="text-white hover:bg-white/20 h-8 w-8"
            >
              <X className="w-4 h-4" />
            </Button>
          </div>

          <div className="p-4 space-y-4 h-80 overflow-y-auto bg-card">
            <div className="bg-muted rounded-lg p-3 max-w-[80%]">
              <p className="text-sm">👋 Hi! I'm Devyntra's AI assistant. How can I help you today?</p>
            </div>
            <div className="bg-muted rounded-lg p-3 max-w-[80%]">
              <p className="text-sm">Try asking me:</p>
              <ul className="text-xs mt-2 space-y-1 text-muted-foreground">
                <li>• "Set up a CI/CD pipeline"</li>
                <li>• "Deploy my Node.js app"</li>
                <li>• "Track my AWS costs"</li>
              </ul>
            </div>
          </div>

          <div className="p-4 border-t border-border bg-card rounded-b-lg">
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Type your message..."
                className="flex-1 px-3 py-2 bg-muted border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Button variant="hero" size="icon">
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </Card>
      )}
    </>
  );
};
