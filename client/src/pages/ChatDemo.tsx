import ChatResponse, { createPlanActions } from "@/components/ChatResponse";

export default function ChatDemo() {
  return (
    <div className="min-h-screen pt-28 pb-20 px-4 relative">
      {/* Hero Backdrop - Subtle purple radial glow */}
      <div className="absolute inset-0 top-0 h-96 pointer-events-none">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            background: `radial-gradient(circle at 50% 30%, hsl(260 60% 70%) 0%, transparent 50%)`,
          }}
        />
        {/* Subtle noise texture */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.4'/%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="max-w-4xl mx-auto relative">
        {/* Hero Section Container */}
        <div className="relative mb-16">
          <div className="bg-white/[0.4] backdrop-blur-sm border border-white/20 rounded-3xl shadow-lg shadow-purple-500/5 p-8 md:p-12">
            {/* Purple accent border */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-purple-500/5 via-transparent to-purple-500/5 pointer-events-none" />

            <div className="relative text-center">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 mb-6">
                <span className="text-xs font-medium text-purple-600">AI Chat Interface</span>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-3">
                Premium Chat Response UI
              </h1>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
                Experience our sophisticated chat interface designed for AI-powered business consultations
              </p>

              {/* Subtle purple divider */}
              <div className="w-24 h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent mx-auto mt-6" />
            </div>
          </div>
        </div>

        {/* Chat Section Container */}
        <div className="relative">
          {/* Subtle backdrop for chat area */}
          <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
            <div
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.4' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.3'/%3E%3C/svg%3E")`,
              }}
              className="w-full h-full"
            />
          </div>

          <div className="relative space-y-12">
          {/* Growth Plan Example */}
          <ChatResponse
            message="Based on your requirements for a growing business with up to 5 pages, professional design, and lead generation features, the Growth Plan is the perfect fit. It includes WhatsApp integration, advanced SEO, monthly updates, and analytics to help you track performance."
            actions={createPlanActions("Growth Plan", "growth-plan")}
          />

          {/* Starter Plan Example */}
          <ChatResponse
            message="For small businesses just starting out, the Starter Plan offers everything you need at an affordable price. Get a professional single-page website with AI content, mobile optimization, and basic SEO setup."
            actions={[
              {
                label: "View Starter Plan",
                href: "/starter-plan",
                type: "primary",
                icon: "plan"
              },
              {
                label: "Try Free Demo",
                href: "/demo-plan",
                type: "secondary",
                icon: "demo"
              },
              {
                label: "Talk on WhatsApp",
                href: "https://wa.me/919108350973?text=I%20want%20the%20Starter%20Plan",
                type: "secondary",
                icon: "whatsapp",
                external: true
              }
            ]}
          />

          {/* Pro Business Example */}
          <ChatResponse
            message="If you need enterprise-level features with AI chatbot integration, dynamic content management, and advanced analytics, the Pro Business Plan delivers professional-grade solutions for serious businesses."
            actions={[
              {
                label: "Explore Pro Business",
                href: "/pro-business-plan",
                type: "primary",
                icon: "plan"
              },
              {
                label: "Schedule Consultation",
                href: "https://wa.me/919108350973?text=I%20need%20help%20with%20Pro%20Business%20Plan",
                type: "secondary",
                icon: "whatsapp",
                external: true
              }
            ]}
          />

          {/* Demo Only Example */}
          <ChatResponse
            message="Want to see exactly what your website will look like before committing? Try our free AI website demo - professional design delivered in 24 hours with no upfront costs."
            actions={[
              {
                label: "Get Free Demo",
                href: "/demo-plan",
                type: "primary",
                icon: "demo"
              },
              {
                label: "View All Plans",
                href: "/pricing",
                type: "secondary",
                icon: "plan"
              }
            ]}
          />

          {/* WhatsApp Focused Example */}
          <ChatResponse
            message="Ready to get started? Our team is here to help you choose the perfect plan and get your website up and running quickly."
            actions={[
              {
                label: "Talk to Expert",
                href: "https://wa.me/919108350973?text=I%20need%20help%20choosing%20a%20plan",
                type: "primary",
                icon: "whatsapp",
                external: true
              },
              {
                label: "Browse Plans",
                href: "/pricing",
                type: "secondary",
                icon: "plan"
              }
            ]}
          />
          </div>
        </div>

        <div className="mt-16 p-6 bg-white/[0.02] backdrop-blur-xl border border-white/[0.08] rounded-xl">
          <h2 className="text-xl font-semibold text-foreground mb-4">Component Features</h2>
          <ul className="space-y-2 text-muted-foreground">
            <li>✅ No raw URLs in message text</li>
            <li>✅ Separate message bubble and action section</li>
            <li>✅ Mobile-first design with thumb-friendly buttons</li>
            <li>✅ Primary and secondary CTA styling</li>
            <li>✅ Icons for different action types</li>
            <li>✅ Smooth animations with mobile optimization</li>
            <li>✅ External link handling</li>
            <li>✅ Glass morphism design system</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
