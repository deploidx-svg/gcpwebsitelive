import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { FileText, Rocket, MessageCircle } from "lucide-react";
import { useMemo } from "react";

interface ChatAction {
  label: string;
  href: string;
  type: 'primary' | 'secondary';
  icon?: 'plan' | 'demo' | 'whatsapp';
  external?: boolean;
}

interface ChatResponseProps {
  message: string;
  actions?: ChatAction[];
  className?: string;
}

// Mobile-optimized animation hook
const useMobileOptimizedAnimation = () => {
  const isMobile = useMemo(() => {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ||
           window.innerWidth < 768;
  }, []);

  const prefersReducedMotion = useMemo(() => {
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }, []);

  const shouldReduceMotion = isMobile || prefersReducedMotion;

  return {
    shouldReduceMotion,
    animationProps: shouldReduceMotion ? {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      transition: { duration: 0.3 }
    } : {
      initial: { opacity: 0, y: 10 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0.5 }
    }
  };
};

export default function ChatResponse({ message, actions = [], className = "" }: ChatResponseProps) {
  const { shouldReduceMotion, animationProps } = useMobileOptimizedAnimation();

  const getActionIcon = (icon?: string) => {
    switch (icon) {
      case 'plan':
        return <FileText className="w-4 h-4" />;
      case 'demo':
        return <Rocket className="w-4 h-4" />;
      case 'whatsapp':
        return <MessageCircle className="w-4 h-4" />;
      default:
        return null;
    }
  };

  return (
    <motion.div
      {...animationProps}
      className={`max-w-4xl mx-auto ${className}`}
    >
      {/* Message Bubble */}
      <motion.div
        className="relative bg-white/[0.02] backdrop-blur-xl border border-white/[0.08] rounded-2xl p-6 mb-6 shadow-lg shadow-purple-500/5"
        initial={shouldReduceMotion ? {} : { scale: 0.95 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.3, delay: 0.1 }}
      >
        {/* Subtle purple accent */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-500/3 via-transparent to-purple-500/2 pointer-events-none" />
        {/* Very subtle noise texture */}
        <div
          className="absolute inset-0 rounded-2xl opacity-[0.01] pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.2'/%3E%3C/svg%3E")`,
          }}
        />
        <div className="relative">
          <p className="text-foreground leading-relaxed text-lg">
            {message}
          </p>
        </div>
      </motion.div>

      {/* Action Section */}
      {actions.length > 0 && (
        <motion.div
          className="relative bg-white/[0.03] backdrop-blur-xl border border-white/[0.08] rounded-xl p-6 shadow-md shadow-purple-500/5"
          initial={shouldReduceMotion ? {} : { opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          {/* Purple accent border */}
          <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-purple-500/2 via-transparent to-purple-500/3 pointer-events-none" />
          {/* Subtle texture */}
          <div
            className="absolute inset-0 rounded-xl opacity-[0.01] pointer-events-none"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.6' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.3'/%3E%3C/svg%3E")`,
            }}
          />
          <div className="relative">
          <div className="flex flex-col sm:flex-row gap-3 justify-center items-stretch">
            {actions.map((action, index) => (
              <motion.div
                key={action.label}
                initial={shouldReduceMotion ? {} : { opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                className="flex-1 min-w-0"
              >
                <Button
                  size="lg"
                  variant={action.type === 'primary' ? 'default' : 'outline'}
                  className={`w-full h-14 text-base font-medium gap-3 transition-all duration-200 ${
                    action.type === 'primary'
                      ? 'bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl hover:scale-[1.02]'
                      : 'border-white/20 bg-white/5 hover:bg-white/10 text-foreground hover:border-white/30'
                  }`}
                  asChild
                >
                  <a
                    href={action.href}
                    target={action.external ? "_blank" : "_self"}
                    rel={action.external ? "noopener noreferrer" : undefined}
                    className="flex items-center justify-center gap-3"
                  >
                    {getActionIcon(action.icon)}
                    <span className="truncate">{action.label}</span>
                  </a>
                </Button>
              </motion.div>
            ))}
          </div>
          </div>
        </motion.div>
      )}
    </motion.div>
  );
}

// Example usage helper
export const createPlanActions = (planName: string, planSlug: string): ChatAction[] => [
  {
    label: `View ${planName}`,
    href: `/${planSlug}`,
    type: 'primary' as const,
    icon: 'plan' as const,
  },
  {
    label: 'Try Free Demo',
    href: '/demo-plan',
    type: 'secondary' as const,
    icon: 'demo' as const,
  },
  {
    label: 'Talk on WhatsApp',
    href: `https://wa.me/919108350973?text=I%20want%20the%20${planName}`,
    type: 'secondary' as const,
    icon: 'whatsapp' as const,
    external: true,
  },
];
