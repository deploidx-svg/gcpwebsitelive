import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Link } from "wouter";
import { GlassText } from "@/components/GlassText";
import stack1Image from "/stack1.png";
import stack2Image from "/stack2.png";
import stack3Image from "/stack3.png";
import aiLogoImage from "/ai-logo.png";

function StackedImages() {
  const images = [
    { src: stack1Image, alt: "Green Rock - Environmental Platform" },
    { src: stack2Image, alt: "Aviation Career Training" },
    { src: stack3Image, alt: "HerCircle Care - Support Platform" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative w-full h-[320px] sm:h-[380px] md:h-[420px] flex items-center justify-center">
      <div className="relative w-[260px] sm:w-[320px] md:w-[380px] h-[180px] sm:h-[220px] md:h-[260px]">
        <AnimatePresence mode="popLayout">
          {images.map((image, index) => {
            const position = (index - currentIndex + images.length) % images.length;
            
            if (position > 2) return null;

            return (
              <motion.div
                key={image.alt}
                className="absolute inset-0 rounded-2xl overflow-hidden border border-primary/30 bg-background will-change-transform"
                initial={{ 
                  scale: 0.85,
                  opacity: 0,
                  y: 40,
                }}
                animate={{ 
                  scale: 1 - position * 0.08,
                  opacity: 1 - position * 0.3,
                  zIndex: images.length - position,
                  y: position * 20,
                  x: position * 15,
                }}
                exit={{ 
                  scale: 1.05,
                  opacity: 0,
                  y: -30,
                }}
                transition={{
                  duration: 0.6,
                  ease: "easeOut",
                }}
                style={{
                  boxShadow: position === 0 
                    ? '0 20px 40px -10px rgba(0, 0, 0, 0.4)' 
                    : '0 10px 20px -8px rgba(0, 0, 0, 0.2)',
                }}
              >
                <div className="h-6 sm:h-7 bg-card flex items-center px-2 sm:px-3 gap-1.5 sm:gap-2 border-b border-primary/10">
                  <div className="flex gap-1 sm:gap-1.5">
                    <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-primary/60" />
                    <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-primary/40" />
                    <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-primary/20" />
                  </div>
                </div>
                <div className="h-[calc(100%-1.5rem)] sm:h-[calc(100%-1.75rem)]">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover object-top"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div 
                  className="absolute inset-0 pointer-events-none transition-opacity duration-500"
                  style={{
                    backgroundColor: `rgba(0, 0, 0, ${position === 0 ? 0 : 0.1 + position * 0.1})`,
                  }}
                />
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-20 px-4 overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div
          className="w-[600px] h-[600px] rounded-full opacity-20"
          style={{
            background: "radial-gradient(circle, hsl(345 70% 42%) 0%, transparent 60%)",
            filter: "blur(100px)",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="text-center lg:text-left order-1 lg:order-1 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm animate-pulse-glow">
                <Sparkles className="w-4 h-4 text-primary" />
                <span className="text-sm text-primary font-medium">AI-Powered Development</span>
              </div>
            </motion.div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-[1.1] tracking-tight">
              <GlassText text="AI-Powered Websites." delay={0.1} charDelay={0.02} mode="word" />
              <br />
              <motion.span 
                className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-red-400 to-primary inline-block"
                initial={{ opacity: 0, filter: "blur(8px)" }}
                animate={{ opacity: 1, filter: "blur(0px)" }}
                transition={{ duration: 0.3, delay: 0.3, ease: "easeOut" }}
              >
                Delivered the Same Day.
              </motion.span>
            </h1>

            <motion.div 
              className="lg:hidden flex flex-col items-center gap-6"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <StackedImages />
              <Link href="/portfolio">
                <Button 
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg gap-2"
                  data-testid="button-visit-portfolio-mobile"
                >
                  Visit Portfolio
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
            </motion.div>

            <motion.p
              className="text-lg sm:text-xl text-muted-foreground max-w-lg mx-auto lg:mx-0 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Our engineers design, build, and deploy your website using AI internally — faster, cheaper, and better than traditional agencies.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row items-center lg:items-start lg:justify-start justify-center gap-4 pt-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Button
                size="lg"
                asChild
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg gap-3"
              >
                <a
                  href="https://betaai.growithcp.live/"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid="button-hero-cta-primary"
                  className="flex items-center gap-3"
                >
                  <motion.img 
                    src={aiLogoImage} 
                    alt="AI" 
                    className="w-10 h-10"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                  />
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
              className="grid grid-cols-3 gap-8 max-w-md mx-auto lg:mx-0 pt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              {[
                { value: "24h", label: "Delivery Time" },
                { value: "50+", label: "Projects Done" },
                { value: "99%", label: "Satisfaction" },
              ].map((stat, index) => (
                <motion.div 
                  key={index} 
                  className="text-center lg:text-left p-3 rounded-md bg-white/[0.02] backdrop-blur-sm border border-white/[0.05]" 
                  data-testid={`stat-${index}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                >
                  <div className="text-3xl sm:text-4xl font-bold text-primary">{stat.value}</div>
                  <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <motion.div 
            className="hidden lg:flex flex-col items-end gap-6 order-2"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <StackedImages />
            <Link href="/portfolio">
              <Button 
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg gap-2"
                data-testid="button-visit-portfolio"
              >
                Visit Portfolio
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
