import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import AnimatedBackground from "@/components/AnimatedBackground";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Home from "@/pages/Home";
import Services from "@/pages/Services";
import Pricing from "@/pages/Pricing";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import DemoPlan from "@/pages/DemoPlan";
import StarterPlan from "@/pages/StarterPlan";
import GrowthPlan from "@/pages/GrowthPlan";
import ProBusinessPlan from "@/pages/ProBusinessPlan";
import EliteAIPlan from "@/pages/EliteAIPlan";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/services" component={Services} />
      <Route path="/demo-plan" component={DemoPlan} />
      <Route path="/starter-plan" component={StarterPlan} />
      <Route path="/growth-plan" component={GrowthPlan} />
      <Route path="/pro-business-plan" component={ProBusinessPlan} />
      <Route path="/elite-ai-plan" component={EliteAIPlan} />
      <Route path="/pricing" component={Pricing} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <div className="min-h-screen flex flex-col">
          <AnimatedBackground />
          <Navbar />
          <main className="flex-1">
            <Router />
          </main>
          <Footer />
        </div>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
