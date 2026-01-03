import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface GlassCardProps {
  icon?: LucideIcon;
  title: string;
  description: string;
  className?: string;
  iconClassName?: string;
}

export default function GlassCard({
  icon: Icon,
  title,
  description,
  className,
  iconClassName,
}: GlassCardProps) {
  return (
    <motion.div
      className={cn(
        "group relative p-6 rounded-md overflow-hidden",
        "bg-white/[0.03] backdrop-blur-xl",
        "border border-white/[0.08]",
        "transition-all duration-300",
        "shadow-[0_8px_32px_rgba(0,0,0,0.2)]",
        className
      )}
      whileHover={{ 
        y: -4,
        boxShadow: "0 12px 40px rgba(0, 0, 0, 0.3), 0 0 30px rgba(255, 255, 255, 0.05)",
        transition: { duration: 0.3 }
      }}
    >
      <div 
        className="absolute inset-0 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: "radial-gradient(circle at center, hsl(345 70% 42% / 0.15) 0%, transparent 70%)",
        }}
      />
      <div 
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
        style={{
          background: "linear-gradient(135deg, rgba(255,255,255,0.1) 0%, transparent 50%, rgba(255,255,255,0.05) 100%)",
        }}
      />
      
      {Icon && (
        <div className={cn(
          "relative mb-4 w-12 h-12 rounded-md flex items-center justify-center",
          "bg-primary/10 text-primary",
          "group-hover:bg-primary/20 transition-colors duration-300",
          iconClassName
        )}>
          <Icon className="w-6 h-6" />
        </div>
      )}
      
      <h3 className="relative text-lg font-semibold text-foreground mb-2">{title}</h3>
      <p className="relative text-muted-foreground text-sm leading-relaxed">{description}</p>
    </motion.div>
  );
}
