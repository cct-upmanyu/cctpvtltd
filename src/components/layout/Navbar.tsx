import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import cctLogo from "@/assets/cct-logo.png";

// Services mega menu structure - 3 column layout without dividers
const servicesMenu = {
  label: "Services",
  categories: [
    {
      title: "Zoho Services",
      href: "/zoho-solutions",
      items: [
        { label: "Zoho One", href: "/zoho-one-premium-partner" },
        { label: "Zoho CRM Implementation", href: "/zoho-crm" },
        { label: "Zoho Creator", href: "/zoho-creator" },
        { label: "Zoho Books & Finance Automation", href: "/zoho-books" },
        { label: "Zoho Inventory", href: "/zoho-inventory" },
        { label: "Zoho Desk & SalesIQ", href: "/ai-chatbot-solutions" },
        { label: "Zoho People & Recruit", href: "/zoho-people" },
        { label: "Zoho Analytics", href: "/zoho-analytics" },
        { label: "Zoho Integrations", href: "/third-party-integrations" },
        { label: "Zoho Extension Development", href: "/zoho-extension-development" },
      ]
    },
    {
      title: "AI Solutions",
      href: "/ai-solutions",
      items: [
        { label: "AI Chatbot Solutions", href: "/ai-chatbot-solutions" },
        { label: "AI Agents & Assistants", href: "/ai-agents" },
        { label: "AI Sales Automation", href: "/ai-sales-automation" },
        { label: "AI Customer Support Automation", href: "/ai-customer-support" },
        { label: "AI Voice Bots", href: "/ai-voice-bots" },
        { label: "AI + CRM Automation", href: "/ai-crm-automation" },
        { label: "AI Analytics & Insights", href: "/ai-analytics" },
      ]
    },
    {
      title: "CRM Services",
      href: "/crm-services",
      items: [
        { label: "CRM Consulting", href: "/crm-consulting" },
        { label: "CRM Implementation", href: "/crm-implementation" },
        { label: "CRM Customisation", href: "/crm-customisation" },
        { label: "CRM Development", href: "/crm-development" },
        { label: "CRM Automation", href: "/crm-automation" },
        { label: "CRM Integrations", href: "/crm-integrations" },
        { label: "CRM Audit & Optimization", href: "/crm-audit" },
      ]
    },
    {
      title: "Data Migration",
      href: "/data-migration",
      items: [
        { label: "CRM Data Migration", href: "/data-migration" },
        { label: "ERP Data Migration", href: "/data-migration" },
        { label: "Email & Workspace Migration", href: "/data-migration" },
        { label: "Legacy System Migration", href: "/data-migration" },
        { label: "Data Cleansing & Validation", href: "/data-migration" },
        { label: "Migration Testing & Reconciliation", href: "/data-migration" },
      ]
    },
    {
      title: "Web Development",
      href: "/website-development",
      items: [
        { label: "Business Website Development", href: "/website-development" },
        { label: "Enterprise Website Development", href: "/website-development" },
        { label: "SaaS Website Development", href: "/website-development" },
        { label: "UI/UX Design", href: "/website-development" },
        { label: "Website Optimization", href: "/website-development" },
        { label: "SEO-Ready Website Builds", href: "/website-development" },
      ]
    },
    {
      title: "Custom ERP Development",
      href: "/custom-erp",
      items: [
        { label: "ERP Consulting", href: "/custom-erp" },
        { label: "Custom ERP Development", href: "/custom-erp" },
        { label: "ERP Automation", href: "/custom-erp" },
        { label: "ERP Integrations", href: "/custom-erp" },
        { label: "ERP Support & Scaling", href: "/custom-erp" },
      ]
    },
  ]
};

