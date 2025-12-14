import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Rocket,
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
  Settings,
  Zap,
  Crown,
  Star
} from "lucide-react";
import { Link } from "wouter";

const features = [
  {
    icon: Rocket,
    title: "Unlimited Pages",
    description: "Scale to any size with unlimited pages and content sections."
  },
  {
    icon: Bot,
    title: "Advanced AI Chatbot",
    description: "Enterprise-grade AI chatbot with custom training and integrations."
  },
  {
    icon: Database,
    title: "Full E-Commerce Backend",
    description: "Complete e-commerce solution with inventory, payments, and order management."
  },
  {
    icon: Settings,
    title: "Custom Development",
    description: "Dedicated development team for custom features and integrations."
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Bank-level security with advanced encryption and compliance."
  },
  {
    icon: Clock,
    title: "24/7 Priority Support",
    description: "Dedicated account manager and round-the-clock technical support."
  }
];

const whatsIncluded = [
  "Includes everything in Pro Business +",
  "Unlimited pages website",
  "E-commerce or advanced backend support",
  "Advanced AI chatbot integration",
  "Dynamic content (admin-controlled)",
  "Advanced SEO + schema setup",
  "Security hardening (enterprise level)",
  "Weekly updates & monitoring",
  "Dedicated support manager",
  "Custom feature requests (full scope)",
  "API integrations & custom development",
  "White-label solution available"
];

const eliteFeatures = [
  "Custom AI model training",
  "Multi-channel integrations (CRM, ERP, etc.)",
  "Advanced analytics & reporting",
  "Custom dashboard development",
  "Performance optimization & CDN",
  "24/7 monitoring & maintenance",
  "Custom API development",
  "Scalable cloud infrastructure"
];

const benefits = [
  {
    icon: Crown,
    title: "Ultimate Business Solution",
    description: "Everything a high-growth business needs to dominate their market online."
  },
  {
    icon: Zap,
    title: "Unlimited Scalability",
    description: "Grow without limits - from startup to enterprise, we scale with you."
  },
  {
    icon: Star,
    title: "VIP Treatment",
    description: "Dedicated account management and priority access to all features."
  }
];

