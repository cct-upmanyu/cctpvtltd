import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Linkedin, Twitter, Youtube } from "lucide-react";
import cctLogoFooter from "@/assets/cct-logo-footer-new.png";

const footerLinks = {
  solutions: [
    { label: "Zoho Solutions", href: "/zoho-solutions" },
    { label: "AI Solutions", href: "/ai-solutions" },
    { label: "CRM Solutions", href: "/crm-solutions" },
    { label: "Data Migration", href: "/data-migration" },
    { label: "Website Development", href: "/website-development" },
    { label: "Custom ERP", href: "/custom-erp" },
    { label: "Third-Party Integrations", href: "/third-party-integrations" },
    { label: "Zoho Extension Development", href: "/zoho-extension-development" },
    { label: "Industry Solutions", href: "/industries" },
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
  globalPresence: [
    { label: "UK", href: "/zoho-partner-uk" },
    { label: "UAE", href: "/zoho-partner-uae" },
    { label: "Australia", href: "/zoho-partner-australia" },
    { label: "Canada", href: "/zoho-partner-canada" },
    { label: "USA", href: "/zoho-partner-usa" },
    { label: "India", href: "/zoho-partner-india" },
    { label: "Europe", href: "/zoho-partner-europe" },
  ],
};

export function Footer() {
  return (
    <footer className="border-t border-[#1A365D]">

      {/* Main Footer Content - Even Darker */}
      <div className="bg-[#050D1A]">
        <div className="container-custom py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
            {/* Brand Column */}
            <div className="lg:col-span-2">
              <Link to="/" className="flex items-center mb-6">
                <img 
                  src={cctLogoFooter} 
                  alt="ClubCode Technology" 
                  className="h-36 w-auto"
                />
              </Link>
              <p className="text-[#64748B] mb-6 max-w-sm">
                Global Zoho Premium Partner & AI Automation Experts. Building intelligent business systems for scale.
              </p>
              <div className="space-y-3">
                <a href="mailto:info@clubcodetechnology.com" className="flex items-center gap-3 text-[#94A3B8] hover:text-[#3FE0F0] transition-colors">
                  <Mail className="w-5 h-5" />
                  info@clubcodetechnology.com
                </a>
                <a href="tel:+919193610009" className="flex items-center gap-3 text-[#94A3B8] hover:text-[#3FE0F0] transition-colors">
                  <Phone className="w-5 h-5" />
                  +91 91936 10009
                </a>
                <div className="flex items-start gap-3 text-[#94A3B8]">
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
                    <Link to={link.href} className="text-[#94A3B8] hover:text-[#3FE0F0] transition-colors">
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
                    <Link to={link.href} className="text-[#94A3B8] hover:text-[#3FE0F0] transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company & Global Presence Combined */}
            <div>
              <h4 className="text-white font-semibold mb-4">Company</h4>
              <ul className="space-y-3 mb-6">
                {footerLinks.company.map((link) => (
                  <li key={link.label}>
                    <Link to={link.href} className="text-[#94A3B8] hover:text-[#3FE0F0] transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>

              <h4 className="text-white font-semibold mb-4">Zoho Partner by Country</h4>
              <ul className="space-y-3">
                {footerLinks.globalPresence.map((link) => (
                  <li key={link.label}>
                    <Link to={link.href} className="text-[#94A3B8] hover:text-[#3FE0F0] transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-4 mb-8">
            <a href="#" className="w-10 h-10 rounded-lg bg-[#0B1C3D] flex items-center justify-center text-[#94A3B8] hover:bg-[#3FE0F0] hover:text-white transition-all">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="#" className="w-10 h-10 rounded-lg bg-[#0B1C3D] flex items-center justify-center text-[#94A3B8] hover:bg-[#3FE0F0] hover:text-white transition-all">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="w-10 h-10 rounded-lg bg-[#0B1C3D] flex items-center justify-center text-[#94A3B8] hover:bg-[#3FE0F0] hover:text-white transition-all">
              <Youtube className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar - Darkest */}
      <div className="bg-[#020408]">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-[#64748B] text-sm">
              © {new Date().getFullYear()} ClubCode Technology Private Limited. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <Link to="/privacy" className="text-[#64748B] hover:text-[#3FE0F0] transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-[#64748B] hover:text-[#3FE0F0] transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}