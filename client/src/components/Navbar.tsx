import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import logoImage from "@assets/grologo-removebg-preview_1765632038637.png";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/pricing", label: "Pricing" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
  { href: "/terms", label: "Terms" },
];

export default function Navbar() {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      <div 
        className="mx-4 mt-4 rounded-md backdrop-blur-xl border border-white/[0.08]"
        style={{
          background: "rgba(10, 10, 10, 0.8)",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center gap-2">
              <img
                src={logoImage}
                alt="GrowithCP"
                className="h-32 w-auto"
                loading="eager"
                decoding="async"
                data-testid="img-logo"
              />
            </Link>

            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => {
                const isHighlighted = link.label === "Home" || link.label === "Pricing";
                return (
                  <Link key={link.href} href={link.href}>
                    <span
                      className={cn(
                        "px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 cursor-pointer",
                        location === link.href
                          ? "text-primary bg-primary/10"
                          : isHighlighted
                            ? "text-foreground bg-white/[0.08] backdrop-blur-sm border border-white/[0.12] shadow-[0_0_15px_rgba(255,255,255,0.05)]"
                            : "text-muted-foreground hover:text-foreground hover:bg-white/5"
                      )}
                      data-testid={`link-nav-${link.label.toLowerCase()}`}
                    >
                      {link.label}
                    </span>
                  </Link>
                );
              })}
            </div>

            <div className="hidden md:flex items-center gap-3">
              <Button
                asChild
                variant="ghost"
                className="text-muted-foreground hover:text-foreground hover:bg-white/5"
              >
                <a
                  href="https://clients.growithcp.live/login"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid="button-login-navbar"
                >
                  Login
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground"
              >
                <a
                  href="https://clients.growithcp.live/auth/register"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid="button-get-started-navbar"
                >
                  Get Started
                </a>
              </Button>
            </div>

            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              data-testid="button-mobile-menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden mx-4 mt-2 rounded-md backdrop-blur-xl border border-white/[0.08] overflow-hidden"
            style={{
              background: "rgba(10, 10, 10, 0.95)",
            }}
          >
            <div className="p-4 space-y-2">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href}>
                  <span
                    className={cn(
                      "block px-4 py-3 rounded-md text-sm font-medium transition-colors cursor-pointer",
                      location === link.href
                        ? "text-primary bg-primary/10"
                        : "text-muted-foreground hover:text-foreground hover:bg-white/5"
                    )}
                    onClick={() => setMobileMenuOpen(false)}
                    data-testid={`link-mobile-nav-${link.label.toLowerCase()}`}
                  >
                    {link.label}
                  </span>
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
