import { motion, useReducedMotion } from "framer-motion";
import { useMemo } from "react";

export default function AnimatedBackground() {
  const shouldReduceMotion = useReducedMotion();

  // Detect mobile devices for additional performance optimizations
  const isMobile = useMemo(() => {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ||
           window.innerWidth < 768;
  }, []);

  // Memoize the noise background to avoid re-rendering
  const noiseBackground = useMemo(() => ({
    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
  }), []);

  // Disable animations completely on mobile or reduced motion
  if (shouldReduceMotion || isMobile) {
    return (
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-[#0a0a0a]" />
        {/* Static background elements for mobile - no animations */}
        <div
          className="absolute top-0 left-0 w-[400px] h-[400px] rounded-full opacity-10"
          style={{
            background: "radial-gradient(circle, hsl(345 70% 35%) 0%, transparent 70%)",
            filter: "blur(50px)",
            transform: "translateZ(0)", // Hardware acceleration
          }}
        />
        <div
          className="absolute bottom-0 right-0 w-[300px] h-[300px] rounded-full opacity-8"
          style={{
            background: "radial-gradient(circle, hsl(350 65% 40%) 0%, transparent 70%)",
            filter: "blur(40px)",
            transform: "translateZ(0)", // Hardware acceleration
          }}
        />
      </div>
    );
  }

  // Desktop animations - optimized for performance
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-[#0a0a0a]" />

      <motion.div
        className="absolute top-0 left-0 w-[800px] h-[800px] rounded-full opacity-20"
        style={{
          background: "radial-gradient(circle, hsl(345 70% 35%) 0%, transparent 70%)",
          filter: "blur(100px)",
          willChange: "transform", // Optimize for animations
        }}
        animate={{
          x: [0, 50, 0], // Reduced movement for better performance
          y: [0, 25, 0],
        }}
        transition={{
          duration: 30, // Even slower for better performance
          repeat: Infinity,
          ease: "linear", // Simpler easing for better performance
        }}
      />

      <motion.div
        className="absolute bottom-0 right-0 w-[600px] h-[600px] rounded-full opacity-15"
        style={{
          background: "radial-gradient(circle, hsl(350 65% 40%) 0%, transparent 70%)",
          filter: "blur(80px)",
          willChange: "transform",
        }}
        animate={{
          x: [0, -40, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 35,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Removed the third animated element for better performance */}

      <div
        className="absolute inset-0 opacity-[0.02]" // Reduced opacity for better performance
        style={noiseBackground}
      />
    </div>
  );
}
