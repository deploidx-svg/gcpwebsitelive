import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Globe,
  Check,
  ArrowRight,
  Eye,
  Palette,
  Camera,
  Star,
  Users,
  TrendingUp,
  Image,
  Share2,
  Award
} from "lucide-react";
import { Link } from "wouter";

const features = [
  {
    icon: Image,
    title: "Stunning Galleries",
    description: "Beautiful image galleries and portfolios that showcase your work in the best light."
  },
  {
    icon: Palette,
    title: "Creative Design",
    description: "Unique, artistic layouts that reflect your personal brand and creative style."
  },
  {
    icon: Camera,
    title: "Media Integration",
    description: "Support for images, videos, and other media types to showcase your portfolio."
  },
  {
    icon: Share2,
    title: "Social Integration",
    description: "Easy sharing to social media platforms and direct links to your work."
  },
  {
    icon: Eye,
    title: "Modern UI/UX",
    description: "Intuitive navigation and user experience that keeps visitors engaged."
  },
  {
    icon: Award,
    title: "Professional Presentation",
    description: "Polished presentation that impresses clients and potential employers."
  }
];

const benefits = [
  {
    icon: Star,
    title: "Showcase Your Best Work",
    description: "Display your portfolio in a professional, organized manner that highlights your skills."
  },
  {
    icon: Users,
    title: "Attract New Clients",
    description: "Impress potential clients with a stunning online presence that converts visitors."
  },
  {
    icon: TrendingUp,
    title: "Career Advancement",
    description: "Stand out in your field and attract better opportunities with a professional portfolio."
  }
];

const portfolioTypes = [
  {
    title: "Photographer Portfolio",
    description: "Perfect for photographers, showcasing galleries, client work, and photography services.",
    features: ["Image galleries", "Lightbox viewing", "Client testimonials", "Booking integration"]
  },
  {
    title: "Designer Portfolio",
    description: "Ideal for graphic designers, UI/UX designers, and creative professionals.",
    features: ["Project showcases", "Case studies", "Design process", "Style guide display"]
  },
  {
    title: "Developer Portfolio",
    description: "Built for programmers, developers, and tech professionals.",
    features: ["Project repositories", "Tech stack display", "Live demos", "Code snippets"]
  },
  {
    title: "Artist Portfolio",
    description: "Tailored for visual artists, painters, illustrators, and creative artists.",
    features: ["Artwork galleries", "Artist statement", "Exhibition history", "Commission inquiries"]
  }
];

export default function PortfolioWebsites() {
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
            <Globe className="w-4 h-4 text-primary" />
            <span className="text-sm text-primary font-medium">Portfolio Websites</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Stunning Portfolios That <span className="text-primary">Win Clients</span>
          </h1>
          <p className="text-muted-foreground max-w-3xl mx-auto text-lg mb-8">
            Showcase your work like never before with our AI-powered portfolio websites. Designed to impress,
            optimized for conversions, and delivered in 24 hours. Perfect for photographers, designers, developers, and artists.
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
                Get Your Portfolio Website
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
            Why Choose Our Portfolio Websites?
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

        {/* Portfolio Types */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">
            Perfect for Every Creative Professional
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {portfolioTypes.map((type, index) => (
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

        {/* Features Grid */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">
            Features That Make You Stand Out
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

        {/* CTA Section */}
        <motion.div
          className="text-center bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 rounded-lg p-8 border border-primary/20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <h2 className="text-2xl font-bold text-foreground mb-4">
            Ready to Showcase Your Work?
          </h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Get a stunning portfolio website that perfectly represents your creative work and attracts new opportunities.
            Delivered in 24 hours.
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
              Create Your Portfolio
              <ArrowRight className="w-5 h-5" />
            </a>
          </Button>
        </motion.div>
      </div>
    </div>
  );
}
