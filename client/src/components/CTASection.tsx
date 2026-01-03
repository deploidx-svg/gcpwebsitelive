import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";

export default function CTASection() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="relative p-8 sm:p-12 rounded-md overflow-hidden text-center shadow-[0_8px_50px_rgba(0,0,0,0.3)]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div 
            className="absolute inset-0 bg-gradient-to-br from-primary/20 via-primary/10 to-transparent animate-pulse"
            style={{ animationDuration: "4s" }}
          />
          <div 
            className="absolute inset-0 backdrop-blur-xl bg-white/[0.03] border border-white/[0.1] rounded-md"
          />
          <div 
            className="absolute inset-0 opacity-30"
            style={{
              background: "linear-gradient(135deg, rgba(255,255,255,0.1) 0%, transparent 40%, transparent 60%, rgba(255,255,255,0.05) 100%)",
            }}
          />
          
          <div className="relative z-10">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/20 mb-6">
              <MessageCircle className="w-8 h-8 text-primary" />
            </div>
            
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">
              Ready to Build Your Website?
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto mb-8">
              Talk to our AI consultant for instant guidance, clear pricing, and no pressure. Get started on your same-day website today.
            </p>
            
            <Button
              size="lg"
              asChild
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg gap-2"
            >
              <a
                href="https://clients.growithcp.live/order/product?pid=d5308768-251d-4859-d56c-747e390921e6"
                target="_blank"
                rel="noopener noreferrer"
                data-testid="button-cta-section"
              >
                Talk to AI Website Consultant
                <ArrowRight className="w-5 h-5" />
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
