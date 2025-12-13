import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Home", href: "/" },
  {
    label: "Solutions",
    children: [
      { label: "Zoho Solutions", href: "/zoho-solutions" },
      { label: "AI Solutions", href: "/ai-solutions" },
      { label: "CRM Solutions", href: "/crm-solutions" },
      { label: "Data Migration", href: "/data-migration" },
      { label: "Website Development", href: "/website-development" },
      { label: "Custom ERP", href: "/custom-erp" },
    ],
  },
  { label: "Industries", href: "/industries" },
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
      className="fixed top-0 left-0 right-0 z-50 bg-dark-bg/90 backdrop-blur-xl border-b border-border-dark"
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-xl">C</span>
            </div>
            <div className="hidden sm:block">
              <span className="text-white font-bold text-lg">ClubCode</span>
              <span className="text-primary font-medium text-lg ml-1">Technology</span>
            </div>
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
                  <button className="flex items-center gap-1 px-4 py-2 text-muted-dark-foreground hover:text-white transition-colors">
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
                      "px-4 py-2 text-muted-dark-foreground hover:text-white transition-colors",
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
                      className="absolute top-full left-0 mt-2 w-56 py-2 bg-card-dark border border-border-dark rounded-lg shadow-xl"
                    >
                      {item.children.map((child) => (
                        <Link
                          key={child.label}
                          to={child.href}
                          className={cn(
                            "block px-4 py-2.5 text-muted-dark-foreground hover:text-white hover:bg-muted-dark transition-colors",
                            location.pathname === child.href && "text-primary bg-muted-dark"
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
            className="lg:hidden p-2 text-white"
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
              <div className="py-4 space-y-2">
                {navItems.map((item) => (
                  <div key={item.label}>
                    {item.children ? (
                      <div>
                        <button
                          onClick={() => setActiveDropdown(activeDropdown === item.label ? null : item.label)}
                          className="w-full flex items-center justify-between px-4 py-2.5 text-muted-dark-foreground"
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
                                  className="block px-4 py-2 text-muted-dark-foreground hover:text-white"
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
                        className="block px-4 py-2.5 text-muted-dark-foreground hover:text-white"
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