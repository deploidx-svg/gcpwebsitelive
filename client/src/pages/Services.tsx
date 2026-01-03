import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Globe, Briefcase, ShoppingCart, Layout, Server, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const services = [
  {
    icon: Briefcase,
    title: "Business Websites",
    slug: "business-websites",
    description: "Professional websites that establish credibility and convert visitors into customers. Perfect for startups, agencies, and enterprises.",
    features: ["Custom design", "SEO optimized", "Mobile responsive", "Contact forms"],
  },
  {
    icon: Globe,
    title: "Portfolio Websites",
    slug: "portfolio-websites",
    description: "Showcase your work beautifully with stunning portfolio sites that highlight your skills and attract new opportunities.",
    features: ["Gallery layouts", "Project showcases", "Bio sections", "Social links"],
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce Websites",
    slug: "ecommerce-websites",
    description: "Fully functional online stores with secure payments, inventory management, and seamless shopping experiences.",
    features: ["Product catalogs", "Secure checkout", "Inventory tracking", "Order management"],
  },
  {
    icon: Layout,
    title: "Landing Pages",
    slug: "landing-pages",
    description: "High-converting landing pages designed to capture leads and drive specific actions. Perfect for campaigns and launches.",
    features: ["A/B testing ready", "Lead capture", "Fast loading", "Analytics integration"],
  },
  {
    icon: Server,
    title: "Hosting & Deployment",
    slug: "hosting",
    description: "Reliable hosting solutions with automatic deployments, SSL certificates, and 99.9% uptime guarantee.",
    features: ["Auto scaling", "SSL included", "Daily backups", "24/7 monitoring"],
  },
];

export default function Services() {
  return (
    <div className="min-h-screen pt-28 pb-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Our <span className="text-primary">Services</span>
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Comprehensive web solutions powered by AI technology and delivered by expert engineers.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className={cn(
                "group relative p-6 rounded-md overflow-hidden",
                "bg-white/[0.03] backdrop-blur-xl",
                "border border-white/[0.08]",
                "transition-all duration-300",
                "shadow-[0_8px_32px_rgba(0,0,0,0.2)]",
                index === services.length - 1 && "md:col-span-2 md:max-w-lg md:mx-auto"
              )}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ 
                y: -4,
                boxShadow: "0 12px 40px rgba(0, 0, 0, 0.3), 0 0 30px rgba(255, 255, 255, 0.05)",
              }}
            >
              <div 
                className="absolute inset-0 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: "radial-gradient(circle at center, hsl(345 70% 42% / 0.15) 0%, transparent 70%)",
                }}
              />
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                style={{
                  background: "linear-gradient(135deg, rgba(255,255,255,0.1) 0%, transparent 50%, rgba(255,255,255,0.05) 100%)",
                }}
              />
              
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-md flex items-center justify-center bg-primary/10 text-primary shrink-0">
                  <service.icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">{service.title}</h3>
                  <p className="text-muted-foreground text-sm">{service.description}</p>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {service.features.map((feature) => (
                  <span 
                    key={feature}
                    className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary/80 border border-primary/20"
                  >
                    {feature}
                  </span>
                ))}
              </div>
              
              <Button
                variant="ghost"
                size="sm"
                asChild
                className="text-primary hover:text-primary/80 p-0 h-auto"
              >
                <a
                  href={`/services/${service.slug}`}
                  data-testid={`button-service-${service.slug}`}
                >
                  Learn More <ArrowRight className="w-4 h-4 ml-1" />
                </a>
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
