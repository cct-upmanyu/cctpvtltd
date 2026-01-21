import { useState } from "react";
import { motion } from "framer-motion";
import { Layers, ArrowRight, Building2, Zap, RefreshCw } from "lucide-react";
import zohoLogo from "@/assets/zoho-logo-official.svg";

// Official Zoho Suite logos from assets
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
  description: string;
  departments: string[];
  bgColor: string;
  logo: string;
}

const zohoSuites: ZohoSuite[] = [
  {
    id: "crm-plus",
    name: "CRM Plus",
    description: "Unified platform to deliver top-notch customer experience.",
    departments: ["Sales", "Pre-Sales", "Customer Success"],
    bgColor: "bg-blue-50",
    logo: crmPlusLogo
  },
  {
    id: "finance-plus",
    name: "Finance Plus",
    description: "All-in-one suite to manage your operations and finances.",
    departments: ["Accounting", "Billing", "Inventory"],
    bgColor: "bg-teal-50",
    logo: financePlusLogo
  },
  {
    id: "people-plus",
    name: "People Plus",
    description: "Comprehensive HR platform for seamless employee experiences.",
    departments: ["HR", "Recruitment", "Performance"],
    bgColor: "bg-red-50",
    logo: peoplePlusLogo
  },
  {
    id: "workplace",
    name: "Workplace",
    description: "Application suite built to improve team productivity and collaboration.",
    departments: ["Email", "Chat", "Docs", "Collaboration"],
    bgColor: "bg-amber-50",
    logo: workplaceLogo
  },
  {
    id: "marketing-plus",
    name: "Marketing Plus",
    description: "Unified marketing platform for marketing teams.",
    departments: ["Campaigns", "Automation", "Analytics"],
    bgColor: "bg-green-50",
    logo: marketingPlusLogo
  },
  {
    id: "service-plus",
    name: "Service Plus",
    description: "Unified platform for customer service and support teams.",
    departments: ["Support", "Helpdesk", "Field Service"],
    bgColor: "bg-green-50",
    logo: servicePlusLogo
  },
  {
    id: "projects-plus",
    name: "Projects Plus",
    description: "Unified project management platform for intelligent, data-driven work.",
    departments: ["Delivery", "Planning", "Execution"],
    bgColor: "bg-orange-50",
    logo: projectsPlusLogo
  }
];

const departmentData = [
  { 
    name: "Sales & Customer Experience", 
    icon: "📈",
    suites: ["CRM Plus", "Service Plus"],
    apps: ["CRM", "SalesIQ", "Desk", "Bookings"],
    color: "hsl(var(--primary))",
    bgColor: "bg-blue-50"
  },
  { 
    name: "Finance & Operations", 
    icon: "💰",
    suites: ["Finance Plus"],
    apps: ["Books", "Inventory", "Invoice", "Expense"],
    color: "hsl(174, 100%, 29%)",
    bgColor: "bg-teal-50"
  },
  { 
    name: "Human Resources", 
    icon: "👥",
    suites: ["People Plus"],
    apps: ["People", "Recruit", "Workerly"],
    color: "hsl(0, 79%, 55%)",
    bgColor: "bg-red-50"
  },
  { 
    name: "Marketing & Growth", 
    icon: "📣",
    suites: ["Marketing Plus"],
    apps: ["Campaigns", "Social", "PageSense", "Survey"],
    color: "hsl(36, 100%, 50%)",
    bgColor: "bg-amber-50"
  },
  { 
    name: "Collaboration", 
    icon: "🤝",
    suites: ["Workplace"],
    apps: ["Mail", "Cliq", "WorkDrive", "Meeting"],
    color: "hsl(291, 64%, 42%)",
    bgColor: "bg-purple-50"
  },
  { 
    name: "Support & Service", 
    icon: "🎧",
    suites: ["Service Plus"],
    apps: ["Desk", "Assist", "Lens"],
    color: "hsl(122, 39%, 49%)",
    bgColor: "bg-green-50"
  },
  { 
    name: "Project Management", 
    icon: "📋",
    suites: ["Projects Plus"],
    apps: ["Projects", "Sprints", "BugTracker"],
    color: "hsl(16, 25%, 38%)",
    bgColor: "bg-orange-50"
  },
  { 
    name: "Business Intelligence", 
    icon: "📊",
    suites: ["Analytics"],
    apps: ["Analytics", "DataPrep", "Embedded BI"],
    color: "hsl(200, 18%, 46%)",
    bgColor: "bg-slate-50"
  }
];

const viewModes = [
  { id: "suites", label: "By Suite" },
  { id: "departments", label: "By Department" }
];

export function ZohoOneSuitesInfographic() {
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
              <div className="bg-white rounded-2xl px-10 py-8 border border-border shadow-lg flex flex-col items-center gap-4 max-w-md">
                <img src={zohoLogo} alt="Zoho" className="h-14 w-auto" />
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-foreground">Zoho One</h3>
                  <p className="text-muted-foreground mt-1">The Operating System for Your Entire Business</p>
                </div>
              </div>
            </motion.div>

            {/* Suite Cards Grid - Clean Professional Layout */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {zohoSuites.map((suite, index) => (
                <motion.div
                  key={suite.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="group p-6 rounded-xl border border-border bg-white hover:shadow-lg hover:border-primary/30 transition-all duration-300"
                >
                  {/* Suite Logo */}
                  <div className="mb-4">
                    <img 
                      src={suite.logo} 
                      alt={suite.name} 
                      className="h-10 w-auto"
                    />
                  </div>

                  {/* Suite Info */}
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    {suite.description}
                  </p>

                  {/* Department Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {suite.departments.map((dept) => (
                      <span 
                        key={dept}
                        className="text-xs px-2.5 py-1 rounded-full bg-muted text-muted-foreground"
                      >
                        {dept}
                      </span>
                    ))}
                  </div>

                  <a 
                    href="https://www.zoho.com/one/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm font-medium text-primary hover:text-primary/80 transition-colors group/link"
                  >
                    LEARN MORE
                    <ArrowRight className="w-3 h-3 ml-1 group-hover/link:translate-x-0.5 transition-transform" />
                  </a>
                </motion.div>
              ))}
            </div>
          </>
        ) : (
          /* Department View - Grid Layout */
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {departmentData.map((dept, index) => (
              <motion.div
                key={dept.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className={`p-5 rounded-xl border border-border ${dept.bgColor} hover:shadow-lg transition-all duration-300`}
              >
                <div className="text-3xl mb-3">{dept.icon}</div>
                <h4 className="font-bold text-foreground mb-2">{dept.name}</h4>
                <div className="flex flex-wrap gap-1 mb-3">
                  {dept.suites.map((suite) => (
                    <span 
                      key={suite}
                      className="text-xs px-2 py-0.5 rounded-full bg-white border font-medium text-foreground"
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
          className="bg-foreground rounded-2xl p-8 text-center"
        >
          <p className="text-background/90 text-lg font-medium mb-6">
            "Zoho builds the platform. <span className="text-primary font-bold">ClubCode Technology</span> architects the system."
          </p>
          <div className="flex flex-wrap justify-center gap-8">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                <Building2 className="w-5 h-5 text-primary" />
              </div>
              <span className="text-background/80 text-sm">Architecture-first implementation</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                <Zap className="w-5 h-5 text-primary" />
              </div>
              <span className="text-background/80 text-sm">Cross-suite automation</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                <RefreshCw className="w-5 h-5 text-primary" />
              </div>
              <span className="text-background/80 text-sm">Long-term optimization</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
