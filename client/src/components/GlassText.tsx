import { motion } from "framer-motion";

interface GlassTextProps {
  text: string;
  className?: string;
  delay?: number;
  charDelay?: number;
  mode?: "char" | "word";
}

export function GlassText({
  text,
  className = "",
  delay = 0,
  charDelay = 0.05,
  mode = "word",
}: GlassTextProps) {
  const items = mode === "char" ? text.split("") : text.split(" ");

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: charDelay,
        delayChildren: delay,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      filter: "blur(6px)",
    },
    visible: {
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        duration: 0.35,
        ease: "easeOut",
      },
    },
  };

  const fallbackClass = mode === "char" ? "glass-text-char" : "glass-text-word";

  return (
    <motion.span
      className={className}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {items.map((item, index) => (
        <motion.span
          key={index}
          variants={itemVariants}
          className={`inline-block ${fallbackClass}`}
          style={{ 
            whiteSpace: mode === "word" ? "pre" : "normal",
            animationDelay: `${delay + index * charDelay}s`
          }}
        >
          {item}
          {mode === "word" && index < items.length - 1 ? " " : ""}
        </motion.span>
      ))}
    </motion.span>
  );
}
