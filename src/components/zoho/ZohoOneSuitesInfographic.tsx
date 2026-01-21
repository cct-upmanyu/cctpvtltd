import { useState } from "react";
import { motion } from "framer-motion";
import { Layers, ArrowRight, Building2, Zap, RefreshCw } from "lucide-react";
import zohoOneLogo from "@/assets/zoho-one-logo.png";

interface ZohoSuite {
  id: string;
  name: string;
  description: string;
  departments: string[];
  bgColor: string;
  iconColor: string;
  icon: React.ReactNode;
}

// SVG Icons matching Zoho's official style
const CRMPlusIcon = () => (
  <svg viewBox="0 0 48 48" className="w-10 h-10">
    <path d="M24 4L8 14v20l16 10 16-10V14L24 4z" fill="none" stroke="#2196F3" strokeWidth="2"/>
    <path d="M24 4v30M8 14l16 10 16-10" fill="none" stroke="#2196F3" strokeWidth="2"/>
  </svg>
);

const ServicePlusIcon = () => (
  <svg viewBox="0 0 48 48" className="w-10 h-10">
    <rect x="8" y="12" width="32" height="24" rx="2" fill="none" stroke="#4CAF50" strokeWidth="2"/>
    <path d="M8 20h32M16 28h8" fill="none" stroke="#4CAF50" strokeWidth="2"/>
  </svg>
);

const FinancePlusIcon = () => (
  <svg viewBox="0 0 48 48" className="w-10 h-10">
    <path d="M12 8h24l4 8v24H8V16l4-8z" fill="none" stroke="#00897B" strokeWidth="2"/>
    <path d="M8 16h32M20 24h8M20 32h12" fill="none" stroke="#00897B" strokeWidth="2"/>
  </svg>
);

const PeoplePlusIcon = () => (
  <svg viewBox="0 0 48 48" className="w-10 h-10">
    <path d="M24 8L8 20v16l16 8 16-8V20L24 8z" fill="none" stroke="#E53935" strokeWidth="2"/>
    <circle cx="24" cy="24" r="6" fill="none" stroke="#E53935" strokeWidth="2"/>
  </svg>
);

const WorkplaceIcon = () => (
  <svg viewBox="0 0 48 48" className="w-10 h-10">
    <rect x="8" y="8" width="32" height="32" rx="4" fill="none" stroke="#FF9800" strokeWidth="2"/>
    <rect x="14" y="14" width="8" height="8" fill="none" stroke="#FF9800" strokeWidth="2"/>
    <rect x="26" y="14" width="8" height="8" fill="none" stroke="#FF9800" strokeWidth="2"/>
    <rect x="14" y="26" width="8" height="8" fill="none" stroke="#FF9800" strokeWidth="2"/>
    <rect x="26" y="26" width="8" height="8" fill="none" stroke="#FF9800" strokeWidth="2"/>
  </svg>
);

const MarketingPlusIcon = () => (
  <svg viewBox="0 0 48 48" className="w-10 h-10">
    <path d="M8 24h8l6-12 8 24 6-12h4" fill="none" stroke="#E53935" strokeWidth="2"/>
    <circle cx="40" cy="24" r="4" fill="none" stroke="#E53935" strokeWidth="2"/>
  </svg>
);

const ProjectsPlusIcon = () => (
  <svg viewBox="0 0 48 48" className="w-10 h-10">
    <path d="M12 8h24l4 8v24H8V16l4-8z" fill="none" stroke="#E53935" strokeWidth="2"/>
    <path d="M16 20h16M16 28h12M16 36h8" fill="none" stroke="#E53935" strokeWidth="2"/>
  </svg>
);

