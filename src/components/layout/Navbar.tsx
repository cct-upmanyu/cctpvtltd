import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import cctLogo from "@/assets/cct-logo.png";

const navItems = [
  { label: "Home", href: "/" },
  {
    label: "Solutions",
    children: [
      { label: "Zoho Solutions", href: "/zoho-solutions" },
      { label: "Zoho One (Premium Partner)", href: "/zoho-one-premium-partner" },
      { label: "AI Solutions", href: "/ai-solutions" },
      { label: "CRM Solutions", href: "/crm-solutions" },
      { label: "Data Migration", href: "/data-migration" },
      { label: "Website Development", href: "/website-development" },
      { label: "Custom ERP", href: "/custom-erp" },
      { label: "Third-Party Integrations", href: "/third-party-integrations" },
      { label: "Zoho Extension Development", href: "/zoho-extension-development" },
    ],
  },
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
  { label: "Company", href: "/company" },
  { label: "Contact", href: "/contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-xl border-b border-border shadow-sm"
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo - White background uses navy/teal logo */}
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
                onMouseEnter={() => item.children && setActiveDropdown(item.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                {item.children ? (
                  <button className="flex items-center gap-1 px-4 py-2 text-secondary hover:text-primary transition-colors font-medium">
                    {item.label}
                    <ChevronDown className={cn(
                      "w-4 h-4 transition-transform",
                      activeDropdown === item.label && "rotate-180"
                    )} />
                  </button>
                ) : (
                  <Link
                    to={item.href}
                    className={cn(
                      "px-4 py-2 text-secondary hover:text-primary transition-colors font-medium",
                      location.pathname === item.href && "text-primary"
                    )}
                  >
                    {item.label}
                  </Link>
                )}

                {/* Dropdown Menu */}
                <AnimatePresence>
                  {item.children && activeDropdown === item.label && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute top-full left-0 mt-2 w-56 py-2 bg-white border border-border rounded-lg shadow-xl"
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
            <Button variant="navCta" size="sm">
              Talk to a Zoho Expert
            </Button>
            <Button variant="heroPrimary" size="sm">
              Book Free Consultation
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
              <div className="py-4 space-y-2 bg-white">
                {navItems.map((item) => (
                  <div key={item.label}>
                    {item.children ? (
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
                              className="pl-4 overflow-hidden"
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
                        to={item.href}
                        onClick={() => setIsOpen(false)}
                        className="block px-4 py-2.5 text-secondary hover:text-primary font-medium"
                      >
                        {item.label}
                      </Link>
                    )}
                  </div>
                ))}
                <div className="px-4 pt-4 space-y-3">
                  <Button variant="navCta" className="w-full">
                    Talk to a Zoho Expert
                  </Button>
                  <Button variant="heroPrimary" className="w-full">
                    Book Free Consultation
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