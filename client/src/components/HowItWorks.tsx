import { motion } from "framer-motion";
import { MessageSquare, Palette, Cpu, Rocket } from "lucide-react";

const steps = [
  {
    icon: MessageSquare,
    title: "Share Requirements",
    description: "Tell us what you need — your vision, goals, and preferences.",
  },
  {
    icon: Palette,
    title: "Design & Build",
    description: "Our engineers design and develop your custom website.",
  },
  {
    icon: Cpu,
    title: "AI Acceleration",
    description: "AI powers our workflow internally for speed and efficiency.",
  },
  {
    icon: Rocket,
    title: "Deploy & Launch",
    description: "Your website goes live — same day, fully optimized.",
  },
];

export default function HowItWorks() {
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
            How It <span className="text-primary">Works</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A simple, streamlined process that gets your website from concept to launch in record time.
          </p>
        </motion.div>

        <div className="relative">
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary/30 to-transparent -translate-y-1/2" />
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                className="relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="flex flex-col items-center text-center">
                  <div className="relative z-10 w-16 h-16 rounded-full bg-white/[0.03] backdrop-blur-xl border-2 border-primary/30 flex items-center justify-center mb-4 group shadow-[0_0_30px_rgba(0,0,0,0.3)] hover:shadow-[0_0_40px_rgba(255,255,255,0.1)] transition-shadow duration-300">
                    <div className="absolute inset-0 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300" />
                    <step.icon className="w-7 h-7 text-primary relative z-10" />
                    <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs font-bold flex items-center justify-center shadow-[0_0_15px_rgba(var(--primary),0.3)]">
                      {index + 1}
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-semibold text-foreground mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