const navItems = [
  { label: "Home", href: "/" },
  { label: "Services", isMegaMenu: true },
  { label: "Industries", href: "/industries" },
  {
    label: "Global Presence",
    children: [
      { label: "United Kingdom", href: "/zoho-partner-uk" },
      { label: "United Arab Emirates", href: "/zoho-partner-uae" },
      { label: "Australia", href: "/zoho-partner-australia" },
      { label: "Canada", href: "/zoho-partner-canada" },
      { label: "United States", href: "/zoho-partner-usa" },
      { label: "India", href: "/zoho-partner-india" },
      { label: "Europe", href: "/zoho-partner-europe" },
    ],
  },
  {
    label: "Resources",
    children: [
      { label: "Case Studies", href: "/case-studies" },
      { label: "Blog", href: "/blog" },
    ],
  },
  { label: "Company", href: "/company" },
  { label: "Contact", href: "/contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [activeMobileCategory, setActiveMobileCategory] = useState<string | null>(null);
  const location = useLocation();

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-xl border-b border-border shadow-sm"
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img 
              src={cctLogo} 
              alt="ClubCode Technology" 
              className="h-12 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => (item.isMegaMenu || item.children) && setActiveDropdown(item.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                {item.isMegaMenu ? (
                  // Services Mega Menu Trigger
                  <button className="flex items-center gap-1 px-4 py-2 text-secondary hover:text-primary transition-colors font-medium">
                    {item.label}
                    <ChevronDown className={cn(
                      "w-4 h-4 transition-transform",
                      activeDropdown === item.label && "rotate-180"
                    )} />
                  </button>
                ) : item.children ? (
                  <button className="flex items-center gap-1 px-4 py-2 text-secondary hover:text-primary transition-colors font-medium">
                    {item.label}
                    <ChevronDown className={cn(
                      "w-4 h-4 transition-transform",
                      activeDropdown === item.label && "rotate-180"
                    )} />
                  </button>
                ) : (
                  <Link
                    to={item.href!}
                    className={cn(
                      "px-4 py-2 text-secondary hover:text-primary transition-colors font-medium",
                      location.pathname === item.href && "text-primary"
                    )}
                  >
                    {item.label}
                  </Link>
                )}

                {/* Mega Menu for Services */}
                <AnimatePresence>
                  {item.isMegaMenu && activeDropdown === item.label && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[900px] bg-white rounded-xl shadow-2xl z-50 overflow-hidden"
                    >
                      <div className="grid grid-cols-3">
                        {servicesMenu.categories.map((category) => (
                          <div 
                            key={category.title} 
                            className="p-6"
                          >
                            <Link 
                              to={category.href}
                              className="text-sm font-semibold text-primary hover:text-primary/80 transition-colors mb-4 block"
                            >
                              {category.title}
                            </Link>
                            <ul className="space-y-2">
                              {category.items.map((subItem) => (
                                <li key={subItem.label}>
                                  <Link
                                    to={subItem.href}
                                    className={cn(
                                      "text-sm text-secondary hover:text-primary hover:bg-muted/50 rounded px-2 py-1.5 block transition-colors",
                                      location.pathname === subItem.href && "text-primary bg-muted/50"
                                    )}
                                  >
                                    {subItem.label}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Regular Dropdown Menu */}
                <AnimatePresence>
                  {item.children && activeDropdown === item.label && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute top-full left-0 mt-2 w-56 py-2 bg-white border border-border rounded-lg shadow-xl z-50"
                    >
                      {item.children.map((child) => (
                        <Link
                          key={child.label}
                          to={child.href}
                          className={cn(
                            "block px-4 py-2.5 text-secondary hover:text-primary hover:bg-muted transition-colors",
                            location.pathname === child.href && "text-primary bg-muted"
                          )}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <Button variant="navCta" size="sm" asChild>
              <Link to="/contact">Talk to a Zoho Expert</Link>
            </Button>
            <Button variant="heroPrimary" size="sm" asChild>
              <Link to="/contact">Book Free Consultation</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-secondary"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden overflow-hidden"
            >
              <div className="py-4 space-y-2 bg-white max-h-[80vh] overflow-y-auto">
                {navItems.map((item) => (
                  <div key={item.label}>
                    {item.isMegaMenu ? (
                      // Mobile Services Menu
                      <div>
                        <button
                          onClick={() => setActiveDropdown(activeDropdown === "Services" ? null : "Services")}
                          className="w-full flex items-center justify-between px-4 py-2.5 text-secondary font-medium"
                        >
                          Services
                          <ChevronDown className={cn(
                            "w-4 h-4 transition-transform",
                            activeDropdown === "Services" && "rotate-180"
                          )} />
                        </button>
                        <AnimatePresence>
                          {activeDropdown === "Services" && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              className="pl-4 overflow-hidden bg-muted/30"
                            >
                              {servicesMenu.categories.map((category) => (
                                <div key={category.title} className="border-b border-border/50 last:border-0">
                                  <button
                                    onClick={() => setActiveMobileCategory(
                                      activeMobileCategory === category.title ? null : category.title
                                    )}
                                    className="w-full flex items-center justify-between px-4 py-3 text-secondary font-medium text-sm"
                                  >
                                    <span className="text-primary">{category.title}</span>
                                    <ChevronRight className={cn(
                                      "w-4 h-4 transition-transform text-primary",
                                      activeMobileCategory === category.title && "rotate-90"
                                    )} />
                                  </button>
                                  <AnimatePresence>
                                    {activeMobileCategory === category.title && (
                                      <motion.div
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: "auto" }}
                                        exit={{ opacity: 0, height: 0 }}
                                        className="pl-4 pb-2 overflow-hidden"
                                      >
                                        {category.items.map((subItem) => (
                                          <Link
                                            key={subItem.label}
                                            to={subItem.href}
                                            onClick={() => setIsOpen(false)}
                                            className="block px-4 py-2 text-secondary hover:text-primary text-sm"
                                          >
                                            {subItem.label}
                                          </Link>
                                        ))}
                                      </motion.div>
                                    )}
                                  </AnimatePresence>
                                </div>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : item.children ? (
                      <div>
                        <button
                          onClick={() => setActiveDropdown(activeDropdown === item.label ? null : item.label)}
                          className="w-full flex items-center justify-between px-4 py-2.5 text-secondary font-medium"
                        >
                          {item.label}
                          <ChevronDown className={cn(
                            "w-4 h-4 transition-transform",
                            activeDropdown === item.label && "rotate-180"
                          )} />
                        </button>
                        <AnimatePresence>
                          {activeDropdown === item.label && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              className="pl-4 overflow-hidden bg-muted/30"
                            >
                              {item.children.map((child) => (
                                <Link
                                  key={child.label}
                                  to={child.href}
                                  onClick={() => setIsOpen(false)}
                                  className="block px-4 py-2 text-secondary hover:text-primary"
                                >
                                  {child.label}
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <Link
                        to={item.href!}
                        onClick={() => setIsOpen(false)}
                        className="block px-4 py-2.5 text-secondary hover:text-primary font-medium"
                      >
                        {item.label}
                      </Link>
                    )}
                  </div>
                ))}
                <div className="px-4 pt-4 space-y-3">
                  <Button variant="navCta" className="w-full" asChild>
                    <Link to="/contact" onClick={() => setIsOpen(false)}>Talk to a Zoho Expert</Link>
                  </Button>
                  <Button variant="heroPrimary" className="w-full" asChild>
                    <Link to="/contact" onClick={() => setIsOpen(false)}>Book Free Consultation</Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}