export default function EliteAIPlan() {
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
            <Rocket className="w-4 h-4 text-primary" />
            <span className="text-sm text-primary font-medium">Elite AI Plan</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            The Ultimate AI-Powered <span className="text-primary">Business Platform</span>
          </h1>
          <p className="text-muted-foreground max-w-3xl mx-auto text-lg mb-8">
            For businesses that demand the absolute best. Unlimited scalability, enterprise-grade AI,
            custom development, and dedicated support. The most advanced website solution available.
          </p>

          <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 rounded-lg p-6 border border-primary/20 mb-8">
            <div className="flex items-center justify-center gap-4 mb-4">
              <span className="text-3xl font-bold text-primary">₹4,999</span>
              <span className="text-muted-foreground">/month</span>
              <Badge className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white">Elite</Badge>
            </div>
            <p className="text-muted-foreground">Unlimited everything • Custom development • VIP support</p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              size="lg"
              asChild
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg gap-2"
            >
              <a
                href="https://wa.me/919108350973?text=I%20want%20the%20Elite%20AI%20Plan"
                target="_blank"
                rel="noopener noreferrer"
              >
                💬 Go Elite
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
            Why Choose Elite AI Plan?
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
            Everything Elite Includes
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-md bg-white/[0.02] backdrop-blur-xl border border-white/[0.08]">
              <h3 className="text-xl font-semibold text-foreground mb-4">✅ Complete Elite Package:</h3>
              <ul className="space-y-3">
                {whatsIncluded.map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-primary shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-6 rounded-md bg-gradient-to-br from-yellow-500/10 to-orange-500/10 border border-yellow-500/20">
              <h3 className="text-xl font-semibold text-yellow-400 mb-4">🚀 Elite-Only Features:</h3>
              <ul className="space-y-3">
                {eliteFeatures.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-yellow-500 shrink-0" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-4 p-3 bg-yellow-500/20 rounded-md">
                <p className="text-sm text-yellow-700">
                  💎 <strong>Exclusive to Elite:</strong> Custom AI training, dedicated development team, unlimited scaling.
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
            Unlimited Enterprise Features
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

        {/* Custom Development Section */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">
            Custom Development & Integrations
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-md bg-gradient-to-br from-primary/5 to-primary/10 border border-primary/20">
              <Settings className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-3">Custom Features</h3>
              <p className="text-muted-foreground mb-4">
                Need something unique? Our development team builds custom features
                tailored to your specific business requirements.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Custom dashboards</li>
                <li>• Workflow automation</li>
                <li>• Third-party integrations</li>
                <li>• Advanced reporting</li>
              </ul>
            </div>

            <div className="p-6 rounded-md bg-white/[0.02] backdrop-blur-xl border border-white/[0.08]">
              <Bot className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-3">AI Model Training</h3>
              <p className="text-muted-foreground mb-4">
                Custom-trained AI models that understand your industry, products,
                and customer service requirements.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Industry-specific training</li>
                <li>• Custom knowledge base</li>
                <li>• Multi-language support</li>
                <li>• Continuous learning</li>
              </ul>
            </div>

            <div className="p-6 rounded-md bg-white/[0.02] backdrop-blur-xl border border-white/[0.08]">
              <Shield className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-3">Enterprise Security</h3>
              <p className="text-muted-foreground mb-4">
                Bank-level security with advanced encryption, compliance certifications,
                and comprehensive monitoring.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• SOC 2 compliance</li>
                <li>• Advanced encryption</li>
                <li>• DDoS protection</li>
                <li>• 24/7 security monitoring</li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* E-Commerce & Advanced Features */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">
            Full E-Commerce & Business Solutions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-6 rounded-md bg-white/[0.02] backdrop-blur-xl border border-white/[0.08]">
              <Globe className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-3">Complete E-Commerce</h3>
              <p className="text-muted-foreground mb-4">
                Full online store with unlimited products, advanced inventory management,
                multiple payment gateways, and comprehensive order processing.
              </p>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>• Unlimited products</div>
                <div>• Advanced inventory</div>
                <div>• Multi-payment options</div>
                <div>• Order management</div>
              </div>
            </div>

            <div className="p-6 rounded-md bg-white/[0.02] backdrop-blur-xl border border-white/[0.08]">
              <BarChart3 className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-3">Advanced Analytics</h3>
              <p className="text-muted-foreground mb-4">
                Comprehensive business intelligence with custom dashboards,
                predictive analytics, and automated reporting.
              </p>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>• Custom dashboards</div>
                <div>• Predictive analytics</div>
                <div>• Automated reports</div>
                <div>• Real-time insights</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* VIP Support Section */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="text-center p-8 rounded-lg bg-gradient-to-r from-yellow-500/10 via-orange-500/10 to-red-500/10 border border-yellow-500/20">
            <Crown className="w-16 h-16 text-yellow-500 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-foreground mb-4">VIP Elite Support</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
              Get dedicated account management, priority development queue, and direct access to our
              executive team. Your success is our top priority.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-yellow-500" />
                <span>24/7 Priority Support</span>
              </div>
              <div className="flex items-center gap-3">
                <Users className="w-5 h-5 text-yellow-500" />
                <span>Dedicated Account Manager</span>
              </div>
              <div className="flex items-center gap-3">
                <Zap className="w-5 h-5 text-yellow-500" />
                <span>Fast-Track Development</span>
              </div>
            </div>
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
            Ready to Go Elite?
          </h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Join the elite businesses that demand the best. Unlimited scalability, custom AI development,
            dedicated support, and everything you need to dominate your market. The ultimate business platform.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              size="lg"
              asChild
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg gap-2"
            >
              <a
                href="https://wa.me/919108350973?text=I%20want%20the%20Elite%20AI%20Plan"
                target="_blank"
                rel="noopener noreferrer"
              >
                💬 Become Elite - ₹4,999/month
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
