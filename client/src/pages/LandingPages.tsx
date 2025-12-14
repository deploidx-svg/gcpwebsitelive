import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Layout,
  Check,
  ArrowRight,
  Target,
  Zap,
  Users,
  BarChart3,
  Smartphone,
  Mail,
  Download,
  Clock,
  TrendingUp
} from "lucide-react";
import { Link } from "wouter";

const features = [
  {
    icon: Target,
    title: "Conversion Optimized",
    description: "Designed specifically to convert visitors into leads or customers with proven strategies."
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Optimized loading speeds to reduce bounce rates and improve user experience."
  },
  {
    icon: Mail,
    title: "Lead Capture Forms",
    description: "Integrated forms that capture visitor information and nurture leads automatically."
  },
  {
    icon: BarChart3,
    title: "Analytics Integration",
    description: "Track visitor behavior, conversion rates, and campaign performance."
  },
  {
    icon: Smartphone,
    title: "Mobile First Design",
    description: "Responsive design that looks perfect and converts on all devices."
  },
  {
    icon: Download,
    title: "Resource Downloads",
    description: "Offer valuable content like ebooks, guides, or tools in exchange for contact info."
  }
];

const benefits = [
  {
    icon: TrendingUp,
    title: "Higher Conversion Rates",
    description: "Purpose-built landing pages convert 2-5x better than general website pages."
  },
  {
    icon: Users,
    title: "Target Specific Audiences",
    description: "Speak directly to your ideal customers with focused messaging and offers."
  },
  {
    icon: Clock,
    title: "Quick Campaign Launches",
    description: "Launch marketing campaigns faster with dedicated landing pages."
  }
];

const landingPageTypes = [
  {
    title: "Product Launch Pages",
    description: "Perfect for introducing new products or services to the market.",
    features: ["Product showcase", "Pre-order forms", "Launch countdown", "Social proof", "Video integration"]
  },
  {
    title: "Lead Generation Pages",
    description: "Designed to capture leads through valuable content offers.",
    features: ["Lead magnets", "Email capture", "Newsletter signup", "Content downloads", "Webinar registration"]
  },
  {
    title: "Event Registration Pages",
    description: "Streamlined pages for event signups and ticket sales.",
    features: ["Event details", "Registration forms", "Ticket pricing", "Calendar integration", "Payment processing"]
  },
  {
    title: "Sales Pages",
    description: "High-converting sales pages for digital products and services.",
    features: ["Product benefits", "Pricing display", "Testimonials", "Guarantee badges", "Urgency elements"]
  }
];

const optimizationFeatures = [
  {
    title: "A/B Testing Ready",
    description: "Built to support split testing of headlines, images, and calls-to-action."
  },
  {
    title: "SEO Optimized",
    description: "Search engine optimized to drive organic traffic from relevant searches."
  },
  {
    title: "Social Media Integration",
    description: "Easy sharing and social proof integration for viral marketing."
  },
  {
    title: "Email Marketing Ready",
    description: "Seamless integration with email marketing platforms for lead nurturing."
  }
];

export default function LandingPages() {
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
            <Layout className="w-4 h-4 text-primary" />
            <span className="text-sm text-primary font-medium">Landing Pages</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            High-Converting Landing Pages That <span className="text-primary">Turn Visitors into Customers</span>
          </h1>
          <p className="text-muted-foreground max-w-3xl mx-auto text-lg mb-8">
            Purpose-built landing pages designed for one goal: conversion. Whether you're launching a product,
            generating leads, or driving sales, our landing pages are optimized to deliver results.
            Created in 24 hours.
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
                Create Your Landing Page
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
            Why Landing Pages Convert Better
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

        {/* Landing Page Types */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">
            Specialized Landing Page Types
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {landingPageTypes.map((type, index) => (
              <motion.div
                key={type.title}
                className="p-6 rounded-md bg-white/[0.02] backdrop-blur-xl border border-white/[0.08]"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              >
                <h3 className="text-xl font-semibold text-foreground mb-3">{type.title}</h3>
                <p className="text-muted-foreground mb-4">{type.description}</p>
                <ul className="space-y-2">
                  {type.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm">
                      <Check className="w-4 h-4 text-primary shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Optimization Features */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">
            Built for Maximum Conversions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {optimizationFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                className="p-6 rounded-md bg-white/[0.02] backdrop-blur-xl border border-white/[0.08]"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
              >
                <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">
            Conversion Optimization Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                className="p-6 rounded-md bg-white/[0.02] backdrop-blur-xl border border-white/[0.08]"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
              >
                <feature.icon className="w-8 h-8 text-primary mb-4" />
                <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm">{feature.description}</p>
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
            Ready to Create a High-Converting Landing Page?
          </h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Get a professionally designed landing page optimized for conversions.
            Perfect for product launches, lead generation, or sales campaigns. Delivered in 24 hours.
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
              Start Converting
              <ArrowRight className="w-5 h-5" />
            </a>
          </Button>
        </motion.div>
      </div>
    </div>
  );
}
