import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Zap,
  Check,
  ArrowRight,
  Globe,
  Smartphone,
  Search,
  MessageSquare,
  FileText,
  Users,
  BarChart3,
  Image,
  Shield,
  Clock
} from "lucide-react";
import { Link } from "wouter";

const features = [
  {
    icon: Globe,
    title: "Up to 5 Pages",
    description: "Multi-page website with homepage, about, services, contact, and custom pages."
  },
  {
    icon: FileText,
    title: "Improved AI Content",
    description: "Enhanced content with better tone, SEO optimization, and brand voice matching."
  },
  {
    icon: MessageSquare,
    title: "Contact Form Integration",
    description: "Advanced contact forms with lead capture and email notifications."
  },
  {
    icon: MessageSquare,
    title: "WhatsApp Chat Button",
    description: "Direct WhatsApp integration for instant customer communication."
  },
  {
    icon: BarChart3,
    title: "Monthly Design Updates",
    description: "Regular design improvements and feature updates to keep your site fresh."
  },
  {
    icon: Image,
    title: "Image Optimization",
    description: "Optimized images for faster loading and better user experience."
  }
];

const whatsIncluded = [
  "Includes everything in Starter +",
  "Up to 5 pages website",
  "Improved AI content + brand tone",
  "Contact form integration",
  "WhatsApp chat button",
  "Monthly design updates",
  "Image optimization",
  "Basic performance optimization",
  "Reduced GrowithCP branding",
  "Priority customer support"
];

const advancedFeatures = [
  "Advanced SEO setup with keywords",
  "Google Analytics integration",
  "Social media integration",
  "Newsletter signup forms",
  "Testimonials section",
  "Services/pricing pages"
];

const benefits = [
  {
    icon: Users,
    title: "Perfect for Growing Businesses",
    description: "Ideal for established businesses ready to expand their online presence."
  },
  {
    icon: BarChart3,
    title: "Lead Generation Focused",
    description: "Designed to convert visitors into customers with multiple contact methods."
  },
  {
    icon: Clock,
    title: "Ongoing Optimization",
    description: "Monthly updates ensure your website stays current and effective."
  }
];

