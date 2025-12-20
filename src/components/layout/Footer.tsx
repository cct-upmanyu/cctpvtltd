import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Linkedin, Twitter, Youtube, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import cctLogo from "@/assets/cct-logo.png";

const footerLinks = {
  solutions: [
    { label: "Zoho Solutions", href: "/zoho-solutions" },
    { label: "AI Solutions", href: "/ai-solutions" },
    { label: "CRM Solutions", href: "/crm-solutions" },
    { label: "Data Migration", href: "/data-migration" },
    { label: "Website Development", href: "/website-development" },
    { label: "Custom ERP", href: "/custom-erp" },
  ],
  industries: [
    { label: "Manufacturing", href: "/industries#manufacturing" },
    { label: "Recruitment", href: "/industries#recruitment" },
    { label: "Real Estate", href: "/industries#real-estate" },
    { label: "Healthcare", href: "/industries#healthcare" },
    { label: "Education", href: "/industries#education" },
    { label: "Retail", href: "/industries#retail" },
  ],
  company: [
    { label: "About Us", href: "/company" },
    { label: "Our Team", href: "/company#team" },
    { label: "Careers", href: "/company#careers" },
    { label: "Contact", href: "/contact" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-dark-gradient border-t border-border-dark">
      <div className="container-custom section-padding">
        {/* Top CTA Section */}
        <div className="text-center mb-16 pb-16 border-b border-border-dark">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-muted-dark-foreground text-lg max-w-2xl mx-auto mb-8">
            Let's discuss how we can help you leverage Zoho, AI, and automation to scale your operations.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="heroDark" size="lg">
              Book Free Consultation
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button variant="heroSecondary" size="lg">
              Talk to a Zoho Expert
            </Button>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center mb-6">
              <img 
                src={cctLogo} 
                alt="ClubCode Technology" 
                className="h-14 w-auto brightness-0 invert"
              />
            </Link>
            <p className="text-muted-dark-foreground mb-6 max-w-sm">
              Global Zoho Premium Partner & AI Automation Experts. Building intelligent business systems for scale.
            </p>
            <div className="space-y-3">
              <a href="mailto:info@clubcodetechnology.com" className="flex items-center gap-3 text-muted-dark-foreground hover:text-primary transition-colors">
                <Mail className="w-5 h-5" />
                info@clubcodetechnology.com
              </a>
              <a href="tel:+919876543210" className="flex items-center gap-3 text-muted-dark-foreground hover:text-primary transition-colors">
                <Phone className="w-5 h-5" />
                +91 98765 43210
              </a>
              <div className="flex items-start gap-3 text-muted-dark-foreground">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span>Global Offices: India, UK, USA, UAE</span>
              </div>
            </div>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="text-white font-semibold mb-4">Solutions</h4>
            <ul className="space-y-3">
              {footerLinks.solutions.map((link) => (
                <li key={link.label}>
                  <Link to={link.href} className="text-muted-dark-foreground hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h4 className="text-white font-semibold mb-4">Industries</h4>
            <ul className="space-y-3">
              {footerLinks.industries.map((link) => (
                <li key={link.label}>
                  <Link to={link.href} className="text-muted-dark-foreground hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link to={link.href} className="text-muted-dark-foreground hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            {/* Social Links */}
            <div className="flex gap-4 mt-6">
              <a href="#" className="w-10 h-10 rounded-lg bg-muted-dark flex items-center justify-center text-muted-dark-foreground hover:bg-primary hover:text-primary-foreground transition-all">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-muted-dark flex items-center justify-center text-muted-dark-foreground hover:bg-primary hover:text-primary-foreground transition-all">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-muted-dark flex items-center justify-center text-muted-dark-foreground hover:bg-primary hover:text-primary-foreground transition-all">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border-dark flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-dark-foreground text-sm">
            © {new Date().getFullYear()} ClubCode Technology Private Limited. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <Link to="/privacy" className="text-muted-dark-foreground hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-muted-dark-foreground hover:text-primary transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}