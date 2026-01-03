import { Suspense, lazy, createContext, useContext, useEffect, useState } from "react";
import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";

// Performance context for mobile optimizations
const PerformanceContext = createContext({
  isMobile: false,
  shouldReduceMotion: false,
  prefersReducedMotion: false,
});

export const usePerformance = () => useContext(PerformanceContext);

// Loading component for Suspense fallback
const LoadingSpinner = () => (
  <div className="min-h-screen flex items-center justify-center bg-background">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
  </div>
);

// Lazy load components for better performance
const AnimatedBackground = lazy(() => import("@/components/AnimatedBackground"));
const Navbar = lazy(() => import("@/components/Navbar"));
const Footer = lazy(() => import("@/components/Footer"));

// Lazy load pages with code splitting
const Home = lazy(() => import("@/pages/Home"));
const Services = lazy(() => import("@/pages/Services"));
const Portfolio = lazy(() => import("@/pages/Portfolio"));
const BusinessWebsites = lazy(() => import("@/pages/BusinessWebsites"));
const PortfolioWebsites = lazy(() => import("@/pages/PortfolioWebsites"));
const EcommerceWebsites = lazy(() => import("@/pages/EcommerceWebsites"));
const LandingPages = lazy(() => import("@/pages/LandingPages"));
const Hosting = lazy(() => import("@/pages/Hosting"));
const Pricing = lazy(() => import("@/pages/Pricing"));
const About = lazy(() => import("@/pages/About"));
const Contact = lazy(() => import("@/pages/Contact"));
const DemoPlan = lazy(() => import("@/pages/DemoPlan"));
const StarterPlan = lazy(() => import("@/pages/StarterPlan"));
const GrowthPlan = lazy(() => import("@/pages/GrowthPlan"));
const ProBusinessPlan = lazy(() => import("@/pages/ProBusinessPlan"));
const EliteAIPlan = lazy(() => import("@/pages/EliteAIPlan"));
const ChatDemo = lazy(() => import("@/pages/ChatDemo"));
const Terms = lazy(() => import("@/pages/Terms"));
const NotFound = lazy(() => import("@/pages/not-found"));

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/services" component={Services} />
      <Route path="/portfolio" component={Portfolio} />
      <Route path="/services/business-websites" component={BusinessWebsites} />
      <Route path="/services/portfolio-websites" component={PortfolioWebsites} />
      <Route path="/services/ecommerce-websites" component={EcommerceWebsites} />
      <Route path="/services/landing-pages" component={LandingPages} />
      <Route path="/services/hosting" component={Hosting} />
      <Route path="/demo-plan" component={DemoPlan} />
      <Route path="/starter-plan" component={StarterPlan} />
      <Route path="/growth-plan" component={GrowthPlan} />
      <Route path="/pro-business-plan" component={ProBusinessPlan} />
      <Route path="/elite-ai-plan" component={EliteAIPlan} />
      <Route path="/chat-demo" component={ChatDemo} />
      <Route path="/pricing" component={Pricing} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <Route path="/terms" component={Terms} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Suspense fallback={<LoadingSpinner />}>
          <div className="min-h-screen flex flex-col">
            <Suspense fallback={null}>
              <AnimatedBackground />
            </Suspense>
            <Suspense fallback={null}>
              <Navbar />
            </Suspense>
            <main className="flex-1">
              <Suspense fallback={<LoadingSpinner />}>
                <Router />
              </Suspense>
            </main>
            <Suspense fallback={null}>
              <Footer />
            </Suspense>
          </div>
          <Toaster />
        </Suspense>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
