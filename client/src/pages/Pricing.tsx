import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, Zap, Eye, Crown, Star, Rocket } from "lucide-react";
import { cn } from "@/lib/utils";

const demoPlan = {
  name: "AI Website Demo",
  price: "FREE",
  originalPrice: "₹149",
  subtitle: "(Limited Time Offer)",
  description: "Get a professional AI-generated website demo within 24 hours",
  features: [
    "AI-generated website demo (Home page)",
    "Layout + color theme based on business type",
    "Sample content (AI-written)",
    "Mobile-responsive preview",
    "Demo link shared within 24 hours",
  ],
  note: "⚠️ Demo is non-deployable. Hosting, domain, and backend not included.",
  popular: false,
};

const subscriptionPlans = [
  {
    name: "Starter Plan",
    price: "₹499",
    period: "/month",
    subtitle: "Best for individuals & small services",
    features: [
      "1-page AI-designed website",
      "AI-written content (basic)",
      "Mobile responsive design",
      "Monthly AI content refresh",
      "Free minor text changes (1/month)",
      "Basic SEO setup",
      "GrowithCP branding",
    ],
    notIncluded: [
      "Custom backend",
      "E-commerce",
      "Advanced animations",
    ],
    icon: Star,
    popular: false,
  },
  {
    name: "Growth Plan",
    price: "₹1,499",
    period: "/month",
    subtitle: "Best for startups & professionals",
    features: [
      "Includes everything in Starter +",
      "Up to 5 pages",
      "Improved AI content + brand tone",
      "Contact form integration",
      "WhatsApp chat button",
      "Monthly design updates",
      "Image optimization",
      "Basic performance optimization",
      "Reduced GrowithCP branding",
    ],
    icon: Zap,
    popular: true,
  },
  {
    name: "Pro Business Plan",
    price: "₹2,999",
    period: "/month",
    subtitle: "Best for serious businesses",
    features: [
      "Includes everything in Growth +",
      "Up to 10 pages",
      "Advanced UI/UX design",
      "AI-optimized SEO content",
      "Blog / updates section",
      "Speed & performance optimization",
      "Analytics integration",
      "Priority support",
      "No GrowithCP branding",
    ],
    icon: Crown,
    popular: false,
  },
  {
    name: "Elite AI Plan",
    price: "₹4,999",
    period: "/month",
    subtitle: "Best for e-commerce & high-scale brands",
    features: [
      "Includes everything in Pro +",
      "E-commerce or advanced backend support",
      "AI chatbot integration",
      "Dynamic content (admin-controlled)",
      "Advanced SEO + schema setup",
      "Security hardening (basic)",
      "Weekly updates & monitoring",
      "Dedicated support",
      "Custom feature requests (within scope)",
    ],
    icon: Rocket,
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
            No hidden fees. No surprises. Monthly subscriptions with cancel anytime.
          </p>
        </motion.div>

        {/* Demo Plan */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className="max-w-md mx-auto">
            <motion.div
              className="group relative p-6 rounded-md overflow-visible bg-white/[0.03] backdrop-blur-xl border border-white/[0.08] transition-all duration-300"
              whileHover={{ y: -4 }}
            >
              <div
                className="absolute inset-0 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"
                style={{
                  background: "radial-gradient(circle at center, hsl(345 70% 42% / 0.15) 0%, transparent 70%)",
                }}
              />

              <div className="text-center mb-6">
                <Eye className="w-24 h-24 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-1">{demoPlan.name}</h3>
                <p className="text-sm text-primary font-medium">{demoPlan.subtitle}</p>
                <div className="flex items-center justify-center gap-2 my-4">
                  <span className="text-2xl font-bold text-muted-foreground line-through">₹149</span>
                  <span className="text-4xl font-bold text-primary">{demoPlan.price}</span>
                </div>
                <p className="text-muted-foreground text-sm">{demoPlan.description}</p>
              </div>

              <div className="mb-4">
                <h4 className="font-medium text-foreground mb-3">What client gets:</h4>
                <ul className="space-y-2">
                  {demoPlan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm">
                      <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <p className="text-xs text-amber-400 mb-4">{demoPlan.note}</p>

              <Button className="w-full bg-primary hover:bg-primary/90" asChild>
                <a
                  href="https://betaai.growithcp.live/"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid="button-pricing-demo"
                >
                  Get Demo
                </a>
              </Button>
            </motion.div>
          </div>
        </motion.div>

        {/* Subscription Plans Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="text-3xl font-bold text-foreground mb-4">🚀 Subscription Plans</h2>
        </motion.div>

        {/* Subscription Plans Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {subscriptionPlans.map((plan, index) => {
            const IconComponent = plan.icon;
            return (
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
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
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
                  <IconComponent className="w-20 h-20 text-primary mb-4" />
                  <h3 className="text-xl font-semibold text-foreground mb-1">{plan.name}</h3>
                  <p className="text-sm text-primary font-medium mb-3">{plan.subtitle}</p>
                  <div className="flex items-baseline gap-1 mb-2">
                    <span className="text-3xl font-bold text-primary">{plan.price}</span>
                    <span className="text-muted-foreground text-sm">{plan.period}</span>
                  </div>
                </div>

                <ul className="space-y-2 mb-6">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm">
                      <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                {plan.notIncluded && (
                  <div className="mb-6">
                    <p className="text-xs text-muted-foreground mb-2">Not included:</p>
                    <ul className="space-y-1">
                      {plan.notIncluded.map((item) => (
                        <li key={item} className="text-xs text-muted-foreground">• {item}</li>
                      ))}
                    </ul>
                  </div>
                )}

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
                    data-testid={`button-pricing-${plan.name.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    Get Started
                  </a>
                </Button>
              </motion.div>
            );
          })}
        </div>

        {/* Common Notes */}
        <motion.div
          className="bg-white/[0.02] backdrop-blur-xl border border-white/[0.08] rounded-lg p-6 max-w-4xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <h3 className="text-lg font-semibold text-foreground mb-4">⚙️ Common Notes (Important)</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-muted-foreground">
            <ul className="space-y-2">
              <li>• No upfront development cost</li>
              <li>• Hosting & domain can be client-provided or arranged separately</li>
              <li>• Plans are monthly & cancel anytime</li>
            </ul>
            <ul className="space-y-2">
              <li>• Custom features quoted separately</li>
              <li>• Free demo available (limited time offer)</li>
            </ul>
          </div>
        </motion.div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <p className="text-muted-foreground text-sm">
            Need something specific?
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
