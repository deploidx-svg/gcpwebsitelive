import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Crown,
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
  Clock,
  Database,
  Bot,
  Settings
} from "lucide-react";
import { Link } from "wouter";

const features = [
  {
    icon: Globe,
    title: "Up to 10 Pages",
    description: "Comprehensive website with multiple pages for complete business representation."
  },
  {
    icon: FileText,
    title: "Advanced AI Content",
    description: "Premium content creation with expert-level writing and optimization."
  },
  {
    icon: Bot,
    title: "AI Chatbot Integration",
    description: "Intelligent chatbot to handle customer inquiries and support 24/7."
  },
  {
    icon: Database,
    title: "Dynamic Content Management",
    description: "Admin-controlled content updates without technical knowledge."
  },
  {
    icon: Shield,
    title: "Advanced Security",
    description: "Enterprise-grade security with regular backups and monitoring."
  },
  {
    icon: Settings,
    title: "Custom Feature Requests",
    description: "Request and implement custom features within project scope."
  }
];

const whatsIncluded = [
  "Includes everything in Growth +",
  "Up to 10 pages website",
  "Advanced UI/UX design",
  "AI-optimized SEO content",
  "Blog/updates section",
  "AI chatbot integration",
  "Dynamic content (admin-controlled)",
  "Speed & performance optimization",
  "Advanced analytics integration",
  "Priority support",
  "Custom feature requests (within scope)",
  "No GrowithCP branding"
];

const premiumFeatures = [
  "Advanced SEO with schema markup",
  "Custom email marketing integration",
  "Multi-language support ready",
  "Advanced form builders",
  "CRM integration capabilities",
  "Advanced reporting dashboard"
];

const benefits = [
  {
    icon: Users,
    title: "Enterprise-Grade Solution",
    description: "Professional websites that match the quality of Fortune 500 companies."
  },
  {
    icon: BarChart3,
    title: "Maximum Conversion Focus",
    description: "Every element optimized for lead generation and sales conversion."
  },
  {
    icon: Settings,
    title: "Full Customization",
    description: "Tailored solutions with custom features and integrations."
  }
];

export default function ProBusinessPlan() {
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
            <Crown className="w-4 h-4 text-primary" />
            <span className="text-sm text-primary font-medium">Pro Business Plan</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Enterprise Websites for <span className="text-primary">Serious Businesses</span>
          </h1>
          <p className="text-muted-foreground max-w-3xl mx-auto text-lg mb-8">
            Take your business to enterprise level with our Pro Business Plan. Advanced features,
            AI chatbot integration, dynamic content management, and unlimited customization options.
          </p>

          <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 rounded-lg p-6 border border-primary/20 mb-8">
            <div className="flex items-center justify-center gap-4 mb-4">
              <span className="text-3xl font-bold text-primary">₹2,999</span>
              <span className="text-muted-foreground">/month</span>
              <Badge className="bg-purple-500 text-white">Enterprise</Badge>
            </div>
            <p className="text-muted-foreground">Advanced features • Custom integrations • Priority support</p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              size="lg"
              asChild
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg gap-2"
            >
              <a
                href="https://wa.me/919108350973?text=I%20want%20the%20Pro%20Business%20Plan"
                target="_blank"
                rel="noopener noreferrer"
              >
                💬 Go Pro Business
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
            Why Choose Pro Business Plan?
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
            Complete Pro Business Solution
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

            <div className="p-6 rounded-md bg-purple-500/10 border border-purple-500/20">
              <h3 className="text-xl font-semibold text-purple-400 mb-4">💎 Premium Features:</h3>
              <ul className="space-y-3">
                {premiumFeatures.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-purple-500 shrink-0" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-4 p-3 bg-purple-500/20 rounded-md">
                <p className="text-sm text-purple-700">
                  💡 <strong>Perfect for:</strong> Businesses needing advanced features and custom integrations.
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
            Enterprise-Grade Features
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

        {/* AI Chatbot Section */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">
            AI-Powered Customer Support
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-6 rounded-md bg-gradient-to-br from-primary/5 to-primary/10 border border-primary/20">
              <Bot className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-3">Intelligent AI Chatbot</h3>
              <p className="text-muted-foreground mb-4">
                Handle customer inquiries 24/7 with our advanced AI chatbot. Trained on your business information
                to provide accurate responses and qualify leads automatically.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Instant responses to common questions</li>
                <li>• Lead qualification and routing</li>
                <li>• Multi-language support</li>
                <li>• Integration with your CRM</li>
              </ul>
            </div>

            <div className="p-6 rounded-md bg-white/[0.02] backdrop-blur-xl border border-white/[0.08]">
              <Database className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-3">Dynamic Content Management</h3>
              <p className="text-muted-foreground mb-4">
                Update your website content anytime without technical knowledge. Admin dashboard for
                blogs, testimonials, services, and product information.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• User-friendly content editor</li>
                <li>• Blog post management</li>
                <li>• Testimonial updates</li>
                <li>• Service page modifications</li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Blog & Updates Section */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">
            Content & Marketing Tools
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-6 rounded-md bg-white/[0.02] backdrop-blur-xl border border-white/[0.08]">
              <FileText className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-foreground mb-2">Professional Blog</h3>
              <p className="text-muted-foreground text-sm">SEO-optimized blog section to establish thought leadership and improve rankings.</p>
            </div>
            <div className="text-center p-6 rounded-md bg-white/[0.02] backdrop-blur-xl border border-white/[0.08]">
              <BarChart3 className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-foreground mb-2">Advanced Analytics</h3>
              <p className="text-muted-foreground text-sm">Comprehensive analytics dashboard with conversion tracking and user behavior insights.</p>
            </div>
            <div className="text-center p-6 rounded-md bg-white/[0.02] backdrop-blur-xl border border-white/[0.08]">
              <Users className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-foreground mb-2">Lead Management</h3>
              <p className="text-muted-foreground text-sm">Integrated lead capture and management system with CRM integration capabilities.</p>
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
            Ready for Enterprise-Level Websites?
          </h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Join leading businesses using our Pro Business Plan for advanced websites with AI chatbots,
            dynamic content management, and unlimited customization. Delivered in 24 hours.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              size="lg"
              asChild
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg gap-2"
            >
              <a
                href="https://wa.me/919108350973?text=I%20want%20the%20Pro%20Business%20Plan"
                target="_blank"
                rel="noopener noreferrer"
              >
                💬 Upgrade to Pro - ₹2,999/month
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
