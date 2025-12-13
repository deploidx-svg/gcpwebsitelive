import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle, Mail, Clock, CheckCircle } from "lucide-react";

const benefits = [
  { icon: MessageCircle, text: "Instant AI-powered guidance" },
  { icon: CheckCircle, text: "Clear, transparent pricing" },
  { icon: Clock, text: "Same-day website delivery" },
  { icon: Mail, text: "No spam, no pressure" },
];

export default function Contact() {
  return (
    <div className="min-h-screen pt-28 pb-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Let's Build Your <span className="text-primary">Website</span>
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Confused about pricing or website type? Our AI consultant can help you figure it out instantly.
          </p>
        </motion.div>

        <motion.div
          className="relative p-8 sm:p-12 rounded-md overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div 
            className="absolute inset-0 bg-gradient-to-br from-primary/20 via-primary/10 to-transparent"
          />
          <div 
            className="absolute inset-0 backdrop-blur-xl bg-white/[0.02] border border-white/[0.08] rounded-md"
          />
          
          <div className="relative z-10 text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/20 mb-8">
              <MessageCircle className="w-10 h-10 text-primary" />
            </div>
            
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
              Talk to Our AI Website Consultant
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto mb-8">
              Get instant answers about our services, pricing, and what type of website would work best for your needs. No waiting, no forms to fill out.
            </p>
            
            <Button 
              size="lg"
              asChild
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-10 py-7 text-lg gap-3"
            >
              <a 
                href="https://betaai.growithcp.live/" 
                target="_blank" 
                rel="noopener noreferrer"
                data-testid="button-contact-cta"
              >
                Talk to AI Website Consultant
                <ArrowRight className="w-5 h-5" />
              </a>
            </Button>
            
            <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.text}
                  className="flex flex-col items-center gap-2"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                >
                  <benefit.icon className="w-5 h-5 text-primary" />
                  <span className="text-sm text-muted-foreground text-center">{benefit.text}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <p className="text-muted-foreground">
            Prefer email? Reach us at{" "}
            <a 
              href="mailto:hello@growithcp.com" 
              className="text-primary hover:underline"
              data-testid="link-contact-email"
            >
              hello@growithcp.com
            </a>
          </p>
        </motion.div>
      </div>
    </div>
  );
}
