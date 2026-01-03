import { Link } from "wouter";
import logoImage from "@assets/grologo-removebg-preview_1765632038637.png";

const footerLinks = {
  company: [
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Pricing", href: "/pricing" },
    { label: "Contact", href: "/contact" },
  ],
  services: [
    { label: "Business Websites", href: "/services" },
    { label: "E-Commerce", href: "/services" },
    { label: "Landing Pages", href: "/services" },
    { label: "Portfolio Sites", href: "/services" },
  ],
};

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.08] bg-black/30 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-2">
            <Link href="/">
              <img 
                src={logoImage} 
                alt="GrowithCP" 
                className="h-10 w-auto mb-4"
                loading="lazy"
                decoding="async"
                data-testid="img-footer-logo"
              />
            </Link>
            <p className="text-muted-foreground text-sm max-w-sm mb-4">
              AI-powered web design agency delivering premium websites same day. Our engineers handle everything using cutting-edge AI technology.
            </p>
            <a 
              href="https://betaai.growithcp.live/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center text-primary hover:text-primary/80 transition-colors text-sm font-medium"
              data-testid="link-footer-ai-consultant"
            >
              Talk to AI Consultant
            </a>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4">Company</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>
                    <span 
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
                      data-testid={`link-footer-${link.label.toLowerCase()}`}
                    >
                      {link.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4">Services</h4>
            <ul className="space-y-2">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <Link href={link.href}>
                    <span 
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
                      data-testid={`link-footer-service-${index}`}
                    >
                      {link.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} GrowithCP. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground">
            Built with AI-powered engineering
          </p>
        </div>
      </div>
    </footer>
  );
}
