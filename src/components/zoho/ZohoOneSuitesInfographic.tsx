import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Layers, 
  TrendingUp, 
  Users, 
  DollarSign, 
  Briefcase, 
  MessageCircle, 
  FolderKanban,
  Building2,
  Zap,
  RefreshCw
} from "lucide-react";
import zohoOneLogo from "@/assets/zoho-one-logo.png";
import crmPlusLogo from "@/assets/zoho-suite-logos/crm-plus.svg";
import financePlusLogo from "@/assets/zoho-suite-logos/finance-plus.svg";
import peoplePlusLogo from "@/assets/zoho-suite-logos/people-plus.svg";
import workplaceLogo from "@/assets/zoho-suite-logos/workplace.svg";
import marketingPlusLogo from "@/assets/zoho-suite-logos/marketing-plus.svg";
import servicePlusLogo from "@/assets/zoho-suite-logos/service-plus.svg";
import projectsPlusLogo from "@/assets/zoho-suite-logos/projects-plus.svg";

interface ZohoSuite {
  id: string;
  name: string;
  logo: string;
  description: string;
  departments: string[];
  color: string;
  angle: number;
}

const zohoSuites: ZohoSuite[] = [
  {
    id: "crm-plus",
    name: "CRM Plus",
    logo: crmPlusLogo,
    description: "Unified customer experience across sales, support & engagement",
    departments: ["Sales", "Pre-Sales", "Customer Success"],
    color: "#E42527",
    angle: 0
  },
  {
    id: "finance-plus",
    name: "Finance Plus",
    logo: financePlusLogo,
    description: "End-to-end finance operations with accounting, billing & inventory",
    departments: ["Accounting", "Billing", "Inventory", "Payroll"],
    color: "#4CAF50",
    angle: 51.4
  },
  {
    id: "people-plus",
    name: "People Plus",
    logo: peoplePlusLogo,
    description: "Complete HR management from recruitment to retirement",
    departments: ["HR", "Recruitment", "Performance"],
    color: "#2196F3",
    angle: 102.8
  },
  {
    id: "workplace",
    name: "Workplace",
    logo: workplaceLogo,
    description: "Secure collaboration with email, chat, docs & cloud storage",
    departments: ["Email", "Chat", "Docs", "Collaboration"],
    color: "#9C27B0",
    angle: 154.2
  },
  {
    id: "marketing-plus",
    name: "Marketing Plus",
    logo: marketingPlusLogo,
    description: "Unified marketing platform for campaigns, automation & analytics",
    departments: ["Campaigns", "Automation", "Analytics"],
    color: "#FF9800",
    angle: 205.6
  },
  {
    id: "service-plus",
    name: "Service Plus",
    logo: servicePlusLogo,
    description: "Omnichannel customer support across chat, email & phone",
    departments: ["Support", "Chat", "Field Service"],
    color: "#00BCD4",
    angle: 257
  },
  {
    id: "projects-plus",
    name: "Projects Plus",
    logo: projectsPlusLogo,
    description: "Project delivery with planning, execution & team collaboration",
    departments: ["Delivery", "Planning", "Execution"],
    color: "#795548",
    angle: 308.4
  }
];

const viewModes = [
  { id: "suites", label: "By Suite" },
  { id: "departments", label: "By Department" }
];