export default function GrowthPlan() {
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
            <Zap className="w-4 h-4 text-primary" />
            <span className="text-sm text-primary font-medium">Growth Plan</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Scale Your Business with <span className="text-primary">Professional Websites</span>
          </h1>
          <p className="text-muted-foreground max-w-3xl mx-auto text-lg mb-8">
            Take your business to the next level with our Growth Plan. Up to 5 pages, advanced features,
            analytics integration, and monthly optimizations to drive more leads and sales.
          </p>

          <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 rounded-lg p-6 border border-primary/20 mb-8">
            <div className="flex items-center justify-center gap-4 mb-4">
              <span className="text-3xl font-bold text-primary">₹1,999</span>
              <span className="text-muted-foreground">(one time)</span>
              <Badge className="bg-primary text-primary-foreground">Most Popular</Badge>
            </div>
            <p className="text-muted-foreground">One-time payment • Best value for growing businesses</p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              size="lg"
              asChild
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg gap-2"
            >
              <a
                href="https://wa.me/919108350973?text=I%20want%20the%20Growth%20Plan"
                target="_blank"
                rel="noopener noreferrer"
              >
                💬 Start Growing Today
                <ArrowRight className="w-5 h-5" />
              </a>
            </Button>
            <Link href="/pricing">
              <Button
                size="lg"
                variant="outline"
                className="px-8 py-6 text-lg border-white/10 bg-white/5 backdrop-blur-sm"
              >
                Compare All Plans
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
            Why Choose Growth Plan?
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

        {/* What's Included */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">
            Complete Growth Package
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-md bg-white/[0.02] backdrop-blur-xl border border-white/[0.08]">
              <h3 className="text-xl font-semibold text-foreground mb-4">✅ Everything Included:</h3>
              <ul className="space-y-3">
                {whatsIncluded.map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-primary shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-6 rounded-md bg-green-500/10 border border-green-500/20">
              <h3 className="text-xl font-semibold text-green-400 mb-4">🚀 Advanced Features:</h3>
              <ul className="space-y-3">
                {advancedFeatures.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-green-500 shrink-0" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-4 p-3 bg-green-500/20 rounded-md">
                <p className="text-sm text-green-700">
                  💡 <strong>Perfect for:</strong> Businesses ready to scale and convert more leads.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">
            Advanced Growth Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                className="p-6 rounded-md bg-white/[0.02] backdrop-blur-xl border border-white/[0.08]"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
              >
                <feature.icon className="w-8 h-8 text-primary mb-4" />
                <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Page Types Included */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">
            Professional Pages Included
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="text-center p-6 rounded-md bg-white/[0.02] backdrop-blur-xl border border-white/[0.08]">
              <h3 className="text-lg font-semibold text-foreground mb-2">Homepage</h3>
              <p className="text-muted-foreground text-sm">Compelling hero section, services overview, testimonials</p>
            </div>
            <div className="text-center p-6 rounded-md bg-white/[0.02] backdrop-blur-xl border border-white/[0.08]">
              <h3 className="text-lg font-semibold text-foreground mb-2">About Page</h3>
              <p className="text-muted-foreground text-sm">Company story, team, mission, and values</p>
            </div>
            <div className="text-center p-6 rounded-md bg-white/[0.02] backdrop-blur-xl border border-white/[0.08]">
              <h3 className="text-lg font-semibold text-foreground mb-2">Services</h3>
              <p className="text-muted-foreground text-sm">Detailed service offerings and benefits</p>
            </div>
            <div className="text-center p-6 rounded-md bg-white/[0.02] backdrop-blur-xl border border-white/[0.08]">
              <h3 className="text-lg font-semibold text-foreground mb-2">Contact</h3>
              <p className="text-muted-foreground text-sm">Contact forms, address, business hours</p>
            </div>
            <div className="text-center p-6 rounded-md bg-white/[0.02] backdrop-blur-xl border border-white/[0.08]">
              <h3 className="text-lg font-semibold text-foreground mb-2">Custom Page</h3>
              <p className="text-muted-foreground text-sm">Additional page based on your business needs</p>
            </div>
          </div>
        </motion.div>

        {/* Analytics & Optimization */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">
            Track & Optimize Performance
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-6 rounded-md bg-white/[0.02] backdrop-blur-xl border border-white/[0.08]">
              <BarChart3 className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-foreground mb-2">Google Analytics</h3>
              <p className="text-muted-foreground text-sm">Track visitor behavior, conversions, and performance metrics.</p>
            </div>
            <div className="text-center p-6 rounded-md bg-white/[0.02] backdrop-blur-xl border border-white/[0.08]">
              <Search className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-foreground mb-2">SEO Optimization</h3>
              <p className="text-muted-foreground text-sm">Advanced SEO setup to improve search engine rankings.</p>
            </div>
            <div className="text-center p-6 rounded-md bg-white/[0.02] backdrop-blur-xl border border-white/[0.08]">
              <Clock className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-foreground mb-2">Monthly Updates</h3>
              <p className="text-muted-foreground text-sm">Regular improvements and optimizations to boost performance.</p>
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="text-center bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 rounded-lg p-8 border border-primary/20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <h2 className="text-2xl font-bold text-foreground mb-4">
            Ready to Scale Your Business Online?
          </h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Join hundreds of growing businesses using our Growth Plan to increase leads, improve conversions,
            and scale their online presence. Professional website delivered in 24 hours.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              size="lg"
              asChild
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg gap-2"
            >
              <a
                href="https://wa.me/919108350973?text=I%20want%20the%20Growth%20Plan"
                target="_blank"
                rel="noopener noreferrer"
              >
                💬 Start Growing - ₹1,999
                <ArrowRight className="w-5 h-5" />
              </a>
            </Button>
            <Link href="/pricing">
              <Button
                size="lg"
                variant="outline"
                className="px-8 py-6 text-lg border-white/10 bg-white/5 backdrop-blur-sm"
              >
                View Full Comparison
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
