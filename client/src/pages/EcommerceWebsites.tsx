import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  ShoppingCart,
  Check,
  ArrowRight,
  CreditCard,
  Truck,
  Shield,
  BarChart3,
  Smartphone,
  Lock,
  Zap,
  Package,
  Users,
  TrendingUp
} from "lucide-react";
import { Link } from "wouter";

const features = [
  {
    icon: ShoppingCart,
    title: "Complete E-Commerce Solution",
    description: "Full-featured online store with product catalogs, shopping cart, and checkout system."
  },
  {
    icon: CreditCard,
    title: "Secure Payment Processing",
    description: "Multiple payment gateways with SSL encryption for safe transactions."
  },
  {
    icon: Package,
    title: "Inventory Management",
    description: "Track stock levels, manage products, and handle orders efficiently."
  },
  {
    icon: Truck,
    title: "Shipping Integration",
    description: "Calculate shipping costs and integrate with delivery services."
  },
  {
    icon: BarChart3,
    title: "Sales Analytics",
    description: "Track sales performance, customer behavior, and business metrics."
  },
  {
    icon: Shield,
    title: "Fraud Protection",
    description: "Built-in security measures to protect against fraudulent transactions."
  }
];

const benefits = [
  {
    icon: TrendingUp,
    title: "Increase Sales Revenue",
    description: "24/7 online sales capability that generates revenue around the clock."
  },
  {
    icon: Users,
    title: "Reach Global Customers",
    description: "Sell to customers worldwide without geographical limitations."
  },
  {
    icon: Smartphone,
    title: "Mobile Commerce Ready",
    description: "Optimized for mobile shopping with touch-friendly interfaces."
  }
];

const ecommerceFeatures = [
  {
    title: "Product Management",
    items: ["Unlimited products", "Product variants", "Categories & filters", "Product reviews", "Image galleries"]
  },
  {
    title: "Customer Experience",
    items: ["User accounts", "Order history", "Wishlist", "Abandoned cart recovery", "Customer support chat"]
  },
  {
    title: "Store Operations",
    items: ["Order management", "Inventory tracking", "Shipping calculator", "Tax calculations", "Discount codes"]
  },
  {
    title: "Marketing Tools",
    items: ["SEO optimization", "Social media integration", "Email marketing", "Analytics dashboard", "Upselling features"]
  }
];

const pricingTiers = [
  {
    name: "E-Commerce Starter",
    price: "₹2,999",
    period: "(one time)",
    features: ["Up to 50 products", "Basic payment integration", "Order management", "Mobile responsive"],
    recommended: false
  },
  {
    name: "E-Commerce Pro",
    price: "₹4,999",
    period: "(one time)",
    features: ["Up to 500 products", "Advanced analytics", "Multi-channel selling", "Priority support"],
    recommended: true
  },
  {
    name: "E-Commerce Elite",
    price: "₹7,999",
    period: "(one time)",
    features: ["Unlimited products", "Custom integrations", "Advanced marketing", "Dedicated account manager"],
    recommended: false
  }
];

export default function EcommerceWebsites() {
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
            <ShoppingCart className="w-4 h-4 text-primary" />
            <span className="text-sm text-primary font-medium">E-Commerce Websites</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Complete Online Stores That <span className="text-primary">Sell 24/7</span>
          </h1>
          <p className="text-muted-foreground max-w-3xl mx-auto text-lg mb-8">
            Launch your online business with our comprehensive e-commerce websites. AI-powered design,
            secure payments, inventory management, and everything you need to sell online successfully.
            Set up in 24 hours.
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
                Start Your Online Store
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
            Why Choose Our E-Commerce Websites?
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

        {/* E-Commerce Features */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">
            Complete E-Commerce Solution
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {ecommerceFeatures.map((category, index) => (
              <motion.div
                key={category.title}
                className="p-6 rounded-md bg-white/[0.02] backdrop-blur-xl border border-white/[0.08]"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              >
                <h3 className="text-xl font-semibold text-foreground mb-4">{category.title}</h3>
                <ul className="space-y-2">
                  {category.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm">
                      <Check className="w-4 h-4 text-primary shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
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
            Everything You Need to Sell Online
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

        {/* Pricing Preview */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">
            E-Commerce Pricing Plans
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
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
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
          transition={{ duration: 0.6, delay: 0.9 }}
        >
          <h2 className="text-2xl font-bold text-foreground mb-4">
            Ready to Start Selling Online?
          </h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Get a complete e-commerce website with everything you need to sell products online.
            Secure, fast, and designed for conversions. Delivered in 24 hours.
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
              Launch Your Store
              <ArrowRight className="w-5 h-5" />
            </a>
          </Button>
        </motion.div>
      </div>
    </div>
  );
}
