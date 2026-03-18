import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Layers, ArrowRight, Building2, Zap, RefreshCw, Target, TrendingUp, HeadphonesIcon, DollarSign, Briefcase, Settings, Mail } from "lucide-react";
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

const departmentImplementations = [
  {
    title: "Sales & CRM Automation",
    tagline: "Close faster with structured pipelines",
    description: "We implement Zoho CRM, Bigin, and Bookings to create structured pipelines, lead scoring, and automated follow-ups—aligned with real sales behavior.",
    apps: ["CRM", "Bigin", "Bookings", "SalesIQ"],
    icon: Target,
    route: "/zoho-crm"
  },
  {
    title: "Marketing & Lead Nurturing",
    tagline: "Turn campaigns into measurable revenue",
    description: "Zoho Campaigns, Marketing Automation, Forms, and PageSense are connected directly to CRM for measurable ROI.",
    apps: ["Campaigns", "Marketing Automation", "Forms", "PageSense"],
    icon: TrendingUp,
    route: null
  },
  {
    title: "Customer Support & Experience",
    tagline: "Unified support across every channel",
    description: "Zoho Desk, SalesIQ, Assist, and Lens create a unified support experience across chat, email, phone, and remote assistance.",
    apps: ["Desk", "SalesIQ", "Assist", "Lens"],
    icon: HeadphonesIcon,
    route: null
  },
  {
    title: "Finance & Accounting",
    tagline: "Compliance-ready financial operations",
    description: "Zoho Books, Inventory, Invoice, Expense, and Payroll are implemented with compliance, reporting, and audit readiness in mind.",
    apps: ["Books", "Inventory", "Invoice", "Expense", "Payroll"],
    icon: DollarSign,
    route: "/zoho-books"
  },
  {
    title: "HR & Recruitment",
    tagline: "Seamless people management end-to-end",
    description: "Zoho People and Recruit manage onboarding, attendance, performance, and hiring workflows seamlessly.",
    apps: ["People", "Recruit", "Workerly"],
    icon: Briefcase,
    route: "/zoho-people"
  },
  {
    title: "Operations, ERP & Custom Apps",
    tagline: "Custom ERP where off-the-shelf fails",
    description: "Zoho Creator, Projects, Sprints, and Inventory allow us to build custom ERP workflows where off-the-shelf systems fail.",
    apps: ["Creator", "Projects", "Sprints", "Inventory"],
    icon: Settings,
    route: "/custom-erp"
  },
  {
    title: "Workplace & Collaboration",
    tagline: "Secure enterprise collaboration tools",
    description: "Zoho Mail, Cliq, WorkDrive, Writer, Sheet, and Show enable secure internal collaboration with enterprise control.",
    apps: ["Mail", "Cliq", "WorkDrive", "Writer", "Sheet", "Show"],
    icon: Mail,
    route: null
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
          /* Department View - Dark Glassmorphism Cards */
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {departmentImplementations.map((dept, index) => {
              const CardContent = (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  className="bg-[#0B1C3D] border border-white/10 rounded-xl p-6 hover:bg-[#0F2A5F] hover:border-[#3FE0F0]/30 transition-all duration-300 group h-full"
                >
                  <div className="w-12 h-12 bg-[#3FE0F0]/15 rounded-lg flex items-center justify-center mb-4">
                    <dept.icon className="w-6 h-6 text-[#3FE0F0]" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-1">{dept.title}</h3>
                  <p className="text-[#3FE0F0] text-xs font-medium mb-3 tracking-wide uppercase">{dept.tagline}</p>
                  <p className="text-[#94A3B8] text-sm mb-4 leading-relaxed">{dept.description}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {dept.apps.map((app) => (
                      <span key={app} className="text-[11px] px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-[#CBD5E1]">
                        {app}
                      </span>
                    ))}
                  </div>
                </motion.div>
              );

              return dept.route ? (
                <Link key={index} to={dept.route} className="block">
                  {CardContent}
                </Link>
              ) : (
                <div key={index}>{CardContent}</div>
              );
            })}
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
