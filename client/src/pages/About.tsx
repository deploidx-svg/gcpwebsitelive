import { motion } from "framer-motion";
import { Users, Cpu, Shield, Rocket, Code, Heart } from "lucide-react";
import GlassCard from "@/components/GlassCard";

const values = [
  {
    icon: Users,
    title: "Client-First Approach",
    description: "You share your vision, we bring it to life. No technical knowledge required from your side.",
  },
  {
    icon: Cpu,
    title: "AI-Powered Internally",
    description: "Our engineers use AI tools to accelerate development. You never interact with AI directly.",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Built with security best practices. Your website and data are protected from day one.",
  },
  {
    icon: Rocket,
    title: "Same-Day Delivery",
    description: "Our AI-enhanced workflow means we can deliver quality websites in record time.",
  },
  {
    icon: Code,
    title: "Clean, Modern Code",
    description: "We build websites that are maintainable, scalable, and optimized for performance.",
  },
  {
    icon: Heart,
    title: "Ongoing Support",
    description: "We don't just build and leave. Our team provides continued support for your success.",
  },
];

export default function About() {
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
            About <span className="text-primary">GrowithCP</span>
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg mb-4">
            We're not a DIY website builder. We're a team of expert engineers who build your website for you.
          </p>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
            <Shield className="w-4 h-4 text-primary" />
            <span className="text-sm text-primary font-medium">Karnataka Government Registered Business</span>
          </div>
        </motion.div>

        <motion.div
          className="mb-20 p-8 rounded-md bg-white/[0.03] backdrop-blur-xl border border-white/[0.08]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-foreground mb-6 text-center">
              How We're Different
            </h2>
            
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                  <span className="text-primary font-bold">1</span>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">You Don't Build Anything</h3>
                  <p className="text-muted-foreground text-sm">
                    Unlike DIY builders where you drag and drop, you simply tell us what you need. Our engineers handle all the technical work.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                  <span className="text-primary font-bold">2</span>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">AI Is Our Internal Tool</h3>
                  <p className="text-muted-foreground text-sm">
                    We use AI technology internally to speed up our development process. You never interact with AI — you only deal with our professional team.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                  <span className="text-primary font-bold">3</span>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Fully Done-For-You</h3>
                  <p className="text-muted-foreground text-sm">
                    From design to development to deployment, we handle everything. You get a finished, live website without lifting a finger.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                  <span className="text-primary font-bold">4</span>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Affordable Excellence</h3>
                  <p className="text-muted-foreground text-sm">
                    AI makes our engineers more efficient, which means lower costs for you. Premium quality at prices that make sense.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-foreground mb-4">Our Values</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            The principles that guide everything we do.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <GlassCard
                icon={value.icon}
                title={value.title}
                description={value.description}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
