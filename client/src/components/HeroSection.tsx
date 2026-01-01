import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Link } from "wouter";
import herHealingHubImage from "/herhealinghub_screenshot.png";

function StackedImages() {
  return (
    <div className="relative w-full h-[300px] sm:h-[350px] md:h-[400px] flex items-center justify-center">
      <motion.div
        className="absolute w-[200px] sm:w-[240px] md:w-[280px] h-[140px] sm:h-[160px] md:h-[180px] rounded-xl overflow-hidden shadow-2xl border border-white/10 bg-gradient-to-br from-primary/20 to-primary/5"
        style={{ left: '5%', top: '15%', zIndex: 1 }}
        animate={{
          y: [0, -8, 0],
          rotate: [-8, -10, -8],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
      >
        <div className="w-full h-full flex items-center justify-center">
          <div className="text-center">
            <div className="w-8 h-8 bg-primary/30 rounded-lg mx-auto mb-2" />
            <div className="w-16 h-2 bg-white/20 rounded mx-auto mb-1" />
            <div className="w-12 h-2 bg-white/10 rounded mx-auto" />
          </div>
        </div>
      </motion.div>

      <motion.div
        className="absolute w-[220px] sm:w-[280px] md:w-[340px] h-[150px] sm:h-[180px] md:h-[220px] rounded-xl overflow-hidden shadow-2xl border border-white/10"
        style={{ zIndex: 3 }}
        animate={{
          y: [0, -12, 0],
          scale: [1, 1.02, 1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <img
          src={herHealingHubImage}
          alt="Her Healing Hub - Portfolio showcase"
          className="w-full h-full object-cover object-left-top"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
      </motion.div>

      <motion.div
        className="absolute w-[180px] sm:w-[220px] md:w-[260px] h-[130px] sm:h-[150px] md:h-[170px] rounded-xl overflow-hidden shadow-2xl border border-white/10 bg-gradient-to-br from-red-500/20 to-primary/10"
        style={{ right: '5%', top: '20%', zIndex: 2 }}
        animate={{
          y: [0, -10, 0],
          rotate: [6, 8, 6],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5,
        }}
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
      >
        <div className="w-full h-full flex items-center justify-center">
          <div className="text-center">
            <div className="w-10 h-10 bg-primary/40 rounded-full mx-auto mb-2" />
            <div className="w-14 h-2 bg-white/20 rounded mx-auto mb-1" />
            <div className="w-10 h-2 bg-white/10 rounded mx-auto" />
          </div>
        </div>
      </motion.div>

      <motion.div
        className="absolute w-[160px] sm:w-[180px] md:w-[200px] h-[110px] sm:h-[120px] md:h-[130px] rounded-xl overflow-hidden shadow-xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02]"
        style={{ left: '15%', bottom: '10%', zIndex: 1 }}
        animate={{
          y: [0, -6, 0],
          rotate: [4, 2, 4],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <div className="w-full h-full flex items-center justify-center">
          <div className="grid grid-cols-2 gap-2 p-4">
            <div className="w-6 h-6 bg-primary/20 rounded" />
            <div className="w-6 h-6 bg-white/10 rounded" />
            <div className="w-6 h-6 bg-white/10 rounded" />
            <div className="w-6 h-6 bg-primary/20 rounded" />
          </div>
        </div>
      </motion.div>

      <motion.div
        className="absolute w-[150px] sm:w-[170px] md:w-[190px] h-[100px] sm:h-[110px] md:h-[120px] rounded-xl overflow-hidden shadow-xl border border-white/10 bg-gradient-to-br from-primary/10 to-transparent"
        style={{ right: '10%', bottom: '15%', zIndex: 1 }}
        animate={{
          y: [0, -8, 0],
          rotate: [-4, -6, -4],
        }}
        transition={{
          duration: 5.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.8,
        }}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <div className="w-full h-full flex items-center justify-center">
          <div className="text-center">
            <div className="flex gap-1 justify-center mb-2">
              <div className="w-3 h-3 bg-primary/40 rounded-full" />
              <div className="w-3 h-3 bg-white/20 rounded-full" />
              <div className="w-3 h-3 bg-white/10 rounded-full" />
            </div>
            <div className="w-12 h-1.5 bg-white/15 rounded mx-auto" />
          </div>
        </div>
      </motion.div>
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
