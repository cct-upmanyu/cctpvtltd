import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Linkedin, Twitter, Youtube } from "lucide-react";
import cctLogoFooter from "@/assets/cct-logo-footer-new.png";

const footerLinks = {
  zohoProducts: [
    { label: "Zoho Solutions", href: "/zoho-solutions" },
    { label: "Zoho One Premium Partner", href: "/zoho-one-premium-partner" },
    { label: "Zoho CRM", href: "/zoho-crm" },
    { label: "Zoho Creator", href: "/zoho-creator" },
    { label: "Zoho Books", href: "/zoho-books" },
    { label: "Zoho Inventory", href: "/zoho-inventory" },
    { label: "Zoho People", href: "/zoho-people" },
    { label: "Zoho Analytics", href: "/zoho-analytics" },
  ],
  services: [
    { label: "AI Solutions", href: "/ai-solutions" },
    { label: "CRM Solutions", href: "/crm-solutions" },
    { label: "Data Migration", href: "/data-migration" },
    { label: "Custom ERP", href: "/custom-erp" },
    { label: "Website Development", href: "/website-development" },
    { label: "Third-Party Integrations", href: "/third-party-integrations" },
    { label: "Zoho Extension Development", href: "/zoho-extension-development" },
    { label: "AI Chatbot Solutions", href: "/ai-chatbot-solutions" },
  ],
  crmServices: [
    { label: "CRM Consulting", href: "/crm-consulting" },
    { label: "CRM Implementation", href: "/crm-implementation" },
    { label: "CRM Customisation", href: "/crm-customisation" },
    { label: "CRM Development", href: "/crm-development" },
    { label: "CRM Automation", href: "/crm-automation" },
    { label: "CRM Integrations", href: "/crm-integrations" },
    { label: "CRM Audit", href: "/crm-audit" },
  ],
  aiSolutions: [
    { label: "AI Agents", href: "/ai-agents" },
    { label: "AI Sales Automation", href: "/ai-sales-automation" },
    { label: "AI Customer Support", href: "/ai-customer-support" },
    { label: "AI Voice Bots", href: "/ai-voice-bots" },
    { label: "AI CRM Automation", href: "/ai-crm-automation" },
    { label: "AI Analytics", href: "/ai-analytics" },
  ],
  industries: [
    { label: "Manufacturing", href: "/industries/manufacturing" },
    { label: "Retail & E-commerce", href: "/industries/retail" },
    { label: "Education", href: "/industries/education" },
    { label: "Healthcare", href: "/industries/healthcare" },
    { label: "Real Estate", href: "/industries/real-estate" },
    { label: "Logistics & Transport", href: "/industries/logistics" },
    { label: "Hospitality & Tourism", href: "/industries/hospitality" },
    { label: "IT & SaaS", href: "/industries/it" },
    { label: "Nonprofits & NGOs", href: "/industries/nonprofits" },
    { label: "Media & Entertainment", href: "/industries/media" },
    { label: "Professional Services", href: "/industries/professional-services" },
    { label: "Recruitment & HR", href: "/industries/recruitment" },
    { label: "Legal Services", href: "/industries/legal" },
    { label: "Financial Services", href: "/industries/financial-services" },
    { label: "Marketing & Creative", href: "/industries/marketing-creative" },
    { label: "SaaS & Startups", href: "/industries/saas" },
  ],
  company: [
    { label: "About Us", href: "/company" },
    { label: "Contact", href: "/contact" },
    { label: "Case Studies", href: "/case-studies" },
    { label: "Blog", href: "/blog" },
    { label: "Industry Solutions", href: "/industries" },
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
  crmComparisons: [
    { label: "Zoho CRM vs Salesforce", href: "/compare/zoho-crm-vs-salesforce" },
    { label: "Zoho CRM vs HubSpot", href: "/compare/zoho-crm-vs-hubspot" },
    { label: "Zoho CRM vs Pipedrive", href: "/compare/zoho-crm-vs-pipedrive" },
    { label: "Zoho CRM vs Freshsales", href: "/compare/zoho-crm-vs-freshsales" },
    { label: "Zoho CRM vs Microsoft Dynamics 365", href: "/compare/zoho-crm-vs-microsoft-dynamics" },
    { label: "Zoho CRM vs Monday CRM", href: "/compare/zoho-crm-vs-monday-crm" },
  ],
  crmMigration: [
    { label: "CRM Migration Services", href: "/data-migration" },
    { label: "Salesforce to Zoho CRM Migration", href: "/data-migration" },
    { label: "HubSpot to Zoho CRM Migration", href: "/data-migration" },
    { label: "Pipedrive to Zoho CRM Migration", href: "/data-migration" },
    { label: "Freshsales to Zoho CRM Migration", href: "/data-migration" },
    { label: "Microsoft Dynamics to Zoho CRM Migration", href: "/data-migration" },
    { label: "Monday CRM to Zoho CRM Migration", href: "/data-migration" },
  ],
  crmAlternatives: [
    { label: "Salesforce Alternative CRM", href: "/compare/zoho-crm-vs-salesforce" },
    { label: "HubSpot Alternative CRM", href: "/compare/zoho-crm-vs-hubspot" },
    { label: "Pipedrive Alternative CRM", href: "/compare/zoho-crm-vs-pipedrive" },
    { label: "Freshsales Alternative CRM", href: "/compare/zoho-crm-vs-freshsales" },
  ],
};

export function Footer() {
  return (
    <footer className="border-t border-[#1A365D]">
      {/* Main Footer Content */}
      <div className="bg-[#050D1A]">
        <div className="container-custom py-16">
          {/* Row 1: Brand + Industries + Services + Company + Global Presence */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-x-8 gap-y-12 mb-14">
            
            {/* Brand Column */}
            <div>
              <Link to="/" className="inline-block mb-5">
                <img 
                  src={cctLogoFooter} 
                  alt="ClubCode Technology" 
                  className="h-48 w-auto -ml-4"
                />
              </Link>
              <p className="text-[#64748B] text-sm leading-relaxed mb-5 max-w-xs">
                Global Zoho Premium Partner & AI Automation Experts. Building intelligent business systems for scale.
              </p>
              <div className="space-y-2.5">
                <a href="mailto:info@clubcodetechnology.com" className="flex items-center gap-2.5 text-[#94A3B8] hover:text-[#3FE0F0] transition-colors text-sm">
                  <Mail className="w-4 h-4 flex-shrink-0" />
                  info@clubcodetechnology.com
                </a>
                <a href="tel:+919193610009" className="flex items-center gap-2.5 text-[#94A3B8] hover:text-[#3FE0F0] transition-colors text-sm">
                  <Phone className="w-4 h-4 flex-shrink-0" />
                  +91 91936 10009
                </a>
                <div className="flex items-start gap-2.5 text-[#94A3B8] text-sm">
                  <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" />
                  <span>Global Offices: India, UK, USA, UAE</span>
                </div>
              </div>
              <div className="flex gap-3 mt-6">
                <a href="#" className="w-9 h-9 rounded-lg bg-[#0B1C3D] flex items-center justify-center text-[#94A3B8] hover:bg-[#3FE0F0] hover:text-white transition-all">
                  <Linkedin className="w-4 h-4" />
                </a>
                <a href="#" className="w-9 h-9 rounded-lg bg-[#0B1C3D] flex items-center justify-center text-[#94A3B8] hover:bg-[#3FE0F0] hover:text-white transition-all">
                  <Twitter className="w-4 h-4" />
                </a>
                <a href="#" className="w-9 h-9 rounded-lg bg-[#0B1C3D] flex items-center justify-center text-[#94A3B8] hover:bg-[#3FE0F0] hover:text-white transition-all">
                  <Youtube className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Industries */}
            <div>
              <h4 className="text-[#3FE0F0] font-semibold text-sm uppercase tracking-wider mb-5">Industries</h4>
              <ul className="space-y-2.5">
                {footerLinks.industries.map((link) => (
                  <li key={link.label}>
                    <Link to={link.href} className="text-[#94A3B8] hover:text-white transition-colors text-sm">{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-[#3FE0F0] font-semibold text-sm uppercase tracking-wider mb-5">Services</h4>
              <ul className="space-y-2.5">
                {footerLinks.solutions.map((link) => (
                  <li key={link.label}>
                    <Link to={link.href} className="text-[#94A3B8] hover:text-white transition-colors text-sm">{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="text-[#3FE0F0] font-semibold text-sm uppercase tracking-wider mb-5">Company</h4>
              <ul className="space-y-2.5">
                {footerLinks.company.map((link) => (
                  <li key={link.label}>
                    <Link to={link.href} className="text-[#94A3B8] hover:text-white transition-colors text-sm">{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Global Presence */}
            <div>
              <h4 className="text-[#3FE0F0] font-semibold text-sm uppercase tracking-wider mb-5">Global Presence</h4>
              <ul className="space-y-2.5">
                {footerLinks.globalPresence.map((link) => (
                  <li key={link.label}>
                    <Link to={link.href} className="text-[#94A3B8] hover:text-white transition-colors text-sm">{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Divider between rows */}
          <div className="border-t border-[#1A365D] mb-14" />

          {/* Row 2: CRM Comparisons + CRM Migration + CRM Alternatives */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 mb-14">
            
            {/* CRM Comparisons */}
            <div>
              <h4 className="text-[#3FE0F0] font-semibold text-sm uppercase tracking-wider mb-5">CRM Comparisons</h4>
              <ul className="space-y-2.5">
                {footerLinks.crmComparisons.map((link) => (
                  <li key={link.label}>
                    <Link to={link.href} className="text-[#94A3B8] hover:text-white transition-colors text-sm">{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* CRM Migration */}
            <div>
              <h4 className="text-[#3FE0F0] font-semibold text-sm uppercase tracking-wider mb-5">CRM Migration</h4>
              <ul className="space-y-2.5">
                {footerLinks.crmMigration.map((link) => (
                  <li key={link.label}>
                    <Link to={link.href} className="text-[#94A3B8] hover:text-white transition-colors text-sm">{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* CRM Alternatives */}
            <div>
              <h4 className="text-[#3FE0F0] font-semibold text-sm uppercase tracking-wider mb-5">CRM Alternatives</h4>
              <ul className="space-y-2.5">
                {footerLinks.crmAlternatives.map((link) => (
                  <li key={link.label}>
                    <Link to={link.href} className="text-[#94A3B8] hover:text-white transition-colors text-sm">{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-[#020408]">
        <div className="container-custom py-5">
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