import { motion } from "framer-motion";
import GlassCard from "./GlassCard";
import { Zap, DollarSign, Cpu } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Same-Day Delivery",
    description: "Get your website live within 24 hours. Our AI-powered workflow ensures rapid development without compromising quality.",
  },
  {
    icon: DollarSign,
    title: "Affordable Pricing",
    description: "One of the most competitive rates in the market. AI helps us reduce costs and pass the savings directly to you.",
  },
  {
    icon: Cpu,
    title: "AI-Powered Engineering",
    description: "Our engineers leverage AI internally for speed, security, and scalability. You never touch the tools — we handle everything.",
  },
];

export default function WhySection() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Why Choose <span className="text-primary">GrowithCP</span>?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We combine cutting-edge AI technology with expert engineering to deliver exceptional results at unbeatable prices.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <GlassCard
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
