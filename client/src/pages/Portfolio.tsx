import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Eye, Star, Calendar, Users } from "lucide-react";
import herHealingHubImage from "/herhealinghub_screenshot.png";

const projects = [
  {
    id: "her-healing-hub",
    title: "Her Healing Hub",
    description: "A comprehensive wellness and healing platform designed for holistic health practitioners and their clients. Features appointment booking, resource library, and community forums.",
    url: "https://herhealinghub.life/",
    image: "/api/placeholder/600/400", // Placeholder - would be actual screenshot
    category: "Wellness Platform",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    features: [
      "Appointment Scheduling System",
      "Client Management Portal",
      "Resource Library & Blog",
      "Payment Integration",
      "Mobile Responsive Design"
    ],
    completionDate: "December 2024",
    clientType: "Health & Wellness Business"
  },
  {
    id: "business-website-1",
    title: "Tech Startup Landing Page",
    description: "Modern, conversion-optimized landing page for a SaaS startup specializing in AI-powered analytics.",
    url: "#",
    image: "/api/placeholder/600/400",
    category: "Business Website",
    technologies: ["React", "Tailwind CSS", "Framer Motion"],
    features: [
      "A/B Testing Ready",
      "Lead Capture Forms",
      "SEO Optimized",
      "Fast Loading Speed"
    ],
    completionDate: "November 2024",
    clientType: "Tech Startup"
  },
  {
    id: "ecommerce-site",
    title: "Fashion E-Commerce Store",
    description: "Full-featured online store with inventory management, secure payments, and customer accounts.",
    url: "#",
    image: "/api/placeholder/600/400",
    category: "E-Commerce",
    technologies: ["Next.js", "Stripe", "PostgreSQL"],
    features: [
      "Product Catalog Management",
      "Secure Payment Processing",
      "Customer Accounts & Orders",
      "Inventory Tracking",
      "Mobile Shopping Experience"
    ],
    completionDate: "October 2024",
    clientType: "Fashion Retailer"
  },
  {
    id: "portfolio-site",
    title: "Creative Agency Portfolio",
    description: "Stunning portfolio website showcasing creative work with smooth animations and interactive galleries.",
    url: "#",
    image: "/api/placeholder/600/400",
    category: "Portfolio Website",
    technologies: ["React", "GSAP", "Three.js"],
    features: [
      "Interactive Project Galleries",
      "Smooth Animations",
      "Client Testimonials",
      "Contact Integration"
    ],
    completionDate: "September 2024",
    clientType: "Creative Agency"
  }
];

const stats = [
  { icon: Users, value: "50+", label: "Projects Completed" },
  { icon: Star, value: "4.9", label: "Client Satisfaction" },
  { icon: Calendar, value: "24h", label: "Average Delivery" },
  { icon: Eye, value: "100%", label: "Mobile Optimized" }
];

export default function Portfolio() {
  return (
    <div className="min-h-screen pt-28 pb-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <Eye className="w-4 h-4 text-primary" />
            <span className="text-sm text-primary font-medium">Our Work</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Portfolio of <span className="text-primary">Success Stories</span>
          </h1>
          <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
            Explore our collection of professionally crafted websites and digital solutions.
            Each project showcases our commitment to quality, innovation, and client success.
          </p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center p-6 rounded-md bg-white/[0.02] backdrop-blur-xl border border-white/[0.08]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
            >
              <stat.icon className="w-8 h-8 text-primary mx-auto mb-2" />
              <div className="text-2xl sm:text-3xl font-bold text-primary">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Featured Project - Her Healing Hub */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="text-center mb-8">
            <Badge className="bg-primary text-primary-foreground mb-4">Featured Project</Badge>
            <h2 className="text-3xl font-bold text-foreground mb-4">Her Healing Hub</h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              A comprehensive wellness platform connecting practitioners with clients, featuring appointment scheduling,
              resource sharing, and community building tools.
            </p>
          </div>

          <div className="relative rounded-lg overflow-hidden bg-white/[0.02] backdrop-blur-xl border border-white/[0.08] p-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
              {/* Image Section - Takes up 2/3 on large screens */}
              <div className="lg:col-span-2 order-1">
                <div className="aspect-video lg:aspect-[16/10] rounded-lg overflow-hidden mb-6 lg:mb-0">
                  <img
                    src={herHealingHubImage}
                    alt="Her Healing Hub - Wellness Platform Screenshot"
                    className="w-full h-full object-cover object-left"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </div>

              {/* Content Section - Takes up 1/3 on large screens */}
              <div className="lg:col-span-1 space-y-6 order-2">
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Project Overview</h3>
                  <p className="text-muted-foreground mb-4 text-sm">{projects[0].description}</p>

                  <div className="grid grid-cols-1 gap-3 mb-6">
                    <div>
                      <div className="text-sm text-muted-foreground">Client Type</div>
                      <div className="font-medium text-foreground">{projects[0].clientType}</div>
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">Completed</div>
                      <div className="font-medium text-foreground">{projects[0].completionDate}</div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Key Features</h3>
                    <ul className="space-y-2">
                      {projects[0].features.slice(0, 3).map((feature) => (
                        <li key={feature} className="flex items-center gap-2 text-sm">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Technologies</h3>
                    <div className="flex flex-wrap gap-2">
                      {projects[0].technologies.map((tech) => (
                        <Badge key={tech} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>

                <Button
                  asChild
                  className="w-full bg-primary hover:bg-primary/90"
                >
                  <a
                    href={projects[0].url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Visit Her Healing Hub
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Other Projects Grid */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">
            More Projects
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.slice(1).map((project, index) => (
              <motion.div
                key={project.id}
                className="group relative rounded-lg overflow-hidden bg-white/[0.02] backdrop-blur-xl border border-white/[0.08] transition-all duration-300 hover:border-primary/50"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                whileHover={{ y: -4 }}
              >
                <div className="aspect-video bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-2">
                      <Eye className="w-6 h-6 text-primary" />
                    </div>
                    <p className="text-xs text-muted-foreground">Project Preview</p>
                  </div>
                </div>

                <div className="p-6">
                  <Badge variant="outline" className="mb-3 text-xs">
                    {project.category}
                  </Badge>

                  <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <span>{project.completionDate}</span>
                    <span>{project.clientType}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="text-center bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 rounded-lg p-8 border border-primary/20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h2 className="text-2xl font-bold text-foreground mb-4">
            Ready to Create Something Amazing?
          </h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Join our growing list of satisfied clients. Let's build your dream website together.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg gap-2"
          >
            <a
              href="https://clients.growithcp.live/order/product?pid=d5308768-251d-4859-d56c-747e390921e6"
              target="_blank"
              rel="noopener noreferrer"
            >
              Start Your Project
            </a>
          </Button>
        </motion.div>
      </div>
    </div>
  );
}
