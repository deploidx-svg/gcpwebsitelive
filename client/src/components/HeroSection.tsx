import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Link } from "wouter";
import herHealingHubImage from "/herhealinghub_screenshot.png";
import stack1Image from "/stack1.webp";
import stack2Image from "/stack2.webp";

function StackedImages() {
  const images = [
    { src: stack1Image, alt: "AI Chat Interface" },
    { src: stack2Image, alt: "DeFi Platform" },
    { src: herHealingHubImage, alt: "Her Healing Hub" },
  ];

  return (
    <div className="relative w-full h-[320px] sm:h-[380px] md:h-[420px] flex items-center justify-center">
      {images.map((image, index) => (
        <motion.div
          key={index}
          className="absolute w-[240px] sm:w-[300px] md:w-[360px] h-[160px] sm:h-[200px] md:h-[240px] rounded-xl overflow-hidden shadow-2xl border border-white/10"
          style={{
            zIndex: images.length - index,
            transformOrigin: 'center bottom',
          }}
          initial={{ 
            opacity: 0, 
            y: 50,
            scale: 0.9,
          }}
          animate={{ 
            opacity: 1,
            y: index * -20,
            x: index * 15,
            scale: 1 - index * 0.04,
            rotate: index * -4,
          }}
          transition={{
            duration: 0.8,
            delay: index * 0.2,
            ease: "easeOut",
          }}
          whileHover={{
            y: index * -20 - 8,
            scale: 1 - index * 0.04 + 0.02,
            transition: { duration: 0.3 }
          }}
        >
          <motion.div
            className="w-full h-full"
            animate={{
              y: [0, -4, 0],
            }}
            transition={{
              duration: 3 + index * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: index * 0.3,
            }}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
}

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-20 px-4 overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <motion.div
          className="w-[600px] h-[600px] rounded-full opacity-20"
          style={{
            background: "radial-gradient(circle, hsl(345 70% 42%) 0%, transparent 60%)",
            filter: "blur(100px)",
          }}
          animate={{
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="text-center lg:text-left order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8">
                <Sparkles className="w-4 h-4 text-primary" />
                <span className="text-sm text-primary font-medium">AI-Powered Development</span>
              </div>
            </motion.div>

            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl font-bold text-foreground mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              AI-Powered Websites.
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-red-400 to-primary">
                Delivered the Same Day.
              </span>
            </motion.h1>

            <motion.p
              className="text-lg sm:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Our engineers design, build, and deploy your website using AI internally — faster, cheaper, and better than traditional agencies.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row items-center lg:justify-start justify-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Button
                size="lg"
                asChild
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg gap-2"
              >
                <a
                  href="https://clients.growithcp.live/order/product?pid=d5308768-251d-4859-d56c-747e390921e6"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid="button-hero-cta-primary"
                >
                  Talk to AI Website Consultant
                  <ArrowRight className="w-5 h-5" />
                </a>
              </Button>
              
              <Link href="/services">
                <Button 
                  size="lg"
                  variant="outline"
                  className="px-8 py-6 text-lg border-white/10 bg-white/5 backdrop-blur-sm"
                  data-testid="button-hero-cta-secondary"
                >
                  View Services
                </Button>
              </Link>
            </motion.div>

            <motion.div
              className="mt-12 grid grid-cols-3 gap-6 max-w-md mx-auto lg:mx-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              {[
                { value: "24h", label: "Delivery Time" },
                { value: "50+", label: "Projects Done" },
                { value: "99%", label: "Satisfaction" },
              ].map((stat, index) => (
                <div key={index} className="text-center lg:text-left">
                  <div className="text-2xl sm:text-3xl font-bold text-primary">{stat.value}</div>
                  <div className="text-xs sm:text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div 
            className="order-1 lg:order-2"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <StackedImages />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
