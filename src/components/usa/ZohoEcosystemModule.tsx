import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, Blocks, Code, Database, Workflow, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

import crmPlusLogo from "@/assets/zoho-suite-logos/crm-plus.svg";
import financePlusLogo from "@/assets/zoho-suite-logos/finance-plus.svg";
import peoplePlusLogo from "@/assets/zoho-suite-logos/people-plus.svg";
import marketingPlusLogo from "@/assets/zoho-suite-logos/marketing-plus.svg";
import servicePlusLogo from "@/assets/zoho-suite-logos/service-plus.svg";
import projectsPlusLogo from "@/assets/zoho-suite-logos/projects-plus.svg";
import workplaceLogo from "@/assets/zoho-suite-logos/workplace.svg";

const suites = [
  { name: "CRM Plus", logo: crmPlusLogo, description: "Unified customer experience platform for sales, marketing, and support.", href: "/zoho-crm" },
  { name: "Finance Plus", logo: financePlusLogo, description: "End-to-end financial management—invoicing, expenses, inventory, and subscriptions.", href: "/zoho-books" },
  { name: "People Plus", logo: peoplePlusLogo, description: "Complete HR ecosystem for recruiting, onboarding, payroll, and performance.", href: "/zoho-people" },
  { name: "Marketing Plus", logo: marketingPlusLogo, description: "Omnichannel marketing automation with email, social, events, and analytics.", href: "/crm-solutions" },
  { name: "Service Plus", logo: servicePlusLogo, description: "Customer service excellence with help desk, live chat, and field service tools.", href: "/crm-solutions" },
  { name: "Projects Plus", logo: projectsPlusLogo, description: "Project planning, task management, and collaboration for agile teams.", href: "/zoho-solutions" },
  { name: "Workplace", logo: workplaceLogo, description: "Business communication and collaboration suite replacing fragmented tools.", href: "/zoho-solutions" },
];

const migrationRoutes = [
  { label: "Salesforce → Zoho", href: "/data-migration" },
  { label: "HubSpot → Zoho", href: "/data-migration" },
  { label: "SAP/Oracle → Zoho Creator", href: "/data-migration" },
  { label: "HIPAA Compliant", href: "/industries/healthcare" },
  { label: "SOX Ready", href: "/industries/financial-services" },
  { label: "CCPA Safe", href: "/contact" },
];

const migrationCapabilities = [
  { icon: <Code className="w-5 h-5" />, title: "Deluge Scripting Expertise", description: "Custom business logic, workflow automation, and API integrations using Zoho's proprietary scripting language." },
  { icon: <Database className="w-5 h-5" />, title: "API Orchestration", description: "Multi-system data synchronization across REST/SOAP APIs with real-time webhooks and error handling." },
  { icon: <Workflow className="w-5 h-5" />, title: "Process Re-Engineering", description: "Map, optimize, and automate business processes during migration—not just lift-and-shift." },
  { icon: <Blocks className="w-5 h-5" />, title: "Zero-Downtime Cutover", description: "Parallel-run strategy ensures your business never stops operating during the transition." },
];

export function ZohoEcosystemModule() {
  return (
    <section className="py-20" style={{ background: "linear-gradient(180deg, #FFFFFF 0%, #F8FAFC 50%, #F0F7FF 100%)" }}>
      <div className="container-custom">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full mb-6 border border-[#4DA3FF]/20 bg-[#4DA3FF]/5">
            <Blocks className="w-4 h-4 text-[#4DA3FF]" />
            <span className="text-[#0B1C3D] text-sm font-semibold">Complete Zoho Ecosystem</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-[#111827] mb-4">
            End-to-End Implementation of Zoho Apps
          </h2>
          <p className="text-[#374151] text-lg max-w-3xl mx-auto">
            We implement, customize, and integrate every Zoho suite—delivering a unified business OS tailored to your industry.
          </p>
        </motion.div>

        {/* Zoho Suites Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-16">
          {suites.map((suite, i) => (
            <motion.div
              key={suite.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
            >
              <Link
                to={suite.href}
                className="block rounded-2xl p-5 bg-white border border-[#E2E8F0] hover:shadow-lg hover:shadow-[#4DA3FF]/8 transition-all duration-300 group h-full"
              >
                <img src={suite.logo} alt={suite.name} className="w-10 h-10 mb-3 object-contain" loading="lazy" />
                <h3 className="text-sm font-bold text-[#111827] mb-1 group-hover:text-[#4DA3FF] transition-colors">{suite.name}</h3>
                <p className="text-[#374151] text-xs leading-relaxed">{suite.description}</p>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Implementation & Migration Capabilities */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <div className="rounded-2xl p-8 md:p-10 border border-[#3FE0F0]/15" style={{ background: "linear-gradient(135deg, #F0FDFF 0%, #E8F4FD 50%, #EFF6FF 100%)" }}>
            <div className="grid lg:grid-cols-2 gap-10 items-start">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-[#111827] mb-3">
                  Implementation & Migration with Deluge Mastery
                </h3>
                <p className="text-[#374151] leading-relaxed mb-6">
                  Every migration is an opportunity to re-engineer. Our team combines deep Deluge scripting expertise with API orchestration to ensure your transition is seamless, compliant, and optimized for scale.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {migrationRoutes.map(route => (
                    <Link
                      key={route.label}
                      to={route.href}
                      className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full bg-white border border-[#3FE0F0]/20 text-[#0B1C3D] hover:bg-[#3FE0F0]/10 hover:border-[#3FE0F0]/40 transition-all cursor-pointer"
                    >
                      {route.label}
                      <ExternalLink className="w-2.5 h-2.5 text-[#3FE0F0]" />
                    </Link>
                  ))}
                </div>
                <div className="flex flex-wrap gap-3">
                  <Button variant="heroLight" size="lg" asChild>
                    <Link to="/data-migration">
                      Explore Migration Services <ArrowRight className="w-4 h-4" />
                    </Link>
                  </Button>
                  <Button variant="heroSecondary" size="lg" asChild>
                    <Link to="/third-party-integrations">
                      Explore Third-Party Integrations <ArrowRight className="w-4 h-4" />
                    </Link>
                  </Button>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {migrationCapabilities.map((cap, i) => (
                  <motion.div
                    key={cap.title}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + i * 0.08 }}
                    className="rounded-xl p-4 bg-white border border-[#E2E8F0]"
                  >
                    <div className="w-9 h-9 rounded-lg bg-[#3FE0F0]/10 text-[#3FE0F0] flex items-center justify-center mb-2">
                      {cap.icon}
                    </div>
                    <h4 className="text-xs font-bold text-[#111827] mb-1">{cap.title}</h4>
                    <p className="text-[#374151] text-[11px] leading-relaxed">{cap.description}</p>
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
