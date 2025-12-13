import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, Zap } from "lucide-react";
import { cn } from "@/lib/utils";

const plans = [
  {
    name: "Starter",
    price: "$199",
    description: "Perfect for personal projects and small businesses just getting started.",
    features: [
      "Single page website",
      "Mobile responsive",
      "Basic SEO setup",
      "Contact form",
      "Same-day delivery",
      "30 days support",
    ],
    popular: false,
  },
  {
    name: "Business",
    price: "$499",
    description: "Ideal for growing businesses that need a professional online presence.",
    features: [
      "Up to 5 pages",
      "Mobile responsive",
      "Advanced SEO",
      "Contact & lead forms",
      "Same-day delivery",
      "60 days support",
      "Basic analytics",
      "Social media integration",
    ],
    popular: true,
  },
  {
    name: "E-Commerce",
    price: "$999",
    description: "Complete online store solution with all the features you need to sell.",
    features: [
      "Full online store",
      "Payment integration",
      "Product catalog",
      "Inventory management",
      "Order tracking",
      "Same-day delivery",
      "90 days support",
      "Analytics dashboard",
    ],
    popular: false,
  },
  {
    name: "Custom",
    price: "Custom",
    description: "Enterprise solutions tailored to your specific requirements.",
    features: [
      "Unlimited pages",
      "Custom functionality",
      "API integrations",
      "Priority support",
      "Dedicated manager",
      "Flexible timeline",
      "Custom analytics",
      "White-label options",
    ],
    popular: false,
  },
];

export default function Pricing() {
  return (
    <div className="min-h-screen pt-28 pb-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <Zap className="w-4 h-4 text-primary" />
            <span className="text-sm text-primary font-medium">Most Affordable in Market</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Simple, Transparent <span className="text-primary">Pricing</span>
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            No hidden fees. No surprises. Same-day delivery on all plans.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              className={cn(
                "group relative p-6 rounded-md overflow-visible",
                "bg-white/[0.03] backdrop-blur-xl",
                "border transition-all duration-300",
                plan.popular 
                  ? "border-primary/50" 
                  : "border-white/[0.08]"
              )}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -4 }}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <Badge className="bg-primary text-primary-foreground">Most Popular</Badge>
                </div>
              )}
              
              <div 
                className="absolute inset-0 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"
                style={{
                  background: "radial-gradient(circle at center, hsl(345 70% 42% / 0.15) 0%, transparent 70%)",
                }}
              />
              
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-foreground mb-2">{plan.name}</h3>
                <div className="flex items-baseline gap-1 mb-2">
                  <span className="text-3xl font-bold text-primary">{plan.price}</span>
                  {plan.price !== "Custom" && <span className="text-muted-foreground text-sm">/project</span>}
                </div>
                <p className="text-muted-foreground text-sm">{plan.description}</p>
              </div>
              
              <ul className="space-y-3 mb-6">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm">
                    <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Button 
                className={cn(
                  "w-full",
                  plan.popular 
                    ? "bg-primary hover:bg-primary/90" 
                    : "bg-white/5 hover:bg-white/10 border border-white/10"
                )}
                asChild
              >
                <a 
                  href="https://betaai.growithcp.live/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  data-testid={`button-pricing-${plan.name.toLowerCase()}`}
                >
                  Get Started
                </a>
              </Button>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <p className="text-muted-foreground text-sm">
            All prices are one-time payments. Need something specific? 
            <a 
              href="https://betaai.growithcp.live/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary hover:underline ml-1"
              data-testid="link-pricing-custom"
            >
              Talk to our AI consultant
            </a>
          </p>
        </motion.div>
      </div>
    </div>
  );
}
