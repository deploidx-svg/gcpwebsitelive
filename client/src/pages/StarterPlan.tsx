import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Star,
  Check,
  ArrowRight,
  Globe,
  Smartphone,
  Search,
  MessageSquare,
  FileText,
  Users,
  Zap,
  Shield,
  Clock
} from "lucide-react";
import { Link } from "wouter";

const features = [
  {
    icon: Globe,
    title: "1 Professional Page",
    description: "Single-page website perfectly designed for your business needs and goals."
  },
  {
    icon: FileText,
    title: "AI-Written Content",
    description: "High-quality, SEO-optimized content written by AI based on your business information."
  },
  {
    icon: Smartphone,
    title: "Mobile Responsive",
    description: "Looks perfect on all devices - desktop, tablet, and mobile phones."
  },
  {
    icon: Search,
    title: "Basic SEO Setup",
    description: "Essential search engine optimization to help your website rank better."
  },
  {
    icon: MessageSquare,
    title: "Contact Form",
    description: "Professional contact form to capture leads and customer inquiries."
  },
  {
    icon: Shield,
    title: "Secure & Fast",
    description: "SSL security and optimized performance for the best user experience."
  }
];

const whatsIncluded = [
  "1-page AI-designed website",
  "AI-written content (basic)",
  "Mobile responsive design",
  "Contact form integration",
  "Basic SEO setup",
  "Monthly AI content refresh",
  "Free minor text changes included",
  "GrowithCP branding",
  "24/7 customer support",
  "99.9% uptime guarantee"
];

const notIncluded = [
  "Custom backend development",
  "E-commerce functionality",
  "Advanced animations",
  "Multiple page designs",
  "White-label branding"
];

const benefits = [
  {
    icon: Users,
    title: "Perfect for Startups",
    description: "Ideal for new businesses, freelancers, and small service providers."
  },
  {
    icon: Zap,
    title: "Quick Launch",
    description: "Get your professional online presence up and running in just 24 hours."
  },
  {
    icon: Clock,
    title: "Ongoing Support",
    description: "Monthly content updates and free minor changes keep your site fresh."
  }
];

export default function StarterPlan() {
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
            <Star className="w-4 h-4 text-primary" />
            <span className="text-sm text-primary font-medium">Starter Plan</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Perfect Website for <span className="text-primary">Small Businesses</span>
          </h1>
          <p className="text-muted-foreground max-w-3xl mx-auto text-lg mb-8">
            Get a professional single-page website designed for startups, freelancers, and small businesses.
            AI-powered design and content, delivered in 24 hours, with ongoing monthly support.
          </p>

          <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 rounded-lg p-6 border border-primary/20 mb-8">
            <div className="flex items-center justify-center gap-4 mb-4">
              <span className="text-3xl font-bold text-primary">₹999</span>
              <span className="text-muted-foreground">(one time)</span>
              <Badge className="bg-green-500 text-white">Most Affordable</Badge>
            </div>
            <p className="text-muted-foreground">One-time payment • Lifetime access • No recurring fees</p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              size="lg"
              asChild
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg gap-2"
            >
              <a
                href="https://wa.me/919108350973?text=I%20want%20the%20Starter%20Plan"
                target="_blank"
                rel="noopener noreferrer"
              >
                💬 Start My Website
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
            Why Choose Starter Plan?
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
            Everything Included
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-md bg-white/[0.02] backdrop-blur-xl border border-white/[0.08]">
              <h3 className="text-xl font-semibold text-foreground mb-4">✅ What's Included:</h3>
              <ul className="space-y-3">
                {whatsIncluded.map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-primary shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-6 rounded-md bg-amber-500/10 border border-amber-500/20">
              <h3 className="text-xl font-semibold text-amber-400 mb-4">❌ Not Included:</h3>
              <ul className="space-y-3">
                {notIncluded.map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <span className="w-5 h-5 bg-amber-500/20 rounded-full flex items-center justify-center shrink-0">
                      <span className="text-amber-600 text-xs">×</span>
                    </span>
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-4 p-3 bg-amber-500/20 rounded-md">
                <p className="text-sm text-amber-700">
                  💡 <strong>Upgrade anytime:</strong> Need more features? Upgrade to Growth or Pro plans anytime.
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
            Professional Features
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

        {/* How It Works */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">
            Get Your Website in 3 Simple Steps
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-6 rounded-md bg-white/[0.02] backdrop-blur-xl border border-white/[0.08]">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary font-bold">1</span>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Choose & Customize</h3>
              <p className="text-muted-foreground text-sm">Tell our AI consultant about your business and preferences.</p>
            </div>

            <div className="text-center p-6 rounded-md bg-white/[0.02] backdrop-blur-xl border border-white/[0.08]">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary font-bold">2</span>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">AI Creates</h3>
              <p className="text-muted-foreground text-sm">Our AI designs and builds your professional website.</p>
            </div>

            <div className="text-center p-6 rounded-md bg-white/[0.02] backdrop-blur-xl border border-white/[0.08]">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary font-bold">3</span>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Launch & Maintain</h3>
              <p className="text-muted-foreground text-sm">Website goes live with monthly updates and support.</p>
            </div>
          </div>
        </motion.div>

        {/* Pricing Comparison */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">
            Compare Plans
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-md bg-white/[0.02] backdrop-blur-xl border border-white/[0.08]">
              <h3 className="text-lg font-semibold text-foreground mb-2">Starter Plan</h3>
              <div className="text-2xl font-bold text-primary mb-4">₹999</div>
              <ul className="space-y-2 text-sm">
                <li>• 1-page website</li>
                <li>• Basic SEO</li>
                <li>• Monthly updates</li>
              </ul>
            </div>

            <div className="p-6 rounded-md bg-primary/5 border border-primary/50 relative">
              <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground">
                Recommended
              </Badge>
              <h3 className="text-lg font-semibold text-foreground mb-2">Growth Plan</h3>
              <div className="text-2xl font-bold text-primary mb-4">₹1,999</div>
              <ul className="space-y-2 text-sm">
                <li>• Up to 5 pages</li>
                <li>• Advanced SEO</li>
                <li>• Analytics</li>
              </ul>
            </div>

            <div className="p-6 rounded-md bg-white/[0.02] backdrop-blur-xl border border-white/[0.08]">
              <h3 className="text-lg font-semibold text-foreground mb-2">Pro Business</h3>
              <div className="text-2xl font-bold text-primary mb-4">₹2,999</div>
              <ul className="space-y-2 text-sm">
                <li>• Up to 10 pages</li>
                <li>• Custom features</li>
                <li>• Priority support</li>
              </ul>
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
            Ready to Get Your Professional Website?
          </h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Start with our affordable Starter Plan and upgrade anytime. Professional website delivered in 24 hours,
            with ongoing monthly support and maintenance.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              size="lg"
              asChild
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg gap-2"
            >
              <a
                href="https://wa.me/919108350973?text=I%20want%20the%20Starter%20Plan"
                target="_blank"
                rel="noopener noreferrer"
              >
                💬 Get Started - ₹999
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