const zohoSuites: ZohoSuite[] = [
  {
    id: "crm-plus",
    name: "CRM Plus",
    description: "Unified platform to deliver top-notch customer experience.",
    departments: ["Sales", "Pre-Sales", "Customer Success"],
    bgColor: "bg-blue-50",
    iconColor: "#2196F3",
    icon: <CRMPlusIcon />
  },
  {
    id: "service-plus",
    name: "Service Plus",
    description: "Unified platform for customer service and support teams.",
    departments: ["Support", "Helpdesk", "Field Service"],
    bgColor: "bg-green-50",
    iconColor: "#4CAF50",
    icon: <ServicePlusIcon />
  },
  {
    id: "finance-plus",
    name: "Finance Plus",
    description: "All-in-one suite to manage your operations and finances.",
    departments: ["Accounting", "Billing", "Inventory"],
    bgColor: "bg-teal-50",
    iconColor: "#00897B",
    icon: <FinancePlusIcon />
  },
  {
    id: "people-plus",
    name: "People Plus",
    description: "Comprehensive HR platform for seamless employee experiences.",
    departments: ["HR", "Recruitment", "Performance"],
    bgColor: "bg-red-50",
    iconColor: "#E53935",
    icon: <PeoplePlusIcon />
  },
  {
    id: "workplace",
    name: "Workplace",
    description: "Application suite built to improve team productivity and collaboration.",
    departments: ["Email", "Chat", "Docs", "Collaboration"],
    bgColor: "bg-amber-50",
    iconColor: "#FF9800",
    icon: <WorkplaceIcon />
  },
  {
    id: "marketing-plus",
    name: "Marketing Plus",
    description: "Unified marketing platform for marketing teams.",
    departments: ["Campaigns", "Automation", "Analytics"],
    bgColor: "bg-green-50",
    iconColor: "#4CAF50",
    icon: <MarketingPlusIcon />
  },
  {
    id: "projects-plus",
    name: "Projects Plus",
    description: "Unified project management platform for intelligent, data-driven work.",
    departments: ["Delivery", "Planning", "Execution"],
    bgColor: "bg-orange-50",
    iconColor: "#E53935",
    icon: <ProjectsPlusIcon />
  }
];

const viewModes = [
  { id: "suites", label: "By Suite" },
  { id: "departments", label: "By Department" }
];

