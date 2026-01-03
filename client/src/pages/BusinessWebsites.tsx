import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Briefcase,
  Check,
  ArrowRight,
  Users,
  TrendingUp,
  Shield,
  Clock,
  Zap,
  Globe,
  Smartphone,
  Search,
  MessageSquare
} from "lucide-react";
import { Link } from "wouter";

const features = [
  {
    icon: Globe,
    title: "Professional Design",
    description: "Modern, clean designs that establish credibility and trust with your audience."
  },
  {
    icon: Smartphone,
    title: "Mobile Responsive",
    description: "Perfectly optimized for all devices - desktop, tablet, and mobile."
  },
  {
    icon: Search,
    title: "SEO Optimized",
    description: "Built with search engines in mind to help your business rank higher."
  },
  {
    icon: MessageSquare,
    title: "Contact Integration",
    description: "Multiple ways for customers to reach you - forms, phone, email, chat."
  },
  {
    icon: Zap,
    title: "Fast Loading",
    description: "Optimized performance ensures visitors don't leave due to slow speeds."
  },
  {
    icon: Shield,
    title: "Secure & Reliable",
    description: "SSL certificates and secure hosting to protect your business data."
  }
];

const benefits = [
  {
    icon: Users,
    title: "Build Credibility",
    description: "A professional website establishes trust and authority in your industry."
  },
  {
    icon: TrendingUp,
    title: "Increase Conversions",
    description: "Convert more visitors into customers with clear calls-to-action."
  },
  {
    icon: Clock,
    title: "24/7 Availability",
    description: "Your website works around the clock, generating leads even while you sleep."
  }
];

const pricingTiers = [
  {
    name: "Starter",
    price: "₹999",
    period: "(one time)",
    features: ["1-page website", "Basic SEO", "Contact form", "Mobile responsive"],
    recommended: false
  },
  {
    name: "Growth",
    price: "₹1,999",
    period: "(one time)",
    features: ["Up to 5 pages", "Advanced SEO", "Analytics", "Priority support"],
    recommended: true
  },
  {
    name: "Pro",
    price: "₹2,999",
    period: "(one time)",
    features: ["Up to 10 pages", "Custom features", "Performance optimization", "Dedicated support"],
    recommended: false
  }
];

export default function BusinessWebsites() {
  return (
    <div className="min-h-screen pt-28 pb-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Hero Section */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <Briefcase className="w-4 h-4 text-primary" />
            <span className="text-sm text-primary font-medium">Business Websites</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Professional Websites That <span className="text-primary">Convert Visitors</span>
          </h1>
          <p className="text-muted-foreground max-w-3xl mx-auto text-lg mb-8">
            Establish credibility, build trust, and convert more visitors into customers with our AI-powered business websites.
            Designed by experts, optimized for conversions, delivered in 24 hours.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              size="lg"
              asChild
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg gap-2"
            >
              <a
                href="https://betaai.growithcp.live/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Get Your Business Website
                <ArrowRight className="w-5 h-5" />
              </a>
            </Button>
            <Link href="/pricing">
              <Button
                size="lg"
                variant="outline"
                className="px-8 py-6 text-lg border-white/10 bg-white/5 backdrop-blur-sm"
              >
                View Pricing
              </Button>
            </Link>
          </div>
        </motion.div>

        {/* Key Benefits */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">
            Why Choose Our Business Websites?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                className="text-center p-6 rounded-md bg-white/[0.02] backdrop-blur-xl border border-white/[0.08]"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              >
                <benefit.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">
            Everything You Need Included
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                className="p-6 rounded-md bg-white/[0.02] backdrop-blur-xl border border-white/[0.08]"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              >
                <feature.icon className="w-8 h-8 text-primary mb-4" />
                <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Pricing Preview */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">
            Choose Your Plan
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pricingTiers.map((tier, index) => (
              <motion.div
                key={tier.name}
                className={`relative p-6 rounded-md bg-white/[0.02] backdrop-blur-xl border transition-all duration-300 ${
                  tier.recommended
                    ? 'border-primary/50 bg-primary/5'
                    : 'border-white/[0.08]'
                }`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
              >
                {tier.recommended && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <Badge className="bg-primary text-primary-foreground">Most Popular</Badge>
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-xl font-semibold text-foreground mb-2">{tier.name}</h3>
                  <div className="flex items-baseline justify-center gap-1 mb-4">
                    <span className="text-3xl font-bold text-primary">{tier.price}</span>
                    <span className="text-muted-foreground text-sm">{tier.period}</span>
                  </div>
                </div>
                <ul className="space-y-2 mb-6">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm">
                      <Check className="w-4 h-4 text-primary shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  className={`w-full ${
                    tier.recommended
                      ? 'bg-primary hover:bg-primary/90'
                      : 'bg-white/5 hover:bg-white/10 border border-white/10'
                  }`}
                  asChild
                >
                  <a
                    href="https://betaai.growithcp.live/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Get Started
                  </a>
                </Button>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/pricing">
              <Button variant="outline" className="border-white/10 bg-white/5 backdrop-blur-sm">
                View All Pricing Options
              </Button>
            </Link>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="text-center bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 rounded-lg p-8 border border-primary/20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <h2 className="text-2xl font-bold text-foreground mb-4">
            Ready to Get Your Business Website?
          </h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Talk to our AI consultant to discuss your specific needs and get a custom quote.
            Most websites are delivered within 24 hours.
          </p>
          <Button
            size="lg"
            asChild
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg gap-2"
          >
            <a
              href="https://betaai.growithcp.live/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Talk to AI Consultant
              <ArrowRight className="w-5 h-5" />
            </a>
          </Button>
        </motion.div>
      </div>
    </div>
  );
}
