import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Server,
  Check,
  ArrowRight,
  Shield,
  Zap,
  Monitor,
  Clock,
  RefreshCw,
  Lock,
  Cloud,
  Database,
  Globe,
  TrendingUp
} from "lucide-react";
import { Link } from "wouter";

const features = [
  {
    icon: Cloud,
    title: "Cloud Hosting",
    description: "Scalable cloud infrastructure that grows with your business needs."
  },
  {
    icon: Shield,
    title: "SSL Security",
    description: "Free SSL certificates with automatic renewal for secure connections."
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "CDN integration and optimized servers for blazing fast load times."
  },
  {
    icon: Monitor,
    title: "99.9% Uptime",
    description: "Reliable hosting with industry-leading uptime guarantees."
  },
  {
    icon: RefreshCw,
    title: "Auto Backups",
    description: "Daily automated backups to protect your data and content."
  },
  {
    icon: Lock,
    title: "DDoS Protection",
    description: "Built-in protection against cyber attacks and malicious traffic."
  }
];

const benefits = [
  {
    icon: TrendingUp,
    title: "Better Performance",
    description: "Fast loading websites rank higher and convert more visitors."
  },
  {
    icon: Shield,
    title: "Enhanced Security",
    description: "Protect your business and customers with enterprise-grade security."
  },
  {
    icon: Clock,
    title: "24/7 Monitoring",
    description: "Round-the-clock monitoring ensures your website is always online."
  }
];

const hostingPlans = [
  {
    name: "Basic Hosting",
    price: "₹299",
    period: "/month",
    features: ["1 website", "10GB storage", "Unlimited bandwidth", "Free SSL", "Daily backups"],
    recommended: false
  },
  {
    name: "Professional Hosting",
    price: "₹599",
    period: "/month",
    features: ["5 websites", "50GB storage", "Unlimited bandwidth", "Priority support", "Advanced security"],
    recommended: true
  },
  {
    name: "Business Hosting",
    price: "₹999",
    period: "/month",
    features: ["Unlimited websites", "100GB storage", "CDN included", "Dedicated IP", "White-label support"],
    recommended: false
  }
];

const additionalServices = [
  {
    title: "Domain Registration",
    description: "Register or transfer domains with easy management.",
    price: "₹299/year"
  },
  {
    title: "Email Hosting",
    description: "Professional email hosting with your domain.",
    price: "₹199/year"
  },
  {
    title: "Migration Service",
    description: "Seamless migration from your current hosting provider.",
    price: "₹999 one-time"
  },
  {
    title: "Custom SSL",
    description: "Wildcard SSL certificates for enhanced security.",
    price: "₹1,999/year"
  }
];

export default function Hosting() {
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
            <Server className="w-4 h-4 text-primary" />
            <span className="text-sm text-primary font-medium">Hosting & Deployment</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Reliable Hosting That <span className="text-primary">Powers Your Success</span>
          </h1>
          <p className="text-muted-foreground max-w-3xl mx-auto text-lg mb-8">
            Fast, secure, and scalable hosting solutions designed for modern websites.
            From basic hosting to enterprise solutions, we provide the infrastructure your business needs.
            Get your website online in minutes.
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
                Get Hosting Now
                <ArrowRight className="w-5 h-5" />
              </a>
            </Button>
            <Link href="/pricing">
              <Button
                size="lg"
                variant="outline"
                className="px-8 py-6 text-lg border-white/10 bg-white/5 backdrop-blur-sm"
              >
                View Plans
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
            Why Choose Our Hosting?
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

        {/* Hosting Plans */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">
            Choose Your Hosting Plan
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {hostingPlans.map((plan, index) => (
              <motion.div
                key={plan.name}
                className={`relative p-6 rounded-md bg-white/[0.02] backdrop-blur-xl border transition-all duration-300 ${
                  plan.recommended
                    ? 'border-primary/50 bg-primary/5'
                    : 'border-white/[0.08]'
                }`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              >
                {plan.recommended && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <Badge className="bg-primary text-primary-foreground">Most Popular</Badge>
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-xl font-semibold text-foreground mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center gap-1 mb-4">
                    <span className="text-3xl font-bold text-primary">{plan.price}</span>
                    <span className="text-muted-foreground text-sm">{plan.period}</span>
                  </div>
                </div>
                <ul className="space-y-2 mb-6">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm">
                      <Check className="w-4 h-4 text-primary shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  className={`w-full ${
                    plan.recommended
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
        </motion.div>

        {/* Features Grid */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">
            Enterprise-Grade Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                className="p-6 rounded-md bg-white/[0.02] backdrop-blur-xl border border-white/[0.08]"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
              >
                <feature.icon className="w-8 h-8 text-primary mb-4" />
                <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Additional Services */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">
            Additional Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {additionalServices.map((service, index) => (
              <motion.div
                key={service.title}
                className="p-6 rounded-md bg-white/[0.02] backdrop-blur-xl border border-white/[0.08]"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
              >
                <h3 className="text-lg font-semibold text-foreground mb-2">{service.title}</h3>
                <p className="text-muted-foreground mb-3">{service.description}</p>
                <div className="text-primary font-semibold">{service.price}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="text-center bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 rounded-lg p-8 border border-primary/20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
        >
          <h2 className="text-2xl font-bold text-foreground mb-4">
            Ready to Get Your Website Online?
          </h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Get reliable hosting with enterprise-grade security and performance.
            Your website will be online in minutes with our automated deployment process.
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
              Start Hosting
              <ArrowRight className="w-5 h-5" />
            </a>
          </Button>
        </motion.div>
      </div>
    </div>
  );
}