export function ZohoOneSuitesInfographic() {
  const [hoveredSuite, setHoveredSuite] = useState<string | null>(null);
  const [viewMode, setViewMode] = useState<"suites" | "departments">("suites");

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-medium mb-4">
            <Layers className="w-4 h-4 inline mr-2" />
            The Zoho One Ecosystem
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            One Platform. Seven Business Suites. Infinite Possibilities.
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
            Zoho One brings together 50+ integrated applications organized into specialized suites—each designed to transform a core business function.
          </p>
        </motion.div>

        {/* View Mode Toggle */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center mb-12"
        >
          <div className="inline-flex bg-muted rounded-full p-1">
            {viewModes.map((mode) => (
              <button
                key={mode.id}
                onClick={() => setViewMode(mode.id as "suites" | "departments")}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  viewMode === mode.id
                    ? "bg-white text-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {mode.label}
              </button>
            ))}
          </div>
        </motion.div>

        {viewMode === "suites" ? (
          <>
            {/* Central Zoho One Hub */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="flex justify-center mb-12"
            >
              <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl px-8 py-6 border border-primary/20 shadow-sm flex items-center gap-4">
                <img src={zohoOneLogo} alt="Zoho One" className="h-12 w-auto" />
                <div className="text-left">
                  <h3 className="text-xl font-bold text-foreground">Zoho One</h3>
                  <p className="text-sm text-muted-foreground">The Operating System for Your Entire Business</p>
                </div>
              </div>
            </motion.div>

            {/* Suite Cards Grid - Zoho Official Style */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {zohoSuites.map((suite, index) => (
                <motion.div
                  key={suite.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className={`group p-6 rounded-xl border border-border/60 bg-white hover:shadow-lg hover:border-primary/30 transition-all duration-300 cursor-pointer ${suite.bgColor}`}
                  onMouseEnter={() => setHoveredSuite(suite.id)}
                  onMouseLeave={() => setHoveredSuite(null)}
                >
                  <div className="flex items-start gap-4">
                    {/* Suite Icon */}
                    <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-white border border-border/40 shadow-sm flex items-center justify-center">
                      {suite.icon}
                    </div>

                    {/* Suite Info */}
                    <div className="flex-1 min-w-0">
                      <h4 className="font-bold text-foreground text-lg mb-1">{suite.name}</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                        {suite.description}
                      </p>
                      <a 
                        href="https://www.zoho.com/one/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-sm font-medium text-primary hover:text-primary/80 transition-colors group/link"
                      >
                        LEARN MORE
                        <ArrowRight className="w-3 h-3 ml-1 group-hover/link:translate-x-0.5 transition-transform" />
                      </a>
                    </div>
                  </div>

                  {/* Department Tags on Hover */}
                  {hoveredSuite === suite.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      className="mt-4 pt-4 border-t border-border/50"
                    >
                      <div className="flex flex-wrap gap-2">
                        {suite.departments.map((dept) => (
                          <span 
                            key={dept}
                            className="text-xs px-2.5 py-1 rounded-full bg-white border border-border/60 text-muted-foreground"
                          >
                            {dept}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>
          </>
        ) : (
          /* Department View - Grid Layout */
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {[
              { 
                name: "Sales & Customer Experience", 
                icon: "📈",
                suites: ["CRM Plus", "Service Plus"],
                apps: ["CRM", "SalesIQ", "Desk", "Bookings"],
                color: "#2196F3",
                bgColor: "bg-blue-50"
              },
              { 
                name: "Finance & Operations", 
                icon: "💰",
                suites: ["Finance Plus"],
                apps: ["Books", "Inventory", "Invoice", "Expense"],
                color: "#00897B",
                bgColor: "bg-teal-50"
              },
              { 
                name: "Human Resources", 
                icon: "👥",
                suites: ["People Plus"],
                apps: ["People", "Recruit", "Workerly"],
                color: "#E53935",
                bgColor: "bg-red-50"
              },
              { 
                name: "Marketing & Growth", 
                icon: "📣",
                suites: ["Marketing Plus"],
                apps: ["Campaigns", "Social", "PageSense", "Survey"],
                color: "#FF9800",
                bgColor: "bg-amber-50"
              },
              { 
                name: "Collaboration", 
                icon: "🤝",
                suites: ["Workplace"],
                apps: ["Mail", "Cliq", "WorkDrive", "Meeting"],
                color: "#9C27B0",
                bgColor: "bg-purple-50"
              },
              { 
                name: "Support & Service", 
                icon: "🎧",
                suites: ["Service Plus"],
                apps: ["Desk", "Assist", "Lens"],
                color: "#4CAF50",
                bgColor: "bg-green-50"
              },
              { 
                name: "Project Management", 
                icon: "📋",
                suites: ["Projects Plus"],
                apps: ["Projects", "Sprints", "BugTracker"],
                color: "#795548",
                bgColor: "bg-orange-50"
              },
              { 
                name: "Business Intelligence", 
                icon: "📊",
                suites: ["Analytics"],
                apps: ["Analytics", "DataPrep", "Embedded BI"],
                color: "#607D8B",
                bgColor: "bg-slate-50"
              }
            ].map((dept, index) => (
              <motion.div
                key={dept.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className={`p-5 rounded-xl border border-border/60 ${dept.bgColor} hover:shadow-lg transition-all duration-300`}
              >
                <div className="text-3xl mb-3">{dept.icon}</div>
                <h4 className="font-bold text-foreground mb-2">{dept.name}</h4>
                <div className="flex flex-wrap gap-1 mb-3">
                  {dept.suites.map((suite) => (
                    <span 
                      key={suite}
                      className="text-xs px-2 py-0.5 rounded-full bg-white border font-medium"
                      style={{ color: dept.color, borderColor: dept.color }}
                    >
                      {suite}
                    </span>
                  ))}
                </div>
                <div className="flex flex-wrap gap-1">
                  {dept.apps.map((app) => (
                    <span 
                      key={app}
                      className="text-xs px-2 py-0.5 rounded-full bg-white/80 text-muted-foreground"
                    >
                      {app}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* ClubCode Differentiator Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-2xl p-8 text-center"
        >
          <p className="text-white/90 text-lg font-medium mb-6">
            "Zoho builds the platform. <span className="text-primary font-bold">ClubCode Technology</span> architects the system."
          </p>
          <div className="flex flex-wrap justify-center gap-8">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                <Building2 className="w-5 h-5 text-primary" />
              </div>
              <span className="text-white/80 text-sm">Architecture-first implementation</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                <Zap className="w-5 h-5 text-primary" />
              </div>
              <span className="text-white/80 text-sm">Cross-suite automation</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                <RefreshCw className="w-5 h-5 text-primary" />
              </div>
              <span className="text-white/80 text-sm">Long-term optimization</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