export function ZohoOneSuitesInfographic() {
  const [hoveredSuite, setHoveredSuite] = useState<string | null>(null);
  const [viewMode, setViewMode] = useState<"suites" | "departments">("suites");
  const [rotation, setRotation] = useState(0);

  const orbitRadius = 200;
  const centerX = 250;
  const centerY = 250;

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
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

        <AnimatePresence mode="wait">
          {viewMode === "suites" ? (
            <motion.div
              key="suites-view"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="grid lg:grid-cols-2 gap-12 items-center"
            >
              {/* Left: Orbiting Visualization */}
              <div className="relative flex justify-center order-2 lg:order-1">
                <div className="relative w-[500px] h-[500px]">
                  {/* Orbit Rings */}
                  <svg className="absolute inset-0 w-full h-full" viewBox="0 0 500 500">
                    <motion.circle
                      cx="250"
                      cy="250"
                      r="200"
                      fill="none"
                      stroke="hsl(var(--border))"
                      strokeWidth="1"
                      strokeDasharray="8 4"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.3 }}
                    />
                    <motion.circle
                      cx="250"
                      cy="250"
                      r="140"
                      fill="none"
                      stroke="hsl(var(--border))"
                      strokeWidth="1"
                      strokeDasharray="4 4"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 0.5 }}
                      transition={{ delay: 0.4 }}
                    />
                  </svg>

                  {/* Center Hub - Zoho One */}
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200, damping: 20 }}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20"
                  >
                    <div className="w-32 h-32 bg-white rounded-full shadow-xl border-2 border-primary/20 flex flex-col items-center justify-center">
                      <img src={zohoOneLogo} alt="Zoho One" className="w-16 h-auto mb-1" />
                      <span className="text-xs text-muted-foreground font-medium">Operating System</span>
                    </div>
                  </motion.div>

                  {/* Orbiting Suites */}
                  <motion.div
                    animate={{ rotate: rotation }}
                    transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0"
                    onHoverStart={() => setRotation(rotation)}
                    onHoverEnd={() => setRotation(rotation)}
                  >
                    {zohoSuites.map((suite, index) => {
                      const angleRad = (suite.angle * Math.PI) / 180;
                      const x = centerX + orbitRadius * Math.cos(angleRad) - 36;
                      const y = centerY + orbitRadius * Math.sin(angleRad) - 36;
                      
                      return (
                        <motion.div
                          key={suite.id}
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ 
                            opacity: 1, 
                            scale: hoveredSuite === suite.id ? 1.15 : 1,
                            rotate: -rotation
                          }}
                          transition={{ 
                            delay: 0.5 + index * 0.1,
                            scale: { duration: 0.2 }
                          }}
                          style={{ 
                            position: "absolute",
                            left: x,
                            top: y,
                          }}
                          className="cursor-pointer"
                          onMouseEnter={() => setHoveredSuite(suite.id)}
                          onMouseLeave={() => setHoveredSuite(null)}
                        >
                          <div 
                            className={`w-[72px] h-[72px] bg-white rounded-2xl shadow-lg border-2 flex items-center justify-center transition-all duration-300 ${
                              hoveredSuite === suite.id ? "shadow-xl" : ""
                            }`}
                            style={{ 
                              borderColor: hoveredSuite === suite.id ? suite.color : "hsl(var(--border))"
                            }}
                          >
                            <img 
                              src={suite.logo} 
                              alt={suite.name} 
                              className="w-12 h-12 object-contain"
                            />
                          </div>

                          {/* Tooltip */}
                          <AnimatePresence>
                            {hoveredSuite === suite.id && (
                              <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 10 }}
                                className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-64 z-30"
                              >
                                <div 
                                  className="bg-white rounded-xl shadow-xl border p-4"
                                  style={{ borderTopColor: suite.color, borderTopWidth: "3px" }}
                                >
                                  <h4 className="font-bold text-foreground mb-1">{suite.name}</h4>
                                  <p className="text-sm text-muted-foreground mb-3">{suite.description}</p>
                                  <div className="flex flex-wrap gap-1">
                                    {suite.departments.map((dept) => (
                                      <span 
                                        key={dept}
                                        className="text-xs px-2 py-0.5 bg-muted rounded-full text-muted-foreground"
                                      >
                                        {dept}
                                      </span>
                                    ))}
                                  </div>
                                  <div className="mt-3 pt-3 border-t border-border">
                                    <p className="text-xs text-primary font-medium flex items-center gap-1">
                                      <Zap className="w-3 h-3" />
                                      ClubCode connects this to your business
                                    </p>
                                  </div>
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </motion.div>
                      );
                    })}
                  </motion.div>

                  {/* Connection Lines */}
                  <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 500 500">
                    {zohoSuites.map((suite) => {
                      const angleRad = (suite.angle * Math.PI) / 180;
                      const x = centerX + orbitRadius * Math.cos(angleRad);
                      const y = centerY + orbitRadius * Math.sin(angleRad);
                      
                      return (
                        <motion.line
                          key={`line-${suite.id}`}
                          x1={centerX}
                          y1={centerY}
                          x2={x}
                          y2={y}
                          stroke={hoveredSuite === suite.id ? suite.color : "hsl(var(--border))"}
                          strokeWidth={hoveredSuite === suite.id ? 2 : 1}
                          strokeDasharray="4 4"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: hoveredSuite === suite.id ? 0.8 : 0.3 }}
                          transition={{ duration: 0.3 }}
                        />
                      );
                    })}
                  </svg>
                </div>
              </div>

              {/* Right: Suite Cards */}
              <div className="space-y-4 order-1 lg:order-2">
                {zohoSuites.map((suite, index) => (
                  <motion.div
                    key={suite.id}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className={`p-4 rounded-xl border transition-all duration-300 cursor-pointer ${
                      hoveredSuite === suite.id 
                        ? "bg-white shadow-lg border-primary/30" 
                        : "bg-muted/30 border-transparent hover:bg-white hover:shadow-md"
                    }`}
                    onMouseEnter={() => setHoveredSuite(suite.id)}
                    onMouseLeave={() => setHoveredSuite(null)}
                  >
                    <div className="flex items-center gap-4">
                      <div 
                        className="w-12 h-12 rounded-xl flex items-center justify-center bg-white shadow-sm border"
                        style={{ borderColor: hoveredSuite === suite.id ? suite.color : "hsl(var(--border))" }}
                      >
                        <img src={suite.logo} alt={suite.name} className="w-8 h-8 object-contain" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-foreground">{suite.name}</h4>
                        <p className="text-sm text-muted-foreground">{suite.description}</p>
                      </div>
                    </div>
                    
                    {hoveredSuite === suite.id && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="mt-3 pt-3 border-t border-border"
                      >
                        <div className="flex flex-wrap gap-2">
                          {suite.departments.map((dept) => (
                            <span 
                              key={dept}
                              className="text-xs px-2 py-1 rounded-full"
                              style={{ 
                                backgroundColor: `${suite.color}15`,
                                color: suite.color
                              }}
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
            </motion.div>
          ) : (
            <motion.div
              key="departments-view"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {/* Department View - Grid Layout */}
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { 
                    name: "Sales & Customer Experience", 
                    icon: TrendingUp,
                    suites: ["CRM Plus", "Service Plus"],
                    apps: ["CRM", "SalesIQ", "Desk", "Bookings"],
                    color: "#E42527"
                  },
                  { 
                    name: "Finance & Operations", 
                    icon: DollarSign,
                    suites: ["Finance Plus"],
                    apps: ["Books", "Inventory", "Invoice", "Expense"],
                    color: "#4CAF50"
                  },
                  { 
                    name: "Human Resources", 
                    icon: Users,
                    suites: ["People Plus"],
                    apps: ["People", "Recruit", "Workerly"],
                    color: "#2196F3"
                  },
                  { 
                    name: "Marketing & Growth", 
                    icon: Briefcase,
                    suites: ["Marketing Plus"],
                    apps: ["Campaigns", "Social", "PageSense", "Survey"],
                    color: "#FF9800"
                  },
                  { 
                    name: "Collaboration", 
                    icon: MessageCircle,
                    suites: ["Workplace"],
                    apps: ["Mail", "Cliq", "WorkDrive", "Meeting"],
                    color: "#9C27B0"
                  },
                  { 
                    name: "Project Delivery", 
                    icon: FolderKanban,
                    suites: ["Projects Plus"],
                    apps: ["Projects", "Sprints", "BugTracker"],
                    color: "#795548"
                  },
                  { 
                    name: "IT & Operations", 
                    icon: Building2,
                    suites: ["Workplace", "Creator"],
                    apps: ["Creator", "Flow", "Analytics", "Directory"],
                    color: "#00BCD4"
                  },
                  { 
                    name: "Custom Applications", 
                    icon: RefreshCw,
                    suites: ["Creator", "Flow"],
                    apps: ["Low-code apps", "Automation", "Integrations"],
                    color: "#607D8B"
                  }
                ].map((dept, index) => (
                  <motion.div
                    key={dept.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white rounded-2xl border border-border p-6 hover:shadow-lg transition-shadow duration-300"
                    style={{ borderTopColor: dept.color, borderTopWidth: "3px" }}
                  >
                    <div 
                      className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                      style={{ backgroundColor: `${dept.color}15` }}
                    >
                      <dept.icon className="w-6 h-6" style={{ color: dept.color }} />
                    </div>
                    <h4 className="font-bold text-foreground mb-2">{dept.name}</h4>
                    <div className="flex flex-wrap gap-1 mb-3">
                      {dept.suites.map((suite) => (
                        <span 
                          key={suite}
                          className="text-xs px-2 py-0.5 rounded-full bg-muted text-muted-foreground"
                        >
                          {suite}
                        </span>
                      ))}
                    </div>
                    <div className="space-y-1">
                      {dept.apps.map((app) => (
                        <div key={app} className="text-sm text-muted-foreground flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: dept.color }} />
                          {app}
                        </div>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Bottom Banner - ClubCode Differentiator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="bg-gradient-to-r from-[#0B1C3D] to-[#1a3a6e] rounded-2xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                  Zoho builds the platform.
                </h3>
                <p className="text-xl text-primary font-medium mb-4">
                  ClubCode Technology architects the system.
                </p>
                <p className="text-dark-text-secondary">
                  We don't just enable apps—we connect them into a unified operating system that matches how your business actually works.
                </p>
              </div>
              
              <div className="grid grid-cols-3 gap-4">
                {[
                  { icon: Layers, label: "Architecture-first implementation" },
                  { icon: RefreshCw, label: "Cross-suite automation" },
                  { icon: TrendingUp, label: "Long-term optimization" }
                ].map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + index * 0.1 }}
                    className="text-center"
                  >
                    <div className="w-14 h-14 bg-primary/20 rounded-xl flex items-center justify-center mx-auto mb-3">
                      <item.icon className="w-7 h-7 text-primary" />
                    </div>
                    <p className="text-sm text-white font-medium">{item.label}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
