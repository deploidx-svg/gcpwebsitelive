import { motion, useReducedMotion } from "framer-motion";
import { useMemo } from "react";

export default function AnimatedBackground() {
  const shouldReduceMotion = useReducedMotion();

  // Memoize the noise background to avoid re-rendering
  const noiseBackground = useMemo(() => ({
    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
  }), []);

  // Disable animations on reduced motion preference or slower devices
  const animationProps = shouldReduceMotion ? {} : {
    animate: {
      x: [0, 100, 0],
      y: [0, 50, 0],
    },
    transition: {
      duration: 25, // Slower animation for better performance
      repeat: Infinity,
      ease: "easeInOut",
    }
  };

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-[#0a0a0a]" />

      <motion.div
        className="absolute top-0 left-0 w-[800px] h-[800px] rounded-full opacity-20"
        style={{
          background: "radial-gradient(circle, hsl(345 70% 35%) 0%, transparent 70%)",
          filter: "blur(100px)",
        }}
        {...animationProps}
      />

      <motion.div
        className="absolute bottom-0 right-0 w-[600px] h-[600px] rounded-full opacity-15"
        style={{
          background: "radial-gradient(circle, hsl(350 65% 40%) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
        animate={shouldReduceMotion ? undefined : {
          x: [0, -80, 0],
          y: [0, -60, 0],
        }}
        transition={shouldReduceMotion ? undefined : {
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full opacity-10"
        style={{
          background: "radial-gradient(circle, hsl(340 55% 30%) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
        animate={shouldReduceMotion ? undefined : {
          scale: [1, 1.1, 1],
        }}
        transition={shouldReduceMotion ? undefined : {
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div
        className="absolute inset-0 opacity-[0.03]"
        style={noiseBackground}
      />
    </div>
  );
}
