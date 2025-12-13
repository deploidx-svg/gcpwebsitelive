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
        "group relative p-6 rounded-md overflow-visible",
        "bg-white/[0.03] backdrop-blur-xl",
        "border border-white/[0.08]",
        "transition-all duration-300",
        className
      )}
      whileHover={{ 
        y: -4,
        transition: { duration: 0.2 }
      }}
    >
      <div 
        className="absolute inset-0 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"
        style={{
          background: "radial-gradient(circle at center, hsl(345 70% 42% / 0.15) 0%, transparent 70%)",
        }}
      />
      
      {Icon && (
        <div className={cn(
          "mb-4 w-12 h-12 rounded-md flex items-center justify-center",
          "bg-primary/10 text-primary",
          iconClassName
        )}>
          <Icon className="w-6 h-6" />
        </div>
      )}
      
      <h3 className="text-lg font-semibold text-foreground mb-2">{title}</h3>
      <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
    </motion.div>
  );
}
