import GlassCard from "../GlassCard";
import { Zap, Shield, Clock } from "lucide-react";

export default function GlassCardExample() {
  return (
    <div className="bg-[#0a0a0a] p-8 grid grid-cols-1 md:grid-cols-3 gap-6">
      <GlassCard
        icon={Zap}
        title="Same-Day Delivery"
        description="Get your website live within 24 hours. No waiting, no delays."
      />
      <GlassCard
        icon={Shield}
        title="Secure & Scalable"
        description="Built with enterprise-grade security and ready to scale."
      />
      <GlassCard
        icon={Clock}
        title="24/7 Support"
        description="Round-the-clock support to keep your website running smoothly."
      />
    </div>
  );
}
