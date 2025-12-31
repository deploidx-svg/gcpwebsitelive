import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useMemo } from "react";
import {
  Eye,
  Check,
  ArrowRight,
  Sparkles,
  Clock,
  Smartphone,
  Palette,
  FileText,
  Users,
  Star
} from "lucide-react";
import { Link } from "wouter";

// Mobile-optimized animation hook
const useMobileOptimizedAnimation = () => {
  const isMobile = useMemo(() => {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ||
           window.innerWidth < 768;
  }, []);

  const prefersReducedMotion = useMemo(() => {
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }, []);

  const shouldReduceMotion = isMobile || prefersReducedMotion;

  return {
    isMobile,
    shouldReduceMotion,
    // Simplified animation props for mobile
    mobileAnimationProps: shouldReduceMotion ? {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      transition: { duration: 0.3 }
    } : {
      initial: { opacity: 0, y: 20 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0.6 }
    }
  };
};

const features = [
  {
    icon: Sparkles,
    title: "AI-Generated Design",
    description: "Professional website design created by advanced AI based on your business type."
  },
  {
    icon: FileText,
    title: "Sample Content",
    description: "AI-written content including headlines, descriptions, and call-to-actions."
  },
  {
    icon: Smartphone,
    title: "Mobile Preview",
    description: "Responsive design preview that works perfectly on all devices."
  },
  {
    icon: Clock,
    title: "24-Hour Delivery",
    description: "Get your demo website link delivered within 24 hours of order."
  },
  {
    icon: Palette,
    title: "Custom Color Theme",
    description: "Color scheme matched to your business type and brand preferences."
  },
  {
    icon: Users,
    title: "Lead Generation Ready",
    description: "Includes contact forms and lead capture elements for immediate use."
  }
];

const whatsIncluded = [
  "1-page professional website demo",
  "AI-generated layout and design",
  "Sample content (AI-written)",
  "Contact form integration",
  "Mobile-responsive preview",
  "Demo link via email",
  "Basic SEO setup",
  "Social media links"
];

const benefits = [
  {
    icon: Eye,
    title: "See Before You Buy",
    description: "Get a complete preview of what your website will look like before committing to a paid plan."
  },
  {
    icon: Star,
    title: "Professional Quality",
    description: "Experience the same quality and design standards as our premium websites."
  },
  {
    icon: Users,
    title: "Risk-Free Trial",
    description: "Test our AI website creation process with no upfront investment required."
  }
];

export default function DemoPlan() {
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
            <Eye className="w-4 h-4 text-primary" />
            <span className="text-sm text-primary font-medium">AI Website Demo</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            See Your Website Before You <span className="text-primary">Buy It</span>
          </h1>
          <p className="text-muted-foreground max-w-3xl mx-auto text-lg mb-8">
            Get a professional AI-generated website demo in just 24 hours. Experience the quality of our work
            with a fully functional preview of what your website will look like.
          </p>

          <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 rounded-lg p-6 border border-primary/20 mb-8">
            <div className="flex items-center justify-center gap-4 mb-4">
            <span className="text-4xl font-bold text-primary">₹149</span>
              <Badge className="bg-green-500 text-white">Limited Time</Badge>
            </div>
            <p className="text-muted-foreground">Professional AI-generated website demo with 24-hour delivery</p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              size="lg"
              asChild
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg gap-2"
            >
              <a
                href="https://wa.me/919108350973?text=I%20want%20the%20AI%20Website%20Demo"
                target="_blank"
                rel="noopener noreferrer"
              >
                💬 Get My Demo Now
                <ArrowRight className="w-5 h-5" />
              </a>
            </Button>
            <Link href="/pricing">
              <Button
                size="lg"
                variant="outline"
                className="px-8 py-6 text-lg border-white/10 bg-white/5 backdrop-blur-sm"
              >
                View All Plans
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
            Why Get a Demo?
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
            Everything You Get
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-md bg-white/[0.02] backdrop-blur-xl border border-white/[0.08]">
              <h3 className="text-xl font-semibold text-foreground mb-4">What's Included:</h3>
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
              <h3 className="text-xl font-semibold text-amber-400 mb-4">⚠️ Important Notes:</h3>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li>• Demo is for preview purposes only</li>
                <li>• Not deployable or live on the internet</li>
                <li>• Hosting, domain, and backend not included</li>
                <li>• Valid for 30 days from creation</li>
                <li>• Cannot be converted to live website</li>
              </ul>
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
            Professional Features Included
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

        {/* Process Section */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">
            How It Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-6 rounded-md bg-white/[0.02] backdrop-blur-xl border border-white/[0.08]">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary font-bold">1</span>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Tell Us About Your Business</h3>
              <p className="text-muted-foreground text-sm">Share your business type, goals, and preferences with our AI consultant.</p>
            </div>

            <div className="text-center p-6 rounded-md bg-white/[0.02] backdrop-blur-xl border border-white/[0.08]">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary font-bold">2</span>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">AI Creates Your Website</h3>
              <p className="text-muted-foreground text-sm">Our AI analyzes your requirements and generates a professional website design.</p>
            </div>

            <div className="text-center p-6 rounded-md bg-white/[0.02] backdrop-blur-xl border border-white/[0.08]">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary font-bold">3</span>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Get Your Demo in 24 Hours</h3>
              <p className="text-muted-foreground text-sm">Receive your demo link via email within 24 hours, ready for preview.</p>
            </div>
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
            Ready to See Your Website in Action?
          </h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Get your professional AI-generated website demo for just ₹149. Experience the quality of our work
            before making any commitment.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              size="lg"
              asChild
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg gap-2"
            >
              <a
                href="https://wa.me/919108350973?text=I%20want%20the%20AI%20Website%20Demo"
                target="_blank"
                rel="noopener noreferrer"
              >
                💬 Get My Demo Now
                <ArrowRight className="w-5 h-5" />
              </a>
            </Button>
            <p className="text-sm text-muted-foreground">Professional AI-generated website demo • ₹149</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
